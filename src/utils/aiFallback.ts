/**
 * Fallback Speech Synthesis using the browser's native Web Speech API.
 * This allows the OS Voice to speak even when the backend TTS service is unavailable.
 */
export function speakTextClient(
  text: string,
  onEnd?: () => void
): { stop: () => void } | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    if (onEnd) onEnd();
    return null;
  }

  // Cancel any ongoing speech synthesis
  window.speechSynthesis.cancel();

  // Clean up markdown syntax to make the voice narration sound natural
  const cleanText = text
    .replace(/[*_#`~[\]]/g, '') // remove markdown characters
    .replace(/➔/g, ' to ') // translate arrows
    .replace(/F1/gi, 'F-1') // translate metrics
    .replace(/LLMs?/gi, 'Large Language Models')
    .replace(/NLP/gi, 'Natural Language Processing')
    .trim();

  const utterance = new SpeechSynthesisUtterance(cleanText);

  // Search for a premium-sounding voice in English
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice =
    voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.includes('Google') ||
          v.name.includes('Natural') ||
          v.name.includes('Samantha') ||
          v.name.includes('Zira'))
    ) ||
    voices.find((v) => v.lang.startsWith('en')) ||
    voices[0];

  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.pitch = 1.05; // slightly futuristic tone
  utterance.rate = 0.98; // slightly slower for professional delivery

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);

  return {
    stop: () => {
      window.speechSynthesis.cancel();
      if (onEnd) onEnd();
    },
  };
}

/**
 * Intelligent local portfolio chatbot fallback.
 * Uses keyword matching over the Farhan Kabir biography, research, and project corpus.
 */
export function getAskTwinFallback(
  message: string,
  history: Array<{ role: 'user' | 'assistant'; content: string }>
): string {
  const q = message.toLowerCase().trim();

  // 1. Depression / Mental Health
  if (
    q.includes('depression') ||
    q.includes('mental') ||
    q.includes('health') ||
    q.includes('distress') ||
    q.includes('clinical') ||
    q.includes('wellness')
  ) {
    return (
      "My research in clinical NLP has led to two main publications: \n\n" +
      "1. 'Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques' (IEEE ICCIT 2023) - I fine-tuned a RoBERTa-Clinical classifier on 120,000 distinct social posts, mapping negative pronoun density and vocabulary shifts. The model achieved a peak F1-score of 0.914.\n" +
      "2. 'Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques' (IEEE ECCE 2025) - I compared custom BERT and RoBERTa models to classify emotional states and clinical distress levels, securing an F1-score of 0.908.\n\n" +
      "These models offer non-invasive cognitive diagnostic support for healthcare assistants."
    );
  }

  // 2. Adversarial attacks / Jailbreak / Prompt injection
  if (
    q.includes('attack') ||
    q.includes('adversarial') ||
    q.includes('prompt') ||
    q.includes('jailbreak') ||
    q.includes('inject') ||
    q.includes('perplexity') ||
    q.includes('break the model')
  ) {
    return (
      "In my 2025 IEEE ICCIT paper, 'Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs', we engineered a security framework. " +
      "Before a prompt propagates to the core LLM, we measure token perplexity. Causal models typically predict normal language with low perplexity, while adversarial prompt injections display sharp, anomalous perplexity shifts. " +
      "By setting threshold boundaries, our system blocks attacks in real-time with 94.2% accuracy and only 4.5ms latency overhead, preserving LLM safety alignments."
    );
  }

  // 3. AI Live Interview / Posture / Late Fusion
  if (
    q.includes('interview') ||
    q.includes('posture') ||
    q.includes('computer vision') ||
    q.includes('cv') ||
    q.includes('facial') ||
    q.includes('late-fusion')
  ) {
    return (
      "My 2025 IEEE ICCIT paper, 'AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision', presents a multimodal evaluation pipeline. " +
      "We fuse speech transcripts (via Wav2Vec 2.0) with physical candidate posture and facial keypoint vectors (via MediaPipe). A BERT text classifier evaluates response semantics. " +
      "Fusing these bimodal streams in a late-fusion model, we reached 91.6% assessment accuracy, maintaining an agreement rate of 0.87 (Cohen's Kappa) with human HR professionals."
    );
  }

  // 4. TypeRush
  if (q.includes('typerush') || q.includes('typing') || q.includes('game')) {
    return (
       "TypeRush is an atmospheric, typing survival game built with React 19, TailwindCSS, the Web Audio API, Express, the Groq API, and Firebase. " +
      "It renders moving kinetic letters as physics-based threats, prompting the player to type them before they collide with a spaceship shield. " +
      "I built a zero-re-render character buffer grid in React running at 60fps, integrated custom Web Audio oscillators for real-time laser synthesis, and used Groq for adaptive visual difficulty scaling."
    );
  }

  // 5. Ink Home
  if (q.includes('ink home') || q.includes('medium') || q.includes('3d') || q.includes('carousel')) {
    return (
      "The Ink Home is a 3D WebGL publication portal and dynamic metadata indexer. " +
      "It fetches Medium RSS feeds, bypasses Cloudflare security layers using a 4-tier backend HTTP proxy list with rotating User-Agent headers, and renders articles in an interactive Three.js 3D carousel. " +
      "Built with React 18, Vite, Three.js, Framer Motion, and Node/SQLite, it targets 60fps animations."
    );
  }

  // 6. SafeSide Predictor
  if (q.includes('safeside') || q.includes('football') || q.includes('poisson') || q.includes('prediction')) {
    return (
      "SafeSide Predictor is a tactical football analytics dashboard and simulation engine. " +
      "It models match outcomes using a custom Poisson probability risk distribution model (F1: 0.88), storing results in Supabase. " +
      "The system utilizes Groq AI to write tactical match pre-views and automates result checks via Express cron jobs."
    );
  }

  // 7. Tech Stack / Skills / Languages
  if (
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('stack') ||
    q.includes('language') ||
    q.includes('framework') ||
    q.includes('database') ||
    q.includes('tools')
  ) {
    return (
      "Here is my core engineering stack:\n\n" +
      "• AI / ML / NLP: PyTorch, Hugging Face (BERT & RoBERTa), Prompt Engineering, Wav2Vec 2.0, FastAPI\n" +
      "• Frontend: React, Next.js, Tailwind CSS v4, Three.js (WebGL), Framer Motion, D3.js\n" +
      "• Backend / Databases: Node.js (Express), Go (Golang), Redis Caching, PostgreSQL, SQLite\n" +
      "• DevOps / Infra: Docker, Git, Linux, Google Cloud Platform (GCP), Supabase, Firebase"
    );
  }

  // 8. Contact / Email / Hire / Transmission Directories
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('hire') ||
    q.includes('job') ||
    q.includes('resume') ||
    q.includes('github') ||
    q.includes('linkedin') ||
    q.includes('medium') ||
    q.includes('instagram') ||
    q.includes('twitter') ||
    q.includes('transmission')
  ) {
    return (
      "You can contact me directly via email at farhankabir133@gmail.com or phone at +880-1783165726. " +
      "My verified transmission directories: " +
      "GitHub — https://github.com/farhankabir133, " +
      "LinkedIn — https://www.linkedin.com/in/farhankabir133/, " +
      "Medium — https://medium.com/@farhankabir133, " +
      "X/Twitter — https://x.com/fkh_236, " +
      "Instagram — https://www.instagram.com/_farhan_kabir/, " +
      "Gravatar — https://gravatar.com/fk133, " +
      "Portfolio — https://farhankabir.me. " +
      "Location: Rajshahi, Bangladesh (UTC+6). " +
      "I am highly interested in roles related to clinical NLP, Agentic workflows, and Full-Stack AI engineering."
    );
  }

  // 9. General greetings / Help / Default
  return (
    "Greetings! I am FarhanTwin, a neural clone representing Farhan Kabir. " +
    "Since this page is currently running on a static hosting environment, the server-side Groq routes are disabled. However, I have full local access to Farhan's portfolio logs.\n\n" +
    "You can ask me about:\n" +
    "• My research papers (depression classification F1: 0.914, adversarial prompt defense models)\n" +
    "• My projects (TypeRush typing game, The Ink Home 3D portal, SafeSide football modeling)\n" +
    "• My technical stack or how to get in contact with me."
  );
}

