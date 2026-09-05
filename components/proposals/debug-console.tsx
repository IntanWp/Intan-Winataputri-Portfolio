"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const LOG_LINES = [
  "> whoami",
  "intan.winataputri (backend engineer, still shipping)",
  "> status",
  "thesis: in progress. internship: ongoing. coffee: sufficient.",
]

export function DebugConsole() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-muted px-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="tag-chord label-wide text-[11px] rounded-full border border-border bg-card px-4 py-2 text-foreground"
        aria-expanded={open}
      >
        {"</>"} {open ? "close console" : "open console"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.pre
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-xs overflow-hidden rounded-xl bg-foreground text-background tag-chord text-[11px] leading-relaxed p-4"
          >
            {LOG_LINES.join("\n")}
          </motion.pre>
        )}
      </AnimatePresence>
      {!open && <p className="tag-chord label-wide text-[11px] text-muted-foreground">click to open</p>}
    </div>
  )
}
