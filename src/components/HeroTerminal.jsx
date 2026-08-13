import { Terminal as TerminalIcon, Cpu, Shield, Globe } from "lucide-react";

export default function HeroTerminal() {
  return (
    <div className="border-2 border-double border-brand/60 bg-neutral-primary-soft shadow-md w-full font-mono">
      {/* Terminal Window Header Bar (OS style) */}
      <div className="flex items-center justify-between border-b border-default bg-neutral-secondary-soft px-4 py-2 text-[10px] sm:text-xs text-heading select-none border-dashed">
        <div className="flex items-center gap-1.5 font-bold truncate">
          <TerminalIcon className="w-3.5 h-3.5 text-brand flex-shrink-0" />
          <span className="truncate">
            CONSOLE_TERMINAL{" "}
            <span className="hidden sm:inline">// SAMIK-MAINFRAME</span> //
            SYS_INIT: OK
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[10px] text-neutral-tertiary-medium hidden sm:inline">
            [ BAUD: 9600 ]
          </span>
          <div className="flex items-center gap-1">
            <span className="cursor-pointer hover:text-brand-strong px-0.5 sm:px-1">
              [ - ]
            </span>
            <span className="cursor-pointer hover:text-brand-strong px-0.5 sm:px-1">
              [ ❑ ]
            </span>
            <span className="cursor-pointer hover:text-red-500 px-0.5 sm:px-1">
              [ X ]
            </span>
          </div>
        </div>
      </div>

      {/* Terminal Internal Body */}
      <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 items-stretch bg-neutral-primary">
        {/* Left Embedded Profile Bezel - Hidden on mobile viewports for ultimate space and clean responsiveness */}
        <div className="hidden sm:flex w-full sm:w-56 md:w-64 flex-shrink-0 border border-default bg-neutral-secondary-soft p-5 flex-col items-center justify-center text-center shadow-sm relative">
          <span className="absolute top-0 right-4 transform -translate-y-1/2 bg-neutral-primary px-1.5 text-[9px] text-brand tracking-widest font-bold">
            [ IDENTITY ]
          </span>

          <img
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-brand/50 object-cover shadow-[0_0_8px_rgba(87,196,105,0.15)] mb-4"
            src="hero1.png"
            alt="Samik Biswas"
          />

          <h5 className="text-lg md:text-xl font-bold tracking-tight text-heading uppercase truncate w-full">
            Samik Biswas
          </h5>
          <span className="text-[10px] text-brand font-bold tracking-widest mt-1 block">
            CS_STUDENT
          </span>

          {/* Symmetrical Terminal Status lines */}
          <div className="w-full border-t border-default border-dashed mt-4 pt-3 text-[10px] text-left space-y-1.5 text-neutral-tertiary-medium">
            <div className="flex justify-between">
              <span>HOST_NAME:</span>
              <span className="text-heading font-semibold">SAMIK-ROOT</span>
            </div>
            <div className="flex justify-between">
              <span>SYS_KERNEL:</span>
              <span className="text-heading font-semibold">SECURE_OS</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="text-brand-strong font-semibold">ONLINE</span>
            </div>
          </div>
        </div>

        {/* Right Shell Readout Area */}
        <div className="flex-grow flex flex-col justify-between space-y-4 pt-1 sm:pt-0">
          <div className="space-y-3">
            {/* Command prompt mock header */}
            <div className="text-xs text-brand/80 flex items-center gap-1.5 select-none">
              <span className="text-brand font-bold">samik@mainframe:~$</span>
              <span>cat welcome_message.sh</span>
            </div>

            {/* Script Text Readout */}
            <div className="space-y-4 text-xs sm:text-sm text-body leading-relaxed pl-3 border-l border-default mt-2">
              <p className="text-[10px] font-bold text-brand uppercase tracking-wider animate-pulse-fast">
                &gt; BOOT SEQUENCE INJECTED // CORE COMPILER: LOADED
              </p>

              <p>
                I am a student of Information Technology and currently building
                web applications. I am primarily interested in backend systems,
                devops and different software's architectures. I work with Java,
                Typescript, SpringBoot, ReactJs and NodeJs.
              </p>

              {/* Bulleted Core Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-tertiary-medium">
                  <Cpu className="w-4 h-4 text-brand flex-shrink-0" />
                  <span>DSA</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-tertiary-medium">
                  <Shield className="w-4 h-4 text-brand flex-shrink-0" />
                  <span>BACKEND</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-tertiary-medium">
                  <Globe className="w-4 h-4 text-brand flex-shrink-0" />
                  <span>DEVOPS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Input Prompt indicator line */}
          <div className="flex items-center gap-1.5 text-xs text-brand select-none pt-4 border-t border-default border-dashed">
            <span className="text-brand font-bold">samik@mainframe:~$</span>
            <span className="w-2 h-4 bg-brand inline-block animate-pulse-fast"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
