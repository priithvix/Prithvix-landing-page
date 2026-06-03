import { Reveal } from "@/components/ui/Reveal";
import { SectionPill } from "@/components/ui/SectionPill";
import { ScrollLink } from "@/components/ui/ScrollLink";

const IMAGES = [
  "/images/sections/img-07-farmer-portrait.webp",
  "/images/sections/img-08-dealer-portrait.webp"
];
const ROLES: ("farmer" | "dealer")[] = ["farmer", "dealer"];
const POSITIONS = ["center top", "center"];

export function WhoFor({ dict }: { dict: any }) {
  return (
    <section id="who" className="section-pad bg-white">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-[560px] text-center">
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-heading font-bold tracking-h2 text-charcoal-root"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {dict.heading}
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {dict.cards.map((c: any, i: number) => (
            <Reveal
              key={ROLES[i]}
              delay={i * 0.1}
              className="flex flex-col"
            >
              <h3 className="mb-4 text-center font-display text-[26px] md:text-[30px] font-bold text-harvest-amber">
                {c.title}
              </h3>
              <div
                className="relative min-h-[360px] flex-1 overflow-hidden rounded-[24px] md:min-h-[440px]"
                style={{
                  backgroundImage: `url('${IMAGES[i]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: POSITIONS[i],
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
                  <p className="font-body text-[15px] font-light text-[rgba(245,240,230,0.6)]">
                    {c.sub}
                  </p>
                  <ul className="mt-4 mb-2 flex flex-col gap-2">
                    {c.items.map((item: string) => (
                      <li
                        key={item}
                        className="flex gap-2 font-body text-[15px] leading-snug text-[rgba(245,240,230,0.85)]"
                      >
                        <span className="font-bold text-turmeric">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ScrollLink
                href="#register"
                role={ROLES[i]}
                className="mt-6 mx-auto inline-flex w-fit rounded-pill px-7 py-3.5 font-heading text-[15px] font-semibold transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
                style={{
                  backgroundColor: "var(--color-soil-deep)",
                  color: "var(--color-harvest-amber)",
                }}
              >
                {c.cta}
              </ScrollLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
