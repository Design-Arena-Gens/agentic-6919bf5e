import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dr. Mira Calder | Computational Neuroscience",
  description:
    "Portfolio of Dr. Mira Calder, a computational neuroscientist exploring cortical dynamics, embodied intelligence, and human-centered neurotechnology.",
  metadataBase: new URL("https://agentic-6919bf5e.vercel.app"),
  openGraph: {
    title: "Dr. Mira Calder — Computational Neuroscience Portfolio",
    description:
      "Exploring cortical flow, embodied cognition, and intelligent neurointerfaces through elegant science and design.",
    url: "https://agentic-6919bf5e.vercel.app",
    siteName: "Mira Calder · Computational Neuroscience",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Mira Calder — Computational Neuroscience Portfolio",
    description:
      "Elegant, intelligent, and calm — an immersive look at cortical dynamics and neuroaesthetic research.",
  },
  keywords: [
    "computational neuroscience",
    "cortical dynamics",
    "embodied cognition",
    "brain-computer interfaces",
    "neural data visualization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
