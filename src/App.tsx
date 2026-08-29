import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { LisaChatWidget } from './components/LisaChatWidget';

export function AppContent() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F17] text-slate-600 dark:text-[#94A3B8] selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 relative transition-colors duration-300">
      
      {/* Top Floating Glassmorphic Navbar with Integrated Theme Toggle & Anchor Links */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Layout (Centered with Smooth Ergonomic Breathing Room) */}
      <main>
        {/* Profile / Hero Section */}
        <section id="hero">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
        </section>

        {/* System Design & Case Studies */}
        <ArchitectureShowcase />

        {/* Experience Chronology */}
        <Experience />

        {/* Projects Showcase */}
        <Projects />

        {/* Skills & Capabilities Architecture */}
        <SkillsMatrix />

        {/* Credentials & Academics */}
        <Certifications />

        {/* Contact Form & Google Drive Sync */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Interactive AI Assistant: Lisa (Remains Collapsed Until Clicked) */}
      <LisaChatWidget />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
