import React, { useState, useEffect } from 'react';
import { User, Compass, ArrowDown } from 'lucide-react';

interface Section {
  id: string;
  num: string;
  label: string;
}

export const JourneyNavRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const sections: Section[] = [
    { id: 'hero', num: '01', label: 'profile' },
    { id: 'architectures', num: '02', label: 'system design' },
    { id: 'experience', num: '03', label: 'experience' },
    { id: 'projects', num: '04', label: 'projects' },
    { id: 'skills', num: '05', label: 'capabilities' },
    { id: 'credentials', num: '06', label: 'credentials' },
    { id: 'contact', num: '07', label: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress (0 to 1)
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? winScroll / height : 0;
      setScrollProgress(Math.min(Math.max(scrolled, 0), 1));

      // Determine active section
      const sectionElements = sections.map(s => document.getElementById(s.id === 'hero' ? 'root' : s.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(s.id);
            break;
          }
        } else if (s.id === 'hero') {
          setActiveSection('hero');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside
      aria-label="Journey Progress Navigation"
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none"
    >
      <div className="flex flex-col items-center bg-[#090D16]/90 backdrop-blur-md p-4 rounded-2xl border border-white/[0.08] shadow-2xl">
        
        {/* START Label */}
        <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2">
          START
        </span>

        {/* The Vertical Rail Track */}
        <div className="relative flex flex-col items-center py-2" style={{ height: '360px' }}>
          
          {/* Background Grey Line */}
          <div className="absolute top-0 bottom-0 w-[2px] bg-white/[0.1] rounded-full" />

          {/* Active Progress Fill Line (Warm Amber/Emerald gradient) */}
          <div
            className="absolute top-0 w-[2px] bg-gradient-to-b from-amber-400 via-emerald-400 to-emerald-500 rounded-full transition-all duration-150"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Walking Traveler Icon Avatar (Moves dynamically along the track) */}
          <div
            className="absolute -left-[14px] w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 border-2 border-[#090D16] flex items-center justify-center text-neutral-950 shadow-lg shadow-amber-500/40 transition-all duration-150 pointer-events-none z-20"
            style={{
              top: `calc(${scrollProgress * 100}% - 16px)`,
            }}
          >
            {/* Pulsing halo ring */}
            <div className="absolute inset-0 rounded-full border border-amber-300 animate-ping opacity-30" />
            <User className="w-4 h-4 text-neutral-950 stroke-[2.5]" />
          </div>

          {/* Section Nodes */}
          <div className="h-full flex flex-col justify-between items-center relative z-10 w-full">
            {sections.map((section, idx) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group flex items-center gap-3 w-full text-left py-0.5 focus:outline-none"
                  title={`Jump to ${section.label}`}
                >
                  {/* Node Circle */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center text-[9px] font-mono transition-all duration-200 ${
                      isActive
                        ? 'bg-[#090D16] border-amber-400 text-amber-300 font-bold scale-110 shadow-sm shadow-amber-400/50'
                        : 'bg-[#090D16] border-white/[0.2] text-neutral-400 group-hover:border-white/[0.5] group-hover:text-white'
                    }`}
                  >
                    {section.num}
                  </div>

                  {/* Section Label (reveals or stays crisp) */}
                  <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span
                      className={`text-[11px] font-mono tracking-tight transition-colors ${
                        isActive
                          ? 'text-amber-400 font-semibold'
                          : 'text-neutral-500 group-hover:text-neutral-200'
                      }`}
                    >
                      {section.label}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* NOW / END Label */}
        <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-500 uppercase mt-2">
          NOW
        </span>

      </div>
    </aside>
  );
};
