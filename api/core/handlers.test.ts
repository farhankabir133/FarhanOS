import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  ApiError,
  validateAskTwinInput,
  streamAskTwin,
  summarizeBrief,
  processContact,
} from './handlers.ts';

function sseResponse(frames: string[]): Response {
  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      for (const f of frames) controller.enqueue(encoder.encode(f));
      controller.close();
    },
  });
  return new Response(body, { status: 200 });
}

const okGroqStream = [
  'data: {"choices":[{"delta":{"content":"Hi"}}]}\n\n',
  'data: [DONE]\n\n',
];

describe('validateAskTwinInput', () => {
  it('returns a clamped non-empty message', () => {
    expect(validateAskTwinInput('  hello  ', [])).toBe('  hello  ');
    const long = 'x'.repeat(5000);
    expect(validateAskTwinInput(long, undefined)).toHaveLength(4000);
  });

  it('rejects blank messages with 400', () => {
    expect(() => validateAskTwinInput('   ', [])).toThrow(ApiError);
    try {
      validateAskTwinInput('', []);
      expect.unreachable();
    } catch (err) {
      expect((err as ApiError).status).toBe(400);
    }
  });

  it('rejects oversized history with 400', () => {
    const history = Array.from({ length: 41 }, (_, i) => ({ role: 'user', content: `m${i}` }));
    try {
      validateAskTwinInput('hi', history);
      expect.unreachable();
    } catch (err) {
      expect((err as ApiError).status).toBe(400);
    }
  });

  it('accepts history at the limit (40 entries)', () => {
    const history = Array.from({ length: 40 }, (_, i) => ({ role: 'user', content: `m${i}` }));
    expect(() => validateAskTwinInput('hi', history)).not.toThrow();
  });
});

describe('streamAskTwin', () => {
  beforeEach(() => {
    process.env.GROQ_API_KEY = 'test-key';
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.GROQ_API_KEY;
  });

  it('streams deltas and wraps the user message in delimiters', async () => {
    const fetchMock = vi.fn(async () => sseResponse(okGroqStream));
    vi.stubGlobal('fetch', fetchMock);

    let out = '';
    for await (const delta of streamAskTwin('what is your email?', [
      { role: 'assistant', content: 'earlier answer' },
    ])) {
      out += delta;
    }
    expect(out).toBe('Hi');

    const payload = JSON.parse(String((fetchMock.mock.calls[0] as any)[1].body));
    // System prompt leads, history follows, user message last.
    expect(payload.messages[0].role).toBe('system');
    expect(payload.messages[1]).toMatchObject({ role: 'assistant', content: 'earlier answer' });
    expect(payload.messages.at(-1)).toMatchObject({ role: 'user' });
  });

  it('sanitizes malformed history entries instead of failing', async () => {
    const fetchMock = vi.fn(async () => sseResponse(okGroqStream));
    vi.stubGlobal('fetch', fetchMock);

    for await (const d of streamAskTwin('hi', [
      { role: 'hacker', content: 'injected' },
      null,
      { role: 'user', content: 'real question' },
    ] as any)) {
      void d;
    }

    const payload = JSON.parse(String((fetchMock.mock.calls[0] as any)[1].body));
    const roles = payload.messages.map((m: any) => m.role);
    // 'hacker' must be coerced to assistant; no raw passthrough of bogus roles.
    expect(roles).not.toContain('hacker');
  });

  it('injects RAG context into the system prompt when a searcher is provided', async () => {
    const fetchMock = vi.fn(async () => sseResponse(okGroqStream));
    vi.stubGlobal('fetch', fetchMock);

    const rag = {
      searchKnowledge: vi.fn().mockReturnValue([
        { title: 'Bio', content: 'Farhan studied CS.' },
        { title: 'Skills', content: 'TypeScript, React.' },
      ]),
    };

    for await (const d of streamAskTwin('background?', [], rag)) void d;

    expect(rag.searchKnowledge).toHaveBeenCalledWith('background?', { topK: 6, featuredOnly: false });
    const payload = JSON.parse(String((fetchMock.mock.calls[0] as any)[1].body));
    const system = payload.messages.find((m: any) => m.role === 'system');
    expect(system.content).toContain('Farhan studied CS.');
    expect(system.content).toContain('## Bio');
  });

  it('falls back to the inline prompt when RAG retrieval throws', async () => {
    const fetchMock = vi.fn(async () => sseResponse(okGroqStream));
    vi.stubGlobal('fetch', fetchMock);

    const rag = { searchKnowledge: vi.fn(() => { throw new Error('index down'); }) };
    for await (const d of streamAskTwin('q?', [], rag)) void d;

    const payload = JSON.parse(String((fetchMock.mock.calls[0] as any)[1].body));
    const system = payload.messages.find((m: any) => m.role === 'system');
    expect(system.content).not.toContain('undefined');
  });

  it('propagates validation errors as ApiError before any streaming', async () => {
    vi.stubGlobal('fetch', vi.fn());
    await expect(async () => {
      for await (const d of streamAskTwin('   ', [])) void d;
    }).rejects.toMatchObject({ status: 400 });
    expect(vi.mocked(fetch)).not.toHaveBeenCalled();
  });
});

