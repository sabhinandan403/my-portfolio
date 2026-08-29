import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(PORTFOLIO_DATA.experiences[0].id);

  const activeExperience = PORTFOLIO_DATA.experiences.find(e => e.id === activeExpId) || PORTFOLIO_DATA.experiences[0];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Chronology &amp; Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F1F5F9] tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-2xl">
            A timeline of building production data pipelines, caching migrations, and high-concurrency microservices.
          </p>
        </div>

        {/* Chronology Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Company Selector Column */}
          <div className="md:col-span-4 space-y-2">
            {PORTFOLIO_DATA.experiences.map((exp) => {
              const isActive = exp.id === activeExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-start justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-[#131B2A] border-l-2 border-l-emerald-600 dark:border-l-emerald-400 border-y border-r border-slate-200 dark:border-white/[0.08] shadow-sm'
                      : 'hover:bg-slate-100/70 dark:hover:bg-white/[0.03] border border-transparent text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <div>
                    <div className={`font-semibold text-xs sm:text-sm ${isActive ? 'text-slate-900 dark:text-[#F1F5F9]' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200'}`}>
                      {exp.company}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{exp.role}</div>
                    <div className="text-[10px] font-mono text-slate-400 dark:text-neutral-500 mt-1">{exp.period}</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 transition-transform ${isActive ? 'text-emerald-600 dark:text-emerald-400 translate-x-0.5' : 'text-transparent group-hover:text-slate-400 dark:group-hover:text-neutral-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Card */}
          <div className="md:col-span-8 editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div className="space-y-2 pb-5 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-[#F1F5F9]">
                  {activeExperience.role} <span className="text-emerald-600 dark:text-emerald-400 font-normal">@ {activeExperience.company}</span>
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-300">
                  {activeExperience.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  {activeExperience.location}
                </span>
                <span>&bull;</span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  Project: {activeExperience.projectGroup}
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-neutral-500">
                Key Accomplishments &amp; Deliverables
              </div>

              <ul className="space-y-3">
                {activeExperience.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] space-y-2">
              <div className="text-[11px] font-mono text-slate-500 dark:text-neutral-500">Technologies Leveraged:</div>
              <div className="flex flex-wrap gap-1.5">
                {activeExperience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
