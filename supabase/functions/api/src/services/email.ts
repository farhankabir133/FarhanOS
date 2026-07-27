function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface EmailHtmlParams {
  name: string;
  email: string;
  subject: string;
  message: string;
  urgency: string;
  inquiryType: string;
  summaryText: string;
  suggestedAutoReply: string;
  timestamp: string;
}

export function buildContactEmailHtml(params: EmailHtmlParams): string {
  const urgencyColor =
    params.urgency === "High"
      ? "#ef4444"
      : params.urgency === "Medium"
        ? "#f59e0b"
        : "#22c55e";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>FarhanOS — Incoming Transmission</title>
</head>
<body style="margin:0;padding:0;background:#0a0b10;font-family:'Courier New',monospace;color:#e2e8f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0b10;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f1117;border:1px solid #1e2130;border-radius:16px;overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1d2e 0%,#0f1117 100%);padding:28px 32px;border-bottom:1px solid #1e2130;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:10px;letter-spacing:4px;color:#6366f1;text-transform:uppercase;font-weight:700;">FARHANOS.ME — SECURE TRANSMISSION</p>
                    <h1 style="margin:8px 0 0;font-size:22px;color:#fff;font-weight:800;letter-spacing:-0.5px;">📡 New Message Received</h1>
                    <p style="margin:4px 0 0;font-size:11px;color:#4b5563;">${escapeHtml(params.timestamp)}</p>
                  </td>
                  <td align="right" valign="top">
                    <span style="display:inline-block;padding:5px 12px;border-radius:999px;background:${urgencyColor}22;border:1px solid ${urgencyColor}44;color:${urgencyColor};font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">
                      ${escapeHtml(params.urgency)} PRIORITY
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- AI Analysis Banner -->
          <tr>
            <td style="background:#12141f;padding:16px 32px;border-bottom:1px solid #1e2130;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%">
                    <p style="margin:0;font-size:9px;color:#6366f1;letter-spacing:2px;text-transform:uppercase;font-weight:700;">INQUIRY TYPE</p>
                    <p style="margin:4px 0 0;font-size:12px;color:#a5b4fc;font-weight:600;">${escapeHtml(params.inquiryType)}</p>
                  </td>
                  <td width="50%">
                    <p style="margin:0;font-size:9px;color:#6366f1;letter-spacing:2px;text-transform:uppercase;font-weight:700;">AI DIAGNOSTICS</p>
                    <p style="margin:4px 0 0;font-size:11px;color:#94a3b8;line-height:1.5;">${escapeHtml(params.summaryText)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender Details -->
          <tr>
            <td style="padding:28px 32px 0;">
              <p style="margin:0 0 16px;font-size:9px;letter-spacing:3px;color:#475569;text-transform:uppercase;font-weight:700;">▶ SENDER PROFILE</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #1e2130;border-radius:10px;overflow:hidden;">
                <tr style="background:#12141f;">
                  <td style="padding:12px 16px;border-bottom:1px solid #1e2130;">
                    <span style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:2px;">Name</span><br/>
                    <span style="font-size:13px;color:#f1f5f9;font-weight:600;">${escapeHtml(params.name || "Anonymous")}</span>
                  </td>
                  <td style="padding:12px 16px;border-bottom:1px solid #1e2130;">
                    <span style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:2px;">Email</span><br/>
                    <a href="mailto:${escapeHtml(params.email)}" style="font-size:13px;color:#6366f1;font-weight:600;text-decoration:none;">${escapeHtml(params.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding:12px 16px;background:#12141f;">
                    <span style="font-size:9px;color:#6b7280;text-transform:uppercase;letter-spacing:2px;">Subject</span><br/>
                    <span style="font-size:13px;color:#f1f5f9;font-weight:600;">${escapeHtml(params.subject || "No Subject")}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Body -->
          <tr>
            <td style="padding:20px 32px 0;">
              <p style="margin:0 0 12px;font-size:9px;letter-spacing:3px;color:#475569;text-transform:uppercase;font-weight:700;">▶ MESSAGE PAYLOAD</p>
              <div style="background:#12141f;border:1px solid #1e2130;border-left:3px solid #6366f1;border-radius:10px;padding:18px 20px;">
                <p style="margin:0;font-size:13px;color:#cbd5e1;line-height:1.75;white-space:pre-wrap;">${escapeHtml(params.message)}</p>
              </div>
            </td>
          </tr>

          <!-- Suggested Auto-Reply -->
          <tr>
            <td style="padding:20px 32px 0;">
              <p style="margin:0 0 12px;font-size:9px;letter-spacing:3px;color:#475569;text-transform:uppercase;font-weight:700;">▶ AI-SUGGESTED REPLY DRAFT</p>
              <div style="background:#0d1a0d;border:1px solid #1e3a1e;border-left:3px solid #22c55e;border-radius:10px;padding:18px 20px;">
                 <p style="margin:0 0 8px;font-size:9px;color:#4ade80;letter-spacing:2px;text-transform:uppercase;font-weight:700;">✦ AI ANALYSIS — SUGGESTED RESPONSE</p>
                <p style="margin:0;font-size:12px;color:#86efac;line-height:1.75;font-style:italic;">${escapeHtml(params.suggestedAutoReply)}</p>
              </div>
            </td>
          </tr>

          <!-- Quick Reply CTA -->
          <tr>
            <td style="padding:24px 32px 0;" align="center">
              <a href="mailto:${escapeHtml(params.email)}?subject=Re: ${encodeURIComponent(params.subject || "Your message")}"
                style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:12px;font-weight:700;letter-spacing:1px;text-decoration:none;border-radius:8px;text-transform:uppercase;">
                ↩ Reply to ${escapeHtml(params.name || "Sender")}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px 28px;border-top:1px solid #1e2130;margin-top:24px;">
              <p style="margin:24px 0 0;font-size:9px;color:#374151;text-align:center;letter-spacing:2px;text-transform:uppercase;">
                FarhanOS Contact System · farhankabir.me · All transmissions encrypted
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}