import { memo, useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

const TaskbarClock = memo(function TaskbarClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden sm:flex items-center gap-1.5 text-zinc-400 font-mono tracking-wider font-semibold bg-zinc-950/45 border border-zinc-800/40 px-2 py-0.5 rounded select-none">
      <Clock className="w-3.5 h-3.5 text-sky-400" />
      <span>{time || '14:37:33'} (UTC)</span>
    </div>
  );
});

export default TaskbarClock;
