"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

const MAX_OFFSET = 4

function useTrackedEye() {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18 })
  const springY = useSpring(y, { stiffness: 220, damping: 18 })

  function update(clientX: number, clientY: number) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = clientX - cx
    const dy = clientY - cy
    const dist = Math.hypot(dx, dy) || 1
    const clamped = Math.min(MAX_OFFSET, dist / 10)
    x.set((dx / dist) * clamped)
    y.set((dy / dist) * clamped)
  }

  return { ref, springX, springY, update }
}

export function EyesThatFollow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const eyeA = useTrackedEye()
  const eyeB = useTrackedEye()

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    eyeA.update(e.clientX, e.clientY)
    eyeB.update(e.clientX, e.clientY)
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-6 rounded-2xl bg-muted"
    >
      <div className="flex gap-3">
        <span ref={eyeA.ref} className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-border">
          <motion.span className="h-3 w-3 rounded-full bg-foreground" style={{ x: eyeA.springX, y: eyeA.springY }} />
        </span>
        <span ref={eyeB.ref} className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-border">
          <motion.span className="h-3 w-3 rounded-full bg-foreground" style={{ x: eyeB.springX, y: eyeB.springY }} />
        </span>
      </div>
      <p className="tag-chord label-wide text-[11px] text-muted-foreground">move your cursor</p>
    </div>
  )
}
