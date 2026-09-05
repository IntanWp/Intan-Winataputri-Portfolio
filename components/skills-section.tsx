const MAIN_GROUPS = [
  {
    id: "backend",
    label: "Backend - home base",
    color: "var(--band-backend-ink)",
    weight: "text-lg md:text-xl",
    items: [
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    span: "md:col-span-3",
    rotate: "md:-rotate-1",
  },
  {
    id: "fullstack",
    label: "Full-stack range",
    color: "var(--band-shipped-ink)",
    weight: "text-base",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "JavaScript",
      "HTML & CSS",
    ],
    span: "md:col-span-2",
    rotate: "md:rotate-1",
  },
];

const ALSO_BUILDING_WITH = {
  label: "Also building with",
  color: "var(--muted-foreground)",
  weight: "text-sm",
  items: ["Python", "Flask", "OpenCV", "MediaPipe", "Git"],
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="ground-coral py-24 md:py-32 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto text-center relative">
        <img
          src="https://i.pinimg.com/originals/83/5a/4a/835a4aa38892e2926ba1b3cfb14349d0.gif"
          alt="Snoopy typing at his typewriter on a starry night"
          width={230}
          height={230}
          className="hidden md:block absolute left-4 lg:left-10 top-1/2 -translate-y-1/3 z-10 w-[170px] lg:w-[190px] h-auto rounded-md -rotate-3 drop-shadow-[3px_4px_0_rgba(36,52,74,0.15)]"
        />
        <img
          src="https://media.giphy.com/media/maNB0qAiRVAty/giphy.gif"
          alt="Cat typing furiously on a laptop"
          width={200}
          height={200}
          className="hidden md:block absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-10 w-[150px] lg:w-[170px] h-auto rounded-md rotate-3 drop-shadow-[3px_4px_0_rgba(36,52,74,0.15)]"
        />
        <h2 className="font-sans font-bold text-4xl md:text-6xl text-foreground text-balance mx-auto max-w-2xl">
          Backend first. Full-stack when the job needs it.
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-16 md:mt-20 grid md:grid-cols-5 gap-5">
        {MAIN_GROUPS.map((group) => (
          <div key={group.id} className={group.span}>
            <div
              className={`soft-card bg-white px-6 py-6 md:py-8 ${group.rotate} hover:rotate-0 transition-transform duration-300`}
            >
              <p
                className="tag-chord label-wide text-xs mb-4"
                style={{ color: group.color }}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`font-sans ${group.weight} text-foreground bg-muted rounded-md px-4 py-1.5`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto mt-5">
        <div className="soft-card bg-white px-6 py-6 md:py-8 text-center md:-rotate-1 hover:rotate-0 transition-transform duration-300">
          <p
            className="tag-chord label-wide text-xs mb-4"
            style={{ color: ALSO_BUILDING_WITH.color }}
          >
            {ALSO_BUILDING_WITH.label}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {ALSO_BUILDING_WITH.items.map((item) => (
              <span
                key={item}
                className={`font-sans ${ALSO_BUILDING_WITH.weight} text-foreground bg-muted rounded-md px-4 py-1.5`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
