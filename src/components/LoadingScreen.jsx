import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

export default function LoadingScreen() {
  const [dots, setDots] = useState("...");

  // Flashing dots animation for loading telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-neutral-primary flex flex-col justify-center items-center p-6 text-brand font-mono text-sm z-50 select-none">
      <div className="max-w-md w-full border-2 border-double border-brand/60 bg-neutral-primary-soft p-6 md:p-8 shadow-lg relative">
        <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-neutral-primary px-2 text-[10px] text-brand tracking-widest font-bold">
          [ SYS_BOOT ]
        </span>

        {/* BIOS/System Spec Headers */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-heading font-bold border-b border-default border-dashed pb-2.5">
            <Terminal className="w-5 h-5 text-brand animate-pulse-fast" />
            <span>SAMIK-OS [Version 4.2.980]</span>
          </div>

          <div className="space-y-1.5 text-xs text-neutral-tertiary-medium leading-relaxed">
            <div>(C) COPYRIGHT 1985-2026 SAMIK CORP.</div>
            <div>BIOS VERSION: RETRO-HUD-2.90</div>
            <div>CPU: MOS TECHNOLOGY 6502 @ 1.79MHZ</div>
            <div>RAM: 64KB BASE // 512KB EXTENSION OK</div>
          </div>

          {/* System Check Readouts */}
          <div className="space-y-1.5 text-xs font-semibold pt-2 border-t border-default border-dashed">
            <div className="flex justify-between">
              <span>INJECTING CORE PACKETS</span>
              <span className="text-brand-strong">[OK]</span>
            </div>
            <div className="flex justify-between">
              <span>LOADING TECHNICAL INDEX</span>
              <span className="text-brand-strong">[OK]</span>
            </div>
            <div className="flex justify-between">
              <span>CONNECTING MAINFRAME NODES</span>
              <span className="text-brand-strong">[OK]</span>
            </div>
          </div>

          {/* Animating Load Progress Bar */}
          <div className="space-y-2 pt-3 border-t border-default border-dashed">
            <div className="flex justify-between text-xs font-bold text-heading">
              <span>COMPILING PATHWAYS{dots}</span>
              <span className="animate-pulse-fast">100%</span>
            </div>
            
            {/* Retro Loading Bar Container */}
            <div className="w-full border border-brand/40 h-6 p-0.5 bg-neutral-primary rounded-sm overflow-hidden relative">
              {/* Animating interior fill-bar using keyframe rule */}
              <div 
                className="h-full bg-brand/85 shadow-[0_0_8px_#39ff14] transition-all duration-300"
                style={{
                  animation: "load-bar 3s linear forwards",
                }}
              />
            </div>
          </div>

          {/* Blinking prompt line */}
          <div className="flex items-center gap-1.5 text-xs pt-2 border-t border-default border-dashed text-brand">
            <span>&gt; BOOTING SYSTEM CONSOLE</span>
            <span className="w-2 h-4 bg-brand inline-block animate-pulse-fast"></span>
          </div>
        </div>
      </div>

      {/* Embedded CSS for Loading Bar Animation (bulletproof, zero-dependency) */}
      <style>{`
        @keyframes load-bar {
          0% { width: 0%; }
          10% { width: 10%; }
          30% { width: 45%; }
          50% { width: 60%; }
          75% { width: 85%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
