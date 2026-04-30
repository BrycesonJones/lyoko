"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const SERVICES = [
  "Procure Digital Finance assets",
  "Educating your team on AI",
  "Developing custom AI solutions",
] as const;

const COMPANY_SIZES = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "501–1,000",
  "1,000+",
];

const REVENUE_RANGES = [
  "Less than $100K",
  "$100K–$500K",
  "$500K–$1M",
  "$1M–$2M",
  "More than $2M",
];

type Status = "idle" | "submitting" | "success" | "error";

const InquiryDrawer = () => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("openInquiryDrawer", handleOpen);
    return () => window.removeEventListener("openInquiryDrawer", handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      role: String(data.get("role") ?? ""),
      companyName: String(data.get("companyName") ?? ""),
      companyWebsite: String(data.get("companyWebsite") ?? ""),
      companySize: String(data.get("companySize") ?? ""),
      annualRevenue: String(data.get("annualRevenue") ?? ""),
      services,
      message: String(data.get("message") ?? ""),
    };

    if (services.length === 0) {
      setStatus("error");
      setErrorMessage("Please select at least one service.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? `Request failed (${res.status}).`);
      }
      setStatus("success");
      form.reset();
      setServices([]);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="How can we help?"
        className={`fixed top-0 right-0 h-full w-full sm:w-[520px] bg-black border-l border-gray-800 z-[70] transform transition-transform duration-300 ease-out overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-6 sm:px-8">
          <div className="flex items-start justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">How can we help?</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="What is your name?" required>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className={inputClass}
                />
              </Field>
              <Field label="What is your email?" required>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="What is your role in the company?">
              <input
                type="text"
                name="role"
                placeholder="Enter role"
                className={inputClass}
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Company Name" required>
                <input
                  type="text"
                  name="companyName"
                  required
                  placeholder="Enter company name"
                  className={inputClass}
                />
              </Field>
              <Field label="Company Website">
                <input
                  type="url"
                  name="companyWebsite"
                  placeholder="Enter company website"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Company Size">
                <select name="companySize" defaultValue="" className={selectClass}>
                  <option value="" disabled>Select company size</option>
                  {COMPANY_SIZES.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </Field>
              <Field label="Company's Annual Revenue">
                <select name="annualRevenue" defaultValue="" className={selectClass}>
                  <option value="" disabled>Select revenue range</option>
                  {REVENUE_RANGES.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </Field>
            </div>

            <fieldset className="pt-2">
              <legend className="block text-sm font-medium text-white mb-3">
                What services are you interested in? <span className="text-[#00FF00]">*</span>
              </legend>
              <div className="space-y-3">
                {SERVICES.map((service) => (
                  <label key={service} className="flex items-center gap-3 cursor-pointer text-gray-200 hover:text-white">
                    <input
                      type="checkbox"
                      checked={services.includes(service)}
                      onChange={() => toggleService(service)}
                      className="w-4 h-4 rounded border-gray-600 bg-black text-[#00FF00] focus:ring-[#00FF00] focus:ring-offset-0 accent-[#00FF00]"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <Field label="Message">
              <textarea
                name="message"
                rows={4}
                placeholder="Enter message"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF00] transition resize-none"
              />
            </Field>

            {status === "success" && (
              <p className="text-sm text-[#00FF00]">
                Thanks — your inquiry was sent. We'll be in touch.
              </p>
            )}
            {status === "error" && errorMessage && (
              <p className="text-sm text-red-400">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full mt-2 py-3 bg-[#00FF00] text-black font-bold rounded-full hover:bg-[#00DD00] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending…" : "Send inquiry"}
            </button>
          </form>
        </div>
      </aside>
    </>
  );
};

const inputClass =
  "w-full px-4 py-3 bg-black border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF00] transition";

const selectClass =
  "w-full px-4 py-3 bg-black border border-gray-700 rounded-full text-white focus:outline-none focus:border-[#00FF00] transition appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1rem] [background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>\")] pr-10";

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="block text-sm font-medium text-white mb-2">
      {label}
      {required && <span className="text-[#00FF00]"> *</span>}
    </span>
    {children}
  </label>
);

export default InquiryDrawer;
