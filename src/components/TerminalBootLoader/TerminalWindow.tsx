import type { ReactNode } from 'react';

/**
 * A calm, macOS-Terminal-inspired window chrome that frames the boot session.
 * Kept understated (low-opacity traffic lights, thin borders) to match the
 * premium developer-tooling aesthetic rather than loud "hacker" tropes.
 */
export function TerminalWindow({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/60 backdrop-blur-xl">
      <div className="flex h-9 items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/70" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/70" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]/70" />
        <span className="ml-3 select-none font-mono text-[11px] tracking-wide text-zinc-400">
          portfolio — zsh — 80×24
        </span>
      </div>
      <div className="px-4 py-4 font-mono text-[13px] leading-[1.6] sm:px-5 sm:py-5">
        {children}
      </div>
    </div>
  );
}
