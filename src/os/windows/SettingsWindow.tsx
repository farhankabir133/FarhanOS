import { Volume2, VolumeX, Palette, Image, RotateCcw, Trash2 } from 'lucide-react';
import { StyleSet } from '../../types';

interface SettingsWindowProps {
  styleSet: StyleSet;
  muted: boolean;
  onToggleMute: () => void;
  accent: string | null;
  onAccentChange: (hex: string | null) => void;
  wallpaper: string | null;
  onWallpaperChange: (url: string | null) => void;
  onResetLayout: () => void;
  onResetAll: () => void;
}

const PRESET_ACCENTS = ['#38bdf8', '#a855f7', '#34d399', '#f97316', '#f43f5e', '#eab308'];

export default function SettingsWindow({
  styleSet,
  muted,
  onToggleMute,
  accent,
  onAccentChange,
  wallpaper,
  onWallpaperChange,
  onResetLayout,
  onResetAll,
}: SettingsWindowProps) {
  return (
    <div className="h-full overflow-y-auto scrollbar-none pr-1 space-y-5 text-slate-200">
      <p className="text-[11px] leading-relaxed text-zinc-400">
        Personalize your FarhanOS session. Your preferences are saved to this device and restored on your next visit.
      </p>

      {/* Sound */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          {muted ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
          <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400">Sound</h3>
        </div>
        <button
          onClick={onToggleMute}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl border text-[11px] font-mono transition-colors cursor-pointer ${
            muted ? 'border-zinc-800 bg-zinc-950/40 text-zinc-500' : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
          }`}
        >
          <span>UI Sound Effects</span>
          <span>{muted ? 'MUTED' : 'ENABLED'}</span>
        </button>
      </section>

      {/* Accent */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <Palette className="w-4 h-4 text-purple-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400">Accent Color</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {PRESET_ACCENTS.map((c) => (
            <button
              key={c}
              onClick={() => onAccentChange(c)}
              aria-label={`Set accent ${c}`}
              className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 cursor-pointer ${
                accent === c ? 'border-white scale-110' : 'border-zinc-700'
              }`}
              style={{ background: c }}
            />
          ))}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="color"
              value={accent ?? '#38bdf8'}
              onChange={(e) => onAccentChange(e.target.value)}
              className="w-7 h-7 rounded-full border-2 border-zinc-700 bg-transparent cursor-pointer p-0"
              aria-label="Custom accent color"
            />
            <span className="text-[10px] font-mono text-zinc-500">Custom</span>
          </label>
          {accent && (
            <button onClick={() => onAccentChange(null)} className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 underline cursor-pointer">
              reset
            </button>
          )}
        </div>
      </section>

      {/* Wallpaper */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <Image className="w-4 h-4 text-amber-400" />
          <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400">Wallpaper</h3>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={wallpaper ?? ''}
            onChange={(e) => onWallpaperChange(e.target.value.trim() || null)}
            placeholder="Paste an image URL…"
            className="flex-1 bg-black/60 border border-zinc-800 rounded-lg py-2 px-3 text-[11px] text-slate-100 placeholder-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          />
          {wallpaper && (
            <button
              onClick={() => onWallpaperChange(null)}
              className="px-3 rounded-lg border border-zinc-800 text-[10px] font-mono text-zinc-400 hover:text-white cursor-pointer"
            >
              clear
            </button>
          )}
        </div>
        {wallpaper && (
          <div className="mt-2 h-20 rounded-xl border border-zinc-800 bg-cover bg-center" style={{ backgroundImage: `url(${wallpaper})` }} />
        )}
      </section>

      {/* Reset */}
      <section className="pt-1 border-t border-zinc-800/60 space-y-2">
        <button
          onClick={onResetLayout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/40 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-zinc-700 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Window Layout
        </button>
        <button
          onClick={onResetAll}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-[11px] font-mono text-rose-300 hover:bg-rose-500/20 cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Reset All Preferences
        </button>
      </section>
    </div>
  );
}
