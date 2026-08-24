import { useEffect, useState } from 'react';
import { StyleSet, GitHubRepo } from '../../types';
import { getApiBaseUrl } from '../../utils/apiConfig';

interface GithubWindowProps {
  styleSet: StyleSet;
  triggerSound: (freq: number, duration: number) => void;
}

export default function GithubWindow({ styleSet }: GithubWindowProps) {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`${getApiBaseUrl()}/api/github-repos`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`GitHub telemetry unavailable (${res.status})`);
        const data = await res.json();
        if (!cancelled) setRepos(Array.isArray(data) ? data : []);
      } catch (err) {
        if (!cancelled && (err as Error).name !== 'AbortError') {
          setError((err as Error).message || 'Failed to load repositories.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  const topRepos = (repos || []).slice(0, 6);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2c2d3a] pb-2">
        <div>
          <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[9px] px-1.5 py-0.5 rounded font-mono uppercase">LIVE GITHUB TELEMETRY</span>
          <h3 className="text-sm font-extrabold text-white mt-1">Repositories — @farhankabir133</h3>
        </div>
        <a
          href="https://github.com/farhankabir133"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-stone-400 font-mono bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded hover:text-sky-300 hover:border-sky-500/40 transition-colors"
        >
          VIEW PROFILE →
        </a>
      </div>

      {loading && (
        <div className="bg-zinc-950/30 p-6 border border-[#2d2f3d] rounded-lg text-center">
          <p className="text-zinc-500 font-mono text-[11px]" role="status" aria-live="polite">
            Synchronizing repository telemetry…
          </p>
        </div>
      )}

      {!loading && error && (
        <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg" role="alert">
          <span className="text-red-400 font-mono text-[10.5px] font-bold block mb-1">TELEMETRY OFFLINE</span>
          <p className="text-zinc-400 text-[11px] leading-relaxed">{error}</p>
          <a
            href="https://github.com/farhankabir133"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sky-300 hover:text-sky-200 text-[10.5px] font-mono underline"
          >
            Open github.com/farhankabir133 directly
          </a>
        </div>
      )}

      {!loading && !error && (
        <div className="bg-zinc-950/30 p-3 border border-[#2d2f3d] rounded-lg">
          <span className="font-bold text-zinc-300 block text-[10px] uppercase tracking-wide mb-2">
            TOP REPOSITORIES BY STARS
          </span>
          {topRepos.length === 0 ? (
            <p className="text-zinc-500 font-mono text-[10.5px]" role="status">
              No public repositories found.
            </p>
          ) : (
            <div className="space-y-1.5 font-mono">
              {topRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-3 p-2 rounded-md hover:bg-zinc-900/60 transition-colors group"
                >
                  <span className="min-w-0">
                    <span className="text-sky-300 group-hover:text-sky-200 text-[11.5px] font-bold block truncate">
                      {repo.name}
                    </span>
                    {repo.description && (
                      <span className="text-zinc-500 text-[10px] line-clamp-1">{repo.description}</span>
                    )}
                    <span className="flex items-center gap-2 mt-0.5 flex-wrap">
                      {repo.language && (
                        <span className="text-[9px] text-purple-300 bg-purple-500/10 border border-purple-500/20 px-1 rounded">
                          {repo.language}
                        </span>
                      )}
                      {(repo.topics || []).slice(0, 3).map((t) => (
                        <span key={t} className="text-[9px] text-zinc-500 bg-zinc-900 border border-zinc-800 px-1 rounded">
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="text-zinc-500 text-[10px] whitespace-nowrap shrink-0 mt-0.5">
                    ★ {repo.stargazers_count} · ⑂ {repo.forks_count}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
