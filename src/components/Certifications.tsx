import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal professional accreditations, executive leadership training, and computer science engineering foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Certifications List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Professional Accreditations</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-slate-800 p-5 space-y-3 hover:border-cyan-500/40 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {cert.name}
                    </h4>
                    <div className="text-xs font-mono text-cyan-400 mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Box (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Academic Background</span>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 p-6 space-y-4 h-[calc(100%-2rem)] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <BookOpen className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-bold text-white text-base">
                    {PORTFOLIO_DATA.education.degree}
                  </h4>
                  <div className="text-sm text-cyan-400 font-mono mt-0.5">
                    {PORTFOLIO_DATA.education.institution}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    {PORTFOLIO_DATA.education.duration}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-block text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    GPA: {PORTFOLIO_DATA.education.gpa}
                  </span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  {PORTFOLIO_DATA.education.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800/80">
                Verified Computer Science Degree
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
