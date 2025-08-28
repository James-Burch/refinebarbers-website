import { BRAND } from './constants';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: BRAND.name,
  description: BRAND.description,
  url: 'https://refinebarbers.co.uk', // Update with real domain
  telephone: BRAND.phone,
  email: 'info@refinebarbers.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '94 Winterhey Lane',
    addressLocality: 'Horwich',
    addressRegion: 'Greater Manchester',
    postalCode: 'BL6 7NZ',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.5980545558607,
    longitude: -2.551395323667829,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:15',
      closes: '15:00',
    },
  ],
  priceRange: '£13-£18',
  paymentAccepted: 'Cash, Card',
  currenciesAccepted: 'GBP',
  areaServed: ['Horwich', 'Bolton', 'Chorley', 'Blackrod'],
  serviceType: 'Hair Salon',
  additionalType: 'Barber Shop',
  hasMap: 'https://maps.google.com/maps?cid=18162988806320467704',
  sameAs: [
    'https://www.instagram.com/refinebarbers/',
    'https://www.facebook.com/refinebarbers/',
    'https://booksy.com/en-gb/93228_refine-barbers_barber_624511_horwich',
  ],
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'HairSalon',
    name: BRAND.name,
  },
  serviceType: 'Hair Cut',
  areaServed: 'Horwich, Bolton, Greater Manchester',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Hair Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Haircut',
          description: 'Classic cuts and modern styles tailored to you',
        },
        price: '15',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Skin Fade',
          description: 'Precision fade cuts with expert blending',
        },
        price: '18',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Kids Cut',
          description: 'Friendly service for our younger clients',
        },
        price: '13',
        priceCurrency: 'GBP',
      },
    ],
  },
};
