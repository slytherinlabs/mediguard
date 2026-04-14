import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { WAITLIST_REASONS } from "../content/login";

const INITIAL_FORM = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: "",
	reason: WAITLIST_REASONS[0],
	notes: "",
};

const HIGHLIGHTS = [
	{
		title: "Role verification first",
		desc: "Applications are reviewed by role and use case before credentials are issued.",
		icon: "🧾",
	},
	{
		title: "Structured onboarding",
		desc: "Selected teams get a guided setup path across identity, workflows, and access policies.",
		icon: "🧭",
	},
	{
		title: "Faster pilot start",
		desc: "Waitlist entries with clear scope move faster into implementation planning.",
		icon: "⚡",
	},
];

function validateWaitlist(values) {
	const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const phoneRegex = /^[0-9]{10}$/;

	if (!nameRegex.test(values.firstName.trim())) {
		return "Please enter a valid first name (2-50 letters).";
	}

	if (!nameRegex.test(values.lastName.trim())) {
		return "Please enter a valid last name (2-50 letters).";
	}

	if (!emailRegex.test(values.email.trim().toLowerCase())) {
		return "Please enter a valid email address.";
	}

	if (!phoneRegex.test(values.phoneNumber.trim())) {
		return "Phone number must be exactly 10 digits.";
	}

	return "";
}

