"use client";

import { RikbaNavbar } from "@/components/rikba-navbar";
import { RikbaHero } from "@/components/rikba-hero";
import { RikbaPainPoints } from "@/components/rikba-pain-points";
import { RikbaBenefits } from "@/components/rikba-benefits";
import { RikbaDriverSection } from "@/components/rikba-driver-section";
import { RikbaHowItWorks } from "@/components/rikba-how-it-works";
import { RikbaSafety } from "@/components/rikba-safety";
import { RikbaFaq } from "@/components/rikba-faq";
import { RikbaFinalCta } from "@/components/rikba-final-cta";
import { RikbaFooter } from "@/components/rikba-footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <RikbaNavbar />
      <RikbaHero />
      <RikbaPainPoints />
      <RikbaBenefits />
      <RikbaDriverSection />
      <RikbaHowItWorks />
      <RikbaSafety />
      <RikbaFaq />
      <RikbaFinalCta />
      <RikbaFooter />
    </div>
  );
}
