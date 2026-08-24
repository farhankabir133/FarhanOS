# FarhanOS — Launch Readiness Audit

**Date:** Aug 25, 2026 · **Target:** https://farhankabir.me/ · **Branch:** Production (`7ef8df9`)
**Method:** entry-point reachability walk, reverse-import greps, route↔fetch diff, dependency-by-dependency scan, live header inspection, Playwright audits at 375→1920 px, cold-cache performance trace, git-history secret scan.

---

## Verdict

**Ship-ready after P0/P1 fixes below (~half a day of work).**
Core product quality is high: zero horizontal overflow at every viewport, zero console errors, sub-400 ms FCP, working rate-limited streaming AI, no secrets leaked, solid security headers. What remains is dead-code removal, one broken adapter, one silent animation bug, and a few hygiene items.

| Area | Grade | Notes |
|---|---|---|
| Dead code | C | ~10 files/blocks deletable, 20 unused icon imports, 2 unused deps |
| Security | A− | Strong backend; missing CSP; 35 vulns in dev-only deps |
| Performance | A | FCP 360 ms, 426 KB transfer, heavy chunks lazy-loaded |
| Navigation | A− | Tap targets pass; 1 unlabeled icon button |
| Responsiveness | A | Clean 375→1920, assistant usable on mobile |

---

## 1. Dead Code & Cleanup

### Certain — delete safely
| Item | Location |
|---|---|
| Never-imported component | `src/components/DecryptText.tsx` |
| Orphan asset | `assets/assistant.svg` |
| Duplicate gh-pages file | root `CNAME` (keep `public/CNAME`) |
| Stale doc | `PERFORMANCE_OPTIMIZATION_REPORT.md` |
| Unused deps | `autoprefixer`, `esbuild` (devDependencies) |
| Broken script | `"start": "node dist/server.cjs"` — nothing produces that file |
| Unused exports | `api/knowledge-loader.ts`: `getRelated`, `getAllDocs`, `getKnowledgeCount`, `listCategories` |
| Unused interface | `src/types.ts` `BriefForm` (BriefWindow defines its own local copy) |
| Dead CSS blocks | `src/index.css`: `.terminal-caret` + keyframes (277–285), `glitch` keyframes + `--animate-glitch` (108, 189–210), hover-utility block minus `.spring-hover`/`.hover-scale-105` (475–496), `.gpu-accelerated`, `.backdrop-blur-mobile-reduced`, `.no-blur`, `.animate-pulse-subtle` + keyframes, `.text-justify`, `.assistant-touch-target` |

### Certain — prune imports
| Item | Location |
|---|---|
| 20 unused lucide-react icons + `MarkdownRenderer` + `BuildLog/SkillNode/GardenNode` types | `src/App.tsx:1–15` |
| 6 dead image imports (identifiers never used; tree-shaken from build) | `src/LandingPage.tsx:13–19` → then delete `assets/avatar-112.png`, `-144.png`, `-224.png`, `-144.webp`, `-288.webp` |

### Vestigial feature — decide before release
- **`/api/tts` chain is a documented no-op**: handler returns `{audio:null}` forever; client call at `App.tsx:418` never plays anything (real voice = Web Speech fallback). Remove route ×3 adapters + rate rule (`security.ts:97`) + client call, or implement real TTS post-launch.

### ⚠ Broken / unreachable — fix or remove (P0)
- **`supabase/functions/api/index.ts` will crash at boot**: line 15 imports `etagMatches` from `api/core/security` — it lives in `api/core/cache`. Hidden because tsconfig excludes `supabase/`.
- It's also **unreachable in practice** (only used when hostname matches none of localhost/farhankabir.me/*.vercel.app/*.github.io) and is the only adapter without RAG. **Recommendation:** fix the one-line import if you want the Deno fallback alive; otherwise delete `supabase/` tree before release so nobody deploys a broken function.

### Cosmetic smells
- Duplicated tour-step texts in `App.tsx` (`tourSteps` vs `nextTourStep`, lines ~605–663).
- Invalid Tailwind class typo `font-cyan-50` (App.tsx:989).
- Duplicate JSX comments (App.tsx:1277–1292).
- README references deleted `DecryptText.tsx`; documents gh-pages flow alongside Vercel.

---

## 2. 🐛 Actual Bug Found (fix, not just cleanup)

- **Particle animation silently never runs**: `@theme` defines `--animate-float-particle` but `Particles.tsx:22` applies bare class `float-particle`, which maps to no utility/rule. Rename to `animate-float-particle`.

## 3. Accessibility Gaps

