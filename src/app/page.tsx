import Layout from '@/components/layout/layout';
import HeroSection from '@/components/sections/hero-section';
import { siteMetadata } from '@/lib/metadata';

export const metadata = siteMetadata;

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      {/* Next sections will go here */}
      <div className="flex h-screen items-center justify-center bg-gray-900">
        <p className="text-xl text-white">About section coming next...</p>
      </div>
    </Layout>
  );
}
