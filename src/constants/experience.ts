import { Experience } from '../types';

export const EXPERIENCE: Experience[] = [
  {
    id: 'accenture',
    company: 'Accenture',
    position: 'Software Engineer / Technical Leadership',
    period: {
      start: '2023',
      end: null,
    },
    description: 'Diseño y evolución de arquitecturas frontend y backend en entorno bancario de alta criticidad. Referente técnico del equipo, liderazgo en ceremonias ágiles, code reviews estratégicos, mentoring y colaboración directa con producto y negocio. Enfoque constante en delivery y calidad.',
    achievements: [
      'Liderazgo técnico en proyectos bancarios de alta criticidad',
      'Diseño e implementación de arquitecturas escalables y resilientes',
      'Mentoring y desarrollo de equipo en buenas prácticas',
      'Code reviews estratégicos y estándares de calidad',
      'Colaboración cross-functional con producto y negocio',
      'Optimización de performance y disponibilidad',
    ],
    technologies: ['React', 'Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'adecco',
    company: 'Adecco',
    position: 'Software Engineer',
    period: {
      start: '2021',
      end: '2023',
    },
    description: 'Desarrollo de soluciones bancarias bajo estándares corporativos, metodologías ágiles y foco en estabilidad operativa y cumplimiento.',
    achievements: [
      'Desarrollo de plataformas bancarias robustas',
      'Implementación de estándares corporativos y compliance',
      'Testing automático y aseguramiento de calidad',
      'Integración con sistemas legados',
      'Documentación técnica y onboarding',
      'Participación activa en ceremonias ágiles',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'arena',
    company: 'Arena',
    position: 'Software Engineer',
    period: {
      start: '2020',
      end: '2021',
    },
    description: 'Construcción de productos digitales Web3 y fintech, aplicando principios de arquitectura limpia y adaptándose a contextos de innovación y alta incertidumbre.',
    achievements: [
      'Desarrollo de soluciones Web3 y blockchain',
      'Implementación de arquitectura limpia y escalable',
      'Integración de protocolos DeFi',
      'Optimización de costos de gas y transacciones',
      'Trabajo en ambiente de alto riesgo e innovación',
      'Adaptación rápida a cambios del mercado cripto',
    ],
    technologies: ['TypeScript', 'React', 'Web3.js', 'Smart Contracts', 'Node.js', 'MongoDB'],
  },
  {
    id: 'bonder',
    company: 'Bonder',
    position: 'Software Engineer',
    period: {
      start: '2019',
      end: '2020',
    },
    description: 'Desarrollo de plataformas B2B2C marca blanca, con foco en reutilización, escalabilidad y consistencia entre clientes.',
    achievements: [
      'Desarrollo de plataforma B2B2C altamente configurable',
      'Implementación de componentes reutilizables',
      'Escalabilidad multi-tenant',
      'APIs flexibles para integraciones',
      'Gestión de white-label branding',
      'Optimización de rendimiento',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    position: 'Software Engineer',
    period: {
      start: '2018',
      end: '2019',
    },
    description: 'Diseño y desarrollo de un sistema de gestión de pagos Web3, integrando flujos de pago descentralizados, validación de transacciones y backend de orquestación, con foco en seguridad, trazabilidad y experiencia de usuario.',
    achievements: [
      'Arquitectura completa de sistema de pagos Web3',
      'Integración de contratos inteligentes',
      'Flujos descentralizados de pago',
      'Sistema de validación de transacciones',
      'Backend de orquestación robusto',
      'Seguridad y auditoría de transacciones',
    ],
    technologies: ['JavaScript', 'Node.js', 'Web3.js', 'Solidity', 'MongoDB', 'Express'],
  },
];
