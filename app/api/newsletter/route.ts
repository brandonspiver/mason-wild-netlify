import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail } from "@/lib/email";

type NewsletterPayload = {
  email: string;
  source?: string;
  website?: string;
  consent: boolean;
};

type SuccessResponse = {
  ok: true;
  message: string;
};

type ErrorResponse = {
  ok: false;
  error: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePayload(body: unknown): NewsletterPayload | null {
  if (typeof body !== "object" || body === null) return null;
  const raw = body as Record<string, unknown>;

  const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  const source = typeof raw.source === "string" ? raw.source.trim() : undefined;
  const website = typeof raw.website === "string" ? raw.website.trim() : "";
  const consent = raw.consent === true;

  if (!email || !isValidEmail(email) || !consent) return null;

  return { email, source, website, consent };
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<SuccessResponse | ErrorResponse>> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Request body could not be parsed as JSON." },
      { status: 400 }
    );
  }

  const payload = validatePayload(body);
  if (!payload) {
    return NextResponse.json(
      { ok: false, error: "Valid email and consent are required." },
      { status: 400 }
    );
  }

  if (payload.website && payload.website.length > 0) {
    return NextResponse.json(
      { ok: true, message: "Subscription received." },
      { status: 200 }
    );
  }

  try {
    await sendFormEmail({
      subject: "New Newsletter Subscription - Mason & Wild",
      replyTo: payload.email,
      sections: [
        { label: "Email", value: payload.email },
        { label: "Source", value: payload.source ?? "Unknown" },
        { label: "Marketing Consent", value: "Yes" },
        { label: "Submitted At", value: new Date().toISOString() },
      ],
    });
  } catch (err) {
    console.error(
      JSON.stringify({
        event: "newsletter.error",
        message: err instanceof Error ? err.message : String(err),
        email: payload.email,
      })
    );

    return NextResponse.json(
      { ok: false, error: "Something went wrong on our end. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { ok: true, message: "Subscription received." },
    { status: 200 }
  );
}

