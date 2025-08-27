import { Metadata } from 'next';
import { BRAND, SEO } from './constants';

export const siteMetadata: Metadata = {
  title: `${BRAND.name} - Premium Barbershop in Horwich, Bolton`,
  description: `${BRAND.description} Serving ${SEO.locations.join(', ')}. Book online today.`,
  keywords: SEO.keywords.join(', '),
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  openGraph: {
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.description,
    type: 'website',
    locale: 'en_GB',
    siteName: BRAND.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
