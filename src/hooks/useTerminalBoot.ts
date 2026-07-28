import { useCallback, useEffect, useRef, useState } from 'react';
import { BOOT_TIMING, type BootLine } from '../config/terminalCommands';
import { TypingEngine } from '../components/TerminalBootLoader/TypingEngine';
import { delay, prefersReducedMotion } from '../utils/delay';

export type BootPhase = 'booting' | 'awaiting' | 'revealing' | 'done';

interface UseTerminalBootOptions {
  script: BootLine[];
  onComplete?: () => void;
  minDurationMs?: number;
  maxDurationMs?: number;
  revealMs?: number;
  reducedMotionHoldMs?: number;
}

/**
 * Drives the terminal boot sequence and the reveal transition.
 *
 * IMPORTANT: This hook only uses React state for phase transitions
 * (booting -> revealing -> done). It does NOT use state for active line
 * tracking. No React re-renders occur during the typing animation itself.
 */
export function useTerminalBoot({
  script,
  onComplete,
  minDurationMs = BOOT_TIMING.minDurationMs,
  maxDurationMs = BOOT_TIMING.maxDurationMs,
  revealMs = BOOT_TIMING.revealMs,
  reducedMotionHoldMs = BOOT_TIMING.reducedMotionHoldMs,
}: UseTerminalBootOptions) {
  const [phase, setPhase] = useState<BootPhase>('booting');
  const [reduced, setReduced] = useState(false);

  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const engineRef = useRef<TypingEngine | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const startedAtRef = useRef(0);
  const appReadyRef = useRef(false);
  const revealedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const setLineRef = useCallback((index: number, el: HTMLSpanElement | null) => {
    lineRefs.current[index] = el;
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const beginReveal = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setPhase('revealing');
    schedule(() => {
      setPhase('done');
      onCompleteRef.current?.();
    }, revealMs);
  }, [revealMs, schedule]);

  // App readiness signal: window load, or a hard safety cap.
  useEffect(() => {
    const markReady = () => {
      appReadyRef.current = true;
    };
    if (typeof document !== 'undefined' && document.readyState === 'complete') {
      markReady();
    } else if (typeof window !== 'undefined') {
      window.addEventListener('load', markReady, { once: true });
    }
    const cap = setTimeout(markReady, maxDurationMs);
    return () => {
      window.removeEventListener('load', markReady);
      clearTimeout(cap);
    };
  }, [maxDurationMs]);

  // Boot sequence.
  useEffect(() => {
    const reducedMotion = prefersReducedMotion();
    setReduced(reducedMotion);
    startedAtRef.current = performance.now();
    const engine = new TypingEngine();
    engineRef.current = engine;

    const run = async () => {
      const finish = async () => {
        await engine.waitUntilReady(() => appReadyRef.current, maxDurationMs);
        const elapsed = performance.now() - startedAtRef.current;
        if (elapsed < minDurationMs) await delay(minDurationMs - elapsed);
        beginReveal();
      };

      if (reducedMotion) {
        script.forEach((line, i) => engine.setInstant(lineRefs.current[i], line.text));
        await delay(reducedMotionHoldMs);
        if (engine.isCancelled()) return;
        await finish();
        return;
      }

      for (let i = 0; i < script.length; i++) {
        if (engine.isCancelled()) return;
        const line = script[i];
        await engine.typeInto(lineRefs.current[i], line.text, line.cps ?? 80);
        await delay(line.after ?? 120);
      }
      if (engine.isCancelled()) return;
      await finish();
    };

    void run();

    return () => {
      engine.cancel();
    };
  }, [script, minDurationMs, maxDurationMs, reducedMotionHoldMs, beginReveal]);

  // Guarantee every scheduled timer is cleared on unmount (no leaks).
  useEffect(() => {
    return () => {
      for (const id of timersRef.current) clearTimeout(id);
      timersRef.current = [];
    };
  }, []);

  return { phase, reduced, setLineRef };
}
