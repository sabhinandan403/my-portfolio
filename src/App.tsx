import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneyNavRail } from './components/JourneyNavRail';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { LisaChatWidget } from './components/LisaChatWidget';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090D16] text-neutral-200 selection:bg-emerald-500/20 selection:text-emerald-300 relative">
      
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Vertical Journey Rail (Walking Timeline Indicator) */}
      <JourneyNavRail />

      {/* Main Content Layout with XL left offset for Journey Rail */}
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

export default App;
