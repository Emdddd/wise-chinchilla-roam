/**
 * Site Configuration - EDIT THIS FILE to customize your site
 * All metadata, OG images, and branding read from here automatically.
 */

export const siteConfig = {
  // Basic Info
  name: "Rikba Malta",
  tagline: "Malta's Fairest Ride-Hailing App",
  description:
    "Rikba is Malta's ride-hailing platform built on fairness — transparent pricing for riders, better pay for local drivers, and safety you can count on island-wide. Built with Kleap - the AI website builder.",

  // Site URL (replaced automatically on deploy)
  url: process.env.NEXT_PUBLIC_URL || "https://your-app.kleap.io",

  // Layout: navbar is hidden by default. Set to true for marketing/landing sites.
  showNavbar: false,

  // Navigation links (only used when showNavbar is true)
  navLinks: [] as { title: string; link: string }[],

  // SEO Keywords
  keywords: ["ride-hailing", "rideshare app", "taxi alternative", "driver earnings", "ride app waitlist"],

  // Author/Company
  author: "Rikba Team",
  company: "Rikba",

  // Social
  twitter: "@yourtwitter",

  // OG Image: set to a generated image URL for rich link previews
  ogImage: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/9399/images/1772063930756-rikba-hero-bg",

  // Theme colors for OG image (fallback when ogImage is empty)
  ogBackground: "#020022",
  ogAccent1: "#1a1a4e",
  ogAccent2: "#2d1b4e",
};

export type SiteConfig = typeof siteConfig;
