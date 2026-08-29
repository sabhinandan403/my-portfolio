import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeExp, setActiveExp] = useState<string>(PORTFOLIO_DATA.experiences[0].id);

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Chronology &amp; Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-neutral-400 text-sm max-w-2xl">
            Track record of delivering production IoT streaming architectures, low-latency API layers, and full-stack systems.
          </p>
        </div>

        {/* Experience Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Company List Tabs */}
          <div className="md:col-span-4 space-y-2">
            {PORTFOLIO_DATA.experiences.map((exp) => {
              const isSelected = activeExp === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(exp.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-xs ${
                    isSelected
                      ? 'bg-white/[0.06] border-emerald-500/40 text-white'
                      : 'bg-black/20 border-white/[0.06] text-neutral-400 hover:text-neutral-200 hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-sm text-white">
                      {exp.company}
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400' : 'text-neutral-600'}`} />
                  </div>
                  <div className="text-xs font-mono text-emerald-400/90 mt-1">{exp.role}</div>
                  <div className="text-[11px] font-mono text-neutral-500 mt-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Experience Detailed Panel */}
          <div className="md:col-span-8">
            {PORTFOLIO_DATA.experiences
              .filter((exp) => exp.id === activeExp)
              .map((exp) => (
                <div
                  key={exp.id}
                  className="editorial-card rounded-2xl p-6 sm:p-8 space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/[0.08]">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-medium text-emerald-400 mt-0.5 flex items-center gap-2">
                        <span>{exp.company}</span>
                        <span className="text-neutral-600">&bull;</span>
                        <span className="text-neutral-400 font-normal">{exp.projectGroup}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                      <span className="flex items-center gap-1 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06]">
                        <Calendar className="w-3 h-3 text-emerald-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-3">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                      Key Deliverables &amp; Engineering Decisions
                    </div>
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <div className="text-[10px] font-mono text-neutral-500 mb-2 uppercase tracking-wider">
                      Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-black/40 border border-white/[0.08] text-neutral-300 text-[11px] font-mono"
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
