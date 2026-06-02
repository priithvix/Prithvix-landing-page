import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy - PrithviX",
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        <em>
          This is a placeholder. The final privacy policy will be reviewed before
          public launch.
        </em>
      </p>
      <p>
        PrithviX respects your privacy. The information you share when registering
        your interest - your name, mobile number, district, role, and service
        interest - is used solely to contact you about PrithviX and to provide the
        services you sign up for.
      </p>
      <p>
        Your data is stored securely on servers located in India. We never sell
        your information, and a dealer&apos;s farmer customer list is visible only
        to that dealer. You can request deletion of your data at any time by
        contacting us at{" "}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
