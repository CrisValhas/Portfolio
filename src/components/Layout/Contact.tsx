import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { useLang } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { fadeUpWithDelay } from '../../styles/animations';

const EMAIL = 'cristianrubiles@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/cristian-valtelhas-software-engineer/';
const GITHUB = 'https://github.com/CrisValhas';

const fadeUp = fadeUpWithDelay;

export const Contact: React.FC = () => {
  const { t } = useLang();
  const [ref, inView] = useReveal();

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact__inner"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div custom={0} variants={fadeUp}>
            <span className="section-label" aria-hidden="true">06</span>
            <h2 id="contact-title" className="section-title">{t.contact.title}</h2>
            <p className="section-sub">{t.contact.subtitle}</p>
          </motion.div>

          <motion.div custom={0.15} variants={fadeUp} className="contact__location">
            <span className="contact__location-icon" aria-hidden="true">📍</span>
            {t.contact.location}
          </motion.div>

          {/* CV Downloads */}
          <motion.div custom={0.25} variants={fadeUp} className="contact__cv">
            <a href="/cv-en.pdf" download className="btn-primary contact__cv-btn" aria-label="Download CV in English">
              <DownloadIcon />{t.contact.cvEn}
            </a>
            <a href="/cv-es.pdf" download className="btn-outline contact__cv-btn" aria-label="Descargar CV en Español">
              <DownloadIcon />{t.contact.cvEs}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div custom={0.35} variants={fadeUp} className="contact__links">
            <a href={`mailto:${EMAIL}`} className="contact__link" aria-label="Send email">
              <EmailIcon /><span>{t.contact.email}</span>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact__link" aria-label="LinkedIn profile">
              <LinkedinIcon /><span>{t.contact.linkedin}</span>
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="contact__link" aria-label="GitHub profile">
              <GithubIcon /><span>{t.contact.github}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);