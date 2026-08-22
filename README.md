# farhanos // COGNITIVE DIALECTICS OS

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Framework: React 19](https://img.shields.io/badge/Framework-React_19-indigo.svg)](https://react.dev/)
[![Styling: Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind_v4-06b6d4.svg)](https://tailwindcss.com)
[![AI-Core: Groq Llama 3.3](https://img.shields.io/badge/AI--Core-Groq_Llama_3.3_70B-orange.svg)](https://groq.com/)
[![Backend: Express on Railway](https://img.shields.io/badge/Backend-Express_on_Railway-green.svg)](https://railway.app/)

> An immersive, high-fidelity windowed operating system simulator presenting clinical NLP research, conceptual garden maps, and AI SaaS agent architectures in an interactive desktop environment.

---

## 🛰️ Tagline
*Explore clinical linguistics, coordinate with real-time neural audio, and engage with AI-native twin engines inside a custom operating matrix.*

*Hero greeting: "Hi, I'm Farhan Kabir! Crafting Digital Experience with code and creativity"*

*Site favicon updated to custom FK-Sign logo.*

---

## 🔗 Live Deployments
* **Official Website (Custom Domain)**: [https://farhankabir.me/](https://farhankabir.me/)
* **Alternative GitHub Pages URL**: [https://farhankabir133.github.io/FarhanOS/](https://farhankabir133.github.io/FarhanOS/)

---

## 📋 Table of Contents
1. [About The Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Getting Started](#-getting-started)
6. [Usage & Configurations](#-usage--configurations)
7. [Build & Deployment](#-build--deployment)
8. [Contributing](#-contributing)
9. [License](#-license)
10. [Contact / Author](#-contact--author)

---

## 🛸 About The Project

**farhanos** is a production-grade interactive portfolio workspace structured as a functional simulator OS. Designed to showcase clinical NLP methodologies, WebGL visualizations, and full-stack SaaS project architectures, the application rejects flat layouts in favor of an engaging, high-contrast desktop ecosystem.

The interface bridges professional NLP researcher credentials with premium frontend craftsmanship. Visitors can run real-time system tours, examine peer-reviewed publication data with mathematical classifier statistics, check live repository telemetry feeds, chat directly with an AI-native digital twin clone, and explore 16 sandbox projects spanning game development, AI/ML, safety engineering, education, and more.

---

## 🌟 Key Features

### 1. Digital Twin AI Clone (`FarhanTwin`)
* **Direct Groq Integration**: Client and server routes communicate with **Llama 3.3 70B (via Groq)**. Answers questions about Farhan's biography, achievements, tech stack, and publications in his verified tone.
* **Token Streaming**: Responses stream token-by-token over SSE with automatic fallback to JSON and a client-side keyword bot when offline.
* **Bounded Context**: Conversation history is trimmed server-side (12 turns / 16k chars) before every inference; sessions persist to Postgres when `DATABASE_URL` is configured.
* **Contextual Knowledge Base**: Ingests custom clinical datasets, RoBERTa accuracy F1 indicators, and product metrics directly from system prompts.

### 2. Neural OS Speech Synthesizer (TTS)
* **Client-Side Fallback Narration**: The `/api/tts` route returns a null audio payload; all narration falls back to the browser's native Web Speech API with premium voice selection.
* **Visualizer Waveforms**: Animated canvas waveforms rendering real-time audio playback states.

### 3. Monographs & Publications Reader
* **IEEE Publication Database**: Catalog hosting peer-reviewed research papers (e.g., LLM Adversarial Attacks, NLP Candidate Evaluation, Emotion & Depression classifiers) including recent ISEE 2026 acceptances.
* **Classifier Dataflow Visualizers**: Animated pipeline models showing text preprocessing and tensor matrix paths.
* **Accuracy Statistics & Citations**: Dynamic matrices tracking precision, F1-scores, sensitivity, and copyable BibTeX resources.

### 4. Sandbox Projects Explorer
* **TypeRush** (`the-3d-platformer`): Immersive typing survival interface featuring Web Audio API synthesizers and adaptive visual prompts.
* **The Ink Home** (`the-ink-home`): Immersive WebGL particle-galaxy carousel and dynamic scraping portal mapping Medium RSS feeds.
* **SafeSide Predictor** (`safeside`): Tactical football analytics command center running Poisson distribution simulations and prediction engines.
* **9th Grade** (`9th-grade`): Interactive educational platform for middle school students with adaptive quizzes, progress tracking, and gamified learning paths.
* **BuildSafe** (`buildsafe`): Construction safety compliance platform digitizing site hazard reports, inspection schedules, and automated audit documentation.
* **Buddy-Script** (`buddy-script`): AI-powered coding companion providing real-time code review suggestions and pair-programming assistance in the browser editor.
* **RankFlow AI** (`rankflow-ai`): ML pipeline platform for automated model ranking and benchmarking across standardized metrics.
* **Exam-Survival** (`exam-survival`): Adaptive exam preparation platform using spaced repetition and AI-generated mock exams with Ebbinghaus curve scheduling.
* **codelab-ai-genkit-rag** (`codelab-ai-genkit-rag`): Production-ready RAG starter kit for building AI-powered search and answer engines over codebases and technical documentation.
* **AutoSpark** (`autospark`): Intelligent automation tool connecting APIs, spreadsheets, and databases with visual no-code workflow builder.
* **OMNIVA AI** (`omniva-ai`): Enterprise AI operations platform for monitoring, tuning, and governing LLM deployments with real-time observability.
* **farhankabir.com** (`farhankabir-com`): Personal brand website serving as the public-facing portfolio with project highlights and contact channels.
* **Personal_Site** (`personal-site`): Minimalist personal site foundation featuring bio, skills matrix, and spam-filtered contact form.
* **RoutineOS** (`routineos`): Command-line productivity tool managing daily routines, habit tracking, and task scheduling with a terminal-based OS interface.
* **vocab-X** (`vocab-x`): Vocabulary acquisition engine using spaced repetition and generative AI to create personalized learning sessions from any text corpus.

### 5. Systems Telemetry & Desktop Customizers
* **Interactive Conceptual Garden**: WebGL nodes representing clinical NLP, mental wellness tracking, and data ethics connected via dynamic edges.
* **Mood Theme Engine**: Fast theme switching supporting Dark Slate, Cyberpunk Neon, AI Lavender, Classic Green Terminal, and Clean Light Mode.
* **GitHub Monitor**: Live mock git activity feeds displaying compiling status, lines added, and active package telemetry.

### 6. Premium Terminal Boot Loader
* **Animated Entry Experience**: Custom motion-powered boot sequence with scan lines, particle effects, terminal window aesthetics, and typing engine.
* **Graceful Exit Transition**: Smooth fade-out before entering the main landing page interface.

---

## 🛠️ Tech Stack

* **Frontend Framework**: React 19 (Hooks, Motion transitions)
* **Styling & HUD**: Tailwind CSS v4 + custom CSS variable CRT scans + glassmorphic filters
* **WebGL Elements**: Vanilla Three.js (particle gravity wells, node coordinates)
* **Server Backend**: Express 5 on Railway (`src/backend/`) — sole production backend, Dockerized with health checks
* **Dev Server**: Vite dev server with API proxy to the local Express server
* **AI Engine**: Groq API (`llama-3.3-70b-versatile`) via SSE token streaming, with JSON + client-side fallbacks
* **Persistence (optional)**: Postgres (e.g. Supabase) via `DATABASE_URL` — durable contact leads, project briefs, and twin chat sessions; fully stateless when unset
* **Email**: Resend API for transactional email (contact form: owner notification + sender confirmation)
* **Static Hosting**: GitHub Pages (`gh-pages`) + Vercel (`vercel.json`)

---

## 📂 Project Structure

```bash
├── src/
│   ├── backend/                     # Express 5 API (canonical production backend)
│   │   ├── app/server.ts            # Entry point (helmet, cors, compression, rate limits)
│   │   ├── config/env.ts            # Fail-fast env validation + central config
│   │   ├── controllers/             # ask-twin (+ SSE stream), contact, github, medium, brief, health
│   │   ├── routes/                  # Router with per-route AI rate limiting
│   │   ├── middlewares/             # CORS, rate limiter
│   │   ├── services/                # AI orchestration, email delivery
│   │   ├── providers/               # Groq (JSON + streaming), GitHub, Medium RSS, Resend
│   │   ├── repositories/            # Lead + chat-log persistence (best-effort)
│   │   ├── db/                      # Optional Postgres pool + schema.sql
│   │   └── utils/                   # fetch client (timeout/retry), sanitizer, logger
│   ├── components/
│   │   ├── windows/                 # Memoized OS window panels (GitHub, Skills, Builds, Timelines, Research)
│   │   ├── TerminalBootLoader/      # Boot sequence components
│   │   └── LandingPage.tsx          # Marketing page (9 sections)
│   ├── data/portfolioData.ts        # Single source of truth for portfolio content
│   ├── utils/
│   │   ├── apiConfig.ts             # Dynamic API base URL resolver
│   │   ├── aiFallback.ts            # Client-side AI fallback + Web Speech synthesis
│   │   └── rssParser.ts             # RSS parser (frontend-side copy)
├── tests/unit/backend/              # Vitest suite (sanitizer, rate limiter, RSS parser)
├── .github/workflows/ci.yml         # Typecheck → tests → build → backend smoke test
├── Dockerfile                       # Multi-stage, non-root backend image with HEALTHCHECK
├── railway.json                     # Railway deploy config (Dockerfile builder)
├── index.html                       # SEO meta, resource hints, AVIF hero preload
└── vite.config.ts                   # Vite bundler + vitest configuration
```

---

## ⚡ Performance Optimizations

- **AI streaming**: `/api/ask-twin/stream` pipes Groq tokens to the UI over SSE — first token paints in ~300–500ms instead of a full-completion wait; JSON endpoint + keyword fallbacks keep it resilient.
- **React render efficiency**: `useMemo` / `useCallback` across `App.tsx` and `LandingPage.tsx`; heavy windows extracted as `React.memo` components under `src/components/windows/`; clock isolated in its own component; dead timers/states removed.
- **WebGL tuning**: mobile LOD presets now actually apply (previously shadowed), adaptive FBM octaves, `IntersectionObserver` visibility gating, capped pixel ratio, and theme switching mutates uniforms in place instead of rebuilding the scene.
- **Image diet**: hero avatar served as AVIF/WebP via `<picture>` (~96% smaller than PNG) with matching preload; favicon right-sized with apple-touch-icon.
- **CSS paint cost**: async non-blocking stylesheet injection, GPU-accelerated drag via `translate3d`, mobile `backdrop-filter` reductions.
- **Backend**: gzip compression (SSE excluded), ETag revalidation, shared RSS parser, cache headers on API responses, bounded conversation history (12 turns / 16k chars) before every Groq call.
- **Critical path hints**: preconnects limited to origins actually used; font + hero preloads with correct `fetchpriority`.
- **Accessibility**: keyboard-navigable command palette (↑/↓/Enter), tabbable desktop icons, aria-labeled window chrome, global `prefers-reduced-motion` support.

---

## 🚀 Getting Started

Ensure you have [Node.js (v18+)](https://nodejs.org/) installed in your workspace.

### 1. Clone the Repository
```bash
git clone https://github.com/farhankabir133/FarhanOS.git
cd FarhanOS
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory based on `.env.example`:
```env
GROQ_API_KEY=gsk_YOUR_GROQ_API_KEY_HERE
RESEND_API_KEY=re_YOUR_RESEND_API_KEY_HERE
CORS_ORIGINS=https://farhankabir.me,https://www.farhankabir.me
# Optional — enables durable lead/chat persistence (Postgres, e.g. Supabase):
DATABASE_URL=postgresql://...
```
Get your Groq API key from https://console.groq.com and Resend key from https://resend.com.
To apply the persistence schema: `psql "$DATABASE_URL" -f src/backend/db/schema.sql`.

### 4. Run Development Server
Start the Express backend and the Vite dev server:
```bash
# Terminal 1: API server on :3001
npm run dev:backend

# Terminal 2: Frontend dev server with API proxy
npm run dev
```
Or run both with one command: `npm run dev:all`.
Navigate to `http://localhost:5173`. The Vite dev server proxies `/api` requests to the Express server. All backend logic lives in `src/backend/`.

---

## 🏗️ Build & Deployment

### Architecture
- **Production Backend**: Express 5 (`src/backend/`) deployed to Railway via the in-repo `Dockerfile` (multi-stage, non-root, `HEALTHCHECK` on `/api/health`)
- **Frontend**: Static SPA built by Vite (`npm run build` → `dist/`)
- **Deployment**: GitHub Pages or Vercel (static assets) + Railway (API routes at `api.farhankabir.me`)
- **CI**: GitHub Actions runs typecheck, unit tests, build, and a backend boot smoke test on every push/PR

### Production Compilation
Bundle the static assets for frontend deployment:
```bash
npm run build
```
The compiled output is saved under `dist/`.

### Railway API Deployment
Deploy the backend (uses the Dockerfile automatically):
```bash
railway up
```
Set these variables in the Railway dashboard:
- `GROQ_API_KEY` — your Groq API key (**rotate if it was ever committed or leaked**)
- `RESEND_API_KEY` — your Resend API key
- `CORS_ORIGINS` — explicit allow-list, e.g. `https://farhankabir.me,https://www.farhankabir.me` (never `*` in production)
- `GITHUB_TOKEN` — optional read-only token to raise GitHub API rate limits (never reuse the Groq key here)
- `DATABASE_URL` — optional Postgres connection string; enables lead/chat persistence

### GitHub Pages Static Deployment
To build and publish the frontend bundle to the `FarhanOS` project pages path:
```bash
npm run deploy
```
*Note: The asset base URL automatically updates to `/FarhanOS/` to prevent resource load errors.*

### Custom Domain Static Deployment
To build and publish the frontend bundle with a root base path (`/`) and push custom domain settings to GitHub Pages:
```bash
npm run deploy:domain
```
*Note: The CNAME configuration is located under `public/CNAME` and will be bundled automatically during the build process.*

### Vercel Static Deployment
A `vercel.json` configuration is included for Vercel deployments:
```bash
vercel-build
```
Deploy via the Vercel CLI or connect your Git repository for automatic deployments.
Deploy via the Vercel CLI or connect your Git repository for automatic deployments.

---

## 🤝 Contributing

We encourage optimization, visual styling enhancements, and performance fixes!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/quantum-audio`).
3. Commit your Changes (`git commit -m 'feat: Add vintage keyboard clicks'`).
4. Push to the Branch (`git push origin feature/quantum-audio`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) or headers for details.

---

## 🛰️ Human Terminal Connection

* **Project Owner**: Farhan Kabir
* **Contact Email**: [farhankabir133@gmail.com](mailto:farhankabir133@gmail.com)
* **GitHub Profile**: [farhankabir133](https://github.com/farhankabir133)
* **LinkedIn**: [Farhan Kabir Profile](https://www.linkedin.com/in/farhankabir133)
* **Website**: [https://farhankabir.me/](https://farhankabir.me/)
