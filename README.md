# farhanos

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Groq](https://img.shields.io/badge/Groq-Llama_3.3_70B-orange)](https://groq.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Serverless-black?logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An interactive portfolio workspace structured as a functional operating system. Built with React 19, Vite 6, Tailwind CSS v4, and Groq Llama 3.3 70B.

**Live:** [https://farhankabir.me](https://farhankabir.me)

---

## Overview

`farhanos` is a production-grade portfolio application that presents clinical NLP research, full-stack SaaS architectures, and AI engineering work inside an interactive desktop-like environment. It replaces conventional portfolio layouts with a windowed OS interface, motion-driven transitions, a terminal boot sequence, and a floating AI assistant.

The project is built by **Farhan Kabir** — AI Engineer, NLP Researcher, and Full Stack Developer. It serves as a public-facing showcase for peer-reviewed publications, open-source projects, research metrics, and AI-driven interaction patterns.

The application supports two views:
- **Landing page** — scrollable single-page experience with 3D starfield background, sections for about, skills, timeline, projects, publications, and contact.
- **OS mode** — desktop-like environment with draggable windows, command palette, and system utilities.

---

## Features

### Core Experience
- **Terminal Boot Loader** — animated entry sequence with scan lines, particles, and a 60fps typing engine synced to display refresh via `requestAnimationFrame`.
- **Dual View Modes** — landing page and OS mode, with transition animations between them.
- **Command Palette** — `Cmd/Ctrl + K` triggers search across projects, papers, articles, skills, and system actions.
- **Theme Engine** — five built-in themes: `dark`, `cyberpunk`, `ai`, `terminal`, `light`.

### Floating AI Assistant
- **Always-available chat** — positioned at the bottom-left on both landing and OS views.
- **Groq-backed responses** — routes to `/api/ask-twin` and uses `llama-3.3-70b-versatile` with a system prompt containing verified biographical, research, and project data.
- **Quick actions** — one-tap prompts for Research, Projects, Skills, and Contact.
- **Responsive behavior** — desktop uses an expanded panel; mobile opens a full-screen bottom-sheet with drag handle and large close button.

### Content Modules
- **Projects Explorer** — 16 projects with tech stack, architecture, metrics, and GitHub links.
- **Publications Reader** — peer-reviewed papers with methodology, datasets, pipelines, results, and citations.
- **Timeline** — career and professional timeline components.
- **Skills Graph** — categorized skill nodes with categorical filtering.
- **Conceptual Garden** — interactive graph visualization of research and engineering focus areas.
- **Resume Viewer** — audience-switchable resume (recruiter, investor, founder, researcher).
- **Mission Brief** — contact form that uses Groq to analyze incoming inquiries and dispatches email via Resend.
- **Whiteboard** — lazy-loaded interactive canvas for sketching ideas.

### Integrations
- **Groq API** — AI chat completions and brief analysis.
- **Resend** — contact form email delivery.
- **GitHub API** — live repository telemetry by username.
- **Medium RSS** — live article feed parsing and caching.
- **Web Speech API** — client-side text-to-speech fallback.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, TypeScript, Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion), CSS transitions |
| 3D / WebGL | Three.js |
| Icons | Lucide React |
| Backend (dev) | Express, Node.js |
| Backend (prod) | Vercel Serverless Functions |
| AI | Groq API (`llama-3.3-70b-versatile`) |
| Email | Resend |
| Fonts | Custom woff2 with preload |
| Deployment | Vercel (production), GitHub Pages (legacy) |

---

## Architecture

### Request Lifecycle

1. **Dev mode** — `server.ts` starts a Vite middleware server on `PORT` (default `3001`). API routes are mounted on the same Express app.
2. **Production (Vercel)** — `vercel.json` routes `/api/*` to `api/index.ts` (single serverless function) and all other paths to the Vercel static build output (`dist/`).
3. **Production (Express)** — `server.ts` serves `dist/` statically and falls back to `index.html` for SPA routing.

### Frontend Structure
- `App.tsx` — root component managing view mode (`landing` / `os`), window state, theme, and global shortcuts.
- `LandingPage.tsx` — scrollable landing sections and animations.
- `FloatingAssistant.tsx` — floating chat UI with magnetic hover, ripple effects, and responsive sheet behavior.
- `TerminalBootLoader/` — boot sequence with custom typing engine and particle effects.
- `ThreeWormhole.tsx` — WebGL background scene.
- `Whiteboard.tsx` — lazy-loaded canvas component.

### Backend Structure
- `api/index.ts` — single bundled Vercel serverless handler containing all API routes:
  - `POST /api/ask-twin`
  - `POST /api/tts`
  - `POST /api/summarize-brief`
  - `GET /api/medium-stories`
  - `GET /api/github-repos`
  - `POST /api/contact`
- `server.ts` — local development server that mirrors the same API routes and serves Vite middleware / static dist.

### Data Flow
- Static portfolio data lives in `src/data/portfolioData.ts` and is typed by `src/types.ts`.
- Dynamic data is fetched from backend APIs or falls back to static data.
- AI requests are proxied to Groq from both the Vercel serverless function and the local Express server.

---

## Project Structure

```
├── api/
│   ├── index.ts              # Vercel serverless backend (all endpoints)
│   └── utils/
│       └── rssParser.ts      # Medium RSS feed parser
├── src/
│   ├── components/
│   │   ├── FloatingAssistant.tsx
│   │   ├── LandingPage.tsx
│   │   ├── Whiteboard.tsx
│   │   ├── ThreeWormhole.tsx
│   │   ├── DecryptText.tsx
│   │   ├── OneTimeTypewriter.tsx
│   │   ├── LoopingTypewriter.tsx
│   │   └── TerminalBootLoader/
│   │       ├── TerminalBootLoader.tsx
│   │       ├── CommandRenderer.tsx
│   │       ├── OutputRenderer.tsx
│   │       ├── Cursor.tsx
│   │       ├── Prompt.tsx
│   │       ├── Particles.tsx
│   │       ├── Background.tsx
│   │       ├── TransitionManager.tsx
│   │       └── TypingEngine.ts
│   ├── config/
│   │   └── terminalCommands.ts
│   ├── data/
│   │   └── portfolioData.ts
│   ├── hooks/
│   │   └── useTerminalBoot.ts
│   ├── utils/
│   │   ├── apiConfig.ts
│   │   ├── rssParser.ts
│   │   ├── aiFallback.ts
│   │   └── audio.ts
│   ├── types.ts
│   ├── index.css
│   ├── main.tsx
│   └── App.tsx
├── public/
│   ├── CNAME
│   ├── fonts/
│   └── assets/
├── .env.example
├── index.html
├── package.json
├── server.ts
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install
```bash
npm install
```

### Environment Variables
Create a `.env` file in the project root:

```env
GROQ_API_KEY="your_groq_api_key"
PORT=3001
APP_URL="your_app_url"
```

Do not commit `.env`. It is gitignored.

### Development
```bash
npm run dev
```
Opens `http://localhost:3001` with Express + Vite middleware.

### Build
```bash
npm run build
```
Outputs static assets to `dist/`.

### Production (Express)
```bash
npm run start
```
Serves the built `dist/` folder from `PORT`.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Express + Vite dev server on port 3001 |
| `npm run build` | Build frontend with Vite |
| `npm run vercel-build` | Alias for `npm run build` |
| `npm run start` | Serve production build with Express |
| `npm run lint` | Run TypeScript type checking (`tsc --noEmit`) |
| `npm run deploy` | Build with `/FarhanOS/` base and publish to GitHub Pages |
| `npm run deploy:domain` | Build with `/` base and publish to GitHub Pages for custom domain |

---

## API Documentation

Base path in production: `/api`

### `POST /api/ask-twin`
Chat completion endpoint for the digital twin and floating assistant.

**Request body:**
```json
{
  "message": "string",
  "history": [{ "role": "user" | "assistant", "content": "string" }]
}
```

**Response body:**
```json
{ "reply": "string" }
```

---

### `POST /api/tts`
Text-to-speech placeholder endpoint.

**Request body:**
```json
{ "text": "string" }
```

**Response body:**
```json
{ "audio": null }
```

---

### `POST /api/summarize-brief`
Analyzes a project brief and returns an AI-generated strategy summary.

**Request body:**
```json
{
  "projectType": "string",
  "budget": "string",
  "timeline": "string",
  "goals": "string",
  "comments": "string"
}
```

**Response body:**
```json
{ "summary": "string" }
```

---

### `GET /api/medium-stories`
Returns parsed Medium RSS stories with ETag and Last-Modified caching headers.

**Response body:**
```json
[
  {
    "id": "string",
    "title": "string",
    "category": "AI | Engineering | Productivity | Research | Life | Startups | Design | Philosophy",
    "readTime": "string",
    "date": "string",
    "excerpt": "string",
    "content": "string",
    "link": "string",
    "imageUrl": "string"
  }
]
```

---

### `GET /api/github-repos`
Returns top GitHub repositories by stars for `farhankabir133` with ETag and Last-Modified caching headers.

**Response body:**
```json
[
  {
    "id": "number",
    "name": "string",
    "full_name": "string",
    "description": "string",
    "html_url": "string",
    "language": "string",
    "stargazers_count": "number",
    "forks_count": "number",
    "updated_at": "string",
    "topics": ["string"],
    "homepage": "string"
  }
]
```

---

### `POST /api/contact`
Processes contact form submissions, analyzes urgency via Groq, and sends email via Resend.

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "metadata": "object"
}
```

**Response body:**
```json
{
  "success": true,
  "message": "string",
  "analysis": {
    "urgency": "High | Medium | Low",
    "inquiryType": "string",
    "summaryText": "string",
    "suggestedAutoReply": "string"
  },
  "emailStatus": { "sent": boolean, "id": "string", "error": "string" }
}
```

---

## Deployment

### Vercel (Production)
The site is live at **https://farhankabir.me** via a Vercel custom domain.

**Configuration files:**
- `vercel.json` — routes `/api/*` to the serverless backend and all other routes to the static build.
- `CNAME` — contains `farhankabir.me` for custom domain configuration.

**Deploy:**
```bash
npx vercel --prod
```

### GitHub Pages (Legacy)
```bash
npm run deploy
```
Publishes the built site to the `gh-pages` branch.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GROQ_API_KEY` | Yes | Groq API key for Llama 3.3 70B completions |
| `PORT` | No | Development server port (default: `3001`) |
| `APP_URL` | No | Base URL for self-referential links |

Secrets are configured in the Vercel dashboard for production deployments.

---

## Performance

- **Typing Engine** — `requestAnimationFrame` batching replaces per-character `setTimeout` for display-synced animation.
- **GPU-Friendly Transitions** — uses `opacity` and `scale` only; no `blur()` in reveal animations.
- **Code Splitting** — manual chunks for `react`, `three`, and `motion`.
- **Caching** — `medium-stories` and `github-repos` endpoints use in-memory caching with ETag/Last-Modified.
- **Lazy Loading** — Whiteboard and heavy 3D components are lazy-loaded.
- **Font Preloads** — critical fonts preloaded with `preload` and `preconnect` hints.
- **Responsive Design** — fluid widths, safe-area insets, and reduced motion support for mobile.

---

## Security

- Server-side API keys (`GROQ_API_KEY`, `RESEND_API_KEY`) are injected as Vercel environment variables and never exposed to the client bundle.
- Express server uses `compression` thresholded at 1024 bytes.
- Contact form validates required fields server-side before processing.
- No client-side secrets are logged or rendered.

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari 14+
- Chrome for Android

Uses modern JavaScript features (`ES2022`), CSS nesting, and `react-jsx` transform.

---

## License

MIT

---

## Maintainer

**Farhan Kabir**
- Website: [https://farhankabir.me](https://farhankabir.me)
- GitHub: [@farhankabir133](https://github.com/farhankabir133)
- LinkedIn: [farhankabir133](https://www.linkedin.com/in/farhankabir133)
- Email: [farhankabir133@gmail.com](mailto:farhankabir133@gmail.com)
