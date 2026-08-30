# FarhanOS — UI/UX & Responsiveness Improvement Plan

**Target:** https://farhankabir.me/  
**Audit Basis:** AUDIT_REPORT.md + full source scan (Aug 30, 2026)  
**Approach:** Phase-gated, highest-impact first

---

## Phase 1: Audit & Organize

### 1.1 — Create Improvement Tracker
- Create this document (`UI_UX_IMPROVEMENTS_PLAN.md`) as the single source of truth
- Add checklist items to `AGENTS.md` or equivalent for future sessions

### 1.2 — Map Current Responsive Breakpoints
- Document all `@media` queries, Tailwind breakpoint usages, and `matchMedia` calls
- Identify gaps (e.g., no `xl:`, `2xl:` granular control in component CSS)

### 1.3 — Device Profile Matrix
Define target device profiles:
| Profile | Viewport | Context |
|---|---|---|
| Mobile (small) | 320–479px | iPhone SE, small Android |
| Mobile (large) | 480–767px | iPhone 14 Pro Max, large phones |
| Tablet | 768–1023px | iPad, Android tablets |
| Laptop | 1024–1535px | Standard laptops |
| Desktop | 1536–1919px | 1080p monitors |
| Ultra-wide | 1920px+ | 4K, ultrawide monitors |

---

## Phase 2: P0 Critical Fixes

### 2.1 — Fix `float-particle` Animation Bug
**File:** `src/components/TerminalBootLoader/Particles.tsx:22`  
**Issue:** Class `float-particle` maps to no utility; `@theme` defines `--animate-float-particle`  
**Fix:** Rename `float-particle` → `animate-float-particle`  
**Effort:** 5 minutes

### 2.2 — Label Unlabeled Icon Buttons
**Files:** `App.tsx`, `LandingPage.tsx`  
**Issue:** `button:not([aria-label]):not(:has(text))` — one icon button has no accessible name  
**Fix:** Add `aria-label` to all icon-only buttons  
**Effort:** 15 minutes

