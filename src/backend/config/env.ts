import { z } from "zod";

const envSchema = z.object({
  GROQ_API_KEY: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  CORS_ORIGINS: z.string().min(1),
  NODE_ENV: z.enum(["development", "production", "test"]).optional(),
  PORT: z.string().optional(),
  GITHUB_USERNAME: z.string().optional(),
  GITHUB_TOKEN: z.string().optional(),
  APP_URL: z.string().optional(),
});

export type EnvConfig = z.infer<typeof envSchema>;

export function getEnv(): EnvConfig {
  const parsed = envSchema.safeParse({
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CORS_ORIGINS: process.env.CORS_ORIGINS,
    NODE_ENV: process.env.NODE_ENV || "production",
    PORT: process.env.PORT,
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    APP_URL: process.env.APP_URL,
  });

  if (!parsed.success) {
    const missing = parsed.error.issues
      .map((issue) => issue.path.join("."))
      .join(", ");
    console.error(`[ENV] Missing or invalid required environment variables: ${missing}`);
    process.exit(1);
  }

  return parsed.data;
}

export const env = getEnv();

export const config = {
  groq: {
    apiKey: env.GROQ_API_KEY,
    baseUrl: "https://api.groq.com/openai/v1/chat/completions",
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    maxTokens: 4096,
    timeoutMs: 30000,
  },
  resend: {
    apiKey: env.RESEND_API_KEY,
    baseUrl: "https://api.resend.com/emails",
    sender: "Farhan Kabir <contact@farhankabir.me>",
    recipient: "farhankabir236@gmail.com",
  },
  github: {
    username: env.GITHUB_USERNAME || "farhankabir133",
    token: env.GITHUB_TOKEN,
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
  aiRateLimit: {
    maxRequestsPerWindow: 10,
    windowMs: 60000,
  },
  health: {
    timeoutMs: 5000,
  },
} as const;