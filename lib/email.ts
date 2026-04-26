import { appendFile, mkdir } from "fs/promises";
import path from "path";

type EmailSection = {
  label: string;
  value: string;
};

type SendFormEmailInput = {
  subject: string;
  replyTo?: string;
  sections: EmailSection[];
};

const RESEND_API_URL = "https://api.resend.com/emails";
const FORM_DESTINATION = "hello@masonandwild.com";
const FALLBACK_SUBMISSIONS_DIR = path.join(process.cwd(), ".tmp");
const FALLBACK_SUBMISSIONS_FILE = path.join(FALLBACK_SUBMISSIONS_DIR, "form-submissions.jsonl");

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtml(sections: EmailSection[]): string {
  const rows = sections
    .map(
      (section) =>
        `<tr><td style="padding:10px 0;vertical-align:top;font-weight:600;color:#161310;">${escapeHtml(section.label)}</td><td style="padding:10px 0;color:#4C4740;white-space:pre-wrap;">${escapeHtml(section.value)}</td></tr>`
    )
    .join("");

  return `<div style="font-family:Arial,sans-serif;padding:20px;color:#161310;"><h2 style="margin:0 0 16px;">New Mason & Wild Form Entry</h2><table style="width:100%;border-collapse:collapse;">${rows}</table></div>`;
}

function buildText(sections: EmailSection[]): string {
  return sections.map((section) => `${section.label}: ${section.value}`).join("\n\n");
}

async function persistFallbackSubmission(payload: Record<string, unknown>): Promise<void> {
  await mkdir(FALLBACK_SUBMISSIONS_DIR, { recursive: true });
  await appendFile(FALLBACK_SUBMISSIONS_FILE, `${JSON.stringify(payload)}\n`, "utf8");
}

export async function sendFormEmail({
  subject,
  replyTo,
  sections,
}: SendFormEmailInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM ?? "Mason & Wild <hello@masonandwild.com>";
  const to = process.env.FORM_SUBMISSIONS_TO ?? FORM_DESTINATION;
  const html = buildHtml(sections);
  const text = buildText(sections);

  if (!apiKey) {
    const fallbackEntry = {
      event: "form.email_fallback",
      loggedAt: new Date().toISOString(),
      reason: "RESEND_API_KEY is not configured.",
      subject,
      to,
      replyTo: replyTo ?? null,
      sections,
    };

    try {
      await persistFallbackSubmission(fallbackEntry);
    } catch (error) {
      console.warn(
        JSON.stringify({
          event: "form.email_fallback_write_error",
          message: error instanceof Error ? error.message : String(error),
        })
      );
    }

    console.warn(
      JSON.stringify({
        event: "form.email_fallback_active",
        file: FALLBACK_SUBMISSIONS_FILE,
      })
    );
    console.log(JSON.stringify(fallbackEntry));
    return;
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      text,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend API error (${response.status}): ${errorBody}`);
  }
}
