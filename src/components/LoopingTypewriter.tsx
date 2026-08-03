import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface LoopingTypewriterProps {
  text: string;
  speed?: number;
  holdTime?: number;
  loopDelay?: number;
  className?: string;
}

export default function LoopingTypewriter({
  text,
  speed = 65,
  holdTime = 2000,
  loopDelay = 400,
  className = ''
}: LoopingTypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!isComplete && displayed.length < text.length) {
      timeoutId = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length + 1)),
        speed
      );
    } else if (displayed.length === text.length && !isLooping) {
      setIsComplete(true);
      timeoutId = setTimeout(() => {
        setIsLooping(true);
        setDisplayed('');
      }, holdTime);
    } else if (isLooping && displayed.length < text.length) {
      timeoutId = setTimeout(
        () => setDisplayed(text.slice(0, displayed.length + 1)),
        speed
      );
    }

    return () => clearTimeout(timeoutId);
  }, [displayed, text, speed, isComplete, isLooping, holdTime]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {displayed}
      {(!isComplete || isLooping) && (
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