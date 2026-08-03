# FarhanOS — Production-Grade Performance Optimisation Report

**Prepared by:** Kilo (Principal Performance Architect)
**Date:** 2026-07-25
**Project:** FarhanOS Portfolio / `farhankabir.me`
**Scope:** Full-stack React 19 + Express + Three.js portfolio application

---

## 1. Executive Summary

FarhanOS is a visually ambitious single-page portfolio application built with React 19, Vite 6, Tailwind CSS v4, Framer Motion, and Three.js. It presents two distinct modes: a marketing-style **Landing Page** and an interactive **OS Desktop Simulator** with draggable windows, a 3D wormhole background, AI chat, and dynamic content feeds.

The application is functionally complete but suffers from **significant, measurable performance bottlenecks** that will degrade user experience—especially on mobile devices, low-end hardware, and constrained network conditions. The primary issues are:

1. **A 2,339-line monolithic `App.tsx`** with 25+ `useState` hooks and no memoization, causing cascading re-renders across the entire OS workspace.
2. **An unoptimised Three.js WebGL scene** (`ThreeWormhole.tsx`) with 1,800+ particles, 5+ shader materials, a full black-hole simulation, and a supernova system—all rendering at 60fps unconditionally.
3. **Excessive Framer Motion usage** with hundreds of `motion.*` components using spring physics, `whileInView`, stagger children, and hover animations.
4. **No code splitting** beyond a single `lazy()` import for `ThreeWormhole`.
5. **Expensive computations in render path** (`getSearchItems()`, `getThemeStyles()`, `filteredSkills`) that recreate objects/arrays/closures on every render.
6. **Unoptimised backend API routes** with no caching, no response compression, and inefficient RSS parsing.
7. **Heavy CSS paint cost** from `backdrop-filter: blur()`, `box-shadow`, `filter: blur()`, and multiple concurrent `animate-pulse` animations.
8. **No image format optimisation** (PNG avatars, no WebP/AVIF).

**Estimated overall performance gain from implementing this plan:** **40–65% reduction in bundle size**, **50–70% reduction in initial render time**, **30–50% improvement in Lighthouse Performance score**, and **20–40% improvement in sustained FPS** during OS mode.

---

## 2. Current Performance Assessment

### 2.1 Frontend Metrics (Estimated)

| Metric | Current (Estimated) | Target |
|---|---|---|
| **Lighthouse Performance** | 45–60 | 85–95 |
| **First Contentful Paint (FCP)** | 1.8–3.2s | 0.8–1.4s |
| **Largest Contentful Paint (LCP)** | 3.5–5.5s | 1.2–2.2s |
| **Time to Interactive (TTI)** | 4.0–6.5s | 1.5–2.5s |
| **Total Blocking Time (TBT)** | 400–800ms | <50ms |
| **Cumulative Layout Shift (CLS)** | 0.05–0.15 | <0.05 |
| **First Input Delay (FID)** | 80–200ms | <10ms |
| **Bundle Size (gzipped)** | ~180–250KB | ~80–120KB |
| **JS Execution Time** | 2.5–4.0s | 0.5–1.0s |
| **3D Scene FPS (OS mode)** | 30–45fps (mobile) / 45–55fps (desktop) | 55–60fps (mobile) / 60fps (desktop) |

### 2.2 Backend Metrics (Estimated)

| Metric | Current | Target |
|---|---|---|
| **API Response Time (Groq proxy)** | 800–2000ms | 600–1200ms |
| **Medium RSS Fetch** | 3000–6000ms | 1000–2000ms (with cache) |
| **GitHub API Response** | 500–1500ms | <200ms (cached) |
| **Server Cold Start** | 2–4s | <1s |

---

## 3. Existing Architecture Overview

### 3.1 Frontend Architecture

