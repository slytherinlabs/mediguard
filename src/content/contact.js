export const CONTACT_CHANNELS = [
	{
		label: "Email",
		value: "slytherin.labs@gmail.com",
		href: "mailto:slytherin.labs@gmail.com",
		note: "Product, onboarding, and deployment support",
		icon: "✉️",
	},
	{
		label: "Phone",
		value: "+91 93418 51619",
		href: "tel:+919341851619",
		note: "Mon-Fri, 10:00 - 18:00 IST",
		icon: "📞",
	},
	{
		label: "Location",
		value: "Delhi, India",
		href: null,
		note: "Remote-first implementation team",
		icon: "📍",
	},
];

export const RESPONSE_TIERS = [
	{
		tier: "General inquiry",
		sla: "< 24 hours",
		detail: "Product questions, onboarding guidance, and feature walkthroughs",
		color: "text-zinc-300",
		dotColor: "bg-zinc-400",
	},
	{
		tier: "Urgent support",
		sla: "< 4 hours",
		detail:
			"Deployment blockers, integration issues, and verification failures",
		color: "text-zinc-200",
		dotColor: "bg-zinc-300",
	},
	{
		tier: "Critical incident",
		sla: "< 1 hour",
		detail:
			"Production outages, security concerns, and counterfeit escalations",
		color: "text-zinc-100",
		dotColor: "bg-zinc-100",
	},
];

export const TOPICS = [
	"Clerk login and wallet onboarding",
	"Role selection and document verification",
	"Dashboard and inventory management rollout",
	"Loose medicine QR and strip code flow",
	"Manual anomaly reporting workflow",
	"Blockchain deployment and production readiness",
	"Book a demo",
	"Other",
];

export const ROLES = [
	"Manufacturer",
	"Distributor",
	"Pharmacy",
	"Admin",
	"Public verifier",
	"Other",
];

export const inputClass =
	"w-full rounded-xl border border-zinc-700/80 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600";

export const selectClass =
	"w-full rounded-xl border border-zinc-700/80 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600";
