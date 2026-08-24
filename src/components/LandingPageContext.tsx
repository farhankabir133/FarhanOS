import React from 'react';
import { type Article } from '../types';

export interface LandingPageContextType {
  theme: 'dark' | 'cyberpunk' | 'ai' | 'terminal' | 'light';
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
  formName: string;
  setFormName: (v: string) => void;
  formEmail: string;
  setFormEmail: (v: string) => void;
  formSubject: string;
  setFormSubject: (v: string) => void;
  formMessage: string;
  setFormMessage: (v: string) => void;
  formErrors: Record<string, string>;
  setFormErrors: (e: Record<string, string>) => void;
  formSubmitted: boolean;
  setFormSubmitted: (v: boolean) => void;
  formLoading: boolean;
  setFormLoading: (v: boolean) => void;
  formSubmitError: string | null;
  setFormSubmitError: (e: string | null) => void;
  styleSet: Record<string, string>;
  filteredSkills: any[];
  testimonials: any[];
  certifications: any[];
  timelineRef: React.RefObject<HTMLDivElement>;
  progressLineRef: React.RefObject<HTMLDivElement>;
  handleAnchorClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  handleContactSubmit: (e: React.FormEvent) => void;
  scrollToTop: () => void;
}

export const LandingPageContext = React.createContext<LandingPageContextType | null>(null);

export function useLandingPage() {
  const ctx = React.useContext(LandingPageContext);
  if (!ctx) throw new Error('useLandingPage must be used within LandingPageProvider');
  return ctx;
}
