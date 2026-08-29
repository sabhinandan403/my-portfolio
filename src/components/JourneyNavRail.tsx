import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

export const JourneyNavRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const sections: Section[] = [
    { id: 'hero', label: 'profile' },
    { id: 'architectures', label: 'system design' },
    { id: 'experience', label: 'experience' },
    { id: 'projects', label: 'projects' },
    { id: 'skills', label: 'capabilities' },
    { id: 'credentials', label: 'credentials' },
    { id: 'contact', label: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? winScroll / height : 0;
      setScrollProgress(Math.min(Math.max(scrolled, 0), 1));

      const scrollPosition = window.scrollY + 280;

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
      aria-label="Journey Navigation Rail"
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 select-none"
    >
      <div className="bg-white/95 dark:bg-[#101114]/90 backdrop-blur-md p-5 rounded-xl border border-slate-200 dark:border-white/[0.08] shadow-xl dark:shadow-2xl shadow-black/5 dark:shadow-black/80 flex flex-col transition-colors duration-200">
        
        {/* Track and Labels Container */}
        <div className="relative flex items-stretch" style={{ height: '320px' }}>
          
          {/* LEFT COLUMN: Vertical Line Track with Walking Avatar & Node Dots */}
          <div className="relative w-7 flex flex-col items-center justify-between shrink-0">
            
            {/* Top START Text */}
            <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 dark:text-[#62666D] uppercase -mt-2">
              START
            </span>

            {/* Background Base Rail Line */}
            <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[2px] bg-slate-200 dark:bg-white/[0.08] rounded-full" />

            {/* Active Progress Glowing Fill Line */}
            <div
              className="absolute top-4 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#5E6AD2] to-[#6875E3] rounded-full transition-all duration-150 shadow-sm shadow-[#5E6AD2]"
              style={{
                height: `calc(${scrollProgress * 100}% * 0.88)`
              }}
            />

            {/* Walking Traveler Avatar */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#5E6AD2] border-2 border-white dark:border-[#101114] flex items-center justify-center text-white dark:text-[#EDEDEF] shadow-md shadow-[#5E6AD2]/50 transition-all duration-150 pointer-events-none z-30"
              style={{
                top: `calc(16px + ${scrollProgress} * (100% - 44px))`,
              }}
            >
              <User className="w-3.5 h-3.5 text-white stroke-[2.8]" />
            </div>

            {/* Node Dots on the Track */}
            <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 flex flex-col justify-between items-center w-full pointer-events-none">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <div
                    key={section.id}
                    className={`w-2.5 h-2.5 rounded-full border transition-all duration-200 z-20 ${
                      isActive
                        ? 'bg-[#5E6AD2] border-[#5E6AD2] scale-125 shadow-sm shadow-[#5E6AD2]'
                        : 'bg-white dark:bg-[#101114] border-slate-300 dark:border-white/[0.2]'
                    }`}
                  />
                );
              })}
            </div>

            {/* Bottom NOW Text */}
            <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 dark:text-[#62666D] uppercase -mb-2">
              NOW
            </span>
          </div>

          {/* RIGHT COLUMN: Clear Labels */}
          <div className="flex flex-col justify-between pl-4 py-3.5">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group flex items-center text-left py-0.5 focus:outline-none transition-all cursor-pointer"
                  title={`Go to ${section.label}`}
                >
                  <span
                    className={`text-xs font-mono tracking-tight transition-all ${
                      isActive
                        ? 'text-slate-900 dark:text-[#EDEDEF] font-bold scale-105 origin-left'
                        : 'text-slate-500 dark:text-[#8A8F98] hover:text-slate-900 dark:hover:text-[#EDEDEF]'
                    }`}
                  >
                    {section.label}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </aside>
  );
};
