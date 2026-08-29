import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Database, Server, Layout, Sparkles, Compass } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getIcon = (title: string) => {
    if (title.includes('Data')) return Database;
    if (title.includes('AI')) return Sparkles;
    if (title.includes('Backend')) return Server;
    if (title.includes('Frontend')) return Layout;
    return Compass;
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills Architecture
          </h2>
          <p className="text-neutral-400 text-sm max-w-2xl">
            Core technical competencies organized across data engineering, AI agents, backend architectures, and frontend craft.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => {
            const Icon = getIcon(cat.title);
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono flex items-center gap-2 transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-sm'
                    : 'bg-black/30 border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/[0.2]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-neutral-950' : 'text-neutral-500'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.skillCategories[activeCategory].skills.map((skill) => (
            <div
              key={skill.name}
              className="editorial-card rounded-xl p-4 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-xs text-white">
                  {skill.name}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-black/40 rounded-full h-1 overflow-hidden border border-white/[0.06]">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Sub-tags */}
              {skill.tags && (
                <div className="flex flex-wrap gap-1 pt-1">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/30 text-neutral-400 border border-white/[0.04]"
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
