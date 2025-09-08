"use client"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-12 md:p-16 shadow-2xl">
          <h1 className="font-montserrat font-extrabold text-5xl md:text-7xl lg:text-8xl text-primary mb-6 text-balance">
            Intan Winataputri
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground mb-8">Full-Stack Engineer</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Computer Science student passionate about building scalable applications. Ready to
            bring innovative solutions to your team.
          </p>
        </div>
      </div>
    </section>
  )
}
