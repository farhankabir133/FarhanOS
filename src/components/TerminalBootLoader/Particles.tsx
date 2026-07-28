/**
 * A handful of slow-drifting ambient particles. They animate purely via the
 * GPU-friendly `float-particle` keyframes and are disabled entirely when the
 * user prefers reduced motion. Positions are pre-computed so nothing is
 * measured or recalculated at runtime.
 */
const DOTS = [
  { top: '22%', left: '18%', size: 2, delay: 0 },
  { top: '68%', left: '76%', size: 2, delay: 1.5 },
  { top: '48%', left: '42%', size: 3, delay: 0.8 },
  { top: '82%', left: '28%', size: 2, delay: 2.2 },
  { top: '34%', left: '64%', size: 2, delay: 1.1 },
];

export function Particles({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {DOTS.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-sky-300/40 float-particle"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
