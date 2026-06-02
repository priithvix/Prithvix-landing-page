"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { scrollToAnchor, scrollToTop } from "@/lib/scroll";
import { track } from "@/components/Analytics";

// sections to watch for the active-link indicator
const WATCH = ["home", "about", "services", "ai", "register"];

export function Navbar({ dict, lang }: { dict: any; lang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const LANGUAGES = ["en", "hi", "gu"];
  const LANG_LABELS: Record<string, string> = { en: "ENGLISH", hi: "हिंदी", gu: "ગુજરાતી" };

  const LINKS = [
    { label: dict.about, href: "#about" },
    { label: dict.services, href: "#services" },
    { label: dict.aiAgent, href: "#ai" },
    { label: dict.contact, href: "#register" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    WATCH.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", menuOpen);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    scrollToAnchor(href);
    track("button_click", { id: `nav_${href}` });
  };

  const isActiveLink = (href: string) =>
    (href === "#register" && active === "register") ||
    href.slice(1) === active;

  const handleLanguageChange = (newLang: string) => {
    track("language_change", { language: newLang });
    if (!pathname) return;
    const pathParts = pathname.split('/');
    if (LANGUAGES.includes(pathParts[1])) {
      pathParts[1] = newLang;
    } else {
      pathParts.splice(1, 0, newLang);
    }
    router.push(pathParts.join('/') || '/');
  };

  return (
    <nav
      className="transition-colors duration-300"
      style={{
        height: "var(--nav-h, 68px)",
        background: scrolled ? "rgba(245,240,230,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid var(--color-sand)" : "0.5px solid transparent",
      }}
    >
      <div className="container-x flex h-full items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            scrollToTop();
            track("button_click", { id: "logo" });
          }}
          className="font-heading text-[22px] font-bold tracking-tight"
          style={{ color: scrolled ? "var(--color-charcoal-root)" : "var(--color-rabi-dust)" }}
        >
          Prithvi<span className="text-harvest-amber">X</span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="group relative font-heading text-[15px] font-medium transition-colors"
              style={{
                color: isActiveLink(l.href)
                  ? "var(--color-field-deep)"
                  : scrolled
                    ? "var(--color-earth-brown)"
                    : "rgba(245,240,230,0.85)",
              }}
            >
              {l.label}
              <span
                className="absolute -bottom-1.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-field-deep transition-transform duration-200"
                style={{ transform: `translateX(-50%) scale(${isActiveLink(l.href) ? 1 : 0})` }}
              />
            </button>
          ))}
        </div>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div 
            className="hidden items-center rounded-pill border p-[3px] lg:flex"
            style={{
              borderColor: scrolled ? "var(--color-sand)" : "rgba(245,240,230,0.2)",
            }}
          >
            {LANGUAGES.map((l) => (
              <button
                key={l}
                onClick={() => handleLanguageChange(l)}
                className={`rounded-pill px-4 py-1.5 font-heading text-[13px] font-medium transition-all ${
                  lang === l ? "shadow-sm" : "hover:opacity-70"
                }`}
                style={{
                  backgroundColor: lang === l 
                    ? (scrolled ? "var(--color-field-deep)" : "var(--color-rabi-dust)")
                    : "transparent",
                  color: lang === l
                    ? (scrolled ? "var(--color-rabi-dust)" : "var(--color-field-deep)")
                    : (scrolled ? "var(--color-earth-brown)" : "rgba(245,240,230,0.85)"),
                  letterSpacing: l === "en" ? "0.08em" : "0",
                }}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>

          <button
            onClick={() => go("#register")}
            className="rounded-pill bg-field-deep px-[22px] py-2.5 font-heading text-[14px] font-semibold text-rabi-dust transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            {dict.registerInterest}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid h-12 w-12 place-items-center md:hidden"
            style={{ color: scrolled ? "var(--color-charcoal-root)" : "var(--color-rabi-dust)" }}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-[120] flex flex-col bg-[rgba(14,27,18,0.96)] backdrop-blur-sm transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden"
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(100%)" }}
        aria-hidden={!menuOpen}
      >
        <div className="container-x flex h-[60px] items-center justify-between">
          <span className="font-heading text-[22px] font-bold text-rabi-dust">
            Prithvi<span className="text-harvest-amber">X</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="grid h-12 w-12 place-items-center text-rabi-dust"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-6 px-8">
          {LINKS.map((l, i) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-left font-heading text-[28px] font-bold text-rabi-dust"
              style={{
                animation: menuOpen ? "pv-word-up 0.4s both" : "none",
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {l.label}
            </button>
          ))}
          
          {/* Mobile Language Switcher */}
          <div 
            className="mt-4 flex flex-wrap items-center gap-2"
            style={{
              animation: menuOpen ? "pv-word-up 0.4s both" : "none",
              animationDelay: `${LINKS.length * 0.08}s`,
            }}
          >
            {LANGUAGES.map((l) => (
              <button
                key={`mobile-${l}`}
                onClick={() => handleLanguageChange(l)}
                className={`rounded-pill px-5 py-2 font-heading text-[14px] font-medium transition-all ${
                  lang === l 
                    ? "bg-rabi-dust text-field-deep shadow-sm" 
                    : "border border-[rgba(245,240,230,0.2)] text-rabi-dust hover:opacity-70"
                }`}
                style={{
                  letterSpacing: l === "en" ? "0.08em" : "0",
                }}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
