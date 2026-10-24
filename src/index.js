import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Journey2 from './journey2/Journey2';
import { LanguageProvider } from './context/LanguageContext';
import reportWebVitals from './reportWebVitals';

try { if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'es'); } catch (e) { /* sin storage */ }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {new URLSearchParams(window.location.search).get('v') === '2' ? <LanguageProvider><Journey2 /></LanguageProvider> : <App />}
  </React.StrictMode>
);

reportWebVitals();
