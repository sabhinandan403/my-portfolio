import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PipelineSimulator } from './components/PipelineSimulator';
import { MotionHeatmapDemo } from './components/MotionHeatmapDemo';
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

        {/* Interactive Architecture & Showcase Bento Grid */}
        <section id="showcase" className="py-20 relative bg-dot-grid border-y border-white/[0.08]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Section Header */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Live Interactive Demos
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Architecture &amp; Systems Showcase
              </h2>
              <p className="text-neutral-400 text-sm max-w-2xl">
                Experience the live engines engineered in production: high-frequency IoT streaming and 15-minute sensor bucket aggregation.
              </p>
            </div>

            {/* Bento Grid Item 1: IoT Pipeline Stream Simulator */}
            <PipelineSimulator />

            {/* Bento Grid Item 2: Sensor Motion Aggregation Heatmap Matrix */}
            <MotionHeatmapDemo />

            {/* Bento Grid Item 3: AI Resume Agent Sandbox */}
            <div className="pt-6">
              <AgentChatPreview />
            </div>

          </div>
        </section>

        {/* Experience Chronology */}
        <Experience />

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
