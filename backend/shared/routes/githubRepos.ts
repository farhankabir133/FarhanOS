import { CONFIG } from "../config.ts";
import { fetchWithTimeout } from "../utils/fetchWithTimeout.ts";
import { corsHeaders, handleCorsPreflight } from "../cors.ts";
import { AppError, ExternalServiceError } from "../errors.ts";
import type { GithubRepo } from "../types.ts";

interface GithubRepoResponse {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

export async function handlerGithubRepos(request: Request): Promise<Response> {
  const preflight = handleCorsPreflight(request);
  if (preflight) return preflight;

  const origin = request.headers.get("origin") || "";

  try {
    const cached = getCache("github-repos");
    if (cached) {
      return new Response(
        JSON.stringify(cached.data),
        {
          status: 200,
          headers: {
            ...corsHeaders(origin),
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600",
            "ETag": `"md5-${hashJson(cached.data)}"`,
            "Last-Modified": new Date(cached.fetchedAt).toUTCString(),
          },
        }
      );
    }

    const apiKey = CONFIG.groq.apiKey();
    const username = CONFIG.github.username;
    const url = `https://api.github.com/users/${username}/repos?sort=stars&per_page=100`;

    const response = await fetchWithTimeout(
      url,
      {
        headers: {
          "Accept": CONFIG.github.acceptHeader,
          "User-Agent": CONFIG.github.userAgent,
          ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
        },
      },
      CONFIG.github.timeoutMs,
      1
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new ExternalServiceError("GitHub API rate limit exceeded.");
      }
      throw new ExternalServiceError(
        `GitHub API failed with status: ${response.status}`
      );
    }

    const repos: GithubRepoResponse[] = await response.json();
    const topRepos: GithubRepo[] = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
        homepage: repo.homepage,
      }));

    setCache("github-repos", topRepos, CONFIG.cache.githubReposTtlMs);

    return new Response(
      JSON.stringify(topRepos),
      {
        status: 200,
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
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

const cache = new Map<string, { data: unknown; expires: number; fetchedAt: number }>();

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