import { forwardRef, memo } from 'react';
import { Prompt } from './Prompt';
import { Cursor } from './Cursor';

interface CommandRendererProps {
  prompt: string;
  active: boolean;
}

export const CommandRenderer = memo(forwardRef<HTMLSpanElement, CommandRendererProps>(
  function CommandRenderer({ prompt, active }, ref) {
    return (
      <div className="flex items-baseline font-mono text-[13px] leading-[1.6]">
        <Prompt text={prompt} />
        <span ref={ref} className="text-zinc-100" />
        <Cursor active={active} />
      </div>
    );
  },
));