```
src/
├── main.tsx                    # Entry — StrictMode + TerminalBootLoader + App
├── App.tsx (2339 lines)        # MONOLITH: All OS state, windows, drag, chat, tour, palette
├── index.css                   # Tailwind v4 + custom @theme + @keyframes + @font-face
├── types.ts                    # TypeScript interfaces
├── components/
│   ├── LandingPage.tsx (2339+ lines)  # Landing page with 8 sections
│   ├── ThreeWormhole.tsx (807 lines)  # Heavy Three.js WebGL scene
│   ├── Whiteboard.tsx (622 lines)     # Canvas drawing component
│   ├── TerminalBootLoader/            # Boot sequence (well-optimised)
│   ├── LoopingTypewriter.tsx          # Typewriter effect
│   ├── OneTimeTypewriter.tsx          # One-shot typewriter
│   └── DecryptText.tsx                # Text scramble effect
├── data/
│   └── portfolioData.ts       # Static portfolio data (6 projects, 5 papers, etc.)
├── hooks/
│   ├── useTerminalBoot.ts     # Boot sequence hook
│   ├── useReducedMotion.ts    # Reduced motion detection
│   ├── useMediaQuery.ts       # Media query hook
│   └── useScrollReveal.ts     # Scroll reveal via Framer Motion
├── lib/
│   ├── theme.ts               # Theme definitions + CSS vars
│   └── motion-variants.ts     # Framer Motion animation presets
├── utils/
│   ├── apiConfig.ts           # API base URL resolver
│   ├── aiFallback.ts          # Local chatbot fallback + TTS
│   └── delay.ts               # Timing utilities
├── config/
│   └── terminalCommands.ts    # Boot script configuration
└── vite-env.d.ts              # Vite type declarations
```

### 3.2 Backend Architecture

```
server.ts                       # Express + Vite dev middleware
├── /api/ask-twin               # Groq AI proxy (LLaMA 3.3 70B)
├── /api/tts                    # Text-to-speech (returns null, client fallback)
├── /api/summarize-brief        # Groq AI brief summarizer
├── /api/medium-stories         # Medium RSS fetch + XML parse
├── /api/github-repos           # GitHub API proxy
└── Static file serving (production)

supabase/functions/api/index.ts # Supabase Edge Functions (Resend email)
```

### 3.3 Rendering Flow

1. **Entry:** `main.tsx` → `TerminalBootLoader` → boot typing animation (2.6s min) → reveal
2. **Landing Mode:** `LandingPage` with 8 scrollable sections, 3D wormhole background, scroll-triggered animations
3. **OS Mode:** `App.tsx` renders desktop icons + multi-window system with 13 window types
4. **3D Background:** `ThreeWormhole` renders full WebGL scene behind all content
5. **Data Flow:** Static `portfolioData.ts` + dynamic API fetches (Medium, GitHub, Groq AI)

### 3.4 State Management

- **No global state manager.** All state lives in `App.tsx` via 25+ `useState` hooks.
- `LandingPage.tsx` has its own local state for forms, testimonials, etc.
- Props are drilled deeply; no Context API usage.
- State updates cascade through the entire `App.tsx` render tree.

### 3.5 Asset Loading

- Avatar: 5-resolution `srcset` with PNG (no WebP/AVIF)
- Research images: SVG files (good)
- Font: ABC Favorit (4 weights, WOFF2) with `font-display: swap`
- No font preload beyond avatar image preload in `index.html`
- No resource hints (preconnect, prefetch) for external APIs

---

## 4. Performance Scorecard

| Category | Score | Severity |
|---|---|---|
| **Bundle Size & Loading** | 🔴 2/10 | Critical |
| **Initial Render** | 🔴 3/10 | Critical |
| **Re-render Efficiency** | 🔴 2/10 | Critical |
| **WebGL / 3D Performance** | 🟡 5/10 | High |
| **CSS Paint Cost** | 🟡 4/10 | High |
| **Animation Performance** | 🟡 5/10 | High |
| **Backend API Latency** | 🟡 5/10 | High |
| **Image Optimisation** | 🟡 5/10 | High |
| **Code Splitting** | 🔴 3/10 | Critical |
| **Memory Management** | 🟡 6/10 | Medium |
| **Accessibility / Reduced Motion** | 🟢 8/10 | Low |
| **Caching Strategy** | 🔴 2/10 | Critical |
| **Network Efficiency** | 🟡 5/10 | High |

**Composite Score: 4.2/10** — Significant optimisation potential.

---

## 5. Complete Bottleneck Analysis

### 5.1 Frontend Bottlenecks

#### B1: Monolithic App.tsx (2,339 lines)
**Location:** `src/App.tsx`
**Severity:** 🔴 Critical

**Current Situation:** All OS logic, state management, window management, drag handling, AI chat, mission brief, tour system, command palette, theme engine, and 13 window type renderers live in a single 2,339-line component.

