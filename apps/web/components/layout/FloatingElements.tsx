"use client";

import { useEffect, useState } from "react";
import { ChevronUp, X } from "lucide-react";
import { waLink } from "@/lib/site";
import { scrollToAnchor, scrollToTop } from "@/lib/scroll";
import { track } from "@/components/Analytics";

export function FloatingElements() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [barVisible, setBarVisible] = useState(true);
  const [atRegister, setAtRegister] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("pv_sticky_dismissed")) setBarVisible(false);

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const register = document.getElementById("register");
    let io: IntersectionObserver | undefined;
    if (register) {
      io = new IntersectionObserver(
        ([e]) => setAtRegister(e.isIntersecting),
        { threshold: 0.1 },
      );
      io.observe(register);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const dismissBar = () => {
    sessionStorage.setItem("pv_sticky_dismissed", "1");
    setBarVisible(false);
  };

  const showStickyBar = barVisible && !atRegister;

  return (
    <>
      {/* Reading progress bar */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[130] h-[3px] origin-left bg-harvest-amber"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      {/* WhatsApp FAB */}
      <a
        href={waLink("Hi, I found PrithviX and want to know more.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={() => track("button_click", { id: "whatsapp_fab" })}
        className="group fixed right-6 z-[90] grid h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] shadow-[var(--shadow-hover)] transition-transform hover:-translate-y-0.5"
        style={{ bottom: showStickyBar ? "148px" : "84px", transition: "bottom 0.3s ease" }}
      >
        <WhatsAppIcon />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-soil-deep px-3 py-1.5 font-body text-[12px] text-rabi-dust opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Chat with us
        </span>
      </a>

      {/* Back-to-top */}
      <button
        onClick={() => {
          scrollToTop();
          track("button_click", { id: "back_to_top" });
        }}
        aria-label="Back to top"
        className="fixed right-7 z-[89] grid h-11 w-11 place-items-center rounded-full border-[0.5px] border-[rgba(245,240,230,0.15)] bg-[rgba(14,27,18,0.7)] text-[rgba(245,240,230,0.7)] backdrop-blur-sm transition-opacity duration-300"
        style={{
          bottom: showStickyBar ? "88px" : "24px",
          opacity: showTop ? 1 : 0,
          pointerEvents: showTop ? "auto" : "none",
        }}
      >
        <ChevronUp size={16} />
      </button>

      {/* Sticky mobile CTA bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-[88] flex h-16 items-center gap-2 bg-field-deep px-4 md:hidden"
        style={{
          borderTop: "1px solid rgba(245,240,230,0.1)",
          transform: showStickyBar ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <button
          onClick={() => {
            scrollToAnchor("#register");
            track("button_click", { id: "sticky_register" });
          }}
          className="flex-1 font-heading text-[15px] font-semibold text-rabi-dust"
        >
          Register Free →
        </button>
        <button
          onClick={dismissBar}
          aria-label="Dismiss"
          className="grid h-10 w-10 place-items-center text-[rgba(245,240,230,0.6)]"
        >
          <X size={18} />
        </button>
      </div>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.18 8.18 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}
