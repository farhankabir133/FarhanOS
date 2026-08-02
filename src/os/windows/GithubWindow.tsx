import { StyleSet } from '../../types';

interface GithubWindowProps {
  styleSet: StyleSet;
  triggerSound: (freq: number, duration: number) => void;
}

export default function GithubWindow({ styleSet, triggerSound }: GithubWindowProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2">
        <div>
          <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">VIRTUALIZED TELEMETRY STREAM</span>
          <h3 className="text-sm font-extrabold text-white mt-1">Linguistic & Engineering Pipelines Stream</h3>
        </div>
        <span className="text-[11px] text-stone-400 font-mono bg-zinc-950/60 px-2 py-0.5 border border-zinc-850 rounded">STREAK: 142 DAYS</span>
      </div>

      {/* Interactive Commits Calendar mock-up */}
      <div>
        <span className={styleSet.panelHeader}>CODE INTEL CLASSIFIER CALENDAR (MOCK-GRID)</span>
        <div className="grid grid-cols-12 lg:grid-cols-24 gap-1 mt-1.5 bg-zinc-950 p-3 border border-zinc-900 rounded-lg">
          {Array.from({ length: 48 }).map((_, i) => {
            const level = i % 7 === 0 ? 'bg-green-500 shadow-[0_0_4px_#22c55e]' : i % 5 === 0 ? 'bg-green-600' : i % 3 === 0 ? 'bg-green-800' : 'bg-zinc-900';
            return (
              <div
                key={i}
                onClick={() => triggerSound(900 + (i % 5) * 100, 0.02)}
                className={`w-3.5 h-3.5 rounded-xs transition-colors hover:scale-110 cursor-pointer ${level}`}
                title={`Telemetry day ${i + 1}: Commits verified`}
              />
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-[11px]">
        {/* Active Repositories List */}
        <div className="bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg">
          <span className="font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2">INTELLIGENT SYSTEMS</span>
          <div className="space-y-2 font-mono">
            <div className="flex items-center justify-between">
              <span className="text-sky-300">typerush-cockpit</span>
              <span className="text-zinc-500 text-[10px]">Stars: 184</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sky-300">the-ink-home-portal</span>
              <span className="text-zinc-500 text-[10px]">Stars: 142</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sky-300">safeside-predictor</span>
              <span className="text-zinc-500 text-[10px]">Stars: 211</span>
            </div>
          </div>
        </div>

        {/* Mock activity feeds */}
        <div className="bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg">
          <span className="font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2">LIVE COMPILING ACTIONS FEED</span>
          <div className="space-y-2 leading-relaxed text-[10.5px]">
            <div className="flex items-start gap-1">
              <span className="text-emerald-400">●</span>
              <p className="text-zinc-400">Pushed update to <code className="text-[#33ff33] font-mono">typerush</code>: Configured Web Audio procedural oscillators & dynamic BPM heartbeats.</p>
            </div>
            <div className="flex items-start gap-1">
              <span className="text-amber-400">●</span>
              <p className="text-zinc-400">Released version 1.4.2 containing live Audio Synthesis narrated profiles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
