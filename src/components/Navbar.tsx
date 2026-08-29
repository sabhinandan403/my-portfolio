import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPct);

      // Active section detection
      const sections = ['hero', 'architectures', 'experience', 'projects', 'skills', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        const el = document.getElementById(s);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(s);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'System Design', href: '#architectures', id: 'architectures' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Credentials', href: '#credentials', id: 'credentials' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300">
      <div className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 relative ${
        scrolled 
          ? 'bg-[#0B0F17]/85 backdrop-blur-xl border border-white/[0.1] shadow-2xl shadow-black/50' 
          : 'bg-[#0B0F17]/40 backdrop-blur-md border border-white/[0.06]'
      }`}>
        
        {/* Subtle 1px Scroll Progress Line at top of Navbar */}
        <div
          className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-emerald-500/0 via-emerald-400 to-emerald-500/0 transition-all duration-150 rounded-full"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          
          {/* Logo & Brand Identity (Removed Backslash) */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-white/[0.12] flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-emerald-500/60 group-hover:text-emerald-400 transition-colors">
              AK
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-white text-xs sm:text-sm tracking-tight group-hover:text-emerald-300 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="hidden md:inline-block text-[11px] font-mono text-neutral-400">
                &bull; Data &amp; Systems
              </span>
            </div>
          </a>

          {/* Unified Desktop Navigation Links with Consistent Spacing & Hover Spotlight */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 relative ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-500/[0.08] font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-emerald-400 rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Seamless Resume Link (No Box, Uniform with Nav Links) */}
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-400 hover:text-emerald-300 hover:bg-white/[0.04] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume (Drive)</span>
            </button>
          </nav>

          {/* Right Action: Clean Interactive CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs font-mono transition-all flex items-center gap-1 shadow-sm hover:shadow-emerald-500/20 active:scale-95"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-1.5 rounded-lg bg-white/[0.04] text-neutral-300 text-xs font-mono flex items-center gap-1"
              title="Resume"
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

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/[0.08] px-4 pt-3 pb-5 space-y-2 bg-[#0B0F17]/95 rounded-b-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-xs font-mono text-neutral-300 hover:text-emerald-400 hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-mono text-emerald-400 hover:bg-white/[0.04] flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" /> View Resume (Google Drive)
            </button>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2 rounded-lg bg-emerald-500 text-neutral-950 font-semibold text-xs font-mono flex items-center justify-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
