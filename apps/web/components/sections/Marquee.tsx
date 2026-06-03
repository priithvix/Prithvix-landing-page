/**
 * Marquee ticker (PRD §4) - continuous right-to-left scroll, 22s linear, pauses
 * on hover. Content duplicated for a seamless loop.
 */


function Track({ dict }: { dict: string[] }) {
  return (
    <div className="flex shrink-0 items-center">
      {dict.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap pr-12">
          <span className="mr-3 text-turmeric">✦</span>
          <span className="font-body text-[13px] font-medium text-[rgba(245,240,230,0.82)]">
            {item}
          </span>
        </span>
      ))}
    </div>
  );
}

export function Marquee({ dict }: { dict: string[] }) {
  return (
    <div className="group flex h-12 items-center overflow-hidden bg-field-deep">
      <div
        className="flex w-max group-hover:[animation-play-state:paused]"
        style={{ animation: "pv-marquee 22s linear infinite" }}
      >
        <Track dict={dict} />
        <Track dict={dict} />
      </div>
    </div>
  );
}
