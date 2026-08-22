-- FarhanOS persistence schema (Supabase Postgres / any Postgres 14+)
-- Apply with: psql "$DATABASE_URL" -f src/backend/db/schema.sql

CREATE TABLE IF NOT EXISTS contact_messages (
  id            BIGSERIAL PRIMARY KEY,
  name          TEXT,
  email         TEXT NOT NULL,
  subject       TEXT,
  message       TEXT NOT NULL,
  urgency       TEXT,
  inquiry_type  TEXT,
  email_sent    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at
  ON contact_messages (created_at DESC);

CREATE TABLE IF NOT EXISTS brief_requests (
  id            BIGSERIAL PRIMARY KEY,
  project_type  TEXT,
  budget        TEXT,
  timeline      TEXT,
  goals         TEXT NOT NULL,
  comments      TEXT,
  email         TEXT,
  ai_summary    TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_brief_requests_created_at
  ON brief_requests (created_at DESC);

CREATE TABLE IF NOT EXISTS twin_sessions (
  id          UUID PRIMARY KEY DEFAULT GEN_RANDOM_UUID(),
  started_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS twin_messages (
  id          BIGSERIAL PRIMARY KEY,
  session_id  UUID NOT NULL REFERENCES twin_sessions(id) ON DELETE CASCADE,
  role        TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content     TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_twin_messages_session
  ON twin_messages (session_id, created_at);
