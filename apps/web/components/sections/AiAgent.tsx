import Image from "next/image";
import { Phone, MessageCircle, Languages, NotebookPen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionPill } from "@/components/ui/SectionPill";
import { ScrollLink } from "@/components/ui/ScrollLink";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

type Card = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  image?: { src: string; alt: string };
};

const ICONS = [Phone, MessageCircle, Languages, NotebookPen];
const IMAGES = [
  {
    src: "/images/ai-section/img-09-farmer-call.webp",
    alt: "Indian farmer taking a phone call at the edge of a farm field",
  },
  {
    src: "/images/ai-section/img-10-whatsapp-hands.webp",
    alt: "Farmer's hands holding an Android phone with WhatsApp open",
  },
  undefined,
  undefined
];

export function AiAgent({ dict, lang }: { dict: any; lang?: string }) {
  return (
    <section id="ai" className="section-pad relative overflow-hidden bg-field-deep">

      <div className="container-x relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* Left - text */}
        <div>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-display font-bold leading-[1.1] tracking-h2"
              style={{ fontSize: "var(--text-h2)", color: "var(--color-rabi-dust)" }}
            >
              {dict.headingPrefix}{" "}
              <PointerHighlight>
                <span
                  className={`inline-block px-1 ${
                    lang === "hi" || lang === "gu" ? "py-1.5" : ""
                  }`}
                  style={{
                    color: "var(--color-charcoal-root)",
                  }}
                >
                  {dict.headingSuffix}
                </span>
              </PointerHighlight>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[460px] font-body text-[17px] font-light leading-[1.7]" style={{ color: "rgba(245,240,230,0.58)" }}>
              {dict.sub}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <ScrollLink
              href="#register"
              className="mt-6 inline-flex rounded-pill px-7 py-3.5 font-heading text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97] animate-[pv-pulse-amber_1.5s_ease-in-out_infinite]"
              style={{
                backgroundColor: "var(--color-soil-deep)",
                color: "var(--color-harvest-amber)",
              }}
            >
              {dict.cta}
            </ScrollLink>
          </Reveal>

          {/* Founder quote card */}
          <Reveal delay={0.25}>
            <div
              className="mt-8 flex items-start gap-4 rounded-2xl border-[0.5px] p-5"
              style={{
                background: "rgba(245,240,230,0.05)",
                borderColor: "rgba(245,240,230,0.12)",
              }}
            >
              <span
                className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full font-heading text-[16px] font-bold text-rabi-dust"
                style={{
                  background: "rgba(245,158,11,0.18)",
                  border: "2px solid rgba(245,158,11,0.4)",
                }}
              >
                PX
              </span>
              <div>
                <blockquote className="font-display text-[16px] italic leading-[1.6] text-[rgba(245,240,230,0.85)]">
                  {dict.quote}
                </blockquote>
                <p className="mt-2 font-heading text-[14px] font-semibold text-rabi-dust">
                  {dict.quoteAuthor}
                </p>
                <p className="font-body text-[12px] text-[rgba(245,240,230,0.45)]">
                  {dict.quoteCompany}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right - 4 glass cards */}
        <div className="flex flex-col gap-3.5">
          {dict.cards.map((c: any, i: number) => {
            const Icon = ICONS[i];
            const image = IMAGES[i];
            return (
              <Reveal
                key={c.title}
                delay={0.08 * i}
                className="group grid grid-cols-1 items-center gap-4 rounded-2xl border-[0.5px] p-6 transition-colors duration-200 md:grid-cols-[1fr_auto]"
                style={{
                  background: "rgba(245,240,230,0.04)",
                  borderColor: "rgba(245,240,230,0.10)",
                }}
              >
                <div className="order-2 md:order-1">
                  <Icon size={26} className="mb-2 text-turmeric" strokeWidth={1.75} />
                  <h3 className="mb-1.5 font-heading text-[16px] font-semibold" style={{ color: "var(--color-rabi-dust)" }}>
                    {c.title}
                  </h3>
                  <p className="font-body text-[13px] font-light leading-[1.6]" style={{ color: "rgba(245,240,230,0.5)" }}>
                    {c.desc}
                  </p>
                </div>
                {image && (
                  <div className="order-1 h-[160px] w-full overflow-hidden rounded-xl md:order-2 md:h-[100px] md:w-[100px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={280}
                      height={210}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ filter: "saturate(0.85) brightness(0.9)" }}
                    />
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
