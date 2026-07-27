import { CONFIG } from "../config/index.ts";
import { SUMMARIZE_BRIEF_SYSTEM_PROMPT_PREFIX } from "../prompts/index.ts";
import { fetchWithTimeout } from "../utils/fetchWithTimeout.ts";
import { sanitizeString, validateRequired } from "../middleware/sanitize.ts";
import { corsHeaders, handleCorsPreflight } from "../middleware/cors.ts";
import { AppError, ValidationError, ExternalServiceError } from "../errors/index.ts";

export async function handlerSummarizeBrief(request: Request): Promise<Response> {
  const preflight = handleCorsPreflight(request);
  if (preflight) return preflight;

  const origin = request.headers.get("origin") || "";
  const requestId = crypto.randomUUID();

  try {
    const body = await request.json();

    const { valid, missing } = validateRequired(body, ["projectType", "goals"]);
    if (!valid) {
      throw new ValidationError(
        `Missing required fields: ${missing.join(", ")}`,
        requestId
      );
    }

    const sanitizedProjectType = sanitizeString(body.projectType, 100);
    const sanitizedGoals = sanitizeString(body.goals, 5000);

    if (!sanitizedProjectType || !sanitizedGoals) {
      throw new ValidationError("projectType and goals must contain valid content.", requestId);
    }

    const apiKey = CONFIG.groq.apiKey();
    if (!apiKey) {
      throw new ExternalServiceError("GROQ_API_KEY is not configured.", requestId);
    }

    const prompt = SUMMARIZE_BRIEF_SYSTEM_PROMPT_PREFIX
      .replace("{projectType}", sanitizedProjectType)
      .replace("{budget}", sanitizeString(body.budget || "", 50))
      .replace("{timeline}", sanitizeString(body.timeline || "", 50))
      .replace("{goals}", sanitizedGoals)
      .replace("{comments}", sanitizeString(body.comments || "", 1000));

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
      const errMsg = errBody.error?.message || `Groq API error: ${groqRes.status}`;
      throw new ExternalServiceError(errMsg, requestId);
    }

    const data = await groqRes.json();
    const summary = data.choices?.[0]?.message?.content || "";

    return new Response(
      JSON.stringify({ summary }),
      {
        status: 200,
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300",
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