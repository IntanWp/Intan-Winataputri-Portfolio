# Portfolio Redesign Brief — Intan Winataputri

**Live site:** https://intan-winataputri-portfolio.vercel.app/
**Current stack:** Next.js, TypeScript, Tailwind CSS — not fixed. Open to
changing frameworks, adding dependencies, or restructuring the codebase if
it genuinely serves the redesign better. Keep it deployable to Vercel
(current host) and keep github.com/IntanWp/Intan-Winataputri-Portfolio as
the repo unless there's a real reason to move it.
**Current sections:** Now / Work / Backend / Record / Contact

This is a redesign, not a rebuild of the *content* — keep the existing
structure and case studies (Movehaus, GrocerEase, Hand Sign Language
Recognition, TempatHuni) unless a change is called for below. The stack and
codebase underneath it, though, are fair game to change. The goal: loosen
up the visual rigidity, shift to a softer/more personal palette, add a new
Timeline section, weave in memes/personality where it fits, and add exactly
**one** small interactive element.

---

## 1. Aesthetic

**Family:** Playful and personal. A backend engineer's portfolio that's
confident enough to have a sense of humor, not a portfolio that's trying to
prove it's fun.

**Palette — changed:** move away from the previous pine-green/muted-gold
system. Go softer — sky blue + white is the anchor direction (seen across
several of the reference links below), open to other soft/light tones as
long as it reads calm and approachable rather than corporate. Check the
reference links directly for the exact tones to pull from.

**Type:** IBM Plex family can stay as the base, but it no longer needs to
carry a "serious" palette on top of it — pair it with the new lighter colors
and see how that changes the overall tone.

**Loosen:** the current layout is a strict, uniform grid — same header
weight, same spacing, same treatment section to section. Introduce controlled
asymmetry: let at least one section break the grid on purpose (an offset
image, a rotated tag, a headline that doesn't align to the same column as
everything else). The goal is "considered, slightly off," not "chaotic."

**Vocabulary (5–8 terms):** soft, breezy, personality-forward, warm,
meme-literate, tactile, still credible.

---

## 2. Reference

Match the *feel* of these, never the literal content or layout.

**Liked:**
- Dribbble — "My New Portfolio Site": https://dribbble.com/shots/26194364-My-New-Portfolio-Site
  — general layout/composition mood board.
- samuclima.com: https://www.samuclima.com/en/ — the "changing words" hero
  text and hover states are the *right idea, at 5% of the scale*. Their site
  is a full 3D WASD-navigable museum — explicitly the wrong amount of
  interaction for this project. Take only: text that cycles/changes on its
  own or on hover, and responsive hover states. Do not take: full-screen
  takeovers, navigation metaphors, anything that requires the visitor to
  learn a control scheme.
- Aditya Sadhukhan: https://www.wallofportfolios.in/portfolios/aditya-sadhukhan/
  — general layout/composition mood board.
- Michelle Chen: https://www.wallofportfolios.in/portfolios/michelle-chen/
  — the interaction is small and doesn't interrupt scrolling. This is the
  target *scale* of interaction.
- Sanjay Menon: https://www.wallofportfolios.in/portfolios/sanjay-menon/
  — overall design direction is good; footer uses a meme/playful moment
  well, as a low-stakes, low-effort payoff rather than a showcase piece.
  This footer-meme approach is a good model to build on (see memes note
  below).
- Tanya Singh: https://www.wallofportfolios.in/portfolios/tanya-singh/
  — overall look is good, but information should never require a
  click-away or a separate page. Everything informative stays reachable
  by scrolling.

**Disliked (avoid these specifically):**
- samuclima.com: https://www.samuclima.com/en/ — the interaction itself
  (full 3D museum) is too big a time investment for a recruiter.
- santais.online: https://santais.online/ — interactive elements feel
  slapped together, not cohesive with the rest of the site; contact info
  and CV are hard to find.
- Namrata Mandal: https://www.wallofportfolios.in/portfolios/namrata-mandal/
  — interactive element feels forced, not needed — even though the overall
  theme is cute. Good cue for tone, bad cue for how to integrate interaction.

---

## 3. Intent

A recruiter or hiring manager should be able to get everything they need —
who Intan is, what she's built, how to reach her — purely by scrolling, in
under a minute, with zero clicks required to see information. Personality —
soft colors, memes, playful touches — should come through everywhere it
naturally fits, not be confined to a single "fun corner." If a visitor never
interacts with the one dedicated interactive element at all, the site should
still fully succeed as a portfolio, and it should still clearly feel like
Intan the whole way down.