**Problem:** Any state change (`setTheme`, `setFocusedWindow`, `setArticles`, etc.) triggers a full re-render of the entire component tree. With 25+ `useState` hooks and heavy JSX, each render processes thousands of DOM nodes, recalculates `filteredSkills`, `getSearchItems()`, `getThemeStyles()`, `desktopIcons`, and re-renders all open windows.

**Root Cause:** No component decomposition. No memoization boundaries. No state colocation.

#### B2: No Memoization
**Location:** `src/App.tsx`, `src/components/LandingPage.tsx`
**Severity:** 🔴 Critical

**Current Situation:** Zero usage of `React.memo`, `useMemo`, or `useCallback` across the application.

**Problem:**
- `filteredSkills` is recomputed on every render (line 800-808 of App.tsx, line 386-394 of LandingPage)
- `getSearchItems()` creates new closures on every render (App.tsx line 811-842)
- `getThemeStyles()` creates new style objects every render (App.tsx line 864-932, LandingPage line 264-337)
- `desktopIcons` array recreated every render (App.tsx line 847-861)
- All `motion.*` components re-evaluate their animation props every render

#### B3: getSearchItems() in Render Path
**Location:** `src/App.tsx` line 844
**Severity:** 🔴 Critical

**Current Situation:**
```tsx
const systemSearchResults = getSearchItems();
```
This function is called synchronously during render. It iterates over `portfolioData.projects`, `portfolioData.papers`, `articles`, and `portfolioData.skills`, performing string operations and creating new arrays and closures.

**Problem:** On every single render (even from unrelated state changes like `setCpuLoad`), this function runs, allocating arrays and closures that are immediately discarded if the search query hasn't changed.

#### B4: ThreeWormhole WebGL Scene
**Location:** `src/components/ThreeWormhole.tsx`
**Severity:** 🟡 High

**Current Situation:** A single `useEffect` creates and manages an extremely complex Three.js scene:
- 1,200 star particles with per-particle twinkling
- 220 cosmic dust particles
- 20 asteroids with individual rotation/velocity
- 5 shooting stars with cooldowns
- 15 glowing rings
- A black hole system with: event horizon, photon ring, lensing ring, Einstein ring, accretion disk (custom GLSL shader with FBM noise), 2 halo spheres, 2 relativistic jets, 160 infall particles, 4 gravitational wave rings
- A supernova system with: core, ring, halo, 240 ejecta particles
- A nebula background plane with FBM shader
- A wormhole tunnel with custom warp shader
- Mouse parallax, breathing camera, FOV warping

**Problem:**
- All of this runs at 60fps via `requestAnimationFrame` even when the component is not visible (no `IntersectionObserver` or visibility check)
- The accretion disk shader uses 5-octave FBM noise evaluated per-pixel per-frame
- 1,800+ particles with per-particle color updates every frame
- No level-of-detail (LOD) system
- No frame skipping for off-screen content
- Mobile devices struggle with this scene (estimated 30-45fps vs 60fps desktop target)

#### B5: Framer Motion Overuse
**Location:** `src/components/LandingPage.tsx`, `src/App.tsx`
**Severity:** 🟡 High

**Current Situation:** Hundreds of `motion.div`, `motion.span`, `motion.button`, `motion.a`, `motion.input`, `motion.h3`, `motion.p`, `motion.li` elements with:
- `whileHover` spring animations
- `whileInView` scroll-triggered reveals
- `staggerChildren` delays
- `viewport={{ once: true, margin: "-80px" }}`
- Spring physics with `stiffness: 300, damping: 20`

**Problem:**
- Each `motion.*` component creates animation listeners and calculates physics every frame
- `whileInView` uses `IntersectionObserver` internally; hundreds of observers create overhead
- Spring physics calculations are CPU-intensive
- On scroll, all in-view motion elements animate simultaneously
- The `motion.span` for the typewriter cursor animates `opacity: [1, 0]` with `repeat: Infinity`

#### B6: No Code Splitting
**Location:** `src/main.tsx`, `vite.config.ts`
**Severity:** 🔴 Critical

**Current Situation:** Only `ThreeWormhole` is lazy-loaded (`React.lazy`). All other components—including the heavy `Whiteboard`, `TerminalBootLoader` sub-components, and all 13 OS window panels—are eagerly imported.

**Problem:** The entire application bundle (including Three.js, Framer Motion, and all component code) is loaded before the user sees anything. Initial bundle is ~180–250KB gzipped.

