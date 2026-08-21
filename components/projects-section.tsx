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
      className="py-24 md:py-32 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans font-medium text-3xl md:text-5xl text-foreground mb-14 md:mb-16 text-balance max-w-2xl">
          Shipped work, not just coursework.
        </h2>

        {/* Flagship: MOVEHAUS */}
        <a
          href="https://movehaus.id"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative isolate grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] md:h-[380px] w-full mb-6 overflow-hidden"
        >
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "var(--band-leadership)" }}
          />
          <div
            className="band absolute inset-0 -z-10"
            style={{ background: "var(--band-shipped)" }}
          />
          <div className="min-w-0 px-8 py-8 md:px-10 md:py-10 flex flex-col justify-center order-2 md:order-1">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
              <p className="tag-chord label-wide text-[11px] text-background/70">
                Full-stack - solo, end-to-end
              </p>
              <p className="tag-chord text-[11px] text-background/70 underline underline-offset-2">
                movehaus.id
              </p>
            </div>
            <h3 className="font-sans font-medium text-3xl md:text-4xl text-background mb-3 group-hover:opacity-80 transition-opacity">
              MOVEHAUS
            </h3>
            <p className="text-background/85 text-sm md:text-base leading-relaxed max-w-2xl mb-4 text-pretty">
              A studio booking and management platform with role-based access
              control: admin, staff, and member each see a different system.
              Client discovery, design, build, and shipping: all done solo.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {["React", "Supabase", "Role-based access control"].map((tag) => (
                <span
                  key={tag}
                  className="tag-chord text-xs text-background/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-w-0 h-[340px] md:h-full overflow-hidden p-6 order-1 md:order-2">
            <img
              src="/www.movehaus.id_(iPhone 16 Pro Max)-portrait.png"
              alt="MOVEHAUS sign-in screen, shown on an iPhone"
              className="w-full h-full object-contain grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </a>

        {/* Remaining projects */}
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.title} className="group border border-border">
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
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="tag-chord text-[11px] text-muted-foreground"
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
                      className="tag-chord label-wide text-[11px] bg-foreground text-background px-4 py-2 hover:bg-band-backend transition-colors"
                    >
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tag-chord label-wide text-[11px] border border-foreground/30 text-foreground px-4 py-2 hover:border-foreground transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
