import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Database, Server, Layout, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getIcon = (title: string) => {
    if (title.includes('Data')) return Database;
    if (title.includes('AI')) return Sparkles;
    if (title.includes('Backend')) return Server;
    if (title.includes('Frontend')) return Layout;
    return Cloud;
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technical Ecosystem
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            End-to-end capabilities spanning distributed data engineering, low-latency backends, modern frontends, and AI agent frameworks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => {
            const Icon = getIcon(cat.title);
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-slate-900 border border-cyan-500/60 text-cyan-300 shadow-lg shadow-cyan-500/10 font-semibold'
                    : 'bg-slate-950/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.skillCategories[activeCategory].skills.map((skill, sIdx) => (
            <div
              key={skill.name}
              className="glass-card rounded-2xl border border-slate-800 p-5 space-y-3 hover:border-cyan-500/30 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </div>
                <div className="text-xs font-mono font-semibold text-cyan-400">
                  {skill.level}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Sub-tags */}
              {skill.tags && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
