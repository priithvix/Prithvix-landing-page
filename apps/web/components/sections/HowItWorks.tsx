"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionPill } from "@/components/ui/SectionPill";

const STEPS = [
  {
    n: 1,
    title: "Register",
    desc: "Sign up as a Farmer, Dealer, Equipment Owner, or Labour Provider in under 2 minutes.",
  },
  {
    n: 2,
    title: "Set Up Profile",
    desc: "List your equipment, services, or products. Dealers set up their store and import their farmer database.",
  },
  {
    n: 3,
    title: "Connect",
    desc: "Farmers discover and book equipment, labour, and supplies. Dealers manage customers with AI tools.",
  },
  {
    n: 4,
    title: "Grow",
    desc: "AI handles follow-ups, reminders, and communication automatically while you focus on your work.",
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 80%"],
  });
  
  // inset(top right bottom left)
  // 100% top means everything is clipped. 0% means fully visible.
  // This reveals the image from the bottom up as you scroll!
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);

  return (
    <section ref={containerRef} id="how" className="section-pad relative overflow-hidden bg-rabi-dust">
      {/* 6% texture */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/og/img-06-sunrise-field.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.20,
          clipPath,
        }}
      />
      <div className="container-x relative z-10">
        <div className="mx-auto mb-14 max-w-[560px] text-center">
          <Reveal>
            <SectionPill>Simple Process</SectionPill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-heading font-bold tracking-h2 text-charcoal-root"
              style={{ fontSize: "var(--text-h2)" }}
            >
              How PrithviX Works
            </h2>
          </Reveal>
        </div>

        <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {/* desktop dashed connector */}
          <div
            aria-hidden
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed md:block"
            style={{ borderColor: "rgba(27,58,45,0.2)" }}
          />
          {STEPS.map((s, i) => (
            <TimelineStep key={s.n} s={s} i={i} totalSteps={STEPS.length} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineStep({
  s,
  i,
  totalSteps,
  scrollYProgress,
}: {
  s: (typeof STEPS)[0];
  i: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Stagger the start and end of each step based on its index.
  // Using a slightly wider window than exactly 1/4 so they overlap beautifully.
  const stepSize = 1 / totalSteps;
  const start = Math.max(0, i * stepSize - 0.1);
  const end = Math.min(1, start + stepSize + 0.1);

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [24, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="relative flex flex-col items-center pl-16 text-left md:items-center md:pl-0 md:text-center"
    >
      {/* mobile vertical connector */}
      {i < totalSteps - 1 && (
        <span
          aria-hidden
          className="absolute left-7 top-14 h-[calc(100%+2.5rem)] border-l-2 border-dashed md:hidden"
          style={{ borderColor: "rgba(27,58,45,0.2)" }}
        />
      )}
      <div
        className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full bg-field-deep md:relative"
        style={{ zIndex: 1 }}
      >
        <span className="font-display text-[20px] font-bold text-rabi-dust">
          {s.n}
        </span>
      </div>
      <h3 className="mt-0 font-heading text-[17px] font-semibold text-charcoal-root md:mt-5">
        {s.title}
      </h3>
      <p className="mt-2 max-w-[200px] font-body text-[14px] font-light leading-[1.65] text-earth-brown">
        {s.desc}
      </p>
    </motion.div>
  );
}
