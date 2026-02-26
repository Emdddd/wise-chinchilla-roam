import { useState, useEffect } from "react";

function MockKleapForm({ title, fields, submitText, formspreeId }) {
  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // منع أي redirect
    setSubmitting(true);

    if (formspreeId) {
      // Formspree submission بدون page reload
      const formData = new FormData(e.target);
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          setShowToast(true);
          e.target.reset(); // Reset form
          setTimeout(() => setShowToast(false), 2000); // Toast لـ 2 ثانية
        }
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setSubmitting(false);
      }
    } else {
      // Mock submission
      setTimeout(() => {
        setSubmitting(false);
        setShowToast(true);
        e.target.reset();
        setTimeout(() => setShowToast(false), 2000);
      }, 1000);
    }
  };

  return (
    <>
      {/* Toast Notification - في نفس الصفحة */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 p-4 bg-blue-600 text-white rounded-xl shadow-2xl border-2 border-blue-400 animate-in slide-in-from-top-2 fade-in duration-300 max-w-sm">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h4 className="font-bold">{title} Submitted Successfully!</h4>
              <p className="text-sm opacity-90">You're on the waitlist. We'll notify you soon.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">{field.label}</label>
            {field.type === "select" ? (
              <select
                name={field.name}
                required={field.required}
                disabled={submitting}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
              >
                <option value="">{`Select ${field.label}`}</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                disabled={submitting}
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                placeholder={field.label}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : submitText}
        </button>
      </form>
    </>
  );
}

export function RikbaFinalCta() {
  return (
    <section
      id="waitlist-bottom"
      className="py-20 md:py-28 scroll-mt-20"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="rounded-2xl p-7 md:p-9 shadow-lg" style={{ background: "white" }}>
            <h3 className="text-xl font-bold mb-6 text-center" style={{ color: "var(--brand-navy)" }}>
              Rider Waitlist
            </h3>
            <MockKleapForm
              title="Rider Waitlist"
              formspreeId="xwvnyjbr"
              fields={[
                { name: "name", label: "Full Name *", type: "text", required: true },
                { name: "email", label: "Email Address *", type: "email", required: true },
                { name: "phone", label: "Phone (optional)", type: "tel", required: false },
              ]}
              submitText="Join the Waitlist →"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
