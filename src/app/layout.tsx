import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sajjad Naqvi — SDET | AI QA Engineer | CI/CD & DevOps",
  description:
    "Portfolio of Sajjad Naqvi, a Berlin-based SDET specializing in Playwright/Pytest test automation, CI/CD pipelines, Docker, AWS, and AI-assisted testing frameworks.",
  metadataBase: new URL("https://sajjad-naqvi.vercel.app"),
  openGraph: {
    title: "Sajjad Naqvi — SDET | AI QA Engineer | CI/CD & DevOps",
    description:
      "5+ years building automated E2E/API test suites, CI/CD pipelines, and AI-assisted quality engineering frameworks.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
