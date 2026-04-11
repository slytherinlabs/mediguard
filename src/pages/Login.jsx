import { useState } from "react";
import { Link } from "react-router-dom";
import { TRUST_POINTS } from "../content/login";

export default function Login() {
	const [form, setForm] = useState({ email: "", password: "" });
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	function handleChange(e) {
		setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => setLoading(false), 1500);
	}

	return (
		<main className="relative min-h-screen overflow-hidden px-4 pt-24 pb-14 font-dm-sans sm:px-5 sm:pt-28 sm:pb-20">
			{/* background textures */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
					backgroundSize: "56px 56px",
				}}
			/>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

			<section className="relative mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/80 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr]">
				{/* ── Left panel ── */}
				<div className="hidden border-r border-zinc-800/80 bg-zinc-900/30 px-10 py-12 lg:flex xl:px-12 xl:py-14">
					<div className="flex h-full w-full flex-col justify-between gap-10">
						<div>
							{/* Brand */}
							<div className="flex items-center gap-2.5 mb-8">
								<span className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-200 text-lg font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
									⛨
								</span>
								<span className="font-display text-xl font-semibold text-zinc-100">
									Medi<span className="text-zinc-400">Guard</span>
								</span>
							</div>

							<span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
								Platform access
							</span>

							<h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-100 xl:text-[2.5rem]">
								Secure sign-in
								<br />
								<span className="italic font-light text-zinc-500">
									for operational teams.
								</span>
							</h1>

							<p className="mt-4 text-sm leading-relaxed text-zinc-400">
								Access dashboards for custody events, cold-chain status, and
								anomaly intelligence — all within one trust-first platform
								designed for pharmaceutical supply chains.
							</p>
						</div>

						{/* Trust points */}
						<div className="space-y-3">
							{TRUST_POINTS.map((point) => (
								<div
									key={point.title}
									className="flex items-start gap-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4"
								>
									<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-900 text-base shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
										{point.icon}
									</span>
									<div>
										<p className="text-sm font-semibold text-zinc-200">
											{point.title}
										</p>
										<p className="mt-1 text-xs leading-relaxed text-zinc-500">
											{point.desc}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* ── Right panel: Form ── */}
				<div className="flex flex-col justify-center p-6 sm:p-10">
					{/* Mobile brand */}
					<div className="mb-8 flex items-center justify-between lg:hidden">
						<div className="flex items-center gap-2.5">
							<span className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-200 text-base font-bold">
								⛨
							</span>
							<span className="font-display text-lg font-semibold text-zinc-100">
								Medi<span className="text-zinc-400">Guard</span>
							</span>
						</div>
						<span className="rounded-full border border-zinc-700/80 bg-zinc-900/70 px-3 py-1 text-[10px] uppercase tracking-widest text-zinc-500">
							Secure
						</span>
					</div>

					{/* Desktop header badge */}
					<div className="hidden lg:flex lg:items-center lg:justify-between lg:mb-8">
						<div>
							<p className="text-xs text-zinc-500">Welcome back</p>
							<p className="mt-0.5 font-display text-2xl font-semibold text-zinc-100">
								Sign in to continue
							</p>
						</div>
						<span className="rounded-full border border-zinc-700/80 bg-zinc-900/70 px-3 py-1 text-[10px] uppercase tracking-widest text-zinc-500">
							Secure
						</span>
					</div>

					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-5"
						id="login-form"
					>
						{/* Email */}
						<div className="flex flex-col gap-2">
							<label
								htmlFor="login-email"
								className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
							>
								Email address
							</label>
							<div className="relative">
								<span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-zinc-600 text-sm">
									✉
								</span>
								<input
									id="login-email"
									name="email"
									type="email"
									required
									autoComplete="email"
									value={form.email}
									onChange={handleChange}
									placeholder="you@example.com"
									className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/70 pl-9 pr-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600 focus:bg-zinc-900"
								/>
							</div>
						</div>

						{/* Password */}
						<div className="flex flex-col gap-2">
							<div className="flex items-center justify-between">
								<label
									htmlFor="login-password"
									className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
								>
									Password
								</label>
								<a
									href="#"
									className="text-[11px] text-zinc-400 transition hover:text-zinc-200"
								>
									Forgot password?
								</a>
							</div>
							<div className="relative">
								<span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-zinc-600 text-sm">
									🔑
								</span>
								<input
									id="login-password"
									name="password"
									type={showPassword ? "text" : "password"}
									required
									autoComplete="current-password"
									value={form.password}
									onChange={handleChange}
									placeholder="••••••••"
									className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/70 pl-9 pr-10 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600 focus:bg-zinc-900"
								/>
								<button
									type="button"
									onClick={() => setShowPassword((v) => !v)}
									className="absolute inset-y-0 right-3 flex items-center text-zinc-600 hover:text-zinc-400 transition"
									tabIndex={-1}
								>
									<span className="text-xs">{showPassword ? "👁" : "🙈"}</span>
								</button>
							</div>
						</div>

						{/* Remember me */}
						<label className="inline-flex items-center gap-2.5 text-[12px] text-zinc-500 cursor-pointer">
							<input
								type="checkbox"
								className="h-3.5 w-3.5 rounded border-zinc-700 bg-zinc-900 accent-zinc-400"
							/>
							Keep me signed in on this device
						</label>

						{/* Submit */}
						<button
							id="login-submit-btn"
							type="submit"
							disabled={loading}
							className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-50 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-white hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
						>
							{loading ? (
								<>
									<span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-700" />
									Signing in...
								</>
							) : (
								<>
									Sign in to dashboard
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
								</>
							)}
						</button>
					</form>

					{/* Info note */}
					<div className="mt-5 rounded-xl border border-zinc-800/60 bg-zinc-900/40 px-4 py-3">
						<p className="text-[11px] leading-relaxed text-zinc-500">
							🔒 Access is managed by invitation for verified supply-chain
							partners. Contact us to request credentials.
						</p>
					</div>

					<p className="mt-5 text-center text-[12px] text-zinc-600">
						Don&apos;t have an account?{" "}
						<Link
							to="/contact"
							className="text-zinc-300 transition hover:text-zinc-100 underline underline-offset-2"
						>
							Request access
						</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
