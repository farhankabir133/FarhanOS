/**
 * Imperative typing engine.
 *
 * Uses requestAnimationFrame batching for smoother, display-synced typing
 * instead of per-character setTimeout, which can drift and cause visible jank.
 */
export class TypingEngine {
  private timers: ReturnType<typeof setTimeout>[] = [];
  private cancelled = false;
  private rafId: number | null = null;
  private onType?: () => void;

  setOnType(callback: () => void): void {
    this.onType = callback;
  }

  cancel(): void {
    this.cancelled = true;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    for (const id of this.timers) clearTimeout(id);
    this.timers = [];
  }

  isCancelled(): boolean {
    return this.cancelled;
  }

  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
      const id = setTimeout(resolve, ms);
      this.timers.push(id);
    });
  }

  /** Renders text immediately (used for reduced-motion / instant reveal). */
  setInstant(el: HTMLElement | null, text: string): void {
    if (el) el.textContent = text;
  }

  /** Types `text` into `el` at `cps` characters per second using rAF batching. */
  async typeInto(el: HTMLElement | null, text: string, cps: number): Promise<void> {
    if (!el || this.cancelled) return;
    const perChar = 1000 / Math.max(1, cps);
    el.textContent = '';

    let index = 0;
    const total = text.length;
    let lastTime = performance.now();
    let accumulator = 0;

    const tick = (now: number) => {
      if (this.cancelled) return;

      const delta = now - lastTime;
      lastTime = now;
      accumulator += delta;

      if (accumulator >= perChar) {
        const charsToAdd = Math.min(total - index, Math.floor(accumulator / perChar));
        accumulator -= charsToAdd * perChar;
        index += charsToAdd;
        el.textContent = text.slice(0, index);
        this.onType?.();
      }

      if (index >= total) {
        this.rafId = null;
        return;
      }

      this.rafId = requestAnimationFrame(tick);
    };

    this.rafId = requestAnimationFrame(tick);

    await new Promise<void>((resolve) => {
      const checkDone = () => {
        if (this.cancelled || index >= total) {
          this.rafId = null;
          resolve();
        } else {
          this.timers.push(setTimeout(checkDone, 50));
        }
      };
      this.timers.push(setTimeout(checkDone, 50));
    });
  }

  /** Resolves once the app becomes ready or after `timeoutMs`, whichever first. */
  async waitUntilReady(isReady: () => boolean, timeoutMs: number): Promise<void> {
    if (isReady()) return;
    const step = 80;
    let waited = 0;
    while (!this.cancelled && !isReady() && waited < timeoutMs) {
      await this.wait(step);
      waited += step;
    }
  }
}