Think: "a well-organized engineer who turns out to have a fun side," not
"a fun site that happens to have a resume in it."

---

## 4. Guardrails

**Always:**
- Every piece of information (About, project details, timeline, contact, CV)
  is reachable by scrolling straight down the page — nothing gated behind a
  click, tab, or modal.
- Any interactive/animated element must never block, hijack, or slow down
  normal scroll behavior.
- Contact info and CV download stay obvious and immediately findable —
  never buried under decoration.
- Memes and playful visual touches should feel cohesive with the rest of
  the design — same type/color system as everything else, not a visually
  distinct "widget" dropped on top. Use them wherever they naturally fit
  (footer, section transitions, empty states, hover states), not just once.
- Keep the single dedicated interactive element small: sized for someone
  who spends a few extra seconds on it — not a feature, not a mode, not a
  separate experience.

**Never:**
- No interactive element that hinders, hijacks, or adds friction to
  scrolling (this happened in Sanjay Menon's project section and is the
  #1 thing to avoid).
- No interaction or meme that feels bolted on for its own sake,
  disconnected from the rest of the site's visual language (the specific
  failure mode in santais.online and Namrata Mandal's portfolio — cute
  individually, incoherent together).
- No large time-investment interactions (3D environments, games, multi-step
  experiences) — recruiters will not spend more than a few seconds on it.
- No hiding core info (About, contact, CV, timeline) behind a click or
  separate route.
- Don't let personality undercut credibility — this is still a backend
  engineering portfolio applying for real roles.

---

## 5. Timeline (new section)

Add a Timeline section (placement TBD by Claude Code — likely between
"The academic record" and "Contact" makes sense, but use judgement for
what flows best). Pull from the data below, taken directly from Intan's CV.
Format as a clean vertical timeline consistent with the new softer aesthetic
— this is a good candidate for one of the "break the grid on purpose"
moments mentioned in section 1, but must still stay easy to scan.

Note two roles overlap (AIESEC leadership + AIESEC exchange volunteer,
both Feb 2024–Feb 2025) — represent this as concurrent, not sequential.

**Education**
- Universitas Bina Nusantara — Bachelor of Computer Science, Software
  Engineering. 2023–Present. GPA 3.77/4.00 (semesters 1–6).

**Work Experience**
- PT Bank Sinarmas Tbk — Software Engineer Intern, Credit Risk Engine.
  February 2026–Present.
- Movehaus (movehaus.id) — Freelance Full-Stack Developer. May 2026–June 2026.
- Software Laboratory Center, BINUS University — Part-time Lab Assistant
  (Python, SQL). January 2025–January 2026.
- Student Advisory and Support Center, BINUS University — Tutor (Data
  Structures, C). February 2025–June 2025.

**Organizational Experience**
- AIESEC in BINUS — Team Leader, Outgoing Exchange Quality Assurance.
  February 2024–February 2025.

**Competition**
- Elevaite Hackathon 2025 Indonesia — Top 10 Finalist. June 2025.

**Volunteer Experience**
- AIESEC in SGU (Sogang University) — Exchange Participant, South Korea.
  February 2024–February 2025.

---

## 6. The interactive element — open question, propose options

The exact interactive element isn't decided yet. Rather than committing to
one idea, **propose 5 small, distinct concepts** (each fully committed to
its own approach, not blended with the others — same principle as the 5
separate landing-page directions in the reference video) so they can be
compared side by side before building the final version. Each concept
should be genuinely small in scope — a hover state, a cycling text/label, a
tiny cursor or footer detail — not a new page or section. Build each as its
own isolated version (own file/folder/branch) so they can be flipped
between and compared directly, rather than described only in the abstract.

Personal interests to draw from, used lightly and tastefully (a small nod,
not a theme takeover, and a natural source of meme material):
**Pingu, farming games, Snoopy, Winnie the Pooh.**
Ideas in this direction might include a footer detail, a hover-triggered
micro-animation, a cycling word/phrase in the hero, or a meme dropped into
an unexpected spot — but treat these as a starting point for the proposals,
not a spec.

---

## 7. Deliverable

Stack is flexible (see top of brief) — use whatever serves the aesthetic and
interaction goals best, whether that's the current Next.js/Tailwind setup,
an evolution of it, or something else entirely. If proposing a stack change,
say what's changing and why, so it can be reviewed alongside the interactive
element proposals rather than sprung as a surprise. Ship: the palette shift,
the new Timeline section, the grid-loosening changes to at least one section,
meme/personality touches integrated where they fit, plus the 5 interactive
element proposals for review before final implementation.
