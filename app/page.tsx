import AboutSection from "./(components)/AboutSection";
import ArticlesSection from "./(components)/ArticlesSection";
import ContactSection from "./(components)/ContactSection";
import FAQSection from "./(components)/FAQSection";
import HeroSection from "./(components)/HeroSection";
import ServicesSection from "./(components)/ServicesSection";
import TestimonialsSection from "./(components)/TestimonialsSection";
import WhyChooseSection from "./(components)/WhyChooseSection";

export default async function Home() {
  'use cache';
  
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <FAQSection />
      <TestimonialsSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}
