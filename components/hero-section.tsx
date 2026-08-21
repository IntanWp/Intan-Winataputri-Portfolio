"use client";

import { useEffect, useState } from "react";

const BANDS = [
  {
    id: "backend",
    color: "var(--band-backend)",
    clip: "polygon(0% 0%, 40% 0%, 50% 100%, 10% 100%)",
    from: "-translate-x-16",
  },
  {
    id: "leadership",
    color: "var(--band-leadership)",
    clip: "polygon(30% 0%, 68% 0%, 78% 100%, 40% 100%)",
    from: "-translate-y-16",
  },
  {
    id: "shipped",
    color: "var(--band-shipped)",
    clip: "polygon(58% 0%, 100% 0%, 100% 100%, 68% 100%)",
    from: "translate-x-16",
  },
];

const CREDENTIALS = [
  {
    id: "backend",
    domain: "Backend",
    color: "var(--band-backend)",
    dot: "var(--band-backend)",
    title: "PT Bank Sinarmas Tbk",
    sub: "Software Engineer Intern — Spring Boot, MyBatis, MySQL",
    link: undefined as { href: string; label: string } | undefined,
    align: "text-left",
  },
  {
    id: "shipped",
    domain: "Shipped Work",
    color: "var(--band-shipped-ink)",
    dot: "var(--band-shipped)",
    title: "MOVEHAUS",
    sub: "Solo-built, full-stack — live at ",
    link: { href: "https://movehaus.id", label: "movehaus.id" },
    align: "sm:text-right",
  },
];

export function HeroSection() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      setTimeout(() => setSettled(true), 60),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="hero" className="relative pt-28 md:pt-36">
      <div className="max-w-6xl mx-auto px-6">
        <div id="now" className="scroll-mt-24">
          <div className="tag-chord inline-flex items-center gap-2 text-[11px] md:text-xs text-muted-foreground mb-8">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-band-shipped opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-band-shipped" />
            </span>
            Currently: Software Engineer Intern, PT Bank Sinarmas Tbk · Writing
            thesis · BINUS CSSE, class of 2027
          </div>
        </div>

        <h1 className="font-sans font-medium text-[15vw] leading-[0.92] tracking-tight text-foreground sm:text-7xl md:text-8xl text-balance">
          Intan
          <br />
          Winataputri
        </h1>

        <p className="tag-chord label-wide text-sm md:text-base text-band-backend mt-6">
          Backend Engineer — Computer Science Software Engineering, BINUS
          University
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-9 mb-14 md:mb-16">
          <a
            href="/Intan-Winataputri-CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm label-wide tag-chord hover:bg-band-backend transition-colors"
          >
            Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-foreground/30 text-foreground px-6 py-3 text-sm label-wide tag-chord hover:border-foreground transition-colors"
          >
            See the work
          </a>
        </div>
      </div>

      <div className="relative w-full h-[24vh] md:h-[30vh] min-h-[140px] overflow-hidden">
        {BANDS.map((band) => (
          <div
            key={band.id}
            className={`band absolute inset-0 transition-transform duration-[1400ms] ease-out ${settled ? "translate-x-0 translate-y-0" : band.from}`}
            style={{
              clipPath: band.clip,
              background: band.color,
              opacity: 0.88,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 border-b border-border">
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
          {CREDENTIALS.map((cred) => (
            <div key={cred.id} className={cred.align}>
              <p
                className="tag-chord label-wide text-[11px] mb-2 inline-flex items-center gap-2"
                style={{ color: cred.color }}
              >
                <span
                  className={`inline-block h-2 w-2 ${cred.align === "sm:text-right" ? "sm:order-2" : ""}`}
                  style={{ background: cred.dot }}
                />
                {cred.domain}
              </p>
              <p className="font-sans font-semibold text-foreground text-lg md:text-xl leading-tight">
                {cred.title}
              </p>
              <p className="tag-chord text-muted-foreground text-xs mt-1.5 leading-snug">
                {cred.sub}
                {cred.link && (
                  <a
                    href={cred.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    {cred.link.label}
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
