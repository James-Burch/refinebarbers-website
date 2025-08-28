import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { localBusinessSchema, serviceSchema } from '@/lib/structured-data';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Refine Barbers - Premium Barbershop in Horwich, Bolton',
  description:
    'Professional barbering services with precision cuts, stylish fades, and expert beard trims. Located in Horwich, serving Bolton, Chorley, and surrounding areas.',
  keywords:
    'barber Horwich, barbershop Bolton, skin fade Blackrod, barber near me Chorley,barber near me Horwich, mens haircut Bolton, Refine Barbers',
  authors: [{ name: 'Refine Barbers' }],
  creator: 'Refine Barbers',
  publisher: 'Refine Barbers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://refinebarbers-website.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Refine Barbers - Precision Cuts, Refined Style',
    description:
      'Professional barbering services in Horwich. Expert skin fades, classic cuts, and modern styling. Book online today.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://refinebarbers-website.vercel.app',
    siteName: 'Refine Barbers',
    images: [
      {
        url: '/images/circle-logo-1.webp',
        width: 1200,
        height: 630,
        alt: 'Refine Barbers - Professional Barbershop in Horwich',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refine Barbers - Premium Barbershop in Horwich',
    description:
      'Professional barbering services with precision cuts and expert styling. Book online today.',
    images: ['/images/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="overflow-x-hidden">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/videos/barbershop-hero-1.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/images/circle-logo-1.webp"
          as="image"
          type="image/webp"
        />
      </head>

      <body className={`${inter.className} overflow-x-hidden`}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
