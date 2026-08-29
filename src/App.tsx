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
import { Database, Activity, Sparkles, Code, Cpu } from 'lucide-react';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 relative">
      
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Interactive Architecture & Live Telemetry Playground */}
        <section id="playground" className="py-20 relative bg-grid-pattern border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
                <Activity className="w-3.5 h-3.5" />
                <span>INTERACTIVE ARCHITECTURE PLAYGROUND</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Live Data Engines in Action
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Experience the real-time systems engineered in production: high-frequency IoT streaming and 15-minute sensor bucket aggregation.
              </p>
            </div>

            {/* Demo 1: IoT Pipeline Stream Simulator */}
            <PipelineSimulator />

            {/* Demo 2: Sensor Motion Aggregation Heatmap Matrix */}
            <MotionHeatmapDemo />

          </div>
        </section>

        {/* Experience Timeline */}
        <Experience />

        {/* Projects Showcase */}
        <Projects />

        {/* AI Agent Showcase Section */}
        <section id="ai-agent" className="py-20 relative bg-grid-pattern border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GEN AI & AGENTIC SYSTEMS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Autonomous AI Portfolio Agent
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Try the interactive retrieval agent to query Abhinandan's engineering accomplishments, low-latency API migrations, and tech stack in natural language.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <AgentChatPreview />
            </div>
          </div>
        </section>

        {/* Skills Matrix */}
        <SkillsMatrix />

        {/* Certifications & Academics */}
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
