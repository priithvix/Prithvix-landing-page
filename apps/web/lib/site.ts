/**
 * Central site configuration - single source of truth for contact details,
 * URLs, and copy that appears in multiple places. Pulled from the PRD.
 */

export const SITE = {
  name: "PrithviX",
  url: "https://prithvix.in",
  domain: "prithvix.in",
  title:
    "PrithviX - Machinery Rental, Labour & ERP for Indian Farmers & Dealers",
  description:
    "PrithviX connects India's agri ecosystem - rent farm equipment, hire labour, manage dealer credit and inventory. Launching in Gujarat. Register free today.",
  keywords: [
    "agri tech India",
    "farm machinery rental Gujarat",
    "farm labour service",
    "agri dealer CRM",
    "farmer app India",
  ],
  locale: "en_IN",
  themeColor: "#1B3A2D",
  email: "madhav@prithvix.in",
  // WhatsApp business line 
  whatsapp: {
    display: "+91 9588874415",
    number: "919588874415",
  },
  ogImage: "https://prithvix.in/images/og/img-06-og-image.jpg",
} as const;

/** Build a wa.me deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
