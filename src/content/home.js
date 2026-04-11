export const STATS = [
	{ value: "Unit-level", label: "Tracking granularity" },
	{ value: "6 engines", label: "Anomaly detection" },
	{ value: "3-tier", label: "Trust verdicts" },
	{ value: "Strip codes", label: "Loose medicine proof" },
];

export const PROBLEMS = [
	{
		stat: "1 in 10",
		desc: "medical products in low and middle-income countries are substandard or falsified according to the WHO.",
	},
	{
		stat: "$4.4B",
		desc: "estimated annual loss for the pharmaceutical industry due to counterfeit drugs entering legitimate supply chains.",
	},
	{
		stat: "1M+",
		desc: "deaths annually linked to counterfeit medicines worldwide, many involving antimalarials and antibiotics.",
	},
	{
		stat: "No trace",
		desc: "Most supply chains lack unit-level tracking. Once a batch leaves the factory, custody gaps make fakes invisible.",
	},
];

export const SOLUTION_POINTS = [
	{
		title: "Tamper-proof batch registration",
		desc: "Every medicine batch gets a blockchain-anchored hash at the point of manufacture. Records cannot be altered retroactively.",
	},
	{
		title: "Unit-level QR serialization",
		desc: "Each strip, bottle, or pack carries its own cryptographic identity — not just the batch. Clones are caught immediately.",
	},
	{
		title: "Role-gated custody chain",
		desc: "Every handoff between manufacturer, distributor, and pharmacy is verified and logged. No step can be forged or skipped.",
	},
	{
		title: "Instant public verification",
		desc: "Anyone can scan a QR code and receive a clear trust verdict with full reasoning — no account, no app, no cost.",
	},
];

export const FEATURES = [
	{
		number: "01",
		title: "Blockchain-anchored batches",
		desc: "Every medicine batch is registered on-chain with a tamper-proof hash. No one can alter the record after the fact.",
	},
	{
		number: "02",
		title: "Unit-level QR serialization",
		desc: "Each individual strip or bottle gets a unique cryptographic identity — not just the batch. Clones are caught immediately.",
	},
	{
		number: "03",
		title: "Loose-medicine strip codes",
		desc: "Every strip in a pack gets N unique 4-digit codes. Customers verify each strip independently when medicines are sold loose.",
	},
	{
		number: "04",
		title: "Role-gated custody workflow",
		desc: "From manufacturer to distributor to pharmacy, every handoff is verified and logged. No step can be skipped or faked.",
	},
	{
		number: "05",
		title: "Cold-chain monitoring",
		desc: "Temperature is logged at every shipment hop. A single breach automatically flags the entire batch as suspicious.",
	},
	{
		number: "06",
		title: "Transparent trust verdict",
		desc: "Every verification scan returns a clear GREEN / AMBER / RED verdict with plain-language reasoning anyone can understand.",
	},
	{
		number: "07",
		title: "Clerk + wallet onboarding",
		desc: "Operators sign in, connect wallet identity, select role, and complete onboarding verification in one guided flow.",
	},
	{
		number: "08",
		title: "Role dashboards + inventory",
		desc: "Each role gets inventory, orders, shipment tracking, and operational controls tailored to custody responsibility.",
	},
	{
		number: "09",
		title: "Anomaly intelligence engine",
		desc: "Six detection rules — duplicate scans, impossible geo, velocity fraud, cold-chain breach, resale and device anomalies — run on every event.",
	},
];

export const OPERATOR_SUITE = [
	{
		title: "Full or partial medicine verification",
		desc: "Verification supports complete medicine checks and strip-level checks with a clear operator toggle.",
	},
	{
		title: "Loose-medicine strip code protection",
		desc: "Each strip can carry multiple unique 3-4 digit codes for authenticity checks during loose sales.",
	},
	{
		title: "Pharmacy sale-mode intelligence",
		desc: "Pharmacy can switch between full and loose sale mode and issue customer verification QR references.",
	},
	{
		title: "Manual anomaly reporting",
		desc: "Non-manufacturer roles can manually report suspicious activity when risk patterns are observed on ground.",
	},
	{
		title: "Strict anomaly enforcement",
		desc: "Detections are hardened through stricter rule thresholds and clearer incident evidence trails.",
	},
	{
		title: "Deployed-chain production posture",
		desc: "System design is aligned for reliable deployed blockchain environments with operational governance.",
	},
];

