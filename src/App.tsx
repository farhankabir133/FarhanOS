import React, { useState, useEffect, useRef, lazy, Suspense, useMemo, useCallback } from 'react';
const AssistantLauncher = lazy(() => import('./components/AssistantLauncher'));
import { 
  Terminal, Cpu, Layers, GitBranch, BookOpen, Network, FileText, 
  Calendar, Award, Activity, Search, Briefcase, Volume2, VolumeX, 
  Maximize2, Minimize2, X, Menu, Send, Sparkles, Code, Workflow, User, 
  Folder, Map, Settings, Play, Pause, HelpCircle, Check, Copy, 
  Download, ExternalLink, Rocket, Compass, PhoneCall, RefreshCw,
  Clock, CheckSquare, FileSpreadsheet, Palette
} from 'lucide-react';
import { FarhanAIIcon } from './components/FarhanAIIcon';
import MarkdownRenderer from './components/MarkdownRenderer';
import { portfolioData } from './data/portfolioData';
import { Project, Paper, TimelineEvent, Article, BuildLog, SkillNode, GardenNode } from './types';
import LandingPage from './components/LandingPage';
const Whiteboard = lazy(() => import('./components/Whiteboard'));
const BuildsWindow = lazy(() => import('./os/windows/BuildsWindow'));
const TimelineWindow = lazy(() => import('./os/windows/TimelineWindow'));
const ResumeWindow = lazy(() => import('./os/windows/ResumeWindow'));
const GithubWindow = lazy(() => import('./os/windows/GithubWindow'));
const GardenWindow = lazy(() => import('./os/windows/GardenWindow'));
const SkillsWindow = lazy(() => import('./os/windows/SkillsWindow'));
const ProjectsWindow = lazy(() => import('./os/windows/ProjectsWindow'));
const ResearchWindow = lazy(() => import('./os/windows/ResearchWindow'));
const WritingWindow = lazy(() => import('./os/windows/WritingWindow'));
const TwinWindow = lazy(() => import('./os/windows/TwinWindow'));
const BriefWindow = lazy(() => import('./os/windows/BriefWindow'));
const ProfTimelineWindow = lazy(() => import('./os/windows/ProfTimelineWindow'));
import DecryptText from './components/DecryptText';
import { speakTextClient, getAskTwinFallback, generateClientBriefSummary } from './utils/aiFallback';
import { getApiBaseUrl } from './utils/apiConfig';


export default function App() {
  // Navigation View Modes
  const [viewMode, setViewMode] = useState<'landing' | 'os'>('landing');
  const [isWarping, setIsWarping] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (viewMode === 'os') {
      document.documentElement.classList.add('os-mode');
    } else {
      document.documentElement.classList.remove('os-mode');
    }
    return () => {
      document.documentElement.classList.remove('os-mode');
    };
  }, [viewMode]);

  // Landing Page Interactive States
  const [landingQuery, setLandingQuery] = useState('');
  const [landingReply, setLandingReply] = useState('');
  const [landingChatLoading, setLandingChatLoading] = useState(false);
  const [selectedResearchPaper, setSelectedResearchPaper] = useState<any>(null); // For a popup reader on landing page

  // OS System States
  const [theme, setTheme] = useState<'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light'>('dark');
  const [currentTime, setCurrentTime] = useState('');
  const [isBooted, setIsBooted] = useState(false);
  const [bootProgress, setBootProgress] = useState(0);
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  
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
  const [windowReady, setWindowReady] = useState<Record<string, boolean>>({});

  const osTimelineProgressLineRef = useRef<HTMLDivElement | null>(null);

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

  const cycleTheme = useCallback(() => {
    const themes: Array<'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light'> = ['dark', 'cyberpunk', 'ai', 'terminal', 'light'];
    const nextIdx = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIdx]);
    triggerSound(750, 0.03);
  }, [theme]);

  // Quick Action OS Bypass Helpers
  const handleOpenWindowDirectly = useCallback((winId: string) => {
    setViewMode('os');
    setIsBooted(true);
    setOpenWindows(prev => {
      if (prev.includes(winId)) return prev;
      return [...prev, winId];
    });
    setFocusedWindow(winId);
    triggerSound(900, 0.05);
  }, []);

  const handleOpenProjectDirectly = useCallback((project: Project) => {
    setSelectedProject(project);
    handleOpenWindowDirectly('projects');
  }, [handleOpenWindowDirectly]);

  const handleOpenArticleDirectly = useCallback((article: Article) => {
    setSelectedArticle(article);
    handleOpenWindowDirectly('writing');
  }, [handleOpenWindowDirectly]);

  // UI Interactive States
  const [selectedProject, setSelectedProject] = useState<Project>(portfolioData.projects[0]);
  const [selectedPaper, setSelectedPaper] = useState<Paper>(portfolioData.papers[0]);
  const [articles, setArticles] = useState<Article[]>(portfolioData.articles);
  const [selectedArticle, setSelectedArticle] = useState<Article>(portfolioData.articles[0]);
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineEvent>(portfolioData.timeline[0]);

