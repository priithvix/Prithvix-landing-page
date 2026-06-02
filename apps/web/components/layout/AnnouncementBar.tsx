"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Thin top bar above the nav (PRD §1.5). Rotates 3 messages every 4s with a
 * fade. Dismissible - stays hidden 24h via localStorage.
 */
const MESSAGES = [
  "Early registrations open - founding member pricing available",
  "Register now for priority access",
  `Questions? WhatsApp us: ${SITE.whatsapp.display}`,
];

const DISMISS_KEY = "pv_announce_dismissed_until";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    try {
      const dismissedUntil = localStorage.getItem(DISMISS_KEY);
      if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
        return;
      }
    } catch {}
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % MESSAGES.length), 4000);
    return () => clearInterval(t);
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      const until = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(DISMISS_KEY, until.toString());
    } catch {}
  };

  return (
    <div
      id="announce"
      className="relative z-[110] flex h-10 items-center justify-center bg-field-deep px-10 text-center"
    >
      <p
        key={idx}
        className="font-body text-[12px] font-normal text-[rgba(245,240,230,0.88)]"
        style={{ animation: "pv-fade 0.6s ease" }}
      >
        {MESSAGES[idx]}
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 grid h-8 w-8 place-items-center text-[rgba(245,240,230,0.7)] transition-colors hover:text-rabi-dust"
      >
        <X size={16} />
      </button>
      <style>{`@keyframes pv-fade { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
}
