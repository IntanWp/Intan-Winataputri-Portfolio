import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Intan Winataputri - Full-Stack Engineer",
  description:
    "Portfolio of Intan Winataputri, Computer Science student specializing in full-stack development with MERN stack expertise.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ fontFamily: '"Inter", sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
