export function RikbaPainPoints() {
  const pains = [
    {
      emoji: "💸",
      headline: "Surge pricing hits hardest on Malta's busiest nights.",
      body: "Paceville on a weekend? Fireworks season? Msida ferry rush? Prices spike exactly when you need a ride most.",
    },
    {
      emoji: "⏳",
      headline: "Long waits and last-minute cancellations across the island.",
      body: "Malta is small — getting a ride shouldn't feel impossible. Yet drivers cancel, go offline, or simply don't show.",
    },
    {
      emoji: "🙈",
      headline: "Sliema to Valletta — why does it cost twice as much today?",
      body: "Same trip, different days, wildly different fares. No explanation, no transparency, no fairness.",
    },
    {
      emoji: "🚗",
      headline: "Malta drivers deserve far better than they get.",
      body: "Local drivers navigate narrow roads, traffic chaos, and poor maps — then hand over a big chunk of every fare to a foreign platform.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: "var(--brand)", background: "var(--brand-light)", fontFamily: "DM Sans, sans-serif" }}
          >
            The Problem
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}
          >
            Tired of rides in Malta that feel like a scam?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
          >
            You're not imagining it. Malta's ride-hailing market is broken — for riders and drivers alike. Rikba is built to fix it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "white",
                borderColor: "var(--border)",
                boxShadow: "0 2px 16px rgba(0,26,64,0.06)",
              }}
            >
              <span className="text-4xl">{p.emoji}</span>
              <h3
                className="text-base font-bold leading-snug"
                style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}
              >
                {p.headline}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
