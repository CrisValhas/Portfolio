import React from 'react';
import './About.css';

export const About: React.FC = () => {

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>Sobre Mí</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador full stack apasionado por crear soluciones de software
              elegantes y eficientes. Con experiencia en arquitectura de aplicaciones escalables,
              me especializo en JavaScript/TypeScript, React y Node.js.
            </p>
            <p>
              A lo largo de mi carrera, he trabajado en proyectos desafiantes que me han permitido
              desarrollar expertise en diferentes áreas: desde frontend interactivo hasta backend
              robusto y bases de datos optimizadas.
            </p>
            <p>
              Creo firmemente en las buenas prácticas de código, la documentación clara y la
              colaboración efectiva. Como Tech Lead, disfruto mentorando a otros desarrolladores
              y ayudando a establecer estándares técnicos de calidad.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <span>Performance & Optimización</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏗️</span>
                <span>Arquitectura Escalable</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔒</span>
                <span>Código Seguro & Limpio</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">👥</span>
                <span>Liderazgo Técnico</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Tecnologías</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedicación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
