import React from 'react';
import './Projects.css';
import { PROJECTS } from '../../constants/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2>Proyectos Destacados</h2>
          <div className="section-divider"></div>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <div className="section-divider-small"></div>
            <h3 className="other-projects-title">Otros Proyectos</h3>
            <div className="projects-grid-small">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
