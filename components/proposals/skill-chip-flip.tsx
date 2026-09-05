"use client"

const CHIPS = [
  { skill: "MySQL", aside: "yes, I enjoy writing JOINs" },
  { skill: "Spring Boot", aside: "my actual daily driver" },
  { skill: "Supabase", aside: "shipped MOVEHAUS solo on this" },
]

export function SkillChipFlip() {
  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-muted px-6">
      <div className="flex flex-wrap justify-center gap-3" style={{ perspective: "600px" }}>
        {CHIPS.map((chip) => (
          <div key={chip.skill} className="group relative h-9 [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateX(180deg)]">
            <span className="flex h-9 items-center justify-center rounded-full bg-card border border-border px-4 text-sm text-foreground [backface-visibility:hidden]">
              {chip.skill}
            </span>
            <span className="absolute inset-0 flex h-9 items-center justify-center rounded-full bg-band-backend px-4 text-xs text-white [backface-visibility:hidden] [transform:rotateX(180deg)]">
              {chip.aside}
            </span>
          </div>
        ))}
      </div>
      <p className="tag-chord label-wide text-[11px] text-muted-foreground">hover a chip</p>
    </div>
  )
}
