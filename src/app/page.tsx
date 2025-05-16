import HeroHeader from "@/components/hero-header";
import ProductSection from "./product-section";
import AboutSection from "@/components/about-section";
import FAQSection from "@/components/faq-section";
import FeatureSection from "@/components/feature-sectoin";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <AboutSection />
      <FeatureSection/>
      <ProductSection />
      <FAQSection />
    </>
  );
}
