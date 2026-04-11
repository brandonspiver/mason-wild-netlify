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

export async function sendFormEmail({
  subject,
  replyTo,
  sections,
}: SendFormEmailInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? "Mason & Wild <hello@masonandwild.com>";
  const to = process.env.FORM_SUBMISSIONS_TO ?? FORM_DESTINATION;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
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
      html: buildHtml(sections),
      text: buildText(sections),
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend API error (${response.status}): ${errorBody}`);
  }
}
