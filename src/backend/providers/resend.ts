import { fetchClient } from "../utils/fetchClient.js";
import { config } from "../config/env.js";

interface ResendResult {
  ok: boolean;
  id?: string;
  error?: string;
}

export async function sendEmail(
  to: string,
  subject: string,
  html: string
): Promise<ResendResult> {
  try {
    const resendApiKey = config.resend.apiKey;
    if (!resendApiKey) {
      return { ok: false, error: "RESEND_API_KEY not configured." };
    }

    const res = await fetchClient(
      config.resend.baseUrl,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: config.resend.sender,
          to: [to],
          subject,
          html,
        }),
      },
      15000,
      1
    );

    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      const errMsg = body.message || body.error || JSON.stringify(body);
      return { ok: false, error: errMsg };
    }

    return { ok: true, id: body.id };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown email error";
    return { ok: false, error: msg };
  }
}