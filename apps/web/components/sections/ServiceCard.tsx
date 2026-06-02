"use client";

import type { LucideIcon } from "lucide-react";
import { scrollToAnchor } from "@/lib/scroll";
import { Reveal } from "@/components/ui/Reveal";

export type Service = {
  number: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
  linkText: string;
  linkColor: string;
  href: string;
  image: string;
  accent: string;
  position?: string;
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isReversed = index % 2 === 1;
  const sectionId = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div id={sectionId} className={`flex flex-col gap-10 md:gap-16 lg:gap-24 items-center ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <Reveal delay={0.1}>
          <span className="mb-3 block font-heading text-[12px] font-semibold uppercase tracking-[0.1em] text-harvest-amber">
            {service.number.split(" - ")[1] || service.number}
          </span>
          <h3 className="mb-4 font-heading text-[32px] md:text-[40px] font-bold tracking-tight text-charcoal-root leading-tight">
            {service.title}
          </h3>
          <p className="mb-8 font-body text-[16px] md:text-[18px] font-light leading-[1.65] text-earth-brown">
            {service.desc}
          </p>

          <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {service.features.map((f) => (
              <li key={f} className="flex gap-3 text-[14px] font-light text-charcoal-root items-start">
                <span className="text-field-deep mt-0.5 shrink-0">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToAnchor(service.href)}
            className="inline-flex items-center gap-2 font-heading text-[15px] font-semibold transition-[gap] hover:gap-3 text-field-deep group"
          >
            {service.linkText} <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </Reveal>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2">
        <Reveal delay={0.2} direction={isReversed ? "left" : "right"}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_20px_40px_-15px_rgba(20,13,7,0.15)] border border-[rgba(20,13,7,0.05)] bg-sand">
            <div
              className="absolute inset-0 transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url('${service.image}')`,
                backgroundSize: "cover",
                backgroundPosition: service.position ?? "center",
              }}
            />
          </div>
        </Reveal>
      </div>

    </div>
  );
}
