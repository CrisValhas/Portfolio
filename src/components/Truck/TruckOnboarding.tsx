import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnboarding } from '../../context/OnboardingContext';
import { useTheme } from '../../context/ThemeContext';
import { Peugeot3D } from './Peugeot3D';
import './TruckOnboarding.css';

export const TruckOnboarding: React.FC = () => {
  const { isOnboarding, showTooltip, currentStep, nextStep, prevStep, endOnboarding, steps } = useOnboarding();
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!isOnboarding) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOnboarding]);

  if (!isOnboarding) return null;

  const step = steps[currentStep];

  return (
    <>
      {/* Camino de puntos en el lado derecho */}
      <div className="journey-path">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`journey-dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
            animate={{
              scale: index === currentStep ? 1.2 : 1,
            }}
            onClick={() => {
              // Click to navigate to section
              setTimeout(() => {
                const element = document.getElementById(step.sectionId);
                element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }, 50);
            }}
            title={step.title}
          />
        ))}
        <motion.div
          className="journey-line"
          animate={{ height: `${scrollProgress * 100}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
      </div>

      {/* Camioneta 3D en el camino */}
      <motion.div
        className="truck-journey-marker"
        animate={{
          top: `calc(50% + ${(scrollProgress - 0.5) * 300}px)`,
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 12 }}
      >
        <div className="truck-3d-container">
          <Peugeot3D autoRotate={false} />
        </div>
      </motion.div>

      {/* Tooltip con información de la sección */}
      <AnimatePresence>
        {showTooltip && step && (
          <motion.div
            className={`truck-tooltip ${theme}`}
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 20, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="tooltip-header">
              <h4>{step.title}</h4>
              <button
                className="tooltip-close"
                onClick={endOnboarding}
                aria-label="Cerrar recorrido"
              >
                ✕
              </button>
            </div>
            <p>{step.description}</p>
            <div className="tooltip-footer">
              <button
                className={`tooltip-btn ${theme}`}
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                ← Anterior
              </button>
              <span className="tooltip-counter">
                {currentStep + 1} / {steps.length}
              </span>
              <button
                className={`tooltip-btn ${theme}`}
                onClick={nextStep}
              >
                {currentStep === steps.length - 1 ? 'Finalizar' : 'Siguiente →'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
