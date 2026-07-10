# 🌌 FarhanOS // COGNITIVE DIALECTICS OS

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Framework: React 18/19](https://img.shields.io/badge/Framework-React_19-indigo.svg)](https://react.dev/)
[![Styling: Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind_v4-06b6d4.svg)](https://tailwindcss.com)
[![AI-Core: Gemini 3.5](https://img.shields.io/badge/AI--Core-Gemini_3.5_Flash-emerald.svg)](https://deepmind.google/technologies/gemini/)
[![WebGL: Three.js](https://img.shields.io/badge/WebGL-Three.js-orange.svg)](https://threejs.org/)

> An immersive, high-fidelity windowed operating system simulator presenting clinical NLP research, conceptual garden maps, and AI SaaS agent architectures in an interactive desktop environment.

---

## 🛰️ Tagline
*Explore clinical linguistics, coordinate with real-time neural audio, and engage with AI-native twin engines inside a custom operating matrix.*

---

## 🔗 Live Deployments
* **Official Website (Custom Domain)**: [https://farhankabir.me/](https://farhankabir.me/)
* **Alternative GitHub Pages URL**: [https://farhankabir133.github.io/FarhanOS/](https://farhankabir133.github.io/FarhanOS/)
* **Digital Twin Backend Endpoint**: [http://localhost:3001](http://localhost:3001) (when running locally)

---

## 📋 Table of Contents
1. [About The Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Getting Started](#-getting-started)
6. [Usage & Configurations](#-usage--configurations)
7. [Roadmap](#-roadmap)
8. [Contributing](#-contributing)
9. [License](#-license)
10. [Contact / Author](#-contact--author)

---

## 🛸 About The Project

**FarhanOS** is a production-grade interactive portfolio workspace structured as a functional simulator OS. Designed to showcase clinical NLP methodologies, WebGL visualizations, and full-stack SaaS project architectures, the application rejects flat layouts in favor of an engaging, high-contrast desktop ecosystem.

The interface bridges professional NLP researcher credentials with premium frontend craftsmanship. Visitors can run real-time system tours, examine peer-reviewed publication data with mathematical classifier statistics, check live repository telemetry feeds, and chat directly with an AI-native digital twin clone.

---

## 🌟 Key Features

### 1. Digital Twin AI Clone (`FarhanTwin`)
* **First-Person Conversationalist**: Integrated server-side proxy route communicating with a **Gemini 3.5 Flash** model. Answers questions about Farhan's biography, achievements, tech stack, and publications in his verified tone.
* **Contextual Knowledge Base**: Ingests custom clinical datasets, RoBERTa accuracy F1 indicators, and product metrics directly from system prompts.

### 2. Neural OS Speech Synthesizer (TTS)
* **High-Fidelity Audio Narration**: Connects to the experimental `gemini-3.1-flash-tts-preview` model to synthesize custom speech.
* **Dual Output Modes**: Supports structured website-guided audio tours or article summaries read aloud in a warm, authoritative feminine voice (`Kore`).
* **Visualizer Waveforms**: Animated canvas waveforms rendering real-time audio playback states.

### 3. Monographs & Publications Reader
* **IEEE Publication Database**: Catalog hosting peer-reviewed research papers (e.g., LLM Adversarial Attacks, NLP Candidate Evaluation, Emotion & Depression classifiers).
* **Classifier Dataflow Visualizers**: Animated pipeline models showing text preprocessing and tensor matrix paths.
* **Accuracy Statistics & Citations**: Dynamic matrices tracking precision, F1-scores, sensitivity, and copyable BibTeX resources.

### 4. Sandbox Projects Explorer
* **TypeRush**: Immersive typing survival interface featuring Web Audio API synthesizers and adaptive visual prompts.
* **The Ink Home**: Immersive WebGL particle-galaxy carousel and dynamic scraping portal mapping Medium RSS feeds.
* **SafeSide Predictor**: Tactical football analytics center running Poisson distribution simulations and prediction engines.

### 5. Systems Telemetry & Desktop customizers
* **Interactive Conceptual Garden**: WebGL nodes representing clinical NLP, mental wellness tracking, and data ethics connected via dynamic edges.
* **Mood Theme Engine**: Fast theme switching supporting Dark Slate, Cyberpunk Neon, AI Lavender, Classic Green Terminal, and Clean Light Mode.
* **GitHub Monitor**: Live mock git activity feeds displaying compiling status, lines added, and active package telemetry.

### 6. Futuristic Loading Sequence
* **Animated Entry Experience**: Custom motion-powered loading screen with scan lines, particle effects, and rotating orbital rings.
* **Graceful Exit Transition**: Smooth fade-out with brightness pulse and scale-up animation before entering the main interface.

---

## 🛠️ Tech Stack

* **Frontend Framework**: React 19 (Hooks, useRef cache layers, Framer Motion transitions)
* **Styling & HUD**: Tailwind CSS v4 + custom CSS variable CRT scans + glassmorphic filters
* **WebGL Elements**: Vanilla Three.js (particle gravity wells, node coordinates)
* **Server Backend**: Node.js + Express + CORS proxies + tsx runner
* **AI Engine**: Google GenAI SDK (`@google/genai` Node client wrapper)
* **Deployment**: GitHub Pages (Client) + Google Cloud Run (Server)

---

## 📂 Project Structure

```bash
├── src/                       # Primary React Client application
│   ├── components/            # UI components (Wormholes, Whiteboards, Decrypt tags, Loaders, Typewriters)
│   │   ├── TerminalBootLoader/      # Premium terminal boot loader (opening experience)
│   │   ├── LoopingTypewriter.tsx    # Infinite looping typewriter effect
│   │   ├── OneTimeTypewriter.tsx    # Single-run typewriter effect
│   │   ├── ThreeWormhole.tsx        # WebGL starfield background
│   │   └── LandingPage.tsx          # Hero section with animated text
│   ├── data/                  # Static portfolio configurations (portfolioData.ts)
│   ├── utils/                 # Audio synthesis helper libraries, API configs
│   ├── types.ts               # Core model interfaces and TS contracts
│   ├── index.css              # Main tailwind and CRT scan styles
│   └── main.tsx               # Client entry node
│
├── dist/                      # Deployed production assets
├── supabase/                  # Edge functions for serverless API endpoints
├── server.ts                  # Express production server & Gemini API proxy routing
├── tsconfig.json              # TypeScript compiler parameters
├── vite.config.ts             # Vite bundler configurations with dynamic base paths
└── package.json               # Scripts, manifest dependencies, and devDependencies
```

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
GEMINI_API_KEY="your_google_ai_studio_api_key"
PORT=3001
```

### 4. Run Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3001` in your browser. The Express server acts as both the API proxy for Gemini and the static middleware server.

---

## 🏗️ Build & Deployment

### Production Compilation
Bundle the static assets and compile the TypeScript backend server down to a single compact CJS executable:
```bash
npm run build
```
The compiled output is saved under `dist/` and `dist/server.cjs`. Run the compiled build locally via:
```bash
npm run start
```

### GitHub Pages Static Deployment
To build and publish the frontend bundle directly to your GitHub repository pages branch, run:
```bash
npm run deploy
```
*Note: The asset base URL automatically updates to `/FarhanOS/` under static deployment to prevent resource load errors.*

### Custom Domain Static Deployment
To build and publish the frontend bundle with a root base path (`/`) and push your custom domain settings to GitHub Pages, run:
```bash
npm run deploy:domain
```
*Note: The CNAME configuration is located under `public/CNAME` and will be bundled automatically during the build process.*

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
