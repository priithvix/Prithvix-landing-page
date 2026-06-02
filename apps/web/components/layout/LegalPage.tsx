import Link from "next/link";

/** Shared shell for the placeholder legal pages (Privacy, Terms). */
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-rabi-dust">
      <header className="bg-soil-deep">
        <div className="container-x flex h-[68px] items-center">
          <Link href="/" className="font-heading text-[22px] font-bold text-rabi-dust">
            Prithvi<span className="text-harvest-amber">X</span>
          </Link>
        </div>
      </header>
      <article className="container-x max-w-[760px] py-16">
        <h1 className="font-heading text-[clamp(28px,4vw,40px)] font-bold tracking-h2 text-charcoal-root">
          {title}
        </h1>
        <div className="mt-6 flex flex-col gap-4 font-body text-[15px] font-light leading-[1.75] text-earth-brown">
          {children}
        </div>
        <Link
          href="/"
          className="mt-10 inline-flex font-heading text-[14px] font-semibold text-field-deep"
        >
          ← Back to Home
        </Link>
      </article>
    </main>
  );
}
