import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledPct);

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
      <div className={`max-w-6xl mx-auto rounded-xl transition-all duration-300 relative ${
        scrolled 
          ? 'bg-white/90 dark:bg-[#101114]/90 backdrop-blur-xl border border-slate-200 dark:border-white/[0.12] shadow-lg dark:shadow-2xl dark:shadow-black/80' 
          : 'bg-white/70 dark:bg-[#101114]/60 backdrop-blur-md border border-slate-200 dark:border-white/[0.08]'
      }`}>
        
        {/* Linear Indigo Micro Progress Line at top of Navbar */}
        <div
          className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#5E6AD2] to-transparent transition-all duration-150 rounded-full"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 gap-4">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 text-slate-900 dark:text-[#EDEDEF] hover:text-[#5E6AD2] transition-colors group">
              <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-[#16181D] border border-slate-200 dark:border-white/[0.12] flex items-center justify-center font-mono font-bold text-xs text-slate-900 dark:text-[#EDEDEF] group-hover:border-[#5E6AD2]/60 transition-colors">
                AK
              </div>
              <span className="font-semibold text-xs sm:text-sm tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </a>

            <span className="hidden xl:inline-flex text-[11px] font-mono text-slate-500 dark:text-[#62666D] pl-2.5 border-l border-slate-200 dark:border-white/[0.08] select-none">
              Data &amp; AI Engineer
            </span>
          </div>

          {/* Unified Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 flex-1 max-w-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 relative ${
                    isActive
                      ? 'text-[#5E6AD2] dark:text-[#EDEDEF] bg-[#5E6AD2]/10 dark:bg-white/[0.06] font-semibold'
                      : 'text-slate-600 dark:text-[#8A8F98] hover:text-slate-900 dark:hover:text-[#EDEDEF] hover:bg-slate-100 dark:hover:bg-white/[0.03]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-[#5E6AD2] rounded-full shadow-sm shadow-[#5E6AD2]" />
                  )}
                </a>
              );
            })}

            {/* Resume Link */}
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-600 dark:text-[#8A8F98] hover:text-[#5E6AD2] hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#5E6AD2]" />
              <span>Resume (Drive)</span>
            </button>
          </nav>

          {/* Right Actions: Theme Toggle & Connect CTA */}
          <div className="flex items-center gap-2.5 shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-[#16181D] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-[#8A8F98] hover:text-slate-900 dark:hover:text-[#EDEDEF] hover:border-slate-300 dark:hover:border-white/[0.18] transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:flex px-3.5 py-1.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6875E3] text-white dark:text-[#EDEDEF] font-semibold text-xs font-mono transition-all items-center gap-1 shadow-md shadow-[#5E6AD2]/25 border border-white/[0.1] active:scale-95 cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                onClick={onOpenResume}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-[#8A8F98] text-xs font-mono flex items-center gap-1"
                title="Resume"
              >
                <FileText className="w-3.5 h-3.5 text-[#5E6AD2]" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-[#8A8F98] hover:text-slate-900 dark:hover:text-[#EDEDEF]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-white/[0.08] px-4 pt-3 pb-5 space-y-2 bg-white/98 dark:bg-[#101114]/98 rounded-b-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-xs font-mono text-slate-600 dark:text-[#8A8F98] hover:text-[#5E6AD2] dark:hover:text-[#EDEDEF] hover:bg-slate-100 dark:hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-xs font-mono text-[#5E6AD2] hover:bg-slate-100 dark:hover:bg-white/[0.04] flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" /> View Resume (Google Drive)
            </button>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2 rounded-lg bg-[#5E6AD2] text-white dark:text-[#EDEDEF] font-semibold text-xs font-mono flex items-center justify-center shadow-md shadow-[#5E6AD2]/25"
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
