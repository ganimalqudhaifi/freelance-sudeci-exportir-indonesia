import HeroHeader from "@/components/hero-header";
import ProductSection from "./product-section";
import AboutSection from "@/components/about-section";
import FAQSection from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <AboutSection />
      <ProductSection />
      <FAQSection />
    </>
  );
}
