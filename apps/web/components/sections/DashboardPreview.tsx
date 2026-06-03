import { Reveal } from "@/components/ui/Reveal";
import { SectionPill } from "@/components/ui/SectionPill";
import { DashboardMock } from "./DashboardMock";
import { ScrollLink } from "@/components/ui/ScrollLink";



export function DashboardPreview({ dict }: { dict: any }) {
  return (
    <section id="dashboard" className="section-pad overflow-hidden bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[2fr_3fr]">
        {/* Left - text */}
        <div>
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
            <p className="mt-4 max-w-[440px] font-body text-[17px] font-light leading-[1.7] text-earth-brown">
              {dict.sub}
            </p>
          </Reveal>

          <div className="mt-6 flex flex-col gap-4">
            {dict.callouts.map((c: any, i: number) => (
              <Reveal key={c.title} delay={0.1 + i * 0.08} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-harvest-amber" />
                <div>
                  <span className="font-heading text-[15px] font-semibold text-charcoal-root">
                    {c.title}:
                  </span>{" "}
                  <span className="font-body text-[15px] font-light text-earth-brown">
                    {c.desc}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <ScrollLink
              href="#register"
              className="mt-6 inline-flex items-center gap-1 font-heading text-[14px] font-semibold text-field-deep transition-[gap] hover:gap-2"
            >
              {dict.link}
            </ScrollLink>
          </Reveal>
        </div>

        {/* Right - laptop mockup */}
        <Reveal delay={0.1}>
          <div style={{ perspective: "1600px" }}>
            <div className="mx-auto max-w-[640px]">
              <div
                style={{
                  transform: "rotateY(-6deg) rotateX(4deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* screen + bezel */}
                <div className="rounded-[14px] border-[8px] border-[#0d0d0f] bg-[#0d0d0f] shadow-[var(--shadow-hover)]">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-[6px] bg-white">
                    <DashboardMock />
                  </div>
                </div>
                {/* base */}
                <div className="mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-[10px] bg-gradient-to-b from-[#c8c8cc] to-[#9a9aa0]" />
                <div className="mx-auto h-1 w-[112%] -translate-x-[6%] rounded-b-[6px] bg-[#7c7c82]" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
