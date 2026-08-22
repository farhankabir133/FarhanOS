import React, { useState, useEffect, useRef, lazy, Suspense, useMemo, useCallback } from 'react';
import { 
  Terminal, Cpu, Layers, GitBranch, BookOpen, Network, FileText, 
  Calendar, Award, Activity, Search, Briefcase, Volume2, VolumeX, 
  Maximize2, Minimize2, X, Send, Sparkles, Code, Workflow, User, 
  Folder, Map, Settings, Play, Pause, HelpCircle, Check, Copy, 
  Download, ExternalLink, Rocket, Compass, PhoneCall, RefreshCw,
  CheckSquare, FileSpreadsheet, Palette
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import { Project, Paper, TimelineEvent, Article, BuildLog, SkillNode, GardenNode } from './types';
import LandingPage from './components/LandingPage';
const Whiteboard = lazy(() => import('./components/Whiteboard'));
import TaskbarClock from './components/TaskbarClock';
import GitHubWindow from './components/windows/GitHubWindow';
import SkillsWindow from './components/windows/SkillsWindow';
import BuildsWindow from './components/windows/BuildsWindow';
import TimelineWindow from './components/windows/TimelineWindow';
import ProfTimelineWindow from './components/windows/ProfTimelineWindow';
import ResearchWindow from './components/windows/ResearchWindow';
import DecryptText from './components/DecryptText';
import { speakTextClient, getAskTwinFallback, generateClientBriefSummary } from './utils/aiFallback';
import { getApiBaseUrl } from './utils/apiConfig';


export default function App() {
  // Navigation View Modes
  const [viewMode, setViewMode] = useState<'landing' | 'os'>('landing');
  const [isWarping, setIsWarping] = useState(false);

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

  // Deep links: #os boots straight into the OS; hash changes drive the view.
  useEffect(() => {
    const applyHash = () => {
      setViewMode(window.location.hash === '#os' ? 'os' : 'landing');
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  // Keep the URL in sync when the view changes programmatically.
  useEffect(() => {
    if (viewMode === 'os' && window.location.hash !== '#os') {
      history.replaceState(null, '', '#os');
    } else if (viewMode === 'landing' && window.location.hash === '#os') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [viewMode]);

  // Landing Page Interactive States
  const [landingQuery, setLandingQuery] = useState('');
  const [landingReply, setLandingReply] = useState('');
  const [landingChatLoading, setLandingChatLoading] = useState(false);

  // OS System States
  const [theme, setTheme] = useState<'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light'>('dark');
  
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

  const osTimelineProgressLineRef = useRef<HTMLDivElement | null>(null);

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
    setOpenWindows(prev => {
      if (prev.includes(winId)) return prev;
      return [...prev, winId];
    });
    setFocusedWindow(winId);
    triggerSound(900, 0.05);
  }, []);

  const handleOpenArticleDirectly = useCallback((article: Article) => {
    setSelectedArticle(article);
    handleOpenWindowDirectly('writing');
  }, [handleOpenWindowDirectly]);

  // UI Interactive States
  const [selectedProject, setSelectedProject] = useState<Project>(portfolioData.projects[0]);
  const [selectedPaper, setSelectedPaper] = useState<Paper>(portfolioData.papers[0]);
  const handleSelectPaper = useCallback((paper: Paper) => {
    setSelectedPaper(paper);
  }, []);
  const [articles, setArticles] = useState<Article[]>(portfolioData.articles);
  const [selectedArticle, setSelectedArticle] = useState<Article>(portfolioData.articles[0]);
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineEvent>(portfolioData.timeline[0]);
  const handleSelectTimeline = useCallback((event: TimelineEvent) => {
    setSelectedTimeline(event);
  }, []);

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
  const handleSkillFilterChange = useCallback((filter: string) => {
    setSkillFilter(filter as 'all' | 'AI/ML' | 'Frontend' | 'Backend' | 'Research' | 'Systems');
  }, []);
  const [resumeAudience, setResumeAudience] = useState<'recruiter' | 'investor' | 'founder' | 'researcher'>('recruiter');

  // Command Palette & Search States
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [paletteHighlight, setPaletteHighlight] = useState(0);

  // Ask Twin AI State
  const [twinInput, setTwinInput] = useState('');
  const [twinMessages, setTwinMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string; audio?: string }>>([
    { role: 'assistant', content: "Systems fully operational. I am Farhan's certified neural clone. Feel free to enquire about my NLP predictive pipelines, clinical depression research, full-stack architectures, or project command maps." }
  ]);
  const [twinLoading, setTwinLoading] = useState(false);
  const [twinSessionId, setTwinSessionId] = useState<string | null>(null);
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
  }, []);

  // Drag Window logic handlers
  const draggedWindowRef = useRef<string | null>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const dragRafIdRef = useRef<number | null>(null);
  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (windowId: string, e: React.MouseEvent) => {
    if (windowPositions[windowId]?.isMaximized) return;
    setFocusedWindow(windowId);
    
    const startX = windowPositions[windowId]?.x || 0;
    const startY = windowPositions[windowId]?.y || 0;
    
    draggedWindowRef.current = windowId;
    dragOffsetRef.current = {
      x: e.clientX - startX,
      y: e.clientY - startY
    };
    targetPosRef.current = { x: startX, y: startY };
    currentPosRef.current = { x: startX, y: startY };
    
    const winEl = document.getElementById(`window-${windowId}`);
    if (winEl) {
      winEl.style.transition = 'none';
      winEl.style.willChange = 'transform';
      winEl.style.transform = 'translateZ(0)';
    }
    
    setDraggedWindow(windowId);
    triggerSound(500, 0.01);

    if (dragRafIdRef.current) cancelAnimationFrame(dragRafIdRef.current);
    
    const animateDrag = () => {
      const activeWindow = draggedWindowRef.current;
      if (!activeWindow) return;
      
      const easeFactor = 0.16;
      const dx = targetPosRef.current.x - currentPosRef.current.x;
      const dy = targetPosRef.current.y - currentPosRef.current.y;
      
      currentPosRef.current.x += dx * easeFactor;
      currentPosRef.current.y += dy * easeFactor;
      
      const vx = dx * easeFactor;
      const maxTilt = 4.0;
      const tiltAngle = Math.min(Math.max(-vx * 0.14, -maxTilt), maxTilt);
      
      const winEl = document.getElementById(`window-${activeWindow}`);
      if (winEl) {
        winEl.style.transform = `translate3d(${currentPosRef.current.x}px, ${currentPosRef.current.y}px, 0) rotateZ(${tiltAngle}deg) scale(1.025)`;
        winEl.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.65)';
        winEl.style.zIndex = '100';
      }
      
      dragRafIdRef.current = requestAnimationFrame(animateDrag);
    };
    
    dragRafIdRef.current = requestAnimationFrame(animateDrag);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const activeWindow = draggedWindowRef.current;
    if (activeWindow) {
      const nx = Math.max(0, e.clientX - dragOffsetRef.current.x);
      const ny = Math.max(0, e.clientY - dragOffsetRef.current.y);
      targetPosRef.current = { x: nx, y: ny };
    }
  };

  const handleMouseUp = () => {
    const activeWindow = draggedWindowRef.current;
    if (activeWindow) {
      if (dragRafIdRef.current) cancelAnimationFrame(dragRafIdRef.current);
      dragRafIdRef.current = null;
      
      const finalX = currentPosRef.current.x;
      const finalY = currentPosRef.current.y;
      
      const winEl = document.getElementById(`window-${activeWindow}`);
      if (winEl) {
        winEl.style.transition = '';
        winEl.style.transform = `translate3d(${finalX}px, ${finalY}px, 0)`;
        winEl.style.boxShadow = '';
        winEl.style.zIndex = '';
        winEl.style.willChange = '';
      }
      
      setWindowPositions(prev => ({
        ...prev,
        [activeWindow]: { ...prev[activeWindow], x: finalX, y: finalY }
      }));
      
      draggedWindowRef.current = null;
      setDraggedWindow(null);
    }
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
  }, [draggedWindow]);

  // Opening & Focusing a window
  const openWindow = useCallback((windowId: string) => {
    triggerSound(700, 0.05);
    setOpenWindows(prev => {
      if (prev.includes(windowId)) return prev;
      return [...prev, windowId];
    });
    setMinimizedWindows(prev => prev.filter(w => w !== windowId));
    setFocusedWindow(windowId);
  }, []);

  const closeWindow = useCallback((windowId: string) => {
    triggerSound(400, 0.06);
    setOpenWindows(prev => prev.filter(w => w !== windowId));
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

  // TTS Speech Player (Web Speech API — narration is handled fully client-side)
  const speakText = useCallback(async (text: string, index: number | null = null, _mode: 'tour' | 'narrate' = 'narrate') => {
    try {
      if (currentTTSAudio) {
        currentTTSAudio.stop();
        setCurrentTTSAudio(null);
      }
      setPlayingMessageIndex(index);
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
  }, [currentTTSAudio]);

  const stopSpeaking = useCallback(() => {
    if (currentTTSAudio) {
      currentTTSAudio.stop();
      setCurrentTTSAudio(null);
    }
    setPlayingMessageIndex(null);
  }, [currentTTSAudio]);

  const streamTwinReply = useCallback(async (
    message: string,
    history: Array<{ role: string; content: string }>,
    sessionId: string | null,
    onDelta: (partial: string) => void,
    onSessionId?: (id: string) => void
  ): Promise<string> => {
    const res = await fetch(`${getApiBaseUrl()}/api/ask-twin/stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history, ...(sessionId ? { sessionId } : {}) })
    });
    if (!res.ok || !res.body) throw new Error(`Stream unavailable (${res.status})`);

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let full = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split('\n');
      buffer = parts.pop() || '';
      for (const line of parts) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;
        const payload = trimmed.slice(5).trim();
        if (!payload || payload === '[DONE]') continue;
        try {
          const evt = JSON.parse(payload) as { delta?: string; error?: string; done?: boolean; sessionId?: string };
          if (evt.error) throw new Error(evt.error);
          if (evt.sessionId && onSessionId) onSessionId(evt.sessionId);
          if (evt.delta) {
            full += evt.delta;
            onDelta(full);
          }
        } catch (parseErr) {
          if (parseErr instanceof SyntaxError) continue;
          throw parseErr;
        }
      }
    }
    return full;
  }, []);

  const handleSendTwinMessage = useCallback(async () => {
    if (!twinInput.trim() || twinLoading) return;
    const userMsg = twinInput.trim();
    setTwinInput('');
    setTwinMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setTwinLoading(true);
    triggerSound(1100, 0.03);

    const historyPayload = twinMessages.slice(-12).map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.content
    }));
    const assistantIndex = twinMessages.length + 1;

    const finishWith = (reply: string) => {
      setTwinMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setTwinLoading(false);
      speakText(reply, assistantIndex);
    };

    // Stream first; progressive assistant bubble updates token-by-token.
    let streamed = false;
    try {
      streamed = true;
      setTwinMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      const full = await streamTwinReply(userMsg, historyPayload, twinSessionId, (partial) => {
        setTwinMessages(prev => {
          const next = [...prev];
          next[next.length - 1] = { role: 'assistant', content: partial };
          return next;
        });
      }, setTwinSessionId);
      if (!full.trim()) throw new Error('Empty stream response.');
      speakText(full, assistantIndex);
      setTwinLoading(false);
      return;
    } catch (streamErr) {
      console.warn('Streaming failed, falling back:', streamErr);
      if (streamed) {
        // remove the empty streaming placeholder before retry paths
        setTwinMessages(prev => prev.slice(0, -1));
      }
    }

    try {
      const res = await fetch(`${getApiBaseUrl()}/api/ask-twin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history: historyPayload, ...(twinSessionId ? { sessionId: twinSessionId } : {}) })
      });
      const data = await res.json();

      if (data.sessionId) setTwinSessionId(data.sessionId);
      if (data.reply) {
        finishWith(data.reply);
        return;
      }
      throw new Error(data.error || 'General twin system fault.');
    } catch (err: any) {
      console.warn('Backend twin service failed, using local fallback:', err);
      finishWith(getAskTwinFallback(userMsg, historyPayload));
    }
  }, [twinInput, twinLoading, twinMessages, twinSessionId, speakText, streamTwinReply]);

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

  // Palette keyboard navigation: ↑/↓ to move, Enter to execute.
  const paletteCount = searchQuery.trim().length === 0 ? 2 : systemSearchResults.length;

  useEffect(() => {
    setPaletteHighlight(0);
  }, [searchQuery, commandPaletteOpen]);

  useEffect(() => {
    if (!commandPaletteOpen) return;
    const onPaletteKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setPaletteHighlight(h => {
          const next = paletteCount > 0 ? (h + 1) % paletteCount : h;
          document.getElementById(`palette-item-${next}`)?.scrollIntoView({ block: 'nearest' });
          return next;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setPaletteHighlight(h => {
          const next = paletteCount > 0 ? (h - 1 + paletteCount) % paletteCount : h;
          document.getElementById(`palette-item-${next}`)?.scrollIntoView({ block: 'nearest' });
          return next;
        });
      } else if (e.key === 'Enter') {
        if (paletteCount === 0 || e.target instanceof HTMLInputElement === false) return;
        e.preventDefault();
        if (searchQuery.trim().length === 0) {
          if (paletteHighlight === 0) runTourCycle();
          else openWindow('brief');
          setCommandPaletteOpen(false);
        } else {
          systemSearchResults[paletteHighlight]?.action();
        }
      }
    };
    window.addEventListener('keydown', onPaletteKey);
    return () => window.removeEventListener('keydown', onPaletteKey);
  }, [commandPaletteOpen, searchQuery, paletteHighlight, paletteCount, systemSearchResults, runTourCycle, openWindow]);

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

            <TaskbarClock />
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
              <button
                key={ico.id}
                onClick={() => openWindow(ico.id)}
                aria-label={`Open ${ico.label}`}
                style={{ animationDelay: `${idx * 45}ms` }}
                className={`flex flex-col items-center justify-center p-2.5 rounded-xl border border-transparent hover:border-zinc-800/40 hover:bg-zinc-950/25 hover:backdrop-blur-md hover:shadow-[0_4px_20px_rgba(99,102,241,0.08)] cursor-pointer transition-all duration-300 active:scale-95 group text-center relative animate-fade-in opacity-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 ${isOpen ? 'bg-zinc-950/15' : ''}`}
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
              </button>
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
                    aria-label={`Minimize ${desktopIco ? desktopIco.label : 'window'}`}
                  >
                    <Minimize2 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => toggleMaximize(winId)}
                    className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10"
                    title="Toggle Maximize"
                    aria-label={`Maximize or restore ${desktopIco ? desktopIco.label : 'window'}`}
                  >
                    <Maximize2 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => closeWindow(winId)}
                    className="p-1 text-rose-400 hover:text-rose-500 rounded hover:bg-rose-500/10"
                    title="Close Window"
                    aria-label={`Close ${desktopIco ? desktopIco.label : 'window'}`}
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
                  <ResearchWindow
                    selectedPaper={selectedPaper}
                    onSelectPaper={handleSelectPaper}
                    panelHeader={styleSet.panelHeader}
                  />
                )}


                {/* D. GITHUB INTELLIGENCE MONITOR PANEL */}
                {winId === 'github' && (
                  <GitHubWindow panelHeader={styleSet.panelHeader} />
                )}


                {/* E. WRITING UNIVERSE / BLOG PANEL WITH AUDIO TTS NARRATOR */}
                {winId === 'writing' && (
                  <div className="flex flex-col md:flex-row h-full gap-4">
                    
                    {/* LHS Index Switcher */}
                    <div className="w-full md:w-56 border-r border-[#2d2f3d] pr-4 flex flex-col gap-2 select-none">
                      <span className={styleSet.panelHeader}>NARRATIVE CHRONICLES</span>
                      <div className="space-y-1">
                        {articles.map((a) => (
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

                      <div className="border-b border-zinc-850 pb-2 flex items-start justify-between">
                        <div>
                          <span className="text-[9.5px] bg-amber-500/20 text-amber-300 border border-amber-500/35 px-1.5 py-0.5 rounded uppercase font-mono">{selectedArticle.category} COLUMN</span>
                          <h3 className="text-xs font-black text-white tracking-snug mt-1.5 leading-relaxed select-text">{selectedArticle.title}</h3>
                          <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider block mt-1">Written on {selectedArticle.date} · {selectedArticle.readTime}</span>
                        </div>
                        {selectedArticle.link && (
                          <a 
                            href={selectedArticle.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => triggerSound(900, 0.02)}
                            className="text-[10px] text-amber-400 hover:underline flex items-center gap-1 font-mono uppercase tracking-wider ml-2"
                          >
                            <span>Read on Medium ↗</span>
                          </a>
                        )}
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
                       <a
                          href="/resume/Full-Stack-Agentic-AI/updated/Resume.pdf"
                         download
                         onClick={() => triggerSound(1100, 0.05)}
                         className="bg-pink-500/10 text-pink-300 border border-pink-500/30 hover:text-white px-2.5 py-1 rounded text-[10px] flex items-center gap-1 cursor-pointer font-bold mt-2 sm:mt-0"
                       >
                         <Download className="w-3.5 h-3.5" />
                         <span>Download Resume PDF</span>
                       </a>
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
                  <TimelineWindow
                    selected={selectedTimeline}
                    onSelect={handleSelectTimeline}
                    panelHeader={styleSet.panelHeader}
                  />
                )}

                {winId === 'profTimeline' && (
                  <ProfTimelineWindow progressLineRef={osTimelineProgressLineRef} />
                )}


                {/* I. TECH OBSERVATORY / SKILLS OBSERVER */}
                {winId === 'skills' && (
                  <SkillsWindow
                    skills={filteredSkills}
                    filter={skillFilter}
                    onFilterChange={handleSkillFilterChange}
                  />
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div>
                            <label className="text-[10px] text-zinc-400 block mb-1 uppercase font-mono">TRANSMISSION EMAIL:</label>
                            <input 
                              type="email"
                              value={briefForm.email}
                              onChange={(e) => setBriefForm({ ...briefForm, email: e.target.value })}
                              placeholder="e.g. name@domain.com"
                              className="w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-700 font-mono"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-zinc-400 block mb-1 uppercase font-mono">OPERATIONAL DIRECTIVES:</label>
                            <input 
                              type="text"
                              value={briefForm.comments}
                              onChange={(e) => setBriefForm({ ...briefForm, comments: e.target.value })}
                              placeholder="e.g. Custom requirements, NDA, etc."
                              className="w-full bg-black/60 border border-zinc-800 rounded px-2.5 py-1.5 text-slate-100 text-[10.5px] outline-hidden focus:border-rose-500/50 placeholder-zinc-700 font-mono"
                            />
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
                              Formulate objectives on LHS & execute evaluation to render Groq predictive architecture recommendations...
                            </div>
                          )}
                        </div>

                        {briefSummary && (
                          <div className="border-t border-zinc-900 pt-2 text-[10px] flex items-center justify-between mt-4">
                            <span className="text-zinc-500 flex items-center gap-1 font-mono">
                              <Check className="w-3 h-3 text-emerald-400" /> API SECURE Rails
                            </span>
                            <button 
                               onClick={handleDispatchBrief}
                               disabled={briefDispatchLoading || !briefForm.email.trim()}
                               className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-850 disabled:text-zinc-500 disabled:border-zinc-800 text-white font-bold p-1 px-3 border border-emerald-400 disabled:border-transparent rounded text-[9.5px] cursor-pointer flex items-center gap-1.5"
                             >
                               {briefDispatchLoading ? (
                                 <>
                                   <RefreshCw className="w-3 h-3 animate-spin" />
                                   <span>Transmitting...</span>
                                 </>
                               ) : (
                                 <span>Dispatch Brief</span>
                               )}
                             </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}


                {/* L. IDEATION PAD / DRAWING WHITEBOARD */}
                {winId === 'whiteboard' && (
                  <Suspense fallback={<div className="flex items-center justify-center h-full text-zinc-500 text-xs">Loading Ideation Pad...</div>}>
                    <Whiteboard theme={theme} triggerSound={triggerSound} />
                  </Suspense>
                )}

                {/* K. SYSTEM BUILD MONITOR / RELEASE LOGS */}
                {winId === 'builds' && <BuildsWindow />}

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
                    id="palette-item-0"
                    onClick={() => { runTourCycle(); setCommandPaletteOpen(false); }}
                    onMouseEnter={() => setPaletteHighlight(0)}
                    className={`w-full text-left p-2 rounded-lg text-emerald-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px] ${paletteHighlight === 0 ? 'bg-zinc-900' : 'hover:bg-zinc-900'}`}
                  >
                    🚀 Trigger system AI Guided Tour with synthesized Voice narrations
                  </button>
                  <button
                    id="palette-item-1"
                    onClick={() => { openWindow('brief'); setCommandPaletteOpen(false); }}
                    onMouseEnter={() => setPaletteHighlight(1)}
                    className={`w-full text-left p-2 rounded-lg text-indigo-300 font-bold flex items-center gap-2 cursor-pointer text-[10.5px] ${paletteHighlight === 1 ? 'bg-zinc-900' : 'hover:bg-zinc-900'}`}
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
                        id={`palette-item-${sIdx}`}
                        onClick={res.action}
                        onMouseEnter={() => setPaletteHighlight(sIdx)}
                        className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-colors border cursor-pointer text-[11px] ${sIdx === paletteHighlight ? 'bg-zinc-900 border-zinc-800' : 'border-transparent hover:bg-zinc-900 hover:border-zinc-800'}`}
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
              <span>↑↓ NAVIGATE · ENTER SELECT · ESC EXIT</span>
            </div>
          </div>
        </div>
       )}
        </>
      )}
    </div>
  );
}
