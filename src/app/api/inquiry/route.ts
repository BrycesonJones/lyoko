import { Resend } from "resend";

type InquiryPayload = {
  name?: string;
  email?: string;
  role?: string;
  companyName?: string;
  companyWebsite?: string;
  companySize?: string;
  annualRevenue?: string;
  services?: string[];
  message?: string;
};

const escape = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    c === "&" ? "&amp;" :
    c === "<" ? "&lt;" :
    c === ">" ? "&gt;" :
    c === '"' ? "&quot;" : "&#39;",
  );

const row = (label: string, value?: string) =>
  value && value.trim()
    ? `<tr><td style="padding:6px 12px 6px 0;color:#888;vertical-align:top">${escape(label)}</td><td style="padding:6px 0">${escape(value)}</td></tr>`
    : "";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;

  if (!apiKey || !from || !to) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: InquiryPayload;
  try {
    body = (await request.json()) as InquiryPayload;
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const companyName = body.companyName?.trim();
  const services = (body.services ?? []).filter((s) => typeof s === "string");

  if (!name || !email || !companyName || services.length === 0) {
    return Response.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const subject = `New inquiry from ${name} (${companyName})`;
  const html = `
    <div style="font-family:system-ui,sans-serif;color:#111">
      <h2 style="margin:0 0 16px">New inquiry</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${row("Name", name)}
        ${row("Email", email)}
        ${row("Role", body.role)}
        ${row("Company", companyName)}
        ${row("Website", body.companyWebsite)}
        ${row("Company size", body.companySize)}
        ${row("Annual revenue", body.annualRevenue)}
        ${row("Services", services.join(", "))}
        ${row("Message", body.message)}
      </table>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      replyTo: email,
    });
    if (error) {
      return Response.json({ error: error.message }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Send failed.";
    return Response.json({ error: message }, { status: 502 });
  }
}