export default function Waitlist() {
	const [form, setForm] = useState(INITIAL_FORM);
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
		setError("");
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setError("");

		const validationError = validateWaitlist(form);
		if (validationError) {
			setError(validationError);
			return;
		}

		const finalReason =
			form.reason === "Other"
				? form.notes.trim()
				: form.notes.trim()
					? `${form.reason}: ${form.notes.trim()}`
					: form.reason;

		if (finalReason.length < 10 || finalReason.length > 500) {
			setError("Reason must be between 10 and 500 characters.");
			return;
		}

		setLoading(true);
		setError("");

		try {
			const backendUrl =
				import.meta.env.VITE_BACKEND_URL ||
				import.meta.env.VITE_API_URL ||
				"http://localhost:3000";

			await axios.post(`${backendUrl}/api/waitlist`, {
				firstName: form.firstName.trim(),
				lastName: form.lastName.trim(),
				email: form.email.trim().toLowerCase(),
				phoneNumber: form.phoneNumber.trim(),
				reason: finalReason,
			});

			setSubmitted(true);
			setForm(INITIAL_FORM);
		} catch (err) {
			const message =
				err.response?.data?.message || "Unable to submit waitlist request.";
			setError(message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className="relative min-h-screen overflow-hidden px-4 pt-24 pb-14 font-dm-sans sm:px-5 sm:pt-28 sm:pb-20">
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
					backgroundSize: "56px 56px",
				}}
			/>
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

			<section className="relative mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/80 shadow-[0_24px_80px_rgba(0,0,0,0.6)] backdrop-blur-sm lg:grid-cols-[0.95fr_1.05fr]">
				<div className="hidden border-r border-zinc-800/80 bg-zinc-900/30 px-10 py-12 lg:flex xl:px-12 xl:py-14">
					<div className="flex h-full w-full flex-col justify-between gap-10">
						<div>
							<div className="mb-8 flex items-center gap-2.5">
								<span className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-200 text-lg font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
									⛨
								</span>
								<span className="font-display text-xl font-semibold text-zinc-100">
									Medi<span className="text-zinc-400">Guard</span>
								</span>
							</div>

							<span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
								Early access
							</span>

							<h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-100">
								Join the waitlist
								<br />
								<span className="italic font-light text-zinc-500">
									for trusted onboarding.
								</span>
							</h1>

							<p className="mt-4 text-sm leading-relaxed text-zinc-400">
								Tell us your role, team context, and rollout goals. We prioritize
								applications with clear operational scope.
							</p>
						</div>

						<div className="space-y-3">
							{HIGHLIGHTS.map((item) => (
								<div
									key={item.title}
									className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4"
								>
									<div className="mb-2 flex items-center gap-2.5">
										<span className="text-base">{item.icon}</span>
										<p className="text-sm font-semibold text-zinc-200">
											{item.title}
										</p>
									</div>
									<p className="text-xs leading-relaxed text-zinc-500">
										{item.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center p-6 sm:p-10">
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
							Waitlist
						</span>
					</div>

					<div className="mb-6">
						<span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
							Application form
						</span>
						<h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-zinc-100">
							Share your details,
							<br />
							<span className="italic font-light text-zinc-500">
								we will contact you for onboarding.
							</span>
						</h2>
					</div>

					{submitted ? (
						<div className="rounded-2xl border border-zinc-700/60 bg-zinc-900/50 p-6">
							<span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-200">
								✓
							</span>
							<h3 className="mt-4 font-display text-2xl font-semibold text-zinc-100">
								You&apos;re on the waitlist.
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-zinc-400">
								Thanks for applying. Our team will reach out with onboarding next
								steps after review.
							</p>
							<button
								type="button"
								onClick={() => {
									setSubmitted(false);
									setError("");
								}}
								className="mt-5 inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-100"
							>
								Submit another response
							</button>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="flex flex-col gap-4">
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="flex flex-col gap-2">
									<label
										htmlFor="waitlist-first-name"
										className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
									>
										First name
									</label>
									<input
										id="waitlist-first-name"
										name="firstName"
										type="text"
										required
										value={form.firstName}
										onChange={handleChange}
										placeholder="Rahul"
										className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="waitlist-last-name"
										className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
									>
										Last name
									</label>
									<input
										id="waitlist-last-name"
										name="lastName"
										type="text"
										required
										value={form.lastName}
										onChange={handleChange}
										placeholder="Kapoor"
										className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600"
									/>
								</div>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								<div className="flex flex-col gap-2">
									<label
										htmlFor="waitlist-email"
										className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
									>
										Work email
									</label>
									<input
										id="waitlist-email"
										name="email"
										type="email"
										required
										value={form.email}
										onChange={handleChange}
										placeholder="you@company.com"
										className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label
										htmlFor="waitlist-phone"
										className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
									>
										Phone number
									</label>
									<input
										id="waitlist-phone"
										name="phoneNumber"
										type="tel"
										required
										pattern="[0-9]{10}"
										inputMode="numeric"
										value={form.phoneNumber}
										onChange={handleChange}
										placeholder="9876543210"
										className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600"
									/>
								</div>
							</div>

							<div className="flex flex-col gap-2">
								<label
									htmlFor="waitlist-reason"
									className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
								>
									Primary reason
								</label>
								<select
									id="waitlist-reason"
									name="reason"
									value={form.reason}
									onChange={handleChange}
									className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600"
								>
									{WAITLIST_REASONS.map((reason) => (
										<option key={reason} value={reason}>
											{reason}
										</option>
									))}
								</select>
							</div>

							<div className="flex flex-col gap-2">
								<label
									htmlFor="waitlist-notes"
									className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500"
								>
									Additional notes
								</label>
								<textarea
									id="waitlist-notes"
									name="notes"
									rows={4}
									value={form.notes}
									onChange={handleChange}
									placeholder="Share deployment timeline, expected role count, or use case scope."
									className="w-full resize-none rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600"
								/>
							</div>

							{error ? (
								<p className="rounded-lg border border-zinc-700/70 bg-zinc-950 px-3 py-2 text-xs text-zinc-400">
									{error}
								</p>
							) : null}

							<button
								type="submit"
								disabled={loading}
								className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-50 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-white hover:shadow-md active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
							>
								{loading ? (
									<>
										<span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-zinc-700" />
										Submitting...
									</>
								) : (
									"Join waitlist"
								)}
							</button>
						</form>
					)}

					<p className="mt-5 text-center text-[12px] text-zinc-600">
						Already invited?{" "}
						<Link
							to="/login"
							className="text-zinc-300 transition hover:text-zinc-100 underline underline-offset-2"
						>
							Go to login
						</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
