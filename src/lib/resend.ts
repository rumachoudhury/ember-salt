type EmailMessage = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendEmail({ to, subject, text, replyTo }: EmailMessage) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !from) {
    throw new Error(
      "RESEND_API_KEY and RESEND_FROM must be configured to send email.",
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  const result = (await response.json()) as { message?: string; name?: string };
  if (!response.ok) {
    throw new Error(
      result.message ?? result.name ?? "Resend could not send the email.",
    );
  }
}
