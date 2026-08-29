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
    <footer className="border-t border-white/[0.08] bg-[#08090A] py-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Identity */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#101114] border border-white/[0.1] flex items-center justify-center font-mono font-bold text-xs text-[#EDEDEF]">
              AK
            </div>
            <div>
              <div className="font-semibold text-[#EDEDEF] text-xs">{PORTFOLIO_DATA.personal.name}</div>
              <div className="text-[10px] text-[#62666D] font-mono">Data &amp; AI Engineer</div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-xs font-mono text-[#8A8F98]">
            <a href="#architectures" className="hover:text-[#5E6AD2] transition-colors">System Design</a>
            <a href="#experience" className="hover:text-[#EDEDEF] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#EDEDEF] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#EDEDEF] transition-colors">Skills</a>
            <a href="#credentials" className="hover:text-[#EDEDEF] transition-colors">Credentials</a>
            <button onClick={onOpenResume} className="hover:text-[#5E6AD2] transition-colors flex items-center gap-1 cursor-pointer">
              <FileText className="w-3 h-3 text-[#5E6AD2]" /> Resume (Drive)
            </button>
            <a href="#contact" className="hover:text-[#5E6AD2] transition-colors">Contact</a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#101114] border border-white/[0.08] hover:border-white/[0.18] text-[#8A8F98] hover:text-[#EDEDEF] transition-colors text-xs flex items-center gap-1 font-mono cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#62666D]">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All systems operational (99.4% SLA).
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#EDEDEF] transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#EDEDEF] transition-colors"
            >
              LinkedIn
            </a>
            <span>&bull;</span>
            <a
              href={PORTFOLIO_DATA.personal.googleDriveResumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#5E6AD2] text-[#5E6AD2]/90 transition-colors"
            >
              Google Drive Resume
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
