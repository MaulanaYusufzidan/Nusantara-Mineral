import { Fraunces, IBM_Plex_Sans } from "next/font/google";

// Display / headline face — editorial serif with enough weight and
// character to carry large corporate statements without feeling soft.
export const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

// Body / UI face — IBM Plex Sans has technical, engineering-drawing
// origins that suit an industrial company better than a default grotesk.
export const plexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
