import { CONFIG } from "../config.ts";
import { AskTwinRequest, AskTwinResponse, ApiErrorBody } from "../types.ts";
import { ASK_TWIN_SYSTEM_PROMPT } from "../prompts.ts";
import { fetchWithTimeout } from "../utils/fetchWithTimeout.ts";
import { sanitizeString } from "../middleware/sanitize.ts";
import { corsHeaders, handleCorsPreflight } from "../cors.ts";
import { AppError, ValidationError, ExternalServiceError } from "../errors.ts";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface GroqResponse {
  choices?: Array<{ message?: { content?: string } }>;
  error?: { message?: string };
}

export function buildRequestHeaders(): Record<string, string> {
  const apiKey = CONFIG.groq.apiKey();
  return {
    "Content-Type": "application/json",
    ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
  };
}

export async function handlerAskTwin(request: Request): Promise<Response> {
  const preflight = handleCorsPreflight(request);
  if (preflight) return preflight;

  const requestId = crypto.randomUUID();
  const origin = request.headers.get("origin") || "";

  try {
    const body = await request.json() as AskTwinRequest;

    if (!body.message || typeof body.message !== "string") {
      throw new ValidationError("Message is required and must be a non-empty string.", requestId);
    }

    const sanitizedMessage = sanitizeString(body.message, 2000);

    if (!sanitizedMessage) {
      throw new ValidationError("Message contains no valid content after sanitization.", requestId);
    }

    const formattedContents: ChatMessage[] = [];

    if (body.history && Array.isArray(body.history)) {
      for (const h of body.history) {
        if (typeof h.content === "string" && h.content.length > 10000) {
          continue;
        }
        formattedContents.push({
          role: h.role === "user" ? "user" : "assistant",
          content: typeof h.content === "string" ? h.content : String(h.content),
        });
      }
    }

    formattedContents.push({ role: "user", content: sanitizedMessage });

    const apiKey = CONFIG.groq.apiKey();
    if (!apiKey) {
      throw new ExternalServiceError("GROQ_API_KEY is not configured.", requestId);
    }

    const targetUrl = CONFIG.groq.baseUrl;
    const groqRes = await fetchWithTimeout(
      targetUrl,
      {
        method: "POST",
        headers: buildRequestHeaders(),
        body: JSON.stringify({
          model: CONFIG.groq.model,
          messages: [
            { role: "system", content: ASK_TWIN_SYSTEM_PROMPT },
            ...formattedContents,
          ],
          temperature: CONFIG.groq.temperature,
          max_tokens: CONFIG.groq.maxTokens,
        }),
      },
      CONFIG.groq.timeoutMs,
      1
    );

    if (!groqRes.ok) {
      const errBody = await groqRes.json().catch(() => ({}));
      const errMsg = errBody.error?.message || `Groq API error: ${groqRes.status}`;
      throw new ExternalServiceError(errMsg, requestId);
    }

    const data: GroqResponse = await groqRes.json();
    const reply = data.choices?.[0]?.message?.content || "";

    return new Response(
      JSON.stringify({ reply }),
      {
        status: 200,
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "application/json",
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    const isAppError = err instanceof AppError;

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
    const errorBody: ApiErrorBody = {
      error: err instanceof Error ? err.message : String(err),
      ...(err instanceof AppError && err.details ? { details: err.details } : {}),
    };

    return new Response(
      JSON.stringify(errorBody),
      {
        status: statusCode,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Cache-Control": "no-store" },
      }
    );
  }
}