import React from 'react';
import { motion } from 'motion/react';
import {
  Check, ChevronLeft, ChevronRight, Clock, Award, Quote,
  Github, Linkedin, ExternalLink, Mail, MapPin, User,
  Instagram, RefreshCw, Send, ArrowUp,
  ChevronDown, Layers, Globe, Rocket, Star, GitFork
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLandingPage } from './LandingPageContext';
import { track } from '../utils/analytics';

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
  item: any;
  idx: number;
  theme: import('../types').Theme;
  prefersReducedMotion: boolean;
}

function TimelineCard({ item, idx, theme, prefersReducedMotion }: TimelineCardProps) {
  const isLeft = idx % 2 === 0;

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
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
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: Math.min(idx * 0.06, 0.3) }}
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

// Unique visual identity per project (cycled across the list) so every
// card showcases its name with a distinct accent + animated motif.
const INNOVATION_ACCENTS = [
  { from: '#6366f1', to: '#22d3ee', glow: 'rgba(99,102,241,0.35)', soft: '#c7d2fe' },
  { from: '#f472b6', to: '#a855f7', glow: 'rgba(244,114,182,0.30)', soft: '#fbcfe8' },
  { from: '#34d399', to: '#22d3ee', glow: 'rgba(52,211,153,0.30)', soft: '#bbf7d0' },
  { from: '#fbbf24', to: '#f97316', glow: 'rgba(251,191,36,0.30)', soft: '#fde68a' },
  { from: '#60a5fa', to: '#818cf8', glow: 'rgba(96,165,250,0.30)', soft: '#bfdbfe' },
  { from: '#f87171', to: '#fb7185', glow: 'rgba(248,113,113,0.30)', soft: '#fecaca' },
  { from: '#2dd4bf', to: '#3b82f6', glow: 'rgba(45,212,191,0.30)', soft: '#99f6e4' },
  { from: '#c084fc', to: '#6366f1', glow: 'rgba(192,132,252,0.30)', soft: '#e9d5ff' }
];

const MOTIF_TYPES = ['orbit', 'grid', 'wave', 'pulse', 'scan', 'prism'] as const;
type MotifType = (typeof MOTIF_TYPES)[number];

function InnovationMotif({ type, color, animate }: { type: MotifType; color: string; animate: boolean }) {
  const common = { className: 'absolute right-3 top-3 w-16 h-16 opacity-40 pointer-events-none', fill: 'none', stroke: color };
  if (type === 'orbit') {
    return (
      <svg viewBox="0 0 64 64" {...common}>
        <circle cx="32" cy="32" r="10" strokeOpacity="0.5" />
        <motion.g animate={animate ? { rotate: 360 } : {}} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }} style={{ originX: '32px', originY: '32px' }}>
          <ellipse cx="32" cy="32" rx="26" ry="12" />
          <circle cx="58" cy="32" r="3" fill={color} stroke="none" />
        </motion.g>
      </svg>
    );
  }
  if (type === 'grid') {
    return (
      <svg viewBox="0 0 64 64" {...common}>
        {[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => (
          <rect key={`${r}-${c}`} x={10 + c * 12} y={10 + r * 12} width="8" height="8" rx="2" strokeOpacity="0.5" />
        )))}
      </svg>
    );
  }
  if (type === 'wave') {
    return (
      <svg viewBox="0 0 64 64" {...common}>
        <motion.path animate={animate ? { d: ['M4 40 Q 16 20 32 40 T 60 40', 'M4 40 Q 16 60 32 40 T 60 40', 'M4 40 Q 16 20 32 40 T 60 40'] } : {}} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} strokeWidth="2.5" />
      </svg>
    );
  }
  if (type === 'pulse') {
    return (
      <svg viewBox="0 0 64 64" {...common}>
        <motion.path animate={animate ? { d: ['M4 32 H18 L24 14 L32 50 L40 24 L46 32 H60', 'M4 32 H16 L22 44 L30 20 L38 40 L44 32 H60', 'M4 32 H18 L24 14 L32 50 L40 24 L46 32 H60'] } : {}} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} strokeWidth="2.5" />
      </svg>
    );
  }
  if (type === 'scan') {
    return (
      <svg viewBox="0 0 64 64" {...common}>
        <rect x="10" y="10" width="44" height="44" rx="6" strokeOpacity="0.5" />
        <motion.line animate={animate ? { y1: [12, 52, 12], y2: [12, 52, 12] } : {}} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} x1="10" x2="54" strokeWidth="2.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" {...common}>
      <motion.path animate={animate ? { rotate: 360 } : {}} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} style={{ originX: '32px', originY: '32px' }} d="M32 6 L58 32 L32 58 L6 32 Z" strokeOpacity="0.5" />
      <circle cx="32" cy="32" r="6" fill={color} stroke="none" />
    </svg>
  );
}

