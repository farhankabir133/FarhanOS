/**
 * A handful of slow-drifting ambient particles. They animate purely via the
 * GPU-friendly `float-particle` keyframes and are disabled entirely when the
 * user prefers reduced motion. Positions are pre-computed so nothing is
 * measured or recalculated at runtime.
 */
const DOTS = [
  { top: '18%', left: '12%', size: 2, delay: 0 },
  { top: '32%', left: '82%', size: 3, delay: 1.2 },
  { top: '64%', left: '22%', size: 2, delay: 0.6 },
  { top: '74%', left: '68%', size: 2, delay: 1.8 },
  { top: '44%', left: '46%', size: 3, delay: 0.9 },
  { top: '12%', left: '58%', size: 2, delay: 2.1 },
  { top: '86%', left: '40%', size: 2, delay: 1.5 },
  { top: '54%', left: '88%', size: 2, delay: 0.3 },
  { top: '26%', left: '34%', size: 2, delay: 2.4 },
  { top: '70%', left: '90%', size: 3, delay: 0.7 },
  { top: '40%', left: '8%', size: 2, delay: 1.1 },
  { top: '88%', left: '78%', size: 2, delay: 1.9 },
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
