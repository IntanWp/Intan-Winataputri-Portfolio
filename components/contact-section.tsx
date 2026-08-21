"use client";

import { Mail, Linkedin, Github } from "lucide-react";

const LINKS = [
  {
    label: "Email",
    value: "intanwp1@gmail.com",
    href: "mailto:intanwp1@gmail.com",
    icon: Mail,
    color: "var(--band-backend)",
  },
  {
    label: "LinkedIn",
    value: "Intan Winataputri",
    href: "https://www.linkedin.com/in/intan-winataputri-38643b1a9",
    icon: Linkedin,
    color: "var(--band-leadership)",
  },
  {
    label: "GitHub",
    value: "IntanWp",
    href: "https://github.com/IntanWp",
    icon: Github,
    color: "var(--band-shipped-ink)",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans font-medium text-3xl md:text-5xl text-foreground mb-6 text-balance max-w-2xl sm:ml-auto sm:text-right">
          Open to backend roles, internships, and freelance work.
        </h2>
        <p className="text-foreground/75 text-base md:text-lg leading-relaxed max-w-xl mb-14 md:mb-16 text-pretty sm:ml-auto sm:text-right">
          Reach out directly, or start with my CV. I look forward to hearing
          from you :)
        </p>

        <div className="sm:ml-auto sm:max-w-2xl flex flex-col gap-10">
          <div className="flex flex-col w-full sm:max-w-sm sm:ml-auto">
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
                    className="w-4 h-4 shrink-0"
                    style={{ color: link.color }}
                    aria-hidden
                  />
                </span>
              </a>
            ))}
          </div>

          <a
            href="/Intan-Winataputri-CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm label-wide tag-chord hover:bg-band-backend transition-colors self-end"
          >
            Download CV
          </a>
        </div>

        <p className="tag-chord text-[11px] text-muted-foreground mt-24 pt-8 border-t border-border text-center">
          Intan Winataputri - built solo, revised {new Date().getFullYear()}.
        </p>
      </div>
    </section>
  );
}
