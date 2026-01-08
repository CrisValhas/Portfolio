import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { OnboardingStep } from '../../context/OnboardingContext';
import './JourneyScroll.css';

interface JourneyTooltipProps {
  step: OnboardingStep;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}

export const JourneyTooltip: React.FC<JourneyTooltipProps> = ({
  step,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onClose
}) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {step && (
        <motion.div
          className={`journey-tooltip ${theme}`}
          initial={{ opacity: 0, x: 20, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 20, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="tooltip-header">
            <h4>{step.title}</h4>
            <button
              className="tooltip-close"
              onClick={onClose}
              aria-label="Cerrar recorrido"
            >
              ✕
            </button>
          </div>
          <p>{step.description}</p>
          <div className="tooltip-footer">
            <button
              className={`tooltip-btn ${theme}`}
              onClick={onPrev}
              disabled={currentStep === 0}
            >
              ← Anterior
            </button>
            <span className="tooltip-counter">
              {currentStep + 1} / {totalSteps}
            </span>
            <button
              className={`tooltip-btn ${theme}`}
              onClick={onNext}
            >
              {currentStep === totalSteps - 1 ? 'Finalizar' : 'Siguiente →'}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
