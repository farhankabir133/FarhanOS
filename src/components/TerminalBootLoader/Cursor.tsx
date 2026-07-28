/**
 * Absolute-positioned terminal caret.
 *
 * This cursor is managed outside of React render cycle via direct DOM
 * manipulation to avoid re-renders during the boot sequence. The
 * TypingEngine/useTerminalBoot pair moves this element between rows
 * and toggles its visibility.
 */
export function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute ml-[1px] inline-block h-[1.05em] w-[7px] translate-y-[2px] rounded-[1px] bg-sky-300 opacity-0"
      style={{ left: 0, top: 0 }}
    />
  );
}
