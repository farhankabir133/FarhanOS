/**
 * Imperative typing engine.
 *
 * It writes directly into DOM text nodes so the React tree does not re-render
 * on every character — keeping the boot sequence at a smooth 60 FPS with a
 * minimal number of component updates. Every pending timeout is tracked so the
 * whole sequence can be cancelled cleanly on unmount (no leaks).
 */
export class TypingEngine {
  private timers: ReturnType<typeof setTimeout>[] = [];
  private cancelled = false;

  cancel(): void {
    this.cancelled = true;
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

  /** Types `text` into `el` at `cps` characters per second. */
  async typeInto(el: HTMLElement | null, text: string, cps: number): Promise<void> {
    if (!el || this.cancelled) return;
    const perChar = 1000 / Math.max(1, cps);
    el.textContent = '';
    for (let i = 1; i <= text.length; i++) {
      if (this.cancelled) return;
      el.textContent = text.slice(0, i);
      await this.wait(perChar);
    }
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
