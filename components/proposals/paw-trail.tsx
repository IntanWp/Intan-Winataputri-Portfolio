"use client"

import { useRef, useState } from "react"

type Print = { id: number; x: number; y: number; flip: boolean }

let seq = 0

export function PawTrail() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastRef = useRef(0)
  const [prints, setPrints] = useState<Print[]>([])

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const now = performance.now()
    if (now - lastRef.current < 140) return
    lastRef.current = now

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const id = seq++
    const print: Print = {
      id,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      flip: id % 2 === 0,
    }
    setPrints((prev) => [...prev.slice(-7), print])
    window.setTimeout(() => {
      setPrints((prev) => prev.filter((p) => p.id !== id))
    }, 700)
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative h-full min-h-[220px] w-full overflow-hidden rounded-2xl bg-muted"
    >
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
        <p className="tag-chord label-wide text-[11px] text-muted-foreground">move your cursor here</p>
      </div>
      {prints.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute h-2 w-1.5 rounded-full bg-band-shipped-ink motion-safe:animate-[paw-fade_700ms_ease-out_forwards]"
          style={{
            left: p.x - 3,
            top: p.y - 4,
            transform: p.flip ? "rotate(20deg)" : "rotate(-20deg)",
          }}
        />
      ))}
    </div>
  )
}
