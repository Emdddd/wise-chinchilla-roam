export function RikbaBenefits() {
  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="var(--brand-light)"/>
          <path d="M8 12l3 3 5-5" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Transparent Pricing",
      body: "See your exact fare before you book. What you see is always what you pay — guaranteed.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="7" width="20" height="14" rx="3" fill="var(--brand-light)"/>
          <path d="M7 7V5a5 5 0 0 1 10 0v2" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="14" r="2" fill="var(--brand)"/>
        </svg>
      ),
      title: "No Surge. Ever.",
      body: "We don't punish you for needing a ride on a rainy Friday night. Our pricing model is capped and fair.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" fill="var(--brand-light)"/>
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Verified Drivers Only",
      body: "Every Rikba driver passes background checks, vehicle inspection, and a community rating system.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="var(--brand-light)" stroke="var(--brand)" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Rated & Trusted",
      body: "Mutual ratings keep the community honest. Great riders get access to top-rated drivers first.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="var(--brand-light)" stroke="var(--brand)" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Lightning Fast Pickup",
      body: "More drivers means shorter waits. Our matching algorithm is optimized for your time, not our profits.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="var(--brand-light)" stroke="var(--brand)" strokeWidth="1.5"/>
        </svg>
      ),
      title: "24/7 Live Support",
      body: "Real humans, not bots. Get help in seconds — during your ride, after it, or any time in between.",
    },
  ];

  return (
    <section className="py-20 md:py-28" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: "var(--brand)", background: "var(--brand-light)", fontFamily: "DM Sans, sans-serif" }}
          >
            Why Rikba
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}
          >
            Built differently. Because you deserve better.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
          >
            Every decision we make starts with a simple question: is this fair for riders and drivers?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              style={{
                background: "white",
                boxShadow: "0 2px 16px rgba(0,26,64,0.06)",
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--brand-light)" }}>
                {b.icon}
              </div>
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}
              >
                {b.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
              >
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
