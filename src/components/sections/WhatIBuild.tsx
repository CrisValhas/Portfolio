import React from 'react';
import { motion } from 'framer-motion';
import './WhatIBuild.css';
import { useLang } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { staggerContainer, fadeUpItem } from '../../styles/animations';

const ArchIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="6" height="6" rx="1"/>
    <rect x="9" y="3" width="6" height="6" rx="1"/>
    <rect x="16" y="3" width="6" height="6" rx="1"/>
    <rect x="5" y="15" width="6" height="6" rx="1"/>
    <rect x="13" y="15" width="6" height="6" rx="1"/>
    <line x1="5" y1="9" x2="5" y2="15"/>
    <line x1="16" y1="9" x2="16" y2="12"/>
    <line x1="16" y1="12" x2="13" y2="15"/>
    <line x1="8" y1="9" x2="8" y2="12"/>
    <line x1="8" y1="12" x2="8" y2="15"/>
  </svg>
);

const BffIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="8" width="6" height="8" rx="1"/>
    <rect x="9" y="5" width="6" height="14" rx="1"/>
    <rect x="17" y="8" width="6" height="8" rx="1"/>
    <line x1="7" y1="12" x2="9" y2="12"/>
    <line x1="15" y1="12" x2="17" y2="12"/>
  </svg>
);

const AiIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
  </svg>
);

const ICONS: Record<string, React.FC> = {
  arch: ArchIcon,
  bff: BffIcon,
  ai: AiIcon,
};

const containerVariants = staggerContainer;
const cardVariants = fadeUpItem;

export const WhatIBuild: React.FC = () => {
  const { t } = useLang();
  const [ref, inView] = useReveal();

  return (
    <section id="what" className="section what-section" aria-labelledby="what-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label" aria-hidden="true">01</span>
          <h2 id="what-title" className="section-title">{t.what.title}</h2>
          <p className="section-sub">{t.what.subtitle}</p>
        </div>

        <motion.div
          ref={ref}
          className="what__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {t.what.pillars.map((pillar) => {
            const Icon = ICONS[pillar.icon];
            return (
              <motion.article
                key={pillar.icon}
                className="card what__card"
                variants={cardVariants}
                aria-label={pillar.title}
              >
                <div className="what__icon" aria-hidden="true">
                  {Icon && <Icon />}
                </div>
                <h3 className="what__card-title">{pillar.title}</h3>
                <p className="what__card-body">{pillar.body}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
