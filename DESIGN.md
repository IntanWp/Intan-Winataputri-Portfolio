---
name: Intan Winataputri — Portfolio
description: A backend engineer's credentials rendered as crossing translucent color bands that resolve into named work where they overlap.
colors:
  systems-indigo: "#4b4a9e"
  madder-red: "#a13e4a"
  saffron: "#e9a825"
  sun-white: "#faf7ef"
  deep-ink: "#1b1730"
  umber-chord: "#7a2c0b"
  indigo-soft: "#6f6eb8"
  madder-soft: "#bd6c74"
  saffron-soft: "#f0c168"
  saffron-ink: "#8f631a"
  parchment-muted: "#efe9db"
  parchment-border: "#e2dcc9"
typography:
  display:
    fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif"
    fontSize: "clamp(2.75rem, 15vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-geist-sans), 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "var(--font-geist-mono), ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.18em"
rounded:
  none: "0px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.sun-white}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.systems-indigo}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
---

# Design System: Intan Winataputri — Portfolio

## Overview

**Creative North Star: "Composable Systems"**

The site's one idea: a backend engineer's credentials don't sit in a list, they cross like independently-tensioned silk bands, and where they overlap, the browser computes a real color that never exists in the palette on its own — a `mix-blend-mode: multiply` result, not a precomputed image. The band strip itself is a pure visual signature — three domains crossing, no text on it at all — and directly beneath it, in plain document flow, sit the two most enticing credentials: the internship and the solo-shipped platform, each tagged with a small dot in its domain's color. Separating "the mechanism" from "the proof" this way was a deliberate finish-review correction: text overlaid directly on a diagonal, multiply-blended shape is structurally fragile (safe positions shift with viewport width and the shape's own slant), so the credentials now live in a normal, always-legible row instead of floating inside the composition. Everything else about her — the teaching roles, the hackathon finish, the academic record — lives further down the page, not competing for attention in the first viewport.

This replaces a prior glassmorphism template (soft blue, frosted cards, rounded everything) that read as generic AI-portfolio default. The new system refuses every trace of that: no blur-as-decoration, no rounded corners, no drop shadows. Depth comes from color layering, not elevation tokens. The palette is saturated and committed (Full palette strategy: three named hues carry real page-scale weight, not accents scattered on a neutral ground), set against a warm sun-white ground and near-black ink — a daylight, high-confidence register appropriate to a Persuade surface aimed at recruiters, not a moody dashboard.

**Key Characteristics:**
- Depth via live-computed color overlap (`mix-blend-mode: multiply`), never shadows or glass
- Square corners everywhere — zero border-radius, no exceptions
- Geist Sans for every display/body voice; Geist Mono exclusively for labels, tags, and credential metadata
- One authored entrance (bands sweep in and settle once); no scattered hover gimmicks
- Every color has a job tied to a real credential domain (backend / leadership / shipped work), never decorative

## Colors

Three saturated hues, each standing for one credential domain, plus the computed colors their overlaps produce live in the browser.

### Primary
- **Systems Indigo** (#4b4a9e): the Backend domain. Used for the backend credential band, the "Backend Engineer" role tag, primary link/hover states, and the nav nameplate.

### Secondary
- **Madder Red** (#a13e4a): the Leadership domain. Used for the leadership credential band and its icon accents (e.g. LinkedIn in the contact list).

### Tertiary
- **Saffron** (#e9a825): the Shipped Work domain. Used for the shipped-work band and the "now" status pulse dot — surfaces and small swatches only, never as text color on the sun-white ground (it fails contrast there; see Saffron Ink below).
- **Saffron Ink** (#8f631a): the readable, deepened version of Saffron for anything that has to be text on Sun-White — the "Shipped Work" credential label, the Full-Stack Range skill group, the GitHub icon. Same hue family, sampled dark enough to clear 4.5:1. This is the fix for a real bug shipped once: Saffron-as-text against Sun-White measured under 2:1.

### Neutral
- **Sun-White** (#faf7ef): page ground. A warm daylight paper, not a cold white — the physical scene is a recruiter skimming in bright light, not a dim dashboard.
- **Deep Ink** (#1b1730): primary text and the fill for primary buttons/CTAs.
- **Parchment Muted** (#efe9db): quiet fill for muted/secondary backgrounds (currently unused as a surface fill, reserved for future muted UI).
- **Parchment Border** (#e2dcc9): all hairline dividers and card borders.

### Computed (chord) colors — not authored, derived
- **Umber Chord** (#7a2c0b): sampled once from the live `multiply` result where the Leadership and Shipped-Work bands cross in the hero. Reused as the flagship project block's (MOVEHAUS) solid background — a palette color earned by measurement, not picked by eye.

### Named Rules
**The Computed-Not-Painted Rule.** A color representing an overlap between two credential domains is never picked by eye and hardcoded as a flat fill standing in for an overlap that should be computed — it's sampled from the real `mix-blend-mode` result and recorded afterward. The hero's own crossings stay genuinely live; nothing overlap-colored elsewhere on the page skips that step.

**The One Warm Ground Rule.** Sun-White is the only background color on the page outside the band composition itself. No section gets a different shade of "neutral" background; contrast and separation come from borders and type, not from tinted panels.

## Typography

**Display Font:** Geist Sans (with Segoe UI, sans-serif fallback)
**Body Font:** Geist Sans (same family — no separate body face)
**Label/Mono Font:** Geist Mono (with ui-monospace fallback)

**Character:** Geist Sans is a clean, humanist-geometric grotesk with no decorative personality of its own — it stays out of the way so the color-band mechanism carries the visual voice. Geist Mono is reserved entirely for data: labels, tags, timestamps, credential metadata, nav items. The pairing reads as "engineered," not "designed" — intentional, since the subject is a backend engineer.

### Hierarchy
- **Display** (500 weight, `clamp(2.75rem, 15vw, 6rem)`, 0.92 line-height): the hero name only. Capped at 6rem — never larger, regardless of viewport.
- **Headline** (500 weight, 1.875–3rem, tight): section headings ("Shipped work, not coursework.", etc.). No eyebrow or kicker ever precedes it — the heading is the section's only label.
- **Title** (600 weight semibold, 1.125–1.25rem): card and credential titles (project names, the hero's two credential titles at `text-lg`/`text-xl`, "PT Bank Sinarmas Tbk", etc.).
- **Body** (400 weight, 1rem, 1.6 line-height): descriptive paragraphs. Kept short — this is a fast-scan Persuade surface, not long-form reading.
- **Label** (400 weight, 0.18em tracking, uppercase, Geist Mono): nav items, tags, footer meta, hero domain tags, credential subtitles. Always wide-tracked, always mono, never the display face. Sits on the standard Tailwind text scale rather than one-off arbitrary sizes: **11px** (`text-[11px]`, the hero's domain labels), **12px** (`text-xs`, tags/footer/credential subtitles, the default), **13px** (`text-[13px]`, nav items — more read-weight where the eye lands first).

### Named Rules
**The No-Eyebrow Rule.** No heading is ever preceded by a numbered or labeled kicker ("01 — Work", "Section Two"). The heading carries its own weight. (This was shipped once during the build and removed at finish review — the rule exists because the mistake is easy to reintroduce.)

**The Mono-Means-Data Rule.** Geist Mono is used only for labels, tags, and metadata — never for headings or body prose, and never reached for "to look technical." If content isn't a label, tag, timestamp, or credential fact, it doesn't get the mono face.

## Layout

Single-page scroll, `max-w-6xl` centered container for all text content, with one deliberate exception: the hero's band composition and the MOVEHAUS flagship block both break out to full viewport width (`w-full`, outside the max-w container) to earn their scale. Section rhythm is generous — `py-24 md:py-32` between major sections, bordered by a single hairline (`border-t border-border`) rather than background-color changes. Mobile collapses the desktop nav to a hamburger below `lg`; the hero's percentage-based band geometry scales continuously rather than switching to a different mobile-only composition.

**The Alternating Column Rule.** Every section from Skills onward alternates which side of the container its heading and primary content column sit against: Skills (right) → Record (left) → Contact (right). This is page-scale rhythm, not a per-row rule — structured data inside a right-aligned section (Skills' tag groups, Contact's link list) keeps its own internal left-to-right reading order for scannability; only the section's heading and its block-level position shift sides. The starting side is a direction, not an invariant — it flipped once already at the user's request, and the rule that survives is "alternate," not "Skills is always right."

## Elevation & Depth

No shadows anywhere in the system — zero `box-shadow` usage. Depth is conveyed entirely through color computation: the hero's crossing bands use `mix-blend-mode: multiply` so overlapping regions genuinely darken toward a third, unauthored color, giving the composition real physical depth (translucent silk layering) without a single drop shadow. Everywhere else (cards, buttons, nav), depth is absent by design — surfaces are flat, bordered by 1px hairlines, and rely on color and type contrast rather than elevation to separate content.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest and stay flat on hover — no lifting, no shadow-on-hover. Where an interactive element needs a "responding" cue, it's a color shift (`hover:bg-band-backend`), never elevation.

## Shapes

**The Square Corner Rule.** Every content surface — buttons, cards, chips, project images — uses zero border-radius. This is deliberate: the world is drafted/engineered (crossing bands, computed overlaps, mono data labels), and rounded corners would import a soft-consumer-app register the direction explicitly refused. The one sanctioned exception is fully circular (999px/9999px) chrome and iconography — the scrollbar thumb and the nav monogram's three dots — where "circle" isn't a softened corner, it's the actual shape being drawn. Nothing between 0 and full-circle is permitted. (The inherited shadcn/ui component library under `components/ui/` still carries a `--radius: 0.25rem` token from the original template for any future internal use of those primitives; the visible, custom-built surface does not invoke it.)

## Components

### Buttons
- **Shape:** square corners (0px), no exceptions.
- **Primary:** deep-ink fill (#1b1730), sun-white text, `px-6 py-3` (hero/contact CTAs) or `px-4 py-2` (nav), Geist Mono label-wide text.
- **Hover:** fill shifts to Systems Indigo (#4b4a9e) — a color change only, no shadow, no scale.
- **Ghost/Secondary:** transparent fill, 1px `border-foreground/30`, deep-ink text; hover solidifies the border to full opacity.

### Chips / Tags
- **Style:** no background, no border — bare Geist Mono text at `text-[11px]`–`text-xs`, muted-foreground color. Tags (tech stack, project categories) are typographic, not pill-shaped UI elements.
- **State:** static; no selected/unselected variant exists yet (nothing on the page is currently selectable).

### Cards / Containers (project cards)
- **Corner Style:** square (0px).
- **Background:** sun-white, with a single `border border-border` hairline.
- **Shadow Strategy:** none — see Elevation & Depth.
- **Internal Padding:** `p-6`.
- **Image treatment:** `aspect-[16/10]`, subtle grayscale-on-rest that clears to full color on hover (`grayscale-[15%] group-hover:grayscale-0`) — the one hover-driven image effect in the system.

### Flagship Feature Block (MOVEHAUS)
- Full-bleed (`w-full`, breaks the `max-w-6xl` container), asymmetric two-column on `md`+ — `md:grid-cols-[1fr_280px]` (`lg:grid-cols-[1fr_320px]`): text takes the flexible majority, the screenshot side gets a fixed, phone-proportioned column rather than an even 50/50 split. The whole block carries a hard `md:h-[380px]` (not `max-h`) plus `overflow-hidden` — a `max-height` alone caps the box but lets tall content spill past it, which is exactly what happened when a CSS-drawn phone frame was tried and then a real device-mockup PNG replaced it: the image's own aspect ratio needs a genuinely definite parent height to size against, or `object-contain` has nothing real to fit within. Stacked on mobile at a fixed `h-[340px]`.
- The screenshot is a real device-mockup render (an actual photographed/rendered iPhone, not CSS chrome imitating one) — two earlier attempts at drawing a bezel in CSS (bordered rounded rect, then a gradient-and-shadow version with drawn buttons) both still read as fake; a genuine mockup asset was the fix, `object-contain` (never `cover`, so the whole device shows, never cropped) inside a padded (`p-6`) slot that lets the block's own background show around it like a product shot. No divider line separates the mockup from the text column.
- Every grid/flex ancestor of the image carries `min-w-0` — an `<img>`'s intrinsic width otherwise forces its column wider than the grid track, silently pushing the block past the viewport.
- Solid Umber Chord (#7a2c0b) background carries the text column regardless of the image. Any inline mention of "movehaus.id" is underlined even though the whole block is already a link — the underline is a legibility cue, not a second link.

### Named Rules
**The Real Chrome Rule.** A device frame (phone, browser window) that appears anywhere on the site must be an authored/sourced mockup asset, never CSS approximating one (a rounded div with a border and a notch-shaped pill is not a phone). This mirrors the general "faked physicality" ban from the craft floor — imitation chrome reads as machine-made every time.

### Signature Component: The Band Strip
- A short (`24–30vh`), full-bleed strip of three `clip-path: polygon(...)` divs, each a diagonal band in one domain color, `mix-blend-mode: multiply`, `opacity: 0.88`. On mount, each band translates in from its own edge (left/top/right) and settles with a staggered `ease-out` transition — the system's one authored entrance motion. The strip carries **no text at all** — it is a pure visual signature, three domains crossing, nothing overlaid on the diagonal shapes. This is a deliberate correction from an earlier version that anchored credential captions directly onto the bands: text on a slanted, viewport-width-relative shape is fragile at every breakpoint, and it kept drifting outside the shape it was meant to sit inside.

### Credential Row
- Directly beneath the band strip, in normal document flow (not absolutely positioned, not overlaid on anything): a two-column row (stacked on mobile) pairing the two most enticing credentials with a small colored square dot in their domain's color — Backend (indigo dot, left-aligned) and Shipped Work (Saffron Ink-colored label, saffron dot, right-aligned on `sm`+). Domain label, credential title, one-line subtitle. Because this content lives in the page's normal flow instead of layered on the band art, it is trivially robust at every viewport — nothing to collide, nothing to overflow a shape's edge.

### Contact Link Row
- Value on the left, icon+label cluster on the right (`justify-between`), value first / label / icon reading right-to-left from the row's own right edge. The gap between them is one knob: the list wrapper's `sm:max-w-sm` — narrower (`sm:max-w-xs`) tightens the gap, wider (up to the section's own `sm:max-w-2xl`) widens it. The CV download sits in its own row below the full link list (`self-end`), never side-by-side with it.

### Navigation
- Transparent over the hero; gains a `bg-background/95` fill and hairline bottom border once scrolled (`isScrolled` state, 24px threshold). Nav items are Geist Mono, label-wide, `text-foreground/70` at rest. The wordmark is a small three-circle multiply-blend monogram (echoing the hero's band mechanism at icon scale) beside a mono nameplate. Mobile (`<lg`) collapses to a hamburger revealing a stacked menu.

## Do's and Don'ts

### Do:
- **Do** compute every credential-overlap color live via `mix-blend-mode: multiply`; never hardcode a flat fill as a stand-in for an overlap that should be computed.
- **Do** keep every corner square (0px radius) — buttons, cards, chips, images, everything.
- **Do** reserve Geist Mono for labels, tags, and data; keep headings and body prose in Geist Sans.
- **Do** cap display type at 6rem regardless of viewport.
- **Do** tie every color to a real credential domain (backend = indigo, leadership = madder, shipped work = saffron) rather than using them decoratively.

### Don't:
- **Don't** overlay text directly on the band strip's diagonal shapes. Credentials live in the normal-flow row beneath it — the strip itself stays text-free.
- **Don't** use Saffron as text color on Sun-White; use Saffron Ink (#8f631a) for any label, tag, or icon that needs to read as "shipped work" colored.
- **Don't** add a kicker, eyebrow, or numbered label above any section heading.
- **Don't** add drop shadows, glassmorphism, or blur-as-decoration anywhere — depth is color computation only.
- **Don't** use a Unicode arrow or emoji glyph as a stand-in icon (e.g. "↓", "↗"); use a real icon component (lucide-react, already a dependency) or plain text.
- **Don't** round any corner. If a future component needs a soft/friendly register, that's a signal it doesn't belong in this world.
- **Don't** introduce a fourth accent color without first checking whether it can be expressed as a computed overlap of the existing three.
