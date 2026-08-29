import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Data Engineering', 'Gen AI & ML', 'Full Stack', 'Cloud & Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-dot-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Featured Systems
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="text-neutral-400 text-sm max-w-2xl">
            Distributed streaming architectures, autonomous AI agents, and telemetry engines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-sm'
                  : 'bg-black/30 border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/[0.2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="editorial-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Category & Date */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">{project.date}</span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-1">{project.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Flow */}
                <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-emerald-400" /> Architecture Flow:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.architecture.map((arch, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-neutral-400 border border-white/[0.06]"
                      >
                        {arch}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-1 pt-1">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Source Link */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-white/[0.06] text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white flex items-center gap-1 text-xs font-mono shrink-0 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> Source
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
