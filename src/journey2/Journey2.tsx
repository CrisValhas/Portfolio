import React, { Suspense, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import '@fontsource-variable/inter-tight';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/jetbrains-mono';
import { PROFILE, SOCIAL_LINKS } from '../constants/profile';
import { useLang } from '../context/LanguageContext';
import { C, SECTIONS, Lang, T } from './content';
import { ICONS, GITHUB, GMAIL, LINKEDIN, Icon } from './icons';
import World from './World';
import './Journey2.css';

const EASE = [0.22, 1, 0.36, 1] as const;
const inView = { once: true, margin: '0px 0px -10% 0px' };

/** Título con revelado palabra por palabra. `*texto*` = énfasis serif/acento. */
const Words = ({ text, className, as: Tag = 'h2' }: { text: string; className?: string; as?: 'h1' | 'h2' | 'p' }) => {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  let n = 0;
  return (
    <Tag className={className}>
      {parts.map((p, pi) => {
        const em = p.startsWith('*');
        const words = (em ? p.slice(1, -1) : p).split(' ').filter(Boolean);
        return words.map((w, wi) => {
          const d = (n++) * 0.045;
          return (
            <span key={`${pi}-${wi}`}>
              <motion.span className="wm" initial="h" whileInView="v" viewport={inView}>
                <motion.span className={`wi${em ? ' em' : ''}`} variants={{ h: { y: '115%' }, v: { y: 0, transition: { duration: 0.9, delay: d, ease: EASE } } }}>{w}</motion.span>
              </motion.span>{' '}
            </span>
          );
        });
      })}
    </Tag>
  );
};

const Fade = ({ children, i = 0, className }: { children: React.ReactNode; i?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView}
    transition={{ duration: 0.8, delay: Math.min(i, 6) * 0.07, ease: EASE }}>{children}</motion.div>
);

/** Fila con regla que se dibuja. */
const Row = ({ n, title, body, i = 0 }: { n?: string; title: string; body?: string; i?: number }) => (
  <motion.div className="row" initial="h" whileInView="v" viewport={inView}>
    <motion.i className="rule" variants={{ h: { scaleX: 0 }, v: { scaleX: 1 } }} transition={{ duration: 1.1, delay: Math.min(i, 6) * 0.07, ease: EASE }} />
    <motion.div className="row-in" variants={{ h: { opacity: 0, y: 18 }, v: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, delay: 0.1 + Math.min(i, 6) * 0.07, ease: EASE }}>
      {n && <span className="mono row-n">{n}</span>}
      <h3 className="row-t">{title}</h3>
      {body && <p className="row-b">{body}</p>}
    </motion.div>
  </motion.div>
);

const Label = ({ id }: { id: string }) => {
  const { lang } = useLang();
  const i = SECTIONS.findIndex((s) => s.id === id);
  return <Fade className="label mono"><span className="label-n">{String(i + 1).padStart(2, '0')}</span><span className="label-l">{SECTIONS[i][lang === 'es' ? 'es' : 'en']}</span></Fade>;
};

const Logo = ({ i, size = 15 }: { i: Icon; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden role="img">
    <path d={i.path} fill={parseInt(i.hex, 16) < 0x4a4a4a ? '#ecebe6' : `#${i.hex}`} />
  </svg>
);
const Tech = ({ name }: { name: string }) => {
  const ic = ICONS[name.toLowerCase()];
  return <span className="tech">{ic && <Logo i={ic} />}{name}</span>;
};

const Section = ({ id, scene, className, children }: { id: string; scene: number; className?: string; children: React.ReactNode }) => (
  <section id={id} data-nav={id} data-scene={scene} className={`sec ${className || ''}`}><div className="wrap">{children}</div></section>
);

const Download = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg>
);

const all = (g: { c: string[] }[]) => g.flatMap((x) => x.c).filter((n) => ICONS[n.toLowerCase()]);

export default function Journey2() {
  const { lang, toggleLang } = useLang();
  const l = (lang === 'es' ? 'es' : 'en') as Lang;
  const x = (v: T) => v[l];
  const [active, setActive] = useState('inicio');
  const [menu, setMenu] = useState(false);
  const lenis = useRef<Lenis | null>(null);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ls = new Lenis({ lerp: reduce ? 1 : 0.085, wheelMultiplier: 0.9, touchMultiplier: 1.4 });
    lenis.current = ls;
    let raf = 0;
    const loop = (time: number) => { ls.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    let last = '';
    const detect = () => {
      const y = window.scrollY + window.innerHeight * 0.45;
      const els = Array.from(document.querySelectorAll<HTMLElement>('[data-nav]'));
      let cur = els[0];
      els.forEach((el) => { if (el.offsetTop <= y) cur = el; });
      const id = cur?.dataset.nav || 'inicio';
      if (id !== last) { last = id; setActive(id); window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${id}`); }
    };
    ls.on('scroll', detect); detect();

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const target = document.querySelector(a.getAttribute('href') as string) as HTMLElement | null;
      if (!target) return;
      e.preventDefault();
      const wasOpen = !!document.querySelector('.menu');
      setMenu(false);
      // si el índice estaba abierto, esperar a que Lenis se reanude antes de recorrer
      window.setTimeout(() => {
        ls.start();
        ls.scrollTo(target, { force: true, duration: 1.6, easing: (v: number) => (v < 0.5 ? 4 * v * v * v : 1 - Math.pow(-2 * v + 2, 3) / 2) });
      }, wasOpen ? 120 : 0);
    };
    document.addEventListener('click', onClick);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', onKey);
    const h = window.location.hash.slice(1);
    if (h) { const el = document.getElementById(h); if (el) ls.scrollTo(el, { immediate: true }); }
    return () => { cancelAnimationFrame(raf); document.removeEventListener('click', onClick); window.removeEventListener('keydown', onKey); ls.destroy(); };
  }, []);

  useEffect(() => { lenis.current?.[menu ? 'stop' : 'start'](); }, [menu]);

  const idx = Math.max(0, SECTIONS.findIndex((s) => s.id === active));
  const pad = (n: number) => String(n).padStart(2, '0');
  const gh = SOCIAL_LINKS.find((s) => s.platform === 'GitHub')?.url;
  const li = SOCIAL_LINKS.find((s) => s.platform === 'LinkedIn')?.url;
  const marquee = all(C.stack.groups);
  const [first, ...rest] = PROFILE.name.split(' ');

  return (
    <div className="j3">
      <Suspense fallback={null}><World /></Suspense>
      <div className="grain" aria-hidden />
      <motion.div className="progress" style={{ scaleX: bar }} />

      <header className="hud">
        <a href="#inicio" className="brand mono">{PROFILE.name}<span className="dot" /></a>
        <div className="hud-r">
          <button className="ghost mono" onClick={toggleLang} aria-label="Language">{l === 'es' ? 'EN' : 'ES'}</button>
          <button className="ghost mono" onClick={() => setMenu(true)}>{l === 'es' ? 'Índice' : 'Index'} <i className="burger" /></button>
          <a className="pill mono" href="#contacto">{l === 'es' ? 'Contacto' : 'Contact'}</a>
        </div>
      </header>

      <div className="where mono" aria-hidden>
        <span className="where-n">{pad(idx + 1)}</span><span className="where-s">/ {pad(SECTIONS.length)}</span>
        <span className="where-l">{SECTIONS[idx][l]}</span>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div className="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <button className="menu-x mono" onClick={() => setMenu(false)}>{l === 'es' ? 'Cerrar ✕' : 'Close ✕'}</button>
            <nav className="menu-l">
              {SECTIONS.map((s, i) => (
                <motion.a key={s.id} href={`#${s.id}`} data-on={s.id === active} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.6, ease: EASE }}>
                  <span className="mono">{pad(i + 1)}</span>{s[l]}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* INICIO */}
        <Section id="inicio" scene={0} className="hero">
          <Fade className="mono hero-label"><span className="dot" />{x(C.hero.label)}</Fade>
          <h1 className="hero-name" aria-label={PROFILE.name}>
            <span className="wm"><motion.span className="wi" initial={{ y: '115%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}>{first}</motion.span></span>
            <span className="wm"><motion.span className="wi em" initial={{ y: '115%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}>{rest.join(' ')}</motion.span></span>
          </h1>
          <Fade i={3} className="hero-lead"><p>{x(C.hero.lead)}</p></Fade>
          <Fade i={4} className="hero-stats">
            {C.hero.stats.map((st) => (<div key={st.v}><b>{st.v}</b><span className="mono">{x(st.l)}</span></div>))}
          </Fade>
          <Fade i={5} className="hero-cta">
            <a className="btn solid" href="#valor">{x(C.hero.cta)} <span aria-hidden>↓</span></a>
            <span className="mono open"><span className="dot" />{x(C.hero.open)}</span>
          </Fade>
        </Section>

        {/* QUÉ TE LLEVÁS */}
        <Section id="valor" scene={1}>
          <Label id="valor" />
          <Words text={x(C.value.title)} className="title" />
          <div className="rows">
            {C.value.items.map((it, k) => <Row key={k} n={pad(k + 1)} i={k} title={x(it.t)} body={x(it.b)} />)}
          </div>
        </Section>

        {/* ROLES */}
        <Section id="roles" scene={1}>
          <Label id="roles" />
          <Words text={x(C.roles.title)} className="title" />
          <Fade className="lede"><p>{x(C.roles.sub)}</p></Fade>
          <div className="roles3">
            {C.roles.items.map((r, k) => (
              <motion.div className="role" key={k} initial="h" whileInView="v" viewport={inView}>
                <motion.i className="rule" variants={{ h: { scaleX: 0 }, v: { scaleX: 1 } }} transition={{ duration: 1, delay: k * 0.08, ease: EASE }} />
                <motion.div variants={{ h: { opacity: 0, y: 18 }, v: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, delay: 0.1 + k * 0.08, ease: EASE }}>
                  <span className="mono role-now">{x(r.now)}</span>
                  <h3 className="role-h">{x(r.h)}</h3>
                  <p className="row-b">{x(r.b)}</p>
                  <span className="mono role-w">{x(r.w)}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* IA */}
        <Section id="ia" scene={2}>
          <Label id="ia" />
          <Words text={x(C.ai.title)} className="title" />
          <Fade className="statement"><p>{x(C.ai.statement).replace(/\*/g, '')}</p></Fade>
          <Fade className="lede"><p>{x(C.ai.sub)}</p></Fade>
          <div className="split">
            <div>
              <h4 className="mono sub">{x(C.ai.principlesTitle)}</h4>
              <div className="rows">{C.ai.principles.map((p, k) => <Row key={k} n={pad(k + 1)} i={k} title={x(p.t)} body={x(p.b)} />)}</div>
            </div>
            <div>
              <h4 className="mono sub">Flow</h4>
              <Fade className="flow">
                {C.ai.flow.map((f, k) => (<React.Fragment key={k}><div className="flow-n"><span className="mono">{pad(k + 1)}</span>{x(f)}</div>{k < C.ai.flow.length - 1 && <i className="flow-a" />}</React.Fragment>))}
              </Fade>
              <Fade className="lede small"><p>{x(C.ai.flowNote)}</p></Fade>
              <h4 className="mono sub gap">{x(C.ai.evidenceTitle)}</h4>
              <div className="rows">{C.ai.evidence.map((p, k) => <Row key={k} i={k} title={x(p.t)} body={x(p.b)} />)}</div>
            </div>
          </div>
        </Section>

        {/* LIDERAZGO */}
        <Section id="lidero" scene={3}>
          <Label id="lidero" />
          <Words text={x(C.lead.title)} className="title" />
          <div className="split">
            {[C.lead.lead, C.lead.train].map((col) => (
              <div key={col.h.es}>
                <h4 className="mono sub">{x(col.h)}</h4>
                <ul className="plain">{col.items.map((it, k) => (
                  <motion.li key={k} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={inView} transition={{ duration: 0.7, delay: k * 0.06, ease: EASE }}>{x(it)}</motion.li>
                ))}</ul>
              </div>
            ))}
          </div>
        </Section>

        {/* PROYECTOS LABORALES */}
        <Section id="trabajo" scene={4}>
          <Label id="trabajo" />
          <Words text={x(C.work.title)} className="title" />
          <Fade className="lede"><p>{x(C.work.sub)}</p></Fade>
          <div className="cases">
            {C.work.items.map((c, k) => (
              <motion.article className={`case${k === 0 ? ' big' : ''}`} key={c.title.es} initial="h" whileInView="v" viewport={inView}>
                <motion.i className="rule" variants={{ h: { scaleX: 0 }, v: { scaleX: 1 } }} transition={{ duration: 1, ease: EASE }} />
                <motion.div className="case-in" variants={{ h: { opacity: 0, y: 22 }, v: { opacity: 1, y: 0 } }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}>
                  <div className="case-side">
                    <span className="mono case-n">{pad(k + 1)}</span>
                    <span className="mono case-org">{c.org}</span>
                    <div className="tags">{c.roles.map((r) => <span key={r} className="tag mono">{r}</span>)}</div>
                  </div>
                  <div className="case-main">
                    <h3 className="case-t">{x(c.title)}</h3>
                    <p className="row-b">{x(c.summary)}</p>
                    {c.tri && (
                      <div className="tri">
                        {(['c', 'a', 'o'] as const).map((key) => (<div key={key}><h5 className="mono">{x(C.work.labels[key])}</h5><p>{x((c.tri as NonNullable<typeof c.tri>)[key])}</p></div>))}
                      </div>
                    )}
                    {c.points && <ul className="pts">{c.points.map((p, i) => <li key={i}>{x(p)}</li>)}</ul>}
                    <div className="techs">{c.tech.map((n) => <Tech key={n} name={n} />)}</div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* TRAYECTORIA */}
        <Section id="trayectoria" scene={4}>
          <Label id="trayectoria" />
          <Words text={x(C.career.title)} className="title" />
          <div className="jobs">
            {C.career.jobs.map((j, k) => (
              <motion.div className="job" key={j.c} initial="h" whileInView="v" viewport={inView}>
                <motion.i className="rule" variants={{ h: { scaleX: 0 }, v: { scaleX: 1 } }} transition={{ duration: 1, delay: k * 0.05, ease: EASE }} />
                <span className="mono job-y">{j.y}</span><b className="job-c">{j.c}</b><span className="job-r">{x(j.r)}</span>
              </motion.div>
            ))}
          </div>
          <p className="mono fine">{x(C.career.edu)}</p>
        </Section>

        {/* STACK */}
        <Section id="stack" scene={5}>
          <Label id="stack" />
          <Words text={x(C.stack.title)} className="title" />
          <Fade className="lede"><p>{x(C.stack.sub)}</p></Fade>
          <div className="marq" aria-hidden>
            <div className="marq-t">{[...marquee, ...marquee].map((n, k) => <Tech key={k} name={n} />)}</div>
          </div>
          <div className="stack">
            {C.stack.groups.map((g, k) => (
              <Fade key={k} i={k % 3} className="stack-g">
                <h4 className="mono sub">{typeof g.h === 'string' ? g.h : x(g.h)}</h4>
                <div className="techs">{g.c.map((n) => <Tech key={n} name={n} />)}</div>
              </Fade>
            ))}
          </div>
        </Section>

        {/* PROYECTOS PERSONALES */}
        <Section id="personales" scene={6}>
          <Label id="personales" />
          <Words text={x(C.projects.title)} className="title" />
          <Fade className="lede"><p>{x(C.projects.sub)}</p></Fade>
          <div className="proj">
            {C.projects.items.map((p, k) => (
              <motion.div className="proj-r" key={p.n} initial="h" whileInView="v" viewport={inView}>
                <motion.i className="rule" variants={{ h: { scaleX: 0 }, v: { scaleX: 1 } }} transition={{ duration: 1, delay: k * 0.04, ease: EASE }} />
                <span className="mono proj-n">{pad(k + 1)}</span><h3 className="proj-t">{p.n}</h3>
                <p className="proj-d">{x(p.d)}</p><span className="mono proj-s">{p.s}</span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CONTACTO */}
        <Section id="contacto" scene={7} className="end">
          <Label id="contacto" />
          <Words text={x(C.contact.title)} className="giant" />
          <Fade className="lede"><p>{x(C.contact.sub)}</p></Fade>
          <Fade className="mail"><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></Fade>
          <Fade className="hero-cta">
            <a className="btn solid" href="/cv-es.pdf" download><Download />{x(C.contact.cv)}</a>
            <a className="btn" href={li} target="_blank" rel="noreferrer"><Logo i={LINKEDIN} />LinkedIn</a>
            <a className="btn" href={gh} target="_blank" rel="noreferrer"><Logo i={GITHUB} />GitHub</a>
            <a className="btn" href={`mailto:${PROFILE.email}`}><Logo i={GMAIL} />Email</a>
          </Fade>
          <p className="mono fine foot">© {new Date().getFullYear()} {PROFILE.name} · {x(C.contact.loc)}</p>
        </Section>
      </main>
    </div>
  );
}
