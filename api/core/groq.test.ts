import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { streamGroqChat, streamGroqChatEvents, groqChat } from './groq.ts';

function sseResponse(frames: string[], status = 200): Response {
  const encoder = new TextEncoder();
  // Split each frame into two arbitrary byte chunks to simulate network
  // fragmentation across read() boundaries.
  const chunks: Uint8Array[] = [];
  for (const frame of frames) {
    const bytes = encoder.encode(frame);
    const mid = Math.max(1, Math.floor(bytes.length / 2));
    chunks.push(bytes.slice(0, mid), bytes.slice(mid));
  }
  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      for (const c of chunks) controller.enqueue(c);
      controller.close();
    },
  });
  return new Response(body, { status, headers: { 'content-type': 'text/event-stream' } });
}

const baseFrames = [
  'data: {"choices":[{"delta":{"content":"Hel"}}]}\n\n',
  'data: {"choices":[{"delta":{"content":"lo"}}]}\n\n',
  'data: [DONE]\n\n',
];

describe('streamGroqChat', () => {
  beforeEach(() => {
    process.env.GROQ_API_KEY = 'test-key';
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.GROQ_API_KEY;
  });

  it('yields concatenated deltas from a fragmented SSE stream', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => sseResponse(baseFrames)));
    let out = '';
    for await (const delta of streamGroqChat([{ role: 'user', content: 'hi' }])) {
      out += delta;
    }
    expect(out).toBe('Hello');
  });

  it('sends the expected request shape', async () => {
    const fetchMock = vi.fn(async () => sseResponse(baseFrames));
    vi.stubGlobal('fetch', fetchMock);
    for await (const _d of streamGroqChat(
      [{ role: 'system', content: 'sys' }, { role: 'user', content: 'q' }],
      { temperature: 0.2, maxTokens: 99 }
    )) {
      void _d;
    }
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe('https://api.groq.com/openai/v1/chat/completions');
    const payload = JSON.parse(String(init.body));
    expect(payload.model).toBe('openai/gpt-oss-120b');
    expect(payload.stream).toBe(true);
    expect(payload.temperature).toBe(0.2);
    expect(payload.max_tokens).toBe(99);
    expect(payload.messages).toHaveLength(2);
  });

  it('ignores malformed frames instead of crashing', async () => {
    const noisy = ['data: {not-json}\n\n', ...baseFrames];
    vi.stubGlobal('fetch', vi.fn(async () => sseResponse(noisy)));
    let out = '';
    for await (const delta of streamGroqChat([{ role: 'user', content: 'hi' }])) {
      out += delta;
    }
    expect(out).toBe('Hello');
  });

  it('throws ApiError(503) when the upstream responds with an error status', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify({ error: { message: 'quota' } }), { status: 429 }))
    );
    await expect(async () => {
      for await (const d of streamGroqChat([{ role: 'user', content: 'hi' }])) void d;
    }).rejects.toMatchObject({ status: 503 });
  });

  it('throws ApiError(503) when no API key is configured', async () => {
    delete process.env.GROQ_API_KEY;
    await expect(async () => {
      for await (const d of streamGroqChat([{ role: 'user', content: 'hi' }])) void d;
    }).rejects.toMatchObject({ status: 503 });
  });
});

describe('streamGroqChatEvents (tools)', () => {
  beforeEach(() => {
    process.env.GROQ_API_KEY = 'test-key';
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.GROQ_API_KEY;
  });

  it('merges fragmented tool_call deltas into a single event', async () => {
    const frames = [
      'data: {"choices":[{"delta":{"tool_calls":[{"index":0,"id":"call_9","type":"function","function":{"name":"open_os_","arguments":""}}]}}]}\n\n',
      'data: {"choices":[{"delta":{"tool_calls":[{"index":0,"function":{"name":"window","arguments":"{\\"window\\":"}}]}}]}\n\n',
      'data: {"choices":[{"delta":{"tool_calls":[{"index":0,"function":{"arguments":"\\"projects\\"}"}}]}}]}\n\n',
      'data: [DONE]\n\n',
    ];
    vi.stubGlobal('fetch', vi.fn(async () => sseResponse(frames)));

    const events = [];
    for await (const ev of streamGroqChatEvents([{ role: 'user', content: 'open projects' }])) {
      events.push(ev);
    }
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({
      type: 'tool_calls',
      toolCalls: [
        {
          id: 'call_9',
          type: 'function',
          function: { name: 'open_os_window', arguments: '{"window":"projects"}' },
        },
      ],
    });
  });

  it('passes model and tools through in the request body', async () => {
    const fetchMock = vi.fn(async () => sseResponse(baseFrames));
    vi.stubGlobal('fetch', fetchMock);

    for await (const _ev of streamGroqChatEvents([{ role: 'user', content: 'hi' }], {
      model: 'openai/gpt-oss-20b',
      tools: [
        {
          type: 'function',
          function: { name: 't1', description: 'd', parameters: { type: 'object', properties: {} } },
        },
      ],
    })) {
      void _ev;
    }

    const payload = JSON.parse(String((fetchMock.mock.calls[0] as any)[1].body));
    expect(payload.model).toBe('openai/gpt-oss-20b');
    expect(payload.tools).toHaveLength(1);
    expect(payload.tool_choice).toBe('auto');
  });

  it('yields text deltas unchanged when no tools are requested', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => sseResponse(baseFrames)));
    const events = [];
    for await (const ev of streamGroqChatEvents([{ role: 'user', content: 'hi' }])) {
      events.push(ev);
    }
    expect(events).toEqual([
      { type: 'text', delta: 'Hel' },
      { type: 'text', delta: 'lo' },
    ]);
  });
});

describe('groqChat (non-streaming)', () => {
  beforeEach(() => {
    process.env.GROQ_API_KEY = 'test-key';
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.GROQ_API_KEY;
  });

  it('returns message content and enables JSON mode when requested', async () => {
    const fetchMock = vi.fn(
      async () =>
        new Response(JSON.stringify({ choices: [{ message: { content: '{"ok":true}' } }] }), { status: 200 })
    );
    vi.stubGlobal('fetch', fetchMock);

    const out = await groqChat([{ role: 'user', content: 'classify' }], { json: true });
    expect(out).toBe('{"ok":true}');
    const payload = JSON.parse(String((fetchMock.mock.calls[0] as any)[1].body));
    expect(payload.response_format).toEqual({ type: 'json_object' });
    expect(payload.stream).toBeUndefined();
  });

  it('returns empty string when the response has no content', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(JSON.stringify({ choices: [] }), { status: 200 }))
    );
    expect(await groqChat([{ role: 'user', content: 'x' }])).toBe('');
  });

  it('throws ApiError(503) on upstream failure', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response('{}', { status: 500 })));
    await expect(groqChat([{ role: 'user', content: 'x' }])).rejects.toMatchObject({ status: 503 });
  });
});
