// Central, env-driven site configuration. All values fall back to safe
// defaults so the site works in any environment (local, preview, prod).
const env = import.meta.env;

export const siteConfig = {
  // Visitor can book a call — set VITE_CALENDLY_URL to enable the button.
  calendlyUrl: (env.VITE_CALENDLY_URL as string | undefined) || '',

  // Formspree form id — when set, the Mission Brief posts here as well as the
  // internal /api/contact endpoint.
  formspreeId: (env.VITE_FORMSPREE_ID as string | undefined) || '',

  // Public contact address shown in fallback messaging.
  contactEmail: (env.VITE_CONTACT_EMAIL as string | undefined) || 'farhankabir133@gmail.com',

  // Availability badge in the top bar.
  openToWork:
    (env.VITE_OPEN_TO_WORK as string | undefined)?.toLowerCase() !== 'false',

  // Plausible analytics domain. Empty = analytics disabled.
  plausibleDomain: (env.VITE_PLAUSIBLE_DOMAIN as string | undefined) || '',

  // Canonical production domain (used for sharing / OG).
  canonicalDomain: (env.VITE_CANONICAL_DOMAIN as string | undefined) || 'farhankabir.me',
};

export type SiteConfig = typeof siteConfig;
