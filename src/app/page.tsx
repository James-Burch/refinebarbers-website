import Layout from '@/components/layout/layout';
import { siteMetadata } from '@/lib/metadata';

export const metadata = siteMetadata;

export default function Home() {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Refine Barbers</h1>
          <p className="text-xl text-gray-300">Precision Cuts, Refined Style</p>
          <div className="mt-8">
            <p className="text-gray-400">Hero section coming next...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
