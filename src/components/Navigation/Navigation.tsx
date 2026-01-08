import React from 'react';
import './Navigation.css';
import { NAVIGATION_LINKS } from '../../constants/profile';
import { LogoSVG } from '../common/Logo';
import { ThemeToggle } from './ThemeToggle';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <LogoSVG />
        </div>

        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.href} className="navbar-item">
              <a
                href={link.href}
                className="navbar-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
};
