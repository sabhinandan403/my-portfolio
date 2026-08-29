import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

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
    { label: 'System Design', href: '#architectures' },
    { label: 'Experience', href: '#experience' },
    { label: 'AI Assistant', href: '#ai-assistant' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Credentials', href: '#credentials' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#090D16]/90 backdrop-blur-md border-b border-white/[0.08] shadow-sm' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/[0.12] flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-emerald-500/50 transition-colors">
              AK
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white text-sm tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-neutral-500">
                / Data &amp; Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] text-neutral-300 hover:text-white hover:border-white/[0.25] text-xs font-mono transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume (Drive)</span>
            </button>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs transition-all shadow-sm flex items-center gap-1"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.1] text-neutral-300 text-xs font-mono flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C101A] border-b border-white/[0.08] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-neutral-300 hover:text-white hover:bg-white/[0.04] font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-neutral-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-400" /> View Resume (Drive Sync)
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-emerald-500 text-neutral-950 font-semibold text-xs flex items-center justify-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
