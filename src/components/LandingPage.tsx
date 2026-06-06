import React, { useState, useEffect, useRef } from 'react';
import { 
  Rocket, Compass, PhoneCall, Download, GitBranch, Sparkles, BookOpen, 
  Cpu, Activity, Terminal, ArrowUp, Mail, MapPin, Phone, Github, Linkedin, 
  ExternalLink, Award, Calendar, ChevronRight, ChevronLeft, Star, Quote, 
  ArrowRight, Check, Send, Sparkle, RefreshCw, Instagram, User
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import DecryptText from './DecryptText';
import ThreeWormhole from './ThreeWormhole';
import avatarImg from '../../assets/avatar.png';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0a3.26 3.26 0 01-3.26 3.27 3.26 3.26 0 01-3.26-3.27 3.26 3.26 0 013.26-3.27 3.26 3.26 0 013.26 3.27zm3.04 0a1.07 1.07 0 01-1.07 1.06 1.07 1.07 0 01-1.07-1.06 1.07 1.07 0 011.07-1.06 1.07 1.07 0 011.07 1.06z" />
  </svg>
);

interface LandingPageProps {
  isWarping: boolean;
  theme: 'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light';
  soundOn: boolean;
  triggerSound: (freq?: number, dur?: number) => void;
  onLaunchOS: () => void;
  onOpenWindowDirectly: (winId: string) => void;
}

