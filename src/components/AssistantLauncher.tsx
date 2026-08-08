import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, Send, ChevronRight, Copy, Check, Volume2, VolumeX,
  RefreshCw, Maximize2, Minimize2, Sparkles, Zap,
  Brain, MessageCircle, Search, HelpCircle
} from 'lucide-react';
import { getApiBaseUrl } from '../utils/apiConfig';
import MarkdownRenderer from './MarkdownRenderer';
import { AssistantGlyph } from './AssistantGlyph';

export interface AssistantLauncherProps {
  theme?: string;
  triggerSound?: (freq?: number, dur?: number) => void;
  placement?: 'landing-left' | 'global-bottom-left';
  defaultOpen?: boolean;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  id: string;
  /** True while a response is streaming in token-by-token. */
  streaming?: boolean;
}

const QUICK_ACTIONS = [
  { label: 'Research', query: "Tell me about Farhan's research papers and clinical NLP work", icon: Search },
  { label: 'Projects', query: 'What are Farhan\'s main SaaS products and open source projects?', icon: Sparkles },
  { label: 'Skills', query: 'What is Farhan\'s technical stack and AI/ML expertise?', icon: Brain },
  { label: 'Contact', query: 'How can I contact or hire Farhan Kabir?', icon: MessageCircle },
];

const STORAGE_KEY = 'farhanos.twin.chat';

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content:
    'Systems fully operational. I am Farhan\'s certified neural clone. Query clinical pipelines, NLP architectures, or engineering profiles.',
  timestamp: new Date(),
};

const FOLLOW_UPS = [
  'What are Farhan\'s most impressive achievements?',
  'How does Farhan\'s depression-detection model work?',
  'Can you summarize Farhan\'s current research focus?',
];

/** Load a previously persisted conversation, falling back to the welcome message. */
const loadStoredMessages = (): Message[] => {
  try {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (raw) {
      const parsed = JSON.parse(raw) as Message[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((m) => ({ ...m, timestamp: new Date(m.timestamp), streaming: false }));
      }
    }
  } catch {
    // ignore corrupt / unavailable storage
  }
  return [WELCOME_MESSAGE];
};

