import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Database, Sparkles, Briefcase, Code, Award, Mail, FileText, Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Architecture & Live Demo', href: '#playground', icon: Database },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: Code },
    { label: 'AI Agent', href: '#ai-agent', icon: Sparkles },
    { label: 'Skills', href: '#skills', icon: Terminal },
    { label: 'Certifications', href: '#certifications', icon: Award },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B0F19]/85 backdrop-blur-md border-b border-cyan-500/10 shadow-lg shadow-black/40' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-cyan-400 text-lg">AK</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors text-base tracking-tight flex items-center gap-1.5">
                {PORTFOLIO_DATA.personal.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-xs text-slate-400 font-mono">Full Stack Data Eng & AI</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-all font-medium flex items-center gap-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Resume Modal / Drive */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all text-sm font-medium flex items-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume & Drive</span>
            </button>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-cyan-500/25 hover:shadow-cyan-400/40"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-1"
              aria-label="Open Resume"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden xs:inline">Resume</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80 text-sm font-medium"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-800 border border-cyan-500/30 text-cyan-300 font-medium text-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> View Resume (Google Drive Sync)
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm flex items-center justify-center"
            >
              Contact Abhinandan
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
