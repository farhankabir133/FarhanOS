export interface ApiErrorBody {
  error: string;
  details?: string;
}

export interface ApiSuccessBody<T = unknown> {
  data?: T;
  message?: string;
}

export interface AskTwinRequest {
  message: string;
  history?: Array<{ role: string; content: string }>;
  sessionId?: string;
}

export interface AskTwinResponse {
  reply: string;
  sessionId?: string;
}

export interface SummarizeBriefRequest {
  projectType: string;
  budget?: string;
  timeline?: string;
  goals: string;
  comments?: string;
  email?: string;
}

export interface SummarizeBriefResponse {
  summary: string;
}

export interface MediumStory {
  id: string;
  title: string;
  category: "AI" | "Engineering" | "Productivity" | "Research" | "Life" | "Startups" | "Design" | "Philosophy";
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  link: string;
  imageUrl: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

export interface ContactRequest {
  [key: string]: unknown;
  name?: string;
  email: string;
  subject?: string;
  message: string;
  metadata?: Record<string, unknown>;
}

export interface ContactAnalysis {
  urgency?: string;
  inquiryType?: string;
  summaryText?: string;
  suggestedAutoReply?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  analysis: ContactAnalysis;
  emailStatus: {
    sent: boolean;
    id?: string;
    error?: string;
  };
}

export interface HealthCheck {
  status: "ok" | "degraded" | "error";
  uptime: number;
  version: string;
  checks: Record<string, boolean>;
}

export interface RateLimitInfo {
  remaining: number;
  resetAt: number;
}

export interface LogEntry {
  timestamp: string;
  level: "info" | "warn" | "error" | "debug";
  requestId: string;
  route: string;
  method: string;
  statusCode: number;
  durationMs: number;
  error?: string;
  message: string;
}