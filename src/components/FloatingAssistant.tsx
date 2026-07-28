import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { 
  X, Send, ChevronRight, Copy, Check, Volume2, VolumeX, 
  MessageSquare, RefreshCw, Minimize2, Maximize2, Loader2, GripVertical
} from 'lucide-react';
import { getApiBaseUrl } from '../utils/apiConfig';

import { FarhanAIIcon } from './FarhanAIIcon';

interface FloatingAssistantProps {
  theme: string;
  triggerSound?: (freq?: number, dur?: number) => void;
  placement?: 'landing-left' | 'global-bottom-left';
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  id: string;
}

const SUGGESTED_PROMPTS = [
  "Tell me about Farhan",
  "Show his projects",
  "Explain RankFlow AI",
  "What technologies does he use?",
  "Why should I hire Farhan?",
  "Show his resume",
  "Tell me about his research",
];

const QUICK_ACTIONS = [
  { label: "Research", query: "Tell me about Farhan's research papers and clinical NLP work" },
  { label: "Projects", query: "What are Farhan's main SaaS products and open source projects?" },
  { label: "Skills", query: "What is Farhan's technical stack and AI/ML expertise?" },
  { label: "Contact", query: "How can I contact or hire Farhan Kabir?" },
];

export default function FloatingAssistant({ theme, triggerSound, placement = 'global-bottom-left' }: FloatingAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hi — I'm FK's AI Assistant. I know everything about Farhan's work, research, and engineering journey. Recruiter, founder, or fellow engineer — ask me anything.",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = useCallback(async (text?: string) => {
    const content = (text || input).trim();
    if (!content || isLoading) return;

    triggerSound?.(900, 0.03);
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setShowWelcome(false);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.content,
      }));

      const res = await fetch(`${getApiBaseUrl()}/api/ask-twin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content, history }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || "I don't have verified information about that.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }, [input, isLoading, messages, triggerSound]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const speakText = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isLight = theme === 'light';
  const isTerminal = theme === 'terminal';

  const bgClass = isLight 
    ? 'bg-white/80 border-slate-200 shadow-xl' 
    : 'bg-zinc-950/95 border-zinc-800 shadow-2xl shadow-black/60';
  
  const inputBg = isLight
    ? 'bg-slate-50 border-slate-200 focus:border-indigo-400'
    : 'bg-black/60 border-zinc-800 focus:border-indigo-500/50';
  
  const userBubble = isLight
    ? 'bg-indigo-50 border-indigo-100 text-slate-800'
    : 'bg-indigo-500/10 border-indigo-500/20 text-slate-100';
  
  const assistantBubble = isLight
    ? 'bg-slate-50 border-slate-200 text-slate-700'
    : 'bg-zinc-900/40 border-zinc-800 text-zinc-200';

  const isLandingLeft = placement === 'landing-left';

  // Magnetic hover effect
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripplePosition, setRipplePosition] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipplePosition({ x, y });
    setTimeout(() => setRipplePosition(null), 600);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !isHovering) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    triggerSound?.(1200, 0.02);
  };

  const motionStyle = isHovering ? {
    x: mousePosition.x,
    y: mousePosition.y,
  } : {};

  return (
    <div className={`fixed z-[9999] flex items-center gap-3 ${isLandingLeft ? 'left-3 bottom-3 sm:left-4 sm:bottom-4 flex-col-reverse' : 'left-3 bottom-3 sm:left-4 sm:bottom-4 flex-row-reverse'}`}>
      {isOpen && isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
          className={`${isLandingLeft ? 'hidden md:flex w-[calc(100vw-1.5rem)] sm:w-[380px] max-h-[70vh] sm:max-h-[560px] flex-col rounded-2xl border backdrop-blur-xl overflow-hidden mb-2 sm:mb-3' : 'hidden md:flex w-[380px] max-h-[560px] flex-col rounded-2xl border backdrop-blur-xl overflow-hidden'} ${bgClass}`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between px-4 h-14 border-b shrink-0 ${isLight ? 'border-slate-200 bg-white/60' : 'border-zinc-800/60 bg-black/40'}`}>
            <div className="flex items-center gap-3">
              <div className="relative">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isTerminal ? 'bg-[#33ff33]/10 border border-[#33ff33]/20' : 'bg-indigo-500/10 border border-indigo-500/20'}`}>
                    <FarhanAIIcon className={`w-5 h-5 ${isTerminal ? 'text-[#33ff33]' : 'text-indigo-400'}`} isTerminal={isTerminal} />
                  </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-zinc-900" />
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-bold tracking-tight ${isLight ? 'text-slate-800' : 'text-slate-100'}`}>FK's AI Assistant</span>
                <span className="text-[10px] text-emerald-400 font-mono">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([])}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all cursor-pointer"
                title="New chat"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => { stopSpeaking(); setIsExpanded(false); }}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {showWelcome && messages.length === 1 && (
              <div className="space-y-4">
                <div className="text-center py-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-colors ${isTerminal ? 'bg-[#33ff33]/10 border border-[#33ff33]/20' : 'bg-indigo-500/10 border border-indigo-500/20'}`}>
                    <FarhanAIIcon className={`w-8 h-8 ${isTerminal ? 'text-[#33ff33]' : 'text-indigo-400'}`} isTerminal={isTerminal} />
                  </div>
                    <h3 className={`text-lg font-bold mb-1 ${isLight ? 'text-slate-800' : 'text-slate-100'}`}>
                      Hi, I'm FK's AI Assistant
                    </h3>
                    <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-zinc-400'}`}>
                      I know everything about Farhan's projects, engineering journey, technical skills, research, architecture decisions, and experience.
                      <br /><br />
                      Whether you're a recruiter, client, founder, or engineer — ask me anything.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => sendMessage(action.query)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs transition-all cursor-pointer border ${isLight ? 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50 text-slate-700' : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50 text-zinc-300 hover:text-slate-200'}`}
                    >
                      <span className={`shrink-0 w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold ${isLight ? 'bg-indigo-100 text-indigo-600' : 'bg-indigo-500/10 text-indigo-400'}`}>
                        {action.label[0]}
                      </span>
                      <span className="flex-1">{action.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                    </button>
                  ))}
                </div>

                <div>
                  <p className={`text-[10px] font-medium uppercase tracking-wider mb-2 ${isLight ? 'text-slate-500' : 'text-zinc-500'}`}>Suggested prompts</p>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTED_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] transition-all cursor-pointer border ${isLight ? 'border-slate-200 bg-white hover:border-indigo-300 text-slate-600 hover:text-indigo-600' : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 text-zinc-400 hover:text-slate-300'}`}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col gap-1.5 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`px-4 py-3 rounded-2xl max-w-[90%] text-[13px] leading-relaxed border shadow-sm whitespace-pre-wrap ${msg.role === 'user' ? userBubble : assistantBubble}`}>
                    {msg.content}
                  </div>
                  {msg.role === 'assistant' && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (isSpeaking) {
                            stopSpeaking();
                          } else {
                            speakText(msg.content);
                          }
                        }}
                        className="text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer"
                        title={isSpeaking ? 'Stop speaking' : 'Read aloud'}
                      >
                        {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={() => copyToClipboard(msg.content, msg.id)}
                        className="text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer"
                        title="Copy"
                      >
                        {copiedId === msg.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <div className="flex items-center gap-2 text-indigo-400">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-xs font-medium">Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-3 border-t shrink-0 ${isLight ? 'border-slate-200 bg-white/60' : 'border-zinc-800/60 bg-black/40'}`}>
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                rows={1}
                className={`flex-1 resize-none rounded-xl px-4 py-3 text-[13px] outline-none border transition-all ${inputBg}`}
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

       {isOpen ? (
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="md:hidden fixed inset-0 z-[9999]"
         >
           {/* Backdrop with tap-to-close */}
           <motion.div 
             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
             onClick={() => { setIsOpen(false); setIsExpanded(false); stopSpeaking(); }}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
           />
           
           {/* Mobile Chat Sheet */}
           <motion.div
             initial={{ y: '100%' }}
             animate={{ y: 0 }}
             exit={{ y: '100%' }}
             transition={{ type: "spring", stiffness: 350, damping: 30 }}
             className="absolute bottom-0 left-0 right-0 h-[92vh] rounded-t-[2rem] border-t border-zinc-800/60 overflow-hidden flex flex-col bg-zinc-950 shadow-2xl"
             style={{ 
               paddingTop: 'env(safe-area-inset-top)',
               paddingBottom: 'env(safe-area-inset-bottom)',
             }}
           >
             {/* Drag Handle Bar */}
             <div className="flex justify-center pt-3 pb-1">
               <div className="w-10 h-1 rounded-full bg-zinc-700/80" />
             </div>

             {/* Mobile Header */}
             <div className="flex items-center justify-between px-5 h-14 border-b border-zinc-800/40">
               <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isTerminal ? 'bg-[#33ff33]/10 border border-[#33ff33]/20' : 'bg-indigo-500/10 border border-indigo-500/20'}`}>
                    <FarhanAIIcon className={`w-5 h-5 ${isTerminal ? 'text-[#33ff33]' : 'text-indigo-400'}`} isTerminal={isTerminal} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-tight text-slate-100">FK's AI Assistant</span>
                    <span className="text-[10px] text-emerald-400 font-mono font-medium">Online</span>
                  </div>
               </div>
               
               {/* Close Button - Large and accessible */}
               <button
                 onClick={() => { stopSpeaking(); setIsOpen(false); setIsExpanded(false); }}
                 className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-zinc-300 hover:text-white hover:border-zinc-700 active:scale-95 transition-all cursor-pointer"
                 aria-label="Close assistant"
               >
                 <X className="w-5 h-5" />
               </button>
             </div>

             {/* Messages */}
             <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
               {showWelcome && messages.length === 1 && (
                 <div className="space-y-4">
                   <div className="text-center py-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-colors ${isTerminal ? 'bg-[#33ff33]/10 border border-[#33ff33]/20' : 'bg-indigo-500/10 border border-indigo-500/20'}`}>
                        <FarhanAIIcon className={`w-8 h-8 ${isTerminal ? 'text-[#33ff33]' : 'text-indigo-400'}`} isTerminal={isTerminal} />
                      </div>
                  <h3 className="text-lg font-bold mb-1 text-slate-100">Hi, I'm FK's AI Assistant</h3>
                  <p className="text-xs leading-relaxed text-zinc-400">Ask me anything about Farhan's work and experience.</p>
                   </div>
                   <div className="grid grid-cols-2 gap-2">
                     {QUICK_ACTIONS.map((action) => (
                       <button
                         key={action.label}
                         onClick={() => sendMessage(action.query)}
                         className="flex items-center gap-2 px-3 py-3 rounded-xl text-left text-xs border border-zinc-800 bg-zinc-900/30 text-zinc-300 active:scale-95 transition-all cursor-pointer"
                       >
                         <span className="shrink-0 w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-bold bg-indigo-500/10 text-indigo-400">{action.label[0]}</span>
                         <span className="flex-1 leading-tight">{action.label}</span>
                       </button>
                     ))}
                   </div>
                 </div>
               )}
               {messages.map((msg) => (
                 <div key={msg.id} className={`flex flex-col gap-1.5 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`px-4 py-3 rounded-2xl max-w-[90%] text-[13px] leading-relaxed border shadow-sm whitespace-pre-wrap ${msg.role === 'user' ? userBubble : assistantBubble}`}>
                      {msg.content}
                    </div>
                 </div>
               ))}
               {isLoading && (
                 <div className="flex items-center gap-2 text-indigo-400">
                   <Loader2 className="w-4 h-4 animate-spin" />
                   <span className="text-xs font-medium">Thinking...</span>
                 </div>
               )}
               <div ref={messagesEndRef} />
             </div>

             {/* Input */}
             <div className={`p-3 border-t border-zinc-800/60 bg-black/40`}>
               <div className="flex items-end gap-2">
                 <textarea
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyDown={handleKeyDown}
                   placeholder="Ask me anything..."
                   rows={1}
                   className="flex-1 resize-none rounded-xl px-4 py-3 text-[13px] outline-none border border-zinc-800 focus:border-indigo-500/50 transition-all"
                   style={{ minHeight: '44px', maxHeight: '120px' }}
                 />
                 <button
                   onClick={() => sendMessage()}
                   disabled={!input.trim() || isLoading}
                   className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                 >
                   <Send className="w-4 h-4" />
                 </button>
               </div>
             </div>
           </motion.div>
         </motion.div>
       ) : null}

      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              ...(isHovering ? {} : { y: [0, -4, 0] }),
              ...motionStyle
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
            whileTap={{ scale: 0.92 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => { handleClick(e); setIsOpen(true); setShowWelcome(true); setIsExpanded(true); triggerSound?.(800, 0.03); }}
            className={`group relative flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer transition-all ${
              isLandingLeft 
                ? 'flex-col rounded-xl sm:rounded-2xl pl-3 sm:pl-4 pr-3 sm:pr-4 py-2 sm:py-3 shadow-2xl' 
                : 'flex-row rounded-full pl-1.5 pr-3 sm:pr-5 py-1.5 sm:py-2'
            } bg-zinc-950/95 border border-zinc-700/60 shadow-xl backdrop-blur-xl hover:border-indigo-400/60 hover:shadow-indigo-500/20`}
          >
            {/* Ripple effect */}
            {ripplePosition && (
              <span 
                className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
                style={{ borderRadius: isLandingLeft ? '1rem' : '9999px' }}
              >
                <span 
                  className="absolute bg-indigo-400/30 rounded-full animate-ping"
                  style={{
                    left: ripplePosition.x - 10,
                    top: ripplePosition.y - 10,
                    width: 20,
                    height: 20,
                  }}
                />
              </span>
            )}
            
            {/* Breathing glow effect */}
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
              animate={{ 
                opacity: isHovering ? [0.5, 1, 0.5] : 0,
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
              <div className="relative">
                <div className={`flex items-center justify-center transition-colors ${isTerminal ? 'bg-[#33ff33]/10 border border-[#33ff33]/30' : 'bg-indigo-500/10 border border-indigo-500/20'} ${isLandingLeft ? 'w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl' : 'w-7 h-7 sm:w-8 sm:h-8 rounded-full'} transition-all group-hover:scale-110`}>
                  <FarhanAIIcon className={`${isTerminal ? 'text-[#33ff33]' : 'text-indigo-400'} ${isLandingLeft ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-3.5 h-3.5 sm:w-4 sm:h-4'} transition-all group-hover:rotate-12`} isTerminal={isTerminal} />
                </div>
              <span className={`absolute bg-emerald-400 border-2 border-zinc-950 animate-pulse ${isLandingLeft ? '-bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full' : '-bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full'} shadow-lg`} />
            </div>
            {!isLandingLeft && (
              <span className="text-[10px] font-bold tracking-wide text-zinc-200 uppercase whitespace-nowrap z-10">
                <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 inline-block max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap">Ask </span>
                FK's AI Assistant
              </span>
            )}
            {isLandingLeft && (
                 <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-zinc-200 uppercase whitespace-nowrap z-10 text-center leading-tight">
                  ASK FK'S AI ASSISTANT
                </span>
            )}
          </motion.button>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => { setIsOpen(false); setIsExpanded(false); stopSpeaking(); triggerSound?.(700, 0.04); }}
            className={`flex items-center justify-center text-zinc-300 hover:text-white cursor-pointer transition-all bg-zinc-950/95 border border-zinc-700/60 shadow-xl backdrop-blur-xl hover:border-rose-400/60 hover:shadow-rose-500/20 ${
              isLandingLeft ? 'w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl' : 'w-10 h-10 rounded-full'
            }`}
            title="Close assistant"
          >
            <X className={`${isLandingLeft ? 'w-4 h-4 sm:w-5 sm:h-5' : 'w-4 h-4'} transition-all`} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
