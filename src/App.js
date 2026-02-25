import React from 'react';
import './styles/globals.css';
import './styles/theme.css';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Layout/Hero';
import { WhatIBuild } from './components/sections/WhatIBuild';
import { FeaturedWork } from './components/sections/FeaturedWork';
import { Philosophy } from './components/sections/Philosophy';
import { AIWorkflow } from './components/sections/AIWorkflow';
import { Delivery } from './components/sections/Delivery';
import { Contact } from './components/Layout/Contact';
import { Footer } from './components/Layout/Footer';

function AppContent() {
  return (
    <div className="App">
      <Navigation />
      <main id="main-content">
        <Hero />
        <WhatIBuild />
        <FeaturedWork />
        <Philosophy />
        <AIWorkflow />
        <Delivery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
