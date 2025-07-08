import AboutSection from "./(components)/AboutSection";
import ArticlesSection from "./(components)/ArticlesSection";
import ContactSection from "./(components)/ContactSection";
import HeroSection from "./(components)/HeroSection";
import ServicesSection from "./(components)/ServicesSection";
import WhyChooseSection from "./(components)/WhyChooseSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}
