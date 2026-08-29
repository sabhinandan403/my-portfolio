import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, ArrowUpRight, Cpu, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Data Engineering', 'Gen AI & ML', 'Full Stack', 'Cloud & Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Code className="w-3.5 h-3.5" />
            <span>FEATURED SYSTEMS & BUILDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Agentic Architectures
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From distributed streaming lakehouses to autonomous Text-to-SQL AI agents.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800 p-6 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400 transition-all" />

              <div className="space-y-4">
                {/* Category & Date */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{project.date}</span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs text-cyan-400/80 font-mono mt-1">{project.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Pipeline Flow */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-cyan-400" /> Architecture Flow:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.architecture.map((arch, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {arch}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-1 pt-2">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Links Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
                    >
                      <GithubIcon className="w-4 h-4" /> View Source
                    </a>
                  )}
                  <span className="text-[11px] font-mono text-slate-500">Verified System</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
