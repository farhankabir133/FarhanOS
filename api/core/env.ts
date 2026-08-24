/**
 * Runtime-agnostic env access (Node / Vercel / Deno / Supabase Edge).
 */
export function getEnv(key: string): string {
  const proc = (globalThis as any).process;
  if (proc?.env && typeof proc.env[key] === 'string') return proc.env[key];
  const deno = (globalThis as any).Deno;
  if (deno?.env?.get) {
    try {
      return deno.env.get(key) ?? '';
    } catch {
      // Deno.env requires --allow-env; treat as unset
    }
  }
  return '';
}
