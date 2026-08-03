import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface OneTimeTypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function OneTimeTypewriter({
  text,
  speed = 65,
  className = ''
}: OneTimeTypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isComplete && displayed.length < text.length) {
      const timer = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length + 1)),
        speed
      );
      return () => clearTimeout(timer);
    }
    if (displayed.length === text.length) {
      setIsComplete(true);
    }
  }, [displayed, text, speed, isComplete]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {displayed}
      {!isComplete && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, repeatDelay: 0.15 }}
          className="inline-block w-[0.6ex] h-[0.9em] ml-[0.15rem] bg-current align-middle rounded-sm"
        />
      )}
    </motion.span>
  );
}