import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Database, Bot, Server, Layout, Compass, Sparkles } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [activeTabTitle, setActiveTabTitle] = useState<string>(PORTFOLIO_DATA.skillCategories[0].title);

  const activeCategory = PORTFOLIO_DATA.skillCategories.find(c => c.title === activeTabTitle) || PORTFOLIO_DATA.skillCategories[0];

  const getTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return Database;
      case 'Sparkles': return Sparkles;
      case 'Server': return Server;
      case 'Layout': return Layout;
      default: return Compass;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Technical Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F1F5F9] tracking-tight">
            Skills Architecture
          </h2>
          <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-2xl">
            Categorized capabilities spanning large-scale data engineering, Gen AI agent development, and high-performance backend systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {PORTFOLIO_DATA.skillCategories.map((cat) => {
            const Icon = getTabIcon(cat.icon);
            const isActive = cat.title === activeTabTitle;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTabTitle(cat.title)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-neutral-950 font-semibold shadow-sm'
                    : 'bg-white dark:bg-black/30 border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/[0.2]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Category Card */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
            <h3 className="text-lg font-bold text-slate-900 dark:text-[#F1F5F9] flex items-center gap-2">
              <span>{activeCategory.title}</span>
            </h3>
            <span className="text-xs font-mono text-slate-500 dark:text-neutral-500">
              {activeCategory.skills.length} Core Competencies
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/[0.06] space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Meter */}
                <div className="w-full h-1.5 bg-slate-200 dark:bg-white/[0.08] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-600 dark:bg-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Skill Tags */}
                {skill.tags && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {skill.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