useEffect(() => {
    const fetchMediumStories = async () => {
      try {
        const res = await fetch('/api/medium-stories');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setArticles(data);
            setSelectedArticle(data[0]);
            return;
          }
        }
      } catch (err) {
        console.warn('Medium stories endpoint unavailable, using static articles:', err);
      }

      setArticles(portfolioData.articles);
      setSelectedArticle(portfolioData.articles[0]);
    };
    fetchMediumStories();
  }, []);
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
    comments: '',
    email: ''
  });
  const [briefSummary, setBriefSummary] = useState<string | null>(null);
  const [briefLoading, setBriefLoading] = useState(false);
  const [briefDispatchLoading, setBriefDispatchLoading] = useState(false);

  // AI Guided Tour States
  const [isTourActive, setIsTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [tourMsg, setTourMsg] = useState('');
  const [tourLoading, setTourLoading] = useState(false);

  // Custom Digital Garden Graph interactive states
  const [hoveredGardenNode, setHoveredGardenNode] = useState<string | null>(null);

  // Draggable State Management (Simple manual drag handler to avoid external libraries complexity)
  const [draggedWindow, setDraggedWindow] = useState<string | null>(null);

  const triggerSound = (_freq: number = 800, _dur: number = 0.03) => {};

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

  const handleWarpAndEnter = useCallback(() => {
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
      setIsBooted(false);
      setIsWarping(false);
    }, 1800);
  }, [isWarping]);

  const handleSendLandingChat = async () => {
    if (!landingQuery.trim() || landingChatLoading) return;
    const q = landingQuery.trim();
    setLandingQuery('');
    setLandingReply('');
    setLandingChatLoading(true);
    triggerSound(1050, 0.03);
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/ask-twin`, {
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
  });

  // Drag Window logic handlers - buttery smooth macOS-style dragging
  const draggedWindowRef = useRef<string | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const dragVelocityRef = useRef({ x: 0, y: 0 });
  const lastDragPosRef = useRef({ x: 0, y: 0 });
  const lastDragTimeRef = useRef(0);
  const currentPosRef = useRef({ x: 0, y: 0 });
  const momentumRafRef = useRef<number | null>(null);

  const handleMouseDown = (windowId: string, e: React.MouseEvent) => {
    if (windowPositions[windowId]?.isMaximized) return;
    e.preventDefault();
    setFocusedWindow(windowId);

    const currentX = windowPositions[windowId]?.x || 0;
    const currentY = windowPositions[windowId]?.y || 0;

    draggedWindowRef.current = windowId;
    dragOffsetRef.current = {
      x: e.clientX - currentX,
      y: e.clientY - currentY,
    };
    lastDragPosRef.current = { x: currentX, y: currentY };
    lastDragTimeRef.current = performance.now();
    dragVelocityRef.current = { x: 0, y: 0 };
    currentPosRef.current = { x: currentX, y: currentY };

    setDraggedWindow(windowId);
    triggerSound(500, 0.01);
  };

  const applyMomentum = useCallback(() => {
    const activeWindow = draggedWindowRef.current;
    if (!activeWindow) return;

    let velX = dragVelocityRef.current.x;
    let velY = dragVelocityRef.current.y;
    let posX = currentPosRef.current.x;
    let posY = currentPosRef.current.y;

    const friction = 0.92;
    const minVel = 0.5;

    const step = () => {
      velX *= friction;
      velY *= friction;

      if (Math.abs(velX) < minVel && Math.abs(velY) < minVel) {
        momentumRafRef.current = null;
        return;
      }

      posX += velX;
      posY += velY;

      setWindowPositions(prev => ({
        ...prev,
        [activeWindow]: { ...prev[activeWindow], x: posX, y: posY }
      }));

      currentPosRef.current = { x: posX, y: posY };
      momentumRafRef.current = requestAnimationFrame(step);
    };

    momentumRafRef.current = requestAnimationFrame(step);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const activeWindow = draggedWindowRef.current;
    if (!activeWindow) return;

    const dx = e.movementX;
    const dy = e.movementY;

    currentPosRef.current.x = Math.max(0, currentPosRef.current.x + dx);
    currentPosRef.current.y = Math.max(0, currentPosRef.current.y + dy);

    setWindowPositions(prev => ({
      ...prev,
      [activeWindow]: { ...prev[activeWindow], x: currentPosRef.current.x, y: currentPosRef.current.y }
    }));
  }, []);

  const handleMouseUp = useCallback(() => {
    const activeWindow = draggedWindowRef.current;
    if (activeWindow) {
      if (momentumRafRef.current) cancelAnimationFrame(momentumRafRef.current);

      const finalX = currentPosRef.current.x;
      const finalY = currentPosRef.current.y;

      setWindowPositions(prev => ({
        ...prev,
        [activeWindow]: { ...prev[activeWindow], x: finalX, y: finalY }
      }));

      draggedWindowRef.current = null;
      setDraggedWindow(null);
    }
  }, []);

  const handleAnimationEnd = useCallback((windowId: string) => {
    setWindowReady(prev => ({ ...prev, [windowId]: true }));
  }, []);

  useEffect(() => {
    if (draggedWindow) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggedWindow, handleMouseMove, handleMouseUp]);

  // Opening & Focusing a window
  const openWindow = useCallback((windowId: string) => {
    triggerSound(700, 0.05);
    setOpenWindows(prev => {
      if (prev.includes(windowId)) return prev;
      return [...prev, windowId];
    });
    setMinimizedWindows(prev => prev.filter(w => w !== windowId));
    setFocusedWindow(windowId);
    setWindowReady(prev => ({ ...prev, [windowId]: false }));
  }, []);

  const closeWindow = useCallback((windowId: string) => {
    triggerSound(400, 0.06);
    setOpenWindows(prev => prev.filter(w => w !== windowId));
    setWindowReady(prev => {
      const next = { ...prev };
      delete next[windowId];
      return next;
    });
  }, []);

  const minimizeWindow = useCallback((windowId: string) => {
    triggerSound(450, 0.04);
    setMinimizedWindows(prev => {
      if (prev.includes(windowId)) return prev;
      return [...prev, windowId];
    });
    setFocusedWindow(prev => {
      const rest = openWindows.filter(w => w !== windowId && !minimizedWindows.includes(w));
      return rest.length > 0 ? rest[rest.length - 1] : prev;
    });
  }, [openWindows, minimizedWindows]);

  const toggleMaximize = useCallback((windowId: string) => {
    triggerSound(800, 0.04);
    setWindowPositions(prev => ({
      ...prev,
      [windowId]: { ...prev[windowId], isMaximized: !prev[windowId]?.isMaximized }
    }));
  }, []);

  // TTS Speech Player
  const speakText = useCallback(async (text: string, index: number | null = null, mode: 'tour' | 'narrate' = 'narrate') => {
    try {
      if (currentTTSAudio) {
        currentTTSAudio.stop();
        setCurrentTTSAudio(null);
      }
      setPlayingMessageIndex(index);
      const res = await fetch(`${getApiBaseUrl()}/api/tts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, type: mode })
      });
      const data = await res.json();
      if (data.audio) {
        setTimeout(() => {
          setPlayingMessageIndex(null);
        }, 2000);
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
  }, [currentTTSAudio]);

  const stopSpeaking = useCallback(() => {
    if (currentTTSAudio) {
      currentTTSAudio.stop();
      setCurrentTTSAudio(null);
    }
    setPlayingMessageIndex(null);
  }, [currentTTSAudio]);

  const handleSendTwinMessage = useCallback(async () => {
    if (!twinInput.trim()) return;
    const userMsg = twinInput.trim();
    setTwinInput('');
    setTwinMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setTwinLoading(true);
    triggerSound(1100, 0.03);

    try {
      const historyPayload = twinMessages.map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content
      }));

      const res = await fetch(`${getApiBaseUrl()}/api/ask-twin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: historyPayload })
      });
      const data = await res.json();
      
      if (data.reply) {
        setTwinMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        setTwinLoading(false);
        speakText(data.reply, twinMessages.length + 1);
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
      speakText(fallbackReply, twinMessages.length + 1);
    }
  }, [twinInput, twinMessages, speakText]);

  const handleSendBrief = useCallback(async () => {
    if (!briefForm.goals.trim()) return;
    setBriefLoading(true);
    triggerSound(950, 0.05);
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/summarize-brief`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectType: briefForm.projectType,
          budget: briefForm.budget,
          timeline: briefForm.timeline,
          goals: briefForm.goals,
          comments: briefForm.comments
        })
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
  }, [briefForm]);

  const handleDispatchBrief = useCallback(async () => {
    if (!briefForm.email.trim()) {
      alert("Please provide a valid transmission email address before dispatching.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(briefForm.email)) {
      alert("Please provide a valid email structure.");
      return;
    }
    setBriefDispatchLoading(true);
    triggerSound(1100, 0.05);
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'OS Mission Collaborator',
          email: briefForm.email,
          subject: `Mission Brief: ${briefForm.projectType}`,
          message: `Strategic Brief Parameters:\n- Venture Domain: ${briefForm.projectType}\n- Financial Bounds: ${briefForm.budget}\n- Timeline Profile: ${briefForm.timeline}\n- Strategic Goals: ${briefForm.goals}\n- Operational Directives: ${briefForm.comments || 'None'}\n\nGenerated Assessment Architecture:\n${briefSummary}`,
          metadata: {
            source: 'OS_MISSION_BRIEF',
            projectType: briefForm.projectType,
            budget: briefForm.budget,
            timeline: briefForm.timeline,
            comments: briefForm.comments
          }
        })
      });
      
      if (!res.ok) {
        throw new Error('Failed to dispatch brief.');
      }
      
      alert("Handshake confirmed. Strategy Brief successfully transmitted to Farhan's secure channel.");
      setBriefSummary(null);
      
      setBriefForm(prev => ({
        ...prev,
        goals: '',
        comments: '',
        email: ''
      }));
    } catch (err) {
      console.warn('Real dispatch failed, falling back to simulation:', err);
      alert("Handshake completed. Strategy Brief successfully recorded (simulated delivery).");
      setBriefSummary(null);
    } finally {
      setBriefDispatchLoading(false);
    }
  }, [briefForm, briefSummary]);

  const runTourCycle = useCallback(async () => {
    triggerSound(1200, 0.1);
    setIsTourActive(true);
    setTourLoading(true);
    setTourStep(1);

    const tourSteps = [
      {
        id: 'twin',
        title: 'Neural Core Clone',
        text: 'This is FK\'s AI Assistant, trained on Farhan\'s complete portfolio. You can query clinical results, NLP models, and full-stack architecture profiles.'
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
          text: 'Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Groq reasoning framework.'
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

      await speakText(cur.text, null, 'tour');
      setTourLoading(false);
    };

    await startStep(1);
  }, [openWindow, speakText]);

  const nextTourStep = useCallback(() => {
    if (tourStep < 5) {
      const next = tourStep + 1;
      setTourStep(next);
      triggerSound(800, 0.04);
      
      const tourStepsText = [
        'Review the high-precision mission panels showing fine-tuned Transformers, custom Go microservices, and metrics-driven SaaS applications.',
        'Inspect peer-reviewed NLP models, specialized Reddit depression classifiers, topological architectures, and citation modules.',
        'Explore interactive visual expertise nodes across deep ML, distributed scalable systems, and fully secure client UI architectures.',
        'Submit custom initiatives to initiate automated feasibility evaluations driven directly by the Groq reasoning framework.'
      ];
      const winIds = ['projects', 'research', 'skills', 'brief'];
      openWindow(winIds[next - 1]);
      setTourMsg(tourStepsText[next - 2]);
      speakText(tourStepsText[next - 2], null, 'tour');
    } else {
      setIsTourActive(false);
      setTourStep(0);
      stopSpeaking();
      triggerSound(1300, 0.05);
    }
  }, [tourStep, openWindow, speakText, stopSpeaking]);

  const filteredSkills = useMemo(() => portfolioData.skills.filter(s => {
    if (skillFilter === 'all') return true;
    if (skillFilter === 'AI/ML' && s.category === 'AI/ML') return true;
    if (skillFilter === 'Frontend' && s.category === 'Frontend') return true;
    if (skillFilter === 'Backend' && s.category === 'Backend') return true;
    if (skillFilter === 'Research' && s.category === 'Research & Science') return true;
    if (skillFilter === 'Systems' && s.category === 'Systems & Devops') return true;
    return false;
  }), [skillFilter]);

  // Global Command Palette matching items
  const getSearchItems = useCallback(() => {
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
    articles.forEach(a => {
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
  }, [searchQuery, articles, openWindow, setSelectedProject, setSelectedPaper, setSelectedArticle, setSkillFilter, setCommandPaletteOpen]);

  const systemSearchResults = useMemo(() => getSearchItems(), [getSearchItems]);

  // Desktop Icons Configuration for ease of access
  const desktopIcons = useMemo(() => [
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
  ], []);

  // Theme styling definitions mapping
  const getThemeStyles = useCallback(() => {
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
  }, [theme]);

  const styleSet = useMemo(() => getThemeStyles(), [getThemeStyles]);

  return (
    <div className={`w-full ${viewMode === 'os' ? 'h-full overflow-hidden select-none' : 'min-h-screen'} ${styleSet.bg} transition-colors duration-500 flex flex-col relative`}>
      {viewMode === 'landing' ? (
        <LandingPage
          isWarping={isWarping}
          theme={theme}
          onLaunchOS={handleWarpAndEnter}
          onOpenWindowDirectly={handleOpenWindowDirectly}
          articles={articles}
          onOpenArticleDirectly={handleOpenArticleDirectly}
        />
      ) : (
        <>
          {/* 2. TOP MENU NAVIGATION BAR */}
          <header className="h-10 bg-black/40 backdrop-blur-md border-b border-zinc-800/40 flex items-center justify-between px-4 z-[99] select-none text-xs font-mono">
            <div className="flex items-center gap-3">
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
                <span className="hidden sm:inline">Return to Cosmos</span>
              </button>
            </div>

            {/* Hamburger button - mobile only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded text-zinc-300 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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

              <div className="hidden sm:flex items-center gap-1.5 text-zinc-400 font-mono tracking-wider font-semibold bg-zinc-950/45 border border-zinc-800/40 px-2 py-0.5 rounded select-none">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{currentTime || '14:37:33'} (UTC)</span>
              </div>
            </div>
          </header>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-[9999] md:hidden">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
              <div className="absolute right-0 top-0 h-full w-72 bg-zinc-950/95 border-l border-zinc-800/60 shadow-2xl flex flex-col">
                <div className="flex items-center justify-between px-4 h-10 border-b border-zinc-800/40">
                  <span className="text-xs font-mono font-bold text-white tracking-tight">MENU</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-8 h-8 rounded text-zinc-400 hover:text-white cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                  <button
                    onClick={() => { setCommandPaletteOpen(true); setMobileMenuOpen(false); triggerSound(800, 0.03); }}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-all cursor-pointer text-sm"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search <kbd className="text-[10px] font-mono text-zinc-600 bg-zinc-900 border border-zinc-800 rounded px-1 ml-1">Cmd+K</kbd></span>
                  </button>
                  <button
                    onClick={() => { runTourCycle(); setMobileMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-purple-400 hover:text-purple-300 hover:bg-zinc-900/60 transition-all cursor-pointer text-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>AI Site Tour</span>
                  </button>
                  <button
                    onClick={() => { openWindow('brief'); setMobileMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-all cursor-pointer text-sm"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Mission Brief</span>
                  </button>
                  <div className="pt-4 border-t border-zinc-800/40">
                    <p className="text-[10px] text-zinc-500 font-medium mb-2 px-3">MOOD THEME</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {['dark', 'cyberpunk', 'ai', 'terminal', 'light'].map((t) => (
                        <button
                          key={t}
                          onClick={() => { setTheme(t as any); triggerSound(750, 0.03); }}
                          className={`text-[11px] px-2 py-1.5 rounded capitalize transition-all cursor-pointer ${theme === t ? 'bg-[#181926] text-white font-bold border border-zinc-700/60' : 'text-zinc-500 hover:text-zinc-300 bg-zinc-900/40'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-zinc-800/40">
                    <div className="flex items-center gap-2 px-3 text-zinc-400 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      <span>{currentTime || '14:37:33'} (UTC)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                  {ico.id === 'twin' ? (
                    <FarhanAIIcon className="w-6 h-6" isTerminal={theme === 'terminal'} />
                  ) : (
                    <ActiveIcon className="w-6 h-6" />
                  )}
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
                transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
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
              onAnimationEnd={() => handleAnimationEnd(winId)}
               className={`flex flex-col rounded-xl overflow-hidden shadow-2xl ${draggedWindow === winId ? '' : 'transition-all duration-150'} transform ${styleSet.glass} ${isFocused ? 'ring-2 ring-sky-500/35 scale-[1.002]' : 'opacity-90'} ${windowReady[winId] ? '' : 'animate-window-open'}`}
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
              <div 
                className="flex-1 overflow-y-auto p-4 md:p-5 text-xs font-sans scrollbar-thin scrollbar-thumb-zinc-800"
                onScroll={(e) => {
                  if (winId === 'profTimeline') {
                    const target = e.currentTarget;
                    const progress = target.scrollTop / (target.scrollHeight - target.clientHeight || 1);
                    if (osTimelineProgressLineRef.current) {
                      osTimelineProgressLineRef.current.style.transform = `scaleY(${progress})`;
                    }
                  }
                }}
              >
                
                {/* A. DIGITAL TWIN AI ASSISTANT PANEL */}
                {winId === 'twin' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading twin engine...</div>}>
                    <TwinWindow
                      twinMessages={twinMessages}
                      twinLoading={twinLoading}
                      twinInput={twinInput}
                      setTwinInput={setTwinInput}
                      handleSendTwinMessage={handleSendTwinMessage}
                      playingMessageIndex={playingMessageIndex}
                      speakText={speakText}
                      stopSpeaking={stopSpeaking}
                      styleSet={styleSet}
                    />
                  </Suspense>
                )}


                {/* B. PROJECT GALAXY COMMAND PANEL */}
                {winId === 'projects' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading project galaxy...</div>}>
                    <ProjectsWindow
                      styleSet={styleSet}
                      selectedProject={selectedProject}
                      setSelectedProject={setSelectedProject}
                      triggerSound={triggerSound}
                      openWindow={openWindow}
                    />
                  </Suspense>
                )}


                {/* C. LINGUISTIC RESEARCH LAB PANEL */}
                {winId === 'research' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading research lab...</div>}>
                    <ResearchWindow
                      styleSet={styleSet}
                      selectedPaper={selectedPaper}
                      setSelectedPaper={setSelectedPaper}
                      triggerSound={triggerSound}
                    />
                  </Suspense>
                )}


                {/* D. GITHUB INTELLIGENCE MONITOR PANEL */}
                {winId === 'github' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading telemetry stream...</div>}>
                    <GithubWindow styleSet={styleSet} triggerSound={triggerSound} />
                  </Suspense>
                )}


                {/* E. WRITING UNIVERSE / BLOG PANEL WITH AUDIO TTS NARRATOR */}
                {winId === 'writing' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading narrative chronicles...</div>}>
                    <WritingWindow
                      articles={articles}
                      selectedArticle={selectedArticle}
                      setSelectedArticle={setSelectedArticle}
                      styleSet={styleSet}
                      triggerSound={triggerSound}
                      playingMessageIndex={playingMessageIndex}
                      speakText={speakText}
                      stopSpeaking={stopSpeaking}
                    />
                  </Suspense>
                )}


                {/* F. DIGITAL GARDEN KNOWLEDGE GRAPH PANEL */}
                {winId === 'garden' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading garden...</div>}>
                    <GardenWindow
                      styleSet={styleSet}
                      hoveredGardenNode={hoveredGardenNode}
                      setHoveredGardenNode={setHoveredGardenNode}
                      triggerSound={triggerSound}
                    />
                  </Suspense>
                )}


                {/* G. AI TAILORED RESUME GENERATOR */}
                {winId === 'resume' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading resume...</div>}>
                    <ResumeWindow
                      styleSet={styleSet}
                      resumeAudience={resumeAudience}
                      setResumeAudience={setResumeAudience}
                      triggerSound={triggerSound}
                    />
                  </Suspense>
                )}


                {/* H. INTERACTIVE TIMELINE / EXPERIENCE BLOCK */}
                {winId === 'timeline' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading chronology...</div>}>
                    <TimelineWindow
                      styleSet={styleSet}
                      selectedTimeline={selectedTimeline}
                      setSelectedTimeline={setSelectedTimeline}
                      triggerSound={triggerSound}
                    />
                  </Suspense>
                )}

                {/* I. PROFESSIONAL TIMELINE / CHRONOLOGY BLOCK */}
                {winId === 'profTimeline' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading career chronology...</div>}>
                    <ProfTimelineWindow osTimelineProgressLineRef={osTimelineProgressLineRef} />
                  </Suspense>
                )}


                {/* I. TECH OBSERVATORY / SKILLS OBSERVER */}
                {/* I. SKILLS MATRIX / OBSERVATORY PANEL */}
                {winId === 'skills' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading skill matrices...</div>}>
                    <SkillsWindow
                      filteredSkills={filteredSkills}
                      skillFilter={skillFilter}
                      setSkillFilter={setSkillFilter}
                      triggerSound={triggerSound}
                    />
                  </Suspense>
                )}


                {/* J. COLLABORATION HUB / STRATEGIC BRIEF PREVIEW */}
                {/* J. COLLABORATION HUB / STRATEGIC BRIEF PREVIEW */}
                {winId === 'brief' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading mission brief...</div>}>
                    <BriefWindow
                      briefForm={briefForm}
                      setBriefForm={setBriefForm}
                      briefLoading={briefLoading}
                      briefSummary={briefSummary}
                      briefDispatchLoading={briefDispatchLoading}
                      handleSendBrief={handleSendBrief}
                      handleDispatchBrief={handleDispatchBrief}
                    />
                  </Suspense>
                )}


                {/* L. IDEATION PAD / DRAWING WHITEBOARD */}
                {winId === 'whiteboard' && (
                  <Suspense fallback={<div className="flex items-center justify-center h-full text-zinc-500 text-xs">Loading Ideation Pad...</div>}>
                    <Whiteboard theme={theme} triggerSound={triggerSound} />
                  </Suspense>
                )}

                {/* K. SYSTEM BUILD MONITOR / RELEASE LOGS */}
                {winId === 'builds' && (
                  <Suspense fallback={<div className="text-[10px] text-zinc-500 animate-pulse">Loading build diagnostics...</div>}>
                    <BuildsWindow />
                  </Suspense>
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
    <Suspense fallback={null}>
    <AssistantLauncher
      theme={theme}
      triggerSound={triggerSound}
      placement={viewMode === 'landing' ? 'landing-left' : 'global-bottom-left'}
    />
    </Suspense>
  </div>
  );
}
