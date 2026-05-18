import { Terminal as TerminalIcon, Heart, Phone, Mail, Award } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="border-2 border-double border-brand/60 bg-neutral-primary-soft p-6 relative font-mono text-sm">
      <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-neutral-primary px-2 text-xs text-brand">
        [ MODULE: ABOUT ]
      </span>

      {/* Retro Header */}
      <div className="flex items-center justify-between border-b border-default border-dashed pb-3 mb-5">
        <h2 className="text-2xl font-bold tracking-tight text-heading flex items-center gap-2 uppercase retro-glow-heading">
          <TerminalIcon className="w-6 h-6 text-brand" />
          SYS_FILE: ABOUT_ME.TXT
        </h2>
        <span className="text-xs text-neutral-tertiary-medium">
          READ_ONLY
        </span>
      </div>

      <div className="space-y-6">
        {/* Monospace Bio Text */}
        <p className="text-xs sm:text-sm text-body leading-relaxed max-w-4xl pl-4 border-l-2 border-brand/80 mt-2">
          I am Samik Biswas, a dedicated web engineer and cloud computing enthusiast. My developer philosophy centers on software craftsmanship, simplicity, and absolute system resilience, utilizing React and Vite on the frontend and containerized Node.js REST APIs in AWS/Docker environments on the backend.
        </p>

        {/* New Fake Retro Qualifications Ledger */}
        <div className="space-y-3">
          <div className="text-[10px] text-brand font-bold uppercase tracking-wider flex items-center gap-1.5 select-none">
            <Award className="w-4 h-4 text-brand" />
            <span>&gt; $ load qualifications_ledger.db</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Core Academics always visible */}
            <div className="border border-default bg-neutral-primary p-4 rounded-sm hover:border-brand-strong hover:-translate-y-1 hover:scale-[1.02] hover:shadow-brand/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm cursor-pointer active:scale-[0.98]">
              <div className="text-brand font-bold text-[10px] tracking-widest">[ DEGREE: MASTER_OF_SCIENCE ]</div>
              <div className="text-heading font-bold mt-1 text-xs sm:text-sm">ADVANCED SYSTEMS & NEURAL CRYPTOGRAPHY</div>
              <div className="text-neutral-tertiary-medium text-[9px] mt-1.5 uppercase tracking-wide">
                UNIVERSITY OF CYBERNETICS // COMPLETED 2021
              </div>
            </div>
            
            <div className="border border-default bg-neutral-primary p-4 rounded-sm hover:border-brand-strong hover:-translate-y-1 hover:scale-[1.02] hover:shadow-brand/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm cursor-pointer active:scale-[0.98]">
              <div className="text-brand font-bold text-[10px] tracking-widest">[ DEGREE: BACHELOR_OF_ENGINEERING ]</div>
              <div className="text-heading font-bold mt-1 text-xs sm:text-sm">COMPUTER SCIENCE & MAIN-FRAME NETWORKS</div>
              <div className="text-neutral-tertiary-medium text-[9px] mt-1.5 uppercase tracking-wide">
                MIT (NEO-INSTITUTE) // COMPLETED 2019
              </div>
            </div>
            
            {/* Professional Certifications - Hidden on mobile viewports to preserve vertical space and responsiveness */}
            <div className="hidden sm:block border border-default bg-neutral-primary p-4 rounded-sm hover:border-brand-strong hover:-translate-y-1 hover:scale-[1.02] hover:shadow-brand/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm cursor-pointer active:scale-[0.98]">
              <div className="text-brand font-bold text-[10px] tracking-widest">[ CERTIFICATE: CLOUD_ARCHITECT ]</div>
              <div className="text-heading font-bold mt-1 text-xs sm:text-sm">AWS ADVANCED CLOUD NETWORKS & K8S SYSTEMS</div>
              <div className="text-neutral-tertiary-medium text-[9px] mt-1.5 uppercase tracking-wide">
                AMAZON RETRO CLOUD SOLUTIONS // CERT_ID: 9482
              </div>
            </div>
            
            <div className="hidden sm:block border border-default bg-neutral-primary p-4 rounded-sm hover:border-brand-strong hover:-translate-y-1 hover:scale-[1.02] hover:shadow-brand/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm cursor-pointer active:scale-[0.98]">
              <div className="text-brand font-bold text-[10px] tracking-widest">[ LICENSE: INTRUSION_ANALYST ]</div>
              <div className="text-heading font-bold mt-1 text-xs sm:text-sm">CRITICAL SYSTEM INFRASTRUCTURE DEFENSE AUDITOR</div>
              <div className="text-neutral-tertiary-medium text-[9px] mt-1.5 uppercase tracking-wide">
                SEC-OS ADVANCED AUDIT MODULES // ACTIVE LICENSE
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Direct Contact Anchors - Responsive 2x2 Mobile Grid with tight bounds */}
        <div className="pt-3 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-mono text-[10px] sm:text-xs">
          <a
            href="tel:+916291116968"
            className="flex items-center justify-center gap-1.5 sm:gap-2 border border-default bg-neutral-primary px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm hover:border-brand-strong hover:bg-neutral-secondary-soft text-body hover:text-brand-strong hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm uppercase tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 text-brand flex-shrink-0 animate-pulse-slow" />
            <span>[ PHONE ]</span>
          </a>
          
          <a
            href="mailto:mail@samik.dev"
            className="flex items-center justify-center gap-1.5 sm:gap-2 border border-default bg-neutral-primary px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm hover:border-brand-strong hover:bg-neutral-secondary-soft text-body hover:text-brand-strong hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm uppercase tracking-wider"
          >
            <Mail className="w-3.5 h-3.5 text-brand flex-shrink-0 animate-pulse-slow" />
            <span>[ EMAIL ]</span>
          </a>
          
          <a
            href="https://github.com/samik009b"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 sm:gap-2 border border-default bg-neutral-primary px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm hover:border-brand-strong hover:bg-neutral-secondary-soft text-body hover:text-brand-strong hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm uppercase tracking-wider"
          >
            <FaGithub className="w-3.5 h-3.5 text-brand flex-shrink-0 animate-pulse-slow" />
            <span>[ GITHUB ]</span>
          </a>
          
          <a
            href="https://linkedin.com/in/samik"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 sm:gap-2 border border-default bg-neutral-primary px-3 sm:px-4 py-2.5 sm:py-3 rounded-sm hover:border-brand-strong hover:bg-neutral-secondary-soft text-body hover:text-brand-strong hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm uppercase tracking-wider"
          >
            <FaLinkedin className="w-3.5 h-3.5 text-brand flex-shrink-0 animate-pulse-slow" />
            <span>[ LINKEDIN ]</span>
          </a>
        </div>

        {/* Clean Footer Stamp */}
        <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-between items-center text-[10px] text-neutral-tertiary-medium border-t border-default border-dashed mt-5 select-none">
          <span>HOST: SAMIK-MAINFRAME</span>
          <span className="flex items-center gap-1">
            BUILT WITH <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" /> BY SAMIK
          </span>
        </div>
      </div>
    </div>
  );
}
