import { getEnv } from './env.ts';
import { ApiError, fetchWithTimeout } from './security.ts';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

export interface GroqMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

function requireGroqKey(): string {
  const key = getEnv('GROQ_API_KEY');
  if (!key) {
    throw new ApiError(503, 'AI service is not configured.');
  }
  return key;
}

/**
 * Streaming chat completion. Yields content deltas as they arrive from Groq.
 */
export async function* streamGroqChat(
  messages: GroqMessage[],
  opts: { temperature?: number; maxTokens?: number; timeoutMs?: number } = {}
): AsyncGenerator<string> {
  const res = await fetchWithTimeout(
    GROQ_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${requireGroqKey()}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: opts.temperature ?? 0.7,
        max_tokens: opts.maxTokens ?? 1500,
        stream: true,
      }),
    },
    opts.timeoutMs ?? 60_000
  );

  if (!res.ok || !res.body) {
    const errData = await res.json().catch(() => ({}) as any);
    console.error('[groq] stream error:', res.status, errData?.error?.message || errData);
    throw new ApiError(503, 'AI service unavailable. Please try again shortly.');
  }

  // Robust SSE frame parser tolerating chunks split mid-line.
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  const emitFrame = (payload: string): string | null => {
    if (payload === '[DONE]') return null;
    try {
      const json = JSON.parse(payload);
      const delta = json.choices?.[0]?.delta?.content;
      return typeof delta === 'string' && delta ? delta : null;
    } catch {
      return null; // ignore malformed frames
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;
      const delta = emitFrame(trimmed.slice(5).trim());
      if (delta) yield delta;
    }
  }

  // Flush any trailing frame not terminated by a newline.
  buffer += decoder.decode();
  const trailing = buffer.trim();
  if (trailing.startsWith('data:')) {
    const delta = emitFrame(trailing.slice(5).trim());
    if (delta) yield delta;
  }
}

/** Non-streaming chat completion returning the full message content. */
export async function groqChat(
  messages: GroqMessage[],
  opts: { temperature?: number; maxTokens?: number; json?: boolean; timeoutMs?: number } = {}
): Promise<string> {
  const body: Record<string, unknown> = {
    model: 'llama-3.3-70b-versatile',
    messages,
    temperature: opts.temperature ?? 0.7,
    max_tokens: opts.maxTokens ?? 400,
  };
  if (opts.json) body.response_format = { type: 'json_object' };

  const res = await fetchWithTimeout(
    GROQ_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${requireGroqKey()}`,
      },
      body: JSON.stringify(body),
    },
    opts.timeoutMs ?? 30_000
  );

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}) as any);
    console.error('[groq] chat error:', res.status, errData?.error?.message || errData);
    throw new ApiError(503, 'AI service unavailable. Please try again shortly.');
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}
