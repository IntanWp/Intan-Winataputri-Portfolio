"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const ROLES = ["Backend Engineer", "Systems Thinker", "Occasional Debugger", "Full-stack Shipper", "Bank Intern"]

export function CyclingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-muted px-6 text-center">
      <p className="font-sans text-2xl md:text-3xl text-foreground font-medium">Hi, I'm Intan.</p>
      <div className="relative h-[1.4em] w-full max-w-[280px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={ROLES[index]}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 whitespace-nowrap font-sans text-lg md:text-xl font-medium text-band-backend"
          >
            {ROLES[index]}
          </motion.p>
        </AnimatePresence>
      </div>
      <p className="tag-chord label-wide text-[11px] text-muted-foreground">cycles on its own, no input needed</p>
    </div>
  )
}
