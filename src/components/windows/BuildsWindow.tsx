import { memo } from 'react';
import { portfolioData } from '../../data/portfolioData';

const BuildsWindow = memo(function BuildsWindow() {
  return (
    <div className="space-y-4">
      <div className="border-b border-[#2c2d3a] pb-2 flex-col gap-0.5">
        <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono">TELEMETRY DIAGNOSTICS</span>
        <h3 className="text-xs font-black text-white mt-1">Continuous Development & Deployment Releases</h3>
      </div>

      <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
        {portfolioData.buildLogs.map((log) => (
          <div key={log.id} className="bg-zinc-950/40 p-3.5 border border-[#2d2f3d] rounded-lg space-y-2 select-text">
            <div className="flex items-center justify-between border-b border-zinc-850 pb-1.5">
              <div className="flex items-center gap-1.5 text-white font-bold">
                <span className="text-teal-400 font-mono text-[9.5px] p-0.5 px-1.5 border border-teal-500/20 bg-teal-500/5 rounded">{log.version}</span>
                <span className="text-[11px] font-sans truncate">{log.title}</span>
              </div>
              <span className="text-[9.5px] text-zinc-500 font-mono">{log.date}</span>
            </div>

            <p className="text-[10.5px] text-slate-400 leading-relaxed font-sans">{log.description}</p>

            <div>
              <span className="font-bold text-zinc-300 block text-[9px] uppercase font-mono tracking-widest mb-1">TASKS DEPLOYED</span>
              <ul className="space-y-1 pl-3 text-[10px] text-zinc-400 list-disc leading-normal font-sans">
                {log.tasksCompleted.map((t, tIdx) => (
                  <li key={tIdx}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="border-t border-zinc-900 pt-1.5">
              <span className="font-bold text-teal-300 block text-[9px] uppercase font-mono tracking-widest mb-1">METRIC SHIFTS DETECTED</span>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono select-none">
                {log.metricsChanged.map((mc, mIdx) => (
                  <span key={mIdx} className="bg-zinc-90 w-full flex items-center justify-between p-1.5 rounded border border-zinc-900 text-stone-300">
                    <span>{mc.metric}:</span>
                    <span className="text-teal-400 font-bold">{mc.before} ➔ {mc.after}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default BuildsWindow;
