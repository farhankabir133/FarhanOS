import { useState, useEffect, useCallback } from 'react';
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
  const { phase, reduced, setLineRef, skipBoot } = useTerminalBoot({
    script: BOOT_SCRIPT,
    onComplete,
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      skipBoot();
    }
  }, [skipBoot]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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

          <p className="mt-4 font-mono text-[11px] tracking-wide text-slate-400">
            secure remote session · {WORKSTATION_HOST}
          </p>

          <button
            onClick={skipBoot}
            className="mt-6 px-4 py-1.5 rounded-lg border border-zinc-700/50 bg-zinc-900/50 text-[10px] font-mono text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800/60 transition-all cursor-pointer"
            aria-label="Skip boot sequence (press Escape or Enter)"
          >
            Skip Boot → <span className="text-zinc-600 ml-1">(Esc)</span>
          </button>
        </div>

        <div className="sr-only" role="status" aria-live="polite">
          {'Connecting to development workstation'}
        </div>
      </Overlay>
    </>
  );
}
