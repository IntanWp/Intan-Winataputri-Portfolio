import type React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata = {
  title: "Intan Winataputri — Backend Engineer",
  description:
    "Backend-focused software engineer (Spring Boot, MyBatis, MySQL) at PT Bank Sinarmas Tbk. Computer Science, BINUS University. Portfolio, projects, and CV.",
  generator: "v0.app",
};

const DIRECTION_CONTRACT = `
THESIS: her credentials are independently-tensioned color bands that only
resolve into named work when they cross; the icon-card grid on a
glass-and-gradient ground is refused.
OWN-WORLD: sun-white ground #FAF7EF, ink #1B1730; three translucent bands —
backend indigo #4B4A9E, leadership madder #A13E4A, shipped-work saffron
#E9A825 — crossing under mix-blend-mode:multiply so overlaps compute live.
Geist Sans wide-tracked labels, Geist Mono for credentials/data.
STORY: a recruiter sees three bands cross once and reads the labeled
overlaps as her actual, verifiable work before any section header explains
anything.
FIRST VIEWPORT: name and role in the clear sun-white gap top-left; three
diagonal bands sweep the lower field, each pairwise crossing labeled with a
real credential; CTA (download CV) sits inside the open gap.
FORM: candidate 6 of the grounded direction list, bolder-steered pick
"Composable Systems", seed key ce30cdc8,
generative-art-computational-color-chord-counterpoint.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying
its provenance.
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <template
          dangerouslySetInnerHTML={{ __html: `<!--${DIRECTION_CONTRACT}-->` }}
        />
        {children}
      </body>
    </html>
  );
}
