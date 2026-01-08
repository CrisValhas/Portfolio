import React from 'react';
import './styles/globals.css';
import './styles/theme.css';
import { ThemeProvider } from './context/ThemeContext';
import { OnboardingProvider } from './context/OnboardingContext';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Layout/Hero';
import { About } from './components/Layout/About';
import { ExperienceSection } from './components/Experience/Experience';
import { SkillsSection } from './components/Skills/Skills';
import { ProjectsSection } from './components/Projects/Projects';
import { Contact } from './components/Layout/Contact';
import { Footer } from './components/Layout/Footer';
import { JourneyScroll } from './components/Journey';

function AppContent() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
      <JourneyScroll />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <OnboardingProvider>
        <AppContent />
      </OnboardingProvider>
    </ThemeProvider>
  );
}

export default App;
