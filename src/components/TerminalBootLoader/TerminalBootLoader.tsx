import type { ReactNode } from 'react';
import { TerminalWindow } from './TerminalWindow';
import { Background } from './Background';
import { Particles } from './Particles';
import { CommandRenderer } from './CommandRenderer';
import { OutputRenderer } from './OutputRenderer';
import { Overlay, ContentReveal } from './TransitionManager';
import { useTerminalBoot } from '../../hooks/useTerminalBoot';
import { BOOT_SCRIPT, WORKSTATION_HOST } from '../../config/terminalCommands';

export interface TerminalBootLoaderProps {
  children: ReactNode;
  /** Called once the loader has fully dissolved and the app is revealed. */
  onComplete?: () => void;
}

/**
 * Premium Terminal Boot Loader — the single source of truth for the site's
 * opening experience.
 *
 * Renders the real application underneath an elegant terminal overlay, then
 * dissolves into the homepage once the boot sequence and app readiness both
 * complete. Once finished it returns only the children, leaving no hidden DOM.
 */
export default function TerminalBootLoader({ children, onComplete }: TerminalBootLoaderProps) {
  const { phase, activeLine, reduced, setLineRef } = useTerminalBoot({
    script: BOOT_SCRIPT,
    onComplete,
  });

  if (phase === 'done') {
    return <>{children}</>;
  }

  return (
    <>
      <ContentReveal phase={phase} reduced={reduced}>
        {children}
      </ContentReveal>

      <Overlay phase={phase} reduced={reduced}>
        <Background />
        <Particles enabled={!reduced} />

        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center">
          <TerminalWindow>
            <div aria-hidden="true" className="space-y-0.5">
              {BOOT_SCRIPT.map((line, i) =>
                line.kind === 'cmd' ? (
                  <CommandRenderer
                    key={i}
                    ref={(el) => setLineRef(i, el)}
                    prompt={line.prompt ?? ''}
                    active={!reduced && i === activeLine}
                  />
                ) : (
                  <OutputRenderer
                    key={i}
                    ref={(el) => setLineRef(i, el)}
                    kind={line.kind}
                    active={!reduced && i === activeLine}
                  />
                ),
              )}
            </div>
          </TerminalWindow>

          <p className="mt-4 font-mono text-[11px] tracking-wide text-zinc-600">
            secure remote session · {WORKSTATION_HOST}
          </p>
        </div>

        <div className="sr-only" role="status" aria-live="polite">
          {phase === 'done' ? 'Portfolio ready' : 'Connecting to development workstation'}
        </div>
      </Overlay>
    </>
  );
}
