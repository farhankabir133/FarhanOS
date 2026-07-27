import { handlerAskTwin } from "./shared/routes/askTwin.ts";
import { handlerTts } from "./shared/routes/tts.ts";
import { handlerSummarizeBrief } from "./shared/routes/summarizeBrief.ts";
import { handlerMediumStories } from "./shared/routes/mediumStories.ts";
import { handlerGithubRepos } from "./shared/routes/githubRepos.ts";
import { handlerContact } from "./shared/routes/contact.ts";
import { handlerHealth } from "./shared/routes/health.ts";
import { corsHeaders } from "./shared/cors.ts";
import { CONFIG } from "./shared/config.ts";

type RouteHandler = (req: Request) => Promise<Response> | Response;

interface RouteEntry {
  method: string;
  handler: RouteHandler;
}

const ROUTES: Record<string, RouteEntry> = {
  "/health": { method: "GET", handler: handlerHealth },
  "/medium-stories": { method: "GET", handler: handlerMediumStories },
  "/github-repos": { method: "GET", handler: handlerGithubRepos },
  "/ask-twin": { method: "POST", handler: handlerAskTwin },
  "/tts": { method: "POST", handler: handlerTts },
  "/summarize-brief": { method: "POST", handler: handlerSummarizeBrief },
  "/contact": { method: "POST", handler: handlerContact },
};

function extractRoute(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (segments[0] === "functions" && segments[1] === "v1") {
    segments.splice(0, 2);
  }
  if (segments[0] === "api") {
    segments.splice(0, 1);
  }
  if (segments.length > 0 && segments[segments.length - 1] === "") {
    segments.pop();
  }
  return "/" + segments.join("/");
}

export default async function serve(request: Request): Promise<Response> {
  const origin = request.headers.get("origin") || "";

  if (request.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        ...corsHeaders(origin),
        "Cache-Control": "no-store",
      },
    });
  }

  const url = new URL(request.url);
  const route = extractRoute(url.pathname);
  const routeConfig = ROUTES[route];

  if (!routeConfig) {
    return new Response(
      JSON.stringify({ error: `Endpoint not found: ${route}` }),
      {
        status: 404,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Cache-Control": "no-store" },
      }
    );
  }

  if (routeConfig.method !== request.method) {
    return new Response(
      JSON.stringify({ error: `Method ${request.method} not allowed for ${route}` }),
      {
        status: 405,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Cache-Control": "no-store" },
      }
    );
  }

  try {
    const response = await routeConfig.handler(request);
    return response;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return new Response(
      JSON.stringify({ error: message }),
      {
        status: 500,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Cache-Control": "no-store" },
      }
    );
  }
}