### 2.3 — Prune Dead Imports
**File:** `src/App.tsx:1–15`  
**Issue:** 20 unused lucide-react icons + `MarkdownRenderer` + 3 types imported  
**Imports to remove:** `Layers, GitBranch, BookOpen, Network, FileText, Calendar, Award, Search, Maximize2, Minimize2, X, Menu, Sparkles, Rocket, Compass, PhoneCall, Palette, Clock, FileSpreadsheet` (keep only what's used)  
**Effort:** 30 minutes

### 2.4 — Delete Dead Files
- Delete `src/components/DecryptText.tsx`
- Delete `assets/assistant.svg`
- Delete `assets/avatar-112.png`, `-144.png`, `-224.png`, `-144.webp`, `-288.webp` (keep only `avatar.avif`, `avatar-288.png`, `avatar.png`)
- Delete root `CNAME` (keep `public/CNAME`)
- Delete `PERFORMANCE_OPTIMIZATION_REPORT.md`
- Update `src/LandingPage.tsx` image imports (remove 6 dead imports)
**Effort:** 30 minutes

### 2.5 — Fix `supabase/functions/api/index.ts` Import
**Issue:** `etagMatches` imported from `api/core/security` but lives in `api/core/cache`  
**Fix:** Correct the import path OR delete entire `supabase/` tree before release  
**Effort:** 15 minutes

### 2.6 — `npm audit fix` + Lockfile
**Effort:** 15 minutes

---

## Phase 3: P1 Performance

### 3.1 — Add Content-Security-Policy Header
**File:** `vercel.json`  
**Action:** Add CSP header to routes:
```
default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.groq.com; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
```
Start report-only, then enforce.  
**Effort:** 1 hour

### 3.2 — Boot-Time Mitigation
**File:** `src/hooks/useTerminalBoot.ts` + `src/components/TerminalBootLoader/TerminalBootLoader.tsx`  
**Issues:**  
- 8.2s mobile / 9.7s desktop until nav buttons render  
- No skip-on-repeat-visit  
- Skip button only appears after 1200ms  
**Fixes:**  
- Add `sessionStorage` check: if `bootSkipped` flag exists, skip animation entirely  
- Show "Skip" button immediately (no 1200ms delay)  
- Honor `prefers-reduced-motion` with instant boot  
- Add `skipBoot` flag to `useTerminalBoot` hook  
**Effort:** 3–4 hours

### 3.3 — Resolve `/api/tts` No-Op
**Decision Required:**  
- Option A: Remove the entire `/api/tts` chain (handler, rate rule, client call at `App.tsx:418`)  
- Option B: Implement real TTS via the route  
**Recommendation:** Remove (real voice = Web Speech fallback)  
**Effort:** 2 hours (removal)

### 3.4 — Chunk Splitting
**File:** `vite.config.ts`  
**Issue:** Main chunk = 400 KB min / 137 KB gz (vendor merged into app)  
**Fix:** Configure `manualChunks` to separate `react`, `lucide-react`, `motion/react`, `three` into vendor chunks  
**Effort:** 1–2 hours

### 3.5 — Remove Unused Dependencies & CSS
- Remove `autoprefixer`, `esbuild` from devDependencies  
- Fix `"start": "node dist/server.cjs"` script (nothing produces that file)  
- Delete dead CSS blocks from `src/index.css`: `.terminal-caret`, `glitch` keyframes, `.gpu-accelerated`, `.backdrop-blur-mobile-reduced`, `.no-blur`, `.animate-pulse-subtle`, `.text-justify`, `.assistant-touch-target`  
- Remove unused exports from `api/knowledge-loader.ts`  
**Effort:** 2 hours

---

## Phase 4: Responsive Layout Enhancements

### 4.1 — Expand CSS Breakpoint Coverage
**File:** `src/index.css`  
**Add:** Explicit `@media` queries for commonly missing breakpoints:
```css
/* Extra small devices (320–479px) */
@media (max-width: 479px) { ... }

/* Small tablets (480–767px) */
@media (min-width: 480px) and (max-width: 767px) { ... }

/* Standard tablets (768–1023px) */
@media (min-width: 768px) and (max-width: 1023px) { ... }

/* Large tablets / small laptops (1024–1535px) */
@media (min-width: 1024px) and (max-width: 1535px) { ... }

/* Large desktops (1920px+) */
@media (min-width: 1920px) { ... }
```

### 4.2 — Responsive Typography Scale
Add fluid typography using `clamp()` for key elements:
```css
.hero-title {
  font-size: clamp(2rem, 5vw + 1rem, 5rem);
}
.section-title {
  font-size: clamp(1.25rem, 3vw + 0.5rem, 2.5rem);
}
.body-text {
  font-size: clamp(0.875rem, 1.5vw + 0.5rem, 1.125rem);
}
```

### 4.3 — Container Query Polyfill Strategy
**File:** `src/components/LazySection.tsx` + key layout components  
**Add:** Where component-level responsiveness matters, use `@container` queries alongside media queries for components that render inside flex/grid parents:
```css
@container (max-width: 480px) {
  .card { flex-direction: column; }
}
```
Add `container-type: inline-size` to parent containers.

### 4.4 — Touch Target Expansion
**File:** `src/index.css`  
**Add:** Ensure all interactive elements meet 44×44px minimum touch target:
```css
@media (pointer: coarse) {
  button, a, [role="button"], [tabindex] {
    min-height: 44px;
    min-width: 44px;
  }
}
```

### 4.5 — Responsive Grid Refinements
**LandingPage.tsx:**  
- Hero CTA buttons: `w-full sm:w-auto` ✓ (already done)
- Add `grid-cols-1 sm:grid-cols-2` for social icon grid on very small screens

**App.tsx desktop icons:**  
- Current: `grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6`  
- Add: `xl:grid-cols-7 2xl:grid-cols-8` for ultra-wide optimization  
- Add: Icon label `line-clamp-2` on very small screens instead of `line-clamp-1`

---

## Phase 5: Accessibility Hardening

### 5.1 — Skip Navigation Enhancement
**LandingPage.tsx:**  
- Current skip link targets `#hero-content` → Change to `#main-content` or first interactive element below header  
- Add visible focus style with high contrast (already has `focus:not-sr-only`)

**App.tsx:**  
- Current skip link targets `#main-content` ✓  
- Ensure `tabIndex={-1}` on main works correctly for focus management  
- Add `tabIndex` management for dynamic content (new windows opening)

### 5.2 — Focus Trap for Modals & Sheets
**AssistantLauncher.tsx:**  
- Implement focus trap when mobile sheet is open  
- Focus should cycle within sheet elements  
- On close, return focus to launcher button (partially done via `handleClose`)  
- Add focus trap hook or use a lightweight library

### 5.3 — Enhanced Reduced-Motion Support
**ThreeWormhole.tsx:**  
- Currently renders one static frame — add a subtle CSS fade-in instead of blank canvas  
- Add `prefers-reduced-motion` check for the 3D particle count too

**All animations:**  
- Verify `@media (prefers-reduced-motion: reduce)` covers ALL animation categories  
- Add `scroll-behavior: smooth` only when `prefers-reduced-motion: no-preference`

### 5.4 — Screen Reader Announcements
- Add live region announcements for:  
  - Theme changes (`App.tsx` theme cycling)  
  - Window open/close events  
  - Tour step changes  
  - Toast/notification messages  
- Use `aria-live="polite"` regions for dynamic content

### 5.5 — Keyboard Navigation Polish
- Add `trapFocus` utility for any modal/dialog  
- Ensure all interactive elements in mobile overlay are reachable via Tab  
- Add arrow key navigation for skill filter tabs  
- Ensure dropdown/select components have keyboard support

---

## Phase 6: Loading & Skeleton UX

### 6.1 — Skeleton Loaders for Below-Fold Sections
**File:** `src/components/LazySection.tsx`  
**Enhance:** Replace generic `fallback={<div className="h-screen" />}` with skeleton loaders:
```tsx
const fallback = (
  <div className="p-6 md:p-12 space-y-6 max-w-6xl mx-auto">
    <SkeletonLine width="40%" height="24px" />
    <SkeletonGrid columns={3} />
    <SkeletonLine width="80%" height="120px" />
  </div>
);
```

### 6.2 — Image Loading States
**LandingPage.tsx + LandingBelowFold.tsx:**  
- Add `loading="lazy"` to below-fold images (already done on research papers)  
- Add explicit `width` and `height` to prevent CLS  
- Add CSS `aspect-ratio` to image containers to reserve space before load  
- For research paper images: add a gradient placeholder matching the card background

### 6.3 — Progressive Content Disclosure
- Implement skeleton cards for project/research items as they lazy-load  
- Add `content-visibility: auto` CSS property for off-screen content rendering  
- Consider `@layer` for progressively enhancing sections

### 6.4 — Terminal Boot Loader UX
**TerminalBootLoader.tsx:**  
- Add a progress bar or step indicator during boot  
- Show estimated time remaining or current step label  
- Add keyboard shortcut hint (`Esc` to skip) that appears immediately

---

## Phase 7: Responsive Assistant Chat

### 7.1 — Mobile Sheet Enhancements
**AssistantLauncher.tsx:**  
- Current: `h-[85vh]` — consider `h-[90vh]` on larger phones for more chat space  
- Add `overscroll-behavior: none` to prevent background scroll when sheet is open  
- Add backdrop overlay behind sheet for better modal feel  
- Implement swipe-to-dismiss gesture (touch events)  
- Add keyboard avoidance: scroll input into view when opened  
- Add `inputMode="text"` and `enterKeyHint="send"` to textarea for mobile keyboards  

### 7.2 — Desktop Window Responsiveness
**AssistantLauncher.tsx:**  
- Current: `min-w-[320px]` — ensure minimum works at 320px viewport  
- Add responsive `width`: `w-[90vw] md:w-[35vw] lg:w-[400px]`  
- Add `max-w-[600px]` on large screens to prevent over-stretching  
- Make header compact mode (`compact` prop) activate at smaller widths too

### 7.3 — Touch-Specific Chat Improvements
- Increase message bubble tap targets  
- Add haptic feedback on send (if supported)  
- Show copy/speak buttons on long-press (mobile)  
- Increase font size in chat bubbles on mobile: `text-[14px]` instead of `text-[13px]`

### 7.4 — Safe Area Handling
- Verify `env(safe-area-inset-bottom)` works across all devices  
- Add `env(safe-area-inset-top)` to header when notch present  
- Test on iOS simulator with various notches/islands

---

## Phase 8: Cross-Device Polish

### 8.1 — Fluid Font Scaling
**src/index.css:**  
Replace fixed font sizes with fluid scaling where appropriate:
```css
html {
  font-size: clamp(14px, 0.8rem + 1vw, 18px);
}
```
This ensures text is readable on all devices without per-breakpoint overrides.

### 8.2 — Responsive Image Strategy
**index.html:**  
- Current avatar preload uses `imagesizes` ✓  
- Add `imagesrcset` for all below-fold images (research papers, etc.)  
- Add `fetchpriority="low"` to lazy-loaded images  

**LandingBelowFold.tsx:**  
- Research paper images: add responsive `srcSet` with `sizes` attribute  
- Add `loading="lazy"` to all non-hero images

### 8.3 — Container Queries for Components
Convert key component media queries to container queries where possible:
```css
@container (max-width: 30em) {
  .project-card { flex-direction: column; }
  .project-card img { aspect-ratio: 16/9; }
}
@container (min-width: 48em) {
  .project-card { flex-direction: row; }
}
```

### 8.4 — Hover vs Touch Differentiation
**src/index.css:**  
```css
@media (hover: hover) {
  /* Desktop hover-only effects */
  .hover-lift:hover { transform: translateY(-4px); }
}
@media (hover: none) {
  /* Touch devices: remove hover effects, add active states */
  .hover-lift:active { transform: scale(0.98); }
}
```

### 8.5 — Dark Mode Sync with System Preference
**index.html:**  
- Consider adding `color-scheme: dark light` to support system theme  
- Add `<script>` to sync `theme` with `prefers-color-scheme` on first load  
- Persist user choice to `localStorage`

### 8.6 — Performance Monitoring
- Add Web Vitals tracking (`onPerfEntry` in `main.tsx`)  
- Monitor CLS, FID/INP, LCP in production  
- Add `content-visibility: auto` to below-fold sections

---

## Phase 9: Testing & Validation

### 9.1 — Playwright Device Emulation Tests
**Scenarios:**
```
1. iPhone SE (375px) — full flow: landing → menu → CTA → assistant
2. iPad (768px) — nav switch, assistant desktop vs mobile
3. MacBook 13" (1440px) — window layout, theme switching
4. 4K monitor (2560px) — grid scaling, font rendering
5. Foldable (500px→800px) — orientation change handling
```

### 9.2 — Lighthouse Audits
Run Lighthouse at each breakpoint:
- Performance score ≥ 90  
- Accessibility score ≥ 95  
- Best Practices ≥ 95  
- SEO ≥ 95  

### 9.3 — Real Device Testing
- iOS Safari (iPhone SE + iPad)  
- Android Chrome (Pixel 7 + tablet)  
- Desktop Chrome/Firefox/Safari  
- Edge on Windows (if applicable)

### 9.4 — Screen Reader Testing
- VoiceOver (macOS + iOS)  
- NVDA (Windows)  
- TalkBack (Android)  
- Verify all interactive elements are announced correctly

### 9.5 — Regression Checklist
After each phase, verify:
- [ ] No horizontal overflow at any viewport  
- [ ] All tap targets ≥ 44px on touch devices  
- [ ] `prefers-reduced-motion` disables all decorative animation  
- [ ] Keyboard navigation works without mouse  
- [ ] Skip links are functional  
- [ ] Focus is visible and never lost  
- [ ] Assistant works on 375px viewport  
- [ ] Theme switching works across all breakpoints  
- [ ] All images load without CLS  
- [ ] No console errors  

---

## Effort Summary

| Phase | Items | Est. Effort |
|---|---|---|
| Phase 1 | Audit & Organize | 1 hour |
| Phase 2 | P0 Critical Fixes | 2 hours |
| Phase 3 | P1 Performance | 8–10 hours |
| Phase 4 | Responsive Layout | 6–8 hours |
| Phase 5 | Accessibility | 8–10 hours |
| Phase 6 | Loading & Skeleton UX | 6–8 hours |
| Phase 7 | Responsive Assistant | 6–8 hours |
| Phase 8 | Cross-Device Polish | 6–8 hours |
| Phase 9 | Testing & Validation | 6–8 hours |
| **Total** | **~47–53 hours** | |

---

## Recommended Execution Order

1. **Week 1:** Phase 1 → Phase 2 → Phase 3 (foundation + critical fixes)  
2. **Week 2:** Phase 4 → Phase 5 (responsive layout + accessibility)  
3. **Week 3:** Phase 6 → Phase 7 (loading UX + assistant responsiveness)  
4. **Week 4:** Phase 8 → Phase 9 (polish + testing + validation)

Or, if doing it all at once: tackle phases sequentially, running tests between each phase.
