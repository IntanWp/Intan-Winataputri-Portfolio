const GROUPS = [
  {
    id: "backend",
    label: "Backend — home base",
    color: "var(--band-backend)",
    weight: "text-xl md:text-2xl",
    items: ["Spring Boot", "MyBatis", "MySQL", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "fullstack",
    label: "Full-stack range",
    color: "var(--band-shipped-ink)",
    weight: "text-base md:text-lg",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "JavaScript", "HTML & CSS"],
  },
  {
    id: "also",
    label: "Also building with",
    color: "var(--band-leadership)",
    weight: "text-sm md:text-base",
    items: ["Python", "Flask", "OpenCV", "MediaPipe", "Git"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans font-medium text-3xl md:text-5xl text-foreground mb-16 md:mb-20 text-balance max-w-2xl ml-auto text-right">
          Backend first. Full-stack when the job needs it.
        </h2>

        <div className="flex flex-col gap-12 md:gap-14 md:ml-auto md:max-w-xl">
          {GROUPS.map((group) => (
            <div key={group.id} className="text-right">
              <p className="tag-chord label-wide text-xs mb-4" style={{ color: group.color }}>
                {group.label}
              </p>
              <div className="flex flex-wrap justify-end gap-x-6 gap-y-3">
                {group.items.map((item) => (
                  <span key={item} className={`font-sans ${group.weight} text-foreground`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
