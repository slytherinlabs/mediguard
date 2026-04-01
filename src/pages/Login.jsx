import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-16">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06)_0%,transparent_65%)]" />

      <div className="relative w-full max-w-md">
        {/* Glass card */}
        <div
          className="
            rounded-2xl border border-white/10
            bg-zinc-950/60 backdrop-blur-2xl
            p-8 shadow-[0_8px_40px_rgba(0,0,0,0.5)]
          "
        >
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center gap-3">
            <div
              className="
                flex h-12 w-12 items-center justify-center
                rounded-2xl bg-emerald-500/15 border border-emerald-500/30
                text-2xl
              "
            >
              ⛨
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-zinc-50">
                Medi<span className="text-emerald-400">Guard</span>
              </h1>
              <p className="mt-1 text-xs text-zinc-500">
                Sign in to your account
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="login-form">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="login-email"
                className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500"
              >
                Email
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="
                  rounded-xl border border-zinc-700 bg-zinc-900/80
                  px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600
                  focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30
                  transition
                "
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="login-password"
                  className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-[11px] text-emerald-500 hover:text-emerald-400 transition"
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="login-password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="
                  rounded-xl border border-zinc-700 bg-zinc-900/80
                  px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600
                  focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30
                  transition
                "
              />
            </div>

            {/* Submit */}
            <button
              id="login-submit-btn"
              type="submit"
              disabled={loading}
              className="
                mt-1 flex items-center justify-center gap-2
                rounded-xl border border-emerald-500/40
                bg-emerald-500/15 px-5 py-2.5
                text-sm font-semibold text-emerald-300
                transition-all hover:bg-emerald-500/25 hover:border-emerald-500/60
                active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-500/40 border-t-emerald-400" />
                  Signing in…
                </>
              ) : (
                "Sign in →"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-[11px] text-zinc-600">or</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          {/* MetaMask */}
          <button
            id="login-metamask-btn"
            type="button"
            className="
              w-full flex items-center justify-center gap-2.5
              rounded-xl border border-zinc-700 bg-zinc-900
              px-5 py-2.5 text-sm font-medium text-zinc-300
              transition hover:bg-zinc-800 hover:border-zinc-600
              active:scale-95
            "
          >
            <span className="text-base">🦊</span>
            Connect with MetaMask
          </button>

          <p className="mt-6 text-center text-[12px] text-zinc-600">
            Don't have an account?{" "}
            <Link
              to="/contact"
              className="text-emerald-500 hover:text-emerald-400 transition"
            >
              Request access
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
