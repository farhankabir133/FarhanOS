// Privacy-friendly analytics. Uses Plausible when VITE_PLAUSIBLE_DOMAIN is set;
// otherwise it is a silent no-op so local/preview builds stay clean.

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function track(event: string, props?: Record<string, unknown>): void {
  try {
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      window.plausible(event, { props });
    }
  } catch {
    /* never break the UI for analytics */
  }
}
