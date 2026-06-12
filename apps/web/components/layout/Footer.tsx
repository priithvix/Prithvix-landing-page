"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { scrollToAnchor } from "@/lib/scroll";
import Link from "next/link";

/* lucide removed brand icons in recent versions - use inline brand SVGs */
function WhatsAppGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91a9.86 9.86 0 0 0-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.52 11.97c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>

  );
}
function InstagramGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedInGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.5H5.86v7.5h2.48zM7.1 9.81a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88zm11.24 8.53v-4.11c0-2.2-1.18-3.22-2.74-3.22-1.27 0-1.83.7-2.15 1.19v-1.02h-2.48c.03.7 0 7.5 0 7.5h2.48v-4.19c0-.22.02-.45.08-.6.18-.45.59-.91 1.28-.91.9 0 1.27.69 1.27 1.69v4.01h2.48z" />
    </svg>
  );
}

export function Footer({ dict }: { dict?: any }) {
  const year = new Date().getFullYear();

  // If dict is not provided (e.g. from tests), fallback to English
  const d = dict || {
    empowering: "Empowering India's agricultural ecosystem with technology. Built for farmers, dealers, and the entire agri value chain.",
    services: { heading: "Services", traceability: "Traceability", soilQuality: "Soil Quality", labourServices: "Labour Services", dealerErp: "Dealer ERP & CRM", onlineStore: "Online Store", aiAgent: "AI Agent" },
    company: { heading: "Company", aboutUs: "About Us", ourMission: "Our Mission", careers: "Careers", blog: "Blog", press: "Press" },
    contact: { heading: "Contact", whatsappUs: "WhatsApp Us", privacyPolicy: "Privacy Policy", termsOfUse: "Terms of Use" },
    copyright: "© {year} PrithviX. All rights reserved. Made with ❤️ for Bharat's farmers."
  };

  const SERVICES = [
    { label: d.services.machineryRental, href: "#machinery-rental" },
    { label: d.services.labourServices, href: "#labour-services" },
    { label: d.services.dealerErp, href: "#dealer-erp-crm" },
    { label: d.services.onlineStore, href: "#online-store-for-dealers" },
    { label: d.services.aiAgent, href: "#ai" },
  ];
  const COMPANY = [
    { label: d.company.aboutUs, href: "#about" },
    { label: d.company.ourMission, href: "#mission" },
    { label: d.company.careers, href: "#careers" },
    { label: d.company.blog, href: "#blog" },
    { label: d.company.press, href: "#press" },
  ];

  const linkClass = "font-body text-[14px] text-left pv-footer-link";
  const headingClass = "font-body text-[11px] font-semibold uppercase tracking-[0.08em] pv-footer-heading";

  function Column({
    heading,
    children,
  }: {
    heading: string;
    children: React.ReactNode;
  }) {
    const [open, setOpen] = useState(false);
    return (
      <div className="border-b border-[rgba(245,240,230,0.07)] py-3 md:border-0 md:py-0">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between md:pointer-events-none md:mb-4"
          aria-expanded={open}
        >
          <span className={headingClass}>{heading}</span>
          <ChevronDown
            size={16}
            className="text-rabi-dust opacity-60 transition-transform md:hidden"
            style={{ transform: open ? "rotate(180deg)" : "none" }}
          />
        </button>
        <div
          className="grid transition-[grid-template-rows] duration-300 md:!grid-rows-[1fr]"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden md:overflow-visible">
            <div className="flex flex-col gap-2.5 pt-3 md:pt-0">{children}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <footer className="relative w-full min-h-[40vh] overflow-hidden bg-soil-deep pt-[72px]">
      {/* Massive Watermark Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <span 
          style={{ fontFamily: "var(--font-playfair), serif" }}
          className="text-[20vw] font-bold tracking-normal whitespace-nowrap text-harvest-amber/5"
        >
          PRITHVIX
        </span>
      </div>

      <div className="container-x relative z-10">
        <div className="grid gap-x-8 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="mb-8 md:mb-0">
            <div className="font-heading text-[22px] font-bold text-rabi-dust">
              Prithvi<span className="text-harvest-amber">X</span>
            </div>
            <p className="mt-3 max-w-[280px] font-body text-[14px] font-light leading-[1.7] text-rabi-dust opacity-70">
              {d.empowering}
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={waLink("Hi, I found PrithviX and want to know more.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={linkClass}
              >
                <span className="sr-only">WhatsApp</span>
                <WhatsAppGlyph />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className={linkClass}
              >
                <span className="sr-only">Instagram</span>
                <InstagramGlyph />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className={linkClass}
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedInGlyph />
              </a>
            </div>
          </div>

          {/* Services */}
          <Column heading={d.services.heading}>
            {SERVICES.map((s) => (
              <button key={s.label} className={linkClass} onClick={() => scrollToAnchor(s.href)}>
                {s.label}
              </button>
            ))}
          </Column>

          {/* Company */}
          <Column heading={d.company.heading}>
            {COMPANY.map((c) => (
              <button key={c.label} className={linkClass} onClick={() => scrollToAnchor(c.href)}>
                {c.label}
              </button>
            ))}
          </Column>

          {/* Contact */}
          <Column heading={d.contact.heading}>
            <address className="font-body text-[14px] text-left text-[rgba(245,240,230,0.6)] not-italic leading-[1.6] mb-2">
              Incubation Centre,<br />
              Nirma University, SG Highway,<br />
              Ahmedabad, Gujarat 382481
            </address>
            <a className={linkClass} href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <a
              className={linkClass}
              href={waLink("Hi, I found PrithviX and want to know more.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.contact.whatsappUs}
            </a>
            <Link className={linkClass} href="/privacy">
              {d.contact.privacyPolicy}
            </Link>
            <Link className={linkClass} href="/terms">
              {d.contact.termsOfUse}
            </Link>
          </Column>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-2 py-6 text-center md:flex-row md:text-left">
          <p className="font-body text-[12px] text-rabi-dust opacity-40">
            {d.copyright.replace('{year}', year.toString())}
          </p>
          <p className="font-body text-[12px] text-rabi-dust opacity-40">
            {SITE.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
