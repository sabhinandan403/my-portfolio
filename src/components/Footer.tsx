import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#070A11] py-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-slate-200 dark:bg-white/[0.06] border border-slate-300 dark:border-white/[0.1] flex items-center justify-center font-mono font-bold text-xs text-slate-800 dark:text-white">
              AK
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-white text-xs">{PORTFOLIO_DATA.personal.name}</div>
              <div className="text-[10px] text-slate-500 dark:text-neutral-500 font-mono">Data &amp; AI Engineer</div>
            </div>
          </div>

          {/* Quick Nav (Synchronized in 100% lockstep with Top Nav) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-xs font-mono text-slate-600 dark:text-neutral-400">
            <a href="#architectures" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">System Design</a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#credentials" className="hover:text-slate-900 dark:hover:text-white transition-colors">Credentials</a>
            <button onClick={onOpenResume} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer">
              <FileText className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Resume (Drive)
            </button>
            <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.2] text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors text-xs flex items-center gap-1 font-mono cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-500 dark:text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All systems operational (99.4% SLA).
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-neutral-300 transition-colors"
            >
              LinkedIn
            </a>
            <span>&bull;</span>
            <a
              href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 text-emerald-600/90 dark:text-emerald-500/80 transition-colors"
            >
              Google Drive Resume
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
