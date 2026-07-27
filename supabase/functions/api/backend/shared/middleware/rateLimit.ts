import { CONFIG } from "../config.ts";

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const ipStore = new Map<string, RateLimitEntry>();

function cleanup(): void {
  const now = Date.now();
  for (const [ip, entry] of ipStore.entries()) {
    if (now - entry.windowStart > CONFIG.rateLimit.windowMs) {
      ipStore.delete(ip);
    }
  }
}

export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
} {
  cleanup();

  const now = Date.now();
  const windowMs = CONFIG.rateLimit.windowMs;
  const maxRequests = CONFIG.rateLimit.maxRequestsPerWindow;

  const entry = ipStore.get(ip);

  if (!entry || now - entry.windowStart > windowMs) {
    const newEntry: RateLimitEntry = { count: 1, windowStart: now };
    ipStore.set(ip, newEntry);
    return { allowed: true, remaining: maxRequests - 1, resetAt: now + windowMs };
  }

  entry.count++;
  const remaining = maxRequests - entry.count;
  const allowed = remaining >= 0;

  return { allowed, remaining: Math.max(0, remaining), resetAt: entry.windowStart + windowMs };
}

export function resetRateLimits(): void {
  ipStore.clear();
}