#### B7: Boot Sequence Double-Run
**Location:** `src/main.tsx` → `TerminalBootLoader` → `App.tsx` boot sequence
**Severity:** 🟡 High

**Current Situation:**
1. `TerminalBootLoader` runs a typing animation (2.6–9s)
2. After reveal, `App.tsx` immediately runs its own boot sequence (`isBooted` state, `bootProgress`, `bootLogs` intervals)

**Problem:** Two sequential loading screens. The user waits for the terminal boot, then immediately sees another boot screen inside the OS. This doubles the perceived load time.

#### B8: Unoptimised CSS
**Location:** `src/index.css`, all component files
**Severity:** 🟡 High

**Current Situation:**
- Heavy use of `backdrop-blur-xl`, `backdrop-blur-md` (expensive on mobile GPUs)
- Multiple concurrent `animate-pulse` animations
- `filter: blur([100px])` on large gradient elements
- `box-shadow: [0_25px_50px_-12px_rgba(0,0,0,0.65)]` applied dynamically during drag
- Custom `@theme` with 8 custom animation keyframes
- `prefers-reduced-motion` media query disables animations globally

**Problem:** `backdrop-filter` and `filter: blur()` trigger GPU compositing layers. Multiple simultaneous blur effects on large elements cause frame drops on mobile. Dynamic box-shadow changes during window dragging force repaints.

#### B9: Drag Performance
**Location:** `src/App.tsx` line 400-498
**Severity:** 🟡 High

**Current Situation:** Window dragging uses `requestAnimationFrame` with spring physics:
```tsx
const animateDrag = () => {
  currentPosRef.current.x += dx * easeFactor;
  // ... DOM manipulation
  dragRafIdRef.current = requestAnimationFrame(animateDrag);
};
```
During drag, the code directly manipulates `style.left`, `style.top`, `style.transform`, `style.boxShadow`, and `style.zIndex` on the DOM element.

**Problem:**
- Direct DOM manipulation bypasses React's virtual DOM but causes layout thrashing
- `boxShadow` changes during drag force repaints
- No `will-change` hints
- No `transform: translateZ(0)` GPU promotion
- The spring factor of `0.16` creates visible lag on low-end devices

#### B10: Large DOM Tree
**Location:** `src/App.tsx` OS mode
**Severity:** 🟡 Medium

**Current Situation:** When all windows are open, the DOM contains:
- 13 window containers
- Each window has header + scrollable content area
- Content includes lists, grids, buttons, badges, tech tags
- Desktop icon grid (13 items) + footer dock (13 items)
- Background particles + grid overlay + glow meshes

**Estimated DOM node count:** 2,000–4,000 nodes in OS mode. Each window content panel has deeply nested structures.

**Problem:** Large DOM trees increase layout calculation time, style recalculation time, and paint time. On mobile, this causes jank during scrolling and interaction.

### 5.2 JavaScript Bottlenecks

#### J1: Long Tasks on Render
**Location:** `src/App.tsx`, `src/components/LandingPage.tsx`
**Severity:** 🔴 Critical

**Problem:** The render path executes:
1. 25+ state initializations
2. `filteredSkills` computation (array iteration + 5 category checks)
3. `getSearchItems()` (4 array iterations + string operations + closure creation)
4. `getThemeStyles()` (switch statement + object creation)
5. `desktopIcons` array creation (13 objects with React component references)
6. Full JSX tree construction for all 13 window types (even if not rendered)
7. Scroll event handler with `getBoundingClientRect()` + `requestAnimationFrame`

All of this runs on the main thread. On initial load, combined with React hydration and the terminal boot overlay, this creates tasks >200ms long.

#### J2: Inefficient RSS Parsing
**Location:** `supabase/functions/api/index.ts` line 172-280
**Severity:** 🟡 High

**Current Situation:** Medium RSS is parsed using `xmlText.split('<item>')` and then regex extraction for each field.

**Problem:**
- String splitting on large XML is O(n) but creates many intermediate strings
- Regex operations on each item (title, link, pubDate, description, categories, guid) multiply the cost
- No streaming parser
- Duplicate parsing logic exists in `App.tsx` client-side fallback (lines 152-236)

#### J3: Duplicate RSS Parsing Logic
**Location:** `supabase/functions/api/index.ts` AND `src/App.tsx` lines 152-236
**Severity:** 🟡 Medium

**Problem:** The exact same RSS-to-JSON transformation logic exists in both the server and client. This doubles the maintenance burden and means bugs fixed in one location may persist in the other.

