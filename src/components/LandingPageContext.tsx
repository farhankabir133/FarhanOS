import React from 'react';
import { type Article, type Theme } from '../types';

export interface LandingPageContextType {
  theme: Theme;
  isWarping: boolean;
  onLaunchOS: () => void;
  onOpenWindowDirectly: (windowId: string) => void;
  articles: Article[];
  onOpenArticleDirectly: (article: Article) => void;
  prefersReducedMotion: boolean;
  showBackToTop: boolean;
  activeTab: 'All' | 'AI/ML' | 'Frontend' | 'Backend' | 'Database' | 'DevOps';
  setActiveTab: (tab: 'All' | 'AI/ML' | 'Frontend' | 'Backend' | 'Database' | 'DevOps') => void;
  activeTestimonial: number;
  setActiveTestimonial: (idx: number | ((prev: number) => number)) => void;
  styleSet: Record<string, string>;
  filteredSkills: any[];
  testimonials: any[];
  certifications: any[];
  timelineRef: React.RefObject<HTMLDivElement>;
  progressLineRef: React.RefObject<HTMLDivElement>;
  handleAnchorClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  scrollToTop: () => void;
}

export const LandingPageContext = React.createContext<LandingPageContextType | null>(null);

export function useLandingPage() {
  const ctx = React.useContext(LandingPageContext);
  if (!ctx) throw new Error('useLandingPage must be used within LandingPageProvider');
  return ctx;
}
