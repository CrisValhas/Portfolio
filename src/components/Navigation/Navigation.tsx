import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { useTheme } from '../../context/ThemeContext';
import { useLang } from '../../context/LanguageContext';

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setIsOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinks = [
    { label: t.nav.what, href: '#what' },
    { label: t.nav.work, href: '#work' },
    { label: t.nav.philosophy, href: '#philosophy' },
    { label: t.nav.ai, href: '#ai' },
    { label: t.nav.delivery, href: '#delivery' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav__inner container">
        {/* Brand */}
        <a href="#home" className="nav__brand" aria-label="Cristian Valtelhas — home">
          <span className="nav__brand-dot" aria-hidden="true" />
          <span className="nav__brand-name">CV</span>
        </a>

        {/* Desktop links */}
        <ul className="nav__links" role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="nav__link" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="nav__controls">
          <button
            className="nav__toggle-btn"
            onClick={toggleLang}
            aria-label={`Switch to ${lang === 'en' ? 'Spanish' : 'English'}`}
            title={`Switch to ${lang === 'en' ? 'Español' : 'English'}`}
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            className="nav__toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="nav__hamburger"
            onClick={() => setIsOpen(o => !o)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer${isOpen ? ' nav__drawer--open' : ''}`} aria-hidden={!isOpen}>
        <ul role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav__drawer-link"
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
            <a href="/cv-en.pdf" download className="btn-outline" style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}>
              {t.nav.cvEn}
            </a>
            <a href="/cv-es.pdf" download className="btn-outline" style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}>
              {t.nav.cvEs}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