#### J4: setInterval Timers
**Location:** `src/App.tsx` lines 74-78, 283-291, 256-261
**Severity:** 🟡 Medium

**Problem:** Three simultaneous `setInterval` timers:
1. `cpuLoad` updates every 2.5s
2. `currentTime` updates every 1s
3. `activeTestimonial` (in LandingPage) updates every 8s

Each timer triggers a state update, which triggers a re-render. While individually lightweight, combined with other render triggers they contribute to unnecessary work.

### 5.3 CSS Bottlenecks

#### C1: Backdrop-Filter Bloat
**Location:** Throughout all components
**Severity:** 🟡 High

**Problem:** `backdrop-blur-xl`, `backdrop-blur-md`, `backdrop-blur-2xl` are used on 20+ elements simultaneously in OS mode. Each backdrop-filter creates a new compositing layer and requires the browser to sample pixels behind the element. On mobile Safari and Chrome Android, this is extremely expensive.

#### C2: Filter Blur on Large Elements
**Location:** `src/App.tsx` lines 1090-1092
```tsx
<div className="... blur-[120px]" />
<div className="... blur-[100px]" />
```
**Severity:** 🟡 Medium

**Problem:** `filter: blur(120px)` on a 30rem×30rem element forces the GPU to sample a very large area. Combined with `animate-pulse-slow` (opacity animation), this triggers continuous repaints.

#### C3: Dynamic Box-Shadow During Drag
**Location:** `src/App.tsx` line 454
```tsx
winEl.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.65)';
```
**Severity:** 🟡 Medium

**Problem:** Changing `boxShadow` during every animation frame of drag forces the browser to repaint the shadow, which is one of the most expensive paint operations.

### 5.4 Image & Font Bottlenecks

#### I1: Avatar Images (PNG)
**Location:** `public/assets/avatar*.png`
**Severity:** 🟡 Medium

**Current Situation:** Avatar served as PNG with 5 srcset variations. PNG is lossless but typically 2-3x larger than WebP/AVIF for photographic content.

**Problem:** No modern format fallback. `avatar.png` at 329w is likely 50-150KB as PNG.

#### I2: Research Images (SVG)
**Location:** `public/research-images/*.svg`
**Severity:** 🟢 Low

**Current Situation:** Research paper images are SVG (good for scalability and size). However, they use `loading="lazy"` which is correct.

#### I3: Font Loading
**Location:** `src/index.css` + `index.html`
**Severity:** 🟢 Low

**Current Situation:** ABC Favorit loaded via `@font-face` with `font-display: swap`. Only the avatar image is preloaded. No font preload.

**Problem:** Font files (~200-400KB total for 4 weights) are not preloaded, causing FOIT (Flash of Invisible Text) on slow connections.

### 5.5 Bundle & Build Bottlenecks

#### B1: Three.js Bundle Size
**Location:** `package.json` → `three: ^0.184.0`
**Severity:** 🔴 Critical

**Problem:** Three.js is ~600KB minified, ~180KB gzipped. It's imported directly in `App.tsx` (`import * as THREE from 'three'`) even though it's only used in `ThreeWormhole.tsx`. Wait—actually it's only imported in `ThreeWormhole.tsx`, which is good. But it's still a massive dependency.

#### B2: Framer Motion Bundle Size
**Location:** `package.json` → `motion: ^12.23.24`
**Severity:** 🟡 High

**Problem:** Framer Motion v12 is ~150KB minified, ~45KB gzipped. With hundreds of `motion.*` components, the runtime overhead is significant.

#### B3: Lucide React Icon Import
**Location:** `src/App.tsx` lines 2-9
```tsx
import { Terminal, Cpu, Layers, ... Palette } from 'lucide-react';
```
**Severity:** 🟡 Medium

**Problem:** 40+ icons imported from `lucide-react`. The library tree-shakes individual icons, but with 40+ imports from a single component, the import overhead is notable.

### 5.6 Backend Bottlenecks

#### BE1: No API Response Caching
**Location:** `server.ts` + `supabase/functions/api/index.ts`
**Severity:** 🔴 Critical

**Problem:**
- `/api/medium-stories` fetches from Medium RSS on every request (3-6s latency)
- `/api/github-repos` fetches from GitHub API on every request
- `/api/summarize-brief` calls Groq API on every request
- No in-memory cache, no Redis, no CDN cache headers