- One icon `<button>` with **empty accessible name** on both mobile & desktop (find via `button:not([aria-label]):not(:has(text))`). Add `aria-label`.
- Everything else passes: all tap targets ≥32 px, images have alt, `prefers-reduced-motion` respected in CSS (4 blocks) and JS (`useTerminalBoot`).

---

## 4. Security

### Verified good ✅
- Response headers live: HSTS (2y), `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, restrictive `Permissions-Policy`.
- Backend core: per-IP fixed-window rate limits, input clamping/validation before SSE, HTML-escaped contact emails, model-derived urgency allowlist (anti subject-forgery), ETag/304 caching, mandatory fetch timeouts, CORS allowlist.
- Secrets: `.env*` gitignored; grep of full git history found **zero** committed Groq/Resend keys; client bundle exposes only `VITE_API_URL`/Supabase ref (non-secret).

### To fix before release
| Priority | Issue | Action |
|---|---|---|
| P1 | **No Content-Security-Policy** header | Add CSP to `vercel.json` routes. Start report-only: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.groq.com; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'` — tune `img-src`/`connect-src` to actual hosts (Medium CDN, GitHub avatars, Supabase). |
| P1 | **35 npm vulnerabilities (1 critical)** — all transitive in dev/tooling deps (`undici` via @vercel/node, `tar` via gh-pages). None ship in runtime bundles, but CI/dev machines are exposed. | Run `npm audit fix`; consider bumping `@vercel/node` major separately. |
| P2 | `GET /api/*` respond `Access-Control-Allow-Origin: *` when no Origin header (curl/non-browser). Data is public; low risk. | Optional: drop the wildcard branch. |

---

## 5. Performance

Cold-cache measured (desktop, Washington DC edge → browser):

| Metric | Value | Assessment |
|---|---|---|
| TTFB | 154 ms | Excellent |
| First Contentful Paint | 360 ms | Excellent |
| DOM Content Loaded | 333 ms | Excellent |
| Initial transfer | 426 KB / 10 resources | Good |
| Fonts | woff2 preloaded ×4 | ✅ |
| Hero image | AVIF srcset + preload | ✅ |
| Heavy libs | three.js (127 K gz) + MarkdownRenderer (48 K gz) in separate lazy chunks | ✅ |

Findings:
1. **Main chunk `index-*.js` = 400 KB min / 137 KB gz** — acceptable, but splitting react vendor out of app code (manualChunks currently merges them into `index` since `vendor` entry only pulls when imported differently) could shave first paint further. Low priority.
2. **Time-to-interactive OS = 8–9 s** due to `TerminalBootLoader` animation (8.2 s mobile / 9.7 s desktop until nav buttons render). Landing CTAs render progressively, but consider: skip-boot on repeat visits (sessionStorage), a "Skip" affordance, and honoring reduced-motion with instant boot. This is your single biggest perceived-performance lever.
3. Fixing the broken `float-particle` animation adds visual life at ~0 cost (CSS-only).

---

## 6. Navigation & UX

- Mobile: hamburger "Toggle menu" ✓, CTAs reachable, assistant launcher 48×48 bottom-left ✓, opens + streams correctly on 375 px.
- Desktop: dock/window metaphor intact; windows lazy-load cleanly.
- Assistant end-to-end verified twice in real Chromium: question → typing indicator → streamed RAG-grounded markdown answer. Zero console errors after preload fix.
- Gap: the single unlabeled button (see §Accessibility).

---

## 7. Prioritized Launch Checklist

**P0 — do now (blocking)**
1. Fix `supabase/functions/api/index.ts` `etagMatches` import **or delete `supabase/`**.
2. Delete dead files: `DecryptText.tsx`, `assets/assistant.svg` + 5 avatar variants (+ their 6 imports), root `CNAME`, `PERFORMANCE_OPTIMIZATION_REPORT.md`.
3. Prune `App.tsx` imports (20 icons, MarkdownRenderer, 3 types).
4. Fix `float-particle` class name.
5. `npm audit fix` + commit lockfile.
6. Label the unlabeled icon button.

**P1 — before announcing**
7. Add CSP (report-only → enforce).
8. Decide `/api/tts`: remove chain or roadmap real TTS.
9. Boot-time mitigation: skip on repeat visit / reduced-motion / skip button.
10. Delete unused deps (`autoprefixer`, `esbuild`), fix `"start"` script, remove unused CSS blocks & knowledge-loader exports.

**P2 — polish**
11. Split main chunk vendor/app; dedupe tour texts; fix `font-cyan-50` typo; refresh README component list.
