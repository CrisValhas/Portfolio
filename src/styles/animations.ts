import type { Variants } from 'framer-motion';

// Cubic bezier easing for premium feel
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Stagger container — use with children that have any item variant */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/** Fade up — standard section card animation */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export const fadeUpItemFast: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

/** Fade in from left */
export const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
};

/** Fade up with custom delay (via `custom` prop) */
export const fadeUpWithDelay: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease, delay: d as number },
  }),
};
