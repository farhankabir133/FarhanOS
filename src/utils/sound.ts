// Lightweight Web Audio sound engine. Replaces the previous no-op stub so the
// OS can emit tactile UI feedback (clicks, boot chimes, errors). All sounds are
// synthesized — no asset downloads. Respects a global mute flag persisted to
// localStorage so a returning visitor keeps their preference.

let ctx: AudioContext | null = null;
let muted = false;

const STORAGE_KEY = 'farhanos:muted';

export function initMutedFromStorage(): boolean {
  try {
    muted = localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    muted = false;
  }
  return muted;
}

export function setMuted(value: boolean): void {
  muted = value;
  try {
    localStorage.setItem(STORAGE_KEY, value ? '1' : '0');
  } catch {
    /* ignore */
  }
}

export function isMuted(): boolean {
  return muted;
}

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) {
    try {
      ctx = new AC();
    } catch {
      return null;
    }
  }
  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }
  return ctx;
}

interface ToneOptions {
  type?: OscillatorType;
  gain?: number;
  slideTo?: number;
}

export function playSound(
  freq = 800,
  duration = 0.05,
  opts: ToneOptions = {},
): void {
  if (muted) return;
  const ac = getCtx();
  if (!ac) return;
  try {
    const now = ac.currentTime;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = opts.type ?? 'sine';
    osc.frequency.setValueAtTime(freq, now);
    if (opts.slideTo) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(1, opts.slideTo), now + duration);
    }
    const peak = Math.min(0.12, opts.gain ?? 0.04);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peak, now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain).connect(ac.destination);
    osc.start(now);
    osc.stop(now + duration + 0.03);
  } catch {
    /* ignore audio errors — never block UI */
  }
}

// Named cues used across the OS for consistent feedback.
export const sfx = {
  click: () => playSound(820, 0.04, { type: 'triangle', gain: 0.03 }),
  open: () => playSound(680, 0.06, { type: 'sine', gain: 0.035 }),
  close: () => playSound(420, 0.07, { type: 'sine', gain: 0.03, slideTo: 240 }),
  error: () => playSound(180, 0.12, { type: 'sawtooth', gain: 0.04, slideTo: 120 }),
  success: () => {
    playSound(660, 0.07, { type: 'sine', gain: 0.04 });
    setTimeout(() => playSound(990, 0.09, { type: 'sine', gain: 0.04 }), 70);
  },
  boot: () => {
    [220, 330, 440, 660].forEach((f, i) =>
      setTimeout(() => playSound(f, 0.12, { type: 'sine', gain: 0.04 }), i * 110),
    );
  },
};
