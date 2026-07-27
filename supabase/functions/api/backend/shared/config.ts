export const CONFIG = {
  groq: {
    apiKey: () => {
      if (typeof globalThis !== "undefined" && (globalThis as any).Deno) {
        return (globalThis as any).Deno.env.get("GROQ_API_KEY");
      }
      return process.env.GROQ_API_KEY;
    },
    baseUrl: "https://api.groq.com/openai/v1/chat/completions",
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    maxTokens: 4096,
    timeoutMs: 30000,
  },
  resend: {
    apiKey: () => {
      if (typeof globalThis !== "undefined" && (globalThis as any).Deno) {
        return (globalThis as any).Deno.env.get("RESEND_API_KEY");
      }
      return process.env.RESEND_API_KEY;
    },
    baseUrl: "https://api.resend.com/emails",
    sender: "Farhan Kabir <contact@farhankabir.me>",
    recipient: "farhankabir236@gmail.com",
  },
  github: {
    username: "farhankabir133",
    userAgent: "FarhanOS-Portfolio/1.0",
    acceptHeader: "application/vnd.github.v3+json",
    timeoutMs: 15000,
  },
  medium: {
    rssUrl: "https://medium.com/feed/@farhankabir133",
    timeoutMs: 10000,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  },
  cache: {
    mediumStoriesTtlMs: 15 * 60 * 1000,
    githubReposTtlMs: 60 * 60 * 1000,
    maxEntries: 100,
  },
  rateLimit: {
    maxRequestsPerWindow: 60,
    windowMs: 60000,
    skipErrors: true,
  },
  cors: {
    allowedOrigins: (() => {
      const raw =
        typeof globalThis !== "undefined" && (globalThis as any).Deno
          ? (globalThis as any).Deno.env.get("CORS_ORIGINS")
          : process.env.CORS_ORIGINS;
      if (!raw) return ["*"];
      return raw.split(",").map((s: string) => s.trim()).filter(Boolean);
    })(),
  },
  server: {
    port: parseInt(process.env.PORT || "3001", 10),
    host: "0.0.0.0",
    compressionThreshold: 1024,
    jsonLimit: "10mb",
  },
  health: {
    timeoutMs: 5000,
  },
} as const;

export type CORSOrigin = typeof CONFIG.cors.allowedOrigins[number];