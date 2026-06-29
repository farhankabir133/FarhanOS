import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { playSynthTick } from '../utils/audioPlay';

export default function FuturisticLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('idle');
  const [mounted, setMounted] = useState(false);
  const [exitPhase, setExitPhase] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const duration = 3500;
    const start = performance.now();
    let raf = 0;
    let step = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const noise = (Math.random() - 0.5) * 3;
      const p = Math.max(0, Math.min(100, t * 100 + noise));
      setProgress(p);

      if (p > 25 && step === 0) {
        step = 1;
        setPhase('loading');
      }
      if (p > 60 && step === 1) {
        step = 2;
        setPhase('decrypting');
        playSynthTick(880, 0.05);
      }

      if (t >= 1) {
        setPhase('done');
        playSynthTick(1200, 0.1);
        setTimeout(() => playSynthTick(1600, 0.1), 110);
        setTimeout(() => playSynthTick(2000, 0.15), 220);
        setTimeout(() => {
          setExitPhase(true);
          setTimeout(() => onCompleteRef.current(), 1200);
        }, 400);
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[99999] bg-black select-none overflow-hidden"
      initial={{ opacity: 1 }}
      animate={exitPhase ? { 
        opacity: [1, 1, 0], 
        scale: [1, 1.02, 1.1],
        filter: ['brightness(1)', 'brightness(1.2)', 'brightness(0)']
      } : { opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut", times: [0, 0.5, 1] }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.85)_70%)]" />

      <div className="absolute inset-0 overflow-hidden opacity-70 pointer-events-none">
        <div className="absolute left-0 right-0 h-[1px] bg-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-scan-line" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block rounded-full bg-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: exitPhase ? [0.35 + ((i * 17) % 40) / 100, 0] : [0, 0.4, 0.25 + ((i * 17) % 40) / 100] }}
            transition={{ duration: 1.2, delay: i * 0.02 }}
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 59 + 29) % 100}%`,
              width: 2,
              height: 2,
              boxShadow: '0 0 6px rgba(34,211,238,0.7)',
            }}
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div 
          className="absolute -translate-x-[140px] -translate-y-[140px] w-[280px] h-[280px] rounded-full border border-cyan-500/20 border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -translate-x-[100px] -translate-y-[100px] w-[200px] h-[200px] rounded-full border border-purple-500/25 border-dashed"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute -translate-x-[64px] -translate-y-[64px] w-[128px] h-[128px] rounded-full border border-cyan-400/30 border-dotted" />
        <motion.div 
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.9)]"
          animate={exitPhase ? { 
            scale: [1, 2, 0], 
            opacity: [1, 1, 0],
            boxShadow: ['0 0 24px rgba(34,211,238,0.9)', '0 0 48px rgba(34,211,238,1)', '0 0 0px rgba(34,211,238,0)']
          } : { scale: [0.8, 1.2, 1], opacity: [0, 1, 1] }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={exitPhase ? { opacity: 0, y: -30, scale: 0.95 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] md:text-xs text-cyan-400/90 font-mono uppercase tracking-[0.35em] mb-3">
            Initializing Neural Interface
          </p>
          <h1 className="relative">
            <span className="block text-base md:text-xl text-zinc-400 font-mono tracking-wide mb-1">
              Welcome to
            </span>
            <span className="block text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 tracking-tight select-none">
              My Space
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-1.5 h-1.5 rotate-45 border border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-6 font-mono text-[11px] space-y-1.5">
        {[
          '> Initializing neural core matrix...',
          '> Establishing quantum tunnel handshake...',
          '> Loading cognitive spatial parameters...',
        ].map((text, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={exitPhase ? { opacity: 0, x: -40 } : phaseRef.current === 'decrypting' || phaseRef.current === 'loading' ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="text-emerald-400/90">▸</span>
            <span className="text-zinc-500">{text}</span>
          </motion.div>
        ))}
        {phaseRef.current === 'decrypting' && (
          <motion.div 
            className="flex items-center gap-2 text-cyan-300 font-bold"
            initial={{ opacity: 0 }}
            animate={exitPhase ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-emerald-400/90">▸</span>
            <span>
              <span className="text-cyan-300 font-bold">{'>'} Welcome to My Space</span>
            </span>
          </motion.div>
        )}
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 md:w-80"
        initial={{ opacity: 1, y: 0 }}
        animate={exitPhase ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest">System Load</span>
          <span className="text-[10px] text-cyan-400 font-mono font-bold">{Math.floor(progress)}%</span>
        </div>
        <div className="h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative transition-all duration-150"
            style={{ width: `${progress}%` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              style={{ backgroundSize: '200% 100%' }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
