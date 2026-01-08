import React from 'react';
import { motion } from 'framer-motion';
import { useOnboarding } from '../../context/OnboardingContext';
import './HeroClippy.css';

export const HeroClippy: React.FC = () => {
  const { isOnboarding, startOnboarding } = useOnboarding();

  if (isOnboarding) return null;

  return (
    <motion.button
      className="clippy-button"
      onClick={startOnboarding}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      title="Iniciar recorrido guiado"
    >
      <span className="clippy-icon">🚙</span>
    </motion.button>
  );
};
