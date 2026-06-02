"use client";

import { Tractor, Users, BarChart3, ShoppingCart } from "lucide-react";
import { SectionPill } from "@/components/ui/SectionPill";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard, type Service } from "./ServiceCard";

const SERVICES: Service[] = [
  {
    number: "01 - RENTAL",
    Icon: Tractor,
    title: "Machinery Rental",
    desc: "Farmers can rent tractors, harvesters, sprayers, and other equipment by the day. Equipment owners earn from idle machinery.",
    features: [
      "List your equipment in minutes",
      "Rent by day, week, or season",
      "Verified equipment owners",
      "Location-based discovery",
      "Secure payments & booking",
    ],
    linkText: "List your equipment",
    linkColor: "var(--color-turmeric)",
    href: "#register",
    image: "/images/services/img-01-tractor.webp",
    accent: "var(--color-field-deep)",
  },
  {
    number: "02 - LABOUR",
    Icon: Users,
    title: "Labour Services",
    desc: "Need workers for sowing, harvesting, or field work? PrithviX connects verified farm labourers directly to farmers who need them on-demand.",
    features: [
      "Verified skilled farm workers",
      "Book by day or season",
      "Transparent pricing",
      "Rated & reviewed workers",
      "Available across districts",
    ],
    linkText: "Find workers near you",
    linkColor: "var(--color-harvest-amber)",
    href: "#register",
    image: "/images/services/img-02-labour.webp",
    accent: "var(--color-harvest-amber)",
    position: "center top",
  },
  {
    number: "03 - ERP & CRM",
    Icon: BarChart3,
    title: "Dealer ERP & CRM",
    desc: "Complete business management for agri input dealers. Track inventory, manage credit, handle farmer relationships, and automate payment follow-ups - all in one place.",
    features: [
      "Farmer CRM & QR lookup",
      "Sales, billing & GST invoices",
      "Udhaar (credit) management",
      "Inventory & batch tracking",
      "Daily close & analytics",
      "Statutory compliance registers",
      "WhatsApp orders & broadcast",
      "AI crop advisory",
      "Schemes & crop calendar",
      "Staff roles & permissions",
      "Region-wise sales reports",
      "Full Tally-style accounting & GST ERP",
      "Purchase, banking & reconciliation",
      "One shared database - no double entry",
    ],
    linkText: "Manage your business",
    linkColor: "var(--color-turmeric)",
    href: "#register",
    image: "/images/services/img-03-dealer-shop.webp",
    accent: "var(--color-amber-deep)",
  },
  {
    number: "04 - E-COMMERCE",
    Icon: ShoppingCart,
    title: "Online Store for Dealers",
    desc: "Agri input dealers can launch their own digital storefront in minutes. Sell seeds, fertilizers, pesticides, and equipment online - reach farmers beyond your local area.",
    features: [
      "Your own branded online store",
      "Product catalogue management",
      "Online orders & payments",
      "Delivery tracking",
      "WhatsApp order notifications",
    ],
    linkText: "Launch your store",
    linkColor: "var(--color-turmeric)",
    href: "#register",
    image: "/images/services/img-04-farmer-phone.webp",
    accent: "var(--color-field-mid)",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-rabi-dust">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-[560px] text-center">
          <Reveal>
            <SectionPill>What We Offer</SectionPill>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="mt-5 font-heading font-bold tracking-h2 text-charcoal-root"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Four Powerful <span className="text-field-deep">Services</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-3 max-w-[520px] font-body text-[17px] font-light text-earth-brown">
              Everything the agri ecosystem needs under one roof.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-24 md:gap-32 mt-16">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
