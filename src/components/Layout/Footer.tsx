import React from 'react';
import './Footer.css';
import { useLang } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__copy">
            © {year} {t.footer.copy}
          </p>
          <p className="footer__built">{t.footer.built}</p>
        </div>
      </div>
    </footer>
  );
};
