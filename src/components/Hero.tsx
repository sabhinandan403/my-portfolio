import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, ArrowRight, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-dot-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Status Pill & Accreditation Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/25 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for new opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Databricks Certified Professional</span>
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Full Stack Data Engineer <br />
            <span className="text-neutral-400 font-normal">&amp; AI Agent Architect.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
            I build distributed streaming pipelines with <span className="text-white font-medium">PySpark &amp; Databricks</span>, sub-50ms caching architectures, and autonomous <span className="text-emerald-400 font-medium">AI Agents</span> that translate complex telemetry into clear business insights.
          </p>

          {/* Rapid Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={onOpenResume}
              className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs font-mono transition-all flex items-center gap-1.5 shadow-sm active:scale-98"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume &amp; Drive</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>

            <a
              href="#showcase"
              className="px-4 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-neutral-200 border border-white/[0.1] text-xs font-mono transition-all flex items-center gap-1.5 active:scale-98"
            >
              <span>Explore Interactive Demos</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            <div className="flex items-center gap-2 pl-2 border-l border-white/[0.1]">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-neutral-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-neutral-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-neutral-400 hover:text-emerald-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Minimalist Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-medium text-neutral-300">
                {metric.label}
              </div>
              <div className="text-[11px] font-mono text-neutral-500">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
