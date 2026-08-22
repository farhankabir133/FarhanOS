import { Pool } from "pg";
import { logger } from "../utils/logger.js";

const DATABASE_URL = process.env.DATABASE_URL;

export const persistenceEnabled = Boolean(DATABASE_URL);

const pool = DATABASE_URL
  ? new Pool({
      connectionString: DATABASE_URL,
      max: 5,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
      ssl: /supabase\.(co|com)/.test(DATABASE_URL)
        ? { rejectUnauthorized: false }
        : undefined,
    })
  : null;

if (pool) {
  pool.on("error", (err) => {
    logger.error({ err }, "[db] unexpected pool error");
  });
}

/**
 * Runs a query against the pooled client.
 * Returns the result rows, or null when persistence is not configured or
 * the query fails — callers must treat persistence as best-effort and
 * never block the UX on it.
 */
export async function query<T>(
  text: string,
  params?: unknown[]
): Promise<T[] | null> {
  if (!pool) return null;
  try {
    const result = await pool.query(text, params as never[]);
    return result.rows as T[];
  } catch (err) {
    logger.warn(
      { err: err instanceof Error ? err.message : String(err) },
      "[db] query failed (persistence skipped)"
    );
    return null;
  }
}
