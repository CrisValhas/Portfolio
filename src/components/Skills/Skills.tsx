import React from 'react';
import './Skills.css';
import { SKILLS } from '../../constants/skills';

export const SkillsSection: React.FC = () => {

  const categories = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Data' },
    { key: 'devops', label: 'Infra' },
    { key: 'architecture', label: 'Architecture' },
    { key: 'web3', label: 'Web3 & Fintech' },
    { key: 'testing', label: 'Testing' },
    { key: 'ai', label: 'IA' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2>Habilidades Técnicas</h2>
          <div className="section-divider"></div>
        </div>

        <div className="skills-grid">
          {categories.map((category) => {
            const categorySkills = SKILLS.filter(
              (skill) => skill.category === category.key
            );

            return (
              <div key={category.key} className="skill-category">
                <h3 className="category-title">{category.label}</h3>
                <div className="skills-list">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className={`skill-level ${skill.proficiency}`}>
                          {getProficiencyLabel(skill.proficiency)}
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: `${getProficiencyPercentage(skill.proficiency)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

function getProficiencyLabel(level: string): string {
  const labels: Record<string, string> = {
    beginner: 'Básico',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
    expert: 'Experto',
  };
  return labels[level] || level;
}

function getProficiencyPercentage(level: string): number {
  const percentages: Record<string, number> = {
    beginner: 40,
    intermediate: 60,
    advanced: 85,
    expert: 100,
  };
  return percentages[level] || 0;
}
