import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Returns [ref, inView] — triggers once when the element enters the viewport.
 * Used for section reveal animations.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return [ref, inView] as const;
}
