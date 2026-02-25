import React from 'react';
import { motion } from 'framer-motion';
import './AIWorkflow.css';
import { useLang } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { staggerContainerFast, fadeUpItemFast } from '../../styles/animations';

const containerVariants = staggerContainerFast;
const layerVariants = fadeUpItemFast;

export const AIWorkflow: React.FC = () => {
  const { t } = useLang();
  const [ref, inView] = useReveal();

  return (
    <section id="ai" className="section ai-section" aria-labelledby="ai-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label" aria-hidden="true">04</span>
          <h2 id="ai-title" className="section-title">{t.ai.title}</h2>
          <p className="section-sub">{t.ai.subtitle}</p>
        </div>

        <div className="ai__body">
          <p className="ai__description">{t.ai.description}</p>

          <motion.div
            ref={ref}
            className="ai__layers"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            role="list"
          >
            {t.ai.layers.map((layer, i) => (
              <motion.div
                key={i}
                className="ai__layer"
                variants={layerVariants}
                role="listitem"
              >
                <div className="ai__layer-index" aria-hidden="true">{i + 1}</div>
                <div className="ai__layer-content">
                  <div className="ai__layer-phase">{layer.phase}</div>
                  <p className="ai__layer-detail">{layer.detail}</p>
                </div>
                {i < t.ai.layers.length - 1 && (
                  <div className="ai__layer-connector" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
