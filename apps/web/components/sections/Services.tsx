"use client";

import { Tractor, Users, BarChart3, ShoppingCart } from "lucide-react";
import { SectionPill } from "@/components/ui/SectionPill";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard, type Service } from "./ServiceCard";

const ICONS = [Tractor, Users, BarChart3, ShoppingCart];
const IMAGES = [
  "/images/services/img-01-tractor.webp",
  "/images/services/img-02-labour.webp",
  "/images/services/img-03-dealer-shop.webp",
  "/images/services/img-04-farmer-phone.webp"
];
const ACCENTS = [
  "var(--color-field-deep)",
  "var(--color-harvest-amber)",
  "var(--color-amber-deep)",
  "var(--color-field-mid)"
];
const LINK_COLORS = [
  "var(--color-turmeric)",
  "var(--color-harvest-amber)",
  "var(--color-turmeric)",
  "var(--color-turmeric)"
];

export function Services({ dict }: { dict: any }) {
  return (
    <section id="services" className="section-pad bg-rabi-dust">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-[560px] text-center">
          <Reveal>
            <SectionPill>{dict.pill}</SectionPill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-heading font-bold tracking-h2 text-charcoal-root"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {dict.heading} <span className="text-field-deep">{dict.headingHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-3 max-w-[520px] font-body text-[17px] font-light text-earth-brown">
              {dict.sub}
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-24 md:gap-32 mt-16">
          {dict.items.map((s: any, i: number) => {
            const mappedService: Service = {
              ...s,
              Icon: ICONS[i],
              image: IMAGES[i],
              accent: ACCENTS[i],
              linkColor: LINK_COLORS[i],
              href: "#register",
              position: i === 1 ? "center top" : undefined,
            };
            return (
              <ServiceCard key={s.title} service={mappedService} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
