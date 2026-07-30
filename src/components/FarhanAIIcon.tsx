import React from 'react';

type FarhanAIIconProps = React.SVGProps<SVGSVGElement> & {
  isTerminal?: boolean;
};

export function FarhanAIIcon({ className = '', width = 64, height = 64, isTerminal = false, ...props }: FarhanAIIconProps) {
  const accent = isTerminal ? '#39ff14' : '#818cf8';
  const accentSoft = isTerminal ? 'rgba(57,255,20,0.12)' : 'rgba(129,140,248,0.12)';
  const accentBright = isTerminal ? '#39ff14' : '#eef2ff';
  const emerald = '#34d399';
  const stroke = isTerminal ? 'rgba(57,255,20,0.85)' : 'rgba(226,232,255,0.9)';

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="fa-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentSoft} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <filter id="fa-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="fa-glow-sm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="fa-stem" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accentBright} />
          <stop offset="100%" stopColor={accent} />
        </linearGradient>
        <linearGradient id="fa-outline-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={emerald} />
        </linearGradient>
      </defs>

      <circle cx="32" cy="32" r="31" fill="url(#fa-bg)" />

      <rect
        x="12"
        y="12"
        width="40"
        height="40"
        rx="12"
        stroke="url(#fa-outline-gradient)"
        strokeWidth="1.2"
        opacity="0.25"
      />

      <path
        d="M28 16 L28 48"
        stroke="url(#fa-stem)"
        strokeWidth="3.2"
        strokeLinecap="round"
        filter="url(#fa-glow-sm)"
        opacity="0.95"
      />

      <path
        d="M28 16 L44 22"
        stroke="url(#fa-stem)"
        strokeWidth="2.8"
        strokeLinecap="round"
        filter="url(#fa-glow-sm)"
        opacity="0.9"
      />

      <path
        d="M28 32 L40 36"
        stroke="url(#fa-stem)"
        strokeWidth="2.4"
        strokeLinecap="round"
        filter="url(#fa-glow-sm)"
        opacity="0.85"
      />

      <circle cx="28" cy="16" r="3.2" fill={accentBright} filter="url(#fa-glow-sm)" />
      <circle cx="28" cy="16" r="1.4" fill={accent} />

      <circle cx="44" cy="22" r="2.8" fill={accentBright} filter="url(#fa-glow-sm)" opacity="0.95" />
      <circle cx="44" cy="22" r="1.2" fill={accent} />

      <circle cx="28" cy="32" r="2.4" fill={emerald} filter="url(#fa-glow-sm)" opacity="0.95" />
      <circle cx="28" cy="32" r="1" fill={accentBright} />

      <circle cx="40" cy="36" r="2.4" fill={accentBright} filter="url(#fa-glow-sm)" opacity="0.9" />
      <circle cx="40" cy="36" r="1" fill={accent} />

      <circle cx="28" cy="48" r="3" fill={accent} filter="url(#fa-glow-sm)" opacity="0.9" />
      <circle cx="28" cy="48" r="1.2" fill={accentBright} />

      <circle cx="32" cy="24" r="1.4" fill={accentBright} filter="url(#fa-glow-sm)" opacity="0.9" />
      <circle cx="34" cy="40" r="1.2" fill={emerald} filter="url(#fa-glow-sm)" opacity="0.8" />
    </svg>
  );
}
