import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohanamurali G | Full Stack Developer",
  description:
    "Portfolio of Mohanamurali G - Full Stack Developer specializing in React, Next.js, TypeScript, Java, Spring Boot, and Cloud Architecture.",
  keywords: [
    "Mohanamurali G",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Mohanamurali G" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
