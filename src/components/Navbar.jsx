import { useState, useEffect } from "react";
import { Terminal, Shield, Cpu } from "lucide-react";

export default function Navbar() {
  const [time, setTime] = useState("00:00:00");
  const [activeSection, setActiveSection] = useState("HOME");

  // Real-time ticking terminal clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toTimeString().split(" ")[0]);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  // Real-time location scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "about"];
      const scrollPos = window.scrollY + 200; // Offset for navbar height and trigger margin
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.toUpperCase());
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full border-b border-default bg-neutral-primary sticky top-0 z-40 backdrop-blur-sm bg-opacity-95 font-mono select-none">
      {/* Top Dynamic Telemetry Bar */}
      <div className="bg-neutral-primary border-b border-default border-dashed">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-4 py-2 text-[9px] sm:text-[10px] text-neutral-tertiary-medium">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand flex-shrink-0 animate-pulse-fast" />
            <span className="text-brand font-bold flex-shrink-0">SAMIK-OS</span>
            <span className="hidden sm:inline">//</span>
            <span className="text-heading font-semibold truncate">LOC: /SYS/{activeSection}</span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-strong animate-ping inline-block"></span>
              <span className="text-brand font-bold hidden sm:inline">SECURE</span>
            </div>
            <span className="hidden sm:inline">//</span>
            <span className="text-heading font-semibold">CLOCK: {time}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <nav className="text-body bg-neutral-primary-soft">
        <div className="flex justify-between items-center mx-auto max-w-7xl p-3 sm:p-4 gap-2">
          {/* Brand Logo Anchor */}
          <a
            href="#home"
            className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse group flex-shrink-0"
          >
            <div className="relative">
              <img 
                className="w-7 h-7 sm:w-10 sm:h-10 rounded-full border border-default group-hover:border-brand transition-colors duration-200" 
                src="hero.jpg" 
                alt="Samik Profile" 
              />
              <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-brand rounded-full border border-neutral-primary animate-pulse"></div>
            </div>

            {/* Hidden brand name on mobile to save layout space */}
            <span className="self-center text-sm sm:text-base md:text-xl text-heading font-semibold whitespace-nowrap group-hover:text-brand transition-colors duration-200 font-mono uppercase tracking-wide hidden sm:block">
              Samik B.
            </span>
          </a>

          {/* Symmetrical Navigation Links */}
          <div className="flex items-center flex-grow sm:flex-grow-0 justify-end">
            <ul className="flex flex-row font-medium mt-0 space-x-2 sm:space-x-6 md:space-x-8 rtl:space-x-reverse text-[10px] xs:text-xs sm:text-sm">
              <li>
                <a
                  href="#home"
                  className={`flex items-center gap-0.5 sm:gap-1 font-mono font-semibold transition-all duration-200 group ${
                    activeSection === "HOME" ? "text-brand" : "text-body hover:text-brand"
                  }`}
                >
                  <span className={`text-brand font-bold transition-opacity hidden sm:inline ${
                    activeSection === "HOME" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}>&gt;</span>
                  <span>HOME</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`flex items-center gap-0.5 sm:gap-1 font-mono font-semibold transition-all duration-200 group ${
                    activeSection === "SKILLS" ? "text-brand" : "text-body hover:text-brand"
                  }`}
                >
                  <span className={`text-brand font-bold transition-opacity hidden sm:inline ${
                    activeSection === "SKILLS" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}>&gt;</span>
                  <span>SKILLS</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`flex items-center gap-0.5 sm:gap-1 font-mono font-semibold transition-all duration-200 group ${
                    activeSection === "PROJECTS" ? "text-brand" : "text-body hover:text-brand"
                  }`}
                >
                  <span className={`text-brand font-bold transition-opacity hidden sm:inline ${
                    activeSection === "PROJECTS" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}>&gt;</span>
                  <span>PROJECTS</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`flex items-center gap-0.5 sm:gap-1 font-mono font-semibold transition-all duration-200 group ${
                    activeSection === "ABOUT" ? "text-brand" : "text-body hover:text-brand"
                  }`}
                >
                  <span className={`text-brand font-bold transition-opacity hidden sm:inline ${
                    activeSection === "ABOUT" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}>&gt;</span>
                  <span>ABOUT</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
