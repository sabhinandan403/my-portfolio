import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MapPin, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(PORTFOLIO_DATA.experiences[0].id);

  const activeExperience = PORTFOLIO_DATA.experiences.find(e => e.id === activeExpId) || PORTFOLIO_DATA.experiences[0];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-[#5E6AD2] uppercase tracking-wider">
            Chronology &amp; Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#EDEDEF] tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-[#8A8F98] text-sm max-w-2xl">
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
                      ? 'bg-white dark:bg-[#101114] border-l-2 border-l-[#5E6AD2] border-y border-r border-slate-200 dark:border-white/[0.1] shadow-md dark:shadow-lg dark:shadow-black/40'
                      : 'hover:bg-slate-100/70 dark:hover:bg-[#101114]/60 border border-transparent text-slate-600 dark:text-[#8A8F98]'
                  }`}
                >
                  <div>
                    <div className={`font-semibold text-xs sm:text-sm ${isActive ? 'text-slate-900 dark:text-[#EDEDEF]' : 'text-slate-600 dark:text-[#8A8F98] group-hover:text-slate-900 dark:group-hover:text-[#EDEDEF]'}`}>
                      {exp.company}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-[#8A8F98] mt-0.5">{exp.role}</div>
                    <div className="text-[10px] font-mono text-slate-400 dark:text-[#62666D] mt-1">{exp.period}</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 transition-transform ${isActive ? 'text-[#5E6AD2] translate-x-0.5' : 'text-transparent group-hover:text-slate-400 dark:group-hover:text-[#62666D]'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Card */}
          <div className="md:col-span-8 editorial-card rounded-xl p-6 sm:p-8 space-y-6">
            
            {/* Header */}
            <div className="space-y-2 pb-5 border-b border-slate-200 dark:border-white/[0.08]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-[#EDEDEF]">
                  {activeExperience.role} <span className="text-[#5E6AD2] font-normal">@ {activeExperience.company}</span>
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 dark:bg-[#08090A] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#EDEDEF]">
                  {activeExperience.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-[#8A8F98]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#5E6AD2]" />
                  {activeExperience.location}
                </span>
                <span>&bull;</span>
                <span className="text-slate-800 dark:text-[#EDEDEF] font-medium">
                  Project: {activeExperience.projectGroup}
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-[#62666D]">
                Key Accomplishments &amp; Deliverables
              </div>

              <ul className="space-y-3">
                {activeExperience.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-600 dark:text-[#8A8F98]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] space-y-2">
              <div className="text-[11px] font-mono text-slate-500 dark:text-[#62666D]">Technologies Leveraged:</div>
              <div className="flex flex-wrap gap-1.5">
                {activeExperience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#08090A] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-[#EDEDEF]"
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
