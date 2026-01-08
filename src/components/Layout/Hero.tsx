import React from 'react';
import './Hero.css';
import { PROFILE, SOCIAL_LINKS } from '../../constants/profile';
import { useOnboarding } from '../../context/OnboardingContext';
import { HeroClippy } from '../Truck/HeroClippy';
import { NeuralNetwork } from './NeuralNetwork';

export const Hero: React.FC = () => {
  const { startOnboarding } = useOnboarding();

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Columna Izquierda - Contenido */}
        <div className="hero-left">
          <div className="hero-content">
            {PROFILE.profileImage && (
              <div className="hero-profile-image">
                <img 
                  src={`${PROFILE.profileImage}?v=${new Date().getTime()}`}
                  alt={PROFILE.name}
                  className="profile-img"
                />
              </div>
            )}
            <h1 className="hero-title">
              {PROFILE.name}
            </h1>
            <h2 className="hero-subtitle">
              {PROFILE.title}
            </h2>
            <p className="hero-description">
              {PROFILE.summary}
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                📧 Contactame
              </a>
              <a href="#projects" className="btn btn-secondary">
                Ver Proyectos
              </a>
            </div>

            <div className="hero-social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.platform}
                >
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-accent">
            <div className="accent-shape accent-1"></div>
            <div className="accent-shape accent-2"></div>
            <div className="accent-shape accent-3"></div>
            <HeroClippy />
          </div>
        </div>

        {/* Columna Derecha - Neural Network CTA */}
        <div className="hero-right">
          <NeuralNetwork onClick={startOnboarding} />
        </div>
      </div>
    </section>
  );
};
