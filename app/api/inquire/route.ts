import { NextRequest, NextResponse } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────

// Matches the FormState in components/inquiry/InquiryForm.tsx exactly.
// duration is optional — the toggle is not required on the form.
type InquiryPayload = {
  name:      string;
  email:     string;
  duration?: string;
  narrative: string;
  // Honeypot — rendered as a hidden field in the form, never filled by humans.
  // Any submission with a non-empty value is silently discarded.
  website?:  string;
};

type FieldError = {
  field:   string;
  message: string;
};

type SuccessResponse = {
  ok:      true;
  message: string;
};

type ErrorResponse = {
  ok:      false;
  error:   string;
  fields?: FieldError[];
};

// ─── Constants ────────────────────────────────────────────────────────────────

const VALID_DURATIONS = ["7-10", "14-21", "sabbatical"] as const;
type ValidDuration = typeof VALID_DURATIONS[number];

const MAX_NAME_LENGTH      = 120;
const MAX_EMAIL_LENGTH     = 254; // RFC 5321 maximum
const MAX_NARRATIVE_LENGTH = 4000;

// ─── Validation ───────────────────────────────────────────────────────────────

function isValidEmail(value: string): boolean {
  // RFC 5322 simplified — rejects obviously malformed addresses
  // without being overly restrictive for international addresses.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePayload(body: unknown): {
  data:   InquiryPayload | null;
  errors: FieldError[];
} {
  const errors: FieldError[] = [];

  if (typeof body !== "object" || body === null) {
    return { data: null, errors: [{ field: "_body", message: "Invalid request body." }] };
  }

  const raw = body as Record<string, unknown>;

  // ── name ──
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  if (!name) {
    errors.push({ field: "name", message: "Name is required." });
  } else if (name.length > MAX_NAME_LENGTH) {
    errors.push({ field: "name", message: `Name must be ${MAX_NAME_LENGTH} characters or fewer.` });
  }

  // ── email ──
  const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  if (!email) {
    errors.push({ field: "email", message: "Email address is required." });
  } else if (email.length > MAX_EMAIL_LENGTH) {
    errors.push({ field: "email", message: "Email address is too long." });
  } else if (!isValidEmail(email)) {
    errors.push({ field: "email", message: "Email address is not valid." });
  }

  // ── duration (optional) ──
  const rawDuration = typeof raw.duration === "string" ? raw.duration.trim() : "";
  const duration: ValidDuration | undefined =
    rawDuration && (VALID_DURATIONS as readonly string[]).includes(rawDuration)
      ? (rawDuration as ValidDuration)
      : undefined;

  // Reject unrecognised values that are not empty — indicates tampered payload
  if (rawDuration && !duration) {
    errors.push({ field: "duration", message: "Unrecognised duration value." });
  }

  // ── narrative ──
  const narrative = typeof raw.narrative === "string" ? raw.narrative.trim() : "";
  if (!narrative) {
    errors.push({ field: "narrative", message: "Please tell us what you are looking for." });
  } else if (narrative.length > MAX_NARRATIVE_LENGTH) {
    errors.push({
      field:   "narrative",
      message: `Message must be ${MAX_NARRATIVE_LENGTH} characters or fewer.`,
    });
  }

  // ── honeypot ──
  // Not validated as an error — checked separately before this call.
  const website = typeof raw.website === "string" ? raw.website : "";

  if (errors.length > 0) {
    return { data: null, errors };
  }

  return {
    data: { name, email, duration, narrative, website },
    errors: [],
  };
}

// ─── Submission handler ───────────────────────────────────────────────────────
// Encapsulates everything that should happen with a clean, validated inquiry.
// Replace the console.log calls here with email / CRM integrations when ready.
// The function signature and return type should not need to change.

async function handleSubmission(inquiry: InquiryPayload): Promise<void> {
  const submittedAt = new Date().toISOString();

  // Structured log — easy to grep, easy to pipe into a log aggregator.
  console.log(
    JSON.stringify({
      event:       "inquiry.received",
      submittedAt,
      name:        inquiry.name,
      email:       inquiry.email,
      duration:    inquiry.duration ?? null,
      narrativeLength: inquiry.narrative.length,
      // Do not log the full narrative — it may contain personal information.
      // Log enough to confirm receipt and triage without storing sensitive data.
    })
  );

  // ── Plug-in points ────────────────────────────────────────────────────────
  // Each integration below is isolated so any one can fail independently.

  // 1. Notification email to Zannon / the team
  //    e.g. await sendNotificationEmail({ inquiry, submittedAt });

  // 2. Confirmation email to the inquirer
  //    e.g. await sendConfirmationEmail({ to: inquiry.email, name: inquiry.name });

  // 3. CRM or Airtable record creation
  //    e.g. await createCrmRecord({ inquiry, submittedAt });

  // 4. Slack notification
  //    e.g. await postToSlack({ inquiry, submittedAt });
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
  // ── Parse body ──
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ErrorResponse>(
      { ok: false, error: "Request body could not be parsed as JSON." },
      { status: 400 }
    );
  }

  // ── Honeypot check ──
  // Bots filling all fields are silently accepted — a 200 with no side-effects.
  // This avoids giving bots confirmation that the honeypot was triggered.
  const honeypot =
    typeof body === "object" && body !== null && "website" in body
      ? (body as Record<string, unknown>).website
      : undefined;

  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    // Silent success — bot sees a normal response, learns nothing useful.
    return NextResponse.json<SuccessResponse>(
      { ok: true, message: "Inquiry received." },
      { status: 200 }
    );
  }

  // ── Validate ──
  const { data, errors } = validatePayload(body);

  if (errors.length > 0 || data === null) {
    return NextResponse.json<ErrorResponse>(
      {
        ok:     false,
        error:  "Validation failed. Please check the fields below.",
        fields: errors,
      },
      { status: 400 }
    );
  }

  // ── Process ──
  try {
    await handleSubmission(data);
  } catch (err) {
    // Log the raw error server-side; return a safe generic message to the client.
    console.error(
      JSON.stringify({
        event:   "inquiry.error",
        message: err instanceof Error ? err.message : String(err),
        email:   data.email, // retain for support triage
      })
    );

    return NextResponse.json<ErrorResponse>(
      {
        ok:    false,
        error: "Something went wrong on our end. Please try again or write to us directly.",
      },
      { status: 500 }
    );
  }

  // ── Success ──
  return NextResponse.json<SuccessResponse>(
    { ok: true, message: "Inquiry received. We will respond within 48–72 hours." },
    { status: 200 }
  );
}

// ─── Method guard ─────────────────────────────────────────────────────────────
// Next.js App Router only calls the exported method handlers, but an explicit
// 405 on unsupported methods is good hygiene and makes the API contract clear.

export function GET(): NextResponse<ErrorResponse> {
  return NextResponse.json<ErrorResponse>(
    { ok: false, error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
