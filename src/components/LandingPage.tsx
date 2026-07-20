import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, Compass, PhoneCall, Download, GitBranch, Sparkles, BookOpen, 
  Cpu, Activity, Terminal, ArrowUp, Mail, MapPin, Phone, Github, Linkedin, 
  ExternalLink, Award, Calendar, ChevronRight, ChevronLeft, Star, Quote, 
  ArrowRight, Check, Send, Sparkle, RefreshCw, Instagram, User, Clock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Article } from '../types';
import DecryptText from './DecryptText';
const ThreeWormhole = lazy(() => import('./ThreeWormhole'));
import LoopingTypewriter from './LoopingTypewriter';
import OneTimeTypewriter from './OneTimeTypewriter';
import avatarImg from '../../assets/avatar.png';
import avatar112 from '../../assets/avatar-112.png';
import avatar144 from '../../assets/avatar-144.png';
import avatar224 from '../../assets/avatar-224.png';
import avatar288 from '../../assets/avatar-288.png';
import { getApiBaseUrl } from '../utils/apiConfig';

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

interface TimelineCardProps {
  key?: any;
  item: any;
  idx: number;
  theme: 'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light';
  prefersReducedMotion: boolean;
}

function TimelineCard({ item, idx, theme, prefersReducedMotion }: TimelineCardProps) {
  const isLeft = idx % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex flex-col md:flex-row items-start ${isLeft ? 'md:flex-row-reverse' : ''} relative`}
    >
      {/* Central Node Circle */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }}
        className="absolute left-[21px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20"
      >
        <div className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shadow-lg border-cyan-400/80 scale-100">
          <motion.span 
            animate={prefersReducedMotion ? {} : { rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 scale-100"
          />
        </div>
      </motion.div>

      {/* Spacer to push card to one side */}
      <div className="hidden md:block w-1/2" />

      {/* Card Content Container */}
      <div className="w-full md:w-[46%] pl-12 md:pl-0">
        <motion.div 
          whileHover={{ y: -4, opacity: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`p-6 md:p-8 rounded-2xl border backdrop-blur-md relative group ${theme === 'light' 
            ? 'bg-white/80 border-slate-200 shadow-lg hover:border-indigo-400 hover:shadow-indigo-500/5' 
            : 'bg-zinc-950/45 border-zinc-900 shadow-2xl hover:border-zinc-850 hover:shadow-cyan-500/5'}`}
        >
          {/* Glow Overlay */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
          
          {/* Card Header */}
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1">{item.year}</span>
              <h3 className={`text-base md:text-lg font-sans font-bold leading-tight transition-colors group-hover:text-cyan-300 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>{item.title}</h3>
              <span className="text-[10px] font-mono text-zinc-550 block mt-1">{item.company}</span>
            </div>
            
            {/* Company Badge */}
            <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono border font-medium uppercase ${
              item.badgeColor === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
              item.badgeColor === 'indigo' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' :
              item.badgeColor === 'pink' ? 'bg-pink-500/10 text-pink-400 border-pink-500/30' :
              'bg-amber-500/10 text-amber-400 border-amber-500/30'
            }`}>
              {item.company}
            </span>
          </div>

          {/* Achievements Bullets */}
          <ul className="space-y-3 mb-6 text-zinc-400">
            {item.achievements.map((bullet: string, bIdx: number) => (
              <motion.li 
                key={bIdx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: bIdx * 0.05 }}
                className="flex items-start text-[11px] leading-relaxed font-sans text-zinc-400 select-text"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80 mt-1.5 mr-2.5 shrink-0" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>

          {/* Tech Stack Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/60 select-none"
          >
            {item.technologies.map((t: string, tIdx: number) => (
              <motion.span 
                key={t}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 400, damping: 20, delay: tIdx * 0.05 }}
                className="px-2 py-0.5 rounded-md text-[9px] font-mono bg-zinc-950/80 text-zinc-400 border border-zinc-900"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

interface LandingPageProps {
  isWarping: boolean;
  theme: 'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light';
  soundOn: boolean;
  triggerSound: (freq?: number, dur?: number) => void;
  onLaunchOS: () => void;
  onOpenWindowDirectly: (winId: string) => void;
  articles?: Article[];
  onOpenArticleDirectly?: (article: Article) => void;
}

export default function LandingPage({
  isWarping,
  theme,
  soundOn,
  triggerSound,
  onLaunchOS,
  onOpenWindowDirectly,
  articles = [],
  onOpenArticleDirectly
}: LandingPageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState<'All' | 'AI/ML' | 'Frontend' | 'Backend' | 'Database' | 'DevOps'>('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const timelineRef = useRef<HTMLDivElement | null>(null);
  const progressLineRef = useRef<HTMLDivElement | null>(null);

  // Scroll Detection for Back-to-Top Button & Timeline Line Animation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          setShowBackToTop(scrollTop > 500);

          const timelineElement = timelineRef.current;
          if (timelineElement) {
            const rect = timelineElement.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const elementTop = rect.top;
            const elementHeight = rect.height;

            const triggerStart = viewportHeight * 0.8;
            const triggerEnd = viewportHeight * 0.2;

            const totalDist = elementHeight + triggerStart - triggerEnd;
            const currentScroll = triggerStart - elementTop;

            const progress = Math.min(Math.max(currentScroll / totalDist, 0), 1);
            
            if (progressLineRef.current) {
              progressLineRef.current.style.transform = `scaleY(${progress})`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize on load
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    triggerSound(1000, 0.05);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const targetTop = rect.top + scrollTop - 64; // offset the h-16 (64px) sticky header
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
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

    const apiUrl = getApiBaseUrl();

    // Execute real API delivery to the backend
    fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formName,
        email: formEmail,
        subject: formSubject,
        message: formMessage,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Failed to transmit message.');
        }
        
        // Output Gemini analytical metrics to console for verified diagnostics
        if (data.analysis) {
          console.log('[Transmission Diagnostics Analysed]:', data.analysis);
        }

        setFormLoading(false);
        setFormSubmitted(true);
        triggerSound(1050, 0.12);
        
        // Clear inputs
        setFormName('');
        setFormEmail('');
        setFormSubject('');
        setFormMessage('');
      })
      .catch((err) => {
        console.warn('Real backend message transmission failed, reverting to local fallback:', err);
        // Resilient Fallback to simulated delivery in case backend is offline
        setTimeout(() => {
          setFormLoading(false);
          setFormSubmitted(true);
          triggerSound(1050, 0.12);
          
          setFormName('');
          setFormEmail('');
          setFormSubject('');
          setFormMessage('');
        }, 1200);
      });
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex flex-col w-full select-text bg-transparent"
    >
      {/* 3D background starfield simulation */}
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <ThreeWormhole isWarping={isWarping} theme={theme} />
      </Suspense>

      {/* Background glow meshes */}
      <div className={`pointer-events-none fixed inset-0 z-0 bg-gradient-to-br ${styleSet.gradientBg} opacity-80`} />

      {/* HEADER BAR */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`sticky top-0 z-[100] h-16 px-6 md:px-12 flex items-center justify-between border-b ${theme === 'light' ? 'border-slate-200/80 bg-white/70' : 'border-zinc-900/60 bg-black/45'} backdrop-blur-md transition-all`}
      >
        <div className="flex items-center gap-3">
          <motion.span 
            animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]`}
          />
          <div className="flex flex-col">
            <span className={`text-xs font-black tracking-widest uppercase font-sans ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>FARHAN KABIR</span>
            <span className="text-[8.5px] font-mono text-zinc-550 uppercase tracking-widest">COGNITIVE SYSTEMS ARCHITECT</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-5 text-[10.5px] font-mono tracking-wider font-semibold text-zinc-400">
          {[
            { href: "#about", label: "ABOUT", target: "about" },
            { href: "#skills", label: "STATIONS", target: "skills" },
            { href: "#timeline", label: "CHRONOLOGY", target: "timeline" },
            { href: "#prof-timeline", label: "PROF. TIMELINE", target: "prof-timeline" },
            { href: "#projects", label: "INNOVATIONS", target: "projects" },
            { href: "#certifications", label: "CERTIFICATES", target: "certifications" },
            { href: "#contact", label: "TRANSMIT", target: "contact" }
          ].map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { triggerSound(900, 0.02); handleAnchorClick(e, link.target); }}
              whileHover={{ y: -2 }}
              className="relative hover:text-white transition-colors group"
            >
              {link.label}
              <motion.span 
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 origin-left"
              />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.05, opacity: 0.95 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={onLaunchOS}
            disabled={isWarping}
            className={`cursor-pointer text-[10px] font-mono font-extrabold uppercase px-4 py-2 rounded-lg transition-all active:scale-95 duration-150 ${styleSet.btnPrimary}`}
          >
            {isWarping ? "Warp Core Charging..." : "Launch OS"}
          </motion.button>
        </div>
      </motion.header>

      {/* SECTION 1: HERO / INTRODUCTION */}
      <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-6 md:px-12 py-16 text-center select-none z-10">
        
        {/* Glowing border portrait frame with stagger effect */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative mb-8 flex items-center justify-center"
        >
          <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full border border-dashed border-sky-500/20 animate-spin-slow pointer-events-none" />
          <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-indigo-500/10 animate-spin-reverse pointer-events-none" />
          <div className="absolute -inset-4 bg-indigo-500/5 rounded-full filter blur-2xl animate-pulse pointer-events-none" />

          {/* Portrait Image Container */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-zinc-950/80 border-2 border-indigo-500/35 overflow-hidden group shadow-2xl transition-all duration-300 hover:border-[#00ffcc]"
          >
            <img 
              src={avatarImg}
              srcSet={`${avatar112} 112w, ${avatar144} 144w, ${avatar224} 224w, ${avatar288} 288w, ${avatarImg} 329w`}
              sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, (max-width: 1536px) 224px, 288px"
              alt="Farhan Kabir portrait" 
              className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

{/* Text Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delayChildren: 0.1 }}
          className="max-w-3xl space-y-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-[9px] font-mono uppercase tracking-widest text-indigo-300"
          >
            <Sparkle className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
            <span>CLINICAL NLP & SAAS PLATFORMS</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
            className="relative text-center"
          >
            <motion.div
              aria-hidden="true"
              className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: 10 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <span className="block text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-tight select-text mb-2">
                <motion.span 
                  animate={prefersReducedMotion ? {} : { rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                  style={{ transformOrigin: '70% 70%' }}
                >
                  👋
                </motion.span>
              </span>
              <span className="block text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight select-text">
                <LoopingTypewriter
                  text="Hi, I'm Farhan Kabir!"
                  speed={70}
                  holdTime={2200}
                  className={theme === 'light' ? 'text-slate-800' : 'text-white'}
                />
              </span>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="mt-4 text-base sm:text-lg md:text-xl font-medium font-sans tracking-wide text-zinc-400 select-text"
              >
                <OneTimeTypewriter
                  text="Crafting digital experiences with code and creativity!!"
                  speed={55}
                />
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interactive CTA buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 w-full max-w-md"
        >
          <motion.button 
            whileHover={{ scale: 1.03, opacity: 0.95 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            animate={{ boxShadow: ['0 0 15px rgba(99,102,241,0.2)', '0 0 25px rgba(99,102,241,0.35)', '0 0 15px rgba(99,102,241,0.2)'] }}
            onClick={onLaunchOS}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 ${styleSet.btnPrimary}`}
          >
            Activate Cosmic OS
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.03, opacity: 0.95 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={() => onOpenWindowDirectly('resume')}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-[10.5px] font-mono font-bold tracking-wider uppercase cursor-pointer active:scale-95 duration-100 flex items-center justify-center gap-2 border ${styleSet.btnSecondary}`}
          >
            <Download className="w-4 h-4" />
            <span>Get Resume (CV)</span>
          </motion.button>
        </motion.div>

        {/* Secondary controls and Socials */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20, staggerChildren: 0.1, delayChildren: 0.2 }}
          className="flex items-center justify-center gap-3 mt-8 text-[9px] font-mono"
        >
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={() => onOpenWindowDirectly('brief')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 hover:bg-rose-500/10 hover:border-rose-500/30 text-rose-300 hover:text-rose-200 transition-all cursor-pointer shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>MISSION BRIEF (CONTACT)</span>
          </motion.button>

          {[
            { href: "https://github.com/farhankabir133", Icon: Github, title: "GitHub" },
            { href: "https://www.linkedin.com/in/farhankabir133/", Icon: Linkedin, title: "LinkedIn" },
            { href: "https://medium.com/@farhankabir133", Icon: MediumIcon, title: "Medium" },
            { href: "https://x.com/fkh_236", Icon: XIcon, title: "X (Twitter)" },
            { href: "https://www.instagram.com/_farhan_kabir/", Icon: Instagram, title: "Instagram" },
            { href: "https://gravatar.com/fk133", Icon: User, title: "Gravatar" }
          ].map((social, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20, delay: i * 0.05 }}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerSound(900, 0.02)}
              className="p-2 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/50 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title={social.title}
            >
              <social.Icon className="w-3.5 h-3.5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Float design indicators — fully responsive across all screen sizes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute bottom-5 xs:bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-14 2xl:bottom-16 3xl:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse z-10"
        >
          <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] md:text-[9.5px] lg:text-[10px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[12px] font-mono text-zinc-600 tracking-widest uppercase whitespace-nowrap select-none">
            SCROLL FOR DIAGNOSTICS
          </span>
          <motion.div 
            animate={prefersReducedMotion ? {} : { height: [12, 20, 12] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px xs:h-4 sm:h-5 md:h-6 lg:h-7 xl:h-7 2xl:h-8 3xl:h-9 bg-zinc-800"
          />
        </motion.div>

      </section>

      {/* SECTION 2: ABOUT ME */}
      <section id="about" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono"
        >
          <span className="w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>01 // BIOGRAPHY MODULE</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">KERNEL SPECS STABLE</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Biography Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-7 space-y-6 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed"
          >
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
          </motion.div>

          {/* Statistics Bento Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20, staggerChildren: 0.1, delayChildren: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {[
              { label: "EXPERIENCE", value: "4+ Years", desc: "AI & Full-Stack Architectures" },
               { label: "NLP PAPERS", value: "6 Pubs", desc: "IEEE Journals & Conference Index" },
              { label: "DEPLOYED SAAS", value: "12+ Apps", desc: "High-performance codebases" },
              { label: "CERTIFICATES", value: "5+ Credentials", desc: "Deep Learning & GCP" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, opacity: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => triggerSound(900, 0.02)}
                className={`bg-zinc-950/45 border border-zinc-900 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer backdrop-blur-md ${styleSet.statCardGlow}`}
              >
                <span className="text-[7.5px] font-mono text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</span>
                <div className="mt-3">
                  <span className={`text-xl sm:text-2xl font-black block tracking-tight ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>{stat.value}</span>
                  <span className="text-[9px] text-zinc-550 block mt-1 font-sans font-normal">{stat.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: SKILLS STACK */}
      <section id="skills" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono"
        >
          <span className="w-2.5 h-2.5 rounded bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>02 // SKILLOBSERVATION OBSERVATION</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">MATRIX FILTERS FULLY LOADED</span>
        </motion.div>

        {/* Filter categories tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex flex-wrap items-center gap-1.5 font-mono text-[9.5px]"
        >
          {(['All', 'AI/ML', 'Frontend', 'Backend', 'Database', 'DevOps'] as const).map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={() => { setActiveTab(cat); triggerSound(800, 0.03); }}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-bold ${
                activeTab === cat ? styleSet.activeTabBtn : styleSet.tabBtn
              }`}
            >
              {cat === 'DevOps' ? 'DEVOPS & CLOUD' : cat.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill card progress indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20, staggerChildren: 0.08, delayChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -4, opacity: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-zinc-950/45 border border-zinc-900/80 p-4.5 rounded-2xl hover:border-zinc-800 transition-all font-mono`}
            >
              <div className="flex justify-between items-center text-[10px] mb-2.5">
                <span className={`font-bold ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>{skill.name}</span>
                <span className="text-zinc-550 font-semibold">{skill.weight * 20}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.weight * 20}%` }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className={`h-full bg-gradient-to-r ${styleSet.skillBar} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 4: EXPERIENCE TIMELINE */}
      <section id="timeline" className="relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono"
        >
          <span className="w-2.5 h-2.5 rounded bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>03 // EXPERIENCE CHRONOLOGY</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">DATA VALIDATED FOR SECURE HISTORIES</span>
        </motion.div>

        {/* Timeline representation */}
        <div className="relative border-l border-zinc-900/80 ml-3 md:ml-6 space-y-12">
          {portfolioData.timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.1 }}
                className="relative pl-8 sm:pl-12 group select-text"
              >
                {/* Glowing timeline node */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.2, opacity: 0.95 }}
                  className="absolute left-[-5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-300"
                />
                
                {/* Year indicator */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-wrap items-center gap-2 mb-1"
                >
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-extrabold ${styleSet.badgeStyle}`}
                  >
                    {item.year}
                  </motion.span>
                  <span className="text-zinc-550 font-mono text-[9.5px]">{item.company}</span>
                </motion.div>

                {/* Title / Role */}
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`text-sm md:text-base font-extrabold tracking-tight ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}
                >
                  {item.title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-[11px] sm:text-xs text-zinc-500 font-sans mt-2 max-w-2xl leading-relaxed"
                >
                  {item.role} {item.description}
                </motion.p>

                {/* Achievements Checklist */}
                <motion.ul 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="mt-3.5 space-y-2 max-w-2xl font-sans text-[11px] text-zinc-400"
                >
                  {item.achievements.map((ach, j) => (
                    <motion.li 
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: j * 0.05 }}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${theme === 'light' ? 'text-indigo-600' : 'text-[#00ffcc]'}`} />
                      <span>{ach}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Tech Tags */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-wrap gap-1 mt-4"
                >
                  {item.technologies.map((tech, idx) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 400, damping: 20, delay: idx * 0.05 }}
                      className="text-[8.5px] font-mono px-1.5 py-0.5 rounded-md bg-zinc-950 border border-zinc-900/60 text-zinc-500"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4.5: PROFESSIONAL TIMELINE (SUMIYA STYLE) */}
      <section id="prof-timeline" className="relative py-24 px-6 md:px-12 max-w-6xl w-full mx-auto space-y-12 z-10 scroll-mt-16">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono"
        >
          <span className="w-2.5 h-2.5 rounded bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>03.5 // PROFESSIONAL TIMELINE</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">VERIFIABLE WORK EXPERIENCES</span>
        </motion.div>

        {/* Timeline Structure (Sumiya style) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          ref={timelineRef} 
          className="relative"
        >
          {/* Timeline center line */}
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/80 via-cyan-500/30 to-transparent -translate-x-1/2 pointer-events-none z-0" />
          <motion.div 
            ref={progressLineRef}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-[21px] md:left-1/2 top-0 bottom-24 w-[2px] bg-gradient-to-b from-cyan-400 to-purple-600 -translate-x-1/2 origin-top pointer-events-none z-10"
            style={{ transformOrigin: 'top' }}
          />

          {/* Timeline cards */}
          <div className="space-y-16 relative z-10">
            {portfolioData.professionalTimeline.map((item, i) => (
              <TimelineCard key={i} item={item} idx={i} theme={theme} prefersReducedMotion={prefersReducedMotion} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 5: FEATURED INNOVATIONS (PROJECTS) */}
      <section id="projects" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono"
        >
          <span className="w-2.5 h-2.5 rounded bg-purple-500 shadow-[0_0_8px_#a855f7]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>04 // PORTFOLIO INNOVATIONS</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">SANDBOX RUNTIMES SYNCHRONIZED</span>
        </motion.div>

        {/* Project grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20, staggerChildren: 0.15, delayChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {portfolioData.projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-indigo-500/30 hover:shadow-[0_10px_35px_rgba(99,102,241,0.05)] transition-all duration-300 group select-text"
            >
              <div>
                <div className="flex items-center justify-between mb-4 font-mono">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${styleSet.badgeStyle}`}
                  >
                    {project.category}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-[9px] text-zinc-550 font-semibold"
                  >
                    {project.timeline}
                  </motion.span>
                </div>

                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`text-sm md:text-base font-extrabold group-hover:text-indigo-400 transition-colors leading-tight ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}
                >
                  {project.title}
                </motion.h3>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-[11px] sm:text-xs text-zinc-400 font-sans mt-3.5 leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Dashboard style metrics */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="grid grid-cols-3 gap-2 my-4 bg-black/40 border border-zinc-900/80 p-2.5 rounded-xl text-center font-mono"
                >
                  {project.metrics.map((m, idx) => (
                    <motion.div 
                      key={m.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: idx * 0.1 }}
                      className="p-1"
                    >
                      <span className={`text-[9.5px] font-bold block ${theme === 'light' ? 'text-indigo-650' : 'text-[#00ffcc]'}`}>{m.value}</span>
                      <span className="text-[7.2px] text-zinc-500 block uppercase tracking-tight mt-0.5 line-clamp-1">{m.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-900/60 select-none">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech, idx) => (
                    <motion.span 
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 400, damping: 20, delay: idx * 0.05 }}
                      className="text-[8.5px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-900/40 text-zinc-500"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    onClick={() => { onOpenWindowDirectly('projects'); }}
                    className="flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[10px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold"
                  >
                    DEPLOY SIMULATOR SCREEN →
                  </motion.button>
                  
                  <motion.a 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    href="https://github.com/farhankabir133" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => triggerSound(900, 0.02)}
                    className="p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                    title="View Source on GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

{/* SECTION 4.5: RESEARCH PAPERS */}
      <section id="research" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <div className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono">
          <span className="w-2.5 h-2.5 rounded bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>04.5 // NEURAL RESEARCH INDEX</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">PEER-REVIEWED PUBLICATIONS</span>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "DEEP LEARNING-BASED PREDICTIVE MODELING FOR ENERGY CONSUMPTION IN CLIMATE-RESILIENT URBAN STRUCTURES",
              authors: "Farhan Kabir, Tanzim Ahmed, Muhammad Rahman",
              conference: "ISEE 2026",
              year: 2026,
              publisher: "ISEE",
              abstract: "Tackling climate-resilient energy prediction by fusing CNN-LSTM models with urban heat island features. This paper presents a deep learning-based predictive modeling framework for forecasting energy consumption in climate-resilient urban structures. By integrating Convolutional Neural Networks (CNN) with Long Short-Term Memory (LSTM) architectures and augmenting them with urban heat island geospatial features, the model captures complex spatial-temporal dependencies that traditional approaches miss. The framework is validated against projected climate scenarios, demonstrating robust generalization across extreme weather events and urban morphology variations.",
              link: "#",
              image: "/research-images/energy-consumption-prediction.svg",
              color: "from-amber-600 to-emerald-600",
              badge: "NEWLY ACCEPTED @ ISEE 2026"
            },
            {
              title: "Integrating Computer Vision and Building Information Modeling (BIM) for Real-Time Monitoring of Operational Energy Efficiency",
              authors: "Farhan Kabir, Sadia Zaman, Arman Reza",
              conference: "ISEE 2026",
              year: 2026,
              publisher: "ISEE",
              abstract: "Engineering an end-to-end smart-building workflow utilizing computer vision, digital twins, and model-predictive control. This paper proposes an integrated framework that combines real-time computer vision occupancy detection, Building Information Modeling (BIM) digital twin synchronization, and Model-Predictive Control (MPC) to continuously monitor and optimize operational energy efficiency in commercial buildings. The system fuses visual spatial data with structural BIM repositories to generate actionable energy insights, reducing wasted consumption without compromising occupant comfort.",
              link: "#",
              image: "/research-images/cv-bim-energy-efficiency.svg",
              color: "from-cyan-600 to-blue-600",
              badge: "PUBLISHING SOON @ ISEE 2026"
            },
            {
              title: "AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision",
              authors: "Farhan Kabir, M Arman Reza Shah, Razat Biswas",
              conference: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
              year: 2025,
              publisher: "IEEE",
              abstract: "This paper presents an AI-driven live interview system designed for real-time evaluation of candidates by integrating Natural Language Processing (NLP) and Computer Vision techniques. The system utilizes OpenAI's Whisper model for high-fidelity speech-to-text transcription, ensuring precise capture of verbal responses. Semantic analysis is performed using BERT embeddings to evaluate the contextual relevance, coherence, and intent of candidate answers. Concurrently, a Convolutional Neural Network (CNN) trained on the RAF-DB dataset is employed for real-time facial emotion recognition, identifying emotions such as happiness, sadness, anger, fear, surprise, disgust, and neutrality. A simulated study involving 50 candidates was conducted to assess system performance in terms of response accuracy, processing latency, semantic coherence, and emotion recognition reliability. Experimental results demonstrate that the system achieves an average accuracy of 93.51%, with a mean response latency of 1.5 seconds, and reliably captures emotional engagement. By combining multimodal data including speech, text, and visual cues, the proposed framework offers a comprehensive, objective, and scalable approach to candidate assessment.",
              link: "https://ieeexplore.ieee.org/document/11491403",
              image: "/research-images/interview-system.svg",
              color: "from-indigo-600 to-cyan-600"
            },
            {
              title: "Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques",
              authors: "Farhan Kabir, M. K. Habib Khan, Fazle Rabby",
              conference: "2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)",
              year: 2025,
              publisher: "IEEE",
              abstract: "Emotion detection is the process of identifying and interpreting emotional cues in data to understand a user's mood or sentiment. In textual data, emotion detection has wide-ranging applications, such as analyzing sentiments on social media, evaluating customer feedback, and enhancing user experiences on digital platforms. This paper presents a machine learning-based approach for classifying emotions in text using natural language processing (NLP) techniques. The study utilizes a publicly available dataset from Kaggle, which includes labeled samples representing various emotional expressions. To achieve accurate classification, the methodology begins with text preprocessing, such as removing stopwords, punctuation, and special characters, ensuring cleaner data for analysis. Feature extraction techniques, including CountVectorizer and Term Frequency-Inverse Document Frequency (TF-IDF), are then employed to transform the raw text into meaningful numerical features. These techniques highlight patterns and associations in the text, effectively capturing the nuances of different emotional expressions. Several machine learning models were trained and evaluated using key performance metrics, such as accuracy and precision, to determine the most effective classifier for emotion detection. The results demonstrate the robustness of our approach in recognizing subtle emotional variations, providing reliable insights into textual data.",
              link: "https://ieeexplore.ieee.org/document/11013284",
              image: "/research-images/emotion-detection.svg",
              color: "from-purple-600 to-pink-600"
            },
            {
              title: "Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques",
              authors: "Farhan Kabir, Md. Ali Hossain, A. F. M. Minhazur Rahman, Sadia Zaman Mishu",
              conference: "2023 26th International Conference on Computer and Information Technology (ICCIT)",
              year: 2023,
              publisher: "IEEE",
              abstract: "Depression, a widespread mental health condition with substantial personal and societal impacts, necessitates early detection for effective intervention. The focus of this thesis is crafting a dependable and precise system to identify depression from social media text, employing natural language processing (NLP) and machine learning (ML). Drawing from diverse social media posts, both from individuals with and without depression, the primary aim is to preprocess this textual data effectively. NLP techniques, including tokenization, stemming, N-gram, Countvectorizer analysis, and TF-IDF, convert raw content into meaningful representations capturing linguistic and emotional facets of depression. Utilizing the preprocessed data, machine learning algorithms acquire discriminating patterns through feature extraction. Diverse ML techniques—Stochastic Gradient Descent (SGD), Naive Bayes (NB), Decision Tree (DT), Random Forest (RF), Support Vector Machines (SVM), KNearest Neighbor (KNN), Multi-Layer Perceptron (MLP), etc.—are employed. Trained on annotated data and extracted attributes, these algorithms discern depressive from nondepressive social media posts. Model performance assessment incorporates metrics like accuracy, precision, recall, and F1-score. Results underscore the efficacy of this approach in detecting depression from social media text.",
              link: "https://ieeexplore.ieee.org/document/10441612",
              image: "/research-images/depression-detection.svg",
              color: "from-emerald-600 to-teal-600"
            }
          ].map((paper, idx) => (
            <div 
              key={idx}
              className="bg-[#0b0c14]/55 border border-zinc-900/80 rounded-3xl overflow-hidden hover:border-emerald-500/30 hover:shadow-[0_10px_35px_rgba(16,185,129,0.05)] transition-all duration-300 group select-text"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                {/* Paper Image */}
                <div className="md:col-span-4 relative h-48 md:h-auto">
                  <img 
                    src={paper.image} 
                    alt={paper.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm text-white/90">
                      {paper.year} IEEE
                    </span>
                  </div>
                </div>

                {/* Paper Content */}
                <div className="md:col-span-8 p-6 md:p-8 flex flex-col">
                  {paper.badge && (
                    <div className="mb-3">
                      <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest bg-gradient-to-r from-amber-500/20 to-emerald-500/20 border border-amber-500/40 text-amber-300 px-3 py-1 rounded-full backdrop-blur-sm animate-pulse">
                        {paper.badge}
                      </span>
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${styleSet.badgeStyle}`}>
                        {paper.publisher}
                      </span>
                      <span className="text-[9px] text-zinc-550 font-semibold">{paper.year}</span>
                    </div>
                  </div>

                  <h3 className={`text-sm md:text-base font-extrabold group-hover:text-emerald-400 transition-colors leading-tight mb-2 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                    {paper.title}
                  </h3>

                  <p className="text-[10px] font-mono text-indigo-400 mb-3 select-text">
                    {paper.authors}
                  </p>

                  <p className="text-[10px] text-zinc-500 font-sans mb-4 italic select-text">
                    {paper.conference}
                  </p>

                  <p className="text-[11px] sm:text-xs text-zinc-400 font-sans leading-relaxed line-clamp-4 select-text flex-1">
                    {paper.abstract}
                  </p>

                  <div className="mt-6 pt-4 border-t border-zinc-900/60 select-none">
                    <a 
                      href={paper.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => triggerSound(900, 0.02)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[10px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold active:scale-98"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      VIEW PAPER ON IEEE XPLORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4.5: LATEST STORIES (MEDIUM FEED) */}
      <section id="writings" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono"
        >
          <span className="w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>04.5 // MEDIUM WRITING SYNDICATE</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">DYNAMIC RSS CHANNELS ACTIVE</span>
        </motion.div>

        {/* Dynamic Medium articles display */}
        {articles.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-center py-10 bg-zinc-950/20 border border-zinc-900/80 rounded-3xl p-6 font-mono text-zinc-550 text-xs"
          >
            ⏳ Synchronizing narrative telemetry vectors...
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20, staggerChildren: 0.15, delayChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.slice(0, 6).map((article, idx) => {
              const isFirst = idx === 0;
              return (
                <motion.div
                  key={article.id}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`bg-[#0b0c14]/55 border border-zinc-900/80 p-6 rounded-3xl flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_10px_35px_rgba(245,158,11,0.04)] transition-all duration-300 group select-text ${
                    isFirst ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header info */}
                    <div className="flex items-center justify-between font-mono text-[9px]">
                      <motion.span 
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className={`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${
                          theme === 'light' ? 'bg-amber-100 text-amber-800 border-amber-250' : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                        }`}
                      >
                        {article.category}
                      </motion.span>
                      <span className="text-zinc-550 font-semibold">{article.date}</span>
                    </div>

                    {/* Optional Thumbnail Image */}
                    {article.imageUrl ? (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        whileHover={{ scale: 1.02 }}
                        className="w-full h-36 rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-950 relative"
                      >
<motion.img 
                          src={article.imageUrl} 
                          alt={article.title} 
                          loading="lazy"
                          decoding="async"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c14]/90 via-transparent to-transparent" />
                      </motion.div>
                    ) : (
                      <div className="w-full h-1 bg-gradient-to-r from-amber-500/10 to-transparent rounded" />
                    )}

                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`text-xs sm:text-sm font-extrabold group-hover:text-amber-400 transition-colors leading-snug select-text ${
                        theme === 'light' ? 'text-slate-800' : 'text-white'
                      }`}
                    >
                      {article.title}
                    </motion.h3>

                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-[11px] leading-relaxed text-zinc-400 font-sans select-text"
                    >
                      {article.excerpt}
                    </motion.p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-zinc-900/60 mt-4 select-none">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      whileHover={{ opacity: 1 }}
                      className="flex items-center gap-2 text-[8.5px] font-mono text-zinc-500"
                    >
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>{article.readTime}</span>
                    </motion.div>

                    <div className="flex items-center gap-2">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        onClick={() => {
                          if (onOpenArticleDirectly) {
                            onOpenArticleDirectly(article);
                          } else {
                            onOpenWindowDirectly('writing');
                          }
                        }}
                        className="flex-1 text-center py-2.5 rounded-xl border border-zinc-800/80 bg-zinc-950 text-[9.5px] font-mono text-zinc-350 hover:text-white hover:border-zinc-750 transition-all cursor-pointer font-bold"
                      >
                        WARP & READ IN OS →
                      </motion.button>
                      
                      {article.link && (
                        <motion.a 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          href={article.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={() => triggerSound(900, 0.02)}
                          className="p-2.5 rounded-xl border border-zinc-850 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/60 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                          title="Read on Medium"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </section>

      {/* SECTION 6: CERTIFICATIONS */}
      <section id="certifications" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono"
        >
          <span className="w-2.5 h-2.5 rounded bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>05 // CREDENTIAL VERIFICATION</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">ALL BADGES CRYPTOGRAPHICALLY SECURED</span>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20, staggerChildren: 0.15, delayChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, opacity: 0.95, borderColor: theme === 'light' ? 'rgba(99,102,241,0.4)' : 'rgba(245,158,11,0.4)' }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-zinc-950/45 border border-zinc-900 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-800 transition-all select-text"
            >
              <div>
                <div className="flex items-center justify-between text-zinc-500 font-mono text-[9px] mb-3">
                  <span>{cert.issuer}</span>
                  <span className="font-bold">{cert.date}</span>
                </div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`text-xs sm:text-sm font-extrabold leading-snug flex items-start gap-2 ${theme === 'light' ? 'text-slate-850' : 'text-slate-100'}`}
                >
                  <Award className={`w-4 h-4 mt-0.5 flex-shrink-0 ${theme === 'light' ? 'text-indigo-650' : 'text-amber-400'}`} />
                  <span>{cert.title}</span>
                </motion.h3>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-wrap gap-1 mt-5 pt-4 border-t border-zinc-900/50"
              >
                {cert.skills.map((s, idx) => (
                  <motion.span 
                    key={s}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: idx * 0.05 }}
                    className="text-[7.8px] font-mono px-1.5 py-0.5 rounded-md bg-black/40 border border-zinc-900 text-zinc-500"
                  >
                    {s}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 7: TESTIMONIALS */}
      <section className="relative px-6 md:px-12 py-24 max-w-4xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono"
        >
          <span className="w-2.5 h-2.5 rounded bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>06 // CLINICAL RECOMMENDATIONS</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">VERIFIABLE REFERRALS ACTIVE</span>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.02, opacity: 0.95 }}
          className="bg-[#0b0c14]/55 border border-zinc-900 p-8 sm:p-12 rounded-3xl relative overflow-hidden select-text shadow-xl"
        >
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute top-6 left-6 w-12 h-12 opacity-5 pointer-events-none ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-500'}`}
          >
            <Quote className="w-12 h-12" />
          </motion.div>
          
          <motion.div 
            key={activeTestimonial}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative min-h-[140px] flex flex-col justify-between"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={`text-xs sm:text-sm italic leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}
            >
              "{testimonials[activeTestimonial].text}"
            </motion.p>

            <div className="mt-8 flex items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3"
              >
                {/* Initials badge */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`w-9 h-9 rounded-full font-mono font-bold text-xs flex items-center justify-center border ${styleSet.badgeStyle}`}
                >
                  {testimonials[activeTestimonial].initials}
                </motion.div>
                <div className="flex flex-col">
                  <span className={`text-xs font-bold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>{testimonials[activeTestimonial].author}</span>
                  <span className="text-[9px] text-zinc-500 font-mono mt-0.5">{testimonials[activeTestimonial].role}</span>
                </div>
              </motion.div>

              {/* Slider Controls */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-1.5 select-none"
              >
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  onClick={() => {
                    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                    triggerSound(800, 0.02);
                  }}
                  className="p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  onClick={() => {
                    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
                    triggerSound(800, 0.02);
                  }}
                  className="p-1.5 rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950/65 hover:bg-zinc-900/60 text-zinc-400 hover:text-white cursor-pointer transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Indicator dots */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center justify-center gap-2 mt-8 select-none"
          >
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.3 }}
                animate={{ 
                  scale: activeTestimonial === idx ? [1, 1.2, 1] : 1,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 20,
                  repeat: activeTestimonial === idx ? Infinity : 0,
                  repeatType: "loop",
                  repeatDelay: 1
                }}
                onClick={() => {
                  setActiveTestimonial(idx);
                  triggerSound(800, 0.02);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeTestimonial === idx ? 'bg-indigo-400' : 'bg-zinc-700'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 8: CONTACT FORM */}
      <section id="contact" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10 select-text">
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono select-none"
        >
          <span className="w-2.5 h-2.5 rounded bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>07 // SECURE COMMUNICATION CHANNEL</h2>
          <span className="text-[9px] text-zinc-500 ml-auto uppercase hidden sm:inline">SSL LINK ENCRYPTED</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-5 space-y-6 font-mono text-[10.5px]"
          >
            <div>
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest block font-bold mb-1.5">TRANSMISSION DIRECTORIES</span>
              <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                Submit project briefs, research queries, or collaborative inquiries. Your transmission will be mapped directly into our live sandbox channels.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 300, damping: 20, staggerChildren: 0.1, delayChildren: 0.2 }}
              className="space-y-3.5 border-t border-zinc-900/80 pt-6"
            >
              <motion.div className="flex items-center gap-3">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-indigo-400"
                >
                  <Mail className="w-4 h-4" />
                </motion.div>
                <div>
                  <span className="text-[7.5px] text-zinc-500 block">ENVELOPE ADDRESS</span>
                  <a href="mailto:farhankabir133@gmail.com" onClick={() => triggerSound(900, 0.02)} className={`text-[11px] font-bold ${theme === 'light' ? 'text-slate-850' : 'text-slate-200'} hover:underline`}>
                    farhankabir133@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center gap-3">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-sky-400"
                >
                  <MapPin className="w-4 h-4" />
                </motion.div>
                <div>
                  <span className="text-[7.5px] text-zinc-500 block">COORDINATE MAPPING</span>
                  <span className={`text-[11px] font-bold ${theme === 'light' ? 'text-slate-800' : 'text-slate-250'}`}>
                    Rajshahi, Bangladesh (UTC+6)
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Social channels link grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 300, damping: 20, staggerChildren: 0.05, delayChildren: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-6 border-t border-zinc-900/80 select-none"
            >
              {[
                { href: "https://github.com/farhankabir133", Icon: Github, color: "text-indigo-400", label: "GITHUB" },
                { href: "https://www.linkedin.com/in/farhankabir133/", Icon: Linkedin, color: "text-sky-400", label: "LINKEDIN" },
                { href: "https://medium.com/@farhankabir133", Icon: MediumIcon, color: "text-emerald-400", label: "MEDIUM" },
                { href: "https://x.com/fkh_236", Icon: XIcon, color: "text-white", label: "X / TWITTER" },
                { href: "https://www.instagram.com/_farhan_kabir/", Icon: Instagram, color: "text-pink-400", label: "INSTAGRAM" },
                { href: "https://gravatar.com/fk133", Icon: User, color: "text-amber-400", label: "GRAVATAR" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => triggerSound(900, 0.02)}
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/40 hover:bg-zinc-900/40 text-zinc-400 hover:text-white transition-colors cursor-pointer text-[9px] font-bold"
                >
                  <social.Icon className={`w-4 h-4 ${social.color}`} />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="lg:col-span-7 bg-[#0b0c14]/55 border border-zinc-900/80 p-6 sm:p-8 rounded-3xl relative"
          >
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: [0.5, 1.2, 0.9, 1.05, 1] }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                className="text-center py-10 space-y-4"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
                  className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                >
                  <Check className="w-6 h-6 animate-pulse" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
                  className="space-y-1.5 font-mono"
                >
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">TRANSMISSION EN ROUTE</span>
                  <motion.h3 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`text-base font-extrabold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}
                  >
                    Matrix Sync Completed!
                  </motion.h3>
                  <p className="text-[11px] text-zinc-550 max-w-sm mx-auto leading-relaxed font-sans font-normal">
                    Secure handshake verified. Farhan's certified virtual clone is compiling your message parameters now.
                  </p>
                </motion.div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  onClick={() => { setFormSubmitted(false); triggerSound(800, 0.02); }}
                  className="bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-400 hover:text-white px-5 py-2 rounded-lg cursor-pointer transition-colors"
                >
                  Establish New Node
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onSubmit={handleContactSubmit} 
                className="space-y-4 font-mono text-[10px]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-zinc-500 font-semibold block">COGNITIVE NAME</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      animate={formErrors.name ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                      type="text" 
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Jenkins S."
                      className={`w-full bg-black/60 border ${formErrors.name ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-900/80 focus:border-indigo-500/60'} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden transition-all`}
                    />
                    {formErrors.name && <span className="text-[9px] text-red-500 font-bold block mt-0.5">{formErrors.name}</span>}
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-zinc-500 font-semibold block">TRANSMISSION EMAIL</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      animate={formErrors.email ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                      type="email" 
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. envelope@domain.com"
                      className={`w-full bg-black/60 border ${formErrors.email ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-900/80 focus:border-indigo-500/60'} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden transition-all`}
                    />
                    {formErrors.email && <span className="text-[9px] text-red-500 font-bold block mt-0.5">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-500 font-semibold block">INQUIRY SUBJECT</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      animate={formErrors.subject ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                      type="text" 
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="e.g. Clinical NLP Model Fine-Tuning"
                      className={`w-full bg-black/60 border ${formErrors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-900/80 focus:border-indigo-500/60'} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden transition-all`}
                    />
                  {formErrors.subject && <span className="text-[9px] text-red-500 font-bold block mt-0.5">{formErrors.subject}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-500 font-semibold block">TRANSMISSION PAYLOAD (MESSAGE)</label>
                    <motion.textarea 
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      animate={formErrors.message ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Explain Objectives, Budgets, and Timelines..."
                      className={`w-full bg-black/60 border ${formErrors.message ? 'border-red-500/50 focus:border-red-500' : 'border-zinc-900/80 focus:border-indigo-500/60'} rounded-lg p-2.5 text-white placeholder-zinc-700 focus:outline-hidden resize-none transition-all`}
                    />
                  {formErrors.message && <span className="text-[9px] text-red-500 font-bold block mt-0.5">{formErrors.message}</span>}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, opacity: 0.95 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{ boxShadow: ['0 0 15px rgba(99,102,241,0.2)', '0 0 25px rgba(99,102,241,0.35)', '0 0 15px rgba(99,102,241,0.2)'] }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  type="submit"
                  disabled={formLoading}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[10.5px] font-bold uppercase transition-all duration-150 cursor-pointer ${styleSet.btnPrimary}`}
                >
                  {formLoading ? (
                    <>
                      <motion.div
                        animate={prefersReducedMotion ? {} : { rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <RefreshCw className="w-4 h-4" />
                      </motion.div>
                      <span>Transmitting packets...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`mt-auto border-t ${theme === 'light' ? 'border-slate-200/80 bg-slate-100/50' : 'border-zinc-900/60 bg-black/45'} backdrop-blur-md py-12 px-6 md:px-12 z-10 select-none`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
            <span className={`text-[10px] font-mono tracking-widest uppercase ${theme === 'light' ? 'text-slate-600' : 'text-zinc-400'}`}>
              © {new Date().getFullYear()} FARHAN KABIR. ALL RIGHTS SECURED.
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-wrap items-center justify-center gap-5 text-[9.5px] font-mono text-zinc-400 font-bold"
          >
            {[
              { href: "#about", label: "ABOUT", target: "about" },
              { href: "#skills", label: "STATIONS", target: "skills" },
              { href: "#timeline", label: "TIMELINE", target: "timeline" },
              { href: "#projects", label: "INNOVATIONS", target: "projects" },
              { href: "#research", label: "RESEARCH", target: "research" },
              { href: "#certifications", label: "CERTIFICATES", target: "certifications" },
              { href: "#contact", label: "TRANSMIT", target: "contact" }
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { triggerSound(800, 0.02); handleAnchorClick(e, link.target!); }}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative hover:text-white transition-colors group"
              >
                {link.label}
                <motion.span 
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 origin-left"
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-3"
          >
            {[
              { href: "https://github.com/farhankabir133", Icon: Github, title: "GitHub" },
              { href: "https://www.linkedin.com/in/farhankabir133/", Icon: Linkedin, title: "LinkedIn" },
              { href: "https://medium.com/@farhankabir133", Icon: MediumIcon, title: "Medium" },
              { href: "https://x.com/fkh_236", Icon: XIcon, title: "X (Twitter)" },
              { href: "https://www.instagram.com/_farhan_kabir/", Icon: Instagram, title: "Instagram" },
              { href: "https://gravatar.com/fk133", Icon: User, title: "Gravatar" }
            ].map((social) => (
              <motion.a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerSound(900, 0.02)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-white bg-zinc-950/30 transition-colors"
                title={social.title}
              >
                <social.Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-[120] p-3 rounded-full border shadow-xl backdrop-blur-md cursor-pointer ${
            theme === 'light' 
              ? 'bg-white/80 border-slate-300 text-slate-700 hover:bg-slate-50' 
              : 'bg-zinc-950/80 border-zinc-850 text-zinc-400 hover:text-white hover:border-[#00ffcc]/35'
          }`}
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
}
