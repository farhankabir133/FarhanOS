import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';

interface Toast {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

interface ToastContextValue {
  showToast: (message: string, type?: Toast['type']) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const toastVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
    y: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: Toast['type'] = 'info') => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              variants={toastVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`
                min-w-[240px] max-w-sm p-3 rounded-lg border text-xs font-sans
                backdrop-blur-md shadow-lg pointer-events-auto
                ${
                  toast.type === 'success'
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                    : toast.type === 'error'
                    ? 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                    : toast.type === 'warning'
                    ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                    : 'bg-sky-500/15 border-sky-500/30 text-sky-300'
                }
              `}
            >
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return ctx;
}