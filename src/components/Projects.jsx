import { HardDrive, Play, Code2 } from "lucide-react";

export default function Projects() {
  const projectsData = [
    {
      id: "sys_monitor",
      filename: "SYS-MONITOR.EXE",
      badge: "SYSTEMS",
      status: "STABLE",
      tech: "React, Tailwind, Canvas",
      description: "An interactive, low-latency CPU and memory resource telemetry dashboard modeled after classic system diagnostic monitors.",
      github: "https://github.com/samik009b/sys-monitor",
      demo: "https://samik-sys-monitor.dev",
    },
    {
      id: "mainframe_hack",
      filename: "MAINFRAME-HACK.SH",
      badge: "GAMING",
      status: "BETA",
      tech: "HTML5 Canvas, JavaScript",
      description: "A retro-cyber mainframe cracking simulation puzzle game challenging terminal arithmetic decryption logic.",
      github: "https://github.com/samik009b/mainframe-hack",
      demo: "https://samik-mainframe-hack.dev",
    },
    {
      id: "cloud_sphere",
      filename: "CLOUD-SPHERE.SYS",
      badge: "CLOUD",
      status: "DEPLOYED",
      tech: "Node.js, Docker, AWS",
      description: "A server cluster node load simulator demonstrating auto-scaling load-balancer routing algorithms.",
      github: "https://github.com/samik009b/cloud-sphere",
      demo: "https://samik-cloud-sphere.dev",
    },
    {
      id: "pixel_emulator",
      filename: "PIXEL-EMULATOR.BIN",
      badge: "EMULATION",
      status: "STABLE",
      tech: "WebAssembly, Canvas, React",
      description: "An in-browser 8-bit visual console cartridge emulator supporting custom keyboard inputs.",
      github: "https://github.com/samik009b/pixel-emulator",
      demo: "https://samik-pixel-emulator.dev",
    }
  ];

  return (
    <div className="border-2 border-double border-brand/60 bg-neutral-primary-soft p-6 relative">
      <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-neutral-primary px-2 text-xs font-mono text-brand">
        [ MODULE: PROJECTS ]
      </span>

      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-default border-dashed pb-3 mb-5">
        <h2 className="text-2xl font-bold font-mono tracking-tight text-heading flex items-center gap-2 uppercase retro-glow-heading">
          <HardDrive className="w-6 h-6 text-brand" />
          SYS_ARCHIVE: CORE_PROJECTS
        </h2>
        <span className="font-mono text-xs text-neutral-tertiary-medium">
          GRID_VIEW // A:
        </span>
      </div>

      {/* Expanded, Symmetrical Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="border-2 border-double border-default bg-neutral-primary p-5 rounded-sm flex flex-col justify-between min-h-[180px] md:h-[180px] hover:border-brand-strong hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-brand/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md relative cursor-pointer active:scale-[0.98]"
          >
            <div>
              <div className="flex justify-between items-center font-mono border-b border-default border-dashed pb-2">
                <span className="text-sm font-bold text-heading">
                  &gt; {project.filename}
                </span>
                <span className="text-[10px] text-brand uppercase font-bold tracking-widest">
                  [ {project.badge} ]
                </span>
              </div>
              <p className="text-xs text-body leading-relaxed mt-3 font-mono">
                {project.description}
              </p>
            </div>

            <div className="flex justify-between items-center border-t border-default border-dashed pt-3 mt-2 font-mono text-xs">
              <span className="text-[10px] text-neutral-tertiary-medium">
                {project.tech}
              </span>
              
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-brand hover:text-brand-strong hover:underline font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  [ RUN ]
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-body hover:text-heading hover:underline font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95"
                >
                  <Code2 className="w-4 h-4" />
                  [ SRC ]
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
