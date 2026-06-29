import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import PromoBanner from "@/components/sections/PromoBanner";
import FinancingSection from "@/components/sections/FinancingSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import LatestBlogSection from "@/components/sections/LatestBlogSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import EmergencyCta from "@/components/sections/EmergencyCta";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import { faqs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <ServicesGrid />
      <WhyChooseSection />
      <AboutPreview />
      <ProcessSection />
      <PromoBanner />
      <FinancingSection />
      <ReviewsSection />
      <LatestBlogSection />
      <ServiceAreasSection />
      <EmergencyCta />
      <FaqSection faqs={faqs} />
      <ContactSection />
    </>
  );
}
