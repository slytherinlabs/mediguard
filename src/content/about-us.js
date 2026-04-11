export const STATS = [
	{ value: "End-to-end", label: "Medicine trust workflow" },
	{ value: "Role-aware", label: "Identity and custody controls" },
	{ value: "Unit-level", label: "Serialization and verification" },
	{ value: "Audit-ready", label: "Evidence and observability" },
];

export const OFFERINGS = [
	{
		icon: "🔐",
		title: "Identity and onboarding",
		detail:
			"Clerk sign-in, wallet connection, role selection, and document-backed onboarding verification in one operator journey.",
	},
	{
		icon: "📊",
		title: "Role dashboards and inventory",
		detail:
			"Manufacturer, distributor, and pharmacy dashboards for orders, tracking, stock legitimacy, and shipment health.",
	},
	{
		icon: "✅",
		title: "Verification for full and loose medicine",
		detail:
			"Verification toggle for full medicine and strip-level checks, including unique short strip codes for loose sales.",
	},
	{
		icon: "💊",
		title: "Pharmacy sale intelligence",
		detail:
			"Sale mode toggle for complete vs loose dispense, with customer verification QR and code-entry authenticity checks.",
	},
	{
		icon: "🚨",
		title: "Anomaly and incident trust layer",
		detail:
			"Strict anomaly enforcement plus manual reporting for all operational roles except manufacturer.",
	},
	{
		icon: "⛓️",
		title: "Blockchain-grade traceability",
		detail:
			"Critical supply-chain events anchored on-chain with health monitoring and deployment-ready architecture practices.",
	},
];

export const VALUES = [
	{
		icon: "💡",
		title: "Clarity over complexity",
		detail:
			"Every trust verdict is understandable by operators, regulators, and patients without deep technical interpretation.",
	},
	{
		icon: "🏭",
		title: "Operational realism",
		detail:
			"Designed for real pharmacy and distribution contexts, including mixed full-pack and loose-strip sales.",
	},
	{
		icon: "🔍",
		title: "Trust by evidence",
		detail:
			"Decision-making is grounded in deterministic checks, custody proofs, telemetry signals, and traceable logs.",
	},
	{
		icon: "🛡️",
		title: "Secure by default",
		detail:
			"Role enforcement, strict route validation, and controlled state transitions are baseline behaviors, not optional add-ons.",
	},
];

export const TEAM = [
	{
		name: "Rahul Kapoor",
		role: "Project Lead & Full-Stack",
		avatar: "RK",
		bio: "Leads platform architecture, blockchain integration, and product direction for trust-critical workflows.",
	},
	{
		name: "Akshay Mishra",
		role: "Backend Engineer",
		avatar: "AM",
		bio: "Builds API systems, database workflows, and reliability controls across role-sensitive operations.",
	},
	{
		name: "Shivam Kumar",
		role: "R&D Engineer",
		avatar: "SK",
		bio: "Develops anomaly logic and detection methods to strengthen counterfeit and fraud resistance.",
	},
	{
		name: "Ritesh Jaiswal",
		role: "Frontend Engineer",
		avatar: "RJ",
		bio: "Designs the product experience layer for dashboards, verification journeys, and responsive access.",
	},
];

export const MILESTONES = [
	{
		phase: "01 — Foundation",
		title: "Problem mapping and architecture design",
		detail:
			"Defined the counterfeit-risk model and designed a unit-level trust architecture spanning roles, telemetry, and verification.",
	},
	{
		phase: "02 — Core platform",
		title: "Role, batch, shipment, and verification engine",
		detail:
			"Implemented role-gated custody flows, serialization, cold-chain logic, and deterministic trust verdicts.",
	},
	{
		phase: "03 — Operator scale",
		title: "Dashboards, inventory, and pharmacy loose-sale support",
		detail:
			"Expanded product modules for role dashboards, inventory legitimacy, and loose medicine verification workflows.",
	},
	{
		phase: "04 — Production track",
		title: "Deployment hardening and governance readiness",
		detail:
			"Strengthening deployed chain posture, monitoring, and audit-grade incident response for enterprise operations.",
	},
];

export const SOCIAL_PROOF = [
	"Built for manufacturer, distributor, pharmacy, and public verification journeys",
	"Includes deterministic anomaly intelligence with manual escalation pathways",
	"Engineered with blockchain anchoring, route-level validation, and operational observability",
	"Covers full-pack and loose-strip sales with unique strip-code verification",
	"Role-gated dashboards with custody tracking and cold-chain monitoring",
];
