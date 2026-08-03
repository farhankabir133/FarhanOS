import { lazy, Suspense, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react';

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
