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
    <section id="projects" className="py-20 relative bg-dot-grid border-y border-slate-200 dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Featured Systems
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F1F5F9] tracking-tight">
              Engineering Projects
            </h2>
            <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-xl">
              Production systems, distributed streaming pipelines, and AI agent architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.06] w-fit">
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
                    ? 'bg-white dark:bg-emerald-500 text-slate-900 dark:text-neutral-950 font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
              className="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-6 group"
            >
              {/* Top Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-medium">
                    {project.date}
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#F1F5F9] group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="pt-2 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-neutral-500">
                    Validated Metrics:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.metrics.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-slate-700 dark:text-slate-300"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.02] text-slate-500 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
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
