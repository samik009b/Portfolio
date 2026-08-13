import { HardDrive, Play, Code2 } from "lucide-react";

export default function Projects() {
	const projectsData = [
		{
			id: "thread_hive",
			filename: "THREAD-HIVE.WEB",
			badge: "CAPSTONE",
			status: "STABLE",
			tech: "Spring Boot, React, Redis, WebSockets, Docker, AWS",
			description:
				"A discussion platform built with Spring Boot and React, with real-time chat and a backend designed around clean architecture and scalable services.",
			github: "https://github.com/samik009b/threadhive",
			demo: "https://samik-threadhive.dev"
		},
		{
			id: "leaderboard",
			filename: "LEADERBOARD.JAVA",
			badge: "REAL-TIME",
			status: "STABLE",
			tech: "Java, WebSockets, Redis",
			description:
				"A real-time leaderboard system where score changes and player rankings are pushed to connected clients through WebSockets.",
			github: "https://github.com/samik009b/leaderboard",
			demo: "https://samik-leaderboard.dev"
		},
		{
			id: "pdf_analyzer",
			filename: "PDF-ANALYZER.WEB",
			badge: "AI",
			status: "BETA",
			tech: "MongoDB, Express, React, Node.js, LLM",
			description:
				"A web application that lets users upload PDF documents and ask questions about their contents using an LLM-powered document analysis pipeline.",
			github: "https://github.com/samik009b/pdf-analyzer",
			demo: "https://samik-pdf-analyzer.dev"
		},
		{
			id: "movie_reservation",
			filename: "MOVIE-RESERVATION.WEB",
			badge: "SYSTEMS",
			status: "BETA",
			tech: "Spring Boot, React, MySQL, Redis",
			description:
				"A movie reservation system focused on handling seat availability, temporary reservations, and concurrent booking requests.",
			github: "https://github.com/samik009b/movie-reservation",
			demo: "https://samik-movie-reservation.dev"
		}
	];

	return (
		<div className="border-2 border-double border-brand/60 bg-neutral-primary-soft p-6 relative">
			<span className="absolute top-0 right-6 transform -translate-y-1/2 bg-neutral-primary px-2 text-xs font-mono text-brand">
				[ MODULE: PROJECTS ]
			</span>
			CORE_PROJECTS
			<div className="flex items-center justify-between border-b border-default border-dashed pb-3 mb-5">
				<h2 className="text-2xl font-bold font-mono tracking-tight text-heading flex items-center gap-2 uppercase retro-glow-heading">
					<HardDrive className="w-6 h-6 text-brand" />
					SYS_ARCHIVE: CORE_PROJECTS
				</h2>
				<span className="font-mono text-xs text-neutral-tertiary-medium">
					GRID_VIEW // A:
				</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projectsData.map((project) => (
					<div
						key={project.id}
						className="border-2 border-double border-default bg-neutral-primary p-5 rounded-sm flex flex-col justify-between min-h-[180px] md:min-h-[180px] hover:border-brand-strong hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-brand/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md relative cursor-pointer active:scale-[0.98]">
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

						<div className="flex justify-between items-center border-default border-dashed pt-3 mt-2 font-mono text-xs">
							<span className="text-[10px] text-neutral-tertiary-medium">
								{project.tech}
							</span>

							<div className="flex gap-4">
								<a
									href={project.demo}
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-1.5 text-brand hover:text-brand-strong hover:underline font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95">
									<Play className="w-3.5 h-3.5 fill-current" />[RUN]
								</a>
								<a
									href={project.github}
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-1.5 text-body hover:text-heading hover:underline font-bold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95">
									<Code2 className="w-4 h-4" />[SRC]
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
