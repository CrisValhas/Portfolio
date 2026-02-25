import React, { useState, useEffect, useRef } from 'react';
import { useOnboarding } from '../../context/OnboardingContext';
import { useTheme } from '../../context/ThemeContext';
import './JourneyTimeline.css';

// Mapeo de sectionId a nombre legible
const SECTION_NAMES: Record<string, string> = {
  'home': 'Inicio',
  'projects': 'Proyectos',
  'about': 'Acerca',
  'contact': 'Contacto',
  'skills': 'Habilidades',
  'experience': 'Experiencia',
};

export const JourneyTimeline: React.FC = () => {
  const { isOnboarding, currentStep, steps, goToStep, endOnboarding } = useOnboarding();
  const { theme } = useTheme();
  const [isMinimized, setIsMinimized] = useState(false);
  const lastScrollSectionRef = useRef(-1);
  const panelRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout>();

  // Detectar sección visible por scroll y actualizar el paso del onboarding
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 0;

      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentSection = idx;
        }
      });

      // Solo actualizar si la sección cambió
      if (currentSection !== lastScrollSectionRef.current) {
        lastScrollSectionRef.current = currentSection;

        if (currentSection !== currentStep) {
          goToStep(currentSection);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentStep, goToStep]);

  // Manejar mouse leave del modal
  const handleModalMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsMinimized(true);
    }, 300); // 300ms de espera antes de minimizar
  };

  // Manejar mouse enter del modal
  const handleModalMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
  };

  if (!isOnboarding) return null;

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  // Obtener nombre de la sección o fallback
  const getSectionName = (sectionId: string) => {
    return SECTION_NAMES[sectionId] || sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
  };

  return (
    <div className={`journey-timeline-container ${theme}`}>
      {/* Barra de progreso superior */}
      <div className="journey-progress-bar">
        <div className="journey-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Timeline lateral - siempre visible */}
      <div 
        className="journey-timeline"
        onMouseLeave={() => setIsMinimized(true)}
      >
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsMinimized(false); // Asegurar que el modal esté abierto
              goToStep(idx);
              // Scroll a la sección
              const targetSection = steps[idx].sectionId;
              const section = document.querySelector(`section#${targetSection}`);
              if (section) {
                setTimeout(() => {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
              }
            }}
            className={`journey-timeline-item ${idx <= currentStep ? 'active' : ''} ${
              idx === currentStep ? 'current' : ''
            }`}
            aria-label={`Ir a ${getSectionName(step.sectionId)}`}
            type="button"
          >
            <div className="timeline-dot" />
            <div className="timeline-label">{getSectionName(step.sectionId)}</div>
          </button>
        ))}
      </div>

      {/* Panel minimizado - circular */}
      {isMinimized && (
        <button
          ref={iconRef}
          className="minimized-icon"
          onClick={() => setIsMinimized(false)}
          aria-label="Expandir onboarding"
          title="Click para expandir"
        >
          !
        </button>
      )}

      {/* Panel de contenido central elegante */}
      {!isMinimized && (
        <div
          ref={panelRef}
          className="journey-content-panel"
          onMouseLeave={handleModalMouseLeave}
          onMouseEnter={handleModalMouseEnter}
        >
          <div className="panel-header">
            <span className="step-counter">
              Paso {currentStep + 1} de {steps.length}
            </span>
            <button
              className="close-button"
              onClick={() => setIsMinimized(true)}
              aria-label="Minimizar"
            >
              −
            </button>
          </div>

          <div className="panel-body">
            <h2 className="step-title">{step.title}</h2>
            <p className="step-description">{step.description}</p>
          </div>

          <div className="panel-footer">
            <button
              className="nav-button prev"
              onClick={() => {
                const prevStep = currentStep - 1;
                if (prevStep >= 0) {
                  goToStep(prevStep);
                  const targetSection = steps[prevStep].sectionId;
                  const section = document.querySelector(`section#${targetSection}`);
                  if (section) {
                    setTimeout(() => {
                      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 50);
                  }
                }
              }}
              disabled={currentStep === 0}
              aria-label="Paso anterior"
            >
              ← Anterior
            </button>

            <div className="step-indicators">
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`indicator ${idx === currentStep ? 'active' : ''}`}
                />
              ))}
            </div>

            {currentStep === steps.length - 1 ? (
              <button className="nav-button next finish" onClick={endOnboarding}>
                Finalizar ✓
              </button>
            ) : (
              <button
                className="nav-button next"
                onClick={() => {
                  const nextStepNum = currentStep + 1;
                  if (nextStepNum < steps.length) {
                    goToStep(nextStepNum);
                    const targetSection = steps[nextStepNum].sectionId;
                    const section = document.querySelector(`section#${targetSection}`);
                    if (section) {
                      setTimeout(() => {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 50);
                    }
                  }
                }}
              >
                Siguiente →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