interface RepoStats {
  stars: number;
  forks: number;
  language: string | null;
}

interface InnovationCardProps {
  project: import('../types').Project;
  index: number;
  accent: (typeof INNOVATION_ACCENTS)[number];
  motif: MotifType;
  theme: import('../types').Theme;
  styleSet: Record<string, string>;
  prefersReducedMotion: boolean;
  onOpenWindowDirectly: (windowId: string) => void;
  repo?: RepoStats;
}

function InnovationCard({ project, index, accent, motif, theme, styleSet, prefersReducedMotion, onOpenWindowDirectly, repo }: InnovationCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  const links = portfolioData.projectLinks?.[project.id] ?? {};
  const monogram = project.title.replace(/[^A-Za-z0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase() || project.title.slice(0, 2).toUpperCase();
  const isLight = theme === 'light';

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22, delay: (index % 2) * 0.08 }}
      whileHover={prefersReducedMotion ? {} : { y: -10 }}
      className={`group relative overflow-hidden rounded-3xl border p-6 flex flex-col justify-between transition-colors duration-300 ${
        isLight ? 'bg-white/85 border-slate-200 hover:border-indigo-300 shadow-lg' : 'bg-[#0b0c14]/65 border-zinc-900/80 hover:border-zinc-700'
      }`}
    >
      {/* Accent glow + motif */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${accent.glow}, transparent 70%)` }}
      />
      <InnovationMotif type={motif} color={accent.from} animate={!prefersReducedMotion} />

      {/* Header */}
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-base font-black text-white shadow-lg"
            style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
          >
            {monogram}
          </motion.div>
          <div className="flex items-center gap-2">
            <span className={`text-[8.5px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase ${styleSet.badgeStyle}`}>
              {project.category}
            </span>
            <span className="text-[9px] text-zinc-500 font-mono font-semibold whitespace-nowrap">{project.timeline}</span>
          </div>
        </div>

        {/* Unique title treatment */}
        <h3
          className="text-lg md:text-xl font-extrabold leading-tight tracking-tight"
          style={{
            background: `linear-gradient(120deg, ${accent.from}, ${accent.to})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-[11px] sm:text-xs text-zinc-400 font-sans leading-relaxed select-text">
          {project.description}
        </p>
      </div>

      {/* Metrics dashboard */}
      <div className="my-4 grid grid-cols-3 gap-2 rounded-xl border border-zinc-900/80 bg-black/40 p-2.5 text-center font-mono">
        {project.metrics.map((m, idx) => (
          <div key={m.label} className="p-1">
            <span className="block text-[9.5px] font-bold" style={{ color: accent.from }}>{m.value}</span>
            <span className="mt-0.5 block text-[7px] uppercase tracking-tight text-zinc-500 line-clamp-1">{m.label}</span>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="mb-4 flex flex-wrap gap-1">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-[8.5px] font-mono rounded bg-zinc-950 border border-zinc-900/40 px-1.5 py-0.5 text-zinc-500">
            {tech}
          </span>
        ))}
      </div>

      {/* Live repo stats */}
      {repo && (
        <div className="mb-4 flex items-center gap-3 text-[9px] font-mono text-zinc-500">
          <span className="flex items-center gap-1" title="GitHub stars">
            <Star className="w-3 h-3 text-amber-400" />
            {repo.stars.toLocaleString()}
          </span>
          <span className="flex items-center gap-1" title="GitHub forks">
            <GitFork className="w-3 h-3 text-zinc-400" />
            {repo.forks.toLocaleString()}
          </span>
          {repo.language && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {repo.language}
            </span>
          )}
        </div>
      )}

      {/* Expandable details */}
      <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="space-y-3 rounded-xl border border-zinc-900/70 bg-black/30 p-3 text-[10px] leading-relaxed">
          <div>
            <span className="font-mono font-bold uppercase tracking-wider" style={{ color: accent.soft }}>Problem</span>
            <p className="text-zinc-400 mt-0.5">{project.problem}</p>
          </div>
          <div>
            <span className="font-mono font-bold uppercase tracking-wider" style={{ color: accent.soft }}>Solution</span>
            <p className="text-zinc-400 mt-0.5">{project.solution}</p>
          </div>
          <div>
            <span className="font-mono font-bold uppercase tracking-wider" style={{ color: accent.soft }}>Architecture</span>
            <p className="text-zinc-400 mt-0.5">{project.architecture}</p>
          </div>
          <div>
            <span className="font-mono font-bold uppercase tracking-wider" style={{ color: accent.soft }}>Roadmap</span>
            <ul className="mt-1 flex flex-wrap gap-1">
              {project.roadmap.map((r) => (
                <li key={r} className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[8.5px] text-zinc-400">{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Action bar */}
      <div className="mt-4 flex items-center gap-2 select-none border-t border-zinc-900/60 pt-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 rounded-xl border border-zinc-800/80 bg-zinc-950 px-3 py-2.5 text-[10px] font-mono font-bold text-zinc-300 transition-colors hover:text-white hover:border-zinc-700"
        >
          <Layers className="h-3.5 w-3.5" />
          {expanded ? 'HIDE' : 'DETAILS'}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.08, rotate: -4 }}
          whileTap={{ scale: 0.95 }}
          href={links.github || 'https://github.com/farhankabir133'}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-zinc-850 bg-zinc-950/60 p-2.5 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
          title="View source on GitHub"
        >
          <Github className="h-3.5 w-3.5" />
        </motion.a>

        {links.demo ? (
          <motion.a
            whileHover={{ scale: 1.08, rotate: 4 }}
            whileTap={{ scale: 0.95 }}
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-850 bg-zinc-950/60 p-2.5 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
            title="Open live demo"
          >
            <Globe className="h-3.5 w-3.5" />
          </motion.a>
        ) : (
          <span
            className="rounded-xl border border-zinc-900 bg-zinc-950/40 p-2.5 text-zinc-700"
            title="Live deployment coming soon"
          >
            <Globe className="h-3.5 w-3.5" />
          </span>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpenWindowDirectly('projects')}
          className="ml-auto flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-[10px] font-mono font-bold text-white transition-transform"
          style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
        >
          <Rocket className="h-3.5 w-3.5" />
          OPEN OS
        </motion.button>
      </div>
    </motion.div>
  );
}

function LandingBelowFold() {
  const ctx = useLandingPage();
  const {
    theme, isWarping, onLaunchOS, onOpenWindowDirectly,
    articles, onOpenArticleDirectly, prefersReducedMotion,
    showBackToTop, activeTab, setActiveTab,
    activeTestimonial, setActiveTestimonial,
    styleSet, filteredSkills, testimonials, certifications,
    timelineRef, progressLineRef,
    handleAnchorClick, scrollToTop,
  } = ctx;

  // Form state — lives here instead of LandingPage to prevent
  // re-rendering the expensive ThreeWormhole 3D scene on every keystroke.
  const [formName, setFormName] = React.useState('');
  const [formEmail, setFormEmail] = React.useState('');
  const [formSubject, setFormSubject] = React.useState('');
  const [formMessage, setFormMessage] = React.useState('');
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formLoading, setFormLoading] = React.useState(false);
  const [formSubmitError, setFormSubmitError] = React.useState<string | null>(null);

  // Feature 4: live GitHub repo stats per project card.
  const [repoStats, setRepoStats] = React.useState<Record<string, RepoStats>>({});
  const [activeCategory, setActiveCategory] = React.useState<string>('All');

  React.useEffect(() => {
    let cancelled = false;
    const slugFor = (id: string) => {
      const url = portfolioData.projectLinks?.[id]?.github;
      if (!url) return null;
      const parts = url.split('/').filter(Boolean);
      return parts[parts.length - 1]?.toLowerCase() ?? null;
    };
    fetch('/api/github-repos')
      .then((r) => (r.ok ? r.json() : []))
      .then((repos: Array<{ name: string; stargazers_count?: number; forks_count?: number; language?: string | null }>) => {
        if (cancelled || !Array.isArray(repos)) return;
        const byName: Record<string, (typeof repos)[number]> = {};
        repos.forEach((r) => { byName[r.name.toLowerCase()] = r; });
        const map: Record<string, RepoStats> = {};
        portfolioData.projects.forEach((p) => {
          const slug = slugFor(p.id);
          const r = slug ? byName[slug] : undefined;
          if (r) {
            map[p.id] = {
              stars: typeof r.stargazers_count === 'number' ? r.stargazers_count : 0,
              forks: typeof r.forks_count === 'number' ? r.forks_count : 0,
              language: r.language ?? null,
            };
          }
        });
        setRepoStats(map);
      })
      .catch(() => { /* offline / no backend — stats simply stay hidden */ });
    return () => { cancelled = true; };
  }, []);

  const categories = React.useMemo(
    () => ['All', ...Array.from(new Set(portfolioData.projects.map((p) => p.category)))],
    [],
  );
  const visibleProjects = React.useMemo(
    () => (activeCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory)),
    [activeCategory],
  );

  React.useEffect(() => {
    track('portfolio_filter', { category: activeCategory });
  }, [activeCategory]);

  const handleContactSubmit = React.useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

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
    setFormSubmitError(null);
    setFormLoading(true);

    const apiUrl = (await import('../utils/apiConfig')).getApiBaseUrl();

    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formName, email: formEmail, subject: formSubject, message: formMessage }),
      });

      let data: { error?: string } = {};
      try { data = await res.json(); } catch { /* non-JSON */ }

      if (!res.ok) throw new Error(data.error || `Transmission failed (${res.status}).`);

      setFormLoading(false);
      setFormSubmitted(true);
      setFormSubmitError(null);
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
    } catch (err) {
      console.warn('Message transmission failed:', err);
      setFormLoading(false);
      setFormSubmitted(false);
      setFormSubmitError(
        err instanceof Error && err.message
          ? err.message
          : 'Transmission failed. Your message was NOT delivered — please retry or email farhankabir133@gmail.com directly.'
      );
    }
  }, [formName, formEmail, formSubject, formMessage]);

  return (
    <>
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
                { label: "NLP PAPERS", value: "5 Pubs", desc: "IEEE Journals & Conference Index" },
               { label: "DEPLOYED SAAS", value: "10+ Web-Apps", desc: "High-performance codebases" },
               { label: "CERTIFICATES", value: "5+ Credentials", desc: "Deep Learning & GCP" }
             ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, opacity: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => {}}
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
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>02 // SKILL OBSERVATION</h2>
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
                onClick={() => setActiveTab(cat)}
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
              <div
                role="progressbar"
                aria-valuenow={skill.weight * 20}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name}: ${skill.weight * 20}%`}
                className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden"
              >
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
        <div className="relative border-l border-zinc-900/80 ml-5 md:ml-6 space-y-12">
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

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 font-mono">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'border-sky-500/50 bg-sky-500/10 text-sky-300'
                  : 'border-zinc-800 bg-zinc-950/40 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid — interactive innovation cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {visibleProjects.map((project, i) => (
            <InnovationCard
              key={project.id}
              project={project}
              index={i}
              accent={INNOVATION_ACCENTS[i % INNOVATION_ACCENTS.length]}
              motif={MOTIF_TYPES[i % MOTIF_TYPES.length]}
              theme={theme}
              styleSet={styleSet}
              prefersReducedMotion={prefersReducedMotion}
              onOpenWindowDirectly={onOpenWindowDirectly}
              repo={repoStats[project.id]}
            />
          ))}
        </motion.div>
      </section>

{/* SECTION 4.5: RESEARCH PAPERS */}
      <section id="research" className="relative px-6 md:px-12 py-24 max-w-6xl w-full mx-auto space-y-12 z-10">
        
        {/* Section title */}
        <div className="flex items-center gap-3 border-b border-zinc-900/60 pb-3 font-mono">
          <span className="w-2.5 h-2.5 rounded bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>05 // NEURAL RESEARCH INDEX</h2>
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
              link: "#research",
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
              link: "#research",
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
                    width="400"
                    height="192"
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
                      onClick={() => {}}
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
          <h2 className={`text-xs font-black tracking-widest uppercase ${theme === 'light' ? 'text-slate-800' : 'text-slate-100'}`}>04 // MEDIUM WRITING SYNDICATE</h2>
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
            <span className="text-zinc-400">⏳ Synchronizing narrative telemetry vectors…</span>
            <span className="block mt-2 text-[10px] text-zinc-600">Articles will appear once the feed is loaded.</span>
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
                          width="384"
                          height="144"
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
                          onClick={() => {}}
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
                    ;
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
                    ;
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
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
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
                  <a href="mailto:farhankabir133@gmail.com" onClick={() => {}} className={`text-[11px] font-bold ${theme === 'light' ? 'text-slate-850' : 'text-slate-200'} hover:underline`}>
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
                  onClick={() => {}}
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
                  onClick={() => { setFormSubmitted(false); ; }}
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

                {formSubmitError && (
                  <div
                    role="alert"
                    className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-lg p-3"
                  >
                    <span className="text-red-400 font-bold leading-relaxed text-[9.5px]">
                      ⚠ TRANSMISSION FAILED — {formSubmitError}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormSubmitError(null)}
                      aria-label="Dismiss error"
                      className="ml-auto text-red-400 hover:text-red-300 font-bold cursor-pointer shrink-0"
                    >
                      ×
                    </button>
                  </div>
                )}

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
                onClick={(e) => { ; handleAnchorClick(e, link.target!); }}
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
                onClick={() => {}}
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
    </>
  );
}

export default LandingBelowFold;
