import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Farhan Kabir',
  title: 'AI Engineer & Research Scientist',
  tagline: 'Designing deep linguistic networks to analyze cognitive states, autism indicators, and mental-health text semantics.',
  about: 'I am an AI Engineer, Researcher, and Full Stack Developer. I build highly robust predictive AI systems, conduct quantitative linguistic analysis, and implement Stripe-polished digital experiences.',
  focus: 'Evaluating Large Language Models for automated cognitive health screenings and zero-shot NLP behavioral diagnostic support.',
  readingNow: '“Linguistic Archetypes in Clinical Psychiatry” and the “Attention Is All You Need” retrospective papers.',
  learningNow: 'Advanced neural text-to-speech architectures (TTS) using flow matching techniques and quantized inference.',
  thinkingAbout: 'Ensuring absolute low-latency agent-driven client interaction cycles without introducing performance bottlenecks.',
  
  projects: [
    {
      id: 'typerush',
      title: 'TypeRush',
      description: 'An immersive, atmospheric typing survival game with real-time sound synthesis, particle effects, and adaptive visual themes.',
      category: 'AI',
      techStack: ['React 19', 'TailwindCSS', 'Web Audio API', 'Express', 'Gemini API', 'Firebase'],
      architecture: 'Zero-re-render character buffer ref grids running at stable 60fps, integrated with a server-side Gemini 3.5 API and real-time Firestore synchronization.',
      timeline: 'Sep 2024 - Mar 2025',
      metrics: [
        { label: 'Audio latency', value: '0ms (Vanilla)' },
        { label: 'Matchmaking Sync', value: '<25ms' },
        { label: 'Frame rate', value: '60fps' }
      ],
      problem: 'Traditional typing practice software lacks sensory engagement and interactive mechanics.',
      solution: 'TypeRush translates text into kinetic physics bodies drifting towards cockpit shield barriers, utilizing Web Audio oscillators and AI-generated themes.',
      roadmap: ['Real-time payload glitch attacks', 'WebAssembly client-side offline dictionary sync']
    },
    {
      id: 'ink-home',
      title: 'The Ink Home',
      description: 'An immersive 3D spatial publication portal and dynamic metadata indexer that syncs Medium RSS feeds into interactive WebGL carousels.',
      category: 'Productivity',
      techStack: ['React 18', 'Vite', 'Three.js', 'Framer Motion', 'TailwindCSS', 'Node.js'],
      architecture: 'Four-tier cascade HTTP profile scraper separating client IPs from Medium telemetry blocks, coupled with local SQLite indexing.',
      timeline: 'Jan 2025 - Present',
      metrics: [
        { label: 'Avatar fetch success', value: '100%' },
        { label: 'RSS sync latency', value: '<320ms' },
        { label: 'Scene frame rate', value: '60fps' }
      ],
      problem: 'Traditional editorial blogs use flat, uninspired layouts and struggle to fetch writer profiles through Cloudflare.',
      solution: 'The Ink Home structures publication feeds into physics-based 3D carousels and bento grids, utilizing backend User-Agent masquerading and proxies.',
      roadmap: ['WebGL spatial audio integration', 'Instant newsletter subscription via Substack API']
    },
    {
      id: 'safeside',
      title: 'SafeSide Predictor',
      description: 'A tactical football analytics command center providing live match simulations, league databases, and deep Poisson risk modeling.',
      category: 'SaaS',
      techStack: ['React', 'Supabase', 'TailwindCSS', 'Express', 'Gemini AI', 'Recharts'],
      architecture: 'Express backend match simulation pipeline integrated with Supabase edge tables and a cron-scheduled prediction verification service.',
      timeline: 'Mar 2025 - Present',
      metrics: [
        { label: 'Poisson model F1', value: '0.88' },
        { label: 'Live updates latency', value: '<150ms' },
        { label: 'Prediction checks', value: 'Automated' }
      ],
      problem: 'Football tactical analysis and predictions are highly fragmented, lacking real-time simulations and secure prediction logging.',
      solution: 'SafeSide combines live result feeds from Football-Data API with Gemini AI analysis and Supabase storage to automate match diagnostics.',
      roadmap: ['Weather-impact modeling via OpenWeather API', 'Multi-league Poisson distribution charts']
    },
    {
      id: 'emotion-detection',
      title: 'Multimodal Emotion Recognizer',
      description: 'A neural model correlating micro-shifts in vocal pitch with linguistic markers in real-time chat data to form high-fidelity emotional feedback loops.',
      category: 'NLP',
      techStack: ['Python', 'BERT', 'Wav2Vec 2.0', 'React', 'FastAPI'],
      architecture: 'Bimodal architecture merging a spectrogram acoustic encoder with a transformer text classifier using an attention-weighted fusion layer.',
      timeline: 'Feb 2023 - Oct 2023',
      metrics: [
        { label: 'Bimodal accuracy', value: '92.3%' },
        { label: 'Speech inference', value: '18ms' },
        { label: 'Dataset size', value: '50GB' }
      ],
      problem: 'Linguistic-only sentiment analysis fails to capture sarcasm, urgency, or vocalized psychological distress of remote clinical patients.',
      solution: 'This project fuses audio tonal variance with text semantic embeddings, allowing diagnostic assistants to register non-verbal mood changes.',
      roadmap: ['Edge deployment on mobile web views', 'Expansion to diagnostic indicators for pediatric developmental screens']
    },
    {
      id: 'portfolio-os',
      title: 'FarhanOS Living Environment',
      description: 'The interactive AI-powered operating sandbox displaying deep visual performance, real-time audio narrator engines, and complete project orchestration.',
      category: 'Design',
      techStack: ['React', 'TailwindCSS', 'Framer Motion', 'Express', 'Gemini API'],
      architecture: 'Unidirectional virtualized OS window controller with standard sandbox processes and real-time TTS speech generators.',
      timeline: 'Mar 2026 - Present',
      metrics: [
        { label: 'Render pipeline frame rate', value: '120fps' },
        { label: 'Asset payload size', value: '142KB' },
        { label: 'Custom APIs', value: '3' }
      ],
      problem: 'Static grid portfolios fail to showcase the sophisticated architectural capabilities, design sensibilities, and core AI engineering talents of top-tier builders.',
      solution: 'FarhanOS encapsulates complete interactive applications into a beautiful, cohesive operating desktop running local simulator widgets.',
      roadmap: ['Add support for complete sandboxed terminal commands', 'Introduce voice command parsing natively via browser audio APIs']
    }
  ],

  papers: [
    {
      id: 'prompt-break-2025',
      title: 'Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs',
      authors: 'Rifat Ahmed Khan, Tasnia Tasnim Momo, Farhan Kabir, Faisal Muhammad Shah',
      journal: 'IEEE ICCIT',
      year: 2025,
      abstract: 'Large Language Models (LLMs) are vulnerable to adversarial prompt injection attacks that bypass safety alignments. This paper proposes a perplexity-based detection framework to flag adversarial prompt injections. By measuring the perplexity of input tokens, the system classifies adversarial requests in real-time before they propagate to the LLM core, securing safety alignments.',
      methodology: 'Calculated perplexity thresholds using local causal LLM token prediction distributions. Built a real-time detection barrier filtering out adversarial inputs.',
      dataset: 'Adversarial prompt datasets (AdvGLUE, Jailbreak Trigger Sets) combined with clean user queries.',
      pipeline: 'User Prompt -> Tokenization -> Perplexity Scoring -> Threshold Boundary check -> LLM Ingestion / Block Alert.',
      results: [
        { metric: 'Detection Accuracy', score: '94.2%' },
        { metric: 'False Positive Rate', score: '2.8%' },
        { metric: 'Latency overhead', score: '4.5ms' },
        { metric: 'Jailbreak F1 Score', score: '0.935' }
      ],
      citation: 'Khan, R. A., Momo, T. T., Kabir, F., & Shah, F. M. (2025). Did the Prompt Break the Model?: Perplexity-Based Detection of Adversarial Attacks on LLMs. 2025 28th ICCIT (IEEE).'
    },
    {
      id: 'live-interview-2025',
      title: 'AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision',
      authors: 'Farhan Kabir, M Arman Reza Shah, Razat Biswas',
      journal: 'IEEE ICCIT',
      year: 2025,
      abstract: 'Traditional candidate assessment methods are manual, slow, and prone to subjective bias. This paper introduces an AI-driven live interview pipeline combining Natural Language Processing (NLP) for verbal responses and Computer Vision (CV) for facial sentiment and posture analytics. Real-time assessment scores are compiled dynamically during candidate streams.',
      methodology: 'Fused Wav2Vec 2.0 acoustic transcripts with MediaPipe posture coordinates and custom BERT text classification heads using a late-fusion model.',
      dataset: '1,200 mock interview recordings annotated by human resource professionals.',
      pipeline: 'Audio/Video Capture -> Transcripts & Keypoint Extraction -> Sentiment & Context Classifier -> Score Matrix Ingestion -> HR Dashboard.',
      results: [
        { metric: 'Late-fusion Accuracy', score: '91.6%' },
        { metric: 'Response Transcribing', score: '110ms' },
        { metric: 'Posture classification', score: '93.2%' },
        { metric: 'Evaluation Agreement', score: '0.87 (Kappa)' }
      ],
      citation: 'Kabir, F., Shah, M. A. R., & Biswas, R. (2025). AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision. 2025 28th ICCIT (IEEE).'
    },
    {
      id: 'emotion-detection-2025',
      title: 'Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques',
      authors: 'Farhan Kabir, M. K. Habib Khan, Fazle Rabby',
      journal: 'IEEE ECCE',
      year: 2025,
      abstract: 'Detecting emotions in text requires understanding context, syntax, and subtle semantic tones. This paper presents a comparative analysis of Natural Language Processing and machine learning models classifying clinical mental distress, depression, and localized emotional states. We demonstrate that custom Transformer models outperform traditional classifiers.',
      methodology: 'Fine-tuned custom BERT and RoBERTa models augmented with emotion-specific classification layers mapping Reddit and social text datasets.',
      dataset: '90,000 annotated social network text posts spanning multiple clinical emotional distress tiers.',
      pipeline: 'Raw text ingestion -> Lexical Normalization -> Embedding Matrix -> BERT/RoBERTa Classification -> Emotion Output.',
      results: [
        { metric: 'BERT Accuracy', score: '88.5%' },
        { metric: 'RoBERTa F1-Score', score: '0.908' },
        { metric: 'Training latency', score: '1.2 hrs' },
        { metric: 'Inference speed', score: '3.8ms' }
      ],
      citation: 'Kabir, F., Khan, M. K. H., & Rabby, F. (2025). Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques. 2025 ECCE (IEEE).'
    },
    {
      id: 'depression-detection-2023',
      title: 'Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques',
      authors: 'Farhan Kabir, Md. Ali Hossain, A. F. M. Minhazur Rahman, Sadia Zaman Mishu',
      journal: 'IEEE ICCIT',
      year: 2023,
      abstract: 'Linguistic anomalies on social media serve as crucial early indicators of clinical depression. We present a machine learning and transformer-based framework analyzing Reddit text discourse. Mapped negative pronoun density, sleep patterns, and vocabulary shifts, demonstrating strong predictive capabilities for diagnostic support.',
      methodology: 'Fine-tuned RoBERTa models on clinical-grade Reddit depression datasets (r/depression) with custom POS weighting matrices.',
      dataset: '120,000 distinct anonymized posts annotated by clinical practitioners.',
      pipeline: 'Text Normalization -> Feature Extraction (Lexical & Pronoun) -> RoBERTa Classification -> Clinician Alerts.',
      results: [
        { metric: 'RoBERTa-Clinical F1', score: '0.914' },
        { metric: 'Baseline Zero-shot F1', score: '0.781' },
        { metric: 'Sensitivity', score: '0.893' },
        { metric: 'Specificity', score: '0.942' }
      ],
      citation: 'Kabir, F., Hossain, M. A., Rahman, A. F. M. M., & Mishu, S. Z. (2023). Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques. 2023 26th ICCIT (IEEE).'
    }
  ],

  timeline: [
    {
      year: 2026,
      title: 'Architect & AI Researcher',
      company: 'Cognitive Diagnostics Lab',
      role: 'Principal systems designer for text analytics and mental wellness semantic mapping NLP assets.',
      description: 'Leading research on LLMs as clinical screening support tooling, authoring publications on clinical mental state evaluation.',
      achievements: [
        'Designed custom zero-shot and classification-optimized clinical prediction systems',
        'Implemented modern low-latency model evaluation dashboards processing high-volume text queues',
        'Established rigid testing criteria ensuring patient confidentiality and data safety parameters'
      ],
      technologies: ['PyTorch', 'Transformer NLP', 'React/Next.js', 'Go', 'TailwindCSS v4']
    },
    {
      year: 2024,
      title: 'Senior AI System Dev',
      company: 'Synthetix Solutions',
      role: 'Backend AI systems Architect constructing robust SaaS solutions for custom automation.',
      description: 'Engineered backend pipeline components for TypeRush and SafeSide, connecting client data stores securely with deep learning backends.',
      achievements: [
        'Decreased standard inference lag by over 30% through selective quantization and model distillation techniques',
        'Built real-time telemetry systems capturing user performance states with sub-10ms capture profiles',
        'Orchestrated automated data extraction workers scaling securely according to traffic profiles'
      ],
      technologies: ['Express/Node.js', 'Redis', 'Python', 'Docker', 'Google Cloud Platform']
    },
    {
      year: 2022,
      title: 'Full Stack Engineer & Researcher',
      company: 'Mental Health Tech',
      role: 'Frontend lead and mental wellness text classifier research dev.',
      description: 'Conducted rigorous fine-tuning experiments on classic BERT structures, designing clinical-grade data visualizers.',
      achievements: [
        'Created the first generation interactive mental wellness support system evaluating distress levels',
        'Co-authored 2 high-impact research publications outlining bimodal emotion evaluation metrics',
        'Designed completely responsive portfolio workspaces utilizing high-frequency animations'
      ],
      technologies: ['React', 'Redux', 'D3.js', 'Hugging Face Transformers', 'Python/Flask']
    },
    {
      year: 2020,
      title: 'Open Source Contributor & Dev',
      company: 'Independent / Farhan Lab',
      role: 'Developing open source utilities and studying linguistic text processing.',
      description: 'Began building interactive web layouts, contributing heavily to developer workspaces and Markdown tooling libraries.',
      achievements: [
        'Built and deployed TypeRush, an open-source terminal typing game',
        'Developed interactive developer portfolios earning deep community feedback',
        'Acquired expertise in system design, Docker containers, and React orchestration'
      ],
      technologies: ['React', 'Docker', 'Framer Motion', 'Node.js', 'SQLite']
    }
  ],

  articles: [
    {
      id: 'nlp-advances-2026',
      title: 'The Shift Towards Fine-Grained Semantic Analysis in Diagnostic AI',
      category: 'Research',
      readTime: '6 min read',
      date: 'May 12, 2026',
      excerpt: 'Why generic instruction-tuned LLMs cannot compete with ultra-targeted, tiny Transformers when diagnosing specific cognitive markers.',
      content: 'Large Language Models (LLMs) excel at general reasoning, but clinical settings demand specialized models. A generic LLM trained to answer general queries frequently fails to spot the highly nuanced structural degradation occurring in clinical depression or early cognitive decline. Under closer evaluation, fine-tuning lightweight models (such as RoBERTa or custom BERT variations) on certified mental health datasets yields vastly superior classification accuracies. Furthermore, targeted models are small enough to run serverless, offering massive cost reductions and absolute data privacy compliance by executing locally on self-hosted servers.'
    },
    {
      id: 'saas-architecture-2025',
      title: 'Designing Zero-Cold-Start SaaS Applications for Hugging Face Models',
      category: 'Engineering',
      readTime: '8 min read',
      date: 'Nov 24, 2025',
      excerpt: 'An architect\'s blueprint on deploying containerized neural workloads for serverless pricing tiers without degrading user experience.',
      content: 'Hosting large machine learning models is expensive, and container startup latency remains a significant friction point. By quantizing standard transformer architectures to ONNX and compiling models directly to WebAssembly (WASM), we can shift computational loads directly on the user\'s client device. In cases where server-side classification is mandatory, configuring Docker layers to preload weights during the container build stage reduces cold starts by over 70%. When combined with Redis caching, scale-to-zero serverless environments run smoothly without missing a beat.'
    },
    {
      id: 'ux-design-developers',
      title: 'The Aesthetic Developer Engine: Why High-Performance Styling is Critical',
      category: 'Design',
      readTime: '5 min read',
      date: 'Jan 15, 2025',
      excerpt: 'Crafting UI layouts that mirror real-time operational flows. How premium typography, subtle shadows, and responsive motion reinforce user trust.',
      content: 'Developers commonly prioritize raw functional code over visual appearance, but human-computer interaction research demonstrates that visual aesthetics dictate user trust. A high-contrast, responsive interface with precise layout alignments communicates professional craftsmanship and reliability. By utilizing modern web styling frameworks, we can create incredibly smooth, beautiful, and accessible environments that enhance the user experience.'
    }
  ],

  buildLogs: [
    {
      id: 'bl-v1.4',
      date: 'May 2026',
      version: 'v1.4.2',
      title: 'Audio Node Fusion & Neural Voice Synthesizer',
      description: 'Integrated server-side Text-to-Speech API directly using Gemini TTS models, delivering high-fidelity audio narration on-demand across FarhanOS articles.',
      tasksCompleted: [
        'Constructed custom caching layer for audio binaries on the server',
        'Implemented voice control deck with visual waveform indicator',
        'Configured optimized low-footprint audio transmission protocols'
      ],
      metricsChanged: [
        { metric: 'Voice rendering', before: 'Not Supported', after: '1.2s avg' },
        { metric: 'Client weight', before: '1.4MB', after: '1.1MB' }
      ]
    },
    {
      id: 'bl-v1.3',
      date: 'Feb 2026',
      version: 'v1.3.0',
      title: 'Command Palette & Context Engine Upgrade',
      description: 'Engineered a global search utility enabling visitors to query project, research, and contact systems instantly via a keyboard-triggered modal.',
      tasksCompleted: [
        'Built full-text token matching indexing portfolio vectors',
        'Added smooth canvas overlays using Framer Motion',
        'Mapped custom system operations (AI Site Tour, OS Theme Presets)'
      ],
      metricsChanged: [
        { metric: 'Search launch lag', before: '420ms', after: '3ms' },
        { metric: 'Indices cached', before: '0', after: '48 items' }
      ]
    }
  ],

  skills: [
    { name: 'PyTorch', category: 'AI/ML', weight: 5 },
    { name: 'Large Language Models', category: 'AI/ML', weight: 5 },
    { name: 'Hugging Face & BERT', category: 'AI/ML', weight: 5 },
    { name: 'Clinical NLP Pipelines', category: 'AI/ML', weight: 5 },
    { name: 'Python (NumPy, SciPy)', category: 'AI/ML', weight: 4 },
    { name: 'React / Next.js', category: 'Frontend', weight: 5 },
    { name: 'Tailwind CSS v4', category: 'Frontend', weight: 5 },
    { name: 'Framer Motion', category: 'Frontend', weight: 4 },
    { name: 'D3.js Visualization', category: 'Frontend', weight: 4 },
    { name: 'Node.js & Express', category: 'Backend', weight: 5 },
    { name: 'Go (Golang)', category: 'Backend', weight: 4 },
    { name: 'Redis Caching', category: 'Backend', weight: 4 },
    { name: 'PostgreSQL', category: 'Backend', weight: 5 },
    { name: 'Docker / Containers', category: 'Systems & Devops', weight: 5 },
    { name: 'Git & Linux', category: 'Systems & Devops', weight: 5 },
    { name: 'Academic Research', category: 'Research & Science', weight: 5 },
    { name: 'Mental Health Tech', category: 'Research & Science', weight: 5 }
  ],

  gardenNodes: [
    { id: 'nlp', label: 'Clinical NLP', category: 'Research' },
    { id: 'transformers', label: 'Transformers', category: 'Intelligence' },
    { id: 'bert', label: 'BERT Models', category: 'Intelligence' },
    { id: 'depression', label: 'Depression Dialectics', category: 'Research' },
    { id: 'autism', label: 'Autism Micro-shifts', category: 'Research' },
    { id: 'ethics', label: 'Research Ethics', category: 'Humanity' },
    { id: 'saas', label: 'AI SaaS Architectures', category: 'Engineering' },
    { id: 'telemetry', label: 'Telemetry Profiling', category: 'Engineering' },
    { id: 'databases', label: 'PostgreSQL Schema', category: 'Engineering' }
  ],

  gardenLinks: [
    { source: 'nlp', target: 'transformers' },
    { source: 'transformers', target: 'bert' },
    { source: 'nlp', target: 'depression' },
    { source: 'nlp', target: 'autism' },
    { source: 'depression', target: 'ethics' },
    { source: 'autism', target: 'ethics' },
    { source: 'transformers', target: 'saas' },
    { source: 'saas', target: 'telemetry' },
    { source: 'saas', target: 'databases' }
  ]
};
