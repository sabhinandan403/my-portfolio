import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, BookOpen } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="credentials" className="py-20 relative bg-dot-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 space-y-2">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            Verified Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Accreditations &amp; Education
          </h2>
          <p className="text-neutral-400 text-sm max-w-2xl">
            Official certifications in data engineering, structured problem solving, and computer science foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Certifications (7 cols) */}
          <div className="md:col-span-7 space-y-3">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Professional Certifications</span>
            </div>

            <div className="space-y-3">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="editorial-card rounded-xl p-4 space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {cert.name}
                      </h4>
                      <div className="text-xs font-mono text-emerald-400 mt-0.5">
                        {cert.issuer}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Academic Degree</span>
            </div>

            <div className="editorial-card rounded-xl p-5 space-y-3 h-[calc(100%-1.75rem)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <BookOpen className="w-4 h-4" />
                </div>

                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {PORTFOLIO_DATA.education.degree}
                  </h4>
                  <div className="text-xs text-emerald-400 font-mono mt-0.5">
                    {PORTFOLIO_DATA.education.institution}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                    {PORTFOLIO_DATA.education.duration}
                  </div>
                </div>

                <div>
                  <span className="inline-block text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/[0.06] text-neutral-200 border border-white/[0.08]">
                    GPA: {PORTFOLIO_DATA.education.gpa}
                  </span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                  {PORTFOLIO_DATA.education.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-neutral-300 leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[10px] font-mono text-neutral-500 pt-2 border-t border-white/[0.06]">
                Verified CS Engineering Degree
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
