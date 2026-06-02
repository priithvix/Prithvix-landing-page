import { Reveal } from "@/components/ui/Reveal";
import { SectionPill } from "@/components/ui/SectionPill";
import { ScrollLink } from "@/components/ui/ScrollLink";

const CARDS = [
  {
    role: "farmer" as const,
    title: "For Farmers",
    sub: "Access everything you need to farm smarter.",
    image: "/images/sections/img-07-farmer-portrait.webp",
    position: "center top",
    cta: "Join as Farmer →",
    items: [
      "Rent tractors & machinery near you",
      "Hire skilled farm labour on demand",
      "Buy agri inputs online from trusted dealers",
      "Get AI-powered crop & service support",
      "Track your orders & bookings in one app",
      "Pay digitally - safe & transparent",
    ],
  },
  {
    role: "dealer" as const,
    title: "For Dealers",
    sub: "Manage your agri input business digitally.",
    image: "/images/sections/img-08-dealer-portrait.webp",
    position: "center",
    cta: "Join as Dealer →",
    items: [
      "Full ERP & CRM for your shop",
      "Launch your own online store",
      "AI calls farmers for credit recovery",
      "WhatsApp agent handles customer queries",
      "Track inventory, sales & ledgers",
      "Reach farmers across your entire district",
    ],
  },
];

export function WhoFor() {
  return (
    <section id="who" className="section-pad bg-white">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-[560px] text-center">
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-heading font-bold tracking-h2 text-charcoal-root"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Built for Farmers &amp; Dealers
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal
              key={c.role}
              delay={i * 0.1}
              className="relative min-h-[360px] overflow-hidden rounded-[24px] md:min-h-[440px]"
              style={{
                backgroundImage: `url('${c.image}')`,
                backgroundSize: "cover",
                backgroundPosition: c.position,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(14,27,18,0.60) 0%, rgba(14,27,18,0.88) 60%, rgba(14,27,18,0.95) 100%)",
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-10">
                <h3 className="font-display text-[30px] font-bold text-rabi-dust">
                  {c.title} 
                </h3>
                <p className="mt-1 font-body text-[15px] font-light text-[rgba(245,240,230,0.6)]">
                  {c.sub}
                </p>
                <ul className="mt-5 mb-6 flex flex-col gap-2">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 font-body text-[15px] leading-snug text-[rgba(245,240,230,0.85)]"
                    >
                      <span className="font-bold text-turmeric">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <ScrollLink
                  href="#register"
                  role={c.role}
                  className="inline-flex w-fit rounded-pill border-[0.5px] border-[rgba(245,240,230,0.2)] bg-[rgba(245,240,230,0.1)] px-5 py-2.5 font-heading text-[14px] font-semibold text-rabi-dust transition-colors hover:bg-[rgba(245,240,230,0.18)]"
                >
                  {c.cta}
                </ScrollLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
