"use client";

import confetti from "canvas-confetti";

type TimelineEntry = {
  id: string;
  range: string;
  category:
    | "Education"
    | "Work"
    | "Organizational"
    | "Competition"
    | "Volunteer";
  color: string;
  title: string;
  org: string;
  note?: string;
  sortKey: number;
};

const CATEGORY_COLOR: Record<TimelineEntry["category"], string> = {
  Education: "var(--band-backend)",
  Work: "var(--band-backend)",
  Organizational: "var(--band-leadership)",
  Competition: "var(--band-shipped)",
  Volunteer: "var(--band-leadership)",
};

const CATEGORY_TEXT_COLOR: Record<TimelineEntry["category"], string> = {
  Education: "var(--band-backend-ink)",
  Work: "var(--band-backend-ink)",
  Organizational: "var(--band-leadership-ink)",
  Competition: "var(--band-shipped-ink)",
  Volunteer: "var(--band-leadership-ink)",
};

const ENTRIES: TimelineEntry[] = [
  {
    id: "education",
    range: "2023 - Present",
    category: "Education",
    color: CATEGORY_COLOR.Education,
    title: "Bachelor of Computer Science, Software Engineering",
    org: "Universitas Bina Nusantara",
    note: "GPA 3.77 / 4.00 (semesters 1-6)",
    sortKey: 2023 * 12 + 1,
  },
  {
    id: "aiesec-lead",
    range: "Feb 2024 - Feb 2025",
    category: "Organizational",
    color: CATEGORY_COLOR.Organizational,
    title: "Team Leader, Outgoing Exchange Quality Assurance",
    org: "AIESEC in BINUS",
    sortKey: 2024 * 12 + 2,
  },
  {
    id: "aiesec-exchange",
    range: "Feb 2024 - Feb 2025",
    category: "Volunteer",
    color: CATEGORY_COLOR.Volunteer,
    title: "Exchange Participant, running alongside the AIESEC lead role",
    org: "AIESEC in SGU (Sogang University), South Korea",
    sortKey: 2024 * 12 + 2,
  },
  {
    id: "lab-assistant",
    range: "Jan 2025 - Jan 2026",
    category: "Work",
    color: CATEGORY_COLOR.Work,
    title: "Part-time Lab Assistant",
    org: "Software Laboratory Center, BINUS University",
    note: "Python, SQL",
    sortKey: 2025 * 12 + 1,
  },
  {
    id: "tutor",
    range: "Feb 2025 - Jun 2025",
    category: "Work",
    color: CATEGORY_COLOR.Work,
    title: "Tutor",
    org: "Student Advisory and Support Center, BINUS University",
    note: "Data Structures, C",
    sortKey: 2025 * 12 + 2,
  },
  {
    id: "hackathon",
    range: "Jun 2025",
    category: "Competition",
    color: CATEGORY_COLOR.Competition,
    title: "Top 10 Finalist",
    org: "Elevaite Hackathon 2025 Indonesia",
    sortKey: 2025 * 12 + 6,
  },
  {
    id: "bank-sinarmas",
    range: "Feb 2026 - Present",
    category: "Work",
    color: CATEGORY_COLOR.Work,
    title: "Software Engineer Intern, Credit Risk Engine",
    org: "PT Bank Sinarmas Tbk",
    sortKey: 2026 * 12 + 2,
  },
  {
    id: "movehaus",
    range: "May 2026 - Jun 2026",
    category: "Work",
    color: CATEGORY_COLOR.Work,
    title: "Freelance Full-Stack Developer",
    org: "Movehaus (movehaus.id)",
    sortKey: 2026 * 12 + 5,
  },
];

const TIMELINE_ITEMS = [...ENTRIES].sort((a, b) => a.sortKey - b.sortKey);

const CONFETTI_COLORS = ["#4f9fe0", "#6fb88f", "#f0916a"];

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function fireConfettiFromCursor(event: React.MouseEvent<HTMLElement>) {
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: {
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
    },
    colors: CONFETTI_COLORS,
  });
}

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-24 md:py-32 px-6 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col items-start md:block">
          <img
            src="https://media.giphy.com/media/4bz6frJ6gNlCUEExIu/giphy.gif"
            alt="Snoopy dancing happily"
            width={100}
            height={100}
            className="mt-6 -mb-5 md:mt-0 md:mb-0 md:absolute md:-top-18 md:left-110 z-10 -rotate-6 object-contain drop-shadow-[2px_3px_2px_rgba(36,52,74,0.15)]"
            style={{ width: 100, height: 100 }}
          />
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4 text-balance max-w-2xl">
            How this actually happened.
          </h2>
        </div>
        <p className="text-foreground/70 text-base md:text-lg max-w-xl mb-16 md:mb-20">
          Not everything lined up neatly.{" "}
          <span className="font-script text-xl text-band-leadership-ink">
            Some of it overlapped.
          </span>
        </p>

        <div className="relative md:-rotate-[0.4deg]">
          <svg
            aria-hidden
            className="absolute left-[8px] md:left-1/2 top-0 h-full w-6 md:-translate-x-1/2"
            viewBox="0 0 24 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 12 0 C 4 8, 20 16, 12 24 C 4 32, 20 40, 12 48 C 4 56, 20 64, 12 72 C 4 80, 20 88, 12 100"
              fill="none"
              stroke="var(--border)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="flex flex-col gap-10 md:gap-4">
            {TIMELINE_ITEMS.map((entry, i) => (
              <TimelineStop
                key={entry.id}
                entry={entry}
                side={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineStop({
  entry,
  side,
}: {
  entry: TimelineEntry;
  side: "left" | "right";
}) {
  const alignRight = side === "right";
  const isCompetition = entry.category === "Competition";

  return (
    <li className="relative md:grid md:grid-cols-2 md:gap-10 pl-10 sm:pl-12 md:pl-0">
      <span
        className="absolute left-[13px] md:left-1/2 top-1.5 h-3 w-3 rounded-full md:-translate-x-1/2 ring-4 ring-background"
        style={{ background: entry.color }}
        aria-hidden
      />
      <div
        className={
          alignRight ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
        }
      >
        <div
          onMouseEnter={isCompetition ? fireConfettiFromCursor : undefined}
          className={`soft-card bg-card px-5 py-4 max-w-md ${alignRight ? "md:ml-10 md:-rotate-1" : "md:mr-10 md:ml-auto md:rotate-1"}`}
        >
          <p
            className="tag-chord label-wide text-[11px] mb-1.5"
            style={{ color: CATEGORY_TEXT_COLOR[entry.category] }}
          >
            {entry.range} - {entry.category}
          </p>
          <p className="font-sans font-semibold text-foreground text-base md:text-lg leading-snug">
            {entry.title}
          </p>
          <p className="text-foreground/70 text-sm mt-1">{entry.org}</p>
          {entry.note && (
            <p className="tag-chord text-muted-foreground text-xs mt-2">
              {entry.note}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}
