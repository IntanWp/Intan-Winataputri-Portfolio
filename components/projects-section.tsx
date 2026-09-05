const PROJECTS = [
  {
    title: "GrocerEase",
    description:
      "Grocery shopping app with multiple cart types, recipe recommendations, and collaborative shopping.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    image: "/GrocerEase.png",
    demoLink: "https://grocer-ease-frontend-six.vercel.app/",
    githubLink: "https://github.com/IntanWp/GrocerEase",
  },
  {
    title: "Hand Sign Language Recognition",
    description:
      "Real-time ASL hand-sign recognition: captures video, processes frames, and classifies letters with computer vision.",
    tech: ["Python", "Flask", "OpenCV", "MediaPipe"],
    image: "/HandSignLanguage.png",
    githubLink: "https://github.com/IntanWp/Hand-Sign-Language-Detection",
  },
  {
    title: "TempatHuni",
    description:
      "Rental property listing app: browse, search, and filter, with basic auth and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/TempatHuni.png",
    githubLink: "https://github.com/IntanWp/TempatHuni",
  },
  {
    title: "This Portfolio",
    description:
      "This site. Designed and built from a blank redesign, not a template.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/Portfolio.png",
    demoLink: "https://intan-winataputri-portfolio.vercel.app/",
    githubLink: "https://github.com/IntanWp/Intan-Winataputri-Portfolio",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="ground-sky py-24 md:py-32 px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-10 items-start mb-10 md:mb-12">
          <div>
            <h2 className="font-sans font-bold text-12xl md:text-7xl text-foreground text-balance">
              Shipped work, not just coursework.
            </h2>
          </div>

          <a
            href="https://movehaus.id"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative isolate grid sm:grid-cols-[1fr_260px] sm:h-[360px] w-full overflow-hidden rounded-md lg:-rotate-1 lg:hover:rotate-0 transition-transform duration-500 shadow-[4px_5px_0_rgba(36,52,74,0.12)]"
          >
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(135deg, var(--band-backend-ink) 0%, #17324a 100%)",
              }}
            />
            <div className="min-w-0 px-8 py-8 md:px-10 md:py-10 flex flex-col justify-center order-2 sm:order-1">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <p className="tag-chord label-wide text-[11px] text-white/90">
                  Full-stack - solo, end-to-end
                </p>
                <p className="tag-chord text-[11px] text-white/90 underline underline-offset-2">
                  movehaus.id
                </p>
              </div>
              <h3 className="font-sans font-medium text-3xl md:text-4xl text-white mb-3 group-hover:opacity-80 transition-opacity">
                MOVEHAUS
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl mb-4 text-pretty">
                A studio booking and management platform with role-based access
                control: admin, staff, and member each see a different system.
                Client discovery, design, build, and shipping: all done solo.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {["React", "Supabase", "Role-based access control"].map(
                  (tag) => (
                    <span key={tag} className="tag-chord text-xs text-white/90">
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="relative min-w-0 h-[300px] sm:h-full overflow-hidden p-6 order-1 sm:order-2">
              <img
                src="/www.movehaus.id_(iPhone 16 Pro Max)-portrait.png"
                alt="MOVEHAUS sign-in screen, shown on an iPhone"
                className="w-full h-full object-contain grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <ProjectCard project={PROJECTS[0]} className="sm:col-span-2" />
          <ProjectCard project={PROJECTS[1]} />
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <ProjectCard project={PROJECTS[2]} />
          <ProjectCard project={PROJECTS[3]} />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className = "",
}: {
  project: (typeof PROJECTS)[number];
  className?: string;
}) {
  return (
    <div
      className={`group border border-border overflow-hidden soft-card bg-white ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-sans font-medium text-xl text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-foreground/75 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="tag-chord text-[11px] text-muted-foreground bg-muted rounded-md px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center tag-chord label-wide font-semibold text-xs bg-accent text-accent-foreground rounded-md px-4 py-2.5 shadow-[2px_3px_0_rgba(36,52,74,0.25)] hover:brightness-95 hover:translate-x-px hover:translate-y-px hover:shadow-[1px_2px_0_rgba(36,52,74,0.25)] transition-all"
            >
              Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center tag-chord label-wide font-semibold text-xs border-2 border-foreground/25 text-foreground rounded-md px-4 py-2.5 shadow-[2px_3px_0_rgba(36,52,74,0.12)] hover:border-foreground/50 hover:bg-muted hover:translate-x-px hover:translate-y-px hover:shadow-[1px_2px_0_rgba(36,52,74,0.12)] transition-all"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
