import React from 'react';
import { motion } from 'framer-motion';
import './Philosophy.css';
import { useLang } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { staggerContainer, fadeLeftItem } from '../../styles/animations';

const containerVariants = staggerContainer;
const itemVariants = fadeLeftItem;

export const Philosophy: React.FC = () => {
  const { t } = useLang();
  const [ref, inView] = useReveal();

  return (
    <section id="philosophy" className="section philosophy-section" aria-labelledby="philosophy-title">
      <div className="container">
        <div className="philosophy__inner">
          <div className="philosophy__lead">
            <span className="section-label" aria-hidden="true">03</span>
            <h2 id="philosophy-title" className="section-title">{t.philosophy.title}</h2>
            <p className="section-sub">{t.philosophy.subtitle}</p>
          </div>

          <motion.div
            ref={ref}
            className="philosophy__list"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            role="list"
          >
            {t.philosophy.principles.map((p, i) => (
              <motion.div
                key={i}
                className="philosophy__item"
                variants={itemVariants}
                role="listitem"
              >
                <div className="philosophy__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="philosophy__item-title">{p.title}</h3>
                  <p className="philosophy__item-body">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
