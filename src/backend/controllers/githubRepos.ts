import { Request, Response } from "express";
import { ExternalServiceError } from "../utils/errors.js";
import { fetchGithubRepos } from "../services/portfolio.js";
import { cache } from "../repositories/cache.js";

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

export async function githubRepos(req: Request, res: Response): Promise<void> {
  try {
    const cached = cache.get("github-repos");
    if (cached) {
      res.set("Cache-Control", "public, max-age=3600");
      res.set("ETag", `"md5-${hashJson(cached)}"`);
      res.set("Last-Modified", new Date().toUTCString());
      res.status(200).json(cached);
      return;
    }

    const repos = await fetchGithubRepos(false);

    res.status(200).json(repos);
  } catch (err: unknown) {
    res.status(500).json({
      error: err instanceof Error ? err.message : "Internal server error",
    });
  }
}