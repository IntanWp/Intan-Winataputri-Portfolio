"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { GiphySticker } from "@/components/giphy-sticker";

const LINKS = [
  {
    label: "Email",
    value: "intanwp1@gmail.com",
    href: "mailto:intanwp1@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Intan Winataputri",
    href: "https://www.linkedin.com/in/intan-winataputri-38643b1a9",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "IntanWp",
    href: "https://github.com/IntanWp",
    icon: Github,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="ground-dusk relative py-24 md:py-36 px-6 scroll-mt-24"
    >
      <div className="max-w-xl mx-auto relative">
        <div className="absolute -top-8 -right-2 md:-right-8 h-20 w-20 md:h-24 md:w-24 rotate-6 rounded-md border-2 border-dashed border-white/50 flex flex-col items-center justify-center text-center px-2">
          <p className="tag-chord label-wide text-[9px] text-white/80 leading-tight">
            Open to
          </p>
          <p className="font-script text-lg text-white leading-none -mt-0.5">
            work
          </p>
        </div>

        <div className="relative flex flex-col items-start gap-3 md:block md:gap-0">
          <div className="md:absolute md:right-full md:top-1/2 md:-translate-y-1/4 md:mr-4">
            <GiphySticker
              id="OhMbrxk4taZYxdF09Z"
              title="Pingu cheering"
              size={115}
              rotate="-rotate-6"
              dark
            />
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white text-balance">
            Open to backend roles, internships, and freelance work.
          </h2>
        </div>
        <p className="text-white/75 text-base leading-relaxed mt-5 mb-12 text-pretty">
          Reach out directly, or start with my CV. I look forward to hearing
          from you :D
        </p>

        <div className="sticker-card-lg bg-white rotate-1 px-6 py-6 md:px-8 md:py-8">
          <div className="flex flex-col">
            {LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group flex items-center justify-between gap-4 py-4 ${i !== 0 ? "border-t border-border" : ""}`}
              >
                <span className="font-sans text-foreground text-base group-hover:opacity-70 transition-opacity">
                  {link.value}
                </span>
                <span className="flex items-center gap-2 shrink-0">
                  <span className="tag-chord label-wide text-xs text-muted-foreground">
                    {link.label}
                  </span>
                  <link.icon
                    className="w-4 h-4 shrink-0 text-band-backend"
                    aria-hidden
                  />
                </span>
              </a>
            ))}
          </div>

          <a
            href="/Intan-Winataputri-CV.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 bg-foreground text-white rounded-md px-6 py-3 text-sm label-wide tag-chord -rotate-1 hover:rotate-0 transition-transform shadow-[3px_4px_0_rgba(36,52,74,0.2)]"
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-16">
          <div className="hidden md:block">
            <GiphySticker
              id="LAsTE3vAlZCzGBEoMK"
              title="Pingu hard at work"
              size={75}
              rotate="-rotate-6"
              dark
            />
          </div>
          <p className="tag-chord text-[11px] text-white/60 text-center max-w-xs">
            Intan Winataputri - built solo, revised {new Date().getFullYear()}.{" "}
            <span className="font-script text-sm text-white/90 normal-case tracking-normal">
              probably trying my best to read a log right now.
            </span>
          </p>
          <div className="hidden md:block">
            <GiphySticker
              id="ogVVWiyJYOcTywS8PW"
              title="Pingu thinking it over"
              size={72}
              rotate="rotate-6"
              dark
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <p className="tag-chord label-wide text-[9px] text-white/40 border border-dashed border-white/25 rounded-md px-3 py-1.5 -rotate-1">
            {"psst, there's a cheat code hiding on this page! \u{1F47E}"}
          </p>
        </div>
      </div>
    </section>
  );
}
