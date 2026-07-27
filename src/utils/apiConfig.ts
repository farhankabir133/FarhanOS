/**
 * Dynamically resolves the API Base URL.
 * In development (served by the Express dev server on localhost), returns an empty string (relative paths).
 * In production (when hosted as static assets on GitHub Pages or Vercel), returns the Supabase Edge Function URL.
 * The Supabase Edge Function serves as the sole backend in production, handling all API routes.
 */
export const getApiBaseUrl = (): string => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;

    if (
      hostname === 'localhost' ||
      hostname === '127.0.5.1' ||
      hostname === '127.0.0.1' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.endsWith('.local')
    ) {
      return '';
    }

    const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_REF || 'urhwapbyxtjaulslmfao';

    if (
      hostname === 'farhankabir.me' ||
      hostname.endsWith('.github.io') ||
      hostname.endsWith('.vercel.app')
    ) {
      return `https://${projectRef}.supabase.co/functions/v1`;
    }
  }

  return '';
};
