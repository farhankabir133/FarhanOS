import { useCallback, useEffect, useRef, useState } from 'react';
import { BOOT_TIMING, type BootLine } from '../config/terminalCommands';
import { TypingEngine } from '../components/TerminalBootLoader/TypingEngine';
import { delay, prefersReducedMotion } from '../utils/delay';
import { bootAudio } from '../utils/bootAudio';

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
 * - Types the script one line at a time (writing straight into the DOM so the
 *   React tree stays still).
 * - Waits for BOTH the minimum animation duration AND the app readiness signal
 *   (window `load` / `document.readyState === 'complete'`, capped by a safety
 *   timeout) before revealing.
 * - Reveals gracefully: a short dissolve, then unmounts through `onComplete`.
 *
 * Only `activeLine` and `phase` cause React re-renders (one per line + a few
 * for the transition), so the underlying app is never re-rendered by the loader.
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
  const [activeLine, setActiveLine] = useState(-1);
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

    if (!reducedMotion) {
      engine.setOnType(() => bootAudio.tick(2200, 0.012));
    }

    // Diagnostic: try playing a test tone immediately on boot
    try {
      bootAudio.tick(440, 0.05);
      console.log('[BootDiagnostic] test tick sent');
    } catch (e) {
      console.log('[BootDiagnostic] test tick failed', e);
    }

    const run = async () => {
      const finish = async () => {
        await engine.waitUntilReady(() => appReadyRef.current, maxDurationMs);
        const elapsed = performance.now() - startedAtRef.current;
        if (elapsed < minDurationMs) await delay(minDurationMs - elapsed);
        beginReveal();
      };

      if (reducedMotion) {
        script.forEach((line, i) => engine.setInstant(lineRefs.current[i], line.text));
        setActiveLine(script.length - 1);
        await delay(reducedMotionHoldMs);
        if (engine.isCancelled()) return;
        await finish();
        return;
      }

      for (let i = 0; i < script.length; i++) {
        if (engine.isCancelled()) return;
        setActiveLine(i);
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

  return { phase, activeLine, reduced, setLineRef };
}
