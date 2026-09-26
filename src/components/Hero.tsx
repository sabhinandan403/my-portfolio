import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, ArrowRight, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 ambient-glow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Status Pill & Accreditation Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 dark:bg-[#4EBA6F]/10 border border-emerald-600/20 dark:border-[#4EBA6F]/25 text-xs font-mono text-emerald-800 dark:text-[#4EBA6F]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#4EBA6F] animate-pulse" />
            <span>Available for new opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#101114] border border-[#E8E2D5] dark:border-white/[0.08] text-xs font-mono text-stone-600 dark:text-[#8A8F98] shadow-xs dark:shadow-none">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5E6AD2]" />
            <span>Databricks Certified Professional</span>
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-[#EDEDEF] leading-[1.08]">
            Data Engineer <br />
            <span className="text-stone-500 dark:text-[#8A8F98] font-normal">Snowflake &bull; dbt &bull; Databricks.</span>
          </h1>

          {/* Simple, Non-Tech Friendly & Impactful Copy */}
          <p className="text-base sm:text-lg text-stone-600 dark:text-[#8A8F98] max-w-2xl leading-relaxed font-normal">
            Data Engineer with 3 years of experience architecting staged-to-mart ELT pipelines in Snowflake &amp; dbt, high-throughput PySpark telemetry lakehouses in Databricks, and low-latency API caching layers.
          </p>

          {/* Rapid Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6875E3] text-white dark:text-[#EDEDEF] font-semibold text-xs font-mono transition-all flex items-center gap-1.5 shadow-md shadow-[#5E6AD2]/25 border border-white/[0.1] active:scale-98 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="#architectures"
              className="px-4 py-2.5 rounded-lg bg-white dark:bg-[#101114] hover:bg-stone-50 dark:hover:bg-[#16181D] text-stone-800 dark:text-[#EDEDEF] border border-[#E8E2D5] dark:border-white/[0.08] hover:border-stone-400 dark:hover:border-white/[0.18] text-xs font-mono transition-all flex items-center gap-1.5 active:scale-98 cursor-pointer shadow-xs dark:shadow-none"
            >
              <span>Explore Work Deliverables</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            <div className="flex items-center gap-2 pl-2 border-l border-[#E8E2D5] dark:border-white/[0.08]">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#101114] hover:bg-stone-50 dark:hover:bg-[#16181D] border border-[#E8E2D5] dark:border-white/[0.08] hover:border-stone-400 dark:hover:border-white/[0.18] text-stone-600 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] transition-colors shadow-xs dark:shadow-none"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-[#101114] hover:bg-stone-50 dark:hover:bg-[#16181D] border border-[#E8E2D5] dark:border-white/[0.08] hover:border-stone-400 dark:hover:border-white/[0.18] text-stone-600 dark:text-[#8A8F98] hover:text-stone-900 dark:hover:text-[#EDEDEF] transition-colors shadow-xs dark:shadow-none"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-lg bg-white dark:bg-[#101114] hover:bg-stone-50 dark:hover:bg-[#16181D] border border-[#E8E2D5] dark:border-white/[0.08] hover:border-stone-400 dark:hover:border-white/[0.18] text-stone-600 dark:text-[#8A8F98] hover:text-[#5E6AD2] transition-colors shadow-xs dark:shadow-none"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Minimalist Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-[#E8E2D5] dark:border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-stone-900 dark:text-[#EDEDEF] tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-medium text-stone-700 dark:text-[#8A8F98]">
                {metric.label}
              </div>
              <div className="text-[11px] font-mono text-stone-500 dark:text-[#62666D]">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
