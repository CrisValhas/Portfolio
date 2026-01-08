import { SocialLink } from '../types';

export const PROFILE = {
  name: 'Cristian Valtelhas',
  title: 'Software Engineer',
  email: 'cristianrubiles@gmail.com',
  location: 'Buenos Aires, Argentina',
  summary: `Software Engineer con experiencia liderando decisiones técnicas en entornos complejos, especialmente en banca, fintech y productos digitales de escala. Background full-stack sólido con foco en arquitectura, calidad, performance y eficiencia de equipos. Uso activo de IA como acelerador real del desarrollo y la toma de decisiones técnicas, con fuerte orientación a delivery.`,
  profileImage: '/profile.png',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/vlmnst',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/cristian-valtelhas',
    icon: 'linkedin',
  },
  {
    platform: 'Email',
    url: 'mailto:cristianrubiles@gmail.com',
    icon: 'mail',
  },
];

export const NAVIGATION_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];
