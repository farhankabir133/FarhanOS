export type Theme = 'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light';

export const themeCSSVars: Record<Theme, Record<string, string>> = {
  dark: {
    '--theme-bg': '#090a10',
    '--theme-text': '#f1f5f9',
    '--theme-glass-bg': '#11121d',
    '--theme-glass-border': '#2c2d3a',
    '--theme-accent': '#38bdf8',
    '--theme-accent-secondary': '#6366f1',
    '--theme-header-bg': '#161726',
    '--theme-header-text': '#e2e8f0',
    '--theme-btn-primary-bg': '#0ea5e9',
    '--theme-btn-primary-hover': '#0284c7',
    '--theme-indicator': '#38bdf8',
  },
  cyberpunk: {
    '--theme-bg': '#030610',
    '--theme-text': '#00ffcc',
    '--theme-glass-bg': '#000000',
    '--theme-glass-border': '#ff0055',
    '--theme-accent': '#ff0055',
    '--theme-accent-secondary': '#00ffcc',
    '--theme-header-bg': '#ff0055',
    '--theme-header-text': '#ffffff',
    '--theme-btn-primary-bg': '#ff0055',
    '--theme-btn-primary-hover': '#ff0055',
    '--theme-indicator': '#00ffcc',
  },
  ai: {
    '--theme-bg': '#050414',
    '--theme-text': '#f1f5f9',
    '--theme-glass-bg': '#5b21b4',
    '--theme-glass-border': '#8b5cf6',
    '--theme-accent': '#8b5cf6',
    '--theme-accent-secondary': '#6366f1',
    '--theme-header-bg': '#5b21b4',
    '--theme-header-text': '#f1f5f9',
    '--theme-btn-primary-bg': '#8b5cf6',
    '--theme-btn-primary-hover': '#7c3aed',
    '--theme-indicator': '#a855f7',
  },
  terminal: {
    '--theme-bg': '#000000',
    '--theme-text': '#33ff33',
    '--theme-glass-bg': '#000000',
    '--theme-glass-border': '#33ff33',
    '--theme-accent': '#33ff33',
    '--theme-accent-secondary': '#16a34a',
    '--theme-header-bg': '#1c1c1c',
    '--theme-header-text': '#33ff33',
    '--theme-btn-primary-bg': '#33ff33',
    '--theme-btn-primary-hover': '#33ff33',
    '--theme-indicator': '#33ff33',
  },
  light: {
    '--theme-bg': '#f8fafc',
    '--theme-text': '#0f172a',
    '--theme-glass-bg': '#ffffff',
    '--theme-glass-border': '#e2e8f0',
    '--theme-accent': '#4f46e5',
    '--theme-accent-secondary': '#0ea5e9',
    '--theme-header-bg': '#f1f5f9',
    '--theme-header-text': '#1e293b',
    '--theme-btn-primary-bg': '#0f172a',
    '--theme-btn-primary-hover': '#1e293b',
    '--theme-indicator': '#4f46e5',
  },
};

export function setThemeVariables(theme: Theme) {
  const root = document.documentElement;
  const vars = themeCSSVars[theme];

  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export function getThemeStyles(theme: Theme) {
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
        badge: 'bg-pink-500/20 border border-pink-500/40 text-pink-300',
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
        badge: 'bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs',
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
        badge: 'bg-transparent border border-[#33ff33] text-[#33ff33] text-xs',
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
        badge: 'bg-slate-100 border border-slate-200 text-slate-700 text-xs',
      };
    default:
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
        badge: 'bg-sky-500/10 border border-sky-500/20 text-sky-300',
      };
  }
};