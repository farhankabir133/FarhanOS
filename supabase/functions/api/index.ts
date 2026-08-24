// Supabase Edge Function: api
// Thin Deno adapter over the shared backend core (api/core/*).
// Business logic lives there; this file only maps Web Fetch <-> core handlers.

import {
  ApiError,
  streamAskTwin,
  validateAskTwinInput,
  summarizeBrief,
  ttsPlaceholder,
  getMediumStories,
  getGithubRepos,
  processContact,
} from '../../../api/core/handlers.ts';
import { isAllowedOrigin, checkApiRateLimit, getClientIp, etagMatches } from '../../../api/core/security.ts';

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const path = url.pathname.replace(/\/functions\/v1\/api$/, '') || '/';
  const origin = req.headers.get('origin') ?? undefined;

  const headers = new Headers({ 'Cache-Control': 'no-store' });
  if (isAllowedOrigin(origin)) {
    headers.set('Access-Control-Allow-Origin', origin ?? '*');
    headers.set('Vary', 'Origin');
  }
  headers.set('Access-Control-Allow-Headers', 'content-type');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  try {
    const clientIp = getClientIp(Object.fromEntries(req.headers.entries()));

    if (checkApiRateLimit(path, clientIp)) {
      return json(headers, { error: 'Too many requests. Please slow down.' }, 429);
    }

    if (path.startsWith('/api/ask-twin') && req.method === 'POST') {
      const body = await req.json().catch(() => ({}));
      try {
        // Validate before opening the SSE stream so bad input gets a proper 400.
        validateAskTwinInput(body?.message, body?.history);
      } catch (err) {
        if (err instanceof ApiError) {
          return json(headers, { error: err.message }, err.status);
        }
        throw err;
      }
      const sseHeaders = new Headers(headers);
      sseHeaders.set('Content-Type', 'text/event-stream');
      sseHeaders.set('X-Accel-Buffering', 'no');

      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          try {
            for await (const delta of streamAskTwin(body?.message, body?.history)) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta })}\n\n`));
            }
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          } catch (err) {
            const message =
              err instanceof ApiError ? err.message : 'AI service unavailable. Please try again shortly.';
            console.error('[ask-twin] stream failed:', err);
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`));
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          } finally {
            controller.close();
          }
        },
      });
      return new Response(stream, { headers: sseHeaders });
    }

    if (path.startsWith('/api/tts') && req.method === 'POST') {
      return json(headers, ttsPlaceholder());
    }

    if (path.startsWith('/api/summarize-brief') && req.method === 'POST') {
      const body = await req.json().catch(() => null);
      return json(headers, await summarizeBrief(body));
    }

    if (path.startsWith('/api/medium-stories') && req.method === 'GET') {
      const entry = await getMediumStories();
      applyValidators(headers, entry, 'public, max-age=900');
      if (etagMatches(req.headers.get('if-none-match'), entry.etag)) {
        return new Response(null, { status: 304, headers });
      }
      return json(headers, entry.data);
    }

    if (path.startsWith('/api/github-repos') && req.method === 'GET') {
      const entry = await getGithubRepos();
      applyValidators(headers, entry, 'public, max-age=3600');
      if (etagMatches(req.headers.get('if-none-match'), entry.etag)) {
        return new Response(null, { status: 304, headers });
      }
      return json(headers, entry.data);
    }

    if (path.startsWith('/api/contact') && req.method === 'POST') {
      const body = await req.json().catch(() => null);
      const result = await processContact(body);
      return json(headers, {
        success: true,
        message: 'Transmission successfully established and analyzed.',
        ...result,
      });
    }

    return json(headers, { error: 'API endpoint not found' }, 404);
  } catch (err) {
    if (err instanceof ApiError) {
      return json(headers, { error: err.message }, err.status);
    }
    console.error('API error:', err);
    return json(headers, { error: 'Internal server error. Please try again later.' }, 500);
  }
});

function json(baseHeaders: Headers, body: unknown, status = 200): Response {
  const h = new Headers(baseHeaders);
  h.set('Content-Type', 'application/json');
  return new Response(JSON.stringify(body), { status, headers: h });
}

function applyValidators(
  baseHeaders: Headers,
  entry: { etag: string; fetchedAt: number },
  cacheControl: string
): void {
  baseHeaders.set('Cache-Control', cacheControl);
  baseHeaders.set('ETag', entry.etag);
  baseHeaders.set('Last-Modified', new Date(entry.fetchedAt).toUTCString());
}
