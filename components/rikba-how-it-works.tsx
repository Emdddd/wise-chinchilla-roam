export function RikbaHowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Open the App & Enter Your Destination",
      body: "Type where you're going and instantly see the exact fare — no hidden fees, no surprises. Choose your ride type and confirm.",
      detail: "Fare shown upfront. Always.",
    },
    {
      step: "02",
      title: "Get Matched with a Nearby Driver",
      body: "Our smart dispatch connects you to the closest available, highest-rated driver in seconds. Track their arrival in real time.",
      detail: "Live GPS. Real ETA.",
    },
    {
      step: "03",
      title: "Ride, Rate & Go",
      body: "Enjoy your trip knowing you paid a fair price. Rate your experience after — it helps the whole community.",
      detail: "Mutual ratings. Genuine trust.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 scroll-mt-20" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{ color: "var(--brand)", background: "var(--brand-light)", fontFamily: "DM Sans, sans-serif" }}
          >
            How It Works
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}
          >
            Simple. Transparent. Reliable.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
          >
            Getting a Rikba ride takes less than 60 seconds. Here's exactly how it works.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-[16.5%] right-[16.5%] h-0.5"
            style={{ background: "linear-gradient(to right, var(--brand-light), var(--brand), var(--brand-light))" }}
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-5">
                {/* Step circle */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-lg z-10"
                    style={{ background: "var(--brand)", fontFamily: "Syne, sans-serif", boxShadow: "0 0 0 6px var(--brand-light)" }}
                  >
                    {s.step}
                  </div>
                </div>

                <div
                  className="rounded-2xl p-6 w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{
                    background: i === 1 ? "var(--brand)" : "white",
                    border: i === 1 ? "none" : "1px solid var(--border)",
                    boxShadow: i === 1 ? "0 8px 32px rgba(0,102,255,0.3)" : "0 2px 16px rgba(0,26,64,0.06)",
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-3 leading-snug"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      color: i === 1 ? "white" : "var(--brand-navy)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      color: i === 1 ? "rgba(255,255,255,0.82)" : "var(--text-secondary)",
                    }}
                  >
                    {s.body}
                  </p>
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      background: i === 1 ? "rgba(255,255,255,0.2)" : "var(--brand-light)",
                      color: i === 1 ? "white" : "var(--brand)",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {s.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App image */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl relative">
          <img
            src="https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/9399/images/1772063936571-rikba-rider-app"
            alt="Rider using Rikba app"
            className="w-full h-56 md:h-72 object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "rgba(0,26,64,0.5)" }}
          >
            <div className="text-center">
              <p
                className="text-white text-2xl md:text-3xl font-extrabold mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                App launching soon
              </p>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-105"
                style={{ background: "var(--brand)", fontFamily: "DM Sans, sans-serif" }}
              >
                Get Notified at Launch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
