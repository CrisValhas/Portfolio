import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FeaturedWork.css';
import { useLang } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { staggerContainer, fadeUpItem } from '../../styles/animations';
import { SantanderDiagram, SimplestateDiagram, ArenaDiagram } from './ArchDiagrams';

const DIAGRAMS: Record<string, React.FC | undefined> = {
  santander: SantanderDiagram,
  simplestate: SimplestateDiagram,
  arena: ArenaDiagram,
};

const containerVariants = staggerContainer;
const cardVariants = fadeUpItem;

export const FeaturedWork: React.FC = () => {
  const { t } = useLang();
  const [ref, inView] = useReveal();
  const [openDiagram, setOpenDiagram] = useState<string | null>(null);

  return (
    <section id="work" className="section work-section" aria-labelledby="work-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label" aria-hidden="true">02</span>
          <h2 id="work-title" className="section-title">{t.work.title}</h2>
          <p className="section-sub">{t.work.subtitle}</p>
        </div>

        <motion.div
          ref={ref}
          className="work__list"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {t.work.cases.map((cs) => {
            const Diagram = DIAGRAMS[cs.id];
            const isOpen = openDiagram === cs.id;

            return (
              <motion.article
                key={cs.id}
                className="work__card card"
                variants={cardVariants}
                aria-labelledby={`case-title-${cs.id}`}
              >
                {/* Card header */}
                <div className="work__card-header">
                  <div>
                    <div className="work__meta">
                      <span className="work__client">{cs.client}</span>
                      <span className="work__sep" aria-hidden="true">·</span>
                      <span className="work__year">{cs.year}</span>
                    </div>
                    <span className="work__tag tech-chip">{cs.tag}</span>
                  </div>
                  <p className="work__role">{cs.role}</p>
                </div>

                {/* Title + summary */}
                <h3 id={`case-title-${cs.id}`} className="work__case-title">{cs.title}</h3>
                <p className="work__summary">{cs.summary}</p>

                {/* Structured detail */}
                <div className="work__detail">
                  <div className="work__detail-block">
                    <span className="work__detail-label">Challenge</span>
                    <p>{cs.challenge}</p>
                  </div>
                  <div className="work__detail-block">
                    <span className="work__detail-label">Approach</span>
                    <p>{cs.approach}</p>
                  </div>
                  <div className="work__detail-block">
                    <span className="work__detail-label">Outcome</span>
                    <p>{cs.outcome}</p>
                  </div>
                </div>

                {/* Tech chips */}
                <div className="work__footer">
                  <div className="work__chips" aria-label={t.work.tech}>
                    {cs.tech.map(tag => (
                      <span key={tag} className="tech-chip">{tag}</span>
                    ))}
                  </div>

                  {/* Diagram toggle */}
                  {Diagram && (
                    <button
                      className="work__diagram-btn btn-outline"
                      onClick={() => setOpenDiagram(isOpen ? null : cs.id)}
                      aria-expanded={isOpen}
                      aria-controls={`diagram-${cs.id}`}
                    >
                      {isOpen ? t.work.hideDiagram : t.work.viewDiagram}
                    </button>
                  )}
                </div>

                {/* Diagram panel */}
                <AnimatePresence>
                  {isOpen && Diagram && (
                    <motion.div
                      id={`diagram-${cs.id}`}
                      className="work__diagram"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      aria-live="polite"
                    >
                      <Diagram />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
