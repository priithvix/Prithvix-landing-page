import { Target, Gauge, Link2, Sprout } from "lucide-react";
import { SectionPill } from "@/components/ui/SectionPill";
import { Reveal } from "@/components/ui/Reveal";

const ROWS = [
  {
    Icon: Target,
    title: "Built for Bharat",
    desc: "Designed specifically for India's agricultural markets - supports local languages, works on basic smartphones, and understands rural business models.",
  },
  {
    Icon: Gauge,
    title: "AI at the Core",
    desc: "Intelligent automation handles credit follow-ups, customer communication, and business insights - so you focus on farming and selling, not paperwork.",
  },
  {
    Icon: Link2,
    title: "One Ecosystem",
    desc: "Farmers, dealers, equipment owners, and labour all connected on one platform - with trust, transparency, and technology.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-x grid items-center gap-10 md:gap-16 lg:grid-cols-2">
        {/* Left - visual card */}
        <Reveal className="order-1">
          <div
            className="relative h-[280px] w-full overflow-hidden rounded-[24px] md:h-[460px] md:max-w-[520px]"
            style={{
              backgroundImage: "url('/images/about/img-05-aerial-field.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(27,58,45,0.82) 0%, rgba(14,36,25,0.70) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <Sprout size={52} className="mb-4 text-turmeric" strokeWidth={1.5} />
              <p className="font-heading text-[20px] font-bold leading-tight text-rabi-dust">
                Built for India&apos;s Agricultural Ecosystem
              </p>
            </div>
            <div
              className="absolute inset-x-5 bottom-5 px-4 py-3 text-center font-body text-[12px] font-bold text-turmeric"
            >
              Connecting Farmers · Dealers · Labourers across India
            </div>
          </div>
        </Reveal>

        {/* Right - text */}
        <div className="order-2">
          <Reveal>
            <SectionPill>Who We Are</SectionPill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-heading font-bold tracking-h2 text-charcoal-root"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Agriculture meets <span className="text-field-deep">Technology</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="mt-4 max-w-[480px] font-body font-light leading-[1.75] text-earth-brown"
              style={{ fontSize: "var(--text-body-lg)" }}
            >
              PrithviX is building the complete digital infrastructure for India&apos;s
              agri input ecosystem - from the dealer&apos;s shop to the farmer&apos;s field.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-col gap-7">
            {ROWS.map((r, i) => (
              <Reveal key={r.title} delay={0.12 * (i + 1)} className="flex gap-4">
                <div
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px]"
                  style={{ background: "rgba(27,58,45,0.08)" }}
                >
                  <r.Icon size={20} className="text-field-deep" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading text-[16px] font-semibold text-charcoal-root">
                    {r.title}
                  </h3>
                  <p className="mt-1 font-body text-[15px] font-light leading-[1.7] text-earth-brown">
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
