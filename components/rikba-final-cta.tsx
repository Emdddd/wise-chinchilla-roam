import { useState } from "react";

function MockKleapForm({ title, fields, submitText, onSuccess }) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate backend call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      if (onSuccess) onSuccess();
    }, 1000); // 1 second delay to simulate network
  };

  if (success) {
    return (
      <div className="p-6 bg-green-50 rounded-lg text-center text-green-800">
        <h4 className="font-bold mb-2">{title} Submitted Successfully!</h4>
        <p>You are now on the waitlist. We'll notify you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="text-sm font-medium">{field.label}</label>
          {field.type === "select" ? (
            <select
              name={field.name}
              required={field.required}
              className="border p-2 rounded"
            >
              <option value="">Select {field.label}</option>
              {field.options.map((opt) => (
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
              className="border p-2 rounded"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {submitting ? "Submitting..." : submitText}
      </button>
    </form>
  );
}

export function RikbaFinalCta() {
  return (
    <section
      id="apply-driver"
      className="py-20 md:py-28 scroll-mt-20"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ...top CTA omitted for brevity... */}

        {/* Two-column forms */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Rider Waitlist */}
          <div
            id="waitlist-bottom"
            className="scroll-mt-24 rounded-2xl p-7 md:p-9 shadow-lg"
            style={{ background: "white" }}
          >
            <h3 className="text-xl font-bold mb-4">Rider Waitlist</h3>
            <MockKleapForm
              title="Rider Waitlist"
              fields={[
                { name: "name", label: "Full Name", type: "text", required: true },
                { name: "email", label: "Email Address", type: "email", required: true },
                { name: "phone", label: "Phone (optional)", type: "tel", required: false },
              ]}
              submitText="Join the Waitlist →"
            />
          </div>

          {/* Driver Application */}
          <div
            id="driver-form"
            className="scroll-mt-24 rounded-2xl p-7 md:p-9 shadow-lg"
            style={{ background: "white" }}
          >
            <h3 className="text-xl font-bold mb-4">Drive with Rikba</h3>
            <MockKleapForm
              title="Driver Application"
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}
