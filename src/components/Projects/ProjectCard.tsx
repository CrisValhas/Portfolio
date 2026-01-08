import React from 'react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

// SVG placeholder en base64 para evitar errores 404
const PLACEHOLDER_SVG = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e0e0e0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="%23999" text-anchor="middle" dy=".3em"%3EImagen no disponible%3C/text%3E%3C/svg%3E';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageSrc, setImageSrc] = React.useState<string>(project.imageUrl);

  const handleImageError = () => {
    setImageSrc(PLACEHOLDER_SVG);
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={imageSrc}
          alt={project.title}
          className="project-image"
          onError={handleImageError}
        />
        <div className="project-overlay">
          <div className="project-links">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link demo"
              title="Ver demo"
            >
              Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link code"
              title="Ver código"
            >
              Código
            </a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>

        <div className="project-highlights">
          {project.highlights.map((highlight, index) => (
            <span key={index} className="highlight">
              {highlight}
            </span>
          ))}
        </div>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech.name} className={`tech-badge ${tech.category}`}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
