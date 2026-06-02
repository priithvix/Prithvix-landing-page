import { Preloader } from "@/components/layout/Preloader";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingElements } from "@/components/layout/FloatingElements";

import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { AiAgent } from "@/components/sections/AiAgent";
import { WhoFor } from "@/components/sections/WhoFor";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { RegisterForm } from "@/components/sections/RegisterForm";
import { Faq } from "@/components/sections/Faq";

import { getDictionary, Locale } from "@/lib/dictionaries";

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const { lang } = params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Preloader />
      <FloatingElements />

      {/* Fixed header: announcement bar + nav */}
      <header className="fixed inset-x-0 top-0 z-[100]">
        <AnnouncementBar />
        <Navbar dict={dict.navbar} lang={lang} />
      </header>

      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <DashboardPreview />
        <AiAgent />
        <WhoFor />
        <HowItWorks />
        <SocialProof />
        <RegisterForm />
        <Faq />
      </main>

      <Footer dict={dict.footer} />
    </>
  );
}
