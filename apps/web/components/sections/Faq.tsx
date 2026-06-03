"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionPill } from "@/components/ui/SectionPill";
import { Reveal } from "@/components/ui/Reveal";



export function Faq({ dict }: { dict: any }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-dry-grass">
      <div className="container-x">
        <div className="mx-auto mb-10 max-w-[720px] text-center">
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

        <div className="mx-auto max-w-[720px] overflow-hidden rounded-lg border-[0.5px] border-field-stone bg-white">
          {dict.items.map((item: any, i: number) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b-[0.5px] border-field-stone last:border-0"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-rabi-dust md:px-6"
                >
                  <span className="font-heading text-[16px] font-semibold text-charcoal-root">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-field-deep transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3 px-5 pb-5 md:px-6">
                      {item.a.map((p: string, pi: number) => (
                        <p
                          key={pi}
                          className="font-body text-[15px] font-light leading-[1.7] text-earth-brown"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
