/**
 * Smooth-scroll to an in-page anchor using Lenis when available, falling back
 * to native scrollIntoView. Accounts for the fixed nav + announcement bar
 * via a scroll offset.
 */
const SCROLL_OFFSET = -68; // nav height; sections clear the fixed header

export function scrollToAnchor(hash: string): void {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = typeof window !== "undefined" ? window.__lenis : undefined;
  if (lenis) {
    lenis.scrollTo(el, { offset: SCROLL_OFFSET, duration: 1.2 });
  } else {
    const top =
      el.getBoundingClientRect().top + window.scrollY + SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function scrollToTop(): void {
  const lenis = typeof window !== "undefined" ? window.__lenis : undefined;
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
