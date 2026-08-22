import { memo, useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { getApiBaseUrl } from '../../utils/apiConfig';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
}

const MOCK_REPOS = [
  { name: 'typerush-cockpit', stars: 184 },
  { name: 'the-ink-home-portal', stars: 142 },
  { name: 'safeside-predictor', stars: 211 },
];

const GitHubWindow = memo(function GitHubWindow({ panelHeader }: { panelHeader: string }) {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${getApiBaseUrl()}/api/github-repos`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data.slice(0, 6));
        } else {
          setFailed(true);
        }
      })
      .catch(() => setFailed(true));
    return () => controller.abort();
  }, []);

  const live = !failed && !!repos && repos.length > 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2">
        <div>
          <span className={`${live ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-sky-500/10 text-sky-400 border-sky-500/20'} text-[9px] px-1.5 py-0.5 rounded font-mono uppercase`}>
            {live ? '● LIVE REPOSITORY TELEMETRY' : 'VIRTUALIZED TELEMETRY STREAM'}
          </span>
          <h3 className="text-sm font-extrabold text-white mt-1">Linguistic & Engineering Pipelines Stream</h3>
        </div>
        <span className="text-[11px] text-stone-400 font-mono bg-zinc-950/60 px-2 py-0.5 border border-zinc-850 rounded">STREAK: 142 DAYS</span>
      </div>

      {/* Interactive Commits Calendar mock-up representing dynamic workloads */}
      <div>
        <span className={panelHeader}>CODE INTEL CLASSIFIER CALENDAR (MOCK-GRID)</span>
        <div className="grid grid-cols-12 lg:grid-cols-24 gap-1 mt-1.5 bg-zinc-950 p-3 border border-zinc-900 rounded-lg">
          {Array.from({ length: 48 }).map((_, i) => {
            const level = i % 7 === 0 ? 'bg-green-500 shadow-[0_0_4px_#22c55e]' : i % 5 === 0 ? 'bg-green-600' : i % 3 === 0 ? 'bg-green-800' : 'bg-zinc-900';
            return (
              <div
                key={i}
                className={`w-3.5 h-3.5 rounded-xs transition-colors hover:scale-110 cursor-pointer ${level}`}
                title={`Telemetry day ${i + 1}: Commits verified`}
              />
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-[11px]">

        {/* Repositories List — live from /api/github-repos, mock fallback */}
        <div className="bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg">
          <span className="font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2">INTELLIGENT SYSTEMS</span>
          {!repos && !failed ? (
            <div className="space-y-2 font-mono animate-pulse">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="h-2.5 w-24 bg-zinc-800 rounded inline-block" />
                  <span className="h-2.5 w-10 bg-zinc-800 rounded inline-block" />
                </div>
              ))}
            </div>
          ) : live ? (
            <div className="space-y-2 font-mono">
              {repos!.map((repo) => (
                <div key={repo.id} className="flex items-center justify-between gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 hover:text-sky-200 hover:underline truncate flex items-center gap-1 min-w-0"
                    title={repo.description || repo.name}
                  >
                    <span className="truncate">{repo.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 shrink-0 opacity-60" />
                  </a>
                  <span className="text-zinc-500 text-[10px] shrink-0">★ {repo.stargazers_count}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 font-mono">
              {MOCK_REPOS.map((repo) => (
                <div key={repo.name} className="flex items-center justify-between">
                  <span className="text-sky-300">{repo.name}</span>
                  <span className="text-zinc-500 text-[10px]">Stars: {repo.stars}</span>
                </div>
              ))}
            </div>
          )}
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
});

export default GitHubWindow;
