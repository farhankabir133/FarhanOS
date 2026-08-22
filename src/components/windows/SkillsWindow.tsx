import { memo } from 'react';
import { SkillNode } from '../../types';

interface SkillsWindowProps {
  skills: SkillNode[];
  filter: string;
  onFilterChange: (filter: string) => void;
}

const FILTERS = ['all', 'AI/ML', 'Frontend', 'Backend', 'Research', 'Systems'] as const;

const SkillsWindow = memo(function SkillsWindow({ skills, filter, onFilterChange }: SkillsWindowProps) {
  return (
    <div className="space-y-4">
      <div className="border-b border-[#2c2d3a] pb-2 flex-col gap-0.5">
        <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">Observatory Deck</span>
        <h3 className="text-xs font-black text-white mt-1">Linguistic, Structural & Compute Matrices</h3>
      </div>

      <div className="flex items-center gap-2 bg-zinc-950/60 p-1 border border-zinc-900 rounded-lg overflow-x-auto scrollbar-none select-none">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`text-[9.5px] px-2.5 py-1 rounded capitalize cursor-pointer transition-colors ${filter === f ? 'bg-indigo-600 font-bold text-white shadow-[0_0_8px_#4f46e5]' : 'bg-transparent text-zinc-500 hover:text-zinc-300'}`}
          >
            {f === 'all' ? 'All Matrices' : f}
          </button>
        ))}
      </div>

      {/* Weight-based circular coordinate grid matrix representing custom skills map */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[220px] overflow-y-auto p-1 scrollbar-none">
        {skills.map((sk) => {
          const weightPct = sk.weight === 5 ? 'border-sky-500/50 bg-sky-500/5 text-sky-200' : sk.weight === 4 ? 'border-indigo-500/30 bg-indigo-500/5 text-indigo-200' : 'border-zinc-800 bg-zinc-900/40 text-zinc-400';
          return (
            <div
              key={sk.name}
              className={`p-2.5 rounded-lg border text-center cursor-pointer transition-all hover:scale-103 select-none flex flex-col items-center justify-center gap-1 relative overflow-hidden ${weightPct}`}
            >
              <span className="text-[10.5px] font-bold md:tracking-tight font-sans text-stone-100">{sk.name}</span>
              <span className="text-[8px] opacity-75 uppercase tracking-widest font-mono text-zinc-400">{sk.category}</span>
              <div className="flex items-center gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, stIdx) => (
                  <span key={stIdx} className={`w-1 h-1 rounded-full ${stIdx < sk.weight ? 'bg-indigo-400 shadow-[0_0_4px_#818cf8]' : 'bg-zinc-800'}`} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default SkillsWindow;
