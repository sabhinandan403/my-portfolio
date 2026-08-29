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
    <footer className="border-t border-slate-800 bg-[#070A12] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
              AK
            </div>
            <div>
              <div className="font-bold text-white text-sm">{PORTFOLIO_DATA.personal.name}</div>
              <div className="text-xs text-slate-400 font-mono">Full Stack Data Engineer & AI Developer</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#playground" className="hover:text-cyan-400 transition-colors">Playground</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <button onClick={onOpenResume} className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> Resume (Drive)
            </button>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-400 hover:text-cyan-400 transition-all text-xs flex items-center gap-1.5"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline font-mono">Top</span>
          </button>
        </div>

        {/* Bottom copyright & status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All systems operational (99.4% SLA).
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <span>&bull;</span>
            <a
              href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 text-cyan-500/80 transition-colors"
            >
              Google Drive Resume
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
