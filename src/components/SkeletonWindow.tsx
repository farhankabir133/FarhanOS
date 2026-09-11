interface SkeletonWindowProps {
  lines?: number;
  className?: string;
}

export default function SkeletonWindow({ lines = 5, className = '' }: SkeletonWindowProps) {
  return (
    <div className={`p-4 space-y-3 ${className}`} role="status" aria-label="Loading...">
      <div className="h-3 bg-zinc-800/60 rounded-full w-1/3 animate-pulse" />
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-2.5 bg-zinc-800/40 rounded-full animate-pulse"
            style={{ width: `${60 + Math.random() * 35}%`, animationDelay: `${i * 0.08}s` }}
          />
        ))}
      </div>
      <div className="flex gap-2 pt-2">
        <div className="h-6 w-16 bg-zinc-800/50 rounded animate-pulse" />
        <div className="h-6 w-20 bg-zinc-800/50 rounded animate-pulse" />
        <div className="h-6 w-14 bg-zinc-800/50 rounded animate-pulse" />
      </div>
      <span className="sr-only">Loading content...</span>
    </div>
  );
}
