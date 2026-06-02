"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Sets up the site-wide motion system:
 *  - Lenis physics-based smooth scroll (PRD §1.2: duration 1.2, touch 1.5)
 *  - GSAP ScrollTrigger synced to Lenis (PRD §1.3)
 *  - A single IntersectionObserver that reveals every [data-reveal] element
 *    when ~15% enters the viewport (PRD §1.6).
 *
 * Everything is disabled when the user prefers reduced motion - Lenis is not
 * started and all reveal targets are shown immediately (also enforced in CSS).
 *
 * Exposed globally:
 *  - window.__lenis  (used by the back-to-top button + nav anchor scrolling)
 */
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // ---- Reveal observer (runs regardless; just no-ops fast on reduce) ----
    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    let io: IntersectionObserver | undefined;
    if (reduceMotion) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            } else {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
      );
      revealEls.forEach((el) => io!.observe(el));
    }

    if (reduceMotion) {
      return () => io?.disconnect();
    }

    // ---- Lenis smooth scroll ----
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      touchMultiplier: 1.5,
      smoothWheel: true,
    });
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      // GSAP ticker uses seconds; Lenis expects ms
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      delete window.__lenis;
      io?.disconnect();
    };
  }, []);

  return <>{children}</>;
}
