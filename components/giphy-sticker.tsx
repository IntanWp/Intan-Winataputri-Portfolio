"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Renders a GIPHY sticker as its real transparent GIF asset (served live
 * from Giphy's own CDN, never downloaded or re-hosted), lazy-mounted only
 * once it scrolls near the viewport so it costs nothing on first paint.
 * The iframe /embed/ route wraps stickers in an opaque player box that
 * can't be made transparent from outside its cross-origin document, so the
 * direct media.giphy.com asset is used instead to get an actually
 * transparent sticker.
 */
export function GiphySticker({
  id,
  title,
  size = 96,
  rotate = "",
  href,
  dark = false,
}: {
  id: string
  title: string
  size?: number
  rotate?: string
  href?: string
  dark?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const content = visible ? (
    <img
      src={`https://media.giphy.com/media/${id}/giphy.gif`}
      alt={title}
      width={size}
      height={size}
      loading="lazy"
      className="object-contain drop-shadow-[2px_3px_2px_rgba(36,52,74,0.15)]"
      style={{ width: size, height: size }}
    />
  ) : (
    <div style={{ width: size, height: size }} aria-hidden />
  )

  return (
    <div ref={ref} className={`inline-flex flex-col items-center shrink-0 gap-1 ${rotate}`} style={{ width: size }}>
      <a
        href={href ?? `https://giphy.com/stickers/${id}`}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        {content}
      </a>
      {visible && (
        <span className={`tag-chord text-[8px] ${dark ? "text-white/50" : "text-muted-foreground/60"}`}>
          via GIPHY
        </span>
      )}
    </div>
  )
}
