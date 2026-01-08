import React from 'react';
import './Footer.css';
import { SOCIAL_LINKS, PROFILE } from '../../constants/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Cristian Valtelhas</h3>
            <p>Tech Lead & Full Stack Developer</p>
            <p className="location">{PROFILE.location}</p>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre Mí</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Conecta Conmigo</h4>
            <div className="footer-social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.platform}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Cristian Valtelhas. Todos los derechos reservados.
          </p>
          <p className="made-with">
            Hecho con <span>❤️</span> usando React y TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};
