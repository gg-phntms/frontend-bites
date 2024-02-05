import { JetBrains_Mono, Cinzel } from "next/font/google";

export const JB_MONO = JetBrains_Mono({
  variable: "--jb-mono",
  weight: ["200", "400", "600"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const CINZEL = Cinzel({
  variable: "--cinzel",
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  fallback: ["serif"],
});

export const fontClasses = [JB_MONO.variable, CINZEL.variable].join(" ");
