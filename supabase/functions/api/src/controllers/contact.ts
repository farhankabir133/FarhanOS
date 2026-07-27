import { CONFIG } from "../config/index.ts";
import { buildContactAnalysisPrompt } from "../prompts/index.ts";
import { buildContactEmailHtml } from "../services/email.ts";
import { fetchWithTimeout } from "../utils/fetchWithTimeout.ts";
import { sanitizeString, sanitizeEmail, isValidEmail, sanitizeObject, validateRequired } from "../middleware/sanitize.ts";
import { corsHeaders, handleCorsPreflight } from "../middleware/cors.ts";
import { AppError, ValidationError, ExternalServiceError } from "../errors/index.ts";
import type { ContactRequest, ContactAnalysis, ContactResponse } from "../types/index.ts";

interface GroqResponse {
  choices?: Array<{ message?: { content?: string } }>;
  error?: { message?: string };
}

export async function handlerContact(request: Request): Promise<Response> {
  const preflight = handleCorsPreflight(request);
  if (preflight) return preflight;

  const origin = request.headers.get("origin") || "";
  const requestId = crypto.randomUUID();

  try {
    const rawBody = await request.json();
    const body = sanitizeObject(rawBody) as ContactRequest;

    const { valid, missing } = validateRequired(body, ["email", "message"]);
    if (!valid) {
      throw new ValidationError(
        `Missing required fields: ${missing.join(", ")}`,
        requestId
      );
    }

    if (!isValidEmail(body.email)) {
      throw new ValidationError("A valid email address is required.", requestId);
    }

    const sanitizedEmail = sanitizeEmail(body.email);
    const sanitizedName = sanitizeString(body.name || "", 100);
    const sanitizedSubject = sanitizeString(body.subject || "", 200);
    const sanitizedMessage = sanitizeString(body.message, 5000);

    console.log(`[Message Transmission]: From: ${sanitizedName || "N/A"} <${sanitizedEmail}>, Subject: ${sanitizedSubject || "N/A"}`);

    let emailStatus: { sent: boolean; id?: string; error?: string } = { sent: false };

    const apiKey = CONFIG.groq.apiKey();
    if (!apiKey) {
      throw new ExternalServiceError("GROQ_API_KEY is not configured.", requestId);
    }

    const metadataLine = body.metadata
      ? `\nMetadata: ${JSON.stringify(body.metadata)}`
      : "";

    const prompt = buildContactAnalysisPrompt({
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      metadata: body.metadata,
    });

    const targetUrl = CONFIG.groq.baseUrl;
    const groqRes = await fetchWithTimeout(
      targetUrl,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: CONFIG.groq.model,
          messages: [{ role: "user", content: prompt }],
          temperature: CONFIG.groq.temperature,
          max_tokens: CONFIG.groq.maxTokens,
        }),
      },
      CONFIG.groq.timeoutMs,
      1
    );

    if (!groqRes.ok) {
      const errBody = await groqRes.json().catch(() => ({}));
      const errMsg = errBody.error?.message || `Groq contact API error: ${groqRes.status}`;
      throw new ExternalServiceError(errMsg, requestId);
    }

    const groqData: GroqResponse = await groqRes.json();
    const analysisText = groqData.choices?.[0]?.message?.content || "{}";
    let analysis: ContactAnalysis = {};
    try {
      analysis = JSON.parse(analysisText);
    } catch (_e) {
      console.warn("[Contact] Failed to parse Groq analysis response:", analysisText);
    }

    const resendApiKey = CONFIG.resend.apiKey();
    if (resendApiKey) {
      const emailHtml = buildContactEmailHtml({
        name: sanitizedName || "Anonymous",
        email: sanitizedEmail,
        subject: sanitizedSubject || "No Subject",
        message: sanitizedMessage,
        urgency: analysis.urgency || "Medium",
        inquiryType: analysis.inquiryType || "General Inquiry",
        summaryText: analysis.summaryText || "No analysis available.",
        suggestedAutoReply: analysis.suggestedAutoReply || "",
        timestamp: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Dhaka",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }) + " (GMT+6)",
      });

      const emailSubject = `[FarhanOS] ${analysis.urgency === "High" ? "🔴" : analysis.urgency === "Medium" ? "🟡" : "🟢"} ${analysis.inquiryType || "New Message"} from ${sanitizedName || sanitizedEmail}`;

      const emailResult = await sendEmailViaResend(
        resendApiKey,
        sanitizedEmail,
        emailSubject,
        emailHtml
      );

      emailStatus = emailResult.ok
        ? { sent: true, id: emailResult.id }
        : { sent: false, error: emailResult.error };
    } else {
      console.warn("[Contact] RESEND_API_KEY not set — email notification skipped.");
      emailStatus = { sent: false, error: "RESEND_API_KEY not configured." };
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Transmission successfully established and analyzed.",
        analysis,
        emailStatus,
      }),
      {
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (err: unknown) {
    if (err instanceof SyntaxError) {
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body." }),
        {
          status: 400,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Cache-Control": "no-store" },
        }
      );
    }
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Internal server error" }),
      {
        status: statusCode,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Cache-Control": "no-store" },
      }
    );
  }
}

interface ResendResult {
  ok: boolean;
  id?: string;
  error?: string;
}

async function sendEmailViaResend(
  resendApiKey: string,
  to: string,
  subject: string,
  html: string
): Promise<ResendResult> {
  try {
    const res = await fetchWithTimeout(
      CONFIG.resend.baseUrl,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: CONFIG.resend.sender,
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
      console.error("[Resend] Email send failed:", errMsg);
      return { ok: false, error: errMsg };
    }

    console.log("[Resend] Email dispatched successfully. ID:", body.id);
    return { ok: true, id: body.id };
  } catch (err) {
    console.error("[Resend] Email send error:", err);
    return { ok: false, error: err instanceof Error ? err.message : "Unknown email error" };
  }
}