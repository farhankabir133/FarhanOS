import React from 'react';

type AssistantGlyphProps = React.SVGProps<SVGSVGElement> & {
  state?: 'idle' | 'thinking' | 'responding' | 'success' | 'error';
  size?: number;
};

export function AssistantGlyph({ state = 'idle', size = 64, className = '', ...props }: AssistantGlyphProps) {
  const stateClass = state !== 'idle' ? `glyph-${state}` : '';

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
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="glyph-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        {/* Outer octagonal frame */}
        <path d="M 32 17 L 42.1 21.9 L 47 32 L 42.1 42.1 L 32 47 L 21.9 42.1 L 17 32 L 21.9 21.9 Z" />

        {/* Central diamond */}
        <path d="M 32 25 L 39 32 L 32 39 L 25 32 Z" strokeWidth="1.5" />

        {/* Radiating connector lines */}
        <line x1="32" y1="25" x2="32" y2="17" />
        <line x1="39" y1="32" x2="47" y2="32" />
        <line x1="32" y1="39" x2="32" y2="47" />
        <line x1="25" y1="32" x2="17" y2="32" />
      </g>

      {/* Neural nodes - outer */}
      <circle cx="32" cy="17" r="1.8" fill="currentColor" className="glyph-node" />
      <circle cx="47" cy="32" r="1.8" fill="currentColor" className="glyph-node" />
      <circle cx="32" cy="47" r="1.8" fill="currentColor" className="glyph-node" />
      <circle cx="17" cy="32" r="1.8" fill="currentColor" className="glyph-node" />

      {/* Neural nodes - inner diamond vertices */}
      <circle cx="32" cy="25" r="1.5" fill="currentColor" className="glyph-node-inner" />
      <circle cx="39" cy="32" r="1.5" fill="currentColor" className="glyph-node-inner" />
      <circle cx="32" cy="39" r="1.5" fill="currentColor" className="glyph-node-inner" />
      <circle cx="25" cy="32" r="1.5" fill="currentColor" className="glyph-node-inner" />

      {/* Core */}
      <circle cx="32" cy="32" r="2.2" fill="currentColor" className="glyph-core" filter="url(#glyph-glow)" />

      {/* Subtle inner accents */}
      <path d="M 29 29 L 35 35" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <path d="M 35 29 L 29 35" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}
