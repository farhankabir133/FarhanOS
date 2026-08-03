/**
 * Subtle ambient backdrop for the loader. Pure CSS gradients + a faint grid —
 * no animation, no layout work — so it costs almost nothing to paint.
 */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-[#070809]">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(56,189,248,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_100%,rgba(129,140,248,0.07),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.04]" />
    </div>
  );
}
