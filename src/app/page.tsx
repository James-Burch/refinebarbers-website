import Layout from '@/components/layout/layout';
import Navigation from '@/components/layout/navigation';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import ContactSection from '@/components/sections/contact-section';
import { siteMetadata } from '@/lib/metadata';

export const metadata = siteMetadata;

export default function Home() {
  return (
    <Layout>
      <Navigation />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </Layout>
  );
}
