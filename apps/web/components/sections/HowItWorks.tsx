"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionPill } from "@/components/ui/SectionPill";



export function HowItWorks({ dict }: { dict: any }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 80%"],
  });

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
        }}
      />
      <div className="container-x relative z-10">
        <div className="mx-auto mb-14 max-w-[560px] text-center">
          <Reveal>
            <SectionPill>{dict.pill}</SectionPill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-heading font-bold tracking-h2 text-charcoal-root"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {dict.heading}
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
          {dict.steps.map((s: any, i: number) => (
            <TimelineStep key={s.n} s={s} i={i} totalSteps={dict.steps.length} scrollYProgress={scrollYProgress} />
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
  s: { n: number; title: string; desc: string };
  i: number;
  totalSteps: number;
  scrollYProgress: MotionValue<number>;
}) {
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
