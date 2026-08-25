import { getEnv } from './env.js';
import { ApiError, fetchWithTimeout } from './security.js';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const MODEL_DEFAULT = 'openai/gpt-oss-120b';
export const MODEL_FAST = 'openai/gpt-oss-20b';

export interface GroqToolCall {
  id: string;
  type: 'function';
  function: { name: string; arguments: string };
}

export interface GroqMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  tool_call_id?: string;
  tool_calls?: GroqToolCall[];
}

export interface GroqToolSchema {
  type: 'function';
  function: { name: string; description: string; parameters: Record<string, unknown> };
}

/** One streaming turn: text deltas as they arrive, then any tool calls. */
export type GroqStreamEvent =
  | { type: 'text'; delta: string }
  | { type: 'tool_calls'; toolCalls: GroqToolCall[] };

export interface GroqStreamOpts {
  temperature?: number;
  maxTokens?: number;
  timeoutMs?: number;
  tools?: GroqToolSchema[];
  model?: string;
  /** 'required' forces the model to emit at least one tool call this turn. */
  toolChoice?: 'auto' | 'required';
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Opens the streaming completion, transparently retrying once on 429 —
 * free-tier TPM windows can be a few seconds wide and a single bounded
 * wait rescues most collisions without ever duplicating emitted tokens.
 */
async function openGroqStreamWithRetry(
  messages: GroqMessage[],
  body: Record<string, unknown>,
  timeoutMs: number,
  attempts = 2
): Promise<Response> {
  let lastRes: Response | null = null;
  for (let attempt = 0; attempt < attempts; attempt++) {
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
      timeoutMs
    );
    if (res.ok) return res;
    lastRes = res;
    const retryAfter = Number(res.headers.get('retry-after'));
    if (res.status === 429 && attempt < attempts - 1) {
      await sleep(Number.isFinite(retryAfter) && retryAfter > 0 ? Math.min(retryAfter * 1000, 6000) : 4200);
      continue;
    }
    break;
  }
  return lastRes!;
}

function requireGroqKey(): string {
  const key = getEnv('GROQ_API_KEY');
  if (!key) {
    throw new ApiError(503, 'AI service is not configured.');
  }
  return key;
}

/**
 * Streaming chat completion. Yields text deltas as they arrive and, when the
 * model requests tools, a final `tool_calls` event for the turn.
 */
export async function* streamGroqChatEvents(
  messages: GroqMessage[],
  opts: GroqStreamOpts = {}
): AsyncGenerator<GroqStreamEvent> {
  const body: Record<string, unknown> = {
    model: opts.model || MODEL_DEFAULT,
    messages,
    temperature: opts.temperature ?? 0.7,
    max_tokens: opts.maxTokens ?? 1500,
    stream: true,
  };
  if (opts.tools && opts.tools.length > 0) {
    body.tools = opts.tools;
    body.tool_choice = opts.toolChoice === 'required' ? 'required' : 'auto';
  }

  const res = await openGroqStreamWithRetry(messages, body, opts.timeoutMs ?? 60_000);

  if (!res.ok || !res.body) {
    const errData = await res.json().catch(() => ({}) as any);
    console.error('[groq] stream error:', res.status, errData?.error?.message || errData);
    throw new ApiError(503, 'AI service unavailable. Please try again shortly.');
  }

  // Robust SSE frame parser tolerating chunks split mid-line.
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  // OpenAI-style tool_calls arrive fragmented by index; merge before emitting.
  const toolAcc = new Map<number, { id: string; name: string; args: string }>();

  const emitFrame = (payload: string): string | null => {
    if (payload === '[DONE]') return null;
    try {
      const json = JSON.parse(payload);
      const delta = json.choices?.[0]?.delta;
      if (!delta) return null;

      const fragments = delta.tool_calls;
      if (Array.isArray(fragments)) {
        for (const frag of fragments) {
          const idx = Number.isInteger(frag?.index) ? frag.index : 0;
          const slot = toolAcc.get(idx) ?? { id: '', name: '', args: '' };
          if (typeof frag?.id === 'string' && frag.id) slot.id = frag.id;
          if (typeof frag?.function?.name === 'string') slot.name += frag.function.name;
          if (typeof frag?.function?.arguments === 'string') slot.args += frag.function.arguments;
          toolAcc.set(idx, slot);
        }
      }

      const content = delta.content;
      return typeof content === 'string' && content ? content : null;
    } catch {
      return null; // ignore malformed frames
    }
  };

  const drainTools = (): GroqToolCall[] =>
    [...toolAcc.entries()]
      .sort(([a], [b]) => a - b)
      .filter(([, s]) => s.name)
      .map(([idx, s]) => ({
        id: s.id || `call_${idx}`,
        type: 'function' as const,
        function: { name: s.name, arguments: s.args || '{}' },
      }));

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
      if (delta) yield { type: 'text', delta };
    }
  }

  // Flush any trailing frame not terminated by a newline.
  buffer += decoder.decode();
  const trailing = buffer.trim();
  if (trailing.startsWith('data:')) {
    const delta = emitFrame(trailing.slice(5).trim());
    if (delta) yield { type: 'text', delta };
  }

  const toolCalls = drainTools();
  if (toolCalls.length > 0) yield { type: 'tool_calls', toolCalls };
}

/** Back-compat wrapper: plain string deltas only (no tool handling). */
export async function* streamGroqChat(
  messages: GroqMessage[],
  opts: Omit<GroqStreamOpts, 'tools'> = {}
): AsyncGenerator<string> {
  for await (const ev of streamGroqChatEvents(messages, opts)) {
    if (ev.type === 'text') yield ev.delta;
  }
}

/** Non-streaming chat completion returning the full message content. */
export async function groqChat(
  messages: GroqMessage[],
  opts: {
    temperature?: number;
    maxTokens?: number;
    json?: boolean;
    timeoutMs?: number;
    model?: string;
  } = {}
): Promise<string> {
  const body: Record<string, unknown> = {
    model: opts.model || MODEL_DEFAULT,
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
