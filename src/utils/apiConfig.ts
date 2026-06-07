/**
 * Dynamically resolves the API Base URL.
 * In development (or when served by the Express server on localhost), this returns an empty string (relative paths).
 * In production (when hosted statically on GitHub Pages or custom domains), this returns the production API server.
 */
export const getApiBaseUrl = (): string => {
  // 1. Check if a specific API URL was injected at build time (e.g. VITE_API_URL=https://...)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  // 2. Otherwise, check client-side window locations
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    
    // If running on localhost or inside a local network, keep relative routes
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

    // Replace with your real Supabase project reference code
    // Or set VITE_API_URL during the build process
    const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_REF || 'rsacfzyiydjxiqnynxfb';

    // If running on the custom production domain or alternative github pages domain,
    // point to the deployed Supabase Edge Function
    if (hostname === 'farhankabir.me' || hostname.endsWith('.github.io')) {
      return `https://${projectRef}.supabase.co/functions/v1`;
    }
  }

  return '';
};