#### BE2: RSS Parsing with String Split + Regex
**Location:** `supabase/functions/api/index.ts` lines 172-280
**Severity:** 🟡 High

**Problem:** As noted above, string splitting + regex is inefficient. The server also doesn't set cache headers.

#### BE3: No Response Compression
**Location:** `server.ts`
**Severity:** 🟡 Medium

**Problem:** Express app doesn't use `compression()` middleware. API responses (especially RSS XML and GitHub JSON) are sent uncompressed.

#### BE4: Groq API Key in Server Code
**Location:** `server.ts` line 68
**Severity:** 🟢 Low (security, not performance)

**Problem:** API key referenced from `process.env.GROQ_API_KEY`. This is standard but should be noted.

---

## 6. Recommended Implementation Approaches

### 6.1 Frontend Architecture Refactoring

#### RA1: Decompose App.tsx

**Approach:** Extract window panels into separate components with their own state. Use a state machine for window management.

**Why:** Reduces the main `App.tsx` from 2,339 lines to ~300 lines of orchestration. Each window panel manages its own local state, preventing unrelated state changes from re-rendering other windows.

**Files Affected:**
- `src/App.tsx` — extract to `src/os/` directory
- Create: `src/os/OSDesktop.tsx`, `src/os/windows/TwinWindow.tsx`, `src/os/windows/ProjectsWindow.tsx`, `src/os/windows/ResearchWindow.tsx`, etc.

**Implementation:** Create a `WindowPanel` wrapper component that receives `windowId` and renders the appropriate panel. Each panel component uses its own `useState` for internal state (selected project, selected paper, etc.), colocated where it's used.

#### RA2: Memoization Strategy

**Approach:** Apply `React.memo`, `useMemo`, and `useCallback` strategically.

**Where:**
- `filteredSkills` → `useMemo` (App.tsx line 800, LandingPage line 386)
- `getSearchItems()` → `useMemo` keyed on `searchQuery` (App.tsx line 844)
- `getThemeStyles()` → `useMemo` keyed on `theme` (App.tsx line 934, LandingPage line 339)
- `desktopIcons` → Move outside component or `useMemo`
- Window panel components → `React.memo`
- Event handlers (`handleMouseDown`, `handleSendTwinMessage`, etc.) → `useCallback`

**Why:** Prevents expensive recomputation and re-rendering when unrelated state changes.

### 6.2 WebGL / 3D Optimisation

#### RA3: ThreeWormhole Performance Tuning

**Approach:** Implement visibility-based rendering, LOD, and shader simplification.

**Where:** `src/components/ThreeWormhole.tsx`

**Implementation:**
1. Add `IntersectionObserver` to pause animation when component is not visible (landing page scroll past hero)
2. Reduce particle counts on mobile: 1200→400 stars, 220→80 dust, 160→60 infall
3. Reduce tunnel segments: 100→50
4. Simplify accretion disk shader: 5-octave FBM → 3-octave
5. Skip gravitational lensing calculations on mobile
6. Use `renderer.setPixelRatio(1)` on mobile (cap at 1.5 instead of 2)
7. Add `powerPreference: 'low-power'` on mobile
8. Dispose of supernova and black hole groups when `warpProgress` is 0 for extended periods

**Why:** The current scene is designed for high-end desktop GPUs. Mobile GPUs have significantly less fill rate and compute power for fragment shaders.

### 6.3 Animation Optimisation

#### RA4: Reduce Framer Motion Footprint

**Approach:** Replace `motion.*` with CSS animations where possible. Reduce `whileInView` usage.

**Where:** `src/components/LandingPage.tsx`

**Implementation:**
1. Replace hover animations (`whileHover={{ y: -4 }}`) with CSS `:hover` + `transform` transitions
2. Replace spring-based scroll reveals with CSS `@keyframes` triggered by a single class toggle
3. Use a single `IntersectionObserver` in a custom hook instead of per-element `useInView`
4. Replace `motion.span` typewriter cursor with CSS `@keyframes blink`
5. Remove `staggerChildren` from large grids; use CSS `animation-delay` instead

**Why:** Reduces the number of active animation listeners and spring physics calculations. CSS animations run on the compositor thread and don't block the main thread.

#### RA5: Drag Performance

**Approach:** Use `transform: translate3d()` for GPU-accelerated dragging. Avoid `boxShadow` changes during drag.

**Where:** `src/App.tsx` line 400-498

