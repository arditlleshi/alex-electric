import AboutSection from "./(components)/AboutSection";
import ArticlesSection from "./(components)/ArticlesSection";
import ContactSection from "./(components)/ContactSection";
import FAQSection from "./(components)/FAQSection";
import HeroSection from "./(components)/HeroSection";
import ScrollReveal from "./(components)/ScrollReveal";
import ServicesSection from "./(components)/ServicesSection";
import WhyChooseSection from "./(components)/WhyChooseSection";

export default async function Home() {
  "use cache";

  return (
    <main>
      <ScrollReveal width="100%" animation="fade-in">
        <HeroSection />
      </ScrollReveal>

      <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal width="100%" animation="slide-right" delay={0.2}>
        <WhyChooseSection />
      </ScrollReveal>

      <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
        <FAQSection />
      </ScrollReveal>

      <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
        <ArticlesSection />
      </ScrollReveal>

      <ScrollReveal width="100%" animation="fade-up" delay={0.2}>
        <ContactSection />
      </ScrollReveal>
    </main>
  );
}
