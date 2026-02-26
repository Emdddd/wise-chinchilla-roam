import { useRef, useEffect, useState } from "react";

export function RikbaDriverSection() {
  const formRef = useRef();
  const [result, setResult] = useState("");

  const perks = [
    {
      label: "Higher Earnings Per Trip",
      desc:
        "We charge Malta drivers a lower platform fee so you take home a bigger share of every fare — every single day.",
      icon: "📈",
    },
    {
      label: "Flexible Scheduling",
      desc:
        "Drive when you want, for as long as you want. No minimum hours, no penalties for going offline.",
      icon: "🕐",
    },
    {
      label: "Weekly Payouts",
      desc: "Every Monday — guaranteed.",
      icon: "💰",
    },
    {
      label: "Performance Bonuses",
      desc:
        "Top-rated drivers unlock exclusive bonus zones, priority dispatch, and monthly rewards.",
      icon: "🏆",
    },
    {
      label: "In-App Driver Support",
      desc:
        "A dedicated driver support team available around the clock — because your time is money.",
      icon: "🎧",
    },
  ];

  // Scroll animation for progress bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute("data-width");
            entry.target.style.setProperty("--progress", width / 100);
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".progress-bars").forEach((bar) => {
      observer.observe(bar);
    });
  }, []);

  // Form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "d0315504-431b-43b7-af8e-64e99d28378e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult("Error submitting form ❌");
      }
    } catch (err) {
      setResult("Network error ❌");
      console.error(err);
    }
  };

  return (
    <section
      id="drivers"
      className="py-20 md:py-28 scroll-mt-20"
      style={{ background: "var(--brand-navy)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — image + comparison */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.imgur.com/LxQJn0T_d.webp?maxwidth=760&fidelity=grand"
                alt="Rikba driver in Malta"
                className="w-full h-72 md:h-96 object-cover"
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,26,64,0.7) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating comparison card */}
            <div
              className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 rounded-2xl p-5 shadow-xl progress-bars-container"
              style={{
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: "var(--text-secondary)",
                }}
              >
                Platform Fee Comparison (per trip)
              </p>

              <div className="space-y-4">
                {[
                  {
                    name: "Other platforms",
                    pct: 35,
                    label: "They keep ~20%+",
                    bad: true,
                  },
                  {
                    name: "Rikba",
                    pct: 13,
                    label: "We keep far less",
                    bad: false,
                  },
                ].map((row, index) => (
                  <div
                    key={row.name}
                    className={`progress-bars ${
                      index === 1 ? "rikba-fill" : "other-fill"
                    }`}
                    data-width={row.pct}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className="text-xs font-semibold"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          color: "var(--text-primary)",
                        }}
                      >
                        {row.name}
                      </span>

                      <span
                        className="text-xs font-bold"
                        style={{ color: row.bad ? "#ef4444" : "#0066ff" }}
                      >
                        {row.label}
                      </span>
                    </div>

                    <div
                      className="progress-track h-2.5 rounded-full overflow-hidden"
                      style={{ background: "var(--border)" }}
                    >
                      <div className="progress-fill h-full rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="text-xs mt-3 italic"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: "var(--text-secondary)",
                }}
              >
                * Exact rates set at launch. Comparative for illustration only.
              </p>
            </div>
          </div>

          {/* Right — perks */}
          <div className="flex flex-col items-center">
            <div className="text-center mb-8">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                style={{
                  color: "var(--brand)",
                  background: "rgba(0,102,255,0.15)",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                For Drivers
              </span>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Drive in Malta.
                <br />
                <span style={{ color: "var(--brand)" }}>Earn More.</span>
              </h2>
            </div>

            <p
              className="text-base md:text-lg leading-relaxed mb-10 text-center max-w-lg"
              style={{
                fontFamily: "DM Sans, sans-serif",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Rikba was built with Malta's drivers at the table — not as an
              afterthought. Fairer fees, real support, and tools that help you
              earn more on your schedule across the island.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 w-full max-w-2xl">
              {perks.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex gap-3 items-start transition-all duration-200 hover:scale-105"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
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
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Apply Form */}
            <div className="flex flex-col w-full max-w-md">
              <h3
                className="text-2xl font-bold mb-6 text-white text-center"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Apply Now
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name *"
                  required
                  className="w-full p-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className="w-full p-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  className="w-full p-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none"
                />

                <textarea
                  name="message"
                  placeholder="Any additional notes..."
                  rows={3}
                  className="w-full p-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full p-4 rounded-xl bg-var(--brand) text-white font-bold hover:bg-blue-600 transition-colors"
                >
                  Apply to Drive
                </button>

                <span className="text-white mt-2">{result}</span>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .progress-fill {
          width: 100%;
          height: 100%;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 1.5s ease-out;
        }

        .progress-bars.other-fill .progress-fill {
          background: #ef4444;
        }

        .progress-bars.rikba-fill .progress-fill {
          background: #0066ff;
        }

        .progress-bars.animate .progress-fill {
          transform: scaleX(var(--progress));
        }
      `}</style>
    </section>
  );
}
