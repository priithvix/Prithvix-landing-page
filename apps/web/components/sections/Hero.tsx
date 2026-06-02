"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionPill } from "@/components/ui/SectionPill";
import LightRays from "@/components/LightRays";
import { CountUp } from "@/components/ui/CountUp";
import { scrollToAnchor } from "@/lib/scroll";
import { track } from "@/components/Analytics";
import RotatingText from "@/components/ui/RotatingText";
import type { GlobeMarker } from "@/components/ui/3d-globe";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/use-media-query";

const Globe3D = dynamic(() => import("@/components/ui/3d-globe").then((mod) => mod.Globe3D), {
  ssr: false,
});

const INDIAN_MARKERS: GlobeMarker[] = [
  { lat: 28.6139, lng: 77.209, label: "New Delhi" },
  { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
  { lat: 12.9716, lng: 77.5946, label: "Bangalore" },
  { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
  { lat: 13.0827, lng: 80.2707, label: "Chennai" },
  { lat: 22.5726, lng: 88.3639, label: "Kolkata" },
  { lat: 23.0225, lng: 72.5714, label: "Ahmedabad" },
  { lat: 18.5204, lng: 73.8567, label: "Pune" },
];

const HEADLINE: { text: string; color: string }[][] = [
  [{ text: "Smart", color: "rabi" }, { text: "Tools", color: "rabi" }, { text: "for", color: "rabi" }],
  [{ text: "Bharat's", color: "amber" }],
];

const STATS = [
  { end: 4, suffix: "", label: "Services in one platform" },
  { end: 3, suffix: "+", label: "Indian languages supported" },
  { static: "24/7", label: "AI works non-stop" },
];

export function Hero() {
  const [showScroll, setShowScroll] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Per-line word offset so each word gets a global stagger delay without
  // mutating a counter during render.
  const wordCounts = HEADLINE.map((line) => line.length);
  const offsetFor = (lineIdx: number) =>
    wordCounts.slice(0, lineIdx).reduce((a, b) => a + b, 0);

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-soil-deep md:min-h-screen"
    >
      {/* Layer 1 - Light Rays */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.85]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#1f7a4d"
          raysSpeed={1.4}
          lightSpread={2.5}
          rayLength={3}
          fadeDistance={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.03}
          pulsating={false}
          saturation={2}
        />
      </div>

      {/* Layer 4 - dot grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(245,240,230,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Content */}
      <div className="container-x relative z-10 w-full pt-28 pb-16 md:pt-24 pointer-events-none">
        <div className="max-w-[640px] pointer-events-auto">
          <h1
            className="mt-6 font-display font-bold leading-[1.05] tracking-hero"
            style={{ fontSize: "var(--text-hero)" }}
          >
            {HEADLINE.map((line, li) => (
              <span key={li} className="block">
                {line.map((w, wi) => {
                  const delay = 0.4 + (offsetFor(li) + wi) * 0.08;
                  return (
                    <span
                      key={`${li}-${wi}`}
                      className="mr-[0.25em] inline-block"
                      style={{
                        color:
                          w.color === "amber"
                            ? "var(--color-harvest-amber)"
                            : "var(--color-rabi-dust)",
                        animationName: "pv-word-up",
                        animationDuration: "0.5s",
                        animationFillMode: "both",
                        animationDelay: `${delay}s`,
                      }}
                    >
                      {w.text}
                    </span>
                  );
                })}
              </span>
            ))}
            <span className="block mt-1">
              <RotatingText
                texts={['Farmers', 'Dealers', 'FPOs', 'Agri-Business']}
                mainClassName="inline-flex overflow-hidden bg-turmeric text-night-field px-4 py-1 md:py-2 rounded-[18px] md:rounded-[24px]"
                animatePresenceMode="popLayout"
                staggerFrom="first"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h1>

          <p
            className="mt-6 max-w-[520px] font-body font-light leading-[1.75] text-[rgba(245,240,230,0.62)]"
            style={{ fontSize: "var(--text-body-lg)", animation: "pv-word-up 0.5s 0.9s both" }}
          >
            PrithviX connects agri input dealers and farmers through technology.
            One platform. Endless growth.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col gap-3.5 sm:flex-row"
            style={{ animation: "pv-word-up 0.5s 1.05s both" }}
          >
            <button
              onClick={() => {
                scrollToAnchor("#register");
                track("button_click", { id: "hero_join" });
              }}
              className="rounded-pill border-[0.5px] border-field-mid bg-field-deep px-7 py-3.5 font-heading text-[15px] font-semibold text-rabi-dust transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
              style={{ animation: "pv-pulse 1.5s ease-in-out infinite" }}
            >
              Join the Platform
            </button>
            <button
              onClick={() => {
                scrollToAnchor("#services");
                track("button_click", { id: "hero_explore" });
              }}
              className="rounded-pill border-[1.5px] border-[rgba(245,240,230,0.2)] bg-transparent px-7 py-3.5 font-heading text-[15px] font-semibold text-rabi-dust transition-transform duration-200 hover:-translate-y-0.5 hover:border-[rgba(245,240,230,0.4)] active:scale-[0.97]"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-16"
            style={{ animation: "pv-word-up 0.5s 1.25s both" }}
          >
            {STATS.map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="hidden h-9 w-px bg-[rgba(245,240,230,0.12)] sm:block" />
                )}
                <div>
                  <div className="font-display text-[32px] font-bold leading-none tracking-tight text-rabi-dust md:text-[38px]">
                    {"static" in s ? (
                      s.static
                    ) : (
                      <CountUp end={s.end!} suffix={s.suffix} />
                    )}
                  </div>
                  <div className="mt-1.5 font-body text-[11px] uppercase tracking-[0.05em] text-[rgba(245,240,230,0.42)]">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Globe - Desktop Only (Bottom Right) */}
      {isDesktop && (
        <div 
          className="hidden lg:block absolute -right-64 -bottom-62 z-0 size-[900px] pointer-events-auto"
          style={{
            maskImage: "radial-gradient(circle at center, black 30%, transparent 58%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 58%)",
          }}
        >
          <Globe3D
            className="h-full w-full opacity-80"
            markers={INDIAN_MARKERS}
            config={{
              globeColor: "#1b3a2d",
              atmosphereColor: "#0e1b12",
              atmosphereIntensity: 0.5,
              bumpScale: 2,
              autoRotateSpeed: 0.08,
              markerSize: 0.05,
              showAtmosphere: false,
              initialRotation: { x: 0, y: 0 },
              ambientIntensity: 0.1,
              pointLightIntensity: 3.5,
            }}
          />
        </div>
      )}

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToAnchor("#about")}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[rgba(245,240,230,0.35)] transition-opacity duration-300"
        style={{
          opacity: showScroll ? 1 : 0,
          animation: "pv-bounce 1.5s ease-in-out infinite",
        }}
      >
        <ChevronDown size={26} />
      </button>
    </section>
  );
}
