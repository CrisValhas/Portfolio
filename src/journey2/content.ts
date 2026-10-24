/**
 * Contenido del portfolio. Fuentes: CV ES actualizado (sep-2026) + Cerebro (metodología AI-SDD, proyectos,
 * experiencia) + textos propios previos de liderazgo. `*palabra*` = énfasis tipográfico.
 * Atlas se menciona solo como contexto del liderazgo; sin cliente ni detalles internos.
 */
import esJson from '../locales/es.json';
import enJson from '../locales/en.json';

export type Lang = 'es' | 'en';
export type T = Record<Lang, string>;
const t = (es: string, en: string): T => ({ es, en });

export const SECTIONS = [
  { id: 'inicio', es: 'Inicio', en: 'Home' },
  { id: 'valor', es: 'Lo que aporto', en: 'What I bring' },
  { id: 'roles', es: 'Cómo trabajo', en: 'How I work' },
  { id: 'ia', es: 'Cómo aplico IA', en: 'How I apply AI' },
  { id: 'lidero', es: 'Liderazgo y formación', en: 'Leadership & training' },
  { id: 'trabajo', es: 'Proyectos laborales', en: 'Work projects' },
  { id: 'trayectoria', es: 'Trayectoria', en: 'Career' },
  { id: 'stack', es: 'Stack completo', en: 'Full stack' },
  { id: 'personales', es: 'Proyectos personales', en: 'Personal projects' },
  { id: 'contacto', es: 'Contacto', en: 'Contact' },
] as const;

