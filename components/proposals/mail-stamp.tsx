"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export function MailStamp() {
  const [sent, setSent] = useState(false)

  function handleClick() {
    if (sent) return
    setSent(true)
    window.setTimeout(() => setSent(false), 1800)
  }

  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-muted px-6">
      <button
        onClick={handleClick}
        className="relative flex h-16 w-20 items-center justify-center rounded-lg border-2 border-dashed border-band-backend/40 bg-card transition-transform active:scale-95"
        aria-label="Stamp the envelope"
      >
        <span className="tag-chord text-[10px] text-muted-foreground">intanwp1@gmail.com</span>
        <AnimatePresence>
          {sent && (
            <motion.span
              initial={{ opacity: 0, scale: 1.6, rotate: -18 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
              className="absolute inline-flex rounded-full border-2 border-band-shipped-ink px-2 py-0.5 tag-chord label-wide text-[10px] text-band-shipped-ink bg-card"
            >
              reached out
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <p className="tag-chord label-wide text-[11px] text-muted-foreground">click the envelope</p>
    </div>
  )
}
