/** Blinking terminal caret. Pure CSS, GPU-friendly, decorative only. */
export function Cursor({ active = true }: { active?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={
        'ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] rounded-[1px] bg-sky-300 ' +
        (active ? 'terminal-caret' : 'opacity-0')
      }
    />
  );
}
