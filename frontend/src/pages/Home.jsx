import { Link } from "react-router-dom";
import FaqAccordion from "../components/FaqAccordian";
import {
	ACTOR_COLOR,
	BENEFITS,
	FAQS,
	FEATURES,
	FLOW,
	INTEGRATIONS,
	OPERATOR_SUITE,
	PROBLEMS,
	SECURITY_FEATURES,
	SOLUTION_POINTS,
	STATS,
	USE_CASES,
	VERDICTS,
} from "../content/home";

export default function Home() {
	return (
		<div className="flex flex-1 flex-col">
			{/* ── HERO ─────────────────────────────────────────────── */}
			<section className="relative flex flex-col items-center justify-center overflow-hidden border-b border-zinc-900 px-5 py-24 text-center md:py-36">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.035]"
					style={{
						backgroundImage:
							"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
						backgroundSize: "60px 60px",
					}}
				/>
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

				<div className="relative flex flex-col items-center gap-5 max-w-3xl mx-auto">
					<span className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/70 px-3.5 py-1.5 text-[11px] font-medium tracking-widest uppercase text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
						<span className="h-1.5 w-1.5 rounded-full bg-zinc-300 animate-pulse" />
						Anti-counterfeit medicine platform
					</span>

					<h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl">
						Know your medicine
						<br />
						<span className="italic font-light text-zinc-500">
							is the real thing.
						</span>
					</h1>

					<p className="max-w-lg text-base leading-relaxed text-zinc-400">
						MediProof uses blockchain, unit-level QR codes, and strip-level
						verification codes so anyone — patient, pharmacist, or regulator —
						can instantly verify any medicine, whole pack or loose strip.
					</p>

					<div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
						<Link
							to="/contact"
							id="hero-verify-cta"
							className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-white hover:shadow-md sm:w-auto"
						>
							Start verification flow
							<span className="transition-transform group-hover:translate-x-0.5">
								→
							</span>
						</Link>
						<Link
							to="/login"
							id="hero-dashboard-cta"
							className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-900 hover:text-zinc-50 sm:w-auto"
						>
							Go to dashboard
						</Link>
					</div>

					<p className="text-[11px] text-zinc-600">
						Free · No account required · Works on any smartphone
					</p>
				</div>
			</section>

			{/* ── PROBLEM ──────────────────────────────────────────── */}
			<section className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-2xl">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							The problem
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Counterfeit medicines are
							<br />
							<span className="italic font-light text-zinc-400">
								a global health crisis.
							</span>
						</h2>
						<p className="mt-3 text-sm text-zinc-400">
							Existing supply chains rely on paper trails, batch-level tracking,
							and blind trust. That's not enough when lives are at stake.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{PROBLEMS.map((p) => (
							<div
								key={p.stat}
								className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-700 transition-colors"
							>
								<p className="font-display text-2xl font-semibold sm:text-3xl text-zinc-100">
									{p.stat}
								</p>
								<p className="mt-3 text-[13px] leading-relaxed text-zinc-400">
									{p.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── SOLUTION ─────────────────────────────────────────── */}
			<section className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-2xl">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Our approach
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							MediProof closes every gap
							<br />
							<span className="italic font-light text-zinc-400">
								in the trust chain.
							</span>
						</h2>
						<p className="mt-3 text-sm text-zinc-400">
							Instead of patching one part, we built an end-to-end system that
							covers every actor from manufacturer to patient.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{SOLUTION_POINTS.map((s, i) => (
							<div
								key={s.title}
								className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
							>
								<div className="flex items-start gap-4">
									<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900 font-display text-sm font-semibold text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<div>
										<h3 className="font-display text-lg font-semibold text-zinc-100">
											{s.title}
										</h3>
										<p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
											{s.desc}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── STATS BAR ────────────────────────────────────────── */}
			<section className="border-b border-zinc-900 bg-zinc-950">
				<div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-4 divide-x divide-zinc-900">
					{STATS.map((s) => (
						<div
							key={s.label}
							className="flex flex-col items-center gap-1 px-4 py-6 text-center"
						>
							<span className="font-display text-xl font-semibold text-zinc-100">
								{s.value}
							</span>
							<span className="text-[11px] leading-tight text-zinc-500">
								{s.label}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* ── OPERATOR SUITE ───────────────────────────────────── */}
			<section className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-2xl">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Operator platform
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Beyond scanning,
							<br />
							<span className="italic font-light text-zinc-400">
								operational trust at every role.
							</span>
						</h2>
						<p className="mt-3 text-sm text-zinc-400">
							MediProof combines onboarding, role dashboards, inventory
							legitimacy, loose-medicine checks, and incident reporting in one
							SaaS control surface.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{OPERATOR_SUITE.map((item) => (
							<div
								key={item.title}
								className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
							>
								<h3 className="font-display text-lg font-semibold text-zinc-100">
									{item.title}
								</h3>
								<p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── HOW IT WORKS ─────────────────────────────────────── */}
			<section
				id="how-it-works"
				className="border-b border-zinc-900 px-5 py-20"
			>
				<div className="mx-auto max-w-5xl">
					{/* header */}
					<div className="mb-12 max-w-lg">
						<p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-zinc-500">
							The process
						</p>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							From factory to patient,{" "}
							<span className="italic font-light text-zinc-400">
								every step verified.
							</span>
						</h2>
					</div>

					{/* steps — vertical timeline (mobile) / alternating two-column (md+) */}
					<div className="relative">
						{/* Centre spine on md+ */}
						<div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-zinc-800/60 md:block" />

						<div className="flex flex-col gap-0">
							{FLOW.map((item, i) => {
								const isEven = i % 2 === 0;
								return (
									<div
										key={item.step}
										className="group relative grid grid-cols-1 gap-0 md:grid-cols-[1fr_auto_1fr]"
									>
										{/* ── LEFT CONTENT (even steps) / spacer (odd) ── */}
										<div
											className={`hidden md:flex md:flex-col md:pb-12 ${
												isEven ? "items-end pr-10 text-right" : "items-start"
											}`}
										>
											{isEven && (
												<div className="max-w-sm">
													<p
														className={`mb-1 text-[10px] font-semibold uppercase tracking-widest ${
															ACTOR_COLOR[item.actor] ?? "text-zinc-500"
														}`}
													>
														{item.actor}
													</p>
													<p className="text-sm leading-relaxed text-zinc-200">
														{item.action}
													</p>
													<span className="mt-2 inline-block rounded border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-[10px] text-zinc-500">
														{item.note}
													</span>
												</div>
											)}
										</div>

										{/* ── CENTRE CIRCLE ── */}
										<div className="hidden md:flex md:flex-col md:items-center">
											<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[11px] font-semibold text-zinc-300 ring-4 ring-zinc-950 transition-colors group-hover:border-zinc-500 group-hover:text-zinc-100">
												{item.step}
											</div>
										</div>

										{/* ── RIGHT CONTENT (odd steps) / spacer (even) ── */}
										<div
											className={`hidden md:flex md:flex-col md:pb-12 ${
												!isEven ? "items-start pl-10" : "items-end"
											}`}
										>
											{!isEven && (
												<div className="max-w-sm">
													<p
														className={`mb-1 text-[10px] font-semibold uppercase tracking-widest ${
															ACTOR_COLOR[item.actor] ?? "text-zinc-500"
														}`}
													>
														{item.actor}
													</p>
													<p className="text-sm leading-relaxed text-zinc-200">
														{item.action}
													</p>
													<span className="mt-2 inline-block rounded border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-[10px] text-zinc-500">
														{item.note}
													</span>
												</div>
											)}
										</div>

										{/* ── MOBILE: single-column timeline ── */}
										<div className="flex gap-5 md:hidden">
											<div className="relative flex flex-col items-center">
												<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[11px] font-semibold text-zinc-300">
													{item.step}
												</div>
												{i < FLOW.length - 1 && (
													<div className="mt-1 w-px flex-1 bg-zinc-800/70" />
												)}
											</div>
											<div className="pb-8 pt-1">
												<p
													className={`mb-1 text-[10px] font-semibold uppercase tracking-widest ${
														ACTOR_COLOR[item.actor] ?? "text-zinc-500"
													}`}
												>
													{item.actor}
												</p>
												<p className="text-sm leading-relaxed text-zinc-200">
													{item.action}
												</p>
												<span className="mt-2 inline-block rounded border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-[10px] text-zinc-500">
													{item.note}
												</span>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* ── FEATURES (9 items → 3×3 grid) ───────────────────── */}
			<section id="features" className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-lg">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							How trust is built
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Nine interlocking layers
							<br />
							<span className="italic font-light text-zinc-400">
								of protection.
							</span>
						</h2>
					</div>

					<div className="grid gap-px bg-zinc-800/50 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-zinc-800/50">
						{FEATURES.map((f) => (
							<div
								key={f.number}
								className="group flex flex-col gap-3 bg-zinc-950 p-6 transition-colors hover:bg-zinc-900/60"
							>
								<span className="font-display text-3xl font-light text-zinc-700 transition-colors group-hover:text-zinc-500">
									{f.number}
								</span>
								<div>
									<h3 className="mb-1.5 text-sm font-semibold text-zinc-100">
										{f.title}
									</h3>
									<p className="text-[13px] leading-relaxed text-zinc-400">
										{f.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── BENEFITS ─────────────────────────────────────────── */}
			<section className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-2xl">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Business outcomes
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							What changes{" "}
							<span className="italic font-light text-zinc-400">
								when trust is built in.
							</span>
						</h2>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{BENEFITS.map((b) => (
							<div
								key={b.title}
								className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
							>
								<span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900 text-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
									{b.icon}
								</span>
								<h3 className="font-display text-lg font-semibold text-zinc-100">
									{b.title}
								</h3>
								<p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
									{b.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── USE CASES ────────────────────────────────────────── */}
			<section className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-2xl">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Who it's for
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Built for every actor{" "}
							<span className="italic font-light text-zinc-400">
								in the supply chain.
							</span>
						</h2>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						{USE_CASES.map((uc) => (
							<div
								key={uc.title}
								className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
							>
								<h3 className="font-display text-xl font-semibold text-zinc-100">
									{uc.title}
								</h3>
								<p className="mt-3 text-[13px] leading-relaxed text-zinc-400">
									{uc.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── INTEGRATIONS ─────────────────────────────────────── */}
			<section className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-2xl">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Ecosystem
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Connects with your
							<br />
							<span className="italic font-light text-zinc-400">
								existing infrastructure.
							</span>
						</h2>
						<p className="mt-3 text-sm text-zinc-400">
							MediProof is designed to plug into the tools and systems
							pharmaceutical operations already rely on.
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{INTEGRATIONS.map((item) => (
							<div
								key={item.title}
								className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
							>
								<h3 className="text-sm font-semibold text-zinc-100">
									{item.title}
								</h3>
								<p className="mt-2 text-[13px] leading-relaxed text-zinc-400">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── SECURITY ─────────────────────────────────────────── */}
			<section className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-2xl">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Security &amp; compliance
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Trust infrastructure
							<br />
							<span className="italic font-light text-zinc-400">
								you can rely on.
							</span>
						</h2>
						<p className="mt-3 text-sm text-zinc-400">
							Security isn't a feature — it's the foundation. Every layer of
							MediProof is built with tamper resistance, access control, and
							auditability at its core.
						</p>
					</div>

					<div className="grid gap-px bg-zinc-800/50 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-zinc-800/50">
						{SECURITY_FEATURES.map((s) => (
							<div
								key={s.title}
								className="flex flex-col gap-2 bg-zinc-950 p-6 transition-colors hover:bg-zinc-900/60"
							>
								<h3 className="text-sm font-semibold text-zinc-100">
									{s.title}
								</h3>
								<p className="text-[13px] leading-relaxed text-zinc-400">
									{s.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── VERIFICATION VERDICTS ────────────────────────────── */}
			<section id="verdicts" className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-lg">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							What you'll see
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Three verdicts{" "}
							<span className="italic font-light text-zinc-400">
								Zero ambiguity.
							</span>
						</h2>
						<p className="mt-3 text-sm text-zinc-400">
							Every QR scan returns a clear result with full reasoning so you
							know exactly why you received it.
						</p>
					</div>

					<div className="grid gap-4 md:grid-cols-3">
						{VERDICTS.map((v) => (
							<div
								key={v.label}
								className={`rounded-2xl border ${v.border} ${v.bg} overflow-hidden flex flex-col`}
							>
								{/* coloured header strip */}
								<div className={`${v.headerBg} px-5 pt-5 pb-4`}>
									<div className="flex items-center gap-2.5 mb-3">
										<span
											className={`h-2.5 w-2.5 rounded-full ${v.dot} ${v.dotGlow}`}
										/>
										<span
											className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${v.badgeBg}`}
										>
											{v.short}
										</span>
									</div>
									<p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
										{v.label}
									</p>
								</div>

								{/* points */}
								<div className="px-5 py-4 flex-1">
									<ul className="space-y-2.5">
										{v.points.map((p) => (
											<li
												key={p}
												className="flex items-center gap-2.5 text-[12px] text-zinc-400"
											>
												<span className={`text-[10px] ${v.checkColor}`}>✓</span>
												{p}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>

					<div className="mt-10 flex justify-center">
						<Link
							to="/verify"
							id="verdicts-verify-cta"
							className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-400 hover:text-zinc-100"
						>
							Try a verification workflow
							<span className="transition-transform group-hover:translate-x-0.5">
								→
							</span>
						</Link>
					</div>
				</div>
			</section>

			{/* ── FAQ ──────────────────────────────────────────────── */}
			<section id="faq" className="border-b border-zinc-900 px-5 py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12 max-w-lg">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Common questions
						</span>
						<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Simple answers{" "}
							<span className="italic font-light text-zinc-400">
								for everyone.
							</span>
						</h2>
					</div>

					<FaqAccordion items={FAQS} />
				</div>
			</section>

			{/* ── FINAL CTA ────────────────────────────────────────── */}
			<section className="border-b border-zinc-900 px-5 py-24">
				<div className="mx-auto max-w-2xl flex flex-col items-center gap-5 text-center">
					<span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
						Get started
					</span>
					<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl md:text-5xl">
						Your medicine.
						<br />
						<span className="italic font-light text-zinc-400">
							Verified in seconds.
						</span>
					</h2>
					<p className="max-w-sm text-sm text-zinc-400">
						Scan the QR code on any MediProof-registered medicine or enter the
						unit ID to get an instant trust verdict — no account, no app needed.
					</p>
					<div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
						<Link
							to="/contact"
							id="footer-verify-cta"
							className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-50 px-7 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-white hover:shadow-md sm:w-auto"
						>
							Request verification setup
							<span className="transition-transform group-hover:translate-x-0.5">
								→
							</span>
						</Link>
						<Link
							to="/about"
							className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:text-zinc-100 sm:w-auto"
						>
							Learn about us
						</Link>
					</div>
				</div>
			</section>

			{/* ── FOOTER ───────────────────────────────────────────── */}
			<footer className="border-t border-zinc-900 bg-zinc-950 px-5 py-12">
				<div className="mx-auto max-w-5xl">
					<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
						{/* Brand */}
						<div className="lg:col-span-1">
							<div className="flex items-center gap-2.5 mb-4">
								<span className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-300 text-base font-bold">
									⛨
								</span>
								<span className="font-display text-lg font-semibold text-zinc-100">
									Medi<span className="text-zinc-400">Guard</span>
								</span>
							</div>
							<p className="text-xs leading-relaxed text-zinc-500">
								Blockchain-backed medicine trust infrastructure for
								pharmaceutical supply chains worldwide.
							</p>
						</div>

						{/* Product */}
						<div>
							<p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
								Product
							</p>
							<ul className="space-y-2.5">
								{["How it works", "Features", "Verdicts", "FAQ"].map((item) => (
									<li key={item}>
										<a
											href="#"
											className="text-sm text-zinc-400 transition hover:text-zinc-200"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Company */}
						<div>
							<p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
								Company
							</p>
							<ul className="space-y-2.5">
								<li>
									<Link
										to="/about"
										className="text-sm text-zinc-400 transition hover:text-zinc-200"
									>
										About us
									</Link>
								</li>
								<li>
									<Link
										to="/contact"
										className="text-sm text-zinc-400 transition hover:text-zinc-200"
									>
										Contact
									</Link>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-zinc-400 transition hover:text-zinc-200"
									>
										Privacy policy
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-zinc-400 transition hover:text-zinc-200"
									>
										Terms of service
									</a>
								</li>
							</ul>
						</div>

						{/* Get in touch */}
						<div>
							<p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
								Get in touch
							</p>
							<ul className="space-y-2.5">
								<li>
									<a
										href="mailto:slytherin.labs@gmail.com"
										className="text-sm text-zinc-400 transition hover:text-zinc-200 break-all"
									>
										slytherin.labs@gmail.com
									</a>
								</li>
								<li>
									<span className="text-sm text-zinc-500">Delhi, India</span>
								</li>
								<li>
									<span className="text-sm text-zinc-500">
										Mon–Fri, 10:00–18:00 IST
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-10 flex flex-col items-center gap-3 border-t border-zinc-900 pt-8 sm:flex-row sm:justify-between">
						<p className="text-[11px] text-zinc-600">
							© {new Date().getFullYear()} MediGuard · All rights reserved
						</p>
						<p className="text-[11px] text-zinc-600">
							Blockchain · Anomaly Intelligence · Supply-chain trust
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
