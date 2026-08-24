/**
 * Tiny in-memory cache with precomputed validators.
 * Per warm instance only — the CDN layer does the heavy caching in production.
 */

export interface CacheEntry<T> {
  data: T;
  etag: string;
  fetchedAt: number;
  expires: number;
}

const cache = new Map<string, CacheEntry<unknown>>();

/**
 * FNV-1a string hash (hex). Runtime-agnostic replacement for md5-based ETags;
 * ETags only need to be stable and collision-resistant enough for cache
 * validation, not cryptographic.
 */
export function hashTag(input: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return `"${(h >>> 0).toString(16).padStart(8, '0')}-${input.length.toString(16)}"`;
}

export function setCache<T>(key: string, data: T, ttlMs: number): void {
  cache.set(key, {
    data,
    etag: hashTag(JSON.stringify(data)),
    fetchedAt: Date.now(),
    expires: Date.now() + ttlMs,
  });
}

export function getCache<T>(key: string): CacheEntry<T> | null {
  const entry = cache.get(key) as CacheEntry<T> | undefined;
  if (!entry) return null;
  if (Date.now() > entry.expires) {
    cache.delete(key);
    return null;
  }
  return entry;
}

/**
 * RFC-compliant If-None-Match comparison (handles W/ prefixes and lists).
 */
export function etagMatches(ifNoneMatch: unknown, etag: string): boolean {
  if (typeof ifNoneMatch !== 'string' || ifNoneMatch.length === 0) return false;
  if (ifNoneMatch.trim() === '*') return true;
  return ifNoneMatch
    .split(',')
    .map((t) => t.trim().replace(/^W\//, ''))
    .includes(etag);
}
