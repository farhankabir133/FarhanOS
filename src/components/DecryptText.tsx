import React, { useState, useEffect } from 'react';

interface DecryptTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*-_+=[]{}<>/';

export default function DecryptText({ text, speed = 30, delay = 0, className = '' }: DecryptTextProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let iteration = 0;

    const startAnimation = () => {
      intervalId = setInterval(() => {
        setDisplayText(() =>
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === ' ') return ' ';
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
          setDisplayText(text); // Ensure final resolution is exact
        }

        iteration += 1 / 2; // Resolve half a character per tick (approx 2 ticks per char)
      }, speed);
    };

    if (delay > 0) {
      timeoutId = setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return <span className={className}>{displayText}</span>;
}
