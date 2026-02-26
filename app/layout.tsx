import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/navbar";
import { DevToolsGuard } from "./devtools-guard";
import { TailwindCDNClient } from "@/components/tailwind-cdn-client";
import { siteConfig } from "@/lib/site-config";

const bodyFont = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const headingFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: 'Rikba - Malta Rides',
    template: '%s | Rikba',
  },
  description: 'Join Malta\'s earliest riders. Better rides, fairer prices. Launching soon.',
  keywords: ['Rikba', 'Malta', 'rides', 'taxi', 'ride-hailing'],
  authors: [{ name: 'Rikba' }],
  creator: 'Rikba',
  publisher: 'Rikba',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_MT",
    siteName: 'Rikba',
    title: 'Rikba - Best Rides in Malta',
    description: 'Join the waitlist to be among Malta\'s first riders. Better rides, lower prices.',
    images: [
      {
        url: 'https://i.imgur.com/qLENgdJ_d.webp?maxwidth=760&fidelity=grand',
        width: 1200,
        height: 630,
        alt: 'Rikba Malta',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Rikba - Best Rides in Malta',
    description: 'Join the waitlist to be among Malta\'s first riders.',
    images: ['https://i.imgur.com/qLENgdJ_d.webp?maxwidth=760&fidelity=grand'],
  },
  metadataBase: new URL('https://rikba.mt'),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* Google Fonts — Syne (display) + DM Sans (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
        {/* Force light mode — prevents OS dark theme from bleeding into the preview/screenshots */}
        <meta name="color-scheme" content="light only" />
        {/* Schema.org: associate this site with Rikba for Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rikba",
              url: "https://rikba.mt",
              description: "Join Malta's earliest riders. Better rides, fairer prices. Launching soon.",
              creator: {
                "@type": "Organization",
                name: "Rikba",
                url: "https://rikba.mt",
              },
            }),
          }}
        />
        {/*
          CRITICAL: Base styles to prevent FOUC and hydration errors
          ⚠️ DO NOT REMOVE OR MODIFY WITHOUT CAREFUL TESTING ⚠️
        */}
        <style href="kleap-base-styles" precedence="high">{`
          .bg-white { background-color: white; }
          .bg-black { background-color: black; }
          .text-white { color: white; }
          .text-black { color: black !important; }
          .antialiased { -webkit-font-smoothing: antialiased; }
          .h-full { height: 100%; }
          .w-full { width: 100%; }
          .bg-primary { background-color: oklch(0.205 0 0); }
          .text-primary-foreground { color: oklch(0.985 0 0); }
        `}</style>
      </head>
      <body
        className={cn(
          bodyFont.variable,
          headingFont.variable,
          "bg-white antialiased h-full w-full",
        )}
        suppressHydrationWarning
      >
        <TailwindCDNClient />
        <DevToolsGuard />
        <main className={siteConfig.showNavbar !== false ? "pt-24" : ""}>
          {siteConfig.showNavbar !== false && <NavBar />}
          {children}
        </main>
      </body>
    </html>
  );
}
