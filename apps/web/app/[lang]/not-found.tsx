import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-soil-deep px-6 text-center">
      <div className="font-heading text-[28px] font-bold text-rabi-dust">
        Prithvi<span className="text-harvest-amber">X</span>
      </div>
      <h1 className="mt-8 font-display text-[clamp(48px,12vw,96px)] font-bold leading-none text-harvest-amber">
        404
      </h1>
      <p className="mt-4 max-w-md font-body text-[16px] font-light text-[rgba(245,240,230,0.6)]">
        This page wandered off into the fields. Let&apos;s get you back to solid
        ground.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-pill bg-field-deep px-6 py-3 font-heading text-[15px] font-semibold text-rabi-dust transition-transform hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
        <Link
          href="/#register"
          className="rounded-pill border-[1.5px] border-[rgba(245,240,230,0.2)] px-6 py-3 font-heading text-[15px] font-semibold text-rabi-dust transition-colors hover:border-[rgba(245,240,230,0.4)]"
        >
          Register Interest
        </Link>
      </div>
    </main>
  );
}
