"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const COLORS = ["var(--band-backend)", "var(--band-leadership)", "var(--band-shipped)"]

function Piece({ i }: { i: number }) {
  const angle = (i / 10) * Math.PI * 2
  const distance = 40 + (i % 3) * 10
  return (
    <motion.span
      initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      animate={{
        opacity: 0,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance + 20,
        rotate: (i % 2 === 0 ? 1 : -1) * 180,
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
      style={{ background: COLORS[i % COLORS.length] }}
    />
  )
}

export function ConfettiBadge() {
  const [burstId, setBurstId] = useState<number | null>(null)

  function handleClick() {
    setBurstId(Date.now())
  }

  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-muted px-6">
      <button onClick={handleClick} className="relative">
        <span className="tag-chord label-wide text-[11px] rounded-full bg-card border border-border px-4 py-2 text-band-shipped-ink">
          Top 10 Finalist, Elevaite Hackathon
        </span>
        <AnimatePresence>
          {burstId !== null && (
            <span key={burstId}>
              {Array.from({ length: 10 }).map((_, i) => (
                <Piece key={i} i={i} />
              ))}
            </span>
          )}
        </AnimatePresence>
      </button>
      <p className="tag-chord label-wide text-[11px] text-muted-foreground">click the badge</p>
    </div>
  )
}
