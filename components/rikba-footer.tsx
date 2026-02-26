export function RikbaFooter() {
  return (
    <footer style={{ background: "var(--brand-navy)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--brand)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 7v5c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V7L12 2Z" fill="white" opacity="0.3"/>
                  <circle cx="12" cy="12" r="4" fill="white"/>
                </svg>
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Rikba
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.55)" }}
            >
              Malta's ride-hailing platform built on fairness — transparent pricing for riders, better pay for drivers, and a safer experience for everyone on the island.
            </p>
            <div className="flex gap-3 mt-5">
              {["twitter", "instagram", "linkedin"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:opacity-80"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  aria-label={platform}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    {platform === "twitter" && (
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                    {platform === "instagram" && (
                      <><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></>
                    )}
                    {platform === "linkedin" && (
                      <><rect x="2" y="2" width="20" height="20" rx="3" stroke="white" strokeWidth="1.5"/><path d="M7 10v7M7 7v.5M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>Riders</p>
            <ul className="space-y-2.5">
              {["Join Waitlist", "How It Works", "Safety", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.55)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Sans, sans-serif" }}>Drivers</p>
            <ul className="space-y-2.5">
              {["Apply to Drive", "Earnings", "Driver Support", "Requirements"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.55)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.35)" }}
          >
            © {new Date().getFullYear()} Rikba Malta. All rights reserved. Proudly built for the island.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.35)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
