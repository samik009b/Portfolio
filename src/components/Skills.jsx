import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaJs  ,
  FaGitAlt,
  FaLinux,
  FaAws,
  FaDocker,
  FaJava,
  FaCode,
  FaCube,
  FaCogs,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiRedis,
  SiExpress,
} from "react-icons/si";

function FlowbiteIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

export default function Skills() {
  const skillsData = [
    {
      id: "react",
      name: "React.js",
      category: "frontend",
      icon: FaReact,
      color: "text-brand",
    },
    {
      id: "typescript",
      name: "Typescript",
      category: "frontend",
      icon: SiTypescript,
      color: "text-brand",
    },
    {
      id: "html5",
      name: "HTML",
      category: "frontend",
      icon: FaHtml5,
      color: "text-brand",
    },
    {
      id: "css3",
      name: "CSS",
      category: "frontend",
      icon: FaCss3,
      color: "text-brand",
    },
    {
      id: "tailwind",
      name: "Tailwind",
      category: "frontend",
      icon: SiTailwindcss,
      color: "text-brand",
    },
    {
      id: "daisyui",
      name: "DaisyUI",
      category: "frontend",
      icon: FlowbiteIcon,
      color: "text-brand",
    },
    {
      id: "express",
      name: "Express.js",
      category: "backend",
      icon: SiExpress,
      color: "text-brand",
    },
    {
      id: "spring",
      name: "Spring Boot",
      category: "backend",
      icon: FaJava,
      color: "text-brand",
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "backend",
      icon: FaNodeJs,
      color: "text-brand",
    },
    {
      id: "python",
      name: "Python",
      category: "backend",
      icon: FaPython,
      color: "text-brand",
    },
    {
      id: "mysql",
      name: "MySQL",
      category: "databases",
      icon: SiMysql,
      color: "text-brand",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "databases",
      icon: SiMongodb,
      color: "text-brand",
    },
    {
      id: "redis",
      name: "Redis Cache",
      category: "databases",
      icon: SiRedis,
      color: "text-brand",
    },
    {
      id: "aws",
      name: "AWS Cloud",
      category: "databases",
      icon: FaAws,
      color: "text-brand",
    },
    {
      id: "docker",
      name: "Docker",
      category: "databases",
      icon: FaDocker,
      color: "text-brand",
    },
    {
      id: "git",
      name: "Git VCS",
      category: "databases",
      icon: FaGitAlt,
      color: "text-brand",
    },
    {
      id: "linux",
      name: "Linux OS",
      category: "databases",
      icon: FaLinux,
      color: "text-brand",
    },
    {
      id: "dsa",
      name: "DSA",
      category: "subjects",
      icon: FaCode,
      color: "text-brand",
    },
    {
      id: "oops",
      name: "OOPs",
      category: "subjects",
      icon: FaCube,
      color: "text-brand",
    },
    {
      id: "lld",
      name: "LLD",
      category: "subjects",
      icon: FaCogs,
      color: "text-brand",
    },
    {
      id: "hld",
      name: "HLD",
      category: "subjects",
      icon: FaNetworkWired,
      color: "text-brand",
    },
  ];

  const categories = [
    { id: "frontend", title: "FRONT-END ARCHITECTURE", subtitle: "Interface Engines" },
    { id: "backend", title: "BACK-END ENGINE", subtitle: "REST Systems & Orchestrations" },
    { id: "databases", title: "STORAGE & PROTOCOLS", subtitle: "Data Models, Infra & CLI" },
    { id: "subjects", title: "CORE CS & DESIGN", subtitle: "DSA, OOP, LLD & HLD" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Section Title */}
      <div className="border-2 border-double border-brand/60 p-6 bg-neutral-primary-soft relative">
        <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-neutral-primary px-2 text-xs font-mono text-brand">
          [ MODULE: SKILLS ]
        </span>
        <h2 className="text-2xl font-bold font-mono tracking-tight text-heading flex items-center gap-2 uppercase retro-glow-heading">
          <span className="w-3 h-3 bg-brand inline-block animate-pulse-fast"></span>
          SYS_CORE: TECHNICAL_INDEX
        </h2>
        <p className="text-sm text-body mt-2 font-mono leading-relaxed">
          Symmetrical index of core technologies configured for fast interface compilation, high-throughput backend APIs, and secure database matrices.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="border-2 border-double border-brand/50 bg-neutral-primary-soft shadow-md flex flex-col relative"
          >
            {/* Retro Window Title Bar */}
            <div className="flex items-center justify-between border-b border-default bg-neutral-secondary-soft px-5 py-3 font-mono text-sm text-heading uppercase font-bold border-dashed">
              <span className="tracking-wide">{cat.title}</span>
            </div>

            {/* Badges Grid */}
            <div className="p-5 flex-grow flex flex-col justify-between relative">
              
              {/* Symmetrical Sized badges grid with larger padding */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
                {skillsData
                  .filter((skill) => skill.category === cat.id)
                  .map((skill) => {
                    const IconComp = skill.icon;
                    return (
                      <div
                        key={skill.id}
                        className="flex items-center gap-3 border border-default bg-neutral-primary px-4 py-3 rounded-sm hover:border-brand hover:scale-[1.04] hover:-translate-y-1 hover:bg-neutral-secondary-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none shadow-sm hover:shadow-brand/10 active:scale-95 group cursor-pointer"
                      >
                        <IconComp
                          className={`w-6 h-6 flex-shrink-0 transition-colors duration-200 ${skill.color} group-hover:text-brand-strong`}
                        />
                        <span className="text-sm font-mono font-semibold text-heading group-hover:text-brand transition-colors duration-200 truncate">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
              </div>

              {/* Console Info strip */}
              <div className="mt-5 border-t border-default border-dashed pt-3 text-center">
                <span className="font-mono text-[10px] text-neutral-tertiary-medium tracking-widest uppercase">
                  {cat.subtitle}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
