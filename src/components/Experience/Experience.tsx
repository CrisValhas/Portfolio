import React from 'react';
import './Experience.css';
import { EXPERIENCE } from '../../constants/experience';

export const ExperienceSection: React.FC = () => {

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2>Experiencia Profesional</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== EXPERIENCE.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="content-card">
                  <div className="card-top">
                    <div className="company-info">
                      <h3 className="company-name">{exp.company}</h3>
                      <p className="position">{exp.position}</p>
                    </div>
                    <span className="period">
                      {exp.period.start} - {exp.period.end || 'Presente'}
                    </span>
                  </div>

                  <p className="description">{exp.description}</p>

                  <div className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="achievement-item">
                        <span className="achievement-bullet">•</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="tech-stack">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
