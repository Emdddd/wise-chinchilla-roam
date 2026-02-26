export function RikbaSafety() {
  const cards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l7 3v7c0 5-3.1 9.4-7 10.9C8.1 21.4 5 17 5 12V5l7-3z" fill="var(--brand)" opacity="0.15" stroke="var(--brand)" strokeWidth="1.5"/>
          <path d="M9 12l2.5 2.5L15 9" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Thorough Background Checks",
      body: "Every driver undergoes a comprehensive criminal and driving history check before their first trip. No exceptions.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="var(--brand)" opacity="0.15"/>
          <path d="M12 7v5l3 3" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="1.5" fill="var(--brand)"/>
        </svg>
      ),
      title: "Real-Time Trip Tracking",
      body: "Share your live trip route and ETA with friends or family in one tap. We store every route for accountability.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="4" fill="var(--brand)" opacity="0.15"/>
          <path d="M8 12h8M12 8v8" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "In-App Emergency Button",
      body: "One tap connects you to local emergency services and simultaneously alerts our safety team with your live location.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="var(--brand)" opacity="0.15" stroke="var(--brand)" strokeWidth="1.5"/>
        </svg>
      ),
      title: "24/7 Incident Support",
      body: "Our dedicated safety team is always online. Report any concern and receive a human response within minutes.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="var(--brand)" opacity="0.15"/>
          <path d="M12 2a10 10 0 0 0 0 20" stroke="var(--brand)" strokeWidth="1.5"/>
          <path d="M12 7v5l4 2" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Vehicle Inspections Required",
      body: "All Rikba vehicles must pass a safety inspection checklist annually. Riders always know they're in a road-worthy car.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="var(--brand)" opacity="0.15" stroke="var(--brand)" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Mutual Rating System",
      body: "Low-rated users — rider or driver — are reviewed and removed. Everyone earns their place in the Rikba community.",
    },
  ];

  return (
    <section id="safety" className="py-20 md:py-28 scroll-mt-20" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: "var(--brand)", background: "var(--brand-light)", fontFamily: "DM Sans, sans-serif" }}
          >
            Safety & Trust
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}
          >
            Safety isn't an option. It's the foundation.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
          >
            We've built every safety feature riders ask for and drivers need — from day one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 bg-white flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0 2px 16px rgba(0,26,64,0.06)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--brand-light)" }}>
                {c.icon}
              </div>
              <h3 className="text-base font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}>
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
