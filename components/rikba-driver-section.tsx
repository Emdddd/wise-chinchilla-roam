export function RikbaDriverSection() {
  const perks = [
    { label: "Higher Earnings Per Trip", desc: "We charge Malta drivers a lower platform fee so you take home a bigger share of every fare — every single day.", icon: "📈" },
    { label: "Flexible Scheduling", desc: "Drive when you want, for as long as you want. No minimum hours, no penalties for going offline.", icon: "🕐" },
    { label: "Instant Payouts", desc: "Cash out your earnings the same day, every day — no waiting until next week.", icon: "⚡" },
    { label: "Performance Bonuses", desc: "Top-rated drivers unlock exclusive bonus zones, priority dispatch, and monthly rewards.", icon: "🏆" },
    { label: "In-App Driver Support", desc: "A dedicated driver support team available around the clock — because your time is money.", icon: "🎧" },
    { label: "Local Fuel & Maintenance Perks", desc: "Access partner discounts at fuel stations and garages across Malta to keep your running costs low.", icon: "🔧" },
  ];

  return (
    <section id="drivers" className="py-20 md:py-28 scroll-mt-20" style={{ background: "var(--brand-navy)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — image + comparison */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/9399/images/1772063926174-rikba-driver"
                alt="Rikba driver in Malta"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: "linear-gradient(to top, rgba(0,26,64,0.7) 0%, transparent 60%)" }}
              />
            </div>

            {/* Floating comparison card */}
            <div
              className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 rounded-2xl p-5 shadow-xl"
              style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
              >
                Platform Fee Comparison (per trip)
              </p>
              <div className="space-y-3">
                {[
                  { name: "Typical Platform", pct: 78, label: "They keep ~28%+", bad: true },
                  { name: "Rikba", pct: 40, label: "We keep far less", bad: false },
                ].map((row) => (
                  <div key={row.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-primary)" }}>
                        {row.name}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: row.bad ? "#ef4444" : "var(--accent)" }}
                      >
                        {row.label}
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${row.pct}%`,
                          background: row.bad ? "#ef4444" : "var(--accent)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p
                className="text-xs mt-3 italic"
                style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
              >
                * Exact rates set at launch. Comparative for illustration only.
              </p>
            </div>
          </div>

          {/* Right — perks */}
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ color: "var(--brand)", background: "rgba(0,102,255,0.15)", fontFamily: "DM Sans, sans-serif" }}
            >
              For Drivers
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 text-white"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Drive Malta.
              <br />
              <span style={{ color: "var(--brand)" }}>Earn More.</span>
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-10"
              style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.7)" }}
            >
              Rikba was built with Malta's drivers at the table — not as an afterthought. Fairer fees, real support, and tools that help you earn more on your schedule across the island.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {perks.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex gap-3 items-start transition-all duration-200 hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span className="text-2xl mt-0.5 shrink-0">{p.icon}</span>
                  <div>
                    <p
                      className="text-sm font-bold text-white mb-1"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {p.label}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.6)" }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#apply-driver"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                fontFamily: "DM Sans, sans-serif",
                background: "var(--brand)",
                color: "white",
                boxShadow: "0 8px 32px rgba(0,102,255,0.4)",
              }}
            >
              Apply to Drive
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
