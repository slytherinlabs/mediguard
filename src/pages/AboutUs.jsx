import { Link } from "react-router-dom";
import {
	MILESTONES,
	OFFERINGS,
	SOCIAL_PROOF,
	STATS,
	TEAM,
	VALUES,
} from "../content/about-us";

export default function AboutUs() {
	return (
		<main className="flex flex-col pt-24 pb-12 font-dm-sans sm:pb-14">
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

				<div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5">
					<span className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-widest text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
						<span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
						About MediProof
					</span>

					<h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
						We build trusted medicine infrastructure
						<br />
						<span className="italic font-light text-zinc-500">
							from onboarding to final verification.
						</span>
					</h1>

					<p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
						MediProof is a SaaS trust platform for pharmaceutical supply chains,
						combining identity, role operations, serialization, verification
						intelligence, and blockchain-backed traceability into one product.
					</p>

					<div className="mt-1 flex w-full max-w-md flex-col items-stretch gap-2.5 sm:w-auto sm:max-w-none sm:flex-row sm:items-center">
						<Link
							to="/contact"
							className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-white hover:shadow-md"
						>
							Book implementation call
						</Link>
						<Link
							to="/"
							className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
						>
							Explore product flows
						</Link>
					</div>
				</div>
			</section>

			{/* ── STATS BAR ────────────────────────────────────────── */}
			<section className="border-b border-zinc-900 bg-zinc-950 px-4 py-4 sm:px-5 sm:py-5">
				<div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-zinc-900 md:grid-cols-4">
					{STATS.map((item) => (
						<div
							key={item.label}
							className="flex flex-col items-center gap-1 px-3 py-3 text-center sm:px-4 sm:py-4"
						>
							<span className="font-display text-lg font-semibold text-zinc-100 sm:text-xl">
								{item.value}
							</span>
							<span className="text-[10px] text-zinc-500 sm:text-[11px]">
								{item.label}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* ── COMPANY OVERVIEW + FOUNDING STORY ────────────────── */}
			<section className="border-b border-zinc-900 px-4 py-12 sm:px-5 sm:py-14">
				<div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
					<div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-7">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Company overview
						</span>
						<h2 className="mt-2 font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							One platform for medicine trust,{" "}
							<span className="italic font-light text-zinc-500">
								across every operational role.
							</span>
						</h2>
						<p className="mt-4 text-sm leading-relaxed text-zinc-400">
							We serve manufacturers, distributors, pharmacies, and healthcare
							quality teams that need stronger counterfeit defense, better
							inventory legitimacy, and transparent verification outcomes.
						</p>
						<p className="mt-3 text-sm leading-relaxed text-zinc-400">
							The core problem we solve is trust fragmentation: disconnected
							identity, custody, and verification systems make fraud easier to
							hide. MediProof unifies these into one auditable product layer.
						</p>
					</div>

					<div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-7">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							How we started
						</span>
						<p className="mt-2 font-display text-2xl leading-snug text-zinc-100">
							Started with one question:
							<br />
							<span className="italic font-light text-zinc-500">
								how do we prove medicine trust in seconds?
							</span>
						</p>
						<p className="mt-4 text-sm leading-relaxed text-zinc-400">
							MediProof began by studying how counterfeit risk enters real
							supply chains — through custody gaps, recycled packaging,
							loose-strip anonymity, and paper-based verification that no one
							checks.
						</p>
						<p className="mt-3 text-sm leading-relaxed text-zinc-400">
							We found that trust fails when identity, custody, and verification
							are treated as separate systems. That insight shaped the product:
							merge them into one operational trust platform where every handoff
							is logged, every unit is traceable, and every patient can verify
							what they're taking — in seconds, on any phone.
						</p>
					</div>
				</div>
			</section>

			{/* ── PRODUCT CAPABILITIES ─────────────────────────────── */}
			<section className="border-b border-zinc-900 px-4 py-12 sm:px-5 sm:py-14">
				<div className="mx-auto max-w-5xl">
					<div className="mb-8 max-w-2xl sm:mb-10">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							What we build
						</span>
						<h2 className="mt-2 font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Integrated features we provide
							<br />
							<span className="italic font-light text-zinc-500">
								as one cohesive SaaS system.
							</span>
						</h2>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{OFFERINGS.map((item) => (
							<div
								key={item.title}
								className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
							>
								<span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900 text-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
									{item.icon}
								</span>
								<h3 className="font-display text-lg font-semibold text-zinc-100">
									{item.title}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-zinc-400">
									{item.detail}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── MISSION & VISION + VALUES ────────────────────────── */}
			<section className="border-b border-zinc-900 px-4 py-12 sm:px-5 sm:py-14">
				<div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
					{/* Mission & Vision — expanded content */}
					<div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-7">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Why we exist
						</span>

						<div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
							<div className="flex items-center gap-2.5 mb-2">
								<span className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-900 text-sm">
									🎯
								</span>
								<h3 className="font-display text-lg font-semibold text-zinc-100">
									Mission
								</h3>
							</div>
							<p className="text-sm leading-relaxed text-zinc-400">
								Enable every medicine handoff and verification event to be
								trusted, explainable, and auditable in real time. We believe
								that a patient picking up their prescription shouldn't need to
								wonder if what they're holding is genuine — and with MediProof,
								they never will.
							</p>
						</div>

						<div className="mt-3 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
							<div className="flex items-center gap-2.5 mb-2">
								<span className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-900 text-sm">
									🌐
								</span>
								<h3 className="font-display text-lg font-semibold text-zinc-100">
									Vision
								</h3>
							</div>
							<p className="text-sm leading-relaxed text-zinc-400">
								Build the default trust infrastructure for global pharmaceutical
								supply chains where counterfeit risk and patient safety are
								mission-critical. We envision a world where every unit of
								medicine, in every country, at every point of dispensing, can be
								verified in seconds by anyone — from the manufacturer to the
								patient.
							</p>
						</div>

						<p className="mt-4 text-xs leading-relaxed text-zinc-600">
							Anchored in transparency, operational realism, and the belief that
							trustworthy medicine is a fundamental right — not a premium
							feature.
						</p>
					</div>

					{/* Values */}
					<div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-7">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							What we stand for
						</span>
						<div className="mt-4 space-y-3">
							{VALUES.map((item) => (
								<div
									key={item.title}
									className="rounded-xl border border-zinc-800 bg-zinc-900 p-3.5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
								>
									<div className="flex items-center gap-2.5 mb-1">
										<span className="text-base">{item.icon}</span>
										<p className="text-sm font-semibold text-zinc-200">
											{item.title}
										</p>
									</div>
									<p className="ml-7 text-xs leading-relaxed text-zinc-500">
										{item.detail}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── TEAM (2×2 grid on lg+) ───────────────────────────── */}
			<section className="border-b border-zinc-900 px-4 py-12 sm:px-5 sm:py-14">
				<div className="mx-auto max-w-5xl">
					<div className="mb-8 max-w-xl sm:mb-10">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							The team
						</span>
						<h2 className="mt-2 font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							The people behind MediProof
							<br />
							<span className="italic font-light text-zinc-500">
								across product, engineering, and delivery.
							</span>
						</h2>
					</div>

					{/* 2×2 grid on lg screens */}
					<div className="grid gap-5 sm:grid-cols-2">
						{TEAM.map((member) => (
							<div
								key={member.name}
								className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/70"
							>
								<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-zinc-700/80 bg-zinc-900 text-base font-bold text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
									{member.avatar}
								</span>
								<div>
									<p className="font-display text-lg font-semibold leading-tight text-zinc-100">
										{member.name}
									</p>
									<p className="mt-0.5 text-[11px] uppercase tracking-wide text-zinc-500">
										{member.role}
									</p>
									<p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
										{member.bio}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── MILESTONES (compact) ─────────────────────────────── */}
			<section className="border-b border-zinc-900 px-4 py-12 sm:px-5 sm:py-14">
				<div className="mx-auto max-w-5xl">
					<div className="mb-8 max-w-xl sm:mb-10">
						<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Our journey
						</span>
						<h2 className="mt-2 font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
							Platform growth milestones
							<br />
							<span className="italic font-light text-zinc-500">
								from architecture to deployment track.
							</span>
						</h2>
					</div>

					<div className="grid gap-3 sm:grid-cols-2">
						{MILESTONES.map((item) => (
							<div
								key={item.title}
								className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4 transition-colors hover:border-zinc-700"
							>
								<span className="font-geist-mono text-[10px] uppercase tracking-widest text-zinc-500">
									{item.phase}
								</span>
								<h3 className="mt-1.5 font-display text-base font-semibold text-zinc-100">
									{item.title}
								</h3>
								<p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
									{item.detail}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── SOCIAL PROOF / CAPABILITIES ──────────────────────── */}
			<section className="border-b border-zinc-900 px-4 py-12 sm:px-5 sm:py-14">
				<div className="mx-auto max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
					<div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
						<div>
							<span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
								Platform capabilities
							</span>
							<h2 className="mt-2 font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl">
								Built for trust-critical teams
								<br />
								<span className="italic font-light text-zinc-500">
									that need evidence, not assumptions.
								</span>
							</h2>
						</div>

						<ul className="space-y-2.5">
							{SOCIAL_PROOF.map((item) => (
								<li
									key={item}
									className="flex items-start gap-2.5 text-sm text-zinc-400"
								>
									<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* ── CTA — full-width SaaS style ──────────────────────── */}
			<section className="px-4 py-16 sm:px-5 sm:py-20">
				<div className="mx-auto max-w-5xl">
					<div className="relative overflow-hidden rounded-3xl border border-zinc-700/60 bg-zinc-900/60 px-6 py-12 text-center sm:px-10 sm:py-16">
						{/* subtle radial */}
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

						<div className="relative flex flex-col items-center gap-5">
							<span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
								Get started
							</span>
							<h2 className="font-display text-3xl font-semibold leading-snug text-zinc-100 sm:text-4xl md:text-5xl">
								Ready to bring trust
								<br />
								<span className="italic font-light text-zinc-400">
									to your medicine supply chain?
								</span>
							</h2>
							<p className="max-w-md text-sm leading-relaxed text-zinc-400">
								Join the pipeline of pharmaceutical teams adopting unit-level
								serialization, role custody workflows, and instant verification
								for every medicine they handle.
							</p>
							<div className="flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:flex-row">
								<Link
									to="/contact"
									className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-white hover:shadow-md sm:w-auto"
								>
									Contact us →
								</Link>
								<Link
									to="/"
									className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100 sm:w-auto"
								>
									Explore product
								</Link>
							</div>
							<p className="text-[11px] text-zinc-600">
								No commitment required · Responds within 24 hours
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
