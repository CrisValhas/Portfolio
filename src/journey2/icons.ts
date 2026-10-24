import * as si from 'simple-icons';

export type Icon = { title: string; hex: string; path: string };
const g = (k: string): Icon | undefined => (si as unknown as Record<string, Icon>)[k];

/** Nombre de tecnología → logo (solo los que existen en simple-icons). */
export const ICONS: Record<string, Icon | undefined> = {
  typescript: g('siTypescript'), javascript: g('siJavascript'), python: g('siPython'), 'c# / .net 8': g('siDotnet'),
  java: g('siOpenjdk'), 'spring boot': g('siSpringboot'), rust: g('siRust'), php: g('siPhp'), 'icp / ckbtc': g('siInternetcomputer'), solidity: g('siSolidity'), claude: g('siClaude'), 'gpt / codex': g('siOpenai'), gemini: g('siGooglegemini'),
  'github copilot': g('siGithubcopilot'), ollama: g('siOllama'), react: g('siReact'), 'next.js': g('siNextdotjs'), vite: g('siVite'),
  redux: g('siRedux'), 'react query': g('siReactquery'), 'react router': g('siReactrouter'), 'tailwind css': g('siTailwindcss'),
  'shadcn/ui': g('siShadcnui'), 'radix ui': g('siRadixui'), 'ant design': g('siAntdesign'), 'react native / expo': g('siExpo'),
  'three.js / r3f': g('siThreedotjs'), 'framer motion': g('siFramer'), i18next: g('siI18next'), pwa: g('siPwa'),
  'node.js': g('siNodedotjs'), nestjs: g('siNestjs'), express: g('siExpress'), fastapi: g('siFastapi'), 'asp.net core': g('siDotnet'),
  graphql: g('siGraphql'), 'openapi / swagger': g('siOpenapiinitiative'), jwt: g('siJsonwebtokens'), 'oauth2 / oidc': g('siOpenid'),
  prisma: g('siPrisma'), sequelize: g('siSequelize'), mongoose: g('siMongoose'), postgresql: g('siPostgresql'), mongodb: g('siMongodb'),
  redis: g('siRedis'), sqlite: g('siSqlite'), supabase: g('siSupabase'), docker: g('siDocker'), 'docker compose': g('siDocker'),
  'gitlab ci': g('siGitlab'), 'github actions': g('siGithubactions'), nginx: g('siNginx'), 'cloudflare r2': g('siCloudflare'),
  vercel: g('siVercel'), linux: g('siLinux'), jest: g('siJest'), 'react testing library': g('siTestinglibrary'), vitest: g('siVitest'),
  'jira / xray': g('siJira'), eslint: g('siEslint'), prettier: g('siPrettier'), 'web3.js': g('siWeb3dotjs'), 'smart contracts': g('siEthereum'),
  stripe: g('siStripe'), 'mercado pago': g('siMercadopago'), 'binance api': g('siBinance'), 'git / git flow': g('siGit'),
  figma: g('siFigma'), 'google tag manager': g('siGoogletagmanager'), ga4: g('siGoogleanalytics'), postman: g('siPostman'),
  zod: g('siZod'),
};
export const GITHUB = g('siGithub') as Icon;
export const GMAIL = g('siGmail') as Icon;
export const LINKEDIN: Icon = {
  title: 'LinkedIn', hex: '0A66C2',
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
};
