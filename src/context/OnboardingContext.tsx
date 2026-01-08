import React, { createContext, useContext, useState } from 'react';

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  sectionId: string;
}

interface OnboardingContextType {
  isOnboarding: boolean;
  showTooltip: boolean;
  currentStep: number;
  startOnboarding: () => void;
  endOnboarding: () => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  steps: OnboardingStep[];
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

const DEFAULT_STEPS: OnboardingStep[] = [
  {
    id: 'hero',
    title: 'Bienvenido',
    description: 'Aquí empieza tu recorrido. Conoce un poco sobre mí y mi profesión.',
    sectionId: 'home'
  },
  {
    id: 'about',
    title: 'Sobre Mí',
    description: 'Descubre mis habilidades, experiencia y lo que me define como ingeniero.',
    sectionId: 'about'
  },
  {
    id: 'experience',
    title: 'Experiencia',
    description: 'Explora mi trayectoria laboral y las empresas en las que he trabajado.',
    sectionId: 'experience'
  },
  {
    id: 'skills',
    title: 'Habilidades',
    description: 'Conoce las tecnologías y herramientas que domino.',
    sectionId: 'skills'
  },
  {
    id: 'projects',
    title: 'Proyectos',
    description: 'Revisa los proyectos destacados que he desarrollado.',
    sectionId: 'projects'
  },
  {
    id: 'contact',
    title: 'Contacto',
    description: '¡Vamos a conectar! Aquí puedes ponerte en contacto conmigo.',
    sectionId: 'contact'
  }
];

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  const startOnboarding = () => {
    setIsOnboarding(true);
    setCurrentStep(0);
    setShowTooltip(true);
  };

  const endOnboarding = () => {
    setIsOnboarding(false);
    setShowTooltip(false);
  };

  const nextStep = () => {
    if (currentStep < DEFAULT_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
      setShowTooltip(true);
      // Scroll a la siguiente sección
      setTimeout(() => {
        const nextSectionId = DEFAULT_STEPS[currentStep + 1]?.sectionId;
        if (nextSectionId) {
          const element = document.getElementById(nextSectionId);
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      endOnboarding();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setShowTooltip(true);
      // Scroll a la sección anterior
      setTimeout(() => {
        const prevSectionId = DEFAULT_STEPS[currentStep - 1]?.sectionId;
        if (prevSectionId) {
          const element = document.getElementById(prevSectionId);
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < DEFAULT_STEPS.length) {
      setCurrentStep(step);
      setShowTooltip(true);
    }
  };

  return (
    <OnboardingContext.Provider value={{
      isOnboarding,
      showTooltip,
      currentStep,
      startOnboarding,
      endOnboarding,
      nextStep,
      prevStep,
      goToStep,
      steps: DEFAULT_STEPS
    }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
};
