import React from 'react';
import { motion } from 'framer-motion';
import './Delivery.css';
import { useLang } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { staggerContainer, fadeUpItem } from '../../styles/animations';

const containerVariants = staggerContainer;
const cardVariants = fadeUpItem;

export const Delivery: React.FC = () => {
  const { t } = useLang();
  const [ref, inView] = useReveal();

  return (
    <section id="delivery" className="section delivery-section" aria-labelledby="delivery-title">
      <div className="container">
        <div className="section-header">
          <span className="section-label" aria-hidden="true">05</span>
          <h2 id="delivery-title" className="section-title">{t.delivery.title}</h2>
          <p className="section-sub">{t.delivery.subtitle}</p>
        </div>

        <motion.div
          ref={ref}
          className="delivery__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {t.delivery.points.map((point, i) => (
            <motion.article
              key={i}
              className="card delivery__card"
              variants={cardVariants}
            >
              <div className="delivery__card-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="delivery__card-title">{point.title}</h3>
              <p className="delivery__card-body">{point.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
