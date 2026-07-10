import { forwardRef } from 'react';
import { Prompt } from './Prompt';
import { Cursor } from './Cursor';

interface CommandRendererProps {
  prompt: string;
  active: boolean;
}

/**
 * A single command line. The typed text is written imperatively into the
 * forwarded `<span>` by the typing engine, so this component never re-renders
 * per character.
 */
export const CommandRenderer = forwardRef<HTMLSpanElement, CommandRendererProps>(
  function CommandRenderer({ prompt, active }, ref) {
    return (
      <div className="flex items-baseline font-mono text-[13px] leading-[1.6]">
        <Prompt text={prompt} />
        <span ref={ref} className="text-zinc-100" />
        <Cursor active={active} />
      </div>
    );
  },
);