/**
 * Generates an elegant, deterministic client-side feasibility brief.
 * Simulates the OS diagnostics scan readout with respect to inputs.
 */
export function generateClientBriefSummary(briefForm: {
  projectType: string;
  budget: string;
  timeline: string;
  goals: string;
  comments: string;
}): string {
  const isNLP =
    briefForm.projectType.includes('NLP') ||
    briefForm.goals.toLowerCase().includes('text') ||
    briefForm.goals.toLowerCase().includes('linguistic') ||
    briefForm.goals.toLowerCase().includes('language');

  const modelCandidate = isNLP
    ? 'RoBERTa-Clinical or custom fine-tuned BERT'
    : 'Llama 3.3 70B Versatile / distilled Llama 3B';

  const pipelineLatency = isNLP ? '<5ms inference threshold' : '<150ms roundtrip HMR';

  return (
    `[SYSTEM DIAGNOSTICS READOUT // OFFLINE FEASIBILITY SCAN]\n` +
    `-----------------------------------------------------------------\n` +
    `INITIATIVE PROFILE : Category: ${briefForm.projectType} // Boundary: ${briefForm.budget} // Timeline: ${briefForm.timeline}\n` +
    `SEMANTIC OBJECTIVE : "${briefForm.goals.length > 80 ? briefForm.goals.substring(0, 80) + '...' : briefForm.goals}"\n` +
    `OPERATIVE DIRECTIVES: ${briefForm.comments ? briefForm.comments : 'Standard secure deployment'}\n\n` +
    `TECHNICAL VIABILITY SUMMARY:\n` +
    `• Feasibility: High. The objectives map directly to Farhan's micro-service templates.\n` +
    `• Target Model Candidate: ${modelCandidate}\n` +
    `• Proposed Stack: React client + Go/Node.js API pipeline + Redis quantization caching.\n` +
    `• Optimization Goal: ONNX runtime deployment yielding a ${pipelineLatency} overhead.\n` +
    `• Security Boundary: Local token perplexity classification shields will be activated to protect against prompt injection vectors (94.2% accuracy threshold).`
  );
}
