import { GitBranch, Rocket } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Project, StyleSet } from '../../types';

interface ProjectsWindowProps {
  styleSet: StyleSet;
  selectedProject: Project;
  setSelectedProject: (p: Project) => void;
  triggerSound: (freq: number, duration: number) => void;
  openWindow: (id: string) => void;
}

export default function ProjectsWindow({ styleSet, selectedProject, setSelectedProject, triggerSound, openWindow }: ProjectsWindowProps) {
  return (
    <div className="flex flex-col md:flex-row h-full gap-4">
      {/* LHS Filter & Lists */}
      <div className="w-full md:w-52 border-r border-zinc-800/60 pr-4 flex flex-col gap-2">
        <span className={styleSet.panelHeader}>CATEGORIES</span>
        <div className="flex flex-wrap md:flex-col gap-1 select-none mb-3">
          {['AI', 'NLP', 'SaaS', 'Open Source', 'Research', 'Productivity', 'Design'].map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedProject(portfolioData.projects.find(p => p.category === cat) || portfolioData.projects[0]); triggerSound(800, 0.02); }}
              className={`text-[10px] text-left px-2 py-1.5 rounded-md capitalize transition-all cursor-pointer ${selectedProject.category === cat ? 'bg-zinc-950 text-sky-400 border border-zinc-800 font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              🎨 {cat}
            </button>
          ))}
        </div>

        <span className={styleSet.panelHeader}>ACTIVE PLATFORMS</span>
        <div className="space-y-1 overflow-y-auto max-h-[160px] scrollbar-none select-none">
          {portfolioData.projects.map((p) => (
            <button
              key={p.id}
              onClick={() => { setSelectedProject(p); triggerSound(800, 0.03); }}
              className={`w-full text-[10px] text-left p-2 rounded-md border flex flex-col gap-0.5 transition-colors cursor-pointer ${selectedProject.id === p.id ? 'bg-sky-500/10 border-sky-500/30 text-sky-300' : 'bg-transparent border-zinc-900 text-zinc-400 hover:bg-zinc-950'}`}
            >
              <span className="font-bold truncate">{p.title}</span>
              <span className="text-[9px] opacity-75">{p.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* RHS Rich Details Panel */}
      <div className="flex-1 space-y-4">
        <div className="flex items-start justify-between border-b border-zinc-800/40 pb-2">
          <div>
            <span className={styleSet.badge}>{selectedProject.category} PROJECT</span>
            <h3 className="text-sm font-extrabold text-white mt-1">{selectedProject.title}</h3>
            <span className="text-[10px] text-zinc-500 font-mono tracking-wide">TIMELINE: {selectedProject.timeline}</span>
          </div>
          <div className="flex items-center gap-1.5 select-none">
            <button onClick={() => triggerSound(1000, 0.05)} className="p-1 px-2.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 hover:text-white flex items-center gap-1">
              <GitBranch className="w-3 h-3" />
              <span>Code</span>
            </button>
            <button onClick={() => { triggerSound(1100, 0.05); openWindow('brief'); }} className="p-1 px-2.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px] text-sky-300 hover:text-sky-200 flex items-center gap-1">
              <Rocket className="w-3 h-3" />
              <span>Deploy</span>
            </button>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed font-sans mt-1 text-[11px] select-text">{selectedProject.description}</p>

        {/* Technical Key Metrics Grid Row */}
        <div className="grid grid-cols-3 gap-2.5">
          {selectedProject.metrics.map((m, idx) => (
            <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-2.5 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky-400/20" />
              <div className="text-[10px] text-zinc-500 capitalize">{m.label}</div>
              <div className="text-xs font-black text-sky-300 mt-1">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3 mt-4 text-[11px]">
          <div className="bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text">
            <span className="font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1">Architecture Pipeline:</span>
            <span className="text-slate-400 leading-relaxed font-sans">{selectedProject.architecture}</span>
          </div>

          <div className="bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text">
            <span className="font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1">Design Problem:</span>
            <span className="text-slate-400 leading-relaxed font-sans">{selectedProject.problem}</span>
          </div>

          <div className="bg-zinc-950/20 border border-zinc-900 rounded-lg p-3 select-text">
            <span className="font-bold text-zinc-200 block text-[10px] uppercase tracking-wide mb-1">Integrated Tech-Stack Matrix:</span>
            <div className="flex flex-wrap gap-1.5 mt-1 select-none">
              {selectedProject.techStack.map((tech) => (
                <span key={tech} className="bg-zinc-900 text-slate-300 border border-zinc-800 rounded px-1.5 py-0.5 text-[9px] font-mono leading-tight">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
