import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { TimelineSection } from "@/components/timeline-section"
import { ContactSection } from "@/components/contact-section"
import { KonamiEgg } from "@/components/konami-egg"

export default function Home() {
  return (
    <main className="min-h-screen">
      <KonamiEgg />
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <TimelineSection />
      <ContactSection />
    </main>
  )
}
