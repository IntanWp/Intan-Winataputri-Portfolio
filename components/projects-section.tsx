export function ProjectsSection() {
  const projects = [
    {
      title: "GrocerEase",
      description:
        "A grocery shopping application simulation that helps users manage their shopping with multiple cart types, recipe recommendations, and collaborative shopping features.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      category: "Web Application",
      image: "GrocerEase.png",
      demoLink: "https://grocer-ease-frontend-six.vercel.app/",
      githubLink: "https://github.com/IntanWp/GrocerEase",
    },
    {
      title: "Hand Sign Language Recognition",
      description:
        "This project is a web-based American Sign Language (ASL) hand sign recognition system using computer vision and machine learning. It captures real-time video input, processes the frames to detect hand signs, and classifies them into corresponding ASL letters.",
      tech: ["Python", "Flask", "OpenCV", "MediaPipe"],
      category: "Machine Learning",
      image: "/HandSignLanguage.png",
      githubLink: "https://github.com/IntanWp/Hand-Sign-Language-Detection",
    },
    {
      title: "TempatHuni",
      description:
        "A property listing web application made with HTML, CSS, and JavaScript that allows users to browse, search, and filter rental properties. Features include simple user authentication, property details, and a responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Frontend Application",
      image: "/TempatHuni.png",
      githubLink: "https://github.com/IntanWp/TempatHuni",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      category: "Portfolio",
      image: "/Portfolio.png",
      demoLink: "https://intan-winataputri-portfolio.vercel.app/",
      githubLink: "https://github.com/IntanWp/Intan-Winataputri-Portfolio",
    },
    
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat font-black text-4xl md:text-5xl text-center mb-16 text-foreground">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-montserrat font-semibold text-xl text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>

                <p className="text-foreground leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-normal text-sm hover:bg-secondary transition-colors text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`border border-primary text-primary py-2 px-4 rounded-lg font-normal text-sm hover:bg-primary hover:text-primary-foreground transition-all text-center ${!project.demoLink ? "flex-1" : ""}`}
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
  )
}
