# FarhanOS — Animation, Responsiveness & UX Upgrade Plan

## Context
FarhanOS is a React + Vite + TypeScript portfolio site built with TailwindCSS v4, Three.js, and the `motion` library (Framer Motion successor). It has two modes: a landing page (`LandingPage.tsx`, 1000+ lines) and an OS desktop simulation (`App.tsx`, 2000+ lines).

Key files:
- `src/App.tsx` — monolithic state holder, theme mapper, window manager, boot sequence
- `src/components/LandingPage.tsx` — monolithic section renderer with duplicated theme logic
- `src/components/ThreeWormhole.tsx` — heavy WebGL background (black hole, nebula, stars)
- `src/index.css` — Tailwind v4 theme + keyframes + custom font faces
- No code splitting, no lazy loading, no reusable animation variants

## Decision: Finalize this plan

### 1. Animation System Overhaul (Motion-First)
**Goal:** Eliminate repetitive `whileInView` boilerplate and add production-grade motion design.

Tasks:
- Create `src/hooks/useScrollReveal.ts` — wraps `whileInView` with a single `useInView` + `motion` preset (fade-up, stagger, scale-in).
- Create `src/lib/motion-variants.ts` — centralized `variants` objects for:
  - `fadeUp` (opacity 0→1, y 30→0)
  - `staggerContainer` / `staggerItem`
  - `scaleIn` (opacity 0→1, scale 0.95→1, spring)
  - `slideInLeft` / `slideInRight` for timeline cards
  - `pageTransition` for landing ↔ OS mode switch
- Replace all inline `initial/whileInView/transition` in `LandingPage.tsx` with variants.
- Add `AnimatePresence` for:
  - Section entry/exit on landing page scroll
  - OS boot screen fade → desktop reveal
  - Window open/close/minimize animations (current windows use CSS `animate-window-open` only; upgrade to motion-driven enter/exit).
- Add `layoutId` for shared-element transitions between landing hero and OS desktop icons.
- Add a `useReducedMotion` hook that returns `true` when `prefers-reduced-motion: reduce` is set, and pass it to all motion components to disable animations.

### 2. Performance & Bundle Optimization
**Goal:** 60fps on mid-range devices, smaller initial JS.

Tasks:
- Wrap heavy components in `React.lazy()` + `Suspense` with a motion shimmer fallback:
  - `ThreeWormhole` → lazy + `Suspense` boundary
  - OS mode window content panels → lazy per window id
- Implement a `useReducedMotion` + `useMediaQuery('(prefers-reduced-motion)')` guard around Three.js mount; skip Three.js entirely on mobile or reduced-motion.
- Reduce Three.js particle counts on mobile: detect touch device via `'ontouchstart' in window`, drop from 1200 stars → 400, dust → 80, skip black hole supernova/jets on low-end.
- Replace raw `requestAnimationFrame` drag handler in `App.tsx` with `motion`'s `useMotionValue` + `useTransform` for GPU-composited window dragging (eliminates layout thrash).
- Add `will-change: transform` to animated elements via Tailwind utility (`will-change-transform`) only during animation, remove after.
- Audit all `onScroll` listeners — throttle with `requestAnimationFrame` (already done in LandingPage) and move to passive listeners where missing.
- Add `loading="lazy"` to images and `decoding="async"`.

### 3. Mobile-First Responsive Redesign
**Goal:** Site must feel native on phone, tablet, and 4K.

Tasks:
- Introduce `src/hooks/useMediaQuery.ts` for breakpoints: `xs` (480), `sm` (640), `md` (768), `lg` (1024), `xl` (1280), `2xl` (1536).
- **OS mode mobile transformation:** On `windowWidth < 768`, disable absolute-positioned draggable windows. Instead render a bottom-sheet navigable stack (single full-screen panel with swipe/drag-to-dismiss via `motion` Pan gestures).
- Add touch-optimized targets: all interactive elements ≥ 44×44px on mobile.
- Use fluid typography: replace fixed `text-[10px]` etc. with `text-xs sm:text-sm` patterns; use `clamp()` for hero heading size.
- Ensure `LandingPage` sections are single-column on mobile, 2-col tablet, 12-col desktop where needed.
- Make command palette accessible on mobile (bottom sheet instead of centered modal).
- Add `overscroll-behavior: none` and scroll-jacking prevention for OS mode on iOS.

### 4. UX Polish & Micro-Interactions
**Goal:** Every tap/click/typing feels alive and premium.

Tasks:
- Replace all `alert()` calls with a custom `Toast` component powered by `motion` (slide in from top-right, auto-dismiss, spring exit).
- Add button press feedback: `whileTap={{ scale: 0.95 }}` on all primary/secondary buttons (missing in several OS panels).
- Add hover glow/focus rings to all interactive cards using `whileHover` and `whileFocus`.
- Implement smooth scroll via `@studio-freight/lenis` or a lightweight `motion` scroll wrapper; pair with `ScrollTrigger`-like `whileInView` for section reveals.
- Add a global `motion.div` loading skeleton with shimmer for async data (Medium stories, twin AI responses).
- Custom cursor? **Decision: Optional / out of scope for performance.** Keep default cursor but add `cursor-pointer` states.
- Add keyboard navigation hints (e.g., `Cmd+K` badge visible on all screens, not just desktop).

