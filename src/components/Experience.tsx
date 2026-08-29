import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle, Layers, Zap } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeExp, setActiveExp] = useState<string>(PORTFOLIO_DATA.experiences[0].id);

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Proven history of delivering mission-critical IoT data pipelines, low-latency API architectures, and enterprise full-stack systems.
          </p>
        </div>

        {/* Experience Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Company Selection Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {PORTFOLIO_DATA.experiences.map((exp) => {
              const isSelected = activeExp === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(exp.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/50 shadow-xl shadow-cyan-500/10'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-500" />
                  )}
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                      {exp.company}
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                  <div className="text-xs font-medium text-cyan-400/90 mt-1 font-mono">{exp.role}</div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-2">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Experience Detailed Panel */}
          <div className="lg:col-span-8">
            {PORTFOLIO_DATA.experiences
              .filter((exp) => exp.id === activeExp)
              .map((exp) => (
                <div
                  key={exp.id}
                  className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 relative overflow-hidden animate-fadeIn"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 mt-0.5 flex items-center gap-2">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">&bull;</span>
                        <span className="text-slate-300 font-normal">{exp.projectGroup}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {exp.summary}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" /> Key Engineering Deliverables & Impact
                    </div>
                    <div className="space-y-2.5">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-cyan-400" />
                          </div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
          </div>

        </div>

      </div>
    </section>
  );
};
