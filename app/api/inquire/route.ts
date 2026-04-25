import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/email";

type InquiryPayload = {
  name: string;
  email: string;
  residence: string;
  contactMethod: string;
  travellers: number;
  preferredSeason: string;
  journeyLength: string;
  journeyInterest: string;
  investment: string;
  narrative: string;
  africaBefore?: string;
  specialOccasion?: string;
  considerations?: string;
  decisionTiming?: string;
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

const VALID_CONTACT_METHODS = ["email", "whatsapp", "private-call"] as const;
const VALID_PREFERRED_SEASONS = [
  "jan-mar",
  "apr-jun",
  "jul-sep",
  "oct-dec",
] as const;
const VALID_JOURNEY_LENGTHS = [
  "7-9-nights",
  "10-14-nights",
  "15-plus-nights",
  "not-sure-yet",
] as const;
const VALID_JOURNEY_INTEREST = [
  "the-classic",
  "the-intimate",
  "the-romantic",
  "the-untamed",
  "the-adventure",
  "the-private-circuit",
  "the-social-shift",
  "bespoke-not-sure",
] as const;
const VALID_INVESTMENT_LEVELS = [
  "usd-7500-10000",
  "usd-10000-15000",
  "usd-15000-25000",
  "usd-25000-plus",
  "prefer-private-discussion",
] as const;
const VALID_AFRICA_BEFORE = ["yes", "no", "not-yet-planning-seriously"] as const;
const VALID_OCCASIONS = [
  "honeymoon",
  "anniversary",
  "milestone-birthday",
  "family-celebration",
  "private-escape",
  "other",
] as const;
const VALID_DECISION_TIMINGS = [
  "immediately",
  "within-2-weeks",
  "within-1-month",
  "still-exploring",
] as const;

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_RESIDENCE_LENGTH = 160;
const MAX_NARRATIVE_LENGTH = 6000;
const MAX_CONSIDERATIONS_LENGTH = 3000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;

const requestLog = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
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

function validatePayload(body: unknown): { data: InquiryPayload | null; errors: FieldError[] } {
  const errors: FieldError[] = [];

  if (typeof body !== "object" || body === null) {
    return { data: null, errors: [{ field: "_body", message: "Invalid request body." }] };
  }

  const raw = body as Record<string, unknown>;
  const toString = (value: unknown): string =>
    typeof value === "string" ? value.trim() : "";

  const name = toString(raw.name);
  if (!name) {
    errors.push({ field: "name", message: "Name is required." });
  } else if (name.length > MAX_NAME_LENGTH) {
    errors.push({ field: "name", message: `Name must be ${MAX_NAME_LENGTH} characters or fewer.` });
  }

  const email = toString(raw.email).toLowerCase();
  if (!email) {
    errors.push({ field: "email", message: "Email address is required." });
  } else if (email.length > MAX_EMAIL_LENGTH) {
    errors.push({ field: "email", message: "Email address is too long." });
  } else if (!isValidEmail(email)) {
    errors.push({ field: "email", message: "Email address is not valid." });
  }

  const residence = toString(raw.residence);
  if (!residence) {
    errors.push({ field: "residence", message: "Country / city of residence is required." });
  } else if (residence.length > MAX_RESIDENCE_LENGTH) {
    errors.push({ field: "residence", message: `Residence must be ${MAX_RESIDENCE_LENGTH} characters or fewer.` });
  }

  const contactMethod = toString(raw.contactMethod);
  if (!contactMethod) {
    errors.push({ field: "contactMethod", message: "Preferred contact method is required." });
  } else if (!(VALID_CONTACT_METHODS as readonly string[]).includes(contactMethod)) {
    errors.push({ field: "contactMethod", message: "Unrecognized contact method." });
  }

  const travellersRaw = toString(raw.travellers);
  const travellersNum = Number(travellersRaw);
  if (!travellersRaw) {
    errors.push({ field: "travellers", message: "Number of travellers is required." });
  } else if (!Number.isInteger(travellersNum) || travellersNum < 1 || travellersNum > 20) {
    errors.push({ field: "travellers", message: "Travellers must be a whole number between 1 and 20." });
  }

  const preferredSeason = toString(raw.preferredSeason);
  if (!preferredSeason) {
    errors.push({ field: "preferredSeason", message: "Preferred season is required." });
  } else if (!(VALID_PREFERRED_SEASONS as readonly string[]).includes(preferredSeason)) {
    errors.push({ field: "preferredSeason", message: "Unrecognized preferred season." });
  }

  const journeyLength = toString(raw.journeyLength);
  if (!journeyLength) {
    errors.push({ field: "journeyLength", message: "Journey length is required." });
  } else if (!(VALID_JOURNEY_LENGTHS as readonly string[]).includes(journeyLength)) {
    errors.push({ field: "journeyLength", message: "Unrecognized journey length." });
  }

  const journeyInterest = toString(raw.journeyInterest);
  if (!journeyInterest) {
    errors.push({ field: "journeyInterest", message: "Journey of interest is required." });
  } else if (!(VALID_JOURNEY_INTEREST as readonly string[]).includes(journeyInterest)) {
    errors.push({ field: "journeyInterest", message: "Unrecognized journey of interest." });
  }

  const investment = toString(raw.investment);
  if (!investment) {
    errors.push({ field: "investment", message: "Journey investment range is required." });
  } else if (!(VALID_INVESTMENT_LEVELS as readonly string[]).includes(investment)) {
    errors.push({ field: "investment", message: "Unrecognized investment range." });
  }

  const narrative = toString(raw.narrative);
  if (!narrative) {
    errors.push({ field: "narrative", message: "Please share what kind of journey you are hoping to create." });
  } else if (narrative.length > MAX_NARRATIVE_LENGTH) {
    errors.push({ field: "narrative", message: `Narrative must be ${MAX_NARRATIVE_LENGTH} characters or fewer.` });
  }

  const africaBefore = toString(raw.africaBefore);
  if (africaBefore && !(VALID_AFRICA_BEFORE as readonly string[]).includes(africaBefore)) {
    errors.push({ field: "africaBefore", message: "Unrecognized Africa travel history value." });
  }

  const specialOccasion = toString(raw.specialOccasion);
  if (specialOccasion && !(VALID_OCCASIONS as readonly string[]).includes(specialOccasion)) {
    errors.push({ field: "specialOccasion", message: "Unrecognized occasion value." });
  }

  const decisionTiming = toString(raw.decisionTiming);
  if (decisionTiming && !(VALID_DECISION_TIMINGS as readonly string[]).includes(decisionTiming)) {
    errors.push({ field: "decisionTiming", message: "Unrecognized decision timing value." });
  }

  const considerations = toString(raw.considerations);
  if (considerations.length > MAX_CONSIDERATIONS_LENGTH) {
    errors.push({
      field: "considerations",
      message: `Considerations must be ${MAX_CONSIDERATIONS_LENGTH} characters or fewer.`,
    });
  }

  const website = typeof raw.website === "string" ? raw.website : "";
  const marketingConsent = raw.marketingConsent === true;

  if (errors.length > 0) return { data: null, errors };

  return {
    data: {
      name,
      email,
      residence,
      contactMethod,
      travellers: travellersNum,
      preferredSeason,
      journeyLength,
      journeyInterest,
      investment,
      narrative,
      africaBefore: africaBefore || undefined,
      specialOccasion: specialOccasion || undefined,
      considerations: considerations || undefined,
      decisionTiming: decisionTiming || undefined,
      marketingConsent,
      website,
    },
    errors: [],
  };
}

async function handleSubmission(inquiry: InquiryPayload): Promise<void> {
  const submittedAt = new Date().toISOString();

  console.log(
    JSON.stringify({
      event: "inquiry.received",
      submittedAt,
      contactMethod: inquiry.contactMethod,
      travellers: inquiry.travellers,
      preferredSeason: inquiry.preferredSeason,
      journeyLength: inquiry.journeyLength,
      journeyInterest: inquiry.journeyInterest,
      investment: inquiry.investment,
      narrativeLength: inquiry.narrative.length,
    })
  );

  await sendFormEmail({
    subject: "New Private Enquiry - Mason & Wild",
    replyTo: inquiry.email,
    sections: [
      { label: "Submitted At", value: submittedAt },
      { label: "Full Name", value: inquiry.name },
      { label: "Email", value: inquiry.email },
      { label: "Country / City of Residence", value: inquiry.residence },
      { label: "Preferred Contact Method", value: inquiry.contactMethod },
      { label: "Number of Travellers", value: String(inquiry.travellers) },
      { label: "Preferred Season", value: inquiry.preferredSeason },
      { label: "Approximate Journey Length", value: inquiry.journeyLength },
      { label: "Journey of Interest", value: inquiry.journeyInterest },
      { label: "Journey Investment per Person", value: inquiry.investment },
      { label: "Journey Brief", value: inquiry.narrative },
      { label: "Travelled to Africa Before", value: inquiry.africaBefore ?? "Not provided" },
      { label: "Special Occasion", value: inquiry.specialOccasion ?? "Not provided" },
      {
        label: "Privacy / Accessibility / Dietary / Medical / Safety Considerations",
        value: inquiry.considerations ?? "Not provided",
      },
      { label: "Decision Timing", value: inquiry.decisionTiming ?? "Not provided" },
      { label: "Marketing Consent", value: inquiry.marketingConsent ? "Yes" : "No" },
    ],
  });
}

export async function POST(request: NextRequest): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
  if (isRateLimited(request)) {
    return NextResponse.json<ErrorResponse>(
      { ok: false, error: "Too many requests. Please wait a few minutes and try again." },
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
    return NextResponse.json<SuccessResponse>({ ok: true, message: "Enquiry received." }, { status: 200 });
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
      { ok: false, error: "Something went wrong on our end. Please try again or write to us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json<SuccessResponse>(
    { ok: true, message: "Enquiry received. We will reply with next steps shortly." },
    { status: 200 }
  );
}

export function GET(): NextResponse<ErrorResponse> {
  return NextResponse.json<ErrorResponse>(
    { ok: false, error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } }
  );
}

