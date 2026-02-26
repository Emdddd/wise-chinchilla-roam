import { KleapForm } from "@/components/kleap-form";

export function RikbaFinalCta() {
  return (
    <section
      id="apply-driver"
      className="py-20 md:py-28 scroll-mt-20"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA banner */}
        <div
          className="rounded-3xl p-8 md:p-14 text-center mb-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--brand-navy) 0%, #0040AA 100%)",
          }}
        >
          {/* Decorative orb */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "var(--brand)" }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ background: "var(--accent)" }}
          />

          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: "var(--brand)", background: "rgba(0,102,255,0.2)", fontFamily: "DM Sans, sans-serif" }}
          >
            Launching in Malta
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5 relative z-10"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Malta deserves better rides.
            <br />
            <span style={{ color: "var(--brand)" }}>Don't miss your spot.</span>
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto mb-8 relative z-10"
            style={{ fontFamily: "DM Sans, sans-serif", color: "rgba(255,255,255,0.75)" }}
          >
            Join Malta's earliest riders and drivers shaping what Rikba becomes.
            Your feedback directly influences the app you'll use every day on the island.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="#waitlist-bottom"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                fontFamily: "DM Sans, sans-serif",
                background: "var(--brand)",
                color: "white",
                boxShadow: "0 8px 32px rgba(0,102,255,0.45)",
              }}
            >
              Join the Rider Waitlist
            </a>
            <a
              href="#driver-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base border-2 border-white text-white transition-all duration-300 hover:bg-white hover:text-blue-700"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Apply as a Driver
            </a>
          </div>
        </div>

        {/* Two-column forms */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Rider Waitlist */}
          <div
            id="waitlist-bottom"
            className="scroll-mt-24 rounded-2xl p-7 md:p-9 shadow-lg"
            style={{ background: "white", boxShadow: "0 4px 30px rgba(0,26,64,0.08)" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--brand-light)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="var(--brand)"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}
              >
                Rider Waitlist
              </h3>
            </div>
            <p
              className="text-sm mb-6"
              style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
            >
              Be the first to ride when we launch in your city.
            </p>
            <KleapForm
              formId="rider-waitlist"
              title="Rider Waitlist"
              description=""
              fields={[
                { name: "name", label: "Full Name", type: "text", required: true },
                { name: "email", label: "Email Address", type: "email", required: true },
                { name: "phone", label: "Phone (optional)", type: "tel", required: false },
              ]}
              submitText="Join the Waitlist →"
              successMessage="You're on the list! We'll notify you when Rikba launches in your city."
            />
          </div>

          {/* Driver Application */}
          <div
            id="driver-form"
            className="scroll-mt-24 rounded-2xl p-7 md:p-9 shadow-lg"
            style={{ background: "white", boxShadow: "0 4px 30px rgba(0,26,64,0.08)" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--brand-light)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="11" width="20" height="8" rx="2" fill="var(--brand)"/>
                  <path d="M5 11V8a7 7 0 0 1 14 0v3" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="8" cy="17" r="2" fill="white"/>
                  <circle cx="16" cy="17" r="2" fill="white"/>
                </svg>
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "Syne, sans-serif", color: "var(--brand-navy)" }}
              >
                Drive with Rikba
              </h3>
            </div>
            <p
              className="text-sm mb-6"
              style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }}
            >
              Apply now and start earning more on your terms.
            </p>
            <KleapForm
              formId="driver-application"
              title="Driver Application"
              description=""
              fields={[
                { name: "name", label: "Full Name", type: "text", required: true },
                { name: "email", label: "Email Address", type: "email", required: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true },
                {
                  name: "vehicle_type",
                  label: "Vehicle Type",
                  type: "select",
                  required: true,
                  options: ["Petrol", "Hybrid", "Electric", "Van"],
                },
              ]}
              submitText="Apply to Drive →"
              successMessage="Application received! We'll review your details and be in touch before we launch in your area."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
