"use client";

const PRIMARY_CREDENTIAL = {
  domain: "Backend - the anchor",
  title: "PT Bank Sinarmas Tbk",
  sub: "Software Engineer Intern - Spring Boot, MyBatis, MySQL",
};

const SECONDARY_CREDENTIALS = [
  {
    id: "leadership-cross",
    domain: "Leadership",
    color: "var(--band-leadership-ink)",
    dot: "var(--band-leadership)",
    title: "AIESEC in BINUS",
    sub: "Team Leader, Quality Assurance - Outgoing Exchange",
    link: undefined as { href: string; label: string } | undefined,
  },
  {
    id: "shipped",
    domain: "Shipped Work",
    color: "var(--band-shipped-ink)",
    dot: "var(--band-shipped)",
    title: "MOVEHAUS",
    sub: "Solo-built, full-stack - live at ",
    link: { href: "https://movehaus.id", label: "movehaus.id" },
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-8 items-start max-w-7xl mx-auto">
          <div className="lg:pt-6">
            <div id="now" className="scroll-mt-24">
              <div className="tag-chord inline-flex items-start gap-2 text-[11px] md:text-xs text-muted-foreground mb-8 bg-white rounded-md px-3 py-1.5 max-w-full border border-black/10 shadow-[2px_3px_0_rgba(36,52,74,0.06)]">
                <span className="relative flex h-2 w-2 mt-[3px] shrink-0">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-band-shipped opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-band-shipped" />
                </span>
                <span>
                  Currently: Software Engineer Intern, Bank Sinarmas - thesis in
                  progress
                </span>
              </div>
            </div>

            <p className="font-script text-5xl text-band-shipped-ink mb-1">
              hi, it's
            </p>
            <h1 className="font-sans font-bold text-[15vw] leading-[0.9] tracking-tight text-foreground sm:text-7xl md:text-8xl text-balance">
              Intan
              <br />
              Winataputri
            </h1>

            <p className="tag-chord label-wide text-sm md:text-base text-band-backend-ink mt-6">
              Backend Engineer (who also ships) - BINUS University
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9">
              <a
                href="/Intan-Winataputri-CV.pdf"
                download
                className="inline-flex items-center gap-2 bg-foreground text-white rounded-md px-6 py-3 text-sm label-wide tag-chord shadow-[3px_4px_0_rgba(36,52,74,0.18)]"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white border-2 border-foreground/80 text-foreground rounded-md px-6 py-3 text-sm label-wide tag-chord"
              >
                See the work
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:pt-2">
            <div className="relative sticker-card-lg px-6 py-6 bg-white">
              <span
                aria-hidden
                className="absolute -top-2.5 left-8 h-4 w-20 -rotate-2 rounded-[2px]"
                style={{ background: "var(--band-backend)" }}
              />
              <p
                className="tag-chord label-wide text-xs mb-2 inline-flex items-center gap-2"
                style={{ color: "var(--band-backend-ink)" }}
              >
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full"
                  style={{ background: "var(--band-backend)" }}
                />
                {PRIMARY_CREDENTIAL.domain}
              </p>
              <p className="font-sans font-bold text-foreground text-xl leading-tight">
                {PRIMARY_CREDENTIAL.title}
              </p>
              <p className="tag-chord text-foreground/70 text-xs mt-1.5 leading-snug">
                {PRIMARY_CREDENTIAL.sub}
              </p>
            </div>

            <div className="relative sticker-card bg-white px-5 py-4">
              <span
                aria-hidden
                className="absolute top-1 -right-5 h-3.5 w-16 rotate-45 rounded-[2px]"
                style={{ background: "var(--band-leadership)" }}
              />
              <span
                aria-hidden
                className="absolute bottom-1 -left-4 h-3.5 w-16 rotate-45 rounded-[2px]"
                style={{ background: "var(--band-shipped)" }}
              />
              <p className="tag-chord label-wide text-[10px] text-muted-foreground mb-3">
                Range beyond backend
              </p>
              <div className="flex flex-col gap-3">
                {SECONDARY_CREDENTIALS.map((cred) => (
                  <div key={cred.id} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: cred.dot }}
                    />
                    <p className="text-xs leading-snug">
                      <span
                        className="tag-chord label-wide text-[10px]"
                        style={{ color: cred.color }}
                      >
                        {cred.domain}
                      </span>
                      <br />
                      <span className="font-sans font-medium text-foreground">
                        {cred.title}
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        - {cred.sub}
                      </span>
                      {cred.link && (
                        <a
                          href={cred.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
                        >
                          {cred.link.label}
                        </a>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
