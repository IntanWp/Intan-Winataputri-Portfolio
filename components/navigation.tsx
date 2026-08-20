"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "Now", id: "now" },
    { name: "Work", id: "projects" },
    { name: "Backend", id: "skills" },
    { name: "Record", id: "highlights" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/95 backdrop-saturate-150 border-b border-border" : "bg-transparent"
      }`}
      style={isScrolled ? { backdropFilter: "none" } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
            aria-label="Back to top"
          >
            <span className="band-field inline-block h-6 w-6 rounded-full bg-background">
              <span
                className="band rounded-full"
                style={{ inset: "0 6px 4px 0", background: "var(--band-backend)" }}
              />
              <span
                className="band rounded-full"
                style={{ inset: "4px 0 0 6px", background: "var(--band-leadership)" }}
              />
              <span
                className="band rounded-full"
                style={{ inset: "2px 2px 2px 2px", background: "var(--band-shipped)" }}
              />
            </span>
            <span className="tag-chord text-xs label-wide text-foreground/70 group-hover:text-foreground transition-colors hidden sm:inline">
              Intan Winataputri
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="tag-chord text-[13px] label-wide text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Intan-Winataputri-CV.pdf"
              download
              className="tag-chord text-[13px] label-wide px-4 py-2 bg-foreground text-background hover:bg-band-backend transition-colors"
            >
              CV
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-2 border-t border-border pt-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="tag-chord text-sm label-wide text-foreground/80 hover:text-foreground transition-colors text-left py-2.5"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Intan-Winataputri-CV.pdf"
              download
              className="tag-chord text-sm label-wide text-left py-2.5 text-band-backend"
            >
              Download CV ↓
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
