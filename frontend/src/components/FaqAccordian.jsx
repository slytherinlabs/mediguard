import { useState, useRef, useEffect } from "react";

/* ── Animated panel using real height measurement ───────────── */
function AccordionPanel({ isOpen, children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [children]);

  return (
    <div
      style={{
        overflow: "hidden",
        maxHeight: isOpen ? `${height}px` : "0px",
        opacity: isOpen ? 1 : 0,
        transition:
          "max-height 380ms cubic-bezier(0.4,0,0.2,1), opacity 280ms cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

/* ── Single row ─────────────────────────────────────────────── */
function AccordionRow({ faq, isOpen, onToggle, isLast }) {
  return (
    <div
      style={{
        borderBottom: isLast ? "none" : "1px solid #27272a",
        backgroundColor: isOpen ? "rgba(39,39,42,0.45)" : "transparent",
        transition: "background-color 220ms cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.25rem 1.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: 1.55,
          color: isOpen ? "#fafafa" : "#d4d4d8",
          boxSizing: "border-box",
          transition: "color 200ms ease",
        }}
      >
        <span style={{ flex: 1 }}>{faq.q}</span>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            border: "1px solid",
            borderColor: isOpen ? "#52525b" : "#3f3f46",
            backgroundColor: isOpen ? "rgba(82,82,91,0.2)" : "transparent",
            color: isOpen ? "#a1a1aa" : "#52525b",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition:
              "transform 360ms cubic-bezier(0.4,0,0.2,1), color 200ms ease, background-color 200ms ease, border-color 200ms ease",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 15 15" fill="none">
            <path
              d="M3.5 5.5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <AccordionPanel isOpen={isOpen}>
        <p
          style={{
            margin: 0,
            padding: "0 1.5rem 1.375rem 1.5rem",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
            color: "#a1a1aa",
          }}
        >
          {faq.a}
        </p>
      </AccordionPanel>
    </div>
  );
}

/* ── Main export ────────────────────────────────────────────── */
export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* ── MOBILE: formatted Q&A cards ── */}
      <div className="md:hidden flex flex-col gap-3">
        {items.map((faq, i) => (
          <div
            key={faq.q}
            className="rounded-xl border border-zinc-800/70 bg-zinc-900/30 px-5 py-4"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="mt-0.5 shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-[10px] font-semibold text-zinc-400">
                {i + 1}
              </span>
              <p className="text-sm font-semibold leading-snug text-zinc-100">
                {faq.q}
              </p>
            </div>
            <div className="mb-3 ml-8 h-px bg-zinc-800/60" />
            <p className="ml-8 text-[13px] leading-relaxed text-zinc-400">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      {/* ── DESKTOP: interactive accordion ── */}
      <div
        className="hidden md:block"
        style={{
          borderRadius: "1rem",
          border: "1px solid #27272a",
          overflow: "hidden",
          background: "#18181b",
        }}
      >
        {items.map((faq, i) => (
          <AccordionRow
            key={faq.q}
            faq={faq}
            isOpen={openIndex === i}
            isLast={i === items.length - 1}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </>
  );
}
