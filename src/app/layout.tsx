import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishan Nikeshala Nawarathna | Software Engineer",
  description:
    "Official portfolio website of Ishan Nikeshala Nawarathna, a software engineer specializing in scalable backend systems, cloud architectures, and premium frontend interfaces. Explore my interactive CLI terminal and projects.",
  keywords: [
    "Ishan Nikeshala Nawarathna",
    "Ishan Nikeshala",
    "Software Engineer Portfolio",
    "Next.js Portfolio",
    "Tailwind CSS Portfolio",
    "Sri Lanka Software Engineer",
  ],
  authors: [{ name: "Ishan Nikeshala Nawarathna" }],
  openGraph: {
    title: "Ishan Nikeshala Nawarathna | Software Engineer",
    description:
      "Official portfolio website of Ishan Nikeshala Nawarathna, featuring an interactive developer CLI terminal and projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
