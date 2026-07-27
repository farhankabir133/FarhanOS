import { corsHeaders, handleCorsPreflight } from "../cors.ts";
import { AppError, ValidationError } from "../errors.ts";
import { CONFIG } from "../config.ts";
import type { TtsRequest } from "../types.ts";

export async function handlerTts(request: Request): Promise<Response> {
  const preflight = handleCorsPreflight(request);
  if (preflight) return preflight;

  const origin = request.headers.get("origin") || "";
  const requestId = crypto.randomUUID();

  try {
    const body = await request.json() as TtsRequest;

    if (!body.text || typeof body.text !== "string") {
      throw new ValidationError("Text content is required.", requestId);
    }

    if (body.text.length > 5000) {
      throw new ValidationError("Text exceeds maximum length of 5000 characters.", requestId);
    }

    const apiKey = CONFIG.groq.apiKey();
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          audio: null,
          method: "client",
          message: "Server-side TTS requires GROQ_API_KEY to be configured.",
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders(origin),
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        audio: null,
        method: "client",
        message: "TTS is handled client-side via Web Speech API. Provide GROQ_API_KEY for future server-side support.",
      }),
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