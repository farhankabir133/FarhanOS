import { CONFIG } from "../config/index.ts";
import { parseMediumRSS } from "../utils/rssParser.ts";
import { fetchWithTimeout } from "../utils/fetchWithTimeout.ts";
import { corsHeaders, handleCorsPreflight } from "../middleware/cors.ts";
import { AppError, ExternalServiceError } from "../errors/index.ts";

interface CacheEntry {
  data: unknown;
  expires: number;
  fetchedAt: number;
}

const cache = new Map<string, CacheEntry>();

function getCache(key: string): { data: unknown; fetchedAt: number } | null {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires) {
    cache.delete(key);
    return null;
  }
  return { data: entry.data, fetchedAt: entry.fetchedAt };
}

function setCache(key: string, data: unknown, ttlMs: number): void {
  if (cache.size >= CONFIG.cache.maxEntries) {
    const oldest = Array.from(cache.entries()).sort(
      ([, a], [, b]) => a.fetchedAt - b.fetchedAt
    )[0];
    if (oldest) cache.delete(oldest[0]);
  }
  cache.set(key, { data, expires: Date.now() + ttlMs, fetchedAt: Date.now() });
}

export async function handlerMediumStories(request: Request): Promise<Response> {
  const preflight = handleCorsPreflight(request);
  if (preflight) return preflight;

  const origin = request.headers.get("origin") || "";

  try {
    const cached = getCache("medium-stories");
    if (cached) {
      return new Response(
        JSON.stringify(cached.data),
        {
          status: 200,
          headers: {
            ...corsHeaders(origin),
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=900",
            "ETag": `"md5-${hashJson(cached.data)}"`,
            "Last-Modified": new Date(cached.fetchedAt).toUTCString(),
          },
        }
      );
    }

    const response = await fetchWithTimeout(
      CONFIG.medium.rssUrl,
      {
        headers: {
          "User-Agent": CONFIG.medium.userAgent,
        },
      },
      CONFIG.medium.timeoutMs,
      1
    );

    if (!response.ok) {
      throw new ExternalServiceError(
        `Medium RSS fetch failed with status: ${response.status}`
      );
    }

    const xmlText = await response.text();
    const stories = parseMediumRSS(xmlText);

    setCache("medium-stories", stories, CONFIG.cache.mediumStoriesTtlMs);

    return new Response(
      JSON.stringify(stories),
      {
        status: 200,
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=900",
        },
      }
    );
  } catch (err: unknown) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders(origin), "Content-Type": "application/json", "Cache-Control": "no-store" },
      }
    );
  }
}

function hashJson(data: unknown): string {
  let str = JSON.stringify(data);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}