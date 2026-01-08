export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: Technology[];
  demoUrl?: string;
  githubUrl: string;
  imageUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface Technology {
  name: string;
  category: TechCategory;
}

export type TechCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'other';

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: {
    start: string;
    end: string | null;
  };
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'architecture' | 'web3' | 'testing' | 'ai';

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
