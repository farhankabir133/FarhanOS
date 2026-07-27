import { CONFIG } from "../config/index.ts";
import { corsHeaders, handleCorsPreflight } from "../middleware/cors.ts";

export interface HealthCheck {
  status: "ok" | "degraded" | "error";
  uptime: number;
  version: string;
  checks: Record<string, boolean>;
}

export async function handlerHealth(request: Request): Promise<Response> {
  const preflight = handleCorsPreflight(request);
  if (preflight) return preflight;

  const origin = request.headers.get("origin") || "";

  const checks: Record<string, boolean> = {
    groq: false,
    github: false,
  };

  const uptime = typeof process !== "undefined" && process.uptime
    ? Math.floor(process.uptime() * 1000)
    : Date.now();

  try {
    const apiKey = CONFIG.groq.apiKey();
    if (apiKey) {
      const res = await fetch(CONFIG.groq.baseUrl, {
        method: "HEAD",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        signal: AbortSignal.timeout(CONFIG.health.timeoutMs),
      });
      checks.groq = res.status < 500;
    }
  } catch {
    checks.groq = false;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${CONFIG.github.username}`,
      {
        headers: {
          "Accept": CONFIG.github.acceptHeader,
          "User-Agent": CONFIG.github.userAgent,
        },
        signal: AbortSignal.timeout(CONFIG.health.timeoutMs),
      }
    );
    checks.github = res.ok;
  } catch {
    checks.github = false;
  }

  const allOk = Object.values(checks).every(Boolean);

  const health: HealthCheck = {
    status: allOk ? "ok" : "degraded",
    uptime,
    version: "1.0.0",
    checks,
  };

  return new Response(
    JSON.stringify(health),
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