import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass bar */}
      <nav
        className="
          mx-auto mt-3 flex max-w-6xl items-center justify-between
          rounded-2xl border border-white/10
          bg-zinc-950/40 backdrop-blur-xl
          px-5 py-3
          shadow-[0_4px_30px_rgba(0,0,0,0.4)]
        "
      >
        {/* ── Left: Logo / Brand ── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 select-none"
          aria-label="MediGuard home"
        >
          {/* Shield icon */}
          <span
            className="
              flex h-8 w-8 items-center justify-center
              rounded-xl bg-emerald-500/15 border border-emerald-500/30
              text-emerald-400 text-base font-bold
            "
          >
            ⛨
          </span>
          <span className="text-sm font-bold tracking-tight text-zinc-50">
            Medi<span className="text-emerald-400">Guard</span>
          </span>
        </Link>

        {/* ── Center: Nav links (desktop) ── */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  [
                    "relative px-4 py-1.5 text-sm font-medium rounded-xl transition-all duration-200",
                    isActive
                      ? "text-zinc-50 bg-white/10"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Right: Login button ── */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            id="nav-login-btn"
            className="
              hidden md:inline-flex items-center gap-2
              rounded-xl border border-emerald-500/40
              bg-emerald-500/10 px-4 py-1.5
              text-sm font-semibold text-emerald-300
              backdrop-blur-sm
              transition-all duration-200
              hover:bg-emerald-500/20 hover:border-emerald-500/60 hover:text-emerald-200
              active:scale-95
            "
          >
            Login
            <svg
              className="h-3.5 w-3.5 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-menu-toggle"
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-5 bg-zinc-400 transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-zinc-400 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-zinc-400 transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={`
          md:hidden mx-3 mt-1 overflow-hidden
          rounded-2xl border border-white/10
          bg-zinc-950/70 backdrop-blur-xl
          shadow-[0_4px_30px_rgba(0,0,0,0.4)]
          transition-all duration-300
          ${menuOpen ? "max-h-64 py-3" : "max-h-0 py-0"}
        `}
      >
        <ul className="flex flex-col px-3">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "block rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                    isActive
                      ? "text-zinc-50 bg-white/10"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2 px-1">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="
                flex items-center justify-center gap-2
                rounded-xl border border-emerald-500/40
                bg-emerald-500/10 px-4 py-2
                text-sm font-semibold text-emerald-300
                transition-all hover:bg-emerald-500/20
              "
            >
              Login →
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
