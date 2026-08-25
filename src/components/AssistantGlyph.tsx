import React from 'react';

type AssistantGlyphProps = React.SVGProps<SVGSVGElement> & {
  state?: 'idle' | 'thinking' | 'responding' | 'success' | 'error';
  size?: number;
};

/**
 * Farhan's Personal Assistant mark — a custom "orbit F" monogram.
 * A calligraphic F enclosed by an orbital ring whose top-right gap hosts
 * a four-point spark (the animated core). Class hooks (`glyph-core`,
 * `glyph-node`, `glyph-node-inner`) are consumed by index.css state
 * animations and must not be renamed.
 */
export function AssistantGlyph({ state = 'idle', size = 64, className = '', ...props }: AssistantGlyphProps) {
  const stateClass = state !== 'idle' ? `glyph-${state}` : 'glyph-idle';

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      width={size}
      height={size}
      className={`${className} ${stateClass}`}
      {...props}
    >
      <defs>
        <filter id="glyph-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="glyph-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Orbital ring — opens at the top-right to cradle the spark */}
      <path
        d="M 52.7 28.4 A 21 21 0 1 1 35.6 11.3"
        stroke="url(#glyph-gradient)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Counterweight accent arc, bottom-left */}
      <path
        d="M 21.4 54.6 A 25 25 0 0 1 9.3 21.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Monogram: hooked-stroke F */}
      <g
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      >
        <path d="M24.5 18.5 V42 Q24.5 46.5 29.5 46.5" />
        <path d="M24.5 18.5 H38.5" />
        <path d="M24.5 31.5 H33.5" />
      </g>

      {/* Nodes at the ring termini */}
      <circle cx="35.6" cy="11.3" r="1.8" fill="currentColor" className="glyph-node" />
      <circle cx="52.7" cy="28.4" r="1.5" fill="currentColor" className="glyph-node-inner" />

      {/* Four-point spark — the living core of the mark */}
      <path
        d="M46.9 10.75 Q46.9 17.15 53.3 17.15 Q46.9 17.15 46.9 23.55 Q46.9 17.15 40.5 17.15 Q46.9 17.15 46.9 10.75 Z"
        fill="currentColor"
        className="glyph-core"
        filter="url(#glyph-glow)"
      />
    </svg>
  );
}
