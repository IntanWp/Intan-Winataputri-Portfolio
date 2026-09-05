const RECORD = [
  { label: "Major", value: "Computer Science - Software Engineering" },
  { label: "University", value: "BINUS University" },
  { label: "GPA", value: "3.77 / 4.00", note: "semesters 1-6" },
  { label: "Graduating", value: "2027", note: "currently writing thesis" },
  {
    label: "Teaching",
    value: "Lab Assistant - Tutor (Scholarship Recipient), BINUS University",
  },
  {
    label: "Recognition",
    value: "Top 10 Finalist, Hackathon ElevAIte Indonesia 2025",
  },
  { label: "Languages", value: "English (fluent), Indonesian (native)" },
];

export function AboutSection() {
  return (
    <section
      id="highlights"
      className="ground-mint py-24 md:py-32 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
        <div>
          <h2 className="font-sans font-bold text-6xl md:text-6xl text-foreground text-balance">
            The academic record behind it.
          </h2>
          <img
            src="https://i.pinimg.com/originals/d8/41/6e/d8416e3d25fc78488d48cd8030bed953.gif"
            alt="Snoopy reading a book in the library"
            width={310}
            height={200}
            loading="lazy"
            className="mt-8 w-[310px] h-auto -scale-x-100 -rotate-2 rounded-md drop-shadow-[3px_4px_0_rgba(36,52,74,0.15)]"
          />
        </div>

        <dl className="bg-card soft-card px-6 md:px-8 md:-rotate-1">
          {RECORD.map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-5 ${i !== 0 ? "border-t border-border" : ""}`}
            >
              <dt className="tag-chord label-wide text-xs text-muted-foreground sm:w-40 shrink-0">
                {row.label}
              </dt>
              <dd className="font-sans text-lg md:text-xl text-foreground">
                {row.value}
                {row.note && (
                  <span className="tag-chord text-sm text-muted-foreground ml-3">
                    - {row.note}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
