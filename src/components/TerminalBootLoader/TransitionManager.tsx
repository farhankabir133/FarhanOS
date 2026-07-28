import type { ReactNode } from 'react';
import type { BootPhase } from '../../hooks/useTerminalBoot';

/**
 * The full-screen overlay that holds the terminal during boot and dissolves
 * into the homepage. GPU-accelerated (opacity / transform / filter only) and
 * fully decorative to screen readers — the churning text is never announced.
 */
export function Overlay({
  phase,
  reduced,
  children,
}: {
  phase: BootPhase;
  reduced: boolean;
  children: ReactNode;
}) {
  const revealing = phase === 'revealing' || phase === 'done';
  const duration = reduced ? '320ms' : '900ms';
  const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99999] flex items-center justify-center will-change-[opacity,transform]"
      style={{
        transition: `opacity ${duration} ${easing}, transform ${duration} ${easing}`,
        opacity: revealing ? 0 : 1,
        transform: revealing ? 'scale(1.02)' : 'scale(1)',
        pointerEvents: revealing ? 'none' : 'auto',
      }}
    >
      <div className="absolute inset-0 bg-[#070809]" />
      <div className="relative w-full px-4">{children}</div>
    </div>
  );
}

/**
 * Wraps the real application. While booting it sits hidden (and slightly
 * scaled) beneath the overlay; on reveal it eases into place so the
 * homepage appears as though it was already mounted underneath the terminal.
 */
export function ContentReveal({
  phase,
  reduced,
  children,
}: {
  phase: BootPhase;
  reduced: boolean;
  children: ReactNode;
}) {
  const settled = phase === 'done';
  const revealing = phase === 'revealing' || settled;
  const duration = reduced ? '320ms' : '1100ms';
  const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div
      className="min-h-screen"
      style={{
        visibility: revealing ? 'visible' : 'hidden',
        opacity: revealing ? 1 : 0,
        transform: settled ? 'none' : revealing ? 'scale(1)' : 'scale(1.02)',
        transition: `opacity ${duration} ${easing}, transform ${duration} ${easing}, visibility 0ms linear ${duration}`,
        transitionDelay: revealing ? '0ms' : `${duration}`,
      }}
    >
      {children}
    </div>
  );
}