export const C = {
  hero: {
    label: t('Tech Architecture Specialist · Technical Owner · Banca & Fintech', 'Tech Architecture Specialist · Technical Owner · Banking & Fintech'),
    lead: t(
      'Arquitecto de software que responde por el producto técnico, lidera al equipo y escribe el código que hace falta: llevo sistemas de banca y fintech de la idea a producción, y hago que los agentes de IA trabajen con calidad.',
      'A software architect who owns the technical product, leads the team and writes the code that’s needed: I take banking and fintech systems from idea to production, and make AI agents work with quality.',
    ),
    cta: t('Lo que aporto', 'What I bring'),
    stats: [
      { v: '6+', l: t('años en banca y fintech', 'years in banking & fintech') },
      { v: '360°', l: t('arquitectura, liderazgo técnico y código, a la vez', 'architecture, technical leadership and code, at once') },
      { v: 'SDD', l: t('metodología propia de gobernanza de agentes', 'my own agent-governance methodology') },
    ],
    open: t('Remoto internacional · Technical Owner, arquitectura y liderazgo técnico', 'International remote · Technical Owner, architecture and technical leadership'),
  },

  value: {
    title: t('Lo que *aporto* a un equipo', 'What I *bring* to a team'),
    items: [
      { t: t('Arquitectura que escala sin romper lo existente', 'Architecture that scales without breaking what exists'),
        b: t('Backend, BFF y frontend modular sobre sistemas legacy, multi-tenant y white-label. Decisiones documentadas (ADR) y contratos versionados.',
             'Backend, BFF and modular frontend on legacy, multi-tenant, white-label systems. Documented decisions (ADRs) and versioned contracts.') },
      { t: t('IA aplicada con gobierno, no con fe', 'AI applied with governance, not faith'),
        b: t('Un método probado —Spec-Driven Development, TDD y trazabilidad— para que los agentes aceleren sin perder control ni calidad.',
             'A proven method —Spec-Driven Development, TDD and traceability— so agents speed things up without losing control or quality.') },
      { t: t('Un líder que multiplica al equipo', 'A leader who multiplies the team'),
        b: t('Lidero equipos técnicos, mentoreo y capacito. Mi métrica es la velocidad del equipo y el crecimiento de sus ingenieros.',
             'I lead technical teams, mentor and train. My metric is team velocity and the growth of its engineers.') },
      { t: t('Entrega sostenida en entornos críticos', 'Sustained delivery in critical environments'),
        b: t('Años en banca y fintech: regresión, continuidad operativa, cumplimiento y delivery sin heroísmos.',
             'Years in banking and fintech: regression, operational continuity, compliance and delivery without heroics.') },
      { t: t('Full stack de verdad', 'Truly full stack'),
        b: t('Frontend, backend (Node, Java, .NET, Python), datos, cloud y Web3: trabajé en todas las capas y entro al código cuando hace falta.',
             'Frontend, backend, data, cloud and Web3: I’ve worked across every layer and dive into the code when needed.') },
      { t: t('Visión de producto de punta a punta', 'End-to-end product vision'),
        b: t('Del discovery y la especificación a producción. Hablo con negocio, producto y código.',
             'From discovery and specification to production. I speak business, product and code.') },
    ],
  },

  roles: {
    title: t('Tres sombreros, *un mismo perfil*', 'Three hats, *one profile*'),
    sub: t('No son opciones excluyentes: en un mismo equipo ejerzo las tres cosas a la vez, y según la etapa del producto pesa más una u otra.', 'These aren’t mutually exclusive: within one team I do all three at once, and depending on the product stage one weighs more than another.'),
    items: [
      { h: t('Technical Owner y arquitecto', 'Technical Owner & architect'), now: t('Rol actual', 'Current role'),
        b: t('Respondo por la visión técnica del producto: arquitectura, contratos, decisiones (ADR), calidad y deuda técnica. Gobierno cómo los agentes de IA entran al ciclo de desarrollo.', 'I own the product’s technical vision: architecture, contracts, decisions (ADRs), quality and technical debt. I govern how AI agents enter the development cycle.'),
        w: t('Atlas · BFF · legacy · multi-tenant', 'Atlas · BFF · legacy · multi-tenant') },
      { h: t('Tech Lead', 'Tech Lead'), now: t('Cobros · Santander Pay', 'Collections · Santander Pay'),
        b: t('Fui uno de los Tech Leads de Cobros en Santander Pay: priorizo, reviso, desbloqueo y hago crecer a la gente del equipo.', 'I was one of the Tech Leads on Collections at Santander Pay: I prioritize, review, unblock and grow the team’s people.'),
        w: t('Santander Pay · mentoría · code reviews', 'Santander Pay · mentoring · code reviews') },
      { h: t('Ingeniero full stack', 'Full-stack engineer'), now: t('En todas las capas', 'Across every layer'),
        b: t('Frontend (React, TypeScript), backend (Node, NestJS, Java, .NET), datos, cloud y Web3. Entrego de punta a punta y entro al código cuando hace falta.', 'Frontend (React, TypeScript), backend (Node, NestJS, Java, .NET), data, cloud and Web3. I deliver end to end and dive into the code when needed.'),
        w: t('Adecco · Simplestate · Arena · Bonder', 'Adecco · Simplestate · Arena · Bonder') },
    ],
  },

  ai: {
    title: t('Cómo aplico *IA*', 'How I apply *AI*'),
    statement: t('La IA no decide qué se construye. *Ejecuta* lo que una persona ya aprobó.', 'AI doesn’t decide what gets built. It *executes* what a person already approved.'),
    sub: t('Creé una metodología de Spec-Driven Development para gobernar agentes de IA, y la aplico en equipos de un cliente bancario y en mis propios proyectos.',
           'I created a Spec-Driven Development methodology to govern AI agents, and I apply it in banking-client teams and in my own projects.'),
    principlesTitle: t('Cinco principios', 'Five principles'),
    principles: [
      { t: t('Spec-first', 'Spec-first'), b: t('Sin especificación aprobada por una persona no hay implementación. La spec es la única fuente de verdad.', 'No implementation without a human-approved specification. The spec is the single source of truth.') },
      { t: t('Las specs son humanas', 'Specs are human'), b: t('El agente redacta borradores; lo que no se sabe queda marcado como pendiente. Nunca inventa.', 'The agent drafts; what is unknown stays flagged as pending. It never invents.') },
      { t: t('TDD estricto', 'Strict TDD'), b: t('Red → green → refactor. El primer test nace de un escenario Gherkin aprobado.', 'Red → green → refactor. The first test comes from an approved Gherkin scenario.') },
      { t: t('Roles separados', 'Separated roles'), b: t('Spec-author, developer y reviewer, con dominios de escritura que no se pisan.', 'Spec-author, developer and reviewer, with non-overlapping write domains.') },
      { t: t('Calidad como puerta', 'Quality as a gate'), b: t('Lint, build y tests pasan antes de cada traspaso entre roles.', 'Lint, build and tests pass before every handoff between roles.') },
    ],
    flow: [t('Specify', 'Specify'), t('Plan', 'Plan'), t('Tasks', 'Tasks'), t('Implement', 'Implement')],
    flowNote: t('Un contrato para los agentes (AGENTS.md), rutas prohibidas, constitución del proyecto y specs versionadas que nunca se reescriben: un cambio es una spec nueva.',
                'A contract for agents (AGENTS.md), forbidden paths, a project constitution and versioned specs that are never rewritten: a change is a new spec.'),
    evidenceTitle: t('Dónde lo apliqué', 'Where I applied it'),
    evidence: [
      { t: t('Cobertura de pruebas automatizada', 'Automated test coverage'), b: t('Playbook parametrizable que genera cobertura en Jira/Xray con un motor de riesgo determinístico (REST + GraphQL).', 'Parameterizable playbook that generates coverage in Jira/Xray with a deterministic risk engine (REST + GraphQL).') },
      { t: t('Plataforma de gobernanza de agentes', 'Agent-governance platform'), b: t('Arquitectura de una plataforma enterprise donde equipos y agentes llevan un proyecto de la idea a la entrega con fases, firmas y evidencia.', 'Architecture of an enterprise platform where teams and agents take a project from idea to delivery with phases, sign-offs and evidence.') },
      { t: t('Agente Smith', 'Agent Smith'), b: t('Mi orquestador personal: delega en 14 workers y más de 180 tools, con memoria propia y voz en tiempo real.', 'My personal orchestrator: delegates to 14 workers and 180+ tools, with its own memory and realtime voice.') },
      { t: t('Market Pulse', 'Market Pulse'), b: t('App personal construida de punta a punta con AI-SDD + TDD.', 'Personal app built end to end with AI-SDD + TDD.') },
    ],
  },

  lead: {
    title: t('Lidero equipos. *Formo* personas.', 'I lead teams. I *train* people.'),
    lead: { h: t('Liderazgo', 'Leadership'), items: [
      t('Fui uno de los Tech Leads de Cobros en Santander Pay: transformación white-label del modelo de publicación de deuda, con equipo y entrega sostenida.', 'I was one of the Tech Leads on Collections at Santander Pay: white-label transformation of the debt-publication model, with a team and sustained delivery.'),
      t('Hoy lidero el equipo de Atlas, una plataforma enterprise de gobernanza de agentes de IA: arquitectura, decisiones (ADR) y coordinación entre producto, backend, frontend y agentes.', 'I currently lead the Atlas team, an enterprise AI-agent governance platform: architecture, decisions (ADRs) and coordination across product, backend, frontend and agents.'),
      t('Mi medida de éxito es la velocidad del equipo y el crecimiento de sus ingenieros, no mi producción individual. Un líder que es cuello de botella ha fallado.', 'My success metric is team velocity and engineer growth, not my individual output. A leader who is the bottleneck has failed.'),
      t('Ágil como contrato de delivery: rituales lean, ADRs y mapeo explícito de dependencias.', 'Agile as a delivery contract: lean rituals, ADRs and explicit dependency mapping.'),
      t('El alcance como herramienta de riesgo: expongo los trade-offs temprano y propongo opciones de slicing.', 'Scope as a risk tool: I surface trade-offs early and propose slicing options.'),
      t('Traduzco entre producto y restricciones técnicas, con el mismo rigor para perfiles no técnicos.', 'I translate between product and technical constraints, with the same rigor for non-technical stakeholders.'),
    ] },
    train: { h: t('Formación', 'Training'), items: [
      t('Capacitaciones a equipos en Spec-Driven Development, TDD con agentes y parametrización del workflow.', 'Team training in Spec-Driven Development, TDD with agents and workflow parameterization.'),
      t('Material propio de la metodología: documento, presentaciones y guías de aplicación.', 'Own methodology material: document, presentations and application guides.'),
      t('Onboarding de equipos en el framework de gobernanza de agentes de IA.', 'Onboarding teams onto the AI-agent governance framework.'),
      t('Mentoría y code reviews estratégicos para elevar el estándar del equipo.', 'Mentoring and strategic code reviews to raise the team’s standard.'),
    ] },
  },

  work: {
    title: t('Proyectos *laborales*', 'Work *projects*'),
    sub: t('Banca, fintech y Web3: de la arquitectura al backend, el frontend y el liderazgo del equipo.', 'Banking, fintech and Web3: from architecture to backend, frontend and team leadership.'),
    labels: { c: t('Desafío', 'Challenge'), a: t('Enfoque', 'Approach'), o: t('Resultado', 'Outcome') },
    items: [
      { org: 'Accenture · Santander Pay', title: t('Cobros: publicación de deuda white-label', 'Collections: white-label debt publication'),
        roles: ['Tech Lead', 'Backend', 'Frontend', 'Arquitectura'],
        summary: t('Santander Pay es la plataforma B2B2C de cobros y pagos para empresas de Santander Argentina. Fui uno de los Tech Leads de la parte de Cobros: la transformación white-label del modelo de publicación de deuda multiempresa, sobre restricciones compartidas y específicas por mercado.',
                   'Santander Pay is Santander Argentina’s B2B2C collections and payments platform for businesses. I was one of the Tech Leads on the Collections part: the white-label transformation of the multi-company debt-publication model, across shared and market-specific constraints.'),
        tri: { c: { es: esJson.work.cases[0].challenge, en: enJson.work.cases[0].challenge }, a: { es: esJson.work.cases[0].approach, en: enJson.work.cases[0].approach }, o: { es: esJson.work.cases[0].outcome, en: enJson.work.cases[0].outcome } },
        tech: ['React', 'TypeScript', 'BFF', 'DDD', 'REST', 'Orquestador .NET'] },
      { org: 'Accenture · cliente bancario', title: t('Atlas: plataforma de gobernanza de agentes de IA', 'Atlas: AI-agent governance platform'),
        roles: ['Technical Owner', 'Arquitectura', 'IA'],
        summary: t('Arquitectura y liderazgo técnico de una plataforma enterprise donde equipos y agentes llevan un proyecto del discovery a la entrega, con fases, firmas y evidencia versionada.', 'Architecture and technical leadership of an enterprise platform where teams and agents take a project from discovery to delivery, with phases, sign-offs and versioned evidence.'),
        points: [t('BFF con GraphQL para vistas compuestas y REST para comandos; SSE para avisos en vivo.', 'BFF with GraphQL for composed views and REST for commands; SSE for live notifications.'), t('Servicios por dominio con datos propios y contratos OpenAPI versionados.', 'Domain services with their own data and versioned OpenAPI contracts.'), t('Eventos con outbox y consumidores idempotentes; identidad OIDC delegada al cliente.', 'Events with outbox and idempotent consumers; OIDC identity delegated to the client.')],
        tech: ['React', 'TypeScript', 'GraphQL', 'REST', 'OpenAPI / Swagger', 'PostgreSQL', 'OAuth2 / OIDC'] },
      { org: 'Accenture · cliente bancario', title: t('Tarjetas: flujos críticos en Java y Spring Boot', 'Cards: critical flows in Java and Spring Boot'),
        roles: ['Backend'],
        summary: t('Backend con Java y Spring Boot en el proyecto de tarjetas de un banco. Implemento los flujos críticos de denuncia, baja y reimpresión de tarjetas, integrados con un sistema externo de gestión de tarjetas, en un entorno regulado.', 'Backend with Java and Spring Boot on a bank’s cards project. I’m implementing the critical flows for reporting, cancelling and reissuing cards, integrated with an external card-management system, in a regulated environment.'),
        points: [t('Denuncia de tarjeta (robo o extravío).', 'Card reporting (theft or loss).'), t('Baja de tarjeta.', 'Card cancellation.'), t('Reimpresión de tarjeta.', 'Card reissue.')],
        tech: ['Java', 'Spring Boot'] },
      { org: 'Accenture · cliente bancario', title: t('Backend sobre legacy y cobertura de pruebas automatizada', 'Backend on legacy and automated test coverage'),
        roles: ['Backend', 'Calidad'],
        summary: t('Desarrollo y mantenimiento sobre sistemas legacy con regresión para garantizar la continuidad de la lógica de negocio, más un playbook parametrizable que genera cobertura en Jira/Xray con un motor de riesgo determinístico (REST + GraphQL).', 'Development and maintenance on legacy systems with regression to guarantee business-logic continuity, plus a parameterizable playbook that generates Jira/Xray coverage with a deterministic risk engine (REST + GraphQL).'),
        tech: ['GraphQL', 'REST', 'Jira / Xray', 'TDD'] },
      { org: 'Adecco · proyectos bancarios', title: t('Plataformas bancarias enterprise', 'Enterprise banking platforms'),
        roles: ['Fullstack'],
        summary: t('Soluciones bancarias bajo estándares corporativos, metodologías ágiles y foco en estabilidad operativa y cumplimiento: testing automático, integración con sistemas legados y documentación.', 'Banking solutions under corporate standards, agile methods and a focus on operational stability and compliance: automated testing, legacy-system integration and documentation.'),
        tech: ['JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'REST'] },
      { org: 'Simplestate · fintech B2B2C', title: t('Billetera white-label, multi-tenant y capa de analítica', 'White-label wallet, multi-tenant and analytics layer'),
        roles: ['Fullstack', 'Arquitectura'],
        summary: { es: 'Billetera digital marca blanca y arquitectura multi-tenant. ' + esJson.work.cases[1].summary, en: 'White-label digital wallet and multi-tenant architecture. ' + enJson.work.cases[1].summary },
        tech: ['React', 'TypeScript', 'Node.js', 'Multi-tenant'] },
      { org: 'Arena · Web3 / fintech', title: t('Productos financieros e infraestructura analítica on-chain', 'Financial products and on-chain analytics infrastructure'),
        roles: ['Fullstack', 'Web3'],
        summary: { es: 'Productos financieros basados en cripto. ' + esJson.work.cases[2].summary, en: 'Crypto-based financial products. ' + enJson.work.cases[2].summary },
        tech: ['React', 'TypeScript', 'Node.js', 'AWS Lambda', 'Web3.js', 'ethers.js'] },
      { org: 'Bonder', title: t('Plataformas B2B2C white-label escalables', 'Scalable white-label B2B2C platforms'),
        roles: ['Arquitectura', 'Fullstack'],
        summary: t('Plataformas B2B2C altamente configurables: componentes reutilizables, escalabilidad multi-tenant, APIs flexibles para integraciones y branding white-label.', 'Highly configurable B2B2C platforms: reusable components, multi-tenant scalability, flexible integration APIs and white-label branding.'),
        tech: ['React', 'TypeScript', 'NestJS', 'Express', 'AWS Lambda', 'PostgreSQL', 'Redis'] },
      { org: 'Freelance · Web3', title: t('Sistema de pagos Web3 end-to-end', 'End-to-end Web3 payments system'),
        roles: ['Backend', 'Web3'],
        summary: t('Gestión de pagos descentralizados: contratos inteligentes, validación de transacciones, backend de orquestación y foco en seguridad, trazabilidad y experiencia de usuario.', 'Decentralized payment management: smart contracts, transaction validation, an orchestration backend, with a focus on security, traceability and user experience.'),
        tech: ['Solidity', 'Web3.js', 'Node.js', 'Express', 'MongoDB'] },
    ] as { org: string; title: T; roles: string[]; summary: T; tri?: { c: T; a: T; o: T }; points?: T[]; tech: string[] }[],
  },

  career: {
    title: t('Trayectoria', 'Career'),
    jobs: [
      { y: '2024 —', c: 'Accenture', r: t('Tech Architecture Specialist · cliente bancario (antes Senior Software Engineer / Líder Técnico) · Santander Pay, Atlas', 'Tech Architecture Specialist · banking client (previously Senior Software Engineer / Tech Lead) · Santander Pay, Atlas') },
      { y: '2023 – 24', c: 'Adecco', r: t('Software Engineer · proyectos bancarios', 'Software Engineer · banking projects') },
      { y: '2022 – 23', c: 'Simplestate', r: t('Fullstack Engineer · fintech B2B2C: billetera digital white-label y arquitectura multi-tenant', 'Fullstack Engineer · B2B2C fintech: white-label digital wallet and multi-tenant architecture') },
      { y: '2021 – 22', c: 'Arena', r: t('Software Engineer · Web3 / fintech: productos financieros basados en cripto', 'Software Engineer · Web3 / fintech: crypto-based financial products') },
      { y: '2020 – 21', c: 'Bonder', r: t('Software Engineer · arquitectura escalable para plataformas white-label', 'Software Engineer · scalable architecture for white-label platforms') },
      { y: '2019 – 20', c: 'Freelance', r: t('Software Engineer · soluciones Web3 end-to-end', 'Software Engineer · end-to-end Web3 solutions') },
    ],
    edu: t('Ingeniería en Sistemas, UNDAV (en curso) · Inglés B1', 'Systems Engineering, UNDAV (in progress) · English B1'),
  },

  stack: {
    title: t('Todo lo que *uso* —y construí—', 'Everything I *use* —and built with—'),
    sub: t('No me defino por un lenguaje: elijo la herramienta según el problema.', 'I’m not defined by a language: I pick the tool for the problem.'),
    groups: [
      { h: t('Lenguajes', 'Languages'), c: ['TypeScript', 'JavaScript', 'Python', 'C# / .NET 8', 'Java', 'Rust', 'PHP', 'Solidity', 'SQL'] },
      { h: t('IA y agentes', 'AI & agents'), c: ['Claude', 'GPT / Codex', 'Gemini', 'GitHub Copilot', 'Windsurf', 'Ollama', 'llama.cpp', 'ComfyUI', 'MCP', 'Spec Kit', 'Embeddings (BM25 + vector)', 'Orquestación de agentes'] },
      { h: 'Frontend', c: ['React', 'Next.js', 'Vite', 'Redux', 'Zustand', 'React Query', 'React Router', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'Ant Design', 'React Native / Expo', 'three.js / R3F', 'Framer Motion', 'i18next', 'PWA', 'Recharts', 'React Flow'] },
      { h: 'Backend & APIs', c: ['Node.js', 'NestJS', 'Express', 'Spring Boot', 'FastAPI', 'ASP.NET Core', 'GraphQL', 'REST', 'OpenAPI / Swagger', 'SSE', 'BFF', 'JWT', 'OAuth2 / OIDC', 'Prisma', 'EF Core', 'Sequelize', 'Mongoose', 'Knex'] },
      { h: t('Datos', 'Data'), c: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Supabase', 'RLS'] },
      { h: t('Arquitectura', 'Architecture'), c: ['Clean', 'Hexagonal', 'DDD', 'Multi-tenant', 'White-label (SAAS / BAAS)', 'Event-driven · Outbox', 'ADR', 'Monorepos'] },
      { h: 'Cloud & DevOps', c: ['Docker', 'Docker Compose', 'GitLab CI', 'GitHub Actions', 'CI/CD', 'Nginx', 'Cloudflare R2', 'Vercel', 'Azure DevOps', 'AWS Lambda', 'Linux'] },
      { h: 'Testing & calidad', c: ['TDD', 'BDD / Gherkin', 'Jest', 'React Testing Library', 'Vitest', 'Jira / Xray', 'ESLint', 'Prettier'] },
      { h: t('Fintech & Web3', 'Fintech & Web3'), c: ['Web3.js', 'ethers.js', 'Smart Contracts', 'DeFi', 'Stripe', 'Mercado Pago', 'Binance API', 'ICP / ckBTC', 'Pagos on-chain'] },
      { h: t('Herramientas', 'Tooling'), c: ['Git / Git Flow', 'Figma', 'Google Tag Manager', 'GA4', 'Postman'] },
    ],
  },

  projects: {
    title: t('Proyectos *personales*', '*Personal* projects'),
    sub: t('Plataformas completas, de la arquitectura al deploy. Es donde pruebo ideas antes de llevarlas a un equipo.', 'Complete platforms, from architecture to deploy. This is where I test ideas before taking them to a team.'),
    items: [
      { n: 'SUMA · Wallet', d: t('Plataforma white-label de objetivos, ahorro y fidelización. Prototipo multi-tenant por partner con modos SAAS y BAAS.', 'White-label platform for goals, savings and loyalty. Multi-tenant per-partner prototype with SAAS and BAAS modes.'), s: 'React · TypeScript · .NET 8 · PostgreSQL' },
      { n: 'Agente Smith', d: t('Asistente operativo local: orquesta 14 workers y más de 180 tools, con voz en tiempo real y memoria con embeddings.', 'Local operating assistant: orchestrates 14 workers and 180+ tools, with realtime voice and embedding memory.'), s: 'Python · FastAPI · Gemini · Ollama' },
      { n: 'CapitalOS', d: t('Sistema operativo de capital personal multi-moneda, con reglas de riesgo y kill switch. Auto-trading desactivado por diseño.', 'Multi-currency personal-capital operating system with risk rules and a kill switch. Auto-trading disabled by design.'), s: 'React 19 · Express · TypeScript' },
      { n: 'DataCrush · GA4Fun', d: t('Herramientas de analítica: del diseño en Figma a la verificación en GTM/GA4, y especificaciones de tracking con billing.', 'Analytics tooling: from Figma design to GTM/GA4 verification, and tracking specs with billing.'), s: 'NestJS · MongoDB · Next.js · Supabase · Stripe' },
      { n: 'Market Pulse', d: t('PWA de inteligencia de mercado con alertas descriptivas y push. Construida con AI-SDD + TDD.', 'Market-intelligence PWA with descriptive alerts and push. Built with AI-SDD + TDD.'), s: 'NestJS · Prisma · React 19' },
      { n: 'Anticitera 3D', d: t('Visor interactivo del mecanismo de Anticitera con motor astronómico.', 'Interactive viewer of the Antikythera mechanism with an astronomy engine.'), s: 'React · three.js · R3F' },
      { n: 'MovieFinder', d: t('App móvil con arquitectura hexagonal y disponibilidad regional de películas.', 'Mobile app with hexagonal architecture and regional movie availability.'), s: 'Expo · React Native · Zod' },
    ],
  },

  contact: {
    title: t('Hablemos.', 'Let’s talk.'),
    sub: t('Abierto a roles remotos internacionales como Technical Owner, arquitecto o líder técnico, en banca, fintech y producto con IA.', 'Open to international remote roles as Technical Owner, architect or tech lead, in banking, fintech and AI products.'),
    cv: t('Descargar CV', 'Download CV'),
    loc: t('Argentina · Remoto, equipos internacionales', 'Argentina · Remote, international teams'),
  },
};
