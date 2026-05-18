"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormValues = {
  name: string;
  phone: string;
  service: string;
};

type FormErrors = {
  name?: string;
  phone?: string;
  service?: string;
  submit?: string;
};

const INITIAL_VALUES: FormValues = {
  name: "",
  phone: "",
  service: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const validate = (current: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!current.name.trim()) {
      nextErrors.name = "Full name is required.";
    }
    if (!current.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(current.phone.trim())) {
      nextErrors.phone = "Enter a valid 10-digit mobile number.";
    }
    if (!current.service.trim()) {
      nextErrors.service = "Please select a service.";
    }
    return nextErrors;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev: FormValues) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(values);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        setErrors({ submit: data.message ?? "Something went wrong." });
        return;
      }

      setSuccess(true);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to send request.";
      setErrors({ submit: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-20 md:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Request a Callback
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/75">
            Fill in your details and our team will reach out within 2 hours.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            {success ? (
              <div className="rounded-lg border border-white/10 bg-black/50 p-6 text-base font-semibold">
                ✓ Request received! We&apos;ll call you within 2 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-sm font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-md border border-white/20 bg-black/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-accent"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-accent">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={values.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-md border border-white/20 bg-black/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-accent"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-xs text-accent">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-semibold">
                    Service Selection
                  </label>
                  <select
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-md border border-white/20 bg-black/60 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-accent"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Local House Shifting">
                      Local House Shifting
                    </option>
                    <option value="Corporate Office Relocation">
                      Corporate Office Relocation
                    </option>
                    <option value="Secure Vehicle Transport">
                      Secure Vehicle Transport
                    </option>
                  </select>
                  {errors.service && (
                    <p className="mt-2 text-xs text-accent">{errors.service}</p>
                  )}
                </div>
                {errors.submit && (
                  <p className="text-xs text-accent">{errors.submit}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Get Free Quote"}
                </button>
              </form>
            )}
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Phone
                </p>
                <p className="text-base font-semibold text-white">
                  +91 99999 99999
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Email
                </p>
                <p className="text-base font-semibold text-white">
                  hello@swiftmove.in
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Hours
                </p>
                <p className="text-base font-semibold text-white">
                  Mon–Sat, 8am–8pm
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/60">
              ✓ Insured &nbsp; ✓ GPS Tracked &nbsp; ✓ On-Time Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
