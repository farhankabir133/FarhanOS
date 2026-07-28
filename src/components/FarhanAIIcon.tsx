import React from 'react';

type FarhanAIIconProps = React.SVGProps<SVGSVGElement> & {
  isTerminal?: boolean;
};

export function FarhanAIIcon({ className = '', width = 64, height = 64, isTerminal = false, ...props }: FarhanAIIconProps) {
  const accent = isTerminal ? '#33ff33' : '#6366f1';
  const accentSoft = isTerminal ? 'rgba(51,255,51,0.15)' : 'rgba(99,102,241,0.15)';
  const emerald = '#34d399';

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
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#fa-bg)" stroke={accent} strokeWidth="1.5" opacity="0.9" />
      <path
        d="M22 20L22 44L36 44L36 34L44 34L44 44L52 44"
        stroke={accent}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#fa-glow)"
      />
      <circle cx="22" cy="20" r="3" fill={emerald} filter="url(#fa-glow)" />
      <circle cx="22" cy="44" r="2.5" fill={accent} filter="url(#fa-glow)" />
      <circle cx="36" cy="44" r="2.5" fill={accent} filter="url(#fa-glow)" />
      <circle cx="36" cy="34" r="2.5" fill={accent} filter="url(#fa-glow)" />
      <circle cx="44" cy="34" r="2.5" fill={accent} filter="url(#fa-glow)" />
      <circle cx="52" cy="44" r="2.5" fill={accent} filter="url(#fa-glow)" />
      <path
        d="M18 14L18 10M46 14L46 10M18 50L18 54M46 50L46 54"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M10 22L6 22M10 42L6 42M54 22L58 22M54 42L58 42"
        stroke={emerald}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
