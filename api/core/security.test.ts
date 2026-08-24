import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  ApiError,
  isAllowedOrigin,
  escapeHtml,
  clamp,
  checkApiRateLimit,
  getClientIp,
} from './security.ts';

describe('ApiError', () => {
  it('carries status and message', () => {
    const err = new ApiError(400, 'bad input');
    expect(err.status).toBe(400);
    expect(err.message).toBe('bad input');
    expect(err).toBeInstanceOf(Error);
  });
});

describe('isAllowedOrigin', () => {
  it('allows missing origin (same-origin / server-to-server)', () => {
    expect(isAllowedOrigin(undefined)).toBe(true);
  });

  it('allows production and www origins', () => {
    expect(isAllowedOrigin('https://farhankabir.me')).toBe(true);
    expect(isAllowedOrigin('https://www.farhankabir.me')).toBe(true);
  });

  it('allows vercel preview origins and localhost', () => {
    expect(isAllowedOrigin('https://farhanos.vercel.app')).toBe(true);
    expect(isAllowedOrigin('https://farhanos-git-feat-x.vercel.app')).toBe(true);
    expect(isAllowedOrigin('http://localhost:5173')).toBe(true);
    expect(isAllowedOrigin('http://127.0.0.1:3001')).toBe(true);
  });

  it('rejects foreign origins', () => {
    expect(isAllowedOrigin('https://evil.example.com')).toBe(false);
    expect(isAllowedOrigin('http://farhankabir.me')).toBe(false);
  });
});

describe('escapeHtml', () => {
  it('escapes all dangerous characters', () => {
    expect(escapeHtml(`<img src="x" onerror='alert(1)'>&`)).toBe(
      '&lt;img src=&quot;x&quot; onerror=&#39;alert(1)&#39;&gt;&amp;'
    );
  });

  it('coerces non-strings and handles null/undefined', () => {
    expect(escapeHtml(null)).toBe('');
    expect(escapeHtml(undefined)).toBe('');
    expect(escapeHtml(123)).toBe('123');
  });
});

describe('clamp', () => {
  it('truncates long strings', () => {
    expect(clamp('abcdef', 3)).toBe('abc');
  });

  it('returns empty string for non-string values', () => {
    expect(clamp(42 as unknown as string, 10)).toBe('');
    expect(clamp(undefined as unknown as string, 10)).toBe('');
    expect(clamp({} as unknown as string, 10)).toBe('');
  });
});

describe('checkApiRateLimit', () => {
  beforeEach(() => {
    // Deterministic buckets: unique IPs per test avoid cross-test bleed.
  });

  afterEach(() => {
    delete process.env.RATE_TEST_PASSED;
  });

  it('allows requests under the limit then rejects', () => {
    const ip = `10.0.0.${Math.floor(Math.random() * 250) + 1}`;
    // /api/contact allows 5 per minute
    const results = Array.from({ length: 6 }, () => checkApiRateLimit('/api/contact', ip));
    expect(results.slice(0, 5).every((r) => r === false)).toBe(true);
    expect(results[5]).toBe(true);
  });

  it('isolates buckets per endpoint and per IP', () => {
    const ip = `10.1.1.${Math.floor(Math.random() * 250) + 1}`;
    expect(checkApiRateLimit('/api/contact', ip)).toBe(false);
    // Different endpoint: separate bucket, still allowed.
    expect(checkApiRateLimit('/api/tts', ip)).toBe(false);
    // Same endpoint, different IP: allowed.
    expect(checkApiRateLimit('/api/contact', `${ip}.2`)).toBe(false);
  });

  it('applies the global bucket to unmetered /api routes', () => {
    const ip = `10.2.2.${Math.floor(Math.random() * 250) + 1}`;
    expect(checkApiRateLimit('/api/github-repos', ip)).toBe(false);
    expect(checkApiRateLimit('/api/github-repos', ip)).toBe(false);
  });

  it('ignores non-API paths', () => {
    expect(checkApiRateLimit('/', 'anyone')).toBe(false);
    expect(checkApiRateLimit('/assets/logo.png', 'anyone')).toBe(false);
  });
});

describe('getClientIp', () => {
  it('prefers x-forwarded-for first hop', () => {
    expect(getClientIp({ 'x-forwarded-for': '1.2.3.4, 5.6.7.8' })).toBe('1.2.3.4');
  });

  it('falls back to socket remote address', () => {
    expect(getClientIp({}, '9.9.9.9')).toBe('9.9.9.9');
  });

  it('returns "unknown" when nothing is available', () => {
    expect(getClientIp({})).toBe('unknown');
    expect(getClientIp({ 'x-forwarded-for': '' }, undefined)).toBe('unknown');
  });
});
