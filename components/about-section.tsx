const RECORD = [
  { label: "Major", value: "Computer Science - Software Engineering" },
  { label: "University", value: "BINUS University" },
  { label: "GPA", value: "3.77 / 4.00", note: "semesters 1–6" },
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
      className="py-24 md:py-32 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans font-medium text-3xl md:text-5xl text-foreground mb-14 md:mb-16 text-balance max-w-2xl">
          The academic record behind it.
        </h2>

        <dl className="max-w-3xl">
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
