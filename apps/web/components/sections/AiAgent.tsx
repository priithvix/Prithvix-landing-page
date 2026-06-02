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

const CARDS: Card[] = [
  {
    Icon: Phone,
    title: "AI Voice Calling Agent",
    desc: "Automatically calls farmers for credit repayment reminders, follow-ups, and order confirmations. Speaks in their local language. Works 24/7 without a human.",
    image: {
      src: "/images/ai-section/img-09-farmer-call.webp",
      alt: "Indian farmer taking a phone call at the edge of a farm field",
    },
  },
  {
    Icon: MessageCircle,
    title: "WhatsApp AI Agent",
    desc: "One AI agent handles hundreds of customers for multiple dealers simultaneously. Sends reminders, answers questions, collects data - all on WhatsApp.",
    image: {
      src: "/images/ai-section/img-10-whatsapp-hands.webp",
      alt: "Farmer's hands holding an Android phone with WhatsApp open",
    },
  },
  {
    Icon: Languages,
    title: "Multilingual Support",
    desc: "Speaks and understands Hindi, Gujarati, Marathi, Telugu, and more. No language barrier between your business and your customers.",
  },
  {
    Icon: NotebookPen,
    title: "Smart Data Collection",
    desc: "AI asks the right questions, records answers, and automatically updates your CRM. No manual data entry after every call or conversation.",
  },
];

export function AiAgent() {
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
              Your Business Runs on{" "}
              <PointerHighlight>
                <span
                  className="inline-block px-1"
                  style={{
                    color: "var(--color-charcoal-root)",
                  }}
                >
                  Autopilot
                </span>
              </PointerHighlight>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-[460px] font-body text-[17px] font-light leading-[1.7]" style={{ color: "rgba(245,240,230,0.58)" }}>
              PrithviX&apos;s AI agents handle your communication 24/7 - calling
              customers, sending WhatsApp reminders, and collecting information.
              No human operator needed.
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
              Get Early Access
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
                  “A vision to Enable and Empower the Dealers and Farmers of India.”
                </blockquote>
                <p className="mt-2 font-heading text-[14px] font-semibold text-rabi-dust">
                  Founder
                </p>
                <p className="font-body text-[12px] text-[rgba(245,240,230,0.45)]">
                  PrithviX
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right - 4 glass cards */}
        <div className="flex flex-col gap-3.5">
          {CARDS.map((c, i) => (
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
                <c.Icon size={26} className="mb-2 text-turmeric" strokeWidth={1.75} />
                <h3 className="mb-1.5 font-heading text-[16px] font-semibold" style={{ color: "var(--color-rabi-dust)" }}>
                  {c.title}
                </h3>
                <p className="font-body text-[13px] font-light leading-[1.6]" style={{ color: "rgba(245,240,230,0.5)" }}>
                  {c.desc}
                </p>
              </div>
              {c.image && (
                <div className="order-1 h-[160px] w-full overflow-hidden rounded-xl md:order-2 md:h-[100px] md:w-[100px]">
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    width={280}
                    height={210}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ filter: "saturate(0.85) brightness(0.9)" }}
                  />
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
