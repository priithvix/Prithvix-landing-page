"use client";

import { scrollToAnchor } from "@/lib/scroll";
import { track } from "@/components/Analytics";

/**
 * Anchor that performs Lenis smooth-scroll to an in-page section. Lets server
 * components link to sections without becoming client components themselves.
 * If `role` is set, it also tells the register form which role to pre-select.
 */
export function ScrollLink({
  href,
  role,
  className = "",
  style,
  children,
}: {
  href: string;
  role?: "farmer" | "dealer";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        if (role) {
          window.dispatchEvent(
            new CustomEvent("pv:set-role", { detail: role }),
          );
        }
        scrollToAnchor(href);
        track("button_click", { id: `scrolllink_${href}${role ? "_" + role : ""}` });
      }}
    >
      {children}
    </a>
  );
}
