/**
 * Marquee ticker (PRD §4) - continuous right-to-left scroll, 22s linear, pauses
 * on hover. Content duplicated for a seamless loop.
 */
const ITEMS = [
  "Machinery Rental",
  "Labour Services",
  "Dealer ERP & CRM",
  "Online Store for Dealers",
  "AI Calling Agent",
  "WhatsApp AI Agent",
  "Credit Reminders",
  "Multi-Dealer Platform",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item, i) => (
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

export function Marquee() {
  return (
    <div className="group flex h-12 items-center overflow-hidden bg-field-deep">
      <div
        className="flex w-max group-hover:[animation-play-state:paused]"
        style={{ animation: "pv-marquee 22s linear infinite" }}
      >
        <Track />
        <Track />
      </div>
    </div>
  );
}