export const FLOW = [
	{
		step: "01",
		actor: "Manufacturer",
		action:
			"Registers the batch on-chain and serializes every unit. Each strip gets both a QR code and unique strip-level codes for loose sales.",
		note: "Tamper-proof from day one",
	},
	{
		step: "02",
		actor: "Distributor",
		action:
			"Requests shipment. Manufacturer approves and dispatches with a verified signature.",
		note: "Dual custody proof",
	},
	{
		step: "03",
		actor: "Distributor",
		action:
			"Logs cold-chain temperature readings at every warehouse or transit hub.",
		note: "2 °C – 8 °C safe range",
	},
	{
		step: "04",
		actor: "Pharmacy",
		action:
			"Confirms receipt and runs random unit spot-checks before accepting stock.",
		note: "Spot-check on delivery",
	},
	{
		step: "05",
		actor: "Pharmacy",
		action:
			"Sells full packs or loose strips. Loose sales generate a labeled QR with the assigned strip codes for the customer.",
		note: "Full pack or loose sale",
	},
	{
		step: "06",
		actor: "Anyone",
		action:
			"Scan the QR or enter the strip code. Instantly receive a clear trust verdict with full reasoning.",
		note: "Public · No account needed",
	},
];

export const ACTOR_COLOR = {
	Manufacturer: "text-sky-400",
	Distributor: "text-violet-400",
	Pharmacy: "text-amber-400",
	Anyone: "text-emerald-400",
};

export const BENEFITS = [
	{
		title: "Regulatory compliance",
		desc: "Meet serialization and traceability mandates with audit-ready supply chain records from day one.",
		icon: "📋",
	},
	{
		title: "Reduced counterfeit exposure",
		desc: "Catch cloned, expired, and diverted units before they reach patients with deterministic detection rules.",
		icon: "🛡️",
	},
	{
		title: "Faster recall response",
		desc: "Identify and isolate affected units across the entire chain in minutes instead of weeks.",
		icon: "⚡",
	},
	{
		title: "Patient confidence",
		desc: "Give end consumers a simple, instant way to verify what they're taking — builds irreplaceable brand trust.",
		icon: "🤝",
	},
	{
		title: "Operational visibility",
		desc: "Real-time dashboards for every role — see inventory health, shipment status, and anomaly alerts at a glance.",
		icon: "📊",
	},
	{
		title: "Cold-chain accountability",
		desc: "Temperature breaches are caught and logged automatically, protecting temperature-sensitive medications.",
		icon: "🌡️",
	},
];

export const USE_CASES = [
	{
		title: "Pharmaceutical manufacturers",
		desc: "Register batches on-chain, serialize every unit, and maintain tamper-proof production records across your entire product line.",
	},
	{
		title: "Distributors & wholesalers",
		desc: "Track custody transfers, log cold-chain readings, and prove every handoff in your warehousing and logistics network.",
	},
	{
		title: "Retail & hospital pharmacies",
		desc: "Verify incoming stock, manage full-pack and loose-strip sales, and give customers instant authenticity proof at point of sale.",
	},
	{
		title: "Regulatory & quality teams",
		desc: "Access audit-grade evidence trails, anomaly intelligence reports, and compliance-ready documentation across the entire supply chain.",
	},
];

export const INTEGRATIONS = [
	{
		title: "ERP systems",
		desc: "Connect batch and inventory data from existing enterprise resource planning systems.",
	},
	{
		title: "Blockchain networks",
		desc: "Anchor critical supply chain events on Ethereum-compatible smart contracts.",
	},
	{
		title: "Cold-chain IoT",
		desc: "Ingest temperature readings from IoT sensors at every warehouse and transit hop.",
	},
	{
		title: "Pharmacy POS",
		desc: "Link point-of-sale transactions to verification records for full traceability.",
	},
	{
		title: "Identity providers",
		desc: "Clerk-based authentication with wallet linking for role-gated operator access.",
	},
	{
		title: "Regulatory portals",
		desc: "Export compliance data in formats required by pharmaceutical regulatory bodies.",
	},
];