### 5. Component Architecture Cleanup
**Goal:** `App.tsx` and `LandingPage.tsx` must be readable and maintainable.

Tasks:
- Extract `LandingPage` sections into `src/components/landing/`:
  - `HeroSection.tsx`
  - `AboutSection.tsx`
  - `SkillsSection.tsx`
  - `TimelineSection.tsx`
  - `ProfTimelineSection.tsx`
  - `ProjectsSection.tsx`
  - `CertificationsSection.tsx`
  - `ContactSection.tsx`
- Extract OS panels from `App.tsx` into `src/components/os/`:
  - `TwinPanel.tsx`
  - `ProjectsPanel.tsx`
  - `ResearchPanel.tsx`
  - `GithubPanel.tsx`
  - `WritingPanel.tsx`
  - `GardenPanel.tsx`
  - `ResumePanel.tsx`
  - `TimelinePanel.tsx`
  - `SkillsPanel.tsx`
  - `BriefPanel.tsx`
  - `BuildsPanel.tsx`
  - `WhiteboardPanel.tsx`
  - `ProfTimelinePanel.tsx`
- Replace duplicate `getThemeStyles()` objects with a single `src/lib/theme.ts` that exports CSS custom properties set on `:root` per theme. Components then read `var(--color-*)` instead of massive Tailwind class strings. This cuts class string bloat by ~60%.
- Extract window management state (`openWindows`, `minimizedWindows`, `focusedWindow`, `windowPositions`) into `src/stores/osStore.ts` using React context or a lightweight Zustand store (Zustand is already implicitly compatible — check if it is used; if not, use `useReducer` + Context to avoid new dependencies).

### 6. Accessibility & Intuitiveness
**Goal:** WCAG 2.1 AA baseline.

Tasks:
- Add semantic landmarks: `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<header>`.
- Add `role="dialog"` and `aria-modal="true"` to OS windows and command palette; trap focus while open.
- Add skip-to-content link hidden until focused.
- Ensure all color combinations meet 4.5:1 contrast ratio (audit current `text-zinc-550` on `bg-zinc-950` — likely fails).
- Add `aria-label` to icon-only buttons (minimize, maximize, close, sound toggle).
- Honor `prefers-reduced-motion` across all `motion` components via the `useReducedMotion` hook.
- Add focus-visible rings: `focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2`.

### 7. Data Flow & State Simplification
**Goal:** `App.tsx` < 400 lines.

Tasks:
- Move boot sequence logic into `src/components/os/BootScreen.tsx` — `App.tsx` only toggles `isBooted`.
- Move AI twin chat into `TwinPanel.tsx` with internal state; lift only `playingMessageIndex` and `currentTTSAudio` up if OS-level audio control is needed.
- Move form validation + submission into `MissionBriefPanel.tsx` and `ContactSection.tsx` respectively.
- Replace `any` types in `LandingPage.tsx` (`item: any` in TimelineCard) with proper `ProfessionalTimelineEvent` / `TimelineEvent` imports.

## Risks & Mitigations
- **Three.js blocking main thread on low-end devices:** Mitigate with mobile particle reduction, deferred mount, and `will-change: transform`.
- **Motion library version mismatch:** The project uses `motion` (v12). All new code must import from `motion/react` or `motion` — no `framer-motion` packages.
- **Theme token migration:** Moving from Tailwind class strings to CSS variables requires updating every component gradually. Phase 1: add CSS variables alongside existing classes. Phase 2: swap classes for vars component by component.
- **Code-splitting OS panels:** Each lazy-loaded panel must handle its own loading state. Use `Suspense` with a motion-powered skeleton at the window level.

## Validation
- Run `tsc --noEmit` (existing lint script) after each module extraction.
- Test on Chrome/Safari mobile emulation (375px, 768px, 1024px, 1440px, 1920px).
- Lighthouse audit: target Performance > 90, Accessibility > 90, Best Practices > 90.
- Manual test: scroll through landing page, open/close 5+ OS windows, drag on desktop, swipe on mobile sheet, toggle all 5 themes, submit contact form, open command palette.

## Order of Execution
1. Create motion variants + `useScrollReveal` hook (`src/lib/motion-variants.ts`, `src/hooks/useScrollReveal.ts`).
2. Refactor `LandingPage.tsx` sections into separate components; apply variants.
3. Introduce CSS theme variables in `index.css` + `src/lib/theme.ts`.
4. Extract OS panels from `App.tsx` and lazy-load them.
5. Replace `getThemeStyles()` class strings with CSS variable references.
6. Add `useReducedMotion` + `useMediaQuery` hooks and wire them into Three.js + motion components.
7. Replace `alert()` with `Toast`.
8. Mobile OS transformation (bottom sheet).
9. Accessibility pass (ARIA, focus, skip links, color contrast).
