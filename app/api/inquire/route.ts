import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/email";

type InquiryPayload = {
  name: string;
  email: string;
  duration?: string;
  narrative: string;
  marketingConsent?: boolean;
  website?: string;
};

type FieldError = {
  field: string;
  message: string;
};

type SuccessResponse = {
  ok: true;
  message: string;
};

type ErrorResponse = {
  ok: false;
  error: string;
  fields?: FieldError[];
};

const VALID_DURATIONS = ["7-10", "14-21", "sabbatical"] as const;
type ValidDuration = (typeof VALID_DURATIONS)[number];

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_NARRATIVE_LENGTH = 4000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;

const requestLog = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(request: NextRequest): boolean {
  const ip = getClientIp(request);
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const history = requestLog.get(ip) ?? [];
  const recent = history.filter((ts) => ts >= windowStart);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return false;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePayload(body: unknown): {
  data: InquiryPayload | null;
  errors: FieldError[];
} {
  const errors: FieldError[] = [];

  if (typeof body !== "object" || body === null) {
    return { data: null, errors: [{ field: "_body", message: "Invalid request body." }] };
  }

  const raw = body as Record<string, unknown>;

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  if (!name) {
    errors.push({ field: "name", message: "Name is required." });
  } else if (name.length > MAX_NAME_LENGTH) {
    errors.push({ field: "name", message: `Name must be ${MAX_NAME_LENGTH} characters or fewer.` });
  }

  const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  if (!email) {
    errors.push({ field: "email", message: "Email address is required." });
  } else if (email.length > MAX_EMAIL_LENGTH) {
    errors.push({ field: "email", message: "Email address is too long." });
  } else if (!isValidEmail(email)) {
    errors.push({ field: "email", message: "Email address is not valid." });
  }

  const rawDuration = typeof raw.duration === "string" ? raw.duration.trim() : "";
  const duration: ValidDuration | undefined =
    rawDuration && (VALID_DURATIONS as readonly string[]).includes(rawDuration)
      ? (rawDuration as ValidDuration)
      : undefined;

  if (rawDuration && !duration) {
    errors.push({ field: "duration", message: "Unrecognized duration value." });
  }

  const narrative = typeof raw.narrative === "string" ? raw.narrative.trim() : "";
  if (!narrative) {
    errors.push({ field: "narrative", message: "Please tell us what you are looking for." });
  } else if (narrative.length > MAX_NARRATIVE_LENGTH) {
    errors.push({
      field: "narrative",
      message: `Message must be ${MAX_NARRATIVE_LENGTH} characters or fewer.`,
    });
  }

  const website = typeof raw.website === "string" ? raw.website : "";
  const marketingConsent = raw.marketingConsent === true;

  if (errors.length > 0) {
    return { data: null, errors };
  }

  return {
    data: { name, email, duration, narrative, marketingConsent, website },
    errors: [],
  };
}

async function handleSubmission(inquiry: InquiryPayload): Promise<void> {
  const submittedAt = new Date().toISOString();

  console.log(
    JSON.stringify({
      event: "inquiry.received",
      submittedAt,
      duration: inquiry.duration ?? null,
      narrativeLength: inquiry.narrative.length,
    })
  );

  await sendFormEmail({
    subject: "New Enquiry Submission - Mason & Wild",
    replyTo: inquiry.email,
    sections: [
      { label: "Submitted At", value: submittedAt },
      { label: "Name", value: inquiry.name },
      { label: "Email", value: inquiry.email },
      { label: "Duration", value: inquiry.duration ?? "Not provided" },
      { label: "Narrative", value: inquiry.narrative },
      {
        label: "Marketing Consent",
        value: inquiry.marketingConsent ? "Yes" : "No",
      },
    ],
  });
}

export async function POST(request: NextRequest): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
  if (isRateLimited(request)) {
    return NextResponse.json<ErrorResponse>(
      {
        ok: false,
        error: "Too many requests. Please wait a few minutes and try again.",
      },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ErrorResponse>(
      { ok: false, error: "Request body could not be parsed as JSON." },
      { status: 400 }
    );
  }

  const honeypot =
    typeof body === "object" && body !== null && "website" in body
      ? (body as Record<string, unknown>).website
      : undefined;

  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.json<SuccessResponse>(
      { ok: true, message: "Enquiry received." },
      { status: 200 }
    );
  }

  const { data, errors } = validatePayload(body);

  if (errors.length > 0 || data === null) {
    return NextResponse.json<ErrorResponse>(
      {
        ok: false,
        error: "Validation failed. Please check the fields below.",
        fields: errors,
      },
      { status: 400 }
    );
  }

  try {
    await handleSubmission(data);
  } catch (err) {
    console.error(
      JSON.stringify({
        event: "inquiry.error",
        message: err instanceof Error ? err.message : String(err),
      })
    );

    return NextResponse.json<ErrorResponse>(
      {
        ok: false,
        error: "Something went wrong on our end. Please try again or write to us directly.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json<SuccessResponse>(
    { ok: true, message: "Enquiry received. We will respond within 24-48 hours." },
    { status: 200 }
  );
}

export function GET(): NextResponse<ErrorResponse> {
  return NextResponse.json<ErrorResponse>(
    { ok: false, error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } }
  );
}


