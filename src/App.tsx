import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Cpu, Layers, GitBranch, BookOpen, Network, FileText, 
  Calendar, Award, Activity, Search, Briefcase, Volume2, VolumeX, 
  Maximize2, Minimize2, X, Send, Sparkles, Code, Workflow, User, 
  Folder, Map, Settings, Play, Pause, HelpCircle, Check, Copy, 
  Download, ExternalLink, Rocket, Compass, PhoneCall, RefreshCw,
  Clock, CheckSquare, FileSpreadsheet, Palette
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import { playRawPcm, playSynthTick } from './utils/audioPlay';
import { Project, Paper, TimelineEvent, Article, BuildLog, SkillNode, GardenNode } from './types';
import LandingPage from './components/LandingPage';
import Whiteboard from './components/Whiteboard';
import DecryptText from './components/DecryptText';
import { speakTextClient, getAskTwinFallback, generateClientBriefSummary } from './utils/aiFallback';


export default function App() {
  // Navigation View Modes
  const [viewMode, setViewMode] = useState<'landing' | 'os'>('landing');
  const [isWarping, setIsWarping] = useState(false);

  // Landing Page Interactive States
  const [landingQuery, setLandingQuery] = useState('');
  const [landingReply, setLandingReply] = useState('');
  const [landingChatLoading, setLandingChatLoading] = useState(false);
  const [selectedResearchPaper, setSelectedResearchPaper] = useState<any>(null); // For a popup reader on landing page

  // OS System States
  const [isBooted, setIsBooted] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const [theme, setTheme] = useState<'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light'>('dark');
  const [soundOn, setSoundOn] = useState(true);
  const [voiceOn, setVoiceOn] = useState(true);
  const [currentTime, setCurrentTime] = useState('');
  
  // Window Management States
  // Each open window is represented by its unique id
  const [openWindows, setOpenWindows] = useState<string[]>(['twin']); 
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  const [focusedWindow, setFocusedWindow] = useState<string>('twin');
  const [windowPositions, setWindowPositions] = useState<Record<string, { x: number; y: number; isMaximized: boolean }>>({
    twin: { x: 50, y: 70, isMaximized: false },
    projects: { x: 120, y: 140, isMaximized: false },
    research: { x: 180, y: 90, isMaximized: false },
    github: { x: 220, y: 160, isMaximized: false },
    writing: { x: 80, y: 220, isMaximized: false },
    garden: { x: 260, y: 40, isMaximized: false },
    resume: { x: 300, y: 200, isMaximized: false },
    timeline: { x: 140, y: 300, isMaximized: false },
    skills: { x: 400, y: 80, isMaximized: false },
    brief: { x: 350, y: 150, isMaximized: false },
    builds: { x: 200, y: 350, isMaximized: false },
    whiteboard: { x: 240, y: 110, isMaximized: false },
    profTimeline: { x: 160, y: 240, isMaximized: false },
  });

  // Dynamic CPU Load for telemetry
  const [cpuLoad, setCpuLoad] = useState(12);
  useEffect(() => {
    const timer = setInterval(() => {
      setCpuLoad(Math.floor(Math.random() * 10) + 7);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Dynamic window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(prev => {
        if (prev !== window.innerWidth) {
          return window.innerWidth;
        }
        return prev;
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cycleTheme = () => {
    const themes: Array<'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light'> = ['dark', 'cyberpunk', 'ai', 'terminal', 'light'];
    const nextIdx = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIdx]);
    triggerSound(750, 0.03);
  };

  // Quick Action OS Bypass Helpers
  const handleOpenWindowDirectly = (winId: string) => {
    setViewMode('os');
    setIsBooted(true);
    if (!openWindows.includes(winId)) {
      setOpenWindows([...openWindows, winId]);
    }
    setFocusedWindow(winId);
    triggerSound(900, 0.05);
  };

  const handleOpenProjectDirectly = (project: Project) => {
    setSelectedProject(project);
    handleOpenWindowDirectly('projects');
  };

  const handleOpenArticleDirectly = (article: Article) => {
    setSelectedArticle(article);
    handleOpenWindowDirectly('writing');
  };

  // UI Interactive States
  const [selectedProject, setSelectedProject] = useState<Project>(portfolioData.projects[0]);
  const [selectedPaper, setSelectedPaper] = useState<Paper>(portfolioData.papers[0]);
  const [selectedArticle, setSelectedArticle] = useState<Article>(portfolioData.articles[0]);
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineEvent>(portfolioData.timeline[0]);
  const [skillFilter, setSkillFilter] = useState<'all' | 'AI/ML' | 'Frontend' | 'Backend' | 'Research' | 'Systems'>('all');
  const [resumeAudience, setResumeAudience] = useState<'recruiter' | 'investor' | 'founder' | 'researcher'>('recruiter');

  // Command Palette & Search States
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Ask Twin AI State
  const [twinInput, setTwinInput] = useState('');
  const [twinMessages, setTwinMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string; audio?: string }>>([
    { role: 'assistant', content: "Systems fully operational. I am Farhan's certified neural clone. Feel free to enquire about my NLP predictive pipelines, clinical depression research, full-stack architectures, or project command maps." }
  ]);
  const [twinLoading, setTwinLoading] = useState(false);
  const [playingMessageIndex, setPlayingMessageIndex] = useState<number | null>(null);
  const [currentTTSAudio, setCurrentTTSAudio] = useState<{ stop: () => void } | null>(null);

  // Mission Brief State
  const [briefForm, setBriefForm] = useState({
    projectType: 'AI Engineering',
    budget: '$5,000 - $10,000',
    timeline: '1-3 Months',
    goals: '',
    comments: ''
  });
  const [briefSummary, setBriefSummary] = useState<string | null>(null);
  const [briefLoading, setBriefLoading] = useState(false);

  // AI Guided Tour States
  const [isTourActive, setIsTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [tourMsg, setTourMsg] = useState('');
  const [tourLoading, setTourLoading] = useState(false);

  // Custom Digital Garden Graph interactive states
  const [hoveredGardenNode, setHoveredGardenNode] = useState<string | null>(null);

  // Draggable State Management (Simple manual drag handler to avoid external libraries complexity)
  const [draggedWindow, setDraggedWindow] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // System Sound Effect player wrap
  const triggerSound = (freq: number = 800, dur: number = 0.03) => {
    if (soundOn) {
      playSynthTick(freq, dur);
    }
  };

  // Clock Ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // System Boot Sequence Sim
  useEffect(() => {
    if (!isBooted) {
      const logs = [
        'INIT: Booting FarhanOS Kernel v2.4.6...',
        'SYS: Loading digital neural parameters...',
        'SYS: Grounding publications corpus index...',
        'NETWORK: Establishing proxy connection secure rails...',
        'AI: Initializing Gemini bimodal model instances...',
        'GRAPH: Parsing topological clinical coordinates...',
        'SYS: Systems compiled. Ready for operational execution.'
      ];
      
      let step = 0;
      const progressInterval = setInterval(() => {
        setBootProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              setIsBooted(true);
              triggerSound(1000, 0.15);
            }, 600);
            return 100;
          }
          const add = Math.floor(Math.random() * 15) + 5;
          const next = Math.min(prev + add, 100);
          
          if (next > step * 15 && step < logs.length) {
            setBootLogs(prevLogs => [...prevLogs, logs[step]]);
            step++;
            triggerSound(600 + step * 50, 0.02);
          }
          return next;
        });
      }, 120);

      return () => clearInterval(progressInterval);
    }
  }, [isBooted]);

  const handleWarpAndEnter = () => {
    if (isWarping) return;
    triggerSound(1200, 0.4);
    setIsWarping(true);
    
    let step = 0;
    const soundInterval = setInterval(() => {
      if (step < 7) {
        triggerSound(150 + step * 200, 0.05);
        step++;
      } else {
        clearInterval(soundInterval);
      }
    }, 100);

    setTimeout(() => {
      setViewMode('os');
      setBootProgress(0);
      setBootLogs([]);
      setIsBooted(false); // Trigger OS Boot sequence
      setIsWarping(false);
    }, 1800);
  };

  const handleSendLandingChat = async () => {
    if (!landingQuery.trim() || landingChatLoading) return;
    const q = landingQuery.trim();
    setLandingQuery('');
    setLandingReply('');
    setLandingChatLoading(true);
    triggerSound(1050, 0.03);
    try {
      const res = await fetch('/api/ask-twin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q, history: [] })
      });
      const data = await res.json();
      if (data.reply) {
        setLandingReply(data.reply);
      } else {
        throw new Error();
      }
    } catch {
      const fallbackReply = getAskTwinFallback(q, []);
      setLandingReply(fallbackReply);
    } finally {
      setLandingChatLoading(false);
    }
  };

  // Global Key Down for Cmd + K Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
        triggerSound(900, 0.04);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [soundOn]);

  // Drag Window logic handlers
  const handleMouseDown = (windowId: string, e: React.MouseEvent) => {
    if (windowPositions[windowId]?.isMaximized) return;
    setFocusedWindow(windowId);
    setDraggedWindow(windowId);
    setDragOffset({
      x: e.clientX - (windowPositions[windowId]?.x || 0),
      y: e.clientY - (windowPositions[windowId]?.y || 0)
    });
    triggerSound(500, 0.01);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (draggedWindow) {
      const nx = e.clientX - dragOffset.x;
      const ny = e.clientY - dragOffset.y;
      setWindowPositions(prev => ({
        ...prev,
        [draggedWindow]: { ...prev[draggedWindow], x: Math.max(0, nx), y: Math.max(0, ny) }
      }));
    }
  };

  const handleMouseUp = () => {
    setDraggedWindow(null);
  };

  useEffect(() => {
    if (draggedWindow) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggedWindow, dragOffset]);

  // Opening & Focusing a window
  const openWindow = (windowId: string) => {
    triggerSound(700, 0.05);
    if (!openWindows.includes(windowId)) {
      setOpenWindows(prev => [...prev, windowId]);
    }
    // Remove from minimized if there
    setMinimizedWindows(prev => prev.filter(w => w !== windowId));
    setFocusedWindow(windowId);
  };

  const closeWindow = (windowId: string) => {
    triggerSound(400, 0.06);
    setOpenWindows(prev => prev.filter(w => w !== windowId));
  };

  const minimizeWindow = (windowId: string) => {
    triggerSound(450, 0.04);
    if (!minimizedWindows.includes(windowId)) {
      setMinimizedWindows(prev => [...prev, windowId]);
    }
    // Set focus to some other window if available
    const rest = openWindows.filter(w => w !== windowId && !minimizedWindows.includes(w));
    if (rest.length > 0) {
      setFocusedWindow(rest[rest.length - 1]);
    }
  };

  const toggleMaximize = (windowId: string) => {
    triggerSound(800, 0.04);
    setWindowPositions(prev => ({
      ...prev,
      [windowId]: { ...prev[windowId], isMaximized: !prev[windowId]?.isMaximized }
    }));
  };

  // TTS Speech Player
  const speakText = async (text: string, index: number | null = null, mode: 'tour' | 'narrate' = 'narrate') => {
    if (!voiceOn) return;
    try {
      if (currentTTSAudio) {
        currentTTSAudio.stop();
        setCurrentTTSAudio(null);
      }
      setPlayingMessageIndex(index);
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, type: mode })
      });
      const data = await res.json();
      if (data.audio) {
        const audioControl = await playRawPcm(data.audio);
        setCurrentTTSAudio(audioControl);
        
        // Listen for standard completion to reset indicators
        const playTimeSec = (data.audio.length * 0.75) / 24000; // rough estimation
        setTimeout(() => {
          setPlayingMessageIndex(null);
        }, playTimeSec * 1000);
      }
    } catch (err) {
      console.error('Narrator service unreachable, falling back to client voice:', err);
      try {
        const audioControl = speakTextClient(text, () => {
          setPlayingMessageIndex(null);
        });
        if (audioControl) {
          setCurrentTTSAudio(audioControl);
        } else {
          setPlayingMessageIndex(null);
        }
      } catch (clientErr) {
        console.error('Client speech synthesis failed:', clientErr);
        setPlayingMessageIndex(null);
      }
    }
  };

  const stopSpeaking = () => {
    if (currentTTSAudio) {
      currentTTSAudio.stop();
      setCurrentTTSAudio(null);
    }
    setPlayingMessageIndex(null);
  };

  // Chat Twin API caller
  const handleSendTwinMessage = async () => {
    if (!twinInput.trim()) return;
    const userMsg = twinInput.trim();
    setTwinInput('');
    setTwinMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setTwinLoading(true);
    triggerSound(1100, 0.03);

    try {
      // Gather historical context
      const historyPayload = twinMessages.map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content
      }));

      const res = await fetch('/api/ask-twin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: historyPayload })
      });
      const data = await res.json();
      
      if (data.reply) {
        setTwinMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        setTwinLoading(false);
        // Play response automatically via Voice Synthesizer if switched on
        if (voiceOn) {
          speakText(data.reply, twinMessages.length + 1);
        }
      } else {
        throw new Error(data.error || 'General twin system fault.');
      }
    } catch (err: any) {
      console.warn('Backend twin service failed, using local fallback:', err);
      const historyPayload = twinMessages.map(m => ({
        role: m.role === 'user' ? ('user' as const) : ('assistant' as const),
        content: m.content
      }));
      const fallbackReply = getAskTwinFallback(userMsg, historyPayload);
      setTwinMessages(prev => [...prev, { role: 'assistant', content: fallbackReply }]);
      setTwinLoading(false);
      if (voiceOn) {
        speakText(fallbackReply, twinMessages.length + 1);
      }
    }
  };

  // Submit Mission Brief for analysis
  const handleSendBrief = async () => {
    if (!briefForm.goals.trim()) return;
    setBriefLoading(true);
    triggerSound(950, 0.05);
    try {
      const res = await fetch('/api/summarize-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(briefForm)
      });
      const data = await res.json();
      if (data.summary) {
        setBriefSummary(data.summary);
      }
    } catch (err) {
      console.warn('Backend brief summarizer failed, using local fallback:', err);
      const fallbackSummary = generateClientBriefSummary(briefForm);
      setBriefSummary(fallbackSummary);
    } finally {
      setBriefLoading(false);
    }
  };

  // Interactive AI Site Tour Guided cycle
  const runTourCycle = async () => {
    triggerSound(1200, 0.1);
    setIsTourActive(true);
    setTourLoading(true);
    setTourStep(1);

    const tourSteps = [
      {
        id: 'twin',
        title: 'Neural Core Clone',
        text: 'This is the Ask Farhan AI Clone, trained on Farhan\'s complete portfolio. You can query clinical results, NLP models, and full-stack architecture profiles.'
      },
      {
        id: 'projects',
        title: 'Project Galaxy Command',
        text: 'Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications.'
      },
      {
        id: 'research',
        title: 'Linguistic Research Laboratory',
        text: 'Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules.'
      },
      {
        id: 'skills',
        title: 'Skill Observational Map',
        text: 'Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures.'
      },
      {
        id: 'brief',
        title: 'Mission Collaboration Brief',
        text: 'Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework.'
      }
    ];

    const startStep = async (stepIdx: number) => {
      const cur = tourSteps[stepIdx - 1];
      if (!cur) {
        setIsTourActive(false);
        setTourStep(0);
        return;
      }
      setTourStep(stepIdx);
      setTourMsg(cur.text);
      openWindow(cur.id);
      setTourLoading(true);

      if (voiceOn) {
        await speakText(cur.text, null, 'tour');
      }
      setTourLoading(false);
    };

    await startStep(1);
  };

  const nextTourStep = () => {
    if (tourStep < 5) {
      const next = tourStep + 1;
      setTourStep(next);
      triggerSound(800, 0.04);
      
      const tourStepsText = [
        'Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications.',
        'Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules.',
        'Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures.',
        'Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Gemini reasoning framework.'
      ];
      const winIds = ['projects', 'research', 'skills', 'brief'];
      openWindow(winIds[next - 1]);
      setTourMsg(tourStepsText[next - 2]);
      if (voiceOn) {
        speakText(tourStepsText[next - 2], null, 'tour');
      }
    } else {
      setIsTourActive(false);
      setTourStep(0);
      stopSpeaking();
      triggerSound(1300, 0.05);
    }
  };

  // Filter skills based on Category select
  const filteredSkills = portfolioData.skills.filter(s => {
    if (skillFilter === 'all') return true;
    if (skillFilter === 'AI/ML' && s.category === 'AI/ML') return true;
    if (skillFilter === 'Frontend' && s.category === 'Frontend') return true;
    if (skillFilter === 'Backend' && s.category === 'Backend') return true;
    if (skillFilter === 'Research' && s.category === 'Research & Science') return true;
    if (skillFilter === 'Systems' && s.category === 'Systems & Devops') return true;
    return false;
  });

  // Global Command Palette matching items
  const getSearchItems = () => {
    const term = searchQuery.toLowerCase().trim();
    if (!term) return [];
    
    const results = [];
    portfolioData.projects.forEach(p => {
      if (p.title.toLowerCase().includes(term) || p.techStack.some(t => t.toLowerCase().includes(term))) {
        results.push({ type: 'Project', title: p.title, subtitle: p.category, action: () => { openWindow('projects'); setSelectedProject(p); setCommandPaletteOpen(false); } });
      }
    });
    portfolioData.papers.forEach(p => {
      if (p.title.toLowerCase().includes(term) || p.abstract.toLowerCase().includes(term)) {
        results.push({ type: 'Research Paper', title: p.title, subtitle: `${p.year} - ${p.journal}`, action: () => { openWindow('research'); setSelectedPaper(p); setCommandPaletteOpen(false); } });
      }
    });
    portfolioData.articles.forEach(a => {
      if (a.title.toLowerCase().includes(term) || a.excerpt.toLowerCase().includes(term)) {
        results.push({ type: 'Blog/Article', title: a.title, subtitle: a.category, action: () => { openWindow('writing'); setSelectedArticle(a); setCommandPaletteOpen(false); } });
      }
    });
    portfolioData.skills.forEach(s => {
      if (s.name.toLowerCase().includes(term)) {
        results.push({ type: 'Tech Stack', title: s.name, subtitle: s.category, action: () => { openWindow('skills'); setSkillFilter(s.category === 'Research & Science' ? 'Research' : s.category === 'Systems & Devops' ? 'Systems' : s.category as any); setCommandPaletteOpen(false); } });
      }
    });

    if ('whiteboard'.includes(term) || 'ideation'.includes(term) || 'canvas'.includes(term) || 'drawing'.includes(term) || 'sketch'.includes(term) || 'paint'.includes(term)) {
      results.push({ type: 'OS Utility', title: 'Ideation Pad (Whiteboard)', subtitle: 'HTML5 digital canvas for sketching visual ideas', action: () => { openWindow('whiteboard'); setCommandPaletteOpen(false); } });
    }

    return results;
  };

  const systemSearchResults = getSearchItems();

  // Desktop Icons Configuration for ease of access
  const desktopIcons = [
    { id: 'twin', label: 'Ask Twin AI', icon: Sparkles, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
    { id: 'projects', label: 'Mission Control', icon: Cpu, color: 'text-sky-400 bg-sky-500/10 border-sky-500/20' },
    { id: 'research', label: 'Research Lab', icon: BookOpen, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { id: 'github', label: 'GitHub Monitor', icon: GitBranch, color: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20' },
    { id: 'writing', label: 'Writing Hub', icon: FileText, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
    { id: 'garden', label: 'Garden Graph', icon: Network, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
    { id: 'resume', label: 'Resume Gen', icon: FileSpreadsheet, color: 'text-pink-400 bg-pink-500/10 border-pink-500/20' },
    { id: 'timeline', label: 'Career Index', icon: Calendar, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { id: 'profTimeline', label: 'Prof. Timeline', icon: Award, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
    { id: 'skills', label: 'Skill Observatory', icon: Compass, color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
    { id: 'brief', label: 'Mission Brief', icon: Rocket, color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
    { id: 'builds', label: 'Release Logs', icon: Layers, color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' },
    { id: 'whiteboard', label: 'Ideation Pad', icon: Palette, color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
  ];

  // Theme styling definitions mapping
  const getThemeStyles = () => {
    switch (theme) {
      case 'cyberpunk':
        return {
          bg: 'bg-[#030610] text-[#00ffcc] font-mono selection:bg-pink-500/30 selection:text-white',
          glass: 'bg-black/80 border-2 border-pink-500/60 shadow-[0_0_20px_rgba(236,72,153,0.15)]',
          windowHeader: 'bg-gradient-to-r from-pink-600 to-indigo-900 text-white border-b-2 border-pink-500/60 font-mono',
          btnPrimary: 'bg-pink-600 hover:bg-pink-500 text-white border-2 border-pink-400 font-mono transition-transform duration-150 transform active:scale-95',
          btnSecondary: 'bg-zinc-900 border-2 border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc]/10 font-mono',
          accentColor: 'text-pink-500',
          accentBorder: 'border-pink-500/40',
          indicator: 'bg-[#00ffcc] shadow-[0_0_8px_#00ffcc]',
          panelHeader: 'text-pink-400 uppercase tracking-widest text-[11px] font-bold',
          badge: 'bg-pink-500/20 border border-pink-500/40 text-pink-300'
        };
      case 'ai':
        return {
          bg: 'bg-[#050414] text-slate-100 selection:bg-purple-600/30 selection:text-white',
          glass: 'bg-purple-950/20 backdrop-blur-xl border border-purple-500/30 shadow-[0_20px_50px_rgba(147,51,234,0.15)] ring-1 ring-white/10',
          windowHeader: 'bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 text-slate-100 border-b border-purple-500/30 font-sans backdrop-blur-md',
          btnPrimary: 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white border border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:opacity-90 transition-all active:scale-95 duration-100',
          btnSecondary: 'bg-purple-950/40 border border-cyan-500/40 text-cyan-200 hover:bg-purple-950/80 transition-all',
          accentColor: 'text-purple-400',
          accentBorder: 'border-purple-500/30',
          indicator: 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse',
          panelHeader: 'text-purple-400 tracking-wider text-xs font-semibold',
          badge: 'bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs'
        };
      case 'terminal':
        return {
          bg: 'bg-black text-[#33ff33] font-mono selection:bg-[#33ff33]/20',
          glass: 'bg-black border border-[#33ff33] shadow-[0_0_15px_rgba(51,255,51,0.1)]',
          windowHeader: 'bg-zinc-950 text-[#33ff33] border-b border-[#33ff33] font-mono',
          btnPrimary: 'bg-[#33ff33] text-black border border-[#33ff33] font-bold hover:bg-[#33ff33]/80 transition-all',
          btnSecondary: 'bg-black border border-[#33ff33] text-[#33ff33] hover:bg-[#33ff33]/15 transition-all',
          accentColor: 'text-[#33ff33]',
          accentBorder: 'border-[#33ff33]/30',
          indicator: 'bg-[#33ff33] shadow-[0_0_10px_#33ff33]',
          panelHeader: 'text-[#33ff33] font-bold uppercase tracking-wider text-[11px]',
          badge: 'bg-transparent border border-[#33ff33] text-[#33ff33] text-xs'
        };
      case 'light':
        return {
          bg: 'bg-[#f8fafc] text-[#0f172a] selection:bg-sky-500/20',
          glass: 'bg-white/85 backdrop-blur-md border border-slate-200 shadow-xl',
          windowHeader: 'bg-slate-50 text-slate-800 border-b border-slate-200 font-sans',
          btnPrimary: 'bg-slate-900 hover:bg-slate-800 text-white transition-all duration-100 active:scale-95',
          btnSecondary: 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all',
          accentColor: 'text-indigo-600',
          accentBorder: 'border-slate-300',
          indicator: 'bg-indigo-600 shadow-[0_0_5px_rgba(79,70,229,0.5)]',
          panelHeader: 'text-slate-500 uppercase tracking-widest text-[11px] font-bold',
          badge: 'bg-slate-100 border border-slate-200 text-slate-700 text-xs'
        };
      default: // dark mode / linear / verson
        return {
          bg: 'bg-[#090a10] text-[#f1f5f9] selection:bg-sky-500/20',
          glass: 'bg-[#11121d]/75 backdrop-blur-xl border border-[#2c2d3a] shadow-2xl shadow-black/80',
          windowHeader: 'bg-[#161726]/90 text-slate-200 border-b border-[#2c2d3a] font-sans',
          btnPrimary: 'bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-950/50 border border-sky-450 transition-all duration-150 active:scale-95',
          btnSecondary: 'bg-[#1a1b26] border border-[#2d2f3d] text-slate-300 hover:bg-[#202231] transition-all',
          accentColor: 'text-sky-400',
          accentBorder: 'border-sky-500/20',
          indicator: 'bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse',
          panelHeader: 'text-sky-450 uppercase tracking-wider text-[11px] font-bold',
          badge: 'bg-sky-500/10 border border-sky-500/20 text-sky-300'
        };
    }
  };

  const styleSet = getThemeStyles();

  return (
    <div className={`h-full w-full ${styleSet.bg} transition-colors duration-500 overflow-hidden select-none flex flex-col relative`}>
      {viewMode === 'landing' ? (
        <LandingPage
          isWarping={isWarping}
          theme={theme}
          soundOn={soundOn}
          triggerSound={triggerSound}
          onLaunchOS={handleWarpAndEnter}
          onOpenWindowDirectly={handleOpenWindowDirectly}
        />
      ) : (
        <>
          {/* 1. INITIAL SYSTEM BOOT SCREEN */}
          {!isBooted && (
            <div className="absolute inset-0 bg-[#020308] z-[9999] flex flex-col items-center justify-center font-mono text-xs px-6">
              <div className="w-full max-w-lg bg-[#080b15]/90 border border-zinc-800 p-6 rounded-lg shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500" style={{ width: `${bootProgress}%` }} />
                
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-ping" />
                    <span className="text-zinc-400 font-bold tracking-wider">FARHAN KABIR CORE OS v2.4</span>
                  </div>
                  <span className="text-zinc-500 tracking-wider">BOOT: {bootProgress}%</span>
                </div>

                <div className="space-y-1.5 h-48 overflow-y-auto mb-4 scrollbar-none pr-1">
                  {bootLogs.map((log, i) => (
                    <div key={i} className="text-[#33ff33] opacity-90 font-mono text-[11px] leading-relaxed select-text flex items-start gap-1 justify-between">
                      <span className="flex-1 whitespace-pre-wrap">{log}</span>
                      <span className="text-zinc-600 text-[9px]">[SUCCESS]</span>
                    </div>
                  ))}
                  {bootProgress < 100 && (
                    <div className="text-white animate-pulse font-mono text-[11px]">⏳ Orchestrating linguistic vectors, please standby...</div>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-zinc-800 pt-3 text-[10px] text-zinc-500">
                  <span>SYSTEM HOST: OOS LOCAL HOST INSTANCE</span>
                  <span>PORT: 3001 ACTIVE</span>
                </div>
              </div>
              
              <div className="mt-8 text-zinc-600 text-center text-[10px] uppercase tracking-widest max-w-xs font-mono">
                Designed for low-latency cognitive linguistics analysis with fully responsive modular desktop client matrices.
              </div>
            </div>
          )}

          {/* 2. TOP MENU NAVIGATION BAR */}
          <header className="h-10 bg-black/40 backdrop-blur-md border-b border-zinc-800/40 flex items-center justify-between px-4 z-[99] select-none text-xs font-mono">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 cursor-pointer font-bold tracking-tight text-white hover:opacity-85" onClick={() => triggerSound(900, 0.05)}>
                <span className="w-2 h-2 rounded bg-sky-400 opacity-90 shadow-[0_0_6px_#38bdf8]" />
                <span>FarhanOS</span>
                <span className="text-[9px] text-sky-400 px-1 border border-sky-500/20 rounded font-mono font-medium">BETA</span>
              </div>

              {/* Portal route back trigger */}
              <button 
                onClick={() => { setViewMode('landing'); triggerSound(1105, 0.06); }}
                className="flex items-center gap-1.5 px-2 py-0.5 rounded text-indigo-400 hover:text-indigo-300 font-mono text-[10px] border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 cursor-pointer"
                title="Return to Cosmos Portal"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
                <span>Return to Cosmos</span>
              </button>

          <nav className="hidden md:flex items-center gap-4 text-zinc-400 font-medium select-none">
            <button onClick={() => { setCommandPaletteOpen(true); triggerSound(800, 0.03); }} className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
              <Search className="w-3.5 h-3.5" />
              <span>Search <kbd className="text-[10px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-800 rounded px-1 ml-0.5">Cmd+K</kbd></span>
            </button>
            <button onClick={runTourCycle} className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-purple-400 hover:text-purple-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Site Tour</span>
            </button>
            <button onClick={() => openWindow('brief')} className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Mission Brief</span>
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4 select-none">
          {/* Quick theme toggles - hidden on mobile/tablet */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-950/60 border border-zinc-800/40 rounded px-1.5 py-0.5">
            <span className="text-[10px] text-zinc-500 font-medium mr-1.5">Mood Theme:</span>
            {['dark', 'cyberpunk', 'ai', 'terminal', 'light'].map((t) => (
              <button 
                key={t}
                onClick={() => { setTheme(t as any); triggerSound(750, 0.03); }}
                className={`text-[10px] px-1.5 py-0.5 rounded capitalize transition-all cursor-pointer ${theme === t ? 'bg-[#181926] text-white font-bold border border-zinc-700/60' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Single cycle button - visible ONLY on mobile/tablet */}
          <button 
            onClick={cycleTheme}
            className="md:hidden flex items-center gap-1.5 bg-zinc-950/60 border border-zinc-800/40 rounded px-2 py-1 text-[10px] text-zinc-300 hover:text-white capitalize cursor-pointer active:scale-95 transition-all"
            title="Cycle Theme"
          >
            <Palette className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>Theme: {theme}</span>
          </button>

          {/* Sound, Voice, Time indicators */}
          <div className="flex items-center gap-3 border-l border-zinc-800/60 pl-3">
            <button 
              onClick={() => { setSoundOn(!soundOn); playSynthTick(1000, 0.02); }}
              className={`p-1 rounded cursor-pointer hover:bg-zinc-900 ${soundOn ? 'text-zinc-300' : 'text-zinc-600'}`}
              title="Toggle Audio Feedback"
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
            
            <button 
              onClick={() => { setVoiceOn(!voiceOn); if (playingMessageIndex !== null) stopSpeaking(); }}
              className={`text-[10px] font-semibold flex items-center gap-1.5 px-1.5 py-0.5 rounded cursor-pointer select-none ${voiceOn ? 'text-purple-400 border border-purple-500/20 bg-purple-500/5' : 'text-zinc-600 border border-zinc-800'}`}
              title="Toggle Voice synthesizer narration output"
            >
              <Cpu className="w-3 h-3 text-purple-400" />
              <span className="hidden sm:inline">OS Voice</span>
            </button>

            <div className="hidden sm:flex items-center gap-1.5 text-zinc-400 font-mono tracking-wider font-semibold bg-zinc-950/45 border border-zinc-800/40 px-2 py-0.5 rounded select-none">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>{currentTime || '14:37:33'} (UTC)</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. AI SITE GUIDED TOUR STATUS ALERTER */}
      {isTourActive && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-xl bg-purple-950/80 backdrop-blur-2xl border-2 border-purple-500/50 p-4 rounded-xl shadow-[0_10px_40px_rgba(168,85,247,0.3)] z-[999] flex items-start gap-4 select-text animate-bounce-short">
          <div className="p-2.5 bg-purple-500/20 rounded-lg border border-purple-400/40 text-purple-300">
            <Sparkles className="w-5 h-5 text-purple-400 animate-spin-slow" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-cyan-50 font-bold uppercase tracking-wider text-purple-200">AI SYSTEM TOUR — ZONE {tourStep} OF 5</h4>
              {tourLoading && <span className="text-[10px] text-purple-300 animate-pulse font-mono select-none">Rendering Synthesized Voice...</span>}
            </div>
            <p className="text-xs text-[#ebd8fb] mt-1 pr-4 leading-relaxed font-sans">{tourMsg || 'Preparing...'}</p>
            <div className="flex items-center gap-2 mt-3">
              <button 
                onClick={nextTourStep} 
                className="bg-purple-600 hover:bg-purple-500 text-white text-[10px] px-3 py-1 rounded border border-purple-400 transition-all font-bold tracking-tight cursor-pointer"
              >
                {tourStep === 5 ? 'Conclude Integration Tour' : 'Acknowledge & Sync Next Area'}
              </button>
              <button 
                onClick={() => { setIsTourActive(false); setTourStep(0); stopSpeaking(); triggerSound(400, 0.05); }} 
                className="text-zinc-400 hover:text-white text-[10px] ml-2 font-medium cursor-pointer"
              >
                Exit Tour
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. MAIN WORKSPACE / MONITOR AREA */}
      <main className="flex-1 relative overflow-auto p-4 md:p-6 scrollbar-none">
        
        {/* Dynamic ambient grid particle network background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-35">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-gradient-to-tr from-sky-500/10 to-transparent rounded-full filter blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full filter blur-[100px] animate-pulse-slow" />
        </div>

        {/* Desktop Folders Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-6 max-w-5xl relative z-10 p-2 pointer-events-auto">
          {desktopIcons.map((ico, idx) => {
            const ActiveIcon = ico.icon;
            const isOpen = openWindows.includes(ico.id);
            const isFocus = focusedWindow === ico.id && !minimizedWindows.includes(ico.id);
            
            return (
              <div 
                key={ico.id} 
                onClick={() => openWindow(ico.id)}
                style={{ animationDelay: `${idx * 45}ms` }}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border border-transparent hover:border-zinc-800/40 hover:bg-zinc-950/25 hover:backdrop-blur-md hover:shadow-[0_4px_20px_rgba(99,102,241,0.08)] cursor-pointer transition-all duration-300 active:scale-95 group text-center relative animate-fade-in opacity-0 ${isOpen ? 'bg-zinc-950/15' : ''}`}
              >
                <div className={`p-4 rounded-2xl ${ico.color} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200 relative`}>
                  <ActiveIcon className="w-6 h-6" />
                  {isOpen && (
                    <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-[0_0_6px_#10b981]" />
                  )}
                </div>
                <span className="text-slate-300 group-hover:text-white font-sans text-[11px] font-semibold mt-2.5 tracking-tight line-clamp-1">
                  {ico.label}
                </span>
                
                {/* Visual glow backdrop for focused window */}
                {isFocus && (
                  <span className="absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-sky-450 to-purple-500 rounded filter blur-xs" />
                )}
              </div>
            );
          })}
        </div>

        {/* 5. MULTI-WINDOW RENDERER CORE */}
        {openWindows.map((winId) => {
          if (minimizedWindows.includes(winId)) return null;

          const isFocused = focusedWindow === winId;
          const pos = windowPositions[winId] || { x: 100, y: 100, isMaximized: false };
          const desktopIco = desktopIcons.find(i => i.id === winId);
          const WinIcon = desktopIco ? desktopIco.icon : Terminal;

          // Responsive calculation (fallback on smaller views to always make screens relative wide/tall or static)
          const isMobile = windowWidth < 768;
          const windowStyle: React.CSSProperties = isMobile || pos.isMaximized 
            ? {
                position: 'fixed',
                top: '2.5rem',
                left: 0,
                right: 0,
                bottom: '4rem',
                zIndex: isFocused ? 50 : 20,
              }
            : {
                position: 'absolute',
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                width: winId === 'twin' || winId === 'garden' || winId === 'skills' ? '540px' : '720px',
                height: winId === 'twin' ? '480px' : '550px',
                maxHeight: '85vh',
                zIndex: isFocused ? 50 : 20,
              };

          return (
            <div 
              key={winId}
              id={`window-${winId}`}
              style={windowStyle}
              onClick={() => { setFocusedWindow(winId); triggerSound(400, 0.01); }}
              className={`flex flex-col rounded-xl overflow-hidden shadow-2xl transition-all duration-150 transform ${styleSet.glass} ${isFocused ? 'ring-2 ring-sky-500/35 scale-[1.002]' : 'opacity-90'} animate-window-open`}
            >
              
              {/* Window Bar Header */}
              <div 
                onMouseDown={(e) => handleMouseDown(winId, e)}
                className={`h-9 px-3 flex items-center justify-between cursor-move select-none ${styleSet.windowHeader}`}
              >
                <div className="flex items-center gap-2 font-semibold tracking-tight text-xs">
                  <WinIcon className="w-3.5 h-3.5 opacity-80" />
                  <span>{desktopIco ? desktopIco.label : 'FarhanOS Sandbox'}</span>
                  {isFocused && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </div>

                <div className="flex items-center gap-2" onMouseDown={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => minimizeWindow(winId)}
                    className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10"
                    title="Minimize"
                  >
                    <Minimize2 className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={() => toggleMaximize(winId)}
                    className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10"
                    title="Toggle Maximize"
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={() => closeWindow(winId)}
                    className="p-1 text-rose-400 hover:text-rose-500 rounded hover:bg-rose-500/10"
                    title="Close Window"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Window Content Frame Container */}
              <div className="flex-1 overflow-y-auto p-4 md:p-5 text-xs font-sans scrollbar-thin scrollbar-thumb-zinc-800">
                
                {/* A. DIGITAL TWIN AI ASSISTANT PANEL */}
                {winId === 'twin' && (
                  <div className="flex flex-col h-full gap-3">
                    <div className="border-b border-zinc-800/60 pb-2 mb-1">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="font-bold text-slate-100 tracking-tight">Interactive Ask Twin Engine</span>
                      </div>
                      <p className="text-zinc-400 text-[10px] mt-0.5 leading-relaxed font-normal">
                        Enter any prompt below. The model responds based on Farhan's publications, NLP methodologies, and complete career achievements.
                      </p>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-3 p-1 scrollbar-none text-[11px] leading-relaxed select-text font-normal max-h-[220px]">
                      {twinMessages.map((m, idx) => (
                        <div key={idx} className={`flex flex-col gap-1 w-full ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                          <div className={`p-3 rounded-xl max-w-[90%] whitespace-pre-wrap select-text border shadow-xs ${m.role === 'user' ? 'bg-sky-500/10 border-sky-500/20 text-slate-100' : 'bg-zinc-950/40 border-zinc-900 text-slate-300'}`}>
                            {m.content}
                          </div>
                          
                          {/* Synth TTS play button for model messages */}
                          {m.role === 'assistant' && (
                            <button 
                              onClick={() => {
                                if (playingMessageIndex === idx) {
                                  stopSpeaking();
                                } else {
                                  speakText(m.content, idx);
                                }
                              }}
                              className="text-[9px] text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer font-semibold"
                            >
                              {playingMessageIndex === idx ? (
                                <>
                                  <VolumeX className="w-3 h-3 text-rose-400 animate-pulse" />
                                  <span className="text-rose-400">Silence Audio Narrator</span>
                                </>
                              ) : (
                                <>
                                  <Volume2 className="w-3 h-3 text-purple-400" />
                                  <span>Speak Response Model</span>
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      ))}
                      {twinLoading && (
                        <div className="flex items-center gap-2 text-purple-400 animate-pulse font-mono text-[10px]">
                          <Cpu className="w-3.5 h-3.5 animate-spin" />
                          <span>FarhanTwin thinking processes synchronized...</span>
                        </div>
                      )}
                    </div>

                    {/* Chat Suggestion Prompt Chips */}
                    <div className="border-t border-zinc-800/40 pt-2 grid grid-cols-2 gap-1.5 z-10">
                      {[
                        "Explain depression text research",
                        "What bimodal stack is in use?",
                        "What SaaS packages did Farhan build?",
                        "Give brief overview of Farhan"
                      ].map((chip) => (
                        <button 
                          key={chip} 
                          onClick={() => { setTwinInput(chip); triggerSound(900, 0.02); }}
                          className="text-[10px] text-left p-1.5 rounded-lg bg-zinc-950/30 hover:bg-zinc-950/80 border border-zinc-900 text-zinc-400 hover:text-slate-200 truncate cursor-pointer transition-colors"
                        >
                          → {chip}
                        </button>
                      ))}
                    </div>

                    {/* Chat Input deck */}
                    <div className="flex items-center gap-2 mt-auto border-t border-zinc-800/40 pt-2 select-none">
                      <input 
                        type="text"
                        value={twinInput}
                        onChange={(e) => setTwinInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendTwinMessage()}
                        placeholder="Inquire about clinical studies, model performance parameters..."
                        className="flex-1 scroll-p-2 bg-black/60 border border-zinc-800 rounded-lg py-2 px-3 focus:outline-hidden focus:border-purple-500/50 text-[11px] text-slate-100 placeholder-zinc-500"
                      />
                      <button 
                        onClick={handleSendTwinMessage}
                        disabled={!twinInput.trim() || twinLoading}
                        className={`p-2.5 rounded-lg cursor-pointer ${styleSet.btnPrimary}`}
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}


                {/* B. PROJECT GALAXY COMMAND PANEL */}
                {winId === 'projects' && (
                  <div className="flex flex-col md:flex-row h-full gap-4">
                    
                    {/* LHS Filter & Lists */}
                    <div className="w-full md:w-52 border-r border-zinc-800/60 pr-4 flex flex-col gap-2">
                      <span className={styleSet.panelHeader}>CATEGORIES</span>
                      <div className="flex flex-wrap md:flex-col gap-1 select-none mb-3">
                        {['AI', 'NLP', 'SaaS', 'Open Source', 'Research', 'Productivity', 'Design'].map((cat) => (
                          <button 
                            key={cat}
                            onClick={() => { setSelectedProject(portfolioData.projects.find(p => p.category === cat) || portfolioData.projects[0]); triggerSound(800, 0.02); }}
                            className={`text-[10px] text-left px-2 py-1.5 rounded-md capitalize transition-all cursor-pointer ${selectedProject.category === cat ? 'bg-zinc-950 text-sky-400 border border-zinc-800 font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
                          >
                            🎨 {cat}
                          </button>
                        ))}
                      </div>

                      <span className={styleSet.panelHeader}>ACTIVE PLATFORMS</span>
                      <div className="space-y-1 overflow-y-auto max-h-[160px] scrollbar-none select-none">
                        {portfolioData.projects.map((p) => (
                          <button 
                            key={p.id}
                            onClick={() => { setSelectedProject(p); triggerSound(800, 0.03); }}
                            className={`w-full text-[10px] text-left p-2 rounded-md border flex flex-col gap-0.5 transition-colors cursor-pointer ${selectedProject.id === p.id ? 'bg-sky-500/10 border-sky-500/30 text-sky-300' : 'bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950'}`}
                          >
                            <span className="font-bold truncate">{p.title}</span>
                            <span className="text-[9px] opacity-75">{p.category}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* RHS Rich Details Panel */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between border-b border-zinc-800/40 pb-2">
                        <div>
                          <span className={styleSet.badge}>{selectedProject.category} PROJECT</span>
                          <h3 className="text-sm font-extrabold text-white mt-1">{selectedProject.title}</h3>
                          <span className="text-[10px] text-zinc-500 font-mono tracking-wide">TIMELINE: {selectedProject.timeline}</span>
                        </div>
                        <div className="flex items-center gap-1.5 select-none">
                          <button onClick={() => triggerSound(1000, 0.05)} className="p-1 px-2.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 hover:text-white flex items-center gap-1">
                            <GitBranch className="w-3 h-3" />
                            <span>Code</span>
                          </button>
                          <button onClick={() => { triggerSound(1100, 0.05); openWindow('brief'); }} className="p-1 px-2.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-300 hover:text-sky-200 flex items-center gap-1">
                            <Rocket className="w-3 h-3" />
                            <span>Deploy</span>
                          </button>
                        </div>
                      </div>

                      <p className="text-zinc-300 leading-relaxed font-sans mt-1 text-[11px] select-text">{selectedProject.description}</p>

                      {/* Technical Key Metrics Grid Row */}
                      <div className="grid grid-cols-3 gap-2.5">
                        {selectedProject.metrics.map((m, idx) => (
                          <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-2.5 text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky-400/20" />
                            <div className="text-[10px] text-zinc-500 capitalize">{m.label}</div>
                            <div className="text-xs font-black text-sky-300 mt-1">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 mt-4 text-[11px]">
                        <div className="bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text">
                          <span className="font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1">Architecture Pipeline:</span>
                          <span className="text-slate-400 leading-relaxed font-sans">{selectedProject.architecture}</span>
                        </div>

                        <div className="bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text">
                          <span className="font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1">Design Problem:</span>
                          <span className="text-slate-400 leading-relaxed font-sans">{selectedProject.problem}</span>
                        </div>

                        <div className="bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text">
                          <span className="font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1">Integrated Tech-Stack Matrix:</span>
                          <div className="flex flex-wrap gap-1.5 mt-1 select-none">
                            {selectedProject.techStack.map((tech) => (
                              <span key={tech} className="bg-zinc-900 text-slate-300 border border-zinc-800 rounded px-1.5 py-0.5 text-[9px] font-mono leading-tight">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


                {/* C. LINGUISTIC RESEARCH LAB PANEL */}
                {winId === 'research' && (
                  <div className="flex flex-col md:flex-row h-full gap-4">
                    
                    {/* LHS Switcher */}
                    <div className="w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2">
                      <span className={styleSet.panelHeader}>PUBLICATIONS CATALOG</span>
                      <div className="space-y-1 select-none">
                        {portfolioData.papers.map((p) => (
                          <button 
                            key={p.id}
                            onClick={() => { setSelectedPaper(p); triggerSound(800, 0.03); }}
                            className={`w-full text-left p-2 rounded-lg border flex flex-col gap-1 transition-all cursor-pointer ${selectedPaper.id === p.id ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.1)]' : 'bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950'}`}
                          >
                            <span className="font-bold text-[10px] line-clamp-2 leading-snug">{p.title}</span>
                            <span className="text-[9px] opacity-75 font-mono">{p.journal} ({p.year})</span>
                          </button>
                        ))}
                      </div>

                      <div className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg mt-auto text-[10px] select-text">
                        <span className="font-bold text-emerald-300">Clinician Alerts</span>
                        <p className="text-zinc-500 leading-normal font-sans mt-1">Automatic alert pipeline triggers clinical assessment support metrics on exceeding distress metrics threshold.</p>
                      </div>
                    </div>

                    {/* RHS Contents */}
                    <div className="flex-1 space-y-4">
                      <div className="border-b border-zinc-800/40 pb-2 flex-col gap-0.5 justify-start">
                        <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded px-2 py-0.5 text-[9.5px]">PEER-REVIEWED JOURNAL</span>
                        <h3 className="text-xs font-black text-slate-100 tracking-tight leading-relaxed select-text mt-1.5">{selectedPaper.title}</h3>
                        <div className="text-[9.5px] text-zinc-500 italic mt-0.5 select-text">Authors: {selectedPaper.authors} · Published in {selectedPaper.journal} ({selectedPaper.year})</div>
                      </div>

                      {/* Paper Abstract Tabbed panel */}
                      <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-3 relative select-text">
                        <span className="font-bold text-zinc-300 text-[10px] block uppercase tracking-wide mb-1">Anatomical Abstract:</span>
                        <p className="text-slate-400 font-sans leading-normal text-[10px]">{selectedPaper.abstract}</p>
                      </div>

                      {/* Interactive block representing high level engineering classification pipelines */}
                      <div>
                        <span className={styleSet.panelHeader}>CLASSIFIER PIPELINE DATAFLOW</span>
                        <div className="flex items-center gap-1 mt-1.5 select-none text-[9px] bg-zinc-950/30 p-2 border border-zinc-900 rounded-lg justify-around overflow-x-auto text-center font-mono">
                          <div className="bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400">Ingestion</div>
                          <span className="text-zinc-600">→</span>
                          <div className="bg-zinc-900 border border-zinc-800 p-1 px-1.5 rounded text-slate-400">POS normalise</div>
                          <span className="text-[#33ff33]">→</span>
                          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 p-1 px-1.5 rounded animate-pulse">RoBERTa Tensor Matrix</span>
                          <span className="text-[#33ff33]">→</span>
                          <div className="bg-red-500/20 text-red-300 border border-red-500/30 p-1 px-1.5 rounded">Clinician Alert</div>
                        </div>
                      </div>

                      {/* Metrics Performance Comparison Table */}
                      <div>
                        <span className={styleSet.panelHeader}>EVALUATION ACCURACY STATISTICS</span>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-1.5 font-mono text-[10px]">
                          {selectedPaper.results.map((r, idx) => (
                            <div key={idx} className="bg-zinc-950 p-2 border border-zinc-900 rounded-md text-center">
                              <div className="text-zinc-500 text-[9px] truncate" title={r.metric}>{r.metric}</div>
                              <div className="font-bold text-emerald-400 text-xs mt-0.5">{r.score}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* BibTeX citation block Copy/Paste */}
                      <div className="border border-zinc-900 bg-zinc-950/60 p-2.5 rounded-lg">
                        <div className="flex items-center justify-between pointer-events-auto select-none mb-1">
                          <span className="text-[10px] text-zinc-500 font-bold block">BIBTEX CITATION RESOURCE</span>
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText(selectedPaper.citation);
                              triggerSound(1200, 0.05);
                            }}
                            className="bg-zinc-900 text-zinc-400 hover:text-white px-1.5 py-0.5 rounded text-[9.5px] border border-zinc-850 flex items-center gap-0.5 cursor-pointer"
                          >
                            <Copy className="w-2.5 h-2.5" />
                            <span>Copy Citation</span>
                          </button>
                        </div>
                        <code className="text-[9.5px] text-zinc-400 font-mono select-all block leading-tight">{selectedPaper.citation}</code>
                      </div>
                    </div>
                  </div>
                )}


                {/* D. GITHUB INTELLIGENCE MONITOR PANEL */}
                {winId === 'github' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2">
                      <div>
                        <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">VIRTUALIZED TELEMETRY STREAM</span>
                        <h3 className="text-sm font-extrabold text-white mt-1">Linguistic & Engineering Pipelines Stream</h3>
                      </div>
                      <span className="text-[11px] text-stone-400 font-mono bg-zinc-950/60 px-2 py-0.5 border border-zinc-850 rounded">STREAK: 142 DAYS</span>
                    </div>

                    {/* Interactive Commits Calendar mock-up representing dynamic workloads */}
                    <div>
                      <span className={styleSet.panelHeader}>CODE INTEL CLASSIFIER CALENDAR (MOCK-GRID)</span>
                      <div className="grid grid-cols-12 lg:grid-cols-24 gap-1 mt-1.5 bg-zinc-950 p-3 border border-zinc-900 rounded-lg">
                        {Array.from({ length: 48 }).map((_, i) => {
                          const level = i % 7 === 0 ? 'bg-green-500 shadow-[0_0_4px_#22c55e]' : i % 5 === 0 ? 'bg-green-600' : i % 3 === 0 ? 'bg-green-800' : 'bg-zinc-900';
                          return (
                            <div 
                              key={i} 
                              onClick={() => triggerSound(900 + (i % 5) * 100, 0.02)}
                              className={`w-3.5 h-3.5 rounded-xs transition-colors hover:scale-110 cursor-pointer ${level}`}
                              title={`Telemetry day ${i + 1}: Commits verified`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-[11px]">
                      
                      {/* Active Repositories List */}
                      <div className="bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg">
                        <span className="font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2">INTELLIGENT SYSTEMS</span>
                        <div className="space-y-2 font-mono">
                          <div className="flex items-center justify-between">
                            <span className="text-sky-300">typerush-cockpit</span>
                            <span className="text-zinc-500 text-[10px]">Stars: 184</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sky-300">the-ink-home-portal</span>
                            <span className="text-zinc-500 text-[10px]">Stars: 142</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sky-300">safeside-predictor</span>
                            <span className="text-zinc-500 text-[10px]">Stars: 211</span>
                          </div>
                        </div>
                      </div>

                      {/* Mock activity feeds */}
                      <div className="bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg">
                        <span className="font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2">LIVE COMPILING ACTIONS FEED</span>
                        <div className="space-y-2 leading-relaxed text-[10.5px]">
                          <div className="flex items-start gap-1">
                            <span className="text-emerald-400">●</span>
                            <p className="text-zinc-400">Pushed update to <code className="text-[#33ff33] font-mono">typerush</code>: Configured Web Audio procedural oscillators & dynamic BPM heartbeats.</p>
                          </div>
                          <div className="flex items-start gap-1">
                            <span className="text-amber-400">●</span>
                            <p className="text-zinc-400">Released version 1.4.2 containing live Audio Synthesis narrated profiles.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}


                {/* E. WRITING UNIVERSE / BLOG PANEL WITH AUDIO TTS NARRATOR */}
                {winId === 'writing' && (
                  <div className="flex flex-col md:flex-row h-full gap-4">
                    
                    {/* LHS Index Switcher */}
                    <div className="w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none">
                      <span className={styleSet.panelHeader}>NARRATIVE CHRONICLES</span>
                      <div className="space-y-1">
                        {portfolioData.articles.map((a) => (
                          <button 
                            key={a.id}
                            onClick={() => { setSelectedArticle(a); triggerSound(800, 0.03); }}
                            className={`w-full text-left p-2 rounded-lg border flex flex-col gap-0.5 transition-all cursor-pointer ${selectedArticle.id === a.id ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950'}`}
                          >
                            <span className="font-extrabold text-[10.5px] line-clamp-1 truncate">{a.title}</span>
                            <div className="flex items-center justify-between text-[8.5px] text-zinc-500 mt-0.5 font-mono">
                              <span>{a.category}</span>
                              <span>{a.readTime}</span>
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg mt-auto text-[10px]">
                        <span className="font-bold text-amber-300 block mb-0.5">Medium Syndicate</span>
                        <p className="text-zinc-500 leading-normal font-sans">Curated articles focus on the overlapping spheres of diagnostic ML architectures and UX.</p>
                      </div>
                    </div>

                    {/* RHS Story Detail */}
                    <div className="flex-1 space-y-3 relative">
                      
                      {/* Audio Narrator Control Panel using `/api/tts` */}
                      <div className="bg-zinc-950/60 border border-zinc-900 p-3 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                          <div>
                            <span className="text-[10px] text-zinc-400 uppercase font-mono border-zinc-800 pr-1 select-none">SYSTÉME NARRATOR</span>
                            <p className="text-[11px] text-white font-bold select-text">Read aloud with synthesized clinical AI speech?</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          {playingMessageIndex === 999 ? (
                            <button 
                              onClick={stopSpeaking}
                              className="bg-red-950 hover:bg-red-900 text-red-300 border border-red-800 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold"
                            >
                              <VolumeX className="w-3.5 h-3.5" />
                              <span>Stop Narration</span>
                            </button>
                          ) : (
                            <button 
                              onClick={() => speakText(selectedArticle.content, 999)}
                              className="bg-amber-600 hover:bg-amber-500 text-white border border-amber-400 px-3 py-1 text-[10px] rounded flex items-center gap-1 cursor-pointer font-bold"
                            >
                              <Play className="w-3.5 h-3.5" />
                              <span>Play Voiceover</span>
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="border-b border-zinc-850 pb-2">
                        <span className="text-[9.5px] bg-amber-500/20 text-amber-300 border border-amber-500/35 px-1.5 py-0.5 rounded uppercase font-mono">{selectedArticle.category} COLUMN</span>
                        <h3 className="text-xs font-black text-white tracking-snug mt-1.5 leading-relaxed select-text">{selectedArticle.title}</h3>
                        <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1">Written on {selectedArticle.date} · {selectedArticle.readTime}</span>
                      </div>

                      <div className="text-[10.5px] leading-relaxed text-slate-300 font-sans select-all font-normal space-y-2 mt-2 max-h-[180px] overflow-y-auto pr-1">
                        <p>{selectedArticle.content}</p>
                      </div>
                    </div>
                  </div>
                )}


                {/* F. DIGITAL GARDEN KNOWLEDGE GRAPH PANEL */}
                {winId === 'garden' && (
                  <div className="space-y-4">
                    <div className="border-b border-[#2c2d3a] pb-2">
                      <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">Topological Semantics Mapping</span>
                      <h3 className="text-xs font-black text-white mt-1">Interconnected Semantic Knowledge Field</h3>
                    </div>

                    {/* Explorable interactive coordinate point array */}
                    <div>
                      <span className={styleSet.panelHeader}>INTERACTIVE CONCEPT NODES</span>
                      <div className="relative h-44 bg-zinc-950 p-2 border border-zinc-900 rounded-lg overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35" />
                        
                        {/* Render simple coordinate mapping nodes */}
                        <div className="relative w-full h-full">
                          {portfolioData.gardenNodes.map((gn, idx) => {
                            const posX = (idx * 11) % 80 + 10;
                            const posY = (idx * 7) % 65 + 15;
                            const isNodeHovered = hoveredGardenNode === gn.id;

                            return (
                              <button 
                                key={gn.id}
                                onMouseEnter={() => { setHoveredGardenNode(gn.id); triggerSound(1100, 0.01); }}
                                onMouseLeave={() => setHoveredGardenNode(null)}
                                style={{ left: `${posX}%`, top: `${posY}%` }}
                                className={`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 py-0.5 rounded border text-[9px] transition-all cursor-pointer font-mono ${isNodeHovered ? 'bg-[#00ffcc] text-black border-[#00ffcc] scale-110 shadow-[0_0_8px_#00ffcc] z-50' : 'bg-zinc-900/60 border-zinc-800 text-zinc-400'}`}
                              >
                                {gn.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Explanatory Node Card */}
                    <div className="bg-zinc-950 p-3 border border-zinc-900 rounded-lg min-h-[50px] select-text">
                      <span className="font-bold text-cyan-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1">
                        Active Node Spectrum Details:
                      </span>
                      {hoveredGardenNode ? (
                        <p className="text-[10px] text-zinc-400 leading-normal font-sans">
                          {hoveredGardenNode === 'nlp' && "Clinical NLP: Integrates semantic transformers explicitly tuned on Reddit discourse corpus mapping mental distress."}
                          {hoveredGardenNode === 'transformers' && "Transformers: Multi-attention neural architectures providing topological weights maps."}
                          {hoveredGardenNode === 'depression' && "Depression Dialectics: Analysis of negation markers and cognitive distortions."}
                          {hoveredGardenNode === 'ethics' && "Research Ethics: Strict patient confidentiality controls verified against strict healthcare safety parameters."}
                          {hoveredGardenNode === 'saas' && "AI SaaS: Low-latency scale-to-zero container workloads deployed across GCP Kubernetes mesh integrations."}
                          {!['nlp', 'transformers', 'depression', 'ethics', 'saas'].includes(hoveredGardenNode) && `Semantic connection active on ${hoveredGardenNode}. High performance clustering coefficient evaluated.`}
                        </p>
                      ) : (
                        <p className="text-[10px] text-zinc-500 font-sans">Hover on any interactive concept node above to evaluate corresponding diagnostic dependencies...</p>
                      )}
                    </div>
                  </div>
                )}


                {/* G. AI TAILORED RESUME GENERATOR */}
                {winId === 'resume' && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2">
                      <div>
                        <span className="bg-pink-500/10 text-pink-400 border border-pink-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">VIRTUAL RESUME ARCHITECT</span>
                        <h3 className="text-sm font-extrabold text-white mt-1">Interactively Tailored Professional Profile</h3>
                      </div>
                      
                      <button 
                        onClick={() => { window.print(); triggerSound(1100, 0.05); }}
                        className="bg-zinc-950 text-zinc-300 border border-zinc-800 hover:text-white px-2.5 py-1 rounded text-[10px] flex items-center gap-1 cursor-pointer font-bold mt-2 sm:mt-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Print Resume Draft</span>
                      </button>
                    </div>

                    {/* Selector of Target Audience */}
                    <div className="bg-zinc-950 p-2.5 border border-zinc-900 rounded-lg select-none">
                      <span className="text-[10px] text-zinc-500 font-bold block mb-1">CONFIGURE AUDIENCE TAILORING SYSTEM:</span>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 text-center">
                        {[
                          { id: 'recruiter', label: 'HR / Recruiter', text: 'Stresses full-stack frameworks, production scale parameters, and GCP deployment latency F1 scores.' },
                          { id: 'investor', label: 'Venture Capital', text: 'Emphasizes SaaS monetization indices, model scaling cost reductions, and architectural automation.' },
                          { id: 'founder', label: 'Startups / Founder', text: 'Highlights rapid zero-to-one product engineering, Docker stacks, and low-latency API integration.' },
                          { id: 'researcher', label: 'Clinical Academics', text: 'Focuses on linguistic models, peer-reviewed indices, topological sentiment classification levels, and statistical dataset weights.' }
                        ].map((aud) => (
                          <button 
                            key={aud.id}
                            onClick={() => { setResumeAudience(aud.id as any); triggerSound(800, 0.02); }}
                            className={`p-2 rounded-lg border text-[10px] text-left flex flex-col gap-0.5 capitalize transition-all cursor-pointer ${resumeAudience === aud.id ? 'bg-pink-500/10 border-pink-500/30 text-pink-300 font-bold' : 'bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950'}`}
                          >
                            <span>👤 {aud.label}</span>
                            <span className="text-[8px] opacity-70 font-normal leading-normal">{aud.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Responsive Resume Paper sheet */}
                    <div className="bg-zinc-950 p-4 border border-zinc-900 rounded-lg text-[10.5px] leading-relaxed max-h-[220px] overflow-y-auto font-sans text-slate-300 pr-1 select-text">
                      <div className="border-b border-zinc-850 pb-2 mb-2 text-center select-text">
                        <h4 className="text-xs font-black text-white uppercase tracking-wider">{portfolioData.name}</h4>
                        <span className="text-[9px] text-[#00ffcc] font-mono tracking-widest">{portfolioData.title}</span>
                      </div>

                      {resumeAudience === 'recruiter' && (
                        <div className="space-y-3">
                          <div>
                            <span className="font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono">EXECUTIVE SUMMARY (RECRUITER ALIGNED)</span>
                            <p>Result-oriented AI engineer possessing over 6 years of contiguous development building fast-response classification models and robust, horizontally-scaled TypeScript SaaS applications with absolute type-safety protocols.</p>
                          </div>
                          <div>
                            <span className="font-extrabold text-[#00ffcc] block text-[9.5px] uppercase font-mono">CORE TECHNICAL SPECIFICATIONS</span>
                            <p>React/Next.js, Tailwind v4, Node.js, Go microservices, Python PyTorch matrix operations, PostgreSQL schemas, Redis caches, and Docker container orchestration.</p>
                          </div>
                        </div>
                      )}

                      {resumeAudience === 'investor' && (
                        <div className="space-y-3">
                          <div>
                            <span className="font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono">STRATEGIC SYNOPSIS (VENTURE CAPITAL ALIGNED)</span>
                            <p>Product developer specializing in compiling scalable business models. Highly skilled at engineering zero-cold-start ML SaaS containers, driving serverless scale-to-zero GCP costs, and structuring predictive customer diagnostics panels decreasing friction indices by up to 42%.</p>
                          </div>
                          <div>
                            <span className="font-extrabold text-[#ebd8fb] block text-[9.5px] uppercase font-mono">PROVEN MONETIZATION HIGHLIGHTS</span>
                            <p>Built SafeSide prediction engines processing live football simulation data in real-time, executing Poisson risk evaluation algorithms with 0.88 F1 metric scores.</p>
                          </div>
                        </div>
                      )}

                      {resumeAudience === 'founder' && (
                        <div className="space-y-3">
                          <div>
                            <span className="font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono">PRODUCT FOUNDRY PROTOCOL (FOUNDER ALIGNED)</span>
                            <p>High-tempo zero-to-one software architect constructing high-performance platforms immediately on demand. Combines outstanding visual UI craftsmanship with decoupled scalable database designs, providing functional, production-ready systems without overhead.</p>
                          </div>
                          <div>
                            <span className="font-extrabold text-amber-300 block text-[9.5px] uppercase font-mono">CORE FLUIDITY TOOLS</span>
                            <p>TypeScript endpoints, instant responsive Tailwind designs, container networks, vector caches, and real-time bimodal communication interfaces.</p>
                          </div>
                        </div>
                      )}

                      {resumeAudience === 'researcher' && (
                        <div className="space-y-3">
                          <div>
                            <span className="font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono">RESEARCH STATEMENT (ACADEMIC ALIGNED)</span>
                            <p>Quantitative researcher researching the diagnostic intersection of linguistics analytics and mental wellness forums. Formulating custom bidirectional classification weights metrics that leverage fine-grained RoBERTa embeddings to map emotional distress on social media platforms.</p>
                          </div>
                          <div>
                            <span className="font-extrabold text-emerald-300 block text-[9.5px] uppercase font-mono">ACADEMIC RESEARCH TRACK RECORD</span>
                            <p>First-named author on clinical papers (RoBERTa depression classifier F1 accuracy of 0.914 against traditional baselines of 0.781). Outlined topological multidimensional sentiment models.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}


                {/* H. INTERACTIVE TIMELINE / EXPERIENCE BLOCK */}
                {winId === 'timeline' && (
                  <div className="flex flex-col md:flex-row h-full gap-4">
                    
                    {/* LHS Slider Selector */}
                    <div className="w-full md:w-52 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none">
                      <span className={styleSet.panelHeader}>CHRONOLOGY INDEX</span>
                      <div className="space-y-1.5">
                        {portfolioData.timeline.map((item) => (
                          <button 
                            key={item.year}
                            onClick={() => { setSelectedTimeline(item); triggerSound(800, 0.03); }}
                            className={`w-full text-left p-2 rounded-lg border flex items-center justify-between transition-all cursor-pointer ${selectedTimeline.year === item.year ? 'bg-sky-500/10 border-sky-500/30 text-sky-300 font-bold' : 'bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950'}`}
                          >
                            <span className="text-[10.5px]">{item.company}</span>
                            <span className="bg-zinc-900 px-1.5 py-0.5 rounded text-[8.5px] font-mono">{item.year}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* RHS Event Details */}
                    <div className="flex-1 space-y-3">
                      <div className="border-b border-[#2c2d3a] pb-2">
                        <span className="bg-sky-500/10 text-sky-300 border border-sky-500/20 px-1 py-0.5 rounded text-[9.5px] font-mono">YEAR: {selectedTimeline.year} EXP</span>
                        <h4 className="text-xs font-black text-white mt-1.5">{selectedTimeline.title}</h4>
                        <span className="text-[9.5px] text-zinc-500 font-serif block">{selectedTimeline.company} · Role: {selectedTimeline.role}</span>
                      </div>

                      <p className="text-[11px] leading-relaxed text-zinc-400 font-sans select-text">{selectedTimeline.description}</p>

                      <div className="space-y-2 select-text">
                        <span className={styleSet.panelHeader}>HIGHLIGHT ACCOMPLISHMENTS</span>
                        <ul className="space-y-1.5 pl-3 list-disc text-[10.5px] text-slate-300 leading-normal">
                          {selectedTimeline.achievements.map((ach, idx) => (
                            <li key={idx} className="marker:text-sky-400">{ach}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-zinc-950/40 p-2.5 border border-zinc-900 rounded-lg mt-3">
                        <span className="font-bold text-zinc-300 block text-[9.5px] uppercase font-mono tracking-widest mb-1.5">INTEGRATED TECH GRID</span>
                        <div className="flex flex-wrap gap-1 select-none">
                          {selectedTimeline.technologies.map((t) => (
                            <span key={t} className="bg-zinc-900 text-slate-400 border border-zinc-800 rounded px-1.5 font-mono text-[9px]">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {winId === 'profTimeline' && (
                  <div className="space-y-6">
                    <div className="border-b border-[#2c2d3a] pb-2">
                      <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">PRO TIMELINE NODE</span>
                      <h3 className="text-xs font-black text-white mt-1">Professional Experience & Verification Chronology</h3>
                    </div>

                    <div className="relative pl-6 md:pl-0 pt-4">
                      {/* Vertical line */}
                      <div className="absolute left-[13px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/60 via-cyan-500/20 to-transparent -translate-x-1/2 pointer-events-none z-0"></div>
                      <div className="absolute left-[13px] md:left-1/2 top-0 bottom-16 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10"></div>

                      <div className="space-y-10 relative z-10">
                        {portfolioData.professionalTimeline.map((item, idx) => {
                          const isLeft = idx % 2 === 0;
                          return (
                            <div key={idx} className={`flex flex-col md:flex-row items-start ${isLeft ? 'md:flex-row-reverse' : ''} relative`}>
                              {/* Node Circle */}
                              <div className="absolute left-[13px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                <div className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-md">
                                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500"></span>
                                </div>
                              </div>

                              {/* Spacer */}
                              <div className="hidden md:block w-1/2" />

                              {/* Card container */}
                              <div className="w-full md:w-[46%] pl-8 md:pl-0">
                                <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-900/80 relative group hover:border-zinc-800 transition-all duration-300">
                                  <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-500/5 blur-lg pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                                  
                                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                    <div>
                                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-0.5">{item.year}</span>
                                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">{item.title}</h4>
                                      <span className="text-[9px] text-zinc-550 block font-mono mt-0.5">{item.company}</span>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-mono border font-medium uppercase ${
                                      item.badgeColor === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                                      item.badgeColor === 'indigo' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' :
                                      item.badgeColor === 'pink' ? 'bg-pink-500/10 text-pink-400 border-pink-500/30' :
                                      'bg-amber-500/10 text-amber-400 border-amber-500/30'
                                    }`}>{item.company}</span>
                                  </div>

                                  <ul className="space-y-2 mb-4 text-[10.5px] text-zinc-400">
                                    {item.achievements.map((bullet, bulletIdx) => (
                                      <li key={bulletIdx} className="flex items-start leading-relaxed text-zinc-400 select-text">
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2 shrink-0" />
                                        <span>{bullet}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  <div className="flex flex-wrap gap-1 pt-3 border-t border-zinc-900/60 select-none">
                                    {item.technologies.map((t) => (
                                      <span key={t} className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900">{t}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}


                {/* I. TECH OBSERVATORY / SKILLS OBSERVER */}
                {winId === 'skills' && (
                  <div className="space-y-4">
                    <div className="border-b border-[#2c2d3a] pb-2 flex-col gap-0.5">
                      <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">Observatory Deck</span>
                      <h3 className="text-xs font-black text-white mt-1">Linguistic, Structural & Compute Matrices</h3>
                    </div>

                    <div className="flex items-center gap-2 bg-zinc-950/60 p-1 border border-zinc-900 rounded-lg overflow-x-auto scrollbar-none select-none">
                      {['all', 'AI/ML', 'Frontend', 'Backend', 'Research', 'Systems'].map((filter) => (
                        <button 
                          key={filter}
                          onClick={() => { setSkillFilter(filter as any); triggerSound(800, 0.02); }}
                          className={`text-[9.5px] px-2.5 py-1 rounded capitalize cursor-pointer transition-colors ${skillFilter === filter ? 'bg-indigo-600 font-bold text-white shadow-[0_0_8px_#4f46e5]' : 'bg-transparent text-zinc-500 hover:text-zinc-300'}`}
                        >
                          {filter === 'all' ? 'All Matrices' : filter}
                        </button>
                      ))}
                    </div>

                    {/* Weight-based circular coordinate grid matrix representing custom skills map */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[220px] overflow-y-auto p-1 scrollbar-none">
                      {filteredSkills.map((sk) => {
                        const weightPct = sk.weight === 5 ? 'border-sky-500/50 bg-sky-500/5 text-sky-200' : sk.weight === 4 ? 'border-indigo-500/30 bg-indigo-500/5 text-indigo-200' : 'border-zinc-800 bg-zinc-900/40 text-zinc-400';
                        return (
                          <div 
                            key={sk.name}
                            onClick={() => triggerSound(700 + sk.weight * 100, 0.03)}
                            className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all hover:scale-103 select-none flex flex-col items-center justify-center gap-1 relative overflow-hidden ${weightPct}`}
                          >
                            <span className="text-[10.5px] font-bold md:tracking-tight font-sans text-stone-100">{sk.name}</span>
                            <span className="text-[8px] opacity-75 uppercase tracking-widest font-mono text-zinc-400">{sk.category}</span>
                            <div className="flex items-center gap-0.5 mt-1">
                              {Array.from({ length: 5 }).map((_, stIdx) => (
                                <span key={stIdx} className={`w-1 h-1 rounded-full ${stIdx < sk.weight ? 'bg-indigo-400 shadow-[0_0_4px_#818cf8]' : 'bg-zinc-800'}`} />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}


                {/* J. COLLABORATION HUB / STRATEGIC BRIEF PREVIEW */}
                {winId === 'brief' && (
                  <div className="space-y-4">
                    <div className="border-b border-[#2c2d3a] pb-2">
                      <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">INTELLIGENT INTAKE PROCESS</span>
                      <h3 className="text-xs font-black text-white mt-1">Initiate Feasibility Evaluation Strategy</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Configuration Parameter Fields */}
                      <div className="space-y-2.5">
                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1 uppercase font-mono">VENTURE DOMAIN:</label>
                          <select 
                            value={briefForm.projectType}
                            onChange={(e) => setBriefForm({ ...briefForm, projectType: e.target.value })}
                            className="w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 cursor-pointer"
                          >
                            <option>AI Engineering & LLMs</option>
                            <option>Clinical NLP & Mental State analysis</option>
                            <option>SaaS Automation Development</option>
                            <option>Interactive UI/UX Projects</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] text-zinc-400 block mb-1 uppercase font-mono">FINANCIAL BOUNDS:</label>
                            <select 
                              value={briefForm.budget}
                              onChange={(e) => setBriefForm({ ...briefForm, budget: e.target.value })}
                              className="w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer"
                            >
                              <option>$5k - $10k</option>
                              <option>$10k - $25k</option>
                              <option>$25k+</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[10px] text-zinc-400 block mb-1 uppercase font-mono">TIMELINE PROFILE:</label>
                            <select 
                              value={briefForm.timeline}
                              onChange={(e) => setBriefForm({ ...briefForm, timeline: e.target.value })}
                              className="w-full bg-black/60 border border-zinc-800 rounded px-2 text-slate-100 text-[10.5px] py-1.5 outline-hidden cursor-pointer"
                            >
                              <option>1-3 Months</option>
                              <option>3 Months-half year</option>
                              <option>Complex Multiphase</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1 uppercase font-mono">STRATEGIC GOALS / OBJECTIVES:</label>
                          <textarea 
                            value={briefForm.goals}
                            onChange={(e) => setBriefForm({ ...briefForm, goals: e.target.value })}
                            rows={3}
                            placeholder="Detail parameters (e.g. evaluating clinical texts via custom token systems, building offline CRDT platforms)"
                            className="w-full bg-black/60 border border-zinc-800 rounded p-2 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-650"
                          />
                        </div>

                        <button 
                          onClick={handleSendBrief}
                          disabled={!briefForm.goals.trim() || briefLoading}
                          className="w-full bg-rose-600 hover:bg-rose-500 text-white border border-rose-400 py-2 rounded-lg text-[10.5px] cursor-pointer font-bold tracking-tight shadow-lg shadow-rose-950/50 flex items-center justify-center gap-1.5"
                        >
                          {briefLoading ? (
                            <>
                              <Cpu className="w-3.5 h-3.5 animate-spin" />
                              <span>Deconstruct parameters algorithms...</span>
                            </>
                          ) : (
                            <>
                              <Workflow className="w-3.5 h-3.5" />
                              <span>Evaluate Feasibility Strategy</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Strategic analysis read-out panel */}
                      <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-3.5 flex flex-col justify-between min-h-[220px]">
                        <div>
                          <span className="font-bold text-rose-300 block text-[9.5px] uppercase font-mono tracking-widest border-b border-zinc-850 pb-1.5 mb-2.5">
                            ASSESSMENT & ARCHITECTURE STRATEGY:
                          </span>
                          {briefSummary ? (
                            <p className="text-[11px] text-slate-300 leading-relaxed font-sans select-text">{briefSummary}</p>
                          ) : (
                            <div className="text-zinc-600 font-sans text-[10.5px] italic text-center py-10">
                              Formulate objectives on LHS & execute evaluation to render Gemini predictive architecture recommendations...
                            </div>
                          )}
                        </div>

                        {briefSummary && (
                          <div className="border-t border-zinc-900 pt-2 text-[10px] flex items-center justify-between mt-4">
                            <span className="text-zinc-500 flex items-center gap-1 font-mono">
                              <Check className="w-3 h-3 text-emerald-400" /> API SECURE Rails
                            </span>
                            <button 
                              onClick={() => {
                                alert("Strategy Brief dispatched. Farhan's team will contact you securely.");
                                setBriefSummary(null);
                                triggerSound(1100, 0.05);
                              }}
                              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-1 px-3 border border-emerald-400 rounded text-[9.5px] cursor-pointer"
                            >
                              Dispatch Brief
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}


                {/* L. IDEATION PAD / DRAWING WHITEBOARD */}
                {winId === 'whiteboard' && (
                  <Whiteboard theme={theme} triggerSound={triggerSound} />
                )}

                {/* K. SYSTEM BUILD MONITOR / RELEASE LOGS */}
                {winId === 'builds' && (
                  <div className="space-y-4">
                    <div className="border-b border-[#2c2d3a] pb-2 flex-col gap-0.5">
                      <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono">TELEMETRY DIAGNOSTICS</span>
                      <h3 className="text-xs font-black text-white mt-1">Continuous Development & Deployment Releases</h3>
                    </div>

                    <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
                      {portfolioData.buildLogs.map((log) => (
                        <div key={log.id} className="bg-zinc-950/40 p-3.5 border border-[#2d2f3d] rounded-lg space-y-2 select-text">
                          <div className="flex items-center justify-between border-b border-zinc-850 pb-1.5">
                            <div className="flex items-center gap-1.5 text-white font-bold">
                              <span className="text-teal-400 font-mono text-[9.5px] p-0.5 px-1.5 border border-teal-500/20 bg-teal-500/5 rounded">{log.version}</span>
                              <span className="text-[11px] font-sans truncate">{log.title}</span>
                            </div>
                            <span className="text-[9.5px] text-zinc-500 font-mono">{log.date}</span>
                          </div>

                          <p className="text-[10.5px] text-slate-400 leading-relaxed font-sans">{log.description}</p>

                          <div>
                            <span className="font-bold text-zinc-300 block text-[9px] uppercase font-mono tracking-widest mb-1">TASKS DEPLOYED</span>
                            <ul className="space-y-1 pl-3 text-[10px] text-zinc-400 list-disc leading-normal font-sans">
                              {log.tasksCompleted.map((t, tIdx) => (
                                <li key={tIdx}>{t}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="border-t border-zinc-900 pt-1.5">
                            <span className="font-bold text-teal-300 block text-[9px] uppercase font-mono tracking-widest mb-1">METRIC SHIFTS DETECTED</span>
                            <div className="flex flex-wrap gap-2 text-[10px] font-mono select-none">
                              {log.metricsChanged.map((mc, mIdx) => (
                                <span key={mIdx} className="bg-zinc-90 w-full flex items-center justify-between p-1.5 rounded border border-zinc-900 text-stone-300">
                                  <span>{mc.metric}:</span>
                                  <span className="text-teal-400 font-bold">{mc.before} ➔ {mc.after}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

            </div>
          );
        })}

      </main>

      {/* 6. SYSTEM FOOTER WORKSPACE DOCK */}
      <footer className="h-16 bg-black/45 backdrop-blur-2xl border-t border-zinc-800/40 flex items-center justify-center relative select-none">
        
        {/* Dynamic task bar container of apps */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-950/65 border border-zinc-800/60 rounded-2xl shadow-xl max-w-[95vw] overflow-x-auto scrollbar-none select-none">
          {desktopIcons.map((ico) => {
            const ActiveIcon = ico.icon;
            const isOpen = openWindows.includes(ico.id);
            const isFocus = focusedWindow === ico.id && !minimizedWindows.includes(ico.id);

            return (
              <button 
                key={ico.id}
                onClick={() => {
                  if (isOpen) {
                    if (isFocus) {
                      minimizeWindow(ico.id);
                    } else {
                      setFocusedWindow(ico.id);
                      setMinimizedWindows(prev => prev.filter(w => w !== ico.id));
                    }
                  } else {
                    openWindow(ico.id);
                  }
                }}
                className={`p-2 rounded-xl transition-all relative cursor-pointer ${ico.color} transform hover:scale-129 active:scale-95 duration-100`}
                title={ico.label}
              >
                <ActiveIcon className="w-5 h-5" />
                
                {/* Active Indicator Light Dot beneath icon */}
                {isOpen && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_5px_#38bdf8]" />
                )}
                
                {/* Focused Glow layer */}
                {isFocus && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#00ffcc] to-purple-500 rounded filter blur-xs" />
                )}
              </button>
            );
          })}
        </div>

        {/* Global quick launch commands */}
        <div className="absolute right-4 hidden md:flex items-center gap-1.5">
          <button 
            type="button" 
            onClick={() => { setCommandPaletteOpen(true); triggerSound(800, 0.03); }}
            className="p-1 px-3 text-slate-400 hover:text-white rounded border border-zinc-800/80 hover:bg-zinc-950 text-[10px] font-mono cursor-pointer"
          >
            Terminal Commands (CMD+K)
          </button>
        </div>
      </footer>

      {/* 7. CMD + K GLOBAL COMMAND PALETTE SEARCH SCREEN PANEL */}
      {commandPaletteOpen && (
        <div className="fixed inset-0 bg-[#020204]/85 z-[1000] flex items-start justify-center pt-[15vh] px-4 font-normal">
          <div className="w-full max-w-lg bg-[#0e0f17] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[60vh] select-none animate-scale-up">
            
            <div className="flex items-center gap-3 p-3 bg-zinc-950 border-b border-zinc-850">
              <Search className="w-4 h-4 text-sky-400" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, research papers, tech stack node keys, commands..."
                className="flex-1 bg-transparent text-slate-105 font-sans outline-hidden border-none text-xs text-white"
                autoFocus
              />
              <button 
                onClick={() => { setCommandPaletteOpen(false); triggerSound(400, 0.02); }}
                className="p-1 text-zinc-500 hover:text-white rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick search guidelines / matching indices list */}
            <div className="flex-1 overflow-y-auto p-2 scrollbar-none max-h-[300px]">
              {searchQuery.trim().length === 0 ? (
                <div className="space-y-2">
                  <div className="text-[10px] text-zinc-500 font-bold px-2 block uppercase tracking-wide">SYSTEM DIAGNOSTIC CORES:</div>
                  <button 
                    onClick={() => { runTourCycle(); setCommandPaletteOpen(false); }}
                    className="w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-emerald-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]"
                  >
                    🚀 Trigger system AI Guided Tour with synthesized Voice narrations
                  </button>
                  <button 
                    onClick={() => { openWindow('brief'); setCommandPaletteOpen(false); }}
                    className="w-full text-left p-2 hover:bg-zinc-900 rounded-lg text-indigo-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px]"
                  >
                    💡 Open Mission Intake Consultation Workspace
                  </button>
                  <div className="text-[10px] text-zinc-550 italic font-sans px-2">
                    Enter queries parsing index models above to match academic research text parameters...
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="text-[10px] text-zinc-500 px-2 font-bold uppercase tracking-widest border-b border-zinc-900 pb-1 mb-1.5">MATCHED WORKSPACE PARAMS ({systemSearchResults.length})</div>
                  {systemSearchResults.length > 0 ? (
                    systemSearchResults.map((res, sIdx) => (
                      <button 
                        key={sIdx}
                        onClick={res.action}
                        className="w-full text-left p-3 hover:bg-zinc-900 rounded-lg flex items-center justify-between transition-colors border border-transparent hover:border-zinc-800 cursor-pointer text-[11px]"
                      >
                        <div>
                          <span className="text-[9px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-1 py-0.5 rounded font-mono mr-2 uppercase">{res.type}</span>
                          <span className="text-white font-bold font-sans">{res.title}</span>
                        </div>
                        <span className="text-[10px] text-zinc-500">{res.subtitle}</span>
                      </button>
                    ))
                  ) : (
                    <div className="text-center text-zinc-500 text-[11px] py-6 font-sans">No matching intelligence indices found. Retry key parameters.</div>
                  )}
                </div>
              )}
            </div>

            <div className="p-2.5 bg-zinc-950 border-t border-zinc-850 flex items-center justify-between text-[10px] text-zinc-500">
              <span className="font-mono">SEARCH GRID INTEGRATION READY</span>
              <span>ESC TO EXIT</span>
            </div>
          </div>
        </div>
      )}
        </>
      )}
    </div>
  );
}