export default function LandingPage({
  isWarping,
  theme,
  soundOn,
  triggerSound,
  onLaunchOS,
  onOpenWindowDirectly
}: LandingPageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState<'All' | 'AI/ML' | 'Frontend' | 'Backend' | 'Database' | 'DevOps'>('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Scroll Detection for Back-to-Top Button
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setShowBackToTop(containerRef.current.scrollTop > 500);
      }
    };
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      triggerSound(1000, 0.05);
    }
  };

  // Auto-play Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Theme Config mapper
  const getThemeStyles = () => {
    switch (theme) {
      case 'cyberpunk':
        return {
          textPrimary: 'text-[#00ffcc]',
          textSecondary: 'text-pink-400',
          borderAccent: 'border-pink-500/20 hover:border-pink-500/50',
          btnPrimary: 'bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] border border-pink-400/50',
          btnSecondary: 'border-pink-500/30 text-pink-300 hover:bg-pink-550/10 bg-black/60',
          statCardGlow: 'hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]',
          skillBar: 'from-pink-500 to-[#00ffcc]',
          activeTabBtn: 'bg-pink-600 text-white border-pink-500',
          tabBtn: 'text-pink-400 border-pink-500/20 hover:border-pink-500/40 bg-zinc-950/40',
          badgeStyle: 'bg-pink-500/10 border border-pink-500/20 text-pink-300',
          gradientBg: 'from-pink-500/5 via-purple-500/2 to-transparent',
        };
      case 'ai':
        return {
          textPrimary: 'text-purple-300',
          textSecondary: 'text-cyan-400',
          borderAccent: 'border-purple-500/20 hover:border-cyan-400/40',
          btnPrimary: 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-purple-400/40',
          btnSecondary: 'border-purple-500/30 text-cyan-200 hover:bg-purple-950/40 bg-black/60',
          statCardGlow: 'hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
          skillBar: 'from-purple-500 to-cyan-400',
          activeTabBtn: 'bg-purple-600 text-white border-purple-500',
          tabBtn: 'text-purple-300 border-purple-500/20 hover:border-purple-500/40 bg-zinc-950/40',
          badgeStyle: 'bg-purple-500/10 border border-purple-500/20 text-purple-300',
          gradientBg: 'from-purple-500/5 via-indigo-500/2 to-transparent',
        };
      case 'terminal':
        return {
          textPrimary: 'text-[#33ff33]',
          textSecondary: 'text-[#16a34a]',
          borderAccent: 'border-[#33ff33]/20 hover:border-[#33ff33]/50',
          btnPrimary: 'bg-[#33ff33] text-black hover:bg-[#33ff33]/85 shadow-[0_0_15px_rgba(51,255,51,0.3)] border border-[#33ff33]/50',
          btnSecondary: 'border-[#33ff33]/30 text-[#33ff33] hover:bg-[#33ff33]/10 bg-black/60',
          statCardGlow: 'hover:border-[#33ff33]/50 hover:shadow-[0_0_25px_rgba(51,255,51,0.2)]',
          skillBar: 'from-[#16a34a] to-[#33ff33]',
          activeTabBtn: 'bg-zinc-900 text-[#33ff33] border-[#33ff33]',
          tabBtn: 'text-[#33ff33]/80 border-[#33ff33]/20 hover:border-[#33ff33]/40 bg-black/40',
          badgeStyle: 'bg-emerald-950/20 border border-[#33ff33]/20 text-[#33ff33]',
          gradientBg: 'from-[#33ff33]/3 to-transparent',
        };
      case 'light':
        return {
          textPrimary: 'text-indigo-600',
          textSecondary: 'text-sky-600',
          borderAccent: 'border-slate-300 hover:border-indigo-400',
          btnPrimary: 'bg-slate-900 hover:bg-slate-800 text-white shadow-md',
          btnSecondary: 'border-slate-300 text-slate-700 hover:bg-slate-100 bg-white',
          statCardGlow: 'hover:border-indigo-400 hover:shadow-lg',
          skillBar: 'from-indigo-500 to-sky-500',
          activeTabBtn: 'bg-indigo-650 text-white border-indigo-650',
          tabBtn: 'text-slate-600 border-slate-200 hover:border-slate-350 bg-slate-50',
          badgeStyle: 'bg-indigo-50 border border-indigo-100 text-indigo-600',
          gradientBg: 'from-indigo-500/3 via-purple-500/1 to-transparent',
        };
      default: // dark mode
        return {
          textPrimary: 'text-sky-400',
          textSecondary: 'text-indigo-400',
          borderAccent: 'border-zinc-800/80 hover:border-[#00ffcc]/30',
          btnPrimary: 'bg-indigo-650 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-950/50 border border-indigo-400/40',
          btnSecondary: 'border-zinc-800 text-zinc-300 hover:bg-zinc-900/60 bg-black/60',
          statCardGlow: 'hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.08)]',
          skillBar: 'from-indigo-500 to-sky-400',
          activeTabBtn: 'bg-indigo-650 text-white border-indigo-500',
          tabBtn: 'text-zinc-400 border-zinc-800 hover:border-zinc-700 bg-zinc-950/40',
          badgeStyle: 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-300',
          gradientBg: 'from-indigo-500/5 via-purple-500/2 to-transparent',
        };
    }
  };

  const styleSet = getThemeStyles();

  // Testimonials database
  const testimonials = [
    {
      text: "Farhan's expertise in fine-tuning BERT and RoBERTa models for clinical emotional text classification was pivotal to our diagnostics program. His depth of knowledge in linguistic anomalies is world-class.",
      author: "Dr. Sarah Jenkins",
      role: "Lead Clinical NLP Researcher, Cognitive Diagnostics Lab",
      initials: "SJ"
    },
    {
      text: "The Ink Home's WebGL carousel design and custom caching proxy were executed brilliantly. Farhan consistently delivers high-performance SaaS components while respecting peak engineering aesthetic rules.",
      author: "Marcus Sterling",
      role: "Product Director, Synthetix Solutions",
      initials: "MS"
    },
    {
      text: "An absolute powerhouse developer. Farhan balances deep statistical NLP modeling with pixel-perfect responsive layouts inspired by Linear. TypeRush is a masterclass in Web Audio synchronization.",
      author: "Linus O.",
      role: "Senior Open Source Systems Architect",
      initials: "LO"
    }
  ];

  // Certifications list
  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "deeplearning.ai / Coursera",
      date: "2024",
      skills: ["CNNs", "RNNs/LSTMs", "Transformer Architecture", "Attention Mechanisms"]
    },
    {
      title: "Google Cloud Associate Engineer",
      issuer: "Google Cloud",
      date: "2025",
      skills: ["GCP Compute Engines", "GKE Containers", "IAM Security", "Cloud SQL Monitoring"]
    },
    {
      title: "Natural Language Processing Professional",
      issuer: "Hugging Face / Stanford Online",
      date: "2024",
      skills: ["Tokenization Pipelines", "Model Fine-tuning", "ONNX Optimization", "Quantization"]
    }
  ];

  // Dynamic Skills Filter Grouping
  const filteredSkills = portfolioData.skills.filter(s => {
    if (activeTab === 'All') return true;
    if (activeTab === 'AI/ML' && (s.category === 'AI/ML' || s.category === 'Research & Science')) return true;
    if (activeTab === 'Frontend' && s.category === 'Frontend') return true;
    if (activeTab === 'Backend' && s.category === 'Backend' && s.name !== 'PostgreSQL' && s.name !== 'Redis Caching') return true;
    if (activeTab === 'Database' && (s.name === 'PostgreSQL' || s.name === 'Redis Caching')) return true;
    if (activeTab === 'DevOps' && s.category === 'Systems & Devops') return true;
    return false;
  });

  // Handle Contact Form Submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerSound(950, 0.04);
    
    // Simple Validations
    const errors: Record<string, string> = {};
    if (!formName.trim()) errors.name = 'Name is required';
    if (!formEmail.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formEmail)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formSubject.trim()) errors.subject = 'Subject is required';
    if (!formMessage.trim()) errors.message = 'Message details cannot be empty';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormLoading(true);

    // Simulate API delivery
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      triggerSound(1050, 0.12);
      
      // Clear inputs
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
    }, 1500);
  };

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 z-50 overflow-y-auto flex flex-col w-full scroll-smooth select-text ${theme === 'light' ? 'bg-[#f8fafc]' : 'bg-[#020308]'}`}
    >
      {/* 3D background starfield simulation */}
      <ThreeWormhole isWarping={isWarping} theme={theme} />

      {/* Background glow meshes */}
      <div className={`pointer-events-none fixed inset-0 z-0 bg-gradient-to-br ${styleSet.gradientBg} opacity-80`} />

      {/* HEADER BAR */}
      <header className={`sticky top-0 z-[100] h-16 px-6 md:px-12 flex items-center justify-between border-b ${theme === 'light' ? 'border-slate-200/80 bg-white/70' : 'border-zinc-900/60 bg-black/45'} backdrop-blur-md transition-all`}>
        <div className="flex items-center gap-3">
          <span className={`w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.6)]`} />
          <div className="flex flex-col">
            <span className={`text-xs font-black tracking-widest uppercase font-sans ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>FARHAN KABIR</span>
            <span className="text-[8.5px] font-mono text-zinc-500 uppercase tracking-widest">COGNITIVE SYSTEMS ARCHITECT</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-[10.5px] font-mono tracking-wider font-semibold text-zinc-400">
          <a href="#about" onClick={() => triggerSound(900, 0.02)} className="hover:text-white transition-colors">ABOUT</a>
          <a href="#skills" onClick={() => triggerSound(900, 0.02)} className="hover:text-white transition-colors">STATIONS</a>
          <a href="#timeline" onClick={() => triggerSound(900, 0.02)} className="hover:text-white transition-colors">TIMELINE</a>
          <a href="#projects" onClick={() => triggerSound(900, 0.02)} className="hover:text-white transition-colors">INNOVATIONS</a>
          <a href="#certifications" onClick={() => triggerSound(900, 0.02)} className="hover:text-white transition-colors">CERTIFICATES</a>
          <a href="#contact" onClick={() => triggerSound(900, 0.02)} className="hover:text-white transition-colors">TRANSMIT</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={onLaunchOS}
            disabled={isWarping}
            className={`cursor-pointer text-[10px] font-mono font-extrabold uppercase px-4 py-2 rounded-lg transition-all active:scale-95 duration-150 ${styleSet.btnPrimary}`}
          >
            {isWarping ? "Warp Core Charging..." : "Launch OS"}
          </button>
        </div>
      </header>

      {/* SECTION 1: HERO / INTRODUCTION */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center select-none z-10">
        
        {/* Glowing border portrait frame with stagger effect */}
        <div className="relative mb-8 flex items-center justify-center animate-fade-in">
          <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed border-sky-500/20 animate-spin-slow pointer-events-none" />
          <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-indigo-500/10 animate-spin-reverse pointer-events-none" />
          <div className="absolute -inset-4 bg-indigo-500/5 rounded-full filter blur-2xl animate-pulse pointer-events-none" />

          {/* Portrait Image Container */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-zinc-950/80 border-2 border-indigo-500/35 overflow-hidden group shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#00ffcc]">
            <img 
              src={avatarImg} 
              alt="Farhan Kabir portrait" 
              className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Text Area */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-[9px] font-mono uppercase tracking-widest text-indigo-300">
            <Sparkle className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
            <span>CLINICAL NLP & SAAS PLATFORMS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none uppercase select-text">
            <span className={theme === 'light' ? 'text-slate-800' : 'text-white'}>I am </span>
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${theme === 'light' ? 'from-indigo-650 to-sky-655' : 'from-indigo-400 via-sky-400 to-[#00ffcc]'}`}>
              {portfolioData.name}
            </span>
          </h1>

          <h2 className="text-base sm:text-xl font-bold font-mono tracking-wider text-zinc-400 select-text">
            {portfolioData.title}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed select-text font-normal">
            {portfolioData.tagline} Fusing low-latency model evaluation pipelines with Linear-grade web experiences.
          </p>
        </div>

        {/* Interactive CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 w-full max-w-md">
          <button 
            onClick={onLaunchOS}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 ${styleSet.btnPrimary}`}
          >
            Activate Cosmic OS
          </button>
          
          <button 
            onClick={() => onOpenWindowDirectly('resume')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 flex items-center justify-center gap-2 border ${styleSet.btnSecondary}`}
          >
            <Download className="w-4 h-4" />
            <span>Get Resume (CV)</span>
          </button>
        </div>

        {/* Secondary controls and Socials */}
        <div className="flex items-center justify-center gap-3 mt-8 text-[9px] font-mono">
          <button 
            onClick={() => onOpenWindowDirectly('brief')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-rose-500/10 hover:border-rose-500/30 text-rose-300 hover:text-rose-200 transition-all cursor-pointer shadow-xs active:scale-95"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>MISSION BRIEF (CONTACT)</span>
          </button>

          <a 
            href="https://github.com/farhankabir133" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => triggerSound(900, 0.02)}
            className="p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          <a 
            href="https://www.linkedin.com/in/farhankabir133/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => triggerSound(900, 0.02)}
            className="p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          <a 
            href="https://medium.com/@farhankabir133" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => triggerSound(900, 0.02)}
            className="p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Medium"
          >
            <MediumIcon className="w-3.5 h-3.5" />
          </a>

          <a 
            href="https://x.com/fkh_236" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => triggerSound(900, 0.02)}
            className="p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="X (Twitter)"
          >
            <XIcon className="w-3.5 h-3.5" />
          </a>

          <a 
            href="https://www.instagram.com/_farhan_kabir/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => triggerSound(900, 0.02)}
            className="p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>

          <a 
            href="https://gravatar.com/fk133" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => triggerSound(900, 0.02)}
            className="p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer"
            title="Gravatar"
          >
            <User className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Float design indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse">
          <span className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase">SCROLL FOR DIAGNOSTICS</span>
          <div className="w-px h-6 bg-zinc-800" />
        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section id="about" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <div className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono">
          <span className="w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>01 // BIOGRAPHY MODULE</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">KERNEL SPECS STABLE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Biography Text */}
          <div className="lg:col-span-7 space-y-6 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed">
            <div>
              <span className={`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${styleSet.textPrimary}`}>System Bio:</span>
              <p className="select-text">{portfolioData.about}</p>
            </div>
            <div>
              <span className={`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${styleSet.textPrimary}`}>Core Mission Directive:</span>
              <p className="select-text italic">"{portfolioData.focus}"</p>
            </div>
            <div>
              <span className={`block font-bold text-[10px] font-mono uppercase tracking-wide mb-1 ${styleSet.textPrimary}`}>Active Research Focus:</span>
              <ul className="list-disc pl-4 space-y-2 mt-1 select-text">
                <li>Evaluating token probability sequences to block prompt injection triggers before inference.</li>
                <li>Fusing Wav2Vec audio metrics with BERT semantic layers to capture speech emotional variance.</li>
                <li>Conducting validation diagnostics for psychiatric speech anomalies.</li>
              </ul>
            </div>
          </div>

          {/* Statistics Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { label: "EXPERIENCE", value: "4+ Years", desc: "AI & Full-Stack Architectures" },
              { label: "NLP PAPERS", value: "4 Pubs", desc: "IEEE Journals & Conference Index" },
              { label: "DEPLOYED SAAS", value: "12+ Apps", desc: "High-performance codebases" },
              { label: "CERTIFICATES", value: "5+ Credentials", desc: "Deep Learning & GCP" }
            ].map((stat, i) => (
              <div 
                key={i}
                onClick={() => triggerSound(900, 0.02)}
                className={`bg-zinc-950/45 border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer backdrop-blur-md ${styleSet.statCardGlow}`}
              >
                <span className="text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</span>
                <div className="mt-3">
                  <span className={`text-xl sm:text-2xl font-black block tracking-tight ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>{stat.value}</span>
                  <span className="text-[9px] text-zinc-550 block mt-1 font-sans font-normal">{stat.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILLS STACK */}
      <section id="skills" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <div className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono">
          <span className="w-2.5 h-2.5 rounded bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>02 // SKILLOBSERVATION OBSERVATION</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">MATRIX FILTERS FULLY LOADED</span>
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9.5px]">
          {(['All', 'AI/ML', 'Frontend', 'Backend', 'Database', 'DevOps'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveTab(cat); triggerSound(800, 0.03); }}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-bold ${
                activeTab === cat ? styleSet.activeTabBtn : styleSet.tabBtn
              }`}
            >
              {cat === 'DevOps' ? 'DEVOPS & CLOUD' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skill card progress indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className={`bg-zinc-950/45 border border-zinc-900/80 p-4.5 rounded-2xl hover:border-zinc-800 transition-all font-mono`}
            >
              <div className="flex justify-between items-center text-[10px] mb-2.5">
                <span className={`font-bold ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>{skill.name}</span>
                <span className="text-zinc-550 font-semibold">{skill.weight * 20}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${styleSet.skillBar} rounded-full`}
                  style={{ width: `${skill.weight * 20}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: EXPERIENCE TIMELINE */}
      <section id="timeline" className="relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <div className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono">
          <span className="w-2.5 h-2.5 rounded bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>03 // EXPERIENCE CHRONOLOGY</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">DATA VALIDATED FOR SECURE HISTORIES</span>
        </div>

        {/* Timeline representation */}
        <div className="relative border-l border-zinc-900/80 ml-3 md:ml-6 space-y-12">
          {portfolioData.timeline.map((item, i) => (
            <div key={i} className="relative pl-8 sm:pl-12 group select-text">
              {/* Glowing timeline node */}
              <div className="absolute left-[-5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:border-[#00ffcc] shadow-[0_0_8px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_8px_rgba(0,255,204,0.8)] transition-all duration-300" />
              
              {/* Year indicator */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-extrabold ${styleSet.badgeStyle}`}>
                  {item.year}
                </span>
                <span className="text-zinc-550 font-mono text-[9.5px]">{item.company}</span>
              </div>

              {/* Title / Role */}
              <h3 className={`text-sm md:text-base font-extrabold tracking-tight ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] sm:text-xs text-zinc-500 font-sans mt-2 max-w-2xl leading-relaxed">
                {item.role} {item.description}
              </p>

              {/* Achievements Checklist */}
              <ul className="mt-3.5 space-y-2 max-w-2xl font-sans text-[11px] text-zinc-400">
                {item.achievements.map((ach, j) => (
                  <li key={j} className="flex items-start gap-2 leading-relaxed">
                    <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${theme === 'light' ? 'text-indigo-600' : 'text-[#00ffcc]'}`} />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1 mt-4">
                {item.technologies.map((tech) => (
                  <span key={tech} className="text-[8.5px] font-mono px-1.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-900/60 text-zinc-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FEATURED INNOVATIONS (PROJECTS) */}
      <section id="projects" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <div className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono">
          <span className="w-2.5 h-2.5 rounded bg-purple-500 shadow-[0_0_8px_#a855f7]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>04 // PORTFOLIO INNOVATIONS</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">SANDBOX RUNTIMES SYNCHRONIZED</span>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-indigo-500/30 hover:shadow-[0_10px_35px_rgba(99,102,241,0.05)] transition-all duration-300 group select-text"
            >
              <div>
                <div className="flex items-center justify-between mb-4 font-mono">
                  <span className={`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${styleSet.badgeStyle}`}>
                    {project.category}
                  </span>
                  <span className="text-[9px] text-zinc-550 font-semibold">{project.timeline}</span>
                </div>

                <h3 className={`text-sm md:text-base font-extrabold group-hover:text-indigo-400 transition-colors leading-tight ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                  {project.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-zinc-400 font-sans mt-3.5 leading-relaxed">
                  {project.description}
                </p>

                {/* Dashboard style metrics */}
                <div className="grid grid-cols-3 gap-2 my-4 bg-black/40 border border-zinc-900/80 p-2.5 rounded-xl text-center font-mono">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-1">
                      <span className={`text-[9.5px] font-bold block ${theme === 'light' ? 'text-indigo-650' : 'text-[#00ffcc]'}`}>{m.value}</span>
                      <span className="text-[7.2px] text-zinc-500 block uppercase tracking-tight mt-0.5 line-clamp-1">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-900/60 select-none">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-900/40 text-zinc-500">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => { onOpenWindowDirectly('projects'); }}
                    className="flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[10px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold active:scale-98"
                  >
                    DEPLOY SIMULATOR SCREEN →
                  </button>
                  
                  <a 
                    href="https://github.com/farhankabir133" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => triggerSound(900, 0.02)}
                    className="p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                    title="View Source on GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CERTIFICATIONS */}
      <section id="certifications" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <div className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono">
          <span className="w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>05 // CREDENTIAL VERIFICATION</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">ALL BADGES CRYPTOGRAPHICALLY SECURED</span>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div 
              key={i}
              className="bg-zinc-950/45 border border-zinc-900 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition-all select-text"
            >
              <div>
                <div className="flex items-center justify-between text-zinc-500 font-mono text-[9px] mb-3">
                  <span>{cert.issuer}</span>
                  <span className="font-bold">{cert.date}</span>
                </div>
                
                <h3 className={`text-xs sm:text-sm font-extrabold leading-snug flex items-start gap-2 ${theme === 'light' ? 'text-slate-850' : 'text-slate-100'}`}>
                  <Award className={`w-4 h-4 mt-0.5 flex-shrink-0 ${theme === 'light' ? 'text-indigo-650' : 'text-amber-400'}`} />
                  <span>{cert.title}</span>
                </h3>
              </div>

              <div className="flex flex-wrap gap-1 mt-5 pt-4 border-t border-zinc-900/50">
                {cert.skills.map((s) => (
                  <span key={s} className="text-[7.8px] font-mono px-1.5 py-0.5 rounded-md bg-black/40 border border-zinc-900 text-zinc-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <div className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono">
          <span className="w-2.5 h-2.5 rounded bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>06 // CLINICAL RECOMMENDATIONS</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">VERIFIABLE REFERRALS ACTIVE</span>
        </div>

        {/* Carousel Container */}
        <div className="bg-[#0b0c14]/55 border border-zinc-900 p-8 sm:p-12 rounded-3xl relative overflow-hidden select-text shadow-xl">
          <Quote className={`absolute top-6 left-6 w-12 h-12 opacity-5 pointer-events-none ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-500'}`} />
          
          <div className="relative min-h-[140px] flex flex-col justify-between">
            <p className={`text-xs sm:text-sm italic leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
              "{testimonials[activeTestimonial].text}"
            </p>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Initials badge */}
                <div className={`w-9 h-9 rounded-full font-mono font-bold text-xs flex items-center justify-center border ${styleSet.badgeStyle}`}>
                  {testimonials[activeTestimonial].initials}
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs font-bold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>{testimonials[activeTestimonial].author}</span>
                  <span className="text-[9px] text-zinc-500 font-mono mt-0.5">{testimonials[activeTestimonial].role}</span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-1.5 select-none">
                <button 
                  onClick={() => {
                    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                    triggerSound(800, 0.02);
                  }}
                  className="p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => {
                    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
                    triggerSound(800, 0.02);
                  }}
                  className="p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT FORM */}
      <section id="contact" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10 select-text">
        
        {/* Section title */}
        <div className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono select-none">
          <span className="w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>07 // SECURE COMMUNICATION CHANNEL</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">SSL LINK ENCRYPTED</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6 font-mono text-[10.5px]">
            <div>
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest block font-bold mb-1.5">TRANSMISSION DIRECTORIES</span>
              <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                Submit project briefs, research queries, or collaborative inquiries. Your transmission will be mapped directly into our live sandbox channels.
              </p>
            </div>

            <div className="space-y-3.5 border-t border-zinc-900/80 pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-indigo-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[7.5px] text-zinc-500 block">ENVELOPE ADDRESS</span>
                  <a href="mailto:farhankabir133@gmail.com" onClick={() => triggerSound(900, 0.02)} className={`text-[11px] font-bold ${theme === 'light' ? 'text-slate-850' : 'text-slate-200'} hover:underline`}>
                    farhankabir133@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[7.5px] text-zinc-500 block">COORDINATE MAPPING</span>
                  <span className={`text-[11px] font-bold ${theme === 'light' ? 'text-slate-800' : 'text-slate-250'}`}>
                    Rajshahi, Bangladesh (UTC+6)
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels link grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-6 border-t border-zinc-900/80 select-none">
              <a 
                href="https://github.com/farhankabir133" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => triggerSound(900, 0.02)}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GITHUB</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/farhankabir133/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => triggerSound(900, 0.02)}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LINKEDIN</span>
              </a>
              <a 
                href="https://medium.com/@farhankabir133" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => triggerSound(900, 0.02)}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold"
              >
                <MediumIcon className="w-4 h-4 text-emerald-400" />
                <span>MEDIUM</span>
              </a>
              <a 
                href="https://x.com/fkh_236" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => triggerSound(900, 0.02)}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold"
              >
                <XIcon className="w-4 h-4 text-white" />
                <span>X / TWITTER</span>
              </a>
              <a 
                href="https://www.instagram.com/_farhan_kabir/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => triggerSound(900, 0.02)}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>INSTAGRAM</span>
              </a>
              <a 
                href="https://gravatar.com/fk133" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => triggerSound(900, 0.02)}
                className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold"
              >
                <User className="w-4 h-4 text-amber-400" />
                <span>GRAVATAR</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#0b0c14]/55 border border-zinc-900/80 p-6 sm:p-8 rounded-3xl relative">
            
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-scale-up">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <Check className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1.5 font-mono">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">TRANSMISSION EN ROUTE</span>
                  <h3 className={`text-base font-extrabold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>Matrix Sync Completed!</h3>
                  <p className="text-[11px] text-zinc-550 max-w-sm mx-auto leading-relaxed font-sans font-normal">
                    Secure handshake verified. Farhan's certified virtual clone is compiling your message parameters now.
                  </p>
                </div>
                <button 
                  onClick={() => { setFormSubmitted(false); triggerSound(800, 0.02); }}
                  className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-400 hover:text-white px-5 py-2 rounded-lg cursor-pointer transition-colors active:scale-95"
                >
                  Establish New Node
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-[10px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-zinc-500 font-semibold block">COGNITIVE NAME</label>
                    <input 
                      type="text" 
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Jenkins S."
                      className={`w-full bg-black/60 border ${formErrors.name ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-900/80 focus:border-indigo-500/60'} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}
                    />
                    {formErrors.name && <span className="text-[9px] text-red-500 font-bold block mt-0.5">{formErrors.name}</span>}
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-zinc-500 font-semibold block">TRANSMISSION EMAIL</label>
                    <input 
                      type="email" 
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. envelope@domain.com"
                      className={`w-full bg-black/60 border ${formErrors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-900/80 focus:border-indigo-500/60'} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}
                    />
                    {formErrors.email && <span className="text-[9px] text-red-500 font-bold block mt-0.5">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-500 font-semibold block">INQUIRY SUBJECT</label>
                  <input 
                    type="text" 
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. Clinical NLP Model Fine-Tuning"
                    className={`w-full bg-black/60 border ${formErrors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-900/80 focus:border-indigo-500/60'} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden`}
                  />
                  {formErrors.subject && <span className="text-[9px] text-red-500 font-bold block mt-0.5">{formErrors.subject}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-500 font-semibold block">TRANSMISSION PAYLOAD (MESSAGE)</label>
                  <textarea 
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Explain Objectives, Budgets, and Timelines..."
                    className={`w-full bg-black/60 border ${formErrors.message ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-900/80 focus:border-indigo-500/60'} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden resize-none`}
                  />
                  {formErrors.message && <span className="text-[9px] text-red-500 font-bold block mt-0.5">{formErrors.message}</span>}
                </div>

                <button 
                  type="submit"
                  disabled={formLoading}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[10.5px] font-bold uppercase transition-all duration-150 active:scale-98 cursor-pointer ${styleSet.btnPrimary}`}
                >
                  {formLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Transmitting packets...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`mt-auto border-t ${theme === 'light' ? 'border-slate-200/80 bg-slate-100/50' : 'border-zinc-900/60 bg-black/45'} backdrop-blur-md py-12 px-6 md:px-12 z-10 select-none`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
            <span className={`text-[10px] font-mono tracking-widest uppercase ${theme === 'light' ? 'text-slate-600' : 'text-zinc-450'}`}>
              © {new Date().getFullYear()} FARHAN KABIR. ALL RIGHTS SECURED.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-[9.5px] font-mono text-zinc-550 font-bold">
            <a href="#about" onClick={() => triggerSound(800, 0.02)} className="hover:text-white transition-colors">ABOUT</a>
            <a href="#skills" onClick={() => triggerSound(800, 0.02)} className="hover:text-white transition-colors">STATIONS</a>
            <a href="#timeline" onClick={() => triggerSound(800, 0.02)} className="hover:text-white transition-colors">TIMELINE</a>
            <a href="#projects" onClick={() => triggerSound(800, 0.02)} className="hover:text-white transition-colors">INNOVATIONS</a>
            <a href="#contact" onClick={() => triggerSound(800, 0.02)} className="hover:text-white transition-colors">TRANSMIT</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/farhankabir133" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => triggerSound(900, 0.02)}
              className="p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/farhankabir133/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => triggerSound(900, 0.02)}
              className="p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://medium.com/@farhankabir133" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => triggerSound(900, 0.02)}
              className="p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors"
              title="Medium"
            >
              <MediumIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://x.com/fkh_236" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => triggerSound(900, 0.02)}
              className="p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors"
              title="X (Twitter)"
            >
              <XIcon className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://www.instagram.com/_farhan_kabir/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => triggerSound(900, 0.02)}
              className="p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://gravatar.com/fk133" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => triggerSound(900, 0.02)}
              className="p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-500 hover:text-white bg-zinc-950/30 transition-colors"
              title="Gravatar"
            >
              <User className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-[120] p-3 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 animate-scale-up cursor-pointer hover:-translate-y-1 ${
            theme === 'light' 
              ? 'bg-white/80 border-slate-300 text-slate-700 hover:bg-slate-50' 
              : 'bg-zinc-950/80 border-zinc-850 text-zinc-400 hover:text-white hover:border-[#00ffcc]/35'
          }`}
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
