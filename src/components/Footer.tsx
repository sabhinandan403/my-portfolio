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
    <footer className="border-t border-white/[0.08] bg-[#070A11] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-white/[0.06] border border-white/[0.1] flex items-center justify-center font-mono font-bold text-xs text-white">
              AK
            </div>
            <div>
              <div className="font-semibold text-white text-xs">{PORTFOLIO_DATA.personal.name}</div>
              <div className="text-[10px] text-neutral-500 font-mono">Full Stack Data &amp; AI Engineer</div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-neutral-400">
            <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <button onClick={onOpenResume} className="hover:text-emerald-400 transition-colors flex items-center gap-1">
              <FileText className="w-3 h-3" /> Resume (Drive)
            </button>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] text-neutral-400 hover:text-white transition-colors text-xs flex items-center gap-1 font-mono"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All systems operational (99.4% SLA).
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              LinkedIn
            </a>
            <span>&bull;</span>
            <a
              href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 text-emerald-500/80 transition-colors"
            >
              Google Drive Resume
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
