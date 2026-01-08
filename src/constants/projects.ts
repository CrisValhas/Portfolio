import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'astronet',
    title: 'AstroNet',
    description: 'Aplicación móvil nativa con React Native para explorar astronomía',
    shortDescription: 'React Native app para exploración astronómica',
    technologies: [
      { name: 'React Native', category: 'mobile' },
      { name: 'JavaScript', category: 'frontend' },
      { name: 'Expo', category: 'mobile' },
    ],
    demoUrl: 'https://v0.astronet.app',
    githubUrl: 'https://github.com/vlmnst/AstroNet',
    imageUrl: '/images/projects/astronet.png',
    featured: true,
    highlights: [
      'API real time de datos astronómicos',
      'Interfaz intuitiva y responsiva',
      'Optimización de rendimiento móvil',
    ],
  },
  {
    id: 'pi-project',
    title: 'Proyecto Integrador',
    description: 'Plataforma full stack con integración de APIs externas',
    shortDescription: 'Plataforma full stack',
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'Express', category: 'backend' },
    ],
    githubUrl: 'https://github.com/vlmnst/PI',
    imageUrl: '/images/projects/pi.png',
    featured: true,
    highlights: [
      'Arquitectura escalable',
      'Base de datos relacional optimizada',
      'API RESTful documentada',
    ],
  },
];