export const SECURITY_FEATURES = [
	{
		title: "On-chain immutability",
		desc: "Batch registrations and critical custody events are anchored on blockchain — no one can alter records after the fact.",
	},
	{
		title: "End-to-end encryption",
		desc: "All data in transit and at rest is encrypted using industry-standard protocols.",
	},
	{
		title: "Role-based access control",
		desc: "Strict permission boundaries ensure operators can only access data and actions relevant to their role.",
	},
	{
		title: "Cryptographic QR verification",
		desc: "Every QR code contains a checksum — tampering with any part immediately triggers detection.",
	},
	{
		title: "Anomaly intelligence",
		desc: "Six detection engines monitor for duplicate scans, impossible geography, velocity fraud, and more.",
	},
	{
		title: "Audit-ready logs",
		desc: "Every action is timestamped and traceable — full observability for compliance and incident response.",
	},
];

export const VERDICTS = [
	{
		label: "GREEN — Authentic",
		bg: "bg-zinc-900/70",
		border: "border-zinc-700/60",
		headerBg: "bg-[#16251d]",
		dot: "bg-[#34d399]",
		dotGlow: "shadow-[0_0_8px_rgba(52,211,153,0.6)]",
		badgeBg: "bg-[#0d2118] border border-[#1e4433] text-[#34d399]",
		short: "Safe to use",
		checkColor: "text-[#34d399]",
		points: [
			"Unit exists in registry",
			"QR checksum valid",
			"Supply chain intact",
			"No anomalies detected",
			"Cold-chain within range",
		],
	},
	{
		label: "AMBER — Caution",
		bg: "bg-zinc-900/70",
		border: "border-zinc-700/60",
		headerBg: "bg-[#241d0e]",
		dot: "bg-[#fbbf24]",
		dotGlow: "shadow-[0_0_8px_rgba(251,191,36,0.6)]",
		badgeBg: "bg-[#1f1508] border border-[#3d2c0a] text-[#fbbf24]",
		short: "Attention required",
		checkColor: "text-[#fbbf24]",
		points: [
			"Batch flagged suspicious",
			"Duplicate scan pattern",
			"Cold-chain breach detected",
			"Already sold warning",
			"Device anomaly detected",
		],
	},
	{
		label: "RED — Unsafe",
		bg: "bg-zinc-900/70",
		border: "border-zinc-700/60",
		headerBg: "bg-[#250e0e]",
		dot: "bg-[#f87171]",
		dotGlow: "shadow-[0_0_8px_rgba(248,113,113,0.6)]",
		badgeBg: "bg-[#1f0808] border border-[#3d1212] text-[#f87171]",
		short: "Do not consume",
		checkColor: "text-[#f87171]",
		points: [
			"Unit not in registry",
			"QR checksum mismatch",
			"Batch recalled",
			"Medicine expired",
			"Impossible geo movement",
		],
	},
];

export const FAQS = [
	{
		q: "Do I need an account to verify a medicine?",
		a: "No. The verification portal is fully public. Just scan the QR code on your medicine or enter the unit ID — no sign-up required.",
	},
	{
		q: "How does operator onboarding work?",
		a: "Operator onboarding combines modern sign-in, wallet identity linking, role selection, and document verification before dashboard access is granted.",
	},
	{
		q: "What if I buy loose tablets or strips?",
		a: "Every strip has unique verification codes printed on it. Visit the verify page, select 'Loose Medicine', scan the label QR, and enter your strip code — you'll see an instant authenticity result.",
	},
	{
		q: "Can teams manually report suspicious incidents?",
		a: "Yes. Operational roles can submit manual anomaly reports when on-ground issues are observed outside automatic detection signals.",
	},
	{
		q: "What does the QR code contain?",
		a: "Each QR encodes a unique unit ID, batch reference, and a cryptographic checksum. Tampering with any part breaks the checksum and triggers a RED verdict.",
	},
	{
		q: "What if my medicine shows AMBER?",
		a: "AMBER means something needs attention — a cold-chain breach or a suspicious pattern — but the medicine is not necessarily counterfeit. Contact the pharmacy or distributor for clarification.",
	},
	{
		q: "Is the data stored on a public blockchain?",
		a: "The critical anchors (batch hashes, sale finalization) are written to a Solidity smart contract. Operational details live in a secure off-chain database tightly coupled to the chain records.",
	},
	{
		q: "What if the QR code on my medicine is damaged or missing?",
		a: "If the QR code is unreadable, check the packaging for a printed unit ID or strip codes and enter them manually on the verify page. A missing or deliberately obscured QR code is itself a red flag — do not consume the medicine and report it to the pharmacy immediately.",
	},
];
