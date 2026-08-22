import { randomUUID } from "crypto";
import { query } from "../db/pool.js";

export interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

/**
 * Returns a valid session UUID for this conversation, creating it when
 * missing/unknown. Returns null when persistence is disabled/unavailable.
 */
export async function ensureSession(sessionId?: string): Promise<string | null> {
  if (
    sessionId &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(sessionId)
  ) {
    const existing = await query<{ id: string }>(
      "SELECT id FROM twin_sessions WHERE id = $1",
      [sessionId]
    );
    if (existing && existing.length > 0) return sessionId;
  }
  const created = await query<{ id: string }>(
    "INSERT INTO twin_sessions (id) VALUES ($1) RETURNING id",
    [randomUUID()]
  );
  return created && created.length > 0 ? created[0].id : null;
}

/**
 * Persists conversation turns. Best-effort: query() swallows DB errors,
 * so this never blocks or fails the request path.
 */
export async function logTwinTurn(
  sessionId: string | null,
  turns: ChatTurn[]
): Promise<void> {
  if (!sessionId || turns.length === 0) return;
  for (const turn of turns) {
    await query(
      "INSERT INTO twin_messages (session_id, role, content) VALUES ($1, $2, $3)",
      [sessionId, turn.role, turn.content]
    );
  }
}
