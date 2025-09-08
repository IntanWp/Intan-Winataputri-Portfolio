export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat font-black text-4xl md:text-5xl text-center mb-16 text-foreground">About Me</h2>

        <div className="glass-card rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-4">Overview</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-secondary ">Name:</span>
                  <span className="text-foreground">Intan Winataputri</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-secondary">Major:</span>
                  <span className="text-foreground">Computer Science - Software Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-secondary">GPA:</span>
                  <span className="text-foreground">3.73/4.00 (1st - 4th semester)</span>
                </div>
              </div>

              <p className="text-foreground leading-relaxed">
                Full-Stack Engineer with a strong affinity for back-end development, specializing in the MERN stack
                (MongoDB, Express.js, React, Node.js). A fast learner and adaptable problem-solver, passionate about
                architecting efficient, scalable server-side solutions and robust APIs.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-montserrat font-semibold text-xl text-primary mb-4">Highlights</h3>
                <ul className="space-y-3">
                  {[
                    "Lab Assistant at BINUS University",
                    "Tutor (Scholarship Recipient) at BINUS University",
                    "Team Leader of Quality Assurance Outgoing Exchange at AIESEC in BINUS",
                    "Top 10 Finalist at Hackathon ElevAIte Indonesia 2025",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-montserrat font-semibold text-xl text-primary mb-4">Languages</h3>
                <ul className="space-y-3">
                  {["English (Fluent Proficiency)", "Indonesian (Native Proficiency)"].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
