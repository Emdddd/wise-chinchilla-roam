import { useState } from "react";

function MockKleapForm({ title, fields, submitText, formspreeId, onSuccess }) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    if (formspreeId) {
      e.target.submit();
      return;
    }

    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  if (success) {
    return (
      <div className="p-6 bg-blue-50 rounded-xl text-center border-2 border-blue-100">
        <h4 className="font-bold mb-2 text-blue-800">{title} Submitted Successfully!</h4>
        <p className="text-blue-700">You're on the list! We'll notify you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" action={formspreeId ? `https://formspree.io/f/${formspreeId}` : undefined} method={formspreeId ? "POST" : undefined}>
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">{field.label}</label>
          {field.type === "select" ? (
            <select
              name={field.name}
              required={field.required}
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200"
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
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-200"
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
          {/* Rider Waitlist Only */}
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
