import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'data' | 'ai' | 'fullstack'>('all');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'data') return p.technologies.some(t => ['PySpark', 'Databricks', 'Delta Lake', 'Kafka'].includes(t));
    if (filter === 'ai') return p.technologies.some(t => ['Gemini API', 'LangGraph', 'Python'].includes(t));
    if (filter === 'fullstack') return p.technologies.some(t => ['React', 'Node.js', 'FastAPI', 'GraphQL'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="py-20 relative border-y border-[#E8E2D5] dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#5E6AD2] uppercase tracking-wider">
              Featured Systems
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-[#EDEDEF] tracking-tight">
              Engineering Projects
            </h2>
            <p className="text-stone-600 dark:text-[#8A8F98] text-sm max-w-xl">
              Production systems, distributed streaming pipelines, and AI agent architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-stone-200/60 dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.08] w-fit">
            {[
              { id: 'all', label: 'All' },
              { id: 'data', label: 'Data Eng' },
              { id: 'ai', label: 'Gen AI' },
              { id: 'fullstack', label: 'Full Stack' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white dark:bg-[#5E6AD2] text-stone-900 dark:text-[#EDEDEF] font-semibold shadow-xs'
                    : 'text-stone-600 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="editorial-card rounded-xl p-6 flex flex-col justify-between space-y-6 group"
            >
              {/* Top Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/25 font-semibold">
                    {project.date}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-stone-400 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] hover:bg-stone-100 dark:hover:bg-white/[0.04] transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-[#EDEDEF] group-hover:text-[#5E6AD2] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-stone-600 dark:text-[#8A8F98] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="pt-2 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500 dark:text-[#62666D]">
                    Validated Metrics:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.metrics.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FAF7F2] dark:bg-[#08090A] border border-[#E8E2D5] dark:border-white/[0.06] text-stone-700 dark:text-[#EDEDEF]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#E8E2D5] dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-white/[0.02] text-stone-600 dark:text-[#8A8F98]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-[#5E6AD2] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Code</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
