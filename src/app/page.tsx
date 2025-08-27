import Layout from '@/components/layout/layout';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import { siteMetadata } from '@/lib/metadata';

export const metadata = siteMetadata;

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* Next sections will go here */}
      <div className="flex h-screen items-center justify-center bg-white">
        <p className="text-xl text-black">Gallery section coming next...</p>
      </div>
    </Layout>
  );
}
