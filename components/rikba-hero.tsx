"use client";

import { KleapForm } from "@/components/kleap-form";

export function RikbaHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
      style={{ background: "var(--brand-navy)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url('https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/9399/images/1772063930756-rikba-hero-bg')`,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,26,64,0.92) 0%, rgba(0,26,64,0.75) 50%, rgba(0,102,255,0.35) 100%)",
        }}
      />

      {/* Decorative glow orb */}
      <div
        className="absolute top-1/3 right-8 md:right-24 w-64 h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--brand)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Left — headline + CTAs */}
          <div className="space-y-8">
            <div className="w-full flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mx-auto">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }}></span>
              <span className="text-xs font-semibold tracking-widest text-white/80 uppercase"
                style={{ fontFamily: "DM Sans, sans-serif" }}>
                Launching Summer 2026
              </span>
            </div>
          </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight text-white"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Malta Rides.
              <br />
              <span style={{ color: "var(--brand)" }}>Fair Price.</span>
              <br />
              Zero Hassle.
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.75)" }}
            >
              No surge pricing surprises. No race-to-the-bottom for Malta's drivers.
              Rikba is Malta's ride-hailing platform built on fairness — for everyone on the island.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  background: "var(--brand)",
                  boxShadow: "0 8px 32px rgba(0,102,255,0.45)",
                }}
              >
                Join the Waitlist
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#drivers"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-blue-600"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" strokeLinecap="round" />
                </svg>
                Drive with Rikba
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {[
                { icon: "⭐", text: "Rider-first pricing" },
                { icon: "🛡️", text: "Safety guaranteed" },
                { icon: "💸", text: "Fair driver pay" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm font-medium" style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.7)" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom fade */}
          <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
         style={{ background: "linear-gradient(to bottom, transparent, var(--surface))" }}
       />
     </section>
   );
 }
}
