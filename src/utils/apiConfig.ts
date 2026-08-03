/**
 * Dynamically resolves the API Base URL.
 * On localhost and same-origin production hosts, returns relative paths.
 * Falls back to Supabase edge functions for GitHub Pages or unknown hosts.
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
      hostname.endsWith('.local') ||
      hostname === 'farhankabir.me' ||
      hostname.endsWith('.vercel.app') ||
      hostname.endsWith('.github.io')
    ) {
      return '';
    }
  }

  const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_REF || 'urhwapbyxtjaulslmfao';
  return `https://${projectRef}.supabase.co/functions/v1`;
};
