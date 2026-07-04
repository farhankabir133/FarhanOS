import { useInView } from 'motion/react';
import { RefObject } from 'react';
import { fadeUp, staggerContainer, staggerItem, slideInLeft, slideInRight, scaleIn } from '../lib/motion-variants';

export type ScrollRevealPreset = 'fade-up' | 'stagger' | 'scale-in' | 'slide-left' | 'slide-right';

export function useScrollReveal(
  ref: RefObject<Element>,
  preset: ScrollRevealPreset = 'fade-up',
  options?: {
    margin?: `${number}%` | `${number}px` | `${number} ${number}%`;
    amount?: number;
  }
) {
  const { margin = '-20%', amount = 0.1 } = options || {};

  const inView = useInView(ref, {
    margin: margin as any,
    amount,
  });

  const getVariants = () => {
    switch (preset) {
      case 'fade-up':
        return fadeUp;
      case 'stagger':
        return staggerContainer;
      case 'scale-in':
        return scaleIn;
      case 'slide-left':
        return slideInLeft;
      case 'slide-right':
        return slideInRight;
      default:
        return fadeUp;
    }
  };

  const getInitial = () => {
    switch (preset) {
      case 'stagger':
        return 'hidden';
      default:
        return 'hidden';
    }
  };

  const getWhileInView = () => {
    switch (preset) {
      case 'stagger':
        return 'visible';
      default:
        return inView ? 'visible' : 'hidden';
    }
  };

  return {
    inView,
    variants: getVariants(),
    initial: getInitial(),
    whileInView: getWhileInView(),
  };
}

export { fadeUp, staggerContainer, staggerItem, slideInLeft, slideInRight, scaleIn };