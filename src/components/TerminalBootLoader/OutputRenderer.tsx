import { forwardRef, memo } from 'react';
import { Cursor } from './Cursor';
import type { LineKind } from '../../config/terminalCommands';

interface OutputRendererProps {
  kind: Exclude<LineKind, 'cmd'>;
}

const TONE: Record<Exclude<LineKind, 'cmd'>, string> = {
  out: 'text-zinc-300',
  ok: 'text-emerald-400/90',
  info: 'text-sky-300/90',
};

export const OutputRenderer = memo(forwardRef<HTMLSpanElement, OutputRendererProps>(
  function OutputRenderer({ kind }, ref) {
    return (
      <div className="flex items-baseline pl-0 font-mono text-[13px] leading-[1.6]">
        <span ref={ref} className={TONE[kind]} />
        <Cursor />
      </div>
    );
  },
));