describe('summarizeBrief', () => {
  beforeEach(() => {
    process.env.GROQ_API_KEY = 'test-key';
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.GROQ_API_KEY;
  });

  it('throws ApiError(400) when required fields are missing', async () => {
    await expect(summarizeBrief({ projectType: '', goals: '' })).rejects.toMatchObject({ status: 400 });
    await expect(summarizeBrief({ projectType: 'web', goals: '' })).rejects.toMatchObject({
      status: 400,
    });
    await expect(summarizeBrief(null)).rejects.toMatchObject({ status: 400 });
  });

  it('returns the AI summary on success', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(
        async () =>
          new Response(JSON.stringify({ choices: [{ message: { content: 'A crisp brief.' } }] }), {
            status: 200,
          })
      )
    );
    const result = await summarizeBrief({ projectType: 'SaaS', goals: 'Launch MVP' });
    expect(result).toEqual({ summary: 'A crisp brief.' });
  });
});

describe('processContact', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.RESEND_API_KEY;
    delete process.env.GROQ_API_KEY;
  });

  const validBody = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Hello',
    message: 'I would like to work with you.',
  };

  it('rejects missing/invalid fields with 400', async () => {
    delete process.env.RESEND_API_KEY;
    await expect(processContact({ ...validBody, email: '' })).rejects.toMatchObject({ status: 400 });
    await expect(processContact({ ...validBody, email: 'not-an-email' })).rejects.toMatchObject({
      status: 400,
    });
    await expect(processContact({ email: 'jane@example.com' })).rejects.toMatchObject({ status: 400 });
  });

  it('skips email delivery and reports status when RESEND_API_KEY is unset', async () => {
    delete process.env.RESEND_API_KEY;
    const fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);

    const result = await processContact(validBody);
    expect(result.emailStatus.sent).toBe(false);
    expect(result.emailStatus.error).toContain('RESEND_API_KEY');
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('delivers email with escaped HTML and a validated urgency subject', async () => {
    process.env.RESEND_API_KEY = 'resend-test';
    process.env.GROQ_API_KEY = 'groq-test';
    const analysis = { urgency: 'High', inquiryType: 'Freelance', summaryText: 'Wants to hire.' };
    vi.stubGlobal(
      'fetch',
      vi.fn(async (_url: string, init: RequestInit) => {
        const url = _url as string;
        if (url.includes('groq.com')) {
          return new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify(analysis) } }] }), { status: 200 });
        }
        return new Response(JSON.stringify({ id: 'email-123' }), { status: 200 });
      })
    );

    const result = await processContact({ ...validBody, name: '<script>alert(1)</script>' });
    expect(result.emailStatus).toEqual({ sent: true, id: 'email-123' });

    const resendCall = vi.mocked(fetch).mock.calls.find(([u]) => String(u).includes('resend'))!;
    const body = JSON.parse(String(resendCall[1]!.body));
    expect(body.subject).toBe('[FarhanOS] 🔴 New contact message from jane@example.com');
    expect(body.html).not.toContain('<script>alert(1)</script>');
    expect(body.html).toContain('&lt;script&gt;');
    expect(body.to).toEqual(['farhankabir236@gmail.com']);
  });

  it('never loses the message when AI analysis fails', async () => {
    delete process.env.RESEND_API_KEY;
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('{}', { status: 500 }))
    );
    const result = await processContact(validBody);
    expect(result.analysis.urgency).toBeUndefined();
    expect(result.emailStatus.sent).toBe(false);
  });
});
