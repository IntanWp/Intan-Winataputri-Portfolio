"use client"

import { useState } from "react"
import { motion } from "motion/react"

const STAGES = [
  { caption: "plant it", height: 2 },
  { caption: "give it a sec...", height: 14 },
  { caption: "look at that", height: 26 },
  { caption: "fully grown. click to replant", height: 40 },
]

export function GrowASprout() {
  const [stage, setStage] = useState(0)

  function handleClick() {
    setStage((s) => (s + 1) % STAGES.length)
  }

  const current = STAGES[stage]

  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-muted px-6 text-center">
      <button
        onClick={handleClick}
        className="group flex flex-col items-center gap-1 rounded-full p-6 transition-transform active:scale-95"
        aria-label="Grow a sprout, click to advance"
      >
        <div className="flex h-12 items-end justify-center">
          <motion.div
            animate={{ height: current.height }}
            transition={{ type: "spring", stiffness: 140, damping: 14 }}
            className="w-1.5 rounded-full bg-band-leadership origin-bottom"
          />
        </div>
        <div className="h-2 w-8 rounded-full bg-band-shipped-soft" />
      </button>
      <p className="tag-chord label-wide text-[11px] text-muted-foreground">{current.caption}</p>
    </div>
  )
}
