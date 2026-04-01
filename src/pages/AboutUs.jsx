// Team members from the mediproof project
const TEAM = [
  {
    name: "Rahul Kapoor",
    role: "Project Lead & Full-Stack Developer",
    github: "rahulkpr2510",
    avatar: "RK",
    color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    desc: "Architected the full-stack Next.js platform, Solidity smart contracts, and the blockchain anchoring layer.",
    tags: ["Next.js", "Solidity", "Hardhat", "Prisma"],
  },
  {
    name: "Akshay Mishra",
    role: "Backend Developer",
    github: "akshaymishra3141",
    avatar: "AM",
    color: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    desc: "Built the backend infrastructure, API endpoints, and database schema for the web app.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    name: "Shivam Kumar",
    role: "Research & Development",
    github: "ShivamKr1812",
    avatar: "SK",
    color: "bg-amber-500/15 text-amber-300 border-amber-500/0",
    desc: "Researched and helped in implementing the anomaly detection engine and the cold-chain monitoring system.",
    tags: ["Research", "Development"],
  },
  {
    name: "Ritesh Jaiswal",
    role: "Frontend Developer",
    github: "jaiswalritesh150-art",
    avatar: "RJ",
    color: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    desc: "Built the frontend interface, user dashboards, and public verification UI for the web app.",
    tags: ["React", "Tailwind CSS", "UI/UX"],
  },
];

const ANOMALIES = [
  {
    code: "GEO",
    label: "Geo impossibility",
    desc: "Unit scanned in two locations unreachable within elapsed time.",
    severity: "CRITICAL",
  },
  {
    code: "DUPLICATE",
    label: "Duplicate scan flood",
    desc: "Same unitId scanned rapidly from different devices — clone indicator.",
    severity: "CRITICAL",
  },
  {
    code: "PRE_SALE",
    label: "Pre-sale public scan",
    desc: "Public scan of a unit not yet dispensed from pharmacy custody.",
    severity: "WARN",
  },
  {
    code: "DEVICE",
    label: "Device pattern anomaly",
    desc: "Abnormal deviceFingerprint patterns — bot or automated scanner.",
    severity: "WARN",
  },
  {
    code: "SHIPMENT_MISMATCH",
    label: "Shipment range mismatch",
    desc: "Unit serial number outside the approved unitStart–unitEnd range.",
    severity: "WARN",
  },
  {
    code: "UNAUTHORIZED",
    label: "Unauthorized actor",
    desc: "Custody event by a wallet without the required role in RoleManager.",
    severity: "CRITICAL",
  },
];

export default function AboutUs() {
  return (
    <main className="flex flex-col pt-24 pb-20">
      {/* Header */}
      <section className="relative border-b border-zinc-900 px-4 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05)_0%,transparent_65%)]" />
        <div className="relative mx-auto max-w-3xl flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Our mission
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
            About <span className="text-emerald-400">MediGuard</span>
          </h1>
          <p className="text-base text-zinc-400 max-w-xl">
            MediGuard is a full-stack anti-counterfeit medicine trust platform
            combining blockchain anchoring, unit-level serialization, and
            role-based custody workflows — from factory floor to patient hand.
          </p>
        </div>
      </section>

      {/* Mission block */}
      <section className="border-b border-zinc-900 px-4 py-16">
        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
          {[
            {
              icon: "🎯",
              title: "The Problem",
              body: "Counterfeit and mishandled medicines enter the supply chain through cloned packaging, broken custody trails, unauthorized actors, or cold-chain breaches. Traditional batch-level tracking is too coarse and too mutable.",
            },
            {
              icon: "🏗️",
              title: "The Solution",
              body: "MediGuard tracks at the individual unit level and enforces a verifiable event trail: each unit has a unique cryptographic identity, each custody transition is role-gated and logged, and verification returns clear verdicts with full reasoning.",
            },
            {
              icon: "🌍",
              title: "Public-first verification",
              body: "Anyone can verify a unit with just a smartphone — no app install, no account. The verify endpoint checks registry existence, QR integrity, batch safety, shipment history, cold-chain status, and all 6 anomaly rules.",
            },
            {
              icon: "🔒",
              title: "Privacy & Security",
              body: "Strict schema validation at every API boundary. Role-gated endpoints, rate-limited verify API, and session tokens via signed JWT HttpOnly cookie. Patient data never touches the chain.",
            },
          ].map((item) => (
            <div key={item.title} className="card flex flex-col gap-3">
              <span className="text-2xl">{item.icon}</span>
              <h2 className="text-sm font-semibold text-zinc-100">
                {item.title}
              </h2>
              <p className="text-[13px] leading-relaxed text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-zinc-900 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-zinc-100">The team</h2>
            <p className="text-sm text-zinc-400">
              The builders behind MediGuard — obsessed with eliminating
              pharmaceutical fraud.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="card flex flex-col gap-4 hover:border-zinc-600 transition-colors duration-200"
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-sm font-bold ${member.color}`}
                  >
                    {member.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">
                      {member.name}
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[12px] leading-relaxed text-zinc-400">
                  {member.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-700 bg-zinc-800/60 px-2 py-0.5 text-[10px] font-medium text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anomaly detection */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-zinc-100">
              Anomaly detection rules
            </h2>
            <p className="text-sm text-zinc-400">
              Six deterministic detection rules — each flagged with WARN or
              CRITICAL severity and stored with a full JSON evidence trail.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ANOMALIES.map((a) => (
              <div key={a.code} className="card flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <code className="text-[11px] font-bold text-emerald-400">
                    {a.code}
                  </code>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                      a.severity === "CRITICAL"
                        ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}
                  >
                    {a.severity}
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-zinc-200">
                  {a.label}
                </p>
                <p className="text-[11px] leading-relaxed text-zinc-500">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