export default function AssistantLauncher({
  theme = 'dark',
  triggerSound,
  placement = 'global-bottom-left',
  defaultOpen = false,
}: AssistantLauncherProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [messages, setMessages] = useState<Message[]>(loadStoredMessages);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [aiState, setAiState] = useState<'idle' | 'thinking' | 'responding' | 'success' | 'error'>('idle');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const [sheetHeight, setSheetHeight] = useState(0);

  const isLight = theme === 'light';
  const isTerminal = theme === 'terminal';

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && sheetRef.current) {
      const updateHeight = () => {
        setSheetHeight(window.innerHeight);
      };
      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [isOpen]);

  // Persist conversation across reloads.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore quota / availability errors
    }
  }, [messages]);

  // Global keyboard shortcut: Cmd/Ctrl+K toggles the panel, "/" focuses input.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((o) => !o);
        triggerSound?.(800, 0.03);
      } else if (e.key === '/' && isOpen && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, triggerSound]);

  const sendMessage = useCallback(
    async (text?: string) => {
      const content = (text || input).trim();
      if (!content || isLoading) return;

      triggerSound?.(900, 0.03);
      setAiState('thinking');

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);

      const assistantId = `assistant-${Date.now()}`;
      // Placeholder assistant bubble we stream tokens into. It renders a typing
      // indicator until the first token arrives.
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: 'assistant', content: '', timestamp: new Date(), streaming: true },
      ]);

      setInput('');
      setIsLoading(true);

      const setAssistantContent = (patch: Partial<Message>) =>
        setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, ...patch } : m)));

      try {
        const history = messages.map((m) => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: m.content,
        }));

        const res = await fetch(`${getApiBaseUrl()}/api/ask-twin`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: content, history }),
        });

        if (!res.ok) {
          let errMsg = 'Neural link unstable. Retry transmission.';
          try {
            const d = await res.json();
            errMsg = d.error || errMsg;
          } catch {
            // fall through to default message
          }
          throw new Error(errMsg);
        }

        const contentType = res.headers.get('content-type') || '';
        const isStream = contentType.includes('text/event-stream') || !!res.body;

        if (isStream && res.body) {
          setAiState('responding');
          const reader = res.body.getReader();
          const decoder = new TextDecoder();
          let streamed = '';

          // Robust SSE parser that tolerates frames split across read() chunks.
          let sseBuffer = '';
          let pendingData = '';
          const handleData = (payload: string) => {
            if (payload === '[DONE]') return;
            try {
              const json = JSON.parse(payload);
              const delta = json.delta;
              if (typeof delta === 'string' && delta) {
                streamed += delta;
                setAssistantContent({ content: streamed });
              }
            } catch {
              // ignore malformed / partial frame
            }
          };
          const processChunk = (text: string, flush = false) => {
            sseBuffer += text;
            let idx;
            while ((idx = sseBuffer.indexOf('\n')) !== -1) {
              let line = sseBuffer.slice(0, idx);
              sseBuffer = sseBuffer.slice(idx + 1);
              if (line.endsWith('\r')) line = line.slice(0, -1);
              if (line.startsWith('data:')) {
                pendingData += line.slice(5).trim();
              } else if (line === '' && pendingData) {
                handleData(pendingData);
                pendingData = '';
              }
            }
            if (flush && pendingData) {
              handleData(pendingData);
              pendingData = '';
            }
          };

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            processChunk(decoder.decode(value, { stream: true }));
          }
          processChunk(decoder.decode(), true);

          setAssistantContent({ content: streamed || 'No verified information available.', streaming: false });
          setAiState('success');
          setTimeout(() => setAiState('idle'), 1200);
        } else {
          // Non-streaming fallback (older backend).
          const data = await res.json();
          setAssistantContent({
            content: data.reply || 'No verified information available.',
            streaming: false,
          });
          setAiState('success');
          setTimeout(() => setAiState('idle'), 1200);
        }
      } catch (err) {
        setAiState('error');
        setAssistantContent({
          content: (err as Error).message || 'Neural link unstable. Retry transmission.',
          streaming: false,
        });
        setTimeout(() => setAiState('idle'), 2000);
      } finally {
        setIsLoading(false);
        inputRef.current?.focus();
      }
    },
    [input, isLoading, messages, triggerSound]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
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

  const isLandingLeft = placement === 'landing-left';

  const [isPressed, setIsPressed] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !isHovering) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.12;
    const deltaY = (e.clientY - centerY) * 0.12;
    setMousePosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    triggerSound?.(1200, 0.02);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  const motionStyle = isHovering ? { x: mousePosition.x, y: mousePosition.y } : {};

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    setIsOpen(true);
    triggerSound?.(800, 0.03);
  };

  const handleClose = () => {
    stopSpeaking();
    setIsOpen(false);
  };

  const glassClass = isLight
    ? 'bg-white/85 border-slate-200/80 shadow-xl shadow-slate-900/10'
    : 'bg-zinc-950/92 border-zinc-800/70 shadow-2xl shadow-black/60';

  const inputGlass = isLight
    ? 'bg-slate-50/80 border-slate-200 focus:border-indigo-400'
    : 'bg-black/70 border-zinc-800 focus:border-indigo-500/50';

  const userBubble = isLight
    ? 'bg-indigo-50 border-indigo-100 text-slate-800'
    : 'bg-indigo-500/10 border-indigo-500/20 text-slate-100';

  const assistantBubble = isLight
    ? 'bg-slate-50 border-slate-200 text-slate-700'
    : 'bg-zinc-900/50 border-zinc-800 text-zinc-200';

  const renderMessages = () => (
    <>
      {messages.length === 1 && (
        <div className="space-y-5">
          <div className="text-center py-8 px-4">
            <div
              className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                isTerminal ? 'bg-[#33ff33]/10 border border-[#33ff33]/20' : 'bg-indigo-500/10 border border-indigo-500/20'
              }`}
            >
              <AssistantGlyph
                state={aiState}
                className={`${isTerminal ? 'text-[#33ff33]' : 'text-indigo-400'} w-9 h-9`}
              />
            </div>
            <h3 className={`text-xl font-bold mb-2 tracking-tight ${isLight ? 'text-slate-800' : 'text-slate-100'}`}>
              Neural Assistant
            </h3>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-zinc-400'} max-w-xs mx-auto`}>
              Query research, architecture, or engineering profiles. All responses derive from verified portfolio intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 px-2">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.label}
                onClick={() => sendMessage(action.query)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left text-sm transition-all cursor-pointer border ${
                  isLight
                    ? 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/60 text-slate-700 hover:shadow-sm'
                    : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 text-zinc-300 hover:text-slate-200 hover:shadow-sm'
                }`}
              >
                <span
                  className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isLight ? 'bg-indigo-100 text-indigo-600' : 'bg-indigo-500/10 text-indigo-400'
                  }`}
                >
                  {action.label[0]}
                </span>
                <span className="flex-1 font-medium">{action.label}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {messages.map(
          (msg) =>
            messages.length > 1 && (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={`flex flex-col gap-1.5 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl max-w-[88%] border shadow-sm ${
                    msg.role === 'user' ? userBubble : assistantBubble
                  }`}
                >
                  {msg.streaming && !msg.content ? (
                    /* Animated typing indicator while awaiting the first token */
                    <div className="flex items-center gap-1.5 py-0.5" aria-label="Assistant is typing">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                        />
                      ))}
                    </div>
                  ) : msg.role === 'assistant' ? (
                    <MarkdownRenderer content={msg.content} />
                  ) : (
                    <p className="text-[13px] leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>
                {msg.role === 'assistant' && msg.content && !msg.streaming && (
                  <div className="flex items-center gap-2 pl-1">
                    <button
                      onClick={() => {
                        if (isSpeaking) {
                          stopSpeaking();
                        } else {
                          speakText(msg.content);
                        }
                      }}
                      className="text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer p-1"
                      title={isSpeaking ? 'Stop speaking' : 'Read aloud'}
                      aria-label={isSpeaking ? 'Stop speaking' : 'Read aloud'}
                    >
                      {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => copyToClipboard(msg.content, msg.id)}
                      className="text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer p-1"
                      title="Copy"
                      aria-label="Copy message"
                    >
                      {copiedId === msg.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            )
        )}
      </AnimatePresence>

      {(() => {
        const lastDone = [...messages]
          .reverse()
          .find((m) => m.role === 'assistant' && m.content && !m.streaming);
        const showSuggestions = !!lastDone && !isLoading && lastDone.id !== 'welcome' && messages.length > 1;
        return showSuggestions ? (
          <div className="flex flex-wrap gap-2 pl-1 pt-0.5">
            {FOLLOW_UPS.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className={`text-[11px] px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  isLight
                    ? 'border-indigo-200 bg-indigo-50/60 text-indigo-600 hover:bg-indigo-100 hover:border-indigo-300'
                    : 'border-zinc-700 bg-zinc-900/40 text-indigo-300 hover:bg-zinc-800 hover:border-indigo-500/40'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        ) : null;
      })()}
      <div ref={messagesEndRef} />
    </>
  );

  const chatWindowContent = (
    <>
      {/* Header */}
      <div
        className={`flex items-center justify-between px-4 h-12 border-b shrink-0 ${
          isLight ? 'border-slate-200 bg-white/70 backdrop-blur-md' : 'border-zinc-800/60 bg-black/50 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                isTerminal ? 'bg-[#33ff33]/10 border border-[#33ff33]/20' : 'bg-indigo-500/10 border border-indigo-500/20'
              }`}
            >
              <AssistantGlyph
                state={aiState}
                className={`${isTerminal ? 'text-[#33ff33]' : 'text-indigo-400'} w-4 h-4`}
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border-2 border-white dark:border-zinc-900" />
          </div>
          <div className="flex flex-col">
            <span className={`text-sm font-bold tracking-tight ${isLight ? 'text-slate-800' : 'text-slate-100'}`}>
              Neural Assistant
            </span>
            <span className="text-[10px] text-emerald-400 font-mono font-medium">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => setMessages([{ ...WELCOME_MESSAGE, timestamp: new Date() }])}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all cursor-pointer"
            title="New chat"
            aria-label="New chat"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all cursor-pointer"
            title="Close"
            aria-label="Close assistant"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {renderMessages()}
      </div>

      {/* Input */}
      <div
        className={`p-3 border-t shrink-0 ${
          isLight ? 'border-slate-200 bg-white/60 backdrop-blur-md' : 'border-zinc-800/60 bg-black/40 backdrop-blur-md'
        }`}
      >
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Query neural core..."
            rows={1}
            className={`flex-1 resize-none rounded-xl px-4 py-3 text-[13px] outline-none border transition-all ${inputGlass}`}
            style={{ minHeight: '44px', maxHeight: '120px' }}
            aria-label="Chat input"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || isLoading}
            className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`fixed z-[9999] flex items-end gap-3 ${
        isLandingLeft
          ? 'left-3 bottom-3 sm:left-4 sm:bottom-4 flex-col-reverse'
          : 'left-3 bottom-3 sm:left-4 sm:bottom-4 flex-row-reverse'
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Desktop & Tablet Chat Window */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.8 }}
              className="assistant-desktop-window hidden md:flex assistant-chat-window w-[35vw] min-w-[320px] max-h-[70vh] flex-col rounded-2xl border backdrop-blur-2xl overflow-hidden"
            >
              {chatWindowContent}
            </motion.div>

            {/* Mobile Fullscreen Sheet */}
            <motion.div
              ref={sheetRef}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="assistant-mobile-sheet md:hidden fixed inset-x-0 bottom-0 z-[9998] w-full h-[85vh] rounded-t-2xl border border-b-0 bg-zinc-950/97 backdrop-blur-2xl overflow-hidden flex flex-col"
              style={{
                paddingTop: 'env(safe-area-inset-top)',
                paddingBottom: 'env(safe-area-inset-bottom)',
              }}
            >
              {/* Mobile Header */}
              <div
                className={`flex items-center justify-between px-4 h-12 border-b shrink-0 ${
                  isLight ? 'border-slate-200 bg-white/70 backdrop-blur-md' : 'border-zinc-800/60 bg-black/50 backdrop-blur-md'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="relative shrink-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isTerminal ? 'bg-[#33ff33]/10 border border-[#33ff33]/20' : 'bg-indigo-500/10 border border-indigo-500/20'
                      }`}
                    >
                      <AssistantGlyph
                        state={aiState}
                        className={`${isTerminal ? 'text-[#33ff33]' : 'text-indigo-400'} w-4 h-4`}
                      />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border-2 border-white dark:border-zinc-900" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-sm font-bold tracking-tight truncate ${isLight ? 'text-slate-800' : 'text-slate-100'}`}>
                      Neural Assistant
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono font-medium hidden min-[420px]:inline">Online</span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-zinc-300 hover:text-white hover:border-zinc-700 active:scale-95 transition-all cursor-pointer"
                  aria-label="Close assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
                {renderMessages()}
              </div>

              {/* Mobile Input */}
              <div
                className={`p-3 border-t shrink-0 ${
                  isLight ? 'border-slate-200 bg-white/60 backdrop-blur-md' : 'border-zinc-800/60 bg-black/40 backdrop-blur-md'
                }`}
                style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
              >
                <div className="flex items-end gap-2">
                  <textarea
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Query neural core..."
                    rows={1}
                    className={`flex-1 resize-none rounded-xl px-4 py-3 text-[13px] outline-none border transition-all ${inputGlass}`}
                    style={{ minHeight: '44px', maxHeight: '120px' }}
                    aria-label="Chat input"
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || isLoading}
                    className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={(e) => {
          handleTouchEnd();
          onClickHandler(e as any);
        }}
        onClick={onClickHandler}
        className={`
          relative flex items-center justify-center cursor-pointer
          rounded-2xl p-0 w-12 h-12
          bg-zinc-950/95 border border-zinc-700/60 shadow-xl md:backdrop-blur-xl
          hover:border-indigo-400/60 hover:shadow-indigo-500/20
          transition-all outline-none
          focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black
          touch-manipulation
          will-change-transform
          active:scale-90
        `}
        aria-label="Open Neural Assistant"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
            triggerSound?.(800, 0.03);
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: isPressed ? 0.92 : 1,
            y: 0,
            ...motionStyle,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            y: {
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scale: {
              type: 'spring',
              stiffness: 400,
              damping: 17,
            },
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="absolute inset-0 rounded-2xl"
        >
          {/* Breathing glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0"
            animate={{ opacity: isHovering ? [0.4, 0.8, 0.4] : 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Halo ring */}
          <motion.div
            className="absolute inset-[-6px] rounded-3xl border border-indigo-400/0"
            animate={{
              scale: isHovering ? [1, 1.08, 1] : 1,
              opacity: isHovering ? [0.3, 0.7, 0.3] : 0,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Glyph */}
        <AssistantGlyph
          state={aiState}
          className={`${isTerminal ? 'text-[#33ff33]' : 'text-indigo-400'} w-6 h-6 relative z-10 transition-all duration-300 ${
            isHovering ? 'rotate-12 scale-110' : ''
          }`}
        />

        {/* Status dot */}
        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-zinc-950 shadow-lg z-20" />
      </button>
    </div>
  );
}