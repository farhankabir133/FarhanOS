type Tick = { frequency: number; duration: number };

class BootAudio {
  private ctx: AudioContext | null = null;
  private unlocked = false;
  private pendingTicks: Tick[] = [];
  private clickBuffer: AudioBuffer | null = null;

  private getAudioContextClass() {
    if (typeof window === 'undefined') return null;
    return window.AudioContext || (window as any).webkitAudioContext || null;
  }

  private ensureClickBuffer() {
    if (this.clickBuffer || !this.ctx) return;
    const duration = 0.022;
    const sampleRate = this.ctx.sampleRate;
    const bufferSize = Math.max(1, Math.floor(sampleRate * duration));
    const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const t = i / sampleRate;
      const decay = Math.exp(-t / 0.0018);
      const noise = (Math.random() * 2 - 1);
      const resonance = Math.sin(2 * Math.PI * 4200 * t) * Math.exp(-t / 0.0012);
      data[i] = (noise * 0.55 + resonance * 0.45) * decay * 0.7;
    }

    this.clickBuffer = buffer;
  }

  unlock() {
    if (this.unlocked) return;
    this.unlocked = true;

    const AC = this.getAudioContextClass();
    if (!AC) return;

    let ctx = this.ctx;
    if (!ctx || ctx.state === 'suspended') {
      try {
        ctx = new AC();
        this.ctx = ctx;
      } catch {
        return;
      }
    }

    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    this.ensureClickBuffer();

    const batch = [...this.pendingTicks];
    this.pendingTicks = [];
    batch.forEach((tick, i) => {
      setTimeout(() => this.playTick(tick.frequency, tick.duration), i * 6);
    });
  }

  tick(frequency = 2600, duration = 0.012) {
    if (!this.unlocked) {
      this.pendingTicks.push({ frequency, duration });
      return;
    }

    if (!this.ctx) {
      return;
    }

    const ctx = this.ctx;

    if (ctx.state === 'suspended') {
      ctx.resume().then(() => {
        this.playTick(frequency, duration);
      }).catch(() => {});
      return;
    }

    this.playTick(frequency, duration);
  }

  private playTick(frequency: number, duration: number) {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;

      if (!this.clickBuffer) {
        this.ensureClickBuffer();
      }
      if (!this.clickBuffer) return;

      const source = this.ctx.createBufferSource();
      source.buffer = this.clickBuffer;

      const gain = this.ctx.createGain();
      const velocity = 0.35 + Math.random() * 0.25;
      gain.gain.setValueAtTime(velocity, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(frequency + (Math.random() - 0.5) * 400, now);
      filter.Q.setValueAtTime(0.8 + Math.random() * 0.8, now);

      source.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      source.start(now);
      source.stop(now + 0.025);
    } catch {
      // ignore audio errors
    }
  }
}

export const bootAudio = new BootAudio();
