"use client"

import { Mail, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-montserrat font-black text-4xl md:text-5xl text-center mb-16 text-foreground">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 shadow-xl">
            <h3 className="font-montserrat font-semibold text-2xl text-primary mb-6 text-center">Let's Connect</h3>
            <p className="text-foreground leading-relaxed mb-8 text-left">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just
              want to chat about technology, feel free to reach out!
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <a
                href="mailto:intan.winataputri@example.com"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-normal text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">intanwp1@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/intan-winataputri-38643b1a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-normal text-foreground">LinkedIn</p>
                  <p className="text-muted-foreground text-sm">Intan Winataputri</p>
                </div>
              </a>

              <a
                href="https://github.com/IntanWp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-primary/10 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <p className="font-normal text-foreground">GitHub</p>
                  <p className="text-muted-foreground text-sm">IntanWp</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
