import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use - PrithviX",
  robots: { index: false, follow: true },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        <em>
          This is a placeholder. The final terms of use will be reviewed before
          public launch.
        </em>
      </p>
      <p>
        By registering your interest on PrithviX, you agree to be contacted by our
        team about the platform. Registration is free and creates no obligation.
      </p>
      <p>
        Platform fees, booking terms, and service-specific conditions will be
        presented clearly before you use any paid feature. Questions? Reach us at{" "}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
