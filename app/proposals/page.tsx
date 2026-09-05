import Link from "next/link"
import { EyesThatFollow } from "@/components/proposals/eyes-that-follow"
import { CyclingRole } from "@/components/proposals/cycling-role"
import { GrowASprout } from "@/components/proposals/grow-a-sprout"
import { SkillChipFlip } from "@/components/proposals/skill-chip-flip"
import { PawTrail } from "@/components/proposals/paw-trail"
import { MagneticButton } from "@/components/proposals/magnetic-button"
import { MailStamp } from "@/components/proposals/mail-stamp"
import { WeatherToggle } from "@/components/proposals/weather-toggle"
import { DebugConsole } from "@/components/proposals/debug-console"
import { ConfettiBadge } from "@/components/proposals/confetti-badge"

const PROPOSALS = [
  {
    id: "eyes",
    name: "Eyes That Follow",
    Demo: EyesThatFollow,
    pitch:
      "A small pair of eyes near the name/nav that track the cursor. Direct nod to the Michelle Chen reference - exactly the scale of interaction the brief calls out as the target.",
    placement: "Would live in the nav, next to her name.",
    fit: "Passive, never blocks scroll, resets instantly, zero learning curve.",
  },
  {
    id: "cycling",
    name: "Cycling Role",
    Demo: CyclingRole,
    pitch:
      "One phrase in the hero cycles through how she'd describe herself, on a timer, at samuclima's 'right idea, 5% of the scale.' No 3D, no controls to learn.",
    placement: "Would replace/extend the hero subtitle.",
    fit: "Runs on its own, visitor never has to act on it, doesn't move layout.",
  },
  {
    id: "sprout",
    name: "Grow a Sprout",
    Demo: GrowASprout,
    pitch:
      "A tiny sprout in the footer that grows one stage per click, resets after full grown. A farming-game nod using an original shape, not a licensed character.",
    placement: "Footer, next to the closing line.",
    fit: "Low-stakes, self-contained, matches the Sanjay Menon footer-payoff model.",
  },
  {
    id: "flip",
    name: "Skill Chip Flip",
    Demo: SkillChipFlip,
    pitch:
      "Skill tags flip on hover to reveal a one-line personal aside about that tech. Personality embedded directly in the credibility section, not a separate corner.",
    placement: "Would apply to the Skills section chips.",
    fit: "Hover-only, reversible, never required to see the core information.",
  },
  {
    id: "paw",
    name: "Paw Trail",
    Demo: PawTrail,
    pitch:
      "A light trail of paw prints fades in behind the cursor, scoped to one bounded area (e.g. the hero). A Snoopy-adjacent nod via a generic shape, not the character.",
    placement: "Would be scoped to the hero band field.",
    fit: "Auto-fades, never accumulates, contained to one region so it can't interfere with reading elsewhere.",
  },
  {
    id: "magnetic",
    name: "Magnetic CV Button",
    Demo: MagneticButton,
    pitch:
      "The Download CV button leans a few pixels toward the cursor as it approaches, then springs back. A classic, tasteful micro-interaction rather than a novel concept.",
    placement: "Would apply to the hero and footer Download CV buttons.",
    fit: "Purely hover-driven, snaps back instantly, never shifts surrounding layout.",
  },
  {
    id: "stamp",
    name: "Mail Stamp",
    Demo: MailStamp,
    pitch:
      "Click the email entry and it stamps itself \"reached out\" for a moment, like a postmark. A generic envelope/mail motif, not a licensed character.",
    placement: "Would live next to the email row in Contact.",
    fit: "Click-only, self-resetting, purely decorative confirmation with no real side effect.",
  },
  {
    id: "weather",
    name: "Weather Toggle",
    Demo: WeatherToggle,
    pitch:
      "Click the existing \"Currently:\" status pill and its mood icon cycles between sun, cloud, and drizzle - a small nod to the site's own \"Open Sky\" identity, not a separate theme.",
    placement: "Would replace the static dot on the hero's status pill.",
    fit: "Click-only, resets on reload, the underlying credential text never changes.",
  },
  {
    id: "console",
    name: "Debug Console",
    Demo: DebugConsole,
    pitch:
      "A tiny toggle drops down two lines of playful \"log output\" (whoami, status), then collapses again. Backend humor delivered in the backend's own idiom.",
    placement: "Would live in the nav or near the hero status pill.",
    fit: "Click to open, click to close, adds no height until opened, never auto-plays.",
  },
  {
    id: "confetti",
    name: "Confetti Badge",
    Demo: ConfettiBadge,
    pitch:
      "Click the hackathon badge and a small burst of dots (in the site's own three colors) scatters and fades. Celebrates a real, verifiable achievement rather than decorating a random spot.",
    placement: "Would apply to the Elevaite Hackathon credit in About/Record.",
    fit: "Click-only, finishes in under a second, never repeats on its own.",
  },
]

export default function ProposalsPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="tag-chord label-wide text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; back to the site
        </Link>

        <h1 className="font-sans font-medium text-3xl md:text-5xl text-foreground mt-6 mb-4 text-balance max-w-2xl">
          Ten small interactions, side by side.
        </h1>
        <p className="text-foreground/70 text-base md:text-lg max-w-2xl mb-16">
          Per the brief: exactly one of these ships. Try each one, then say which
          (or none) - the rest stay here as isolated, disposable proposals.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {PROPOSALS.map(({ id, name, Demo, pitch, placement, fit }) => (
            <div key={id} className="rounded-2xl border border-border bg-card soft-card overflow-hidden">
              <div className="p-1">
                <Demo />
              </div>
              <div className="p-6 border-t border-border">
                <h2 className="font-sans font-semibold text-lg text-foreground mb-2">{name}</h2>
                <p className="text-foreground/75 text-sm leading-relaxed mb-3">{pitch}</p>
                <p className="tag-chord text-[11px] text-muted-foreground mb-1">{placement}</p>
                <p className="tag-chord text-[11px] text-band-leadership">{fit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
