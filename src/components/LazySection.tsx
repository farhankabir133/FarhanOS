import { lazy, Suspense, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react';

const SkeletonLine = (props: { width?: string; height?: string }) => (
  <div style={{
    height: props.height || '16px',
    width: props.width || '100%',
    borderRadius: '4px',
    background: 'rgba(113, 113, 122, 0.3)',
    animation: 'pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  }} />
);

const SkeletonGrid = ({ columns }: { columns: number }) => {
  const columnWidth = `calc(100% / ${columns} - 0.75px)`;
  return (
    <div style={{
      display: 'flex',
      gap: '0.75rem',
    }}>
      {Array.from({ length: columns }).map((_, i) => (
        <div
          key={i}
          style={{
            height: '24px',
            width: columnWidth,
            borderRadius: '4px',
            background: 'rgba(113, 113, 122, 0.3)',
            animation: 'pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
      ))}
    </div>
  );
};

interface LazySectionProps<T extends Record<string, any>> {
  loader: () => Promise<{ default: ComponentType<T> }>;
  fallback?: ReactNode;
  rootMargin?: string;
  className?: string;
  props?: T;
}

export function LazySection<T extends Record<string, any>>({
  loader,
  fallback = null,
  rootMargin = '300px',
  className,
  props,
}: LazySectionProps<T>) {
  const [LazyComponent, setLazyComponent] = useState<ComponentType<T> | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (LazyComponent) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLazyComponent(() => lazy(loader));
            observerRef.current?.disconnect();
          }
        });
      },
      { rootMargin }
    );

    if (triggerRef.current) {
      observerRef.current.observe(triggerRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [loader, rootMargin, LazyComponent]);

  if (!LazyComponent) {
    if (fallback === null) {
      return (
        <div ref={triggerRef} className={className}>
          <div className="p-6 md:p-12 space-y-6 max-w-6xl mx-auto">
            <SkeletonLine width="40%" height="24px" />
            <SkeletonGrid columns={3} />
            <SkeletonLine width="80%" height="120px" />
          </div>
        </div>
      );
    }
    return <div ref={triggerRef} className={className}>{fallback}</div>;
  }

  return (
    <div ref={triggerRef} className={className}>
      <Suspense fallback={fallback}>
        <LazyComponent {...(props as T)} />
      </Suspense>
    </div>
  );
}

export function useLazyInView(
  rootMargin: string = '300px'
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView];
}
