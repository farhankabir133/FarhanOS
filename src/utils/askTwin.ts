import { getApiBaseUrl } from './apiConfig';

export interface AskTwinHistoryMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AskTwinOptions {
  message: string;
  history: AskTwinHistoryMessage[];
  onDelta?: (fullText: string) => void;
  signal?: AbortSignal;
}

/**
 * Parses an SSE byte stream, tolerating frames split across read() chunks.
 * Returns the accumulated text of all `delta` fields.
 */
async function consumeSseStream(
  body: ReadableStream<Uint8Array>,
  onDelta?: (fullText: string) => void
): Promise<string> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let streamed = '';
  let sseBuffer = '';
  let pendingData = '';

  // Batch onDelta calls — Groq emits tokens faster than React should re-render.
  const FLUSH_MS = 60;
  let lastFlush = 0;
  let flushTimer: ReturnType<typeof setTimeout> | null = null;
  const flushNow = () => {
    if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
    lastFlush = Date.now();
    onDelta?.(streamed);
  };

  const handleData = (payload: string) => {
    if (payload === '[DONE]') return;
    try {
      const json = JSON.parse(payload);
      const delta = json.delta;
      if (typeof delta === 'string' && delta) {
        streamed += delta;
        if (Date.now() - lastFlush >= FLUSH_MS) {
          flushNow();
        } else if (!flushTimer) {
          flushTimer = setTimeout(flushNow, FLUSH_MS);
        }
      }
    } catch {
      // ignore malformed / partial frame
    }
  };

  const processChunk = (text: string, flush = false) => {
    sseBuffer += text;
    let idx;
    while ((idx = sseBuffer.indexOf('\n')) !== -1) {
      let line = sseBuffer.slice(0, idx);
      sseBuffer = sseBuffer.slice(idx + 1);
      if (line.endsWith('\r')) line = line.slice(0, -1);
      if (line.startsWith('data:')) {
        pendingData += line.slice(5).trim();
      } else if (line === '' && pendingData) {
        handleData(pendingData);
        pendingData = '';
      }
    }
    if (flush && pendingData) {
      handleData(pendingData);
      pendingData = '';
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    processChunk(decoder.decode(value, { stream: true }));
  }
  processChunk(decoder.decode(), true);

  // Guarantee the final text is delivered even if a flush was pending.
  if (onDelta && streamed) flushNow();

  return streamed;
}

/**
 * Calls /api/ask-twin and transparently handles both the SSE streaming
 * contract (Vercel/Express backends) and the legacy JSON `{ reply }`
 * contract. Returns the full reply text. Throws on HTTP errors so callers
 * can fall back to local canned responses.
 */
export async function askTwin({
  message,
  history,
  onDelta,
  signal,
}: AskTwinOptions): Promise<string> {
  const res = await fetch(`${getApiBaseUrl()}/api/ask-twin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history }),
    signal,
  });

  if (!res.ok) {
    let errMsg = 'Neural link unstable.';
    try {
      const d = await res.json();
      errMsg = d.error || errMsg;
    } catch {
      // non-JSON error body; keep default message
    }
    throw new Error(errMsg);
  }

  const contentType = res.headers.get('content-type') || '';

  if (contentType.includes('text/event-stream') && res.body) {
    const streamed = await consumeSseStream(res.body, onDelta);
    if (streamed) return streamed;
    throw new Error('Empty response stream.');
  }

  // Legacy buffered contract (Supabase edge variant).
  const data = await res.json();
  if (data.reply) return data.reply as string;
  throw new Error(data.error || 'General twin system fault.');
}
