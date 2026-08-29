import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { AgentChatPreview } from './components/AgentChatPreview';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090D16] text-neutral-200 selection:bg-emerald-500/20 selection:text-emerald-300 relative">
      
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* System Architecture & Case Studies (Replaces live simulator) */}
        <ArchitectureShowcase />

        {/* Experience Chronology */}
        <Experience />

        {/* AI Resume Assistant */}
        <section id="ai-assistant" className="py-20 relative bg-dot-grid">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Natural Language Exploration
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                AI Resume Assistant
              </h2>
              <p className="text-neutral-400 text-sm max-w-2xl">
                Ask questions about Abhinandan's engineering accomplishments, low-latency API migrations, and tech stack in natural language.
              </p>
            </div>

            <AgentChatPreview />
          </div>
        </section>

        {/* Projects Showcase */}
        <Projects />

        {/* Skills Architecture */}
        <SkillsMatrix />

        {/* Credentials & Academics */}
        <Certifications />

        {/* Contact Form & Google Drive Download Section */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

export default App;
