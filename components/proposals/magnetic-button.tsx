"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

const MAX_PULL = 14

export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 16 })
  const springY = useSpring(y, { stiffness: 200, damping: 16 })

  function handlePointerMove(e: React.PointerEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / rect.width) * MAX_PULL)
    y.set((relY / rect.height) * MAX_PULL)
  }

  function handlePointerLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-4 rounded-2xl bg-muted px-6">
      <motion.button
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ x: springX, y: springY }}
        className="rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm label-wide tag-chord shadow-sm"
      >
        Download CV
      </motion.button>
      <p className="tag-chord label-wide text-[11px] text-muted-foreground">hover near the button</p>
    </div>
  )
}
