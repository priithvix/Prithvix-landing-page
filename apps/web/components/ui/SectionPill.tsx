/**
 * "Split Pill with Accent Block" - the small uppercase section tag that sits
 * above each section heading (PRD: About "Who We Are", Services "What We Offer",
 * etc.). Three variants for the different section backgrounds.
 */
type Variant = "light" | "amber" | "onDark";

const styles: Record<Variant, string> = {
  // light sections (About, Services, Who, How)
  light:
    "bg-[rgba(27,58,45,0.08)] text-field-deep border border-transparent",
  // amber-accent (AI section, hero)
  amber:
    "bg-[rgba(245,158,11,0.12)] text-turmeric border border-[rgba(245,158,11,0.3)]",
  // on the dark green register section
  onDark:
    "bg-[rgba(245,240,230,0.12)] text-[rgba(245,240,230,0.8)] border border-transparent",
};

export function SectionPill({
  children,
  variant = "light",
  className = "",
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-pill px-3.5 py-1.5 text-xs font-semibold uppercase tracking-label font-body ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
