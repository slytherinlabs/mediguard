import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen flex flex-col pt-24 pb-20">
      {/* Header */}
      <section className="relative border-b border-zinc-900 px-4 py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05)_0%,transparent_65%)]" />
        <div className="relative mx-auto max-w-xl flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Get in touch
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
            Contact <span className="text-emerald-400">Us</span>
          </h1>
          <p className="text-sm text-zinc-400 max-w-sm">
            Have a question or partnership inquiry? Drop us a message and we'll
            get back to you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 px-4 py-14">
        <div className="mx-auto max-w-4xl grid gap-12 md:grid-cols-[1fr_1.6fr]">
          {/* ── Left: contact info ── */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-lg font-bold text-zinc-100 mb-4">Reach us</h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: "✉️",
                    label: "Email us",
                    value: "slytherin.labs@gmail.com",
                    href: "mailto:slytherin.labs@gmail.com",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 93418 51619",
                    href: "tel:+919341851619",
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    value: "Delhi, India",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-base">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-zinc-300 hover:text-emerald-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xs text-zinc-300">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-800" />

            <p className="text-xs text-zinc-500 leading-relaxed">
              MediGuard is an open-source anti-counterfeit medicine platform. We
              welcome integration inquiries, security disclosures, and research
              partnerships.
            </p>
          </div>

          {/* ── Right: form ── */}
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 py-16 text-center">
              <span className="text-5xl">✅</span>
              <h3 className="text-base font-semibold text-zinc-100">
                Message sent!
              </h3>
              <p className="text-sm text-zinc-400">
                We'll get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              id="contact-form"
              className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="contact-submit-btn"
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-2.5 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500/20 hover:border-emerald-500/60 active:scale-[0.98]"
              >
                Send message
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
