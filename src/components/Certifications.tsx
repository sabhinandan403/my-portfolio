import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="credentials" className="py-20 relative bg-dot-grid border-y border-slate-200 dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Verified Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-[#F1F5F9] tracking-tight">
            Certifications &amp; Education
          </h2>
          <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-2xl">
            Industry accreditations from Databricks, McKinsey &amp; Company, and formal Computer Science degree.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Certification 1: Databricks Certified */}
          <div className="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F1F5F9]">
                {PORTFOLIO_DATA.certifications[0].name}
              </h3>
              <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
                {PORTFOLIO_DATA.certifications[0].issuer} &bull; {PORTFOLIO_DATA.certifications[0].date}
              </p>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Advanced certification demonstrating mastery of Apache Spark, Delta Lake architecture, production ETL, and Databricks data engineering workflows.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-white/[0.06] text-[11px] font-mono text-slate-500 dark:text-neutral-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Professional Credential</span>
            </div>
          </div>

          {/* Certification 2: McKinsey Forward */}
          <div className="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F1F5F9]">
                {PORTFOLIO_DATA.certifications[1].name}
              </h3>
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                {PORTFOLIO_DATA.certifications[1].issuer} &bull; {PORTFOLIO_DATA.certifications[1].date}
              </p>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Competitive leadership and problem-solving development program covering structured business thinking, adaptive communication, and strategic project management.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-white/[0.06] text-[11px] font-mono text-slate-500 dark:text-neutral-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Leadership &amp; Strategy</span>
            </div>
          </div>

          {/* Education: B.Tech CSE */}
          <div className="editorial-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/25 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-[#F1F5F9]">
                {PORTFOLIO_DATA.education.degree}
              </h3>
              <p className="text-xs font-mono text-purple-600 dark:text-purple-400">
                {PORTFOLIO_DATA.education.institution} &bull; {PORTFOLIO_DATA.education.duration}
              </p>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                Graduated with a GPA of <span className="text-slate-900 dark:text-white font-semibold">{PORTFOLIO_DATA.education.gpa}</span>. Focused on distributed computing, database management systems, data structures, and software architecture.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-white/[0.06] text-[11px] font-mono text-slate-500 dark:text-neutral-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Bachelor of Technology</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
