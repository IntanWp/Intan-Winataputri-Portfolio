"use client"

import { useState } from "react"

const MOODS = [
  { label: "clear", emoji: "sun" },
  { label: "cloudy", emoji: "cloud" },
  { label: "drizzle", emoji: "rain" },
] as const

function WeatherIcon({ kind }: { kind: (typeof MOODS)[number]["emoji"] }) {
  if (kind === "sun") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="var(--band-shipped-ink)" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round" />
      </svg>
    )
  }
  if (kind === "cloud") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="var(--band-backend)" strokeWidth="2">
        <path d="M7 18a4 4 0 1 1 .6-7.96A5 5 0 0 1 17 12a3.5 3.5 0 0 1-.5 6.98H7Z" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="var(--band-backend)" strokeWidth="2">
      <path d="M7 15a4 4 0 1 1 .6-7.96A5 5 0 0 1 17 9a3.5 3.5 0 0 1-.5 6H7Z" strokeLinejoin="round" />
      <path d="M8 19l-1 2M12 19l-1 2M16 19l-1 2" strokeLinecap="round" />
    </svg>
  )
}

export function WeatherToggle() {
  const [index, setIndex] = useState(0)
  const mood = MOODS[index]

  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-muted px-6">
      <button
        onClick={() => setIndex((i) => (i + 1) % MOODS.length)}
        className="tag-chord inline-flex items-center gap-2 text-[11px] md:text-xs text-muted-foreground bg-card rounded-full px-3 py-1.5 border border-border transition-transform active:scale-95"
      >
        <WeatherIcon kind={mood.emoji} />
        Currently: Software Engineer Intern, PT Bank Sinarmas Tbk - feeling {mood.label} today
      </button>
      <p className="tag-chord label-wide text-[11px] text-muted-foreground">click the status pill</p>
    </div>
  )
}
