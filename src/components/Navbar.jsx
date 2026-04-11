import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4">
      {/* Navigation bar — glass morphism */}
      <nav
        className={`
          mx-auto flex max-w-6xl items-center justify-between
          rounded-2xl border px-5 py-3
          transition-all duration-300
          ${scrolled
            ? "border-zinc-700/60 bg-zinc-950/80 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            : "border-zinc-800/70 bg-zinc-950/60 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          }
        `}
        style={{
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* ── Left: Logo / Brand ── */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 select-none"
          aria-label="MediGuard home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-700/80 bg-zinc-900/70 text-zinc-300 text-base font-bold transition-all duration-200 group-hover:border-zinc-500 group-hover:text-zinc-100 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.06)]">
            ⛨
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-zinc-100">
            Medi<span className="text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">Guard</span>
          </span>
        </Link>

        {/* ── Center: Nav links (desktop) ── */}
        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  [
                    "relative rounded-xl px-4 py-1.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "border border-zinc-700/80 bg-zinc-900/70 text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                      : "text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200",
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
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-4 py-1.5 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-900 hover:text-zinc-100 active:scale-95 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            Login
            <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-menu-toggle"
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 w-5 bg-zinc-400 transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-zinc-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-zinc-400 transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={`
          md:hidden mx-1 mt-1.5 overflow-hidden
          rounded-2xl border border-zinc-800/70
          bg-zinc-950/85 backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(0,0,0,0.5)]
          transition-all duration-300
          ${menuOpen ? "max-h-72 py-3 opacity-100" : "max-h-0 py-0 opacity-0"}
        `}
        style={{ WebkitBackdropFilter: "blur(20px)" }}
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
                      ? "border border-zinc-700/80 bg-zinc-900/70 text-zinc-100"
                      : "text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200",
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
              className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700/80 bg-zinc-900/70 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition-all hover:border-zinc-500 hover:text-zinc-100"
            >
              Login →
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
