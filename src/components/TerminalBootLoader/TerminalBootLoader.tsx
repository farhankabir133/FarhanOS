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
  onComplete?: () => void;
}

export function TerminalBootLoader({ children, onComplete }: TerminalBootLoaderProps) {
  const { phase, reduced, setLineRef } = useTerminalBoot({
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
                  />
                ) : (
                  <OutputRenderer
                    key={i}
                    ref={(el) => setLineRef(i, el)}
                    kind={line.kind}
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
