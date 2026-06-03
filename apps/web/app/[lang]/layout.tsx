import type { Metadata, Viewport } from "next";
import { Fraunces, Space_Grotesk, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "../globals.css";
import { SITE } from "@/lib/site";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Analytics } from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { Locale } from "@/lib/dictionaries";

// H1 hero headline only - weights 600/700
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

// H2/H3, nav, buttons, logo - weights 500/600/700
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// All body text - weights 300/400/500
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

// Footer watermark font
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

export async function generateMetadata(
  props: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { lang } = params;

  return {
    metadataBase: new URL(SITE.url),
    title: SITE.title,
    description: SITE.description,
    keywords: [...SITE.keywords],
    authors: [{ name: SITE.name }],
    alternates: { 
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'hi': '/hi',
        'gu': '/gu',
        'pa': '/pa',
      }
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: lang === 'en' ? 'en_IN' : `${lang}_IN`,
      url: `${SITE.url}/${lang}`,
      title: "PrithviX - Machinery Rental, Labour & ERP for Indian Farmers",
      description:
        "Rent farm equipment, hire labour, manage dealer credit - one platform for India's agri ecosystem.",
      siteName: SITE.name,
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: "Sunrise over golden wheat fields in rural India",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "PrithviX - Agriculture Tech Platform",
      description:
        "Rent equipment, hire labour, run your agri business digitally.",
      images: [SITE.ogImage],
    },
  };
}

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: "device-width",
  initialScale: 1,
  // Note: we intentionally do NOT lock maximum-scale - inputs use 16px font
  // so iOS won't auto-zoom, and pinch-zoom stays available for accessibility.
};

// LocalBusiness schema (PRD §11.1 / Bible) for richer search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: SITE.ogImage,
  email: SITE.email,
  telephone: SITE.whatsapp.display,
  areaServed: ["Gujarat", "Rajasthan", "Maharashtra", "Madhya Pradesh", "India"],
  address: { "@type": "PostalAddress", addressCountry: "IN" },
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }>
) {
  const params = await props.params;
  const { lang } = params;
  const { children } = props;

  return (
    <html
      lang={lang}
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${jakarta.variable} ${playfair.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
