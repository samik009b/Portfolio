import { ArrowUp, Terminal, Shield, Network } from "lucide-react";

export default function FooterComponent() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-neutral-primary-soft border-t-2 border-double border-default py-8 mt-12 font-mono text-xs">
      <div className="mx-auto w-full max-w-7xl px-4 space-y-8">
        
        {/* Symmetrical Dual-Grid on Mobile, 3-Column on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pb-6 border-b border-default border-dashed">
          {/* Column 1: System Index */}
          <div className="space-y-3">
            <div className="text-[10px] text-brand font-bold uppercase tracking-wider flex items-center gap-1.5 border-b border-default pb-2 select-none">
              <Terminal className="w-3.5 h-3.5 text-brand" />
              <span>SYSTEM_MAP</span>
            </div>
            <ul className="space-y-2 text-neutral-tertiary-medium">
              <li>
                <a href="#home" className="hover:text-brand hover:underline flex items-center gap-1">
                  <span>&gt;</span> HOME_NODE
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand hover:underline flex items-center gap-1">
                  <span>&gt;</span> TECH_SKILLS
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand hover:underline flex items-center gap-1">
                  <span>&gt;</span> ARCHIVE_DEV
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand hover:underline flex items-center gap-1">
                  <span>&gt;</span> ABOUT_SYS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Net Access Nodes */}
          <div className="space-y-3">
            <div className="text-[10px] text-brand font-bold uppercase tracking-wider flex items-center gap-1.5 border-b border-default pb-2 select-none">
              <Network className="w-3.5 h-3.5 text-brand" />
              <span>NET_GATEWAYS</span>
            </div>
            <ul className="space-y-2 text-neutral-tertiary-medium">
              <li>
                <a href="tel:+916291116968" className="hover:text-brand hover:underline flex items-center gap-1">
                  <span>&gt;</span> TEL: +91-6291
                </a>
              </li>
              <li>
                <a href="mailto:mail@samik.dev" className="hover:text-brand hover:underline flex items-center gap-1">
                  <span>&gt;</span> MAIL: mail@samik
                </a>
              </li>
              <li>
                <a href="https://github.com/samik009b" target="_blank" rel="noreferrer" className="hover:text-brand hover:underline flex items-center gap-1">
                  <span>&gt;</span> GIT: samik009b
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/samik" target="_blank" rel="noreferrer" className="hover:text-brand hover:underline flex items-center gap-1">
                  <span>&gt;</span> LINK: samik-in
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Diagnostic Telemetry - Hidden on mobile viewports for clean, compact space */}
          <div className="space-y-3 hidden md:block">
            <div className="text-[10px] text-brand font-bold uppercase tracking-wider flex items-center gap-1.5 border-b border-default pb-2 select-none">
              <Shield className="w-3.5 h-3.5 text-brand" />
              <span>SYS_SPECS // SECURE</span>
            </div>
            <div className="space-y-2 text-neutral-tertiary-medium leading-relaxed">
              <div>HOST: SAMIK-MAINFRAME</div>
              <div>VERSION: RE-MINIMAL v4.2</div>
              <div>PROTOCOLS: REACT19 // VITE7</div>
              <div>ESTABLISHED: SESSION_ACTIVE</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Back to Top & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
          <span className="text-[9px] sm:text-[10px] text-neutral-tertiary-medium tracking-wide uppercase select-none text-center sm:text-left">
            &copy; 2026 SAMIK BISWAS. SYSTEM REGISTERED.
          </span>
          
          {/* Interactive Escape to Top trigger */}
          <a
            href="#home"
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 text-neutral-900 bg-brand hover:bg-brand-strong font-bold py-2 px-4 rounded-sm hover:scale-102 transition-all duration-200 shadow-sm border border-transparent tracking-widest text-[9px] sm:text-[10px] uppercase select-none flex-shrink-0"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            [ ESCAPE_TO_HOME_PROMPT ]
          </a>
        </div>
      </div>
    </footer>
  );
}
