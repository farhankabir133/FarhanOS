type Listener = () => void;

class BootAudio {
  private ctx: AudioContext | null = null;
  private unlocked = false;
  private listeners: Listener[] = [];
  private pendingTicks: Array<{ frequency: number; duration: number }> = [];

  private ensureContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return null;

    if (!this.ctx) {
      this.ctx = new AC();
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    return this.ctx;
  }

  unlock() {
    if (this.unlocked) return;
    this.unlocked = true;
    const ctx = this.ensureContext();
    this.listeners.forEach((fn) => fn());
    this.listeners = [];
    for (const tick of this.pendingTicks) {
      this.tick(tick.frequency, tick.duration);
    }
    this.pendingTicks = [];
  }

  onUnready(fn: Listener) {
    if (this.unlocked) {
      fn();
      return;
    }
    this.listeners.push(fn);
  }

  tick(frequency = 1800, duration = 0.008) {
    const ctx = this.ensureContext();
    if (!ctx) return;

    if (!this.unlocked && ctx.state === 'suspended') {
      this.pendingTicks.push({ frequency, duration });
      return;
    }

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // ignore audio errors
    }
  }
}

export const bootAudio = new BootAudio();
