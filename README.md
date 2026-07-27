# farhanos // COGNITIVE DIALECTICS OS

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Framework: React 19](https://img.shields.io/badge/Framework-React_19-indigo.svg)](https://react.dev/)
[![Styling: Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind_v4-06b6d4.svg)](https://tailwindcss.com)
[![AI-Core: Groq Llama 3.3](https://img.shields.io/badge/AI--Core-Groq_Llama_3.3_70B-orange.svg)](https://groq.com/)
[![Backend: Supabase Edge Functions](https://img.shields.io/badge/Backend-Supabase_Edge_Functions-green.svg)](https://supabase.com/)

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
* **Server Backend**: Supabase Edge Functions (Deno runtime, sole production backend)
* **Dev Server**: Node.js + Express (local development only, proxies to shared route handlers)
* **AI Engine**: Groq API (`llama-3.3-70b-versatile`) via direct fetch calls
* **Email**: Resend API for transactional email (contact form)
* **Static Hosting**: GitHub Pages (`gh-pages`) + Vercel (`vercel.json`)

---

## 📂 Project Structure

```bash
├── backend/                     # Shared backend modules (Deno + Node compatible)
│   ├── index.ts                 # Supabase Edge Function entry point
│   └── shared/
│       ├── config.ts            # Centralized configuration (env vars, timeouts, limits)
│       ├── types.ts             # Shared TypeScript interfaces for request/response bodies
│       ├── prompts.ts           # Deduplicated AI system prompts
│       ├── cors.ts              # CORS handling with configurable origin allowlist
│       ├── errors.ts            # Standardized error classes (AppError, ValidationError, etc.)
│       ├── email.ts             # HTML email builder for contact form notifications
│       ├── middleware/
│       │   ├── rateLimit.ts     # IP-based in-memory rate limiting
│       │   └── sanitize.ts      # Input sanitization (XSS prevention, email validation)
│       ├── routes/
│       │   ├── askTwin.ts       # AI Twin chat handler (Groq proxy)
│       │   ├── tts.ts           # Text-to-Speech handler (client-side fallback)
│       │   ├── summarizeBrief.ts# Mission brief summarization (Groq proxy)
│       │   ├── mediumStories.ts # Medium RSS feed fetch with caching
│       │   ├── githubRepos.ts   # GitHub repos fetch with caching
│       │   ├── contact.ts       # Contact form + AI analysis + Resend email
│       │   └── health.ts        # Health check endpoint
│       └── utils/
│           ├── fetchWithTimeout.ts  # HTTP fetch with timeout and retry logic
│           ├── logger.ts            # Structured JSON logger
│           └── rssParser.ts         # Medium RSS XML parser
├── supabase/
│   └── functions/api/index.ts   # Thin wrapper: re-exports backend/index.ts
├── server.ts                    # Express dev server (local development only)
├── src/                         # React frontend application
│   ├── utils/
│   │   ├── apiConfig.ts         # Dynamic API base URL resolver
│   │   ├── aiFallback.ts        # Client-side AI fallback + speech synthesis
│   │   └── rssParser.ts         # RSS parser (frontend-side copy)
│   └── ...
├── tests/                       # Vitest test suite
│   └── unit/backend/
│       ├── shared/routes/       # Route handler tests
│       └── shared/middleware/   # Sanitizer & rate limiter tests
├── dist/                        # Deployed production assets
├── .env.example                 # Environment variables template
├── vercel.json                  # Vercel static deployment configuration
├── tsconfig.json                # TypeScript config (includes backend/ and src/)
├── vite.config.ts               # Vite bundler + vitest configuration
└── package.json                 # Scripts, dependencies, devDependencies
```

---

## ⚡ Performance Optimizations

This repository includes a full-stack performance optimization pass based on `PERFORMANCE_OPTIMIZATION_REPORT.md`:

- **React render efficiency**: `useMemo` / `useCallback` applied across `App.tsx` and `LandingPage.tsx`; drag system switched to GPU-accelerated `translate3d` with `will-change` hints.
- **WebGL tuning**: `ThreeWormhole.tsx` now uses mobile LOD, `IntersectionObserver` visibility gating, reduced FBM octaves, and capped pixel ratio on low-end devices.
- **CSS paint cost**: Added `.gpu-accelerated`, `.no-blur`, and mobile `backdrop-filter` reduction utilities; optimized keyframe animations with `translateZ(0)`.
- **Backend latency**: Added `compression()` middleware, ETag/Last-Modified caching, shared RSS parser utility, and cache headers on API responses.
- **Critical path hints**: `index.html` now includes `preconnect`/`dns-prefetch` for API domains and font preloads.
- **Dead code removed**: Unused components, hooks, and IDE/agent config files purged from the production tree.

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
PORT=3001
CORS_ORIGINS=*
```
Get your Groq API key from https://console.groq.com and Resend key from https://resend.com.

### 4. Run Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3001` in your browser. The Express dev server proxies API requests to shared route handlers (backend/shared/routes/). All backend logic is shared between the dev server and the production Supabase Edge Function.

---

## 🏗️ Build & Deployment

### Architecture
- **Production Backend**: Supabase Edge Functions (`supabase/functions/api/`) — thin wrapper re-exporting `backend/index.ts`
- **Frontend**: Static SPA built by Vite (`npm run build` → `dist/`)
- **Deployment**: GitHub Pages or Vercel (static assets) + Supabase Edge Functions (API routes)

### Production Compilation
Bundle the static assets for frontend deployment:
```bash
npm run build
```
The compiled output is saved under `dist/`.

### Supabase Edge Functions Deployment
Deploy the backend Edge Function to Supabase:
```bash
supabase link --project-ref <your-project-ref>
supabase functions deploy api --no-verify-jwt
```
Set secrets in the Supabase dashboard (Settings → API → Secrets):
- `GROQ_API_KEY` — your Groq API key
- `RESEND_API_KEY` — your Resend API key
- `CORS_ORIGINS` — comma-separated list of allowed origins (e.g., `https://farhankabir.me,https://*.vercel.app`)

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
