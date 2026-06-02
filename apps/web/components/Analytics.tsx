"use client";

import Script from "next/script";

/**
 * GA4 + Microsoft Clarity, loaded async and only when their IDs are present
 * in the environment. Safe to ship without IDs (renders nothing).
 *
 * Env vars (set in Vercel / .env.local):
 *   NEXT_PUBLIC_GA_ID      e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_CLARITY_ID e.g. abcdefghij
 *
 * Custom events fired elsewhere via the `track()` helper below:
 *   form_submit, button_click, scroll_depth
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

export function Analytics() {
  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  );
}

/** Fire a GA4 event if GA is loaded. No-op otherwise. */
export function track(
  event: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
