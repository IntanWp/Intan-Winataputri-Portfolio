import Link from "next/link"

export default function MockupsPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f2] px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto mb-16">
        <Link href="/" className="tag-chord label-wide text-xs text-muted-foreground hover:text-foreground transition-colors">
          &larr; back to the site
        </Link>
        <h1 className="font-sans font-medium text-3xl md:text-5xl text-foreground mt-6 mb-4 text-balance max-w-2xl">
          Three hero directions, before anything gets rebuilt.
        </h1>
        <p className="text-foreground/70 text-base md:text-lg max-w-2xl">
          Same facts, three different playful vibes. None of these scroll-pin or scroll-jack -
          each is a static hero you'd see immediately. Pick one, mix pieces, or reject all three.
        </p>
      </div>

      <section className="max-w-6xl mx-auto mb-16">
        <p className="tag-chord label-wide text-xs text-muted-foreground mb-4">Option A - Field Notes</p>
        <div
          className="relative overflow-hidden rounded-3xl border border-black/10 px-8 py-16 md:px-16 md:py-20"
          style={{
            background: "#faf6ee",
            backgroundImage:
              "radial-gradient(circle, rgba(36,52,74,0.08) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 -rotate-2 mb-6">
              <span className="h-3 w-14 bg-[#f0916a]/70 -rotate-3 -mt-8 -mb-2" />
            </div>
            <p className="font-script text-2xl text-[#c2673f] -rotate-1 mb-2">hi, it's</p>
            <h2 className="font-sans font-bold text-5xl md:text-7xl text-[#24344a] leading-[0.95]">
              Intan Winataputri
            </h2>
            <p className="tag-chord text-sm text-[#5b6b80] mt-4 rotate-[-1deg] inline-block bg-white border border-black/10 px-3 py-1.5 rounded-md shadow-[2px_3px_0_rgba(0,0,0,0.06)]">
              Backend Engineer, BINUS University
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              {[
                { label: "PT Bank Sinarmas Tbk", rotate: "rotate-2" },
                { label: "AIESEC in BINUS", rotate: "-rotate-3" },
                { label: "MOVEHAUS", rotate: "rotate-1" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`bg-white border border-black/10 rounded-md px-4 py-2.5 text-sm font-medium text-[#24344a] shadow-[3px_4px_0_rgba(0,0,0,0.08)] ${chip.rotate}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <button className="bg-[#24344a] text-white rounded-md px-6 py-3 text-sm font-medium -rotate-1 shadow-[3px_4px_0_rgba(0,0,0,0.15)]">
                Download CV
              </button>
              <button className="border-2 border-[#24344a] text-[#24344a] rounded-md px-6 py-3 text-sm font-medium rotate-1">
                See the work
              </button>
            </div>
          </div>
        </div>
        <p className="text-sm text-foreground/60 mt-4 max-w-xl">
          Sticky-note credentials, torn-tape underline, everything slightly askew like a real desk.
          Playful via <em>tactile clutter</em>, not color. Risk: can read as busy if overused past the hero.
        </p>
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <p className="tag-chord label-wide text-xs text-muted-foreground mb-4">Option B - Terminal Garden</p>
        <div className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-20 bg-[#eef8f1]">
          <div className="max-w-xl mx-auto rounded-2xl bg-[#1b2b22] shadow-xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0f1a14]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f0916a]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#e9d089]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8fcba6]/70" />
              <span className="tag-chord text-[11px] text-white/40 ml-3">intan@backend:~</span>
            </div>
            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed">
              <p className="text-[#8fcba6]">$ whoami</p>
              <p className="text-white mb-3">Intan Winataputri - Backend Engineer</p>
              <p className="text-[#8fcba6]">$ current_role</p>
              <p className="text-white mb-3">Software Engineer Intern, PT Bank Sinarmas Tbk</p>
              <p className="text-[#8fcba6]">$ status</p>
              <p className="text-white flex items-center gap-1">
                growing
                <span className="inline-flex gap-0.5 ml-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="h-3 w-2 rounded-t-full"
                      style={{ background: i < 3 ? "#8fcba6" : "#2a3d31", height: `${8 + i * 4}px` }}
                    />
                  ))}
                </span>
                <span className="animate-pulse ml-1">_</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#24344a] text-white rounded-full px-6 py-3 text-sm label-wide tag-chord">
              Download CV
            </button>
            <button className="border border-[#24344a]/30 text-[#24344a] rounded-full px-6 py-3 text-sm label-wide tag-chord">
              See the work
            </button>
          </div>
        </div>
        <p className="text-sm text-foreground/60 mt-4 max-w-xl">
          A soft-toned terminal window, growth expressed as small bars (not a literal plant), monospace
          voice throughout. Ties to her own backend identity and the "farming games" note without any
          character art. Risk: terminal motif can read as a template if not carried past the hero.
        </p>
      </section>

      <section className="max-w-6xl mx-auto">
        <p className="tag-chord label-wide text-xs text-muted-foreground mb-4">Option C - Confetti Cloud</p>
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-24"
          style={{
            background: "#f8fbfe",
            backgroundImage: "radial-gradient(rgba(79,159,224,0.18) 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        >
          <div className="max-w-2xl mx-auto text-center relative">
            <span className="absolute -top-6 left-1/4 h-3 w-3 rounded-full bg-[#f0916a]" />
            <span className="absolute top-2 right-1/4 h-2 w-2 rounded-full bg-[#6fb88f]" />
            <span className="absolute bottom-4 left-1/3 h-2.5 w-2.5 rounded-full bg-[#4f9fe0]" />

            <h2 className="font-sans font-medium text-5xl md:text-7xl text-[#24344a] leading-[0.95] relative inline-block">
              Intan Winataputri
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute -bottom-3 left-0 w-full h-3"
              >
                <path d="M2 8 Q 75 2, 150 7 T 298 6" fill="none" stroke="#f0916a" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </h2>

            <p className="tag-chord label-wide text-sm text-[#4f9fe0] mt-8">
              Backend Engineer &middot; BINUS University
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                { label: "PT Bank Sinarmas Tbk", bg: "#eaf5fd", fg: "#2e6fa8" },
                { label: "AIESEC in BINUS", bg: "#eef8f1", fg: "#3f7a58" },
                { label: "MOVEHAUS", bg: "#fdf1ea", fg: "#c2673f" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="rounded-full px-5 py-2.5 text-sm font-medium"
                  style={{ background: chip.bg, color: chip.fg }}
                >
                  {chip.label}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <button className="bg-[#f0916a] text-white rounded-full px-6 py-3 text-sm label-wide tag-chord shadow-sm">
                Download CV
              </button>
              <button className="border border-[#24344a]/20 text-[#24344a] rounded-full px-6 py-3 text-sm label-wide tag-chord">
                See the work
              </button>
            </div>
          </div>
        </div>
        <p className="text-sm text-foreground/60 mt-4 max-w-xl">
          Closest to the current palette, reworked: a dot-grid instead of blurred blobs, a hand-drawn
          underline instead of the script accent, credentials as flat pill bubbles. The most conservative
          option of the three, and the least distinct from where the site already is.
        </p>
      </section>
    </main>
  )
}
