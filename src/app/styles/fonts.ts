import { JetBrains_Mono } from "next/font/google";

export const JB_MONO = JetBrains_Mono({
  variable: "--jb-mono",
  weight: ["200", "400", "600"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const fontClasses = [JB_MONO.variable].join(" ");
