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

const INDIAN_MARKERS: GlobeMarker[] = [];



export function Hero({ dict, lang }: { dict: any; lang?: string }) {
  const [showScroll, setShowScroll] = useState(true);
  const [markers, setMarkers] = useState<GlobeMarker[]>(INDIAN_MARKERS);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("/api/markers")
      .then((res) => res.json())
      .then((data) => {
        if (data.markers && data.markers.length > 0) {
          setMarkers(data.markers);
        }
      })
      .catch((err) => console.error("Failed to load globe markers:", err));
  }, []);

  // Per-line word offset so each word gets a global stagger delay without
  // mutating a counter during render.
  const wordCounts = dict.headline.map((line: any) => line.length);
  const offsetFor = (lineIdx: number) =>
    wordCounts.slice(0, lineIdx).reduce((a: number, b: number) => a + b, 0);

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
            {dict.headline.map((line: any, li: number) => (
              <span key={li} className="block">
                {line.map((w: any, wi: number) => {
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
                texts={dict.rotatingTexts}
                mainClassName={`inline-flex items-center overflow-hidden bg-turmeric text-night-field pl-4 rounded-[18px] md:rounded-[24px] ${
                  lang !== "en" ? "pt-3 pb-3 pr-6 md:pt-3 md:pb-1 md:pr-2 min-h-[1.6em]" : "py-1 pr-4 md:py-2"
                }`}
                animatePresenceMode="popLayout"
                staggerFrom="first"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.03}
                splitLevelClassName={lang !== "en" ? "pb-3 pt-3 pr-3" : "overflow-hidden pb-1"}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h1>

          <p
            className="mt-6 max-w-[520px] font-body font-light leading-[1.75] text-[rgba(245,240,230,0.62)]"
            style={{ fontSize: "var(--text-body-lg)", animation: "pv-word-up 0.5s 0.9s both" }}
          >
            {dict.subHeadline}
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
              {dict.ctaJoin}
            </button>
            <button
              onClick={() => {
                scrollToAnchor("#services");
                track("button_click", { id: "hero_explore" });
              }}
              className="rounded-pill border-[1.5px] border-[rgba(245,240,230,0.2)] bg-transparent px-7 py-3.5 font-heading text-[15px] font-semibold text-rabi-dust transition-transform duration-200 hover:-translate-y-0.5 hover:border-[rgba(245,240,230,0.4)] active:scale-[0.97]"
            >
              {dict.ctaExplore}
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-16"
            style={{ animation: "pv-word-up 0.5s 1.25s both" }}
          >
            {dict.stats.map((s: any, i: number) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && (
                  <span className="hidden h-9 w-px bg-[rgba(245,240,230,0.12)] sm:block" />
                )}
                <div>
                  <div className="font-display text-[32px] font-bold leading-none tracking-tight text-rabi-dust md:text-[38px]">
                    {"static" in s ? (
                      s.static
                    ) : (
                      <CountUp end={i === 0 ? 4 : 3} suffix={i === 0 ? "" : "+"} />
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
            markers={markers}
            config={{
              globeColor: "#1b3a2d",
              atmosphereColor: "#0e1b12",
              atmosphereIntensity: 0.5,
              bumpScale: 2,
              autoRotateSpeed: 0.05,
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
