/**
 * Dynamically resolves the API Base URL.
 * In development (or when served by the Express server on localhost), this returns an empty string (relative paths).
 * In production (when hosted statically on GitHub Pages or custom domains), this returns the production API server.
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

    const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_REF || 'rsacfzyiydjxiqnynxfb';

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
