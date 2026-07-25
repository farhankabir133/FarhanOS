import React, { memo } from 'react';

interface WindowChromeProps {
  winId: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isFocused: boolean;
  onMouseDown: (windowId: string, e: React.MouseEvent) => void;
  onMinimize: (windowId: string) => void;
  onToggleMaximize: (windowId: string) => void;
  onClose: (windowId: string) => void;
  styleSet: {
    windowHeader: string;
  };
  children: React.ReactNode;
}

function WindowChrome({ winId, label, icon: Icon, isFocused, onMouseDown, onMinimize, onToggleMaximize, onClose, styleSet, children }: WindowChromeProps) {
  return (
    <div 
      id={`window-${winId}`}
      className={`flex flex-col rounded-xl overflow-hidden shadow-2xl transition-all duration-150 transform ${styleSet.windowHeader || ''} ${isFocused ? 'ring-2 ring-sky-500/35 scale-[1.002]' : 'opacity-90'} animate-window-open`}
      onClick={() => { onMouseDown(winId, {} as React.MouseEvent); }}
    >
      <div 
        onMouseDown={(e) => onMouseDown(winId, e)}
        className={`h-9 px-3 flex items-center justify-between cursor-move select-none ${styleSet.windowHeader}`}
      >
        <div className="flex items-center gap-2 font-semibold tracking-tight text-xs">
          <Icon className="w-3.5 h-3.5 opacity-80" />
          <span>{label}</span>
          {isFocused && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          )}
        </div>

        <div className="flex items-center gap-2" onMouseDown={(e) => e.stopPropagation()}>
          <button 
            onClick={() => onMinimize(winId)}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10"
            title="Minimize"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
          </button>
          <button 
            onClick={() => onToggleMaximize(winId)}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10"
            title="Toggle Maximize"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          </button>
          <button 
            onClick={() => onClose(winId)}
            className="p-1 text-rose-400 hover:text-rose-500 rounded hover:bg-rose-500/10"
            title="Close Window"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>

      <div 
        className="flex-1 overflow-y-auto p-4 md:p-5 text-xs font-sans scrollbar-thin scrollbar-thumb-zinc-800"
        onScroll={(e) => {
          if (winId === 'profTimeline') {
            const target = e.currentTarget;
            const progress = target.scrollTop / (target.scrollHeight - target.clientHeight || 1);
            const el = document.getElementById('os-timeline-progress');
            if (el) {
              el.style.transform = `scaleY(${progress})`;
            }
          }
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default memo(WindowChrome);
