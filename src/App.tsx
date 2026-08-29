import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { JourneyNavRail } from './components/JourneyNavRail';
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
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#08090A] text-stone-600 dark:text-[#8A8F98] selection:bg-[#5E6AD2]/25 selection:text-[#5E6AD2] relative transition-colors duration-300">
      
      {/* Top Floating Glassmorphic Navbar with Sun/Moon Theme Toggle */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Left-Side Journey Rail */}
      <JourneyNavRail />

      {/* Main Content Layout with XL left offset */}
      <main className="xl:pl-28">
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
      <div className="xl:pl-28">
        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Floating Interactive AI Assistant: Lisa */}
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
