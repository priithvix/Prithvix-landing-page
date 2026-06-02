"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen dark preloader (PRD §1.4 / Bible §2):
 *  - "PrithviX" letters fade/drift in with a 0.05s stagger (X in amber)
 *  - a 2px progress line grows from centre
 *  - the overlay slides up off-screen, revealing the site
 * Shown once per session; respects reduced-motion (exits instantly).
 */
const NAME = "PrithviX";

export function Preloader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("pv_preloaded");

    if (reduce || seen) {
      setPhase("done");
      document.body.dataset.loaded = "true";
      return;
    }

    sessionStorage.setItem("pv_preloaded", "1");
    document.documentElement.style.overflow = "hidden";

    const exitAt = window.setTimeout(() => setPhase("exiting"), 1400);
    const doneAt = window.setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
      document.body.dataset.loaded = "true";
    }, 1900);

    return () => {
      window.clearTimeout(exitAt);
      window.clearTimeout(doneAt);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-soil-deep transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ transform: phase === "exiting" ? "translateY(-100%)" : "none" }}
    >
      <div className="font-heading font-bold text-[24px] md:text-[32px] tracking-tight">
        {NAME.split("").map((ch, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              color: ch === "X" ? "var(--color-harvest-amber)" : "var(--color-rabi-dust)",
              animationName: "pv-word-up",
              animationDuration: "0.4s",
              animationFillMode: "both",
              animationDelay: `${0.1 + i * 0.05}s`,
            }}
          >
            {ch}
          </span>
        ))}
      </div>
      <div className="mt-4 h-[2px] w-[min(60vw,320px)] overflow-hidden bg-[rgba(245,240,230,0.12)]">
        <div
          className="h-full bg-field-deep"
          style={{
            transformOrigin: "center",
            animation: "pv-line-grow 1.2s 0.2s both ease-out",
          }}
        />
      </div>
      <style>{`
        @keyframes pv-line-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
}
