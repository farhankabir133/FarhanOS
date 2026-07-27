import { CONFIG } from "./config.ts";

export function getAllowedOrigins(): string[] {
  const origins = CONFIG.cors.allowedOrigins;
  if (origins.includes("*")) return ["*"];
  return origins;
}

export function corsHeaders(
  origin: string | undefined,
  extra: Record<string, string> = {}
): Record<string, string> {
  const allowedOrigins = getAllowedOrigins();
  let allowOrigin = "*";

  if (origin && allowedOrigins.length > 0) {
    if (
      allowedOrigins.includes(origin) ||
      allowedOrigins.some((allowed) => {
        if (allowed === "*") return true;
        try {
          const url = new URL(origin);
          const allowedUrl = new URL(allowed);
          return (
            url.hostname === allowedUrl.hostname &&
            url.protocol === allowedUrl.protocol &&
            (url.port === allowedUrl.port || !allowedUrl.port)
          );
        } catch {
          return false;
        }
      })
    ) {
      allowOrigin = origin;
    }
  }

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    ...extra,
  };
}

export function handleCorsPreflight(req: Request): Response | null {
  if (req.method === "OPTIONS") {
    const origin = req.headers.get("origin") || "";
    return new Response("ok", {
      status: 204,
      headers: {
        ...corsHeaders(origin),
        "Cache-Control": "no-store",
      },
    });
  }
  return null;
}