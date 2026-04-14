import { useState } from "react";
import { Link } from "react-router-dom";
import {
	CONTACT_CHANNELS,
	RESPONSE_TIERS,
	ROLES,
	TOPICS,
	inputClass,
	selectClass,
} from "../content/contact";

export default function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		role: ROLES[0],
		topic: TOPICS[0],
		message: "",
	});
	const [sent, setSent] = useState(false);

	function handleChange(e) {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		setSent(true);
	}

	return (
		<main className="min-h-screen flex flex-col pt-24 pb-12 font-dm-sans sm:pb-14">
			{/* ── HERO ─────────────────────────────────────────────── */}
			<section className="relative overflow-hidden border-b border-zinc-900 px-4 py-16 text-center sm:px-5 sm:py-20">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.035]"
					style={{
						backgroundImage:
							"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
						backgroundSize: "56px 56px",
					}}
				/>
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

				<div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 sm:gap-5">
					<span className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-widest text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
						<span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
						Get in touch
					</span>

					<h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
						Let's talk about your
						<br />
						<span className="italic font-light text-zinc-500">
							medicine trust workflow.
						</span>
					</h1>

					<p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
						Whether you need help with onboarding, verification setup, or
						production deployment — our team responds within 24 hours.
					</p>
				</div>
			</section>

			{/* ── DIRECT CONTACT OPTIONS ───────────────────────────── */}
			<section className="border-b border-zinc-900 px-4 py-8 sm:px-5 sm:py-10">
				<div className="mx-auto grid max-w-5xl gap-3 sm:gap-4 md:grid-cols-3">
					{CONTACT_CHANNELS.map((item) => (
						<div
							key={item.label}
							className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/60"
						>
							<div className="flex items-center gap-3 mb-3">
								<span className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900 text-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
									{item.icon}
								</span>
								<p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
									{item.label}
								</p>
							</div>
							{item.href ? (
								<a
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="block break-all font-geist-mono text-sm text-zinc-200 transition hover:text-zinc-100"
								>
									{item.value}
								</a>
							) : (
								<p className="break-all font-geist-mono text-sm text-zinc-200">
									{item.value}
								</p>
							)}
							<p className="mt-2 text-xs text-zinc-500">{item.note}</p>
						</div>
					))}
				</div>
			</section>

			{/* ── BOOK A DEMO ──────────────────────────────────────── */}
			<section className="border-b border-zinc-900 px-4 py-10 sm:px-5 sm:py-12">
				<div className="mx-auto max-w-5xl">
					<div className="relative overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-6 sm:p-8">
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
						<div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
							<div className="max-w-lg">
								<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
									See it in action
								</span>
								<h2 className="mt-2 font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
									Book a live demo
									<br />
									<span className="italic font-light text-zinc-500">
										tailored to your supply chain.
									</span>
								</h2>
								<p className="mt-3 text-sm leading-relaxed text-zinc-400">
									Walk through the full platform with our team — from batch
									registration and custody tracking to verification verdicts and
									anomaly detection. We'll customize the demo to your specific
									role and workflow needs.
								</p>
							</div>

							<div className="flex flex-col items-start gap-3 lg:items-end lg:shrink-0">
								<Link
									to="#contact-form"
									onClick={() => {
										setForm((prev) => ({ ...prev, topic: "Book a demo" }));
										document
											.getElementById("contact-form")
											?.scrollIntoView({ behavior: "smooth" });
									}}
									className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-white hover:shadow-md"
								>
									Schedule demo →
								</Link>
								<p className="text-[11px] text-zinc-500">
									30 min · No commitment · Customized walkthrough
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── CONTACT FORM + SIDEBAR ────────────────────────────── */}
			<section className="flex-1 border-b border-zinc-900 px-4 py-12 sm:px-5 sm:py-14">
				<div className="mx-auto grid max-w-5xl gap-6 lg:items-start">
					{/* Form */}
					{sent ? (
						<div className="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-8 sm:p-10">
							<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 text-xl text-zinc-200">
								✓
							</span>
							<h2 className="mt-5 font-display text-3xl font-semibold text-zinc-100">
								Request received.
							</h2>
							<p className="mt-2 text-sm leading-relaxed text-zinc-400">
								Thanks for sharing details. We will review your workflow scope
								and reply with next steps within 24 hours.
							</p>
							<div className="mt-6 flex flex-col gap-3 sm:flex-row">
								<button
									onClick={() => {
										setSent(false);
										setForm({
											name: "",
											email: "",
											phone: "",
											company: "",
											role: ROLES[0],
											topic: TOPICS[0],
											message: "",
										});
									}}
									className="inline-flex w-full items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-100 sm:w-auto"
								>
									Submit another request
								</button>
								<Link
									to="/about"
									className="inline-flex w-full items-center justify-center rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-200 sm:w-auto"
								>
									View platform overview
								</Link>
							</div>
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							id="contact-form"
							className="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-6 sm:p-8"
						>
							<div className="mb-6">
								<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
									Contact form
								</span>
								<h2 className="mt-2 font-display text-2xl font-semibold leading-snug text-zinc-100">
									Share your scope,
									<br />
									<span className="italic font-light text-zinc-500">
										we'll map the right rollout path.
									</span>
								</h2>
							</div>

							<div className="flex flex-col gap-4">
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="flex flex-col gap-2">
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
											className={inputClass}
										/>
									</div>
									<div className="flex flex-col gap-2">
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
											className={inputClass}
										/>
									</div>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<div className="flex flex-col gap-2">
										<label
											htmlFor="contact-phone"
											className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
										>
											Phone{" "}
											<span className="text-zinc-600 normal-case tracking-normal font-normal">
												(optional)
											</span>
										</label>
										<input
											id="contact-phone"
											name="phone"
											type="tel"
											value={form.phone}
											onChange={handleChange}
											placeholder="+91 00000 00000"
											className={inputClass}
										/>
									</div>
									<div className="flex flex-col gap-2">
										<label
											htmlFor="contact-company"
											className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
										>
											Company
										</label>
										<input
											id="contact-company"
											name="company"
											type="text"
											value={form.company}
											onChange={handleChange}
											placeholder="Organization name"
											className={inputClass}
										/>
									</div>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<div className="flex flex-col gap-2">
										<label
											htmlFor="contact-role"
											className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
										>
											Your role
										</label>
										<select
											id="contact-role"
											name="role"
											value={form.role}
											onChange={handleChange}
											className={selectClass}
										>
											{ROLES.map((role) => (
												<option key={role} value={role}>
													{role}
												</option>
											))}
										</select>
									</div>
									<div className="flex flex-col gap-2">
										<label
											htmlFor="contact-topic"
											className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
										>
											Topic
										</label>
										<select
											id="contact-topic"
											name="topic"
											value={form.topic}
											onChange={handleChange}
											className={selectClass}
										>
											{TOPICS.map((topic) => (
												<option key={topic} value={topic}>
													{topic}
												</option>
											))}
										</select>
									</div>
								</div>

								<div className="flex flex-col gap-2">
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
										placeholder="Share your current setup, which feature you want first, and your timeline."
										className={`${inputClass} resize-none`}
									/>
								</div>

								<button
									type="submit"
									id="contact-submit-btn"
									className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-50 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-white hover:shadow-md active:scale-[0.98]"
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
							</div>
						</form>
					)}

					{/* Sidebar */}
					<div className="flex flex-col gap-5">
						{/* Response expectations */}
						<div className="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-6 sm:p-7">
							<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
								Response expectations
							</span>
							<h3 className="mt-2 font-display text-xl font-semibold leading-snug text-zinc-100">
								How fast we respond,
								<br />
								<span className="italic font-light text-zinc-500">
									based on your needs.
								</span>
							</h3>

							<div className="mt-5 space-y-3">
								{RESPONSE_TIERS.map((item) => (
									<div
										key={item.tier}
										className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
									>
										<div className="flex items-center justify-between gap-2 mb-1">
											<div className="flex items-center gap-2">
												<span
													className={`h-1.5 w-1.5 rounded-full ${item.dotColor}`}
												/>
												<p className={`text-sm font-semibold ${item.color}`}>
													{item.tier}
												</p>
											</div>
											<span className="shrink-0 rounded-md border border-zinc-700/80 bg-zinc-800/60 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
												{item.sla}
											</span>
										</div>
										<p className="ml-3.5 text-xs text-zinc-500">
											{item.detail}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── BOTTOM CTA — professional SaaS style ─────────────── */}
			<section className="px-4 py-16 sm:px-5 sm:py-20">
				<div className="mx-auto max-w-5xl">
					<div className="relative overflow-hidden rounded-3xl border border-zinc-700/60 bg-zinc-900/50 px-6 py-12 text-center sm:px-10 sm:py-16">
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
						<div className="relative flex flex-col items-center gap-5">
							<span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
								Next step
							</span>
							<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
								Already have an account?
								<br />
								<span className="italic font-light text-zinc-400">
									Jump straight into your dashboard.
								</span>
							</h2>
							<p className="max-w-sm text-sm text-zinc-400">
								Access your inventory, verify shipments, and review anomaly
								alerts — your full operational workspace is one click away.
							</p>
							<div className="flex flex-col gap-3 sm:flex-row">
								<Link
									to="/login"
									className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-50 px-7 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-white hover:shadow-md sm:w-auto"
								>
									Sign in to dashboard →
								</Link>
								<Link
									to="/"
									className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100 sm:w-auto"
								>
									Explore product
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
