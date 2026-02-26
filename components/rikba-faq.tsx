"use client";

import { useState } from "react";

const faqs = [
  {
    q: "When does Rikba launch?",
    a: "We're currently in pre-launch, building our early access community right here in Malta. Sign up for the waitlist and you'll be among the very first to ride when Rikba goes live on the island.",
  },
  {
    q: "How is Rikba's pricing different from other apps?",
    a: "Rikba shows you the exact fare before you confirm your booking — no surge multipliers based on demand spikes. Our pricing is transparent and capped, so you always know what you'll pay.",
  },
  {
    q: "How do I sign up as a driver in Malta?",
    a: "Scroll down to the 'Drive with Rikba' section and fill out the driver application form. We'll be in touch to complete your background check and vehicle inspection when we launch in your area.",
  },
  {
    q: "Where in Malta will Rikba launch first?",
    a: "We're launching in Malta first. The more riders and drivers who sign up across the island — Valletta, Sliema, St Julian's, Birkirkara, Mosta, and beyond — the faster we go live. Sign up and spread the word!",
  },
  {
    q: "Is my data safe, and does Rikba comply with EU/GDPR rules?",
    a: "Absolutely. As a Malta-based platform operating under EU jurisdiction, Rikba is fully GDPR-compliant. We never sell your data, and all trip, location, and personal information is encrypted and used only to power your experience.",
  },
  {
    q: "What vehicle types can I drive?",
    a: "We accept standard sedans, SUVs, minivans, and accessible vehicles. Specific requirements (model year, condition standards) will be confirmed before your onboarding is complete.",
  },
  {
    q: "What happens if there's a problem during my ride?",
    a: "Use the in-app emergency button for immediate help, or contact our 24/7 support team directly. Every trip is logged so our team can review exactly what happened and respond quickly.",
  },
  {
    q: "Does Rikba take a cut of driver earnings?",
    a: "Yes — like any platform, we charge a service fee. But ours is meaningfully lower than industry standard, and we're transparent about exactly what it is. Drivers earn more per trip on Rikba.",
  },
];

export function RikbaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 scroll-mt-20" style={{ background: "white" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: "var(--brand)", background: "var(--brand-light)", fontFamily: "DM Sans, sans-serif" }}
          >
            FAQ
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}
          >
            Your questions, answered.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
          >
            Still curious? Reach out — we're right here in Malta and we read every message.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border transition-all duration-200"
              style={{
                borderColor: openIndex === i ? "var(--brand)" : "var(--border)",
                boxShadow: openIndex === i ? "0 0 0 3px var(--brand-light)" : "none",
              }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200 hover:bg-blue-50"
                style={{ background: openIndex === i ? "var(--brand-light)" : "white" }}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="font-semibold text-sm md:text-base pr-4"
                  style={{ fontFamily: "DM Sans, sans-serif", color: "var(--brand-navy)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
                  style={{
                    background: openIndex === i ? "var(--brand)" : "var(--surface)",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke={openIndex === i ? "white" : "var(--brand)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              <div
                className="transition-all duration-300 overflow-hidden"
                style={{ maxHeight: openIndex === i ? "300px" : "0px" }}
              >
                <p
                  className="px-5 pb-5 text-sm leading-relaxed"
                  style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
