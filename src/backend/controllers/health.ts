import { Request, Response } from "express";
import { config } from "../config/env.js";
import { AppError, ExternalServiceError } from "../utils/errors.js";

export async function healthCheck(req: Request, res: Response): Promise<void> {
  const origin = req.headers.origin || "";

  const checks: Record<string, boolean> = {
    groq: false,
    github: false,
  };

  const uptime = Date.now();

  try {
    const apiKey = config.groq.apiKey;
    if (apiKey) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), config.health.timeoutMs);
      const healthRes = await fetch(config.groq.baseUrl, {
        method: "HEAD",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      checks.groq = healthRes.status < 500;
    }
  } catch {
    checks.groq = false;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.health.timeoutMs);
    const githubRes = await fetch(
      `https://api.github.com/users/${config.github.username}`,
      {
        headers: {
          "Accept": "application/vnd.github.v3+json",
          "User-Agent": "FarhanOS-Portfolio/1.0",
        },
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);
    checks.github = githubRes.ok;
  } catch {
    checks.github = false;
  }

  const allOk = Object.values(checks).every(Boolean);

  const health = {
    status: allOk ? "ok" : "degraded",
    uptime,
    version: "1.0.0",
    checks,
  };

  res.status(200).json(health);
}