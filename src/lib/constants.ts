export const BRAND = {
  name: 'Refine Barbers',
  tagline: 'Precision Cuts, Refined Style',
  description:
    'Premium barbershop in Horwich offering expert skin fades, classic cuts, and modern styling.',
  phone: '+44 1204 XXX XXX',
  address: 'Horwich, Bolton, Greater Manchester',
  booksyUrl: 'https://booksy.com/en-gb/your-booksy-link',
} as const;

export const SERVICES = [
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    description: 'Precision fade cuts tailored to your style',
    price: 'from £18',
  },
  {
    id: 'classic-cut',
    name: 'Classic Cut',
    description: 'Timeless barbershop cuts with modern finish',
    price: 'from £16',
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    description: 'Expert beard shaping and styling',
    price: 'from £12',
  },
] as const;

export const SEO = {
  keywords: [
    'barber Horwich',
    'barbershop Bolton',
    'skin fade Blackrod',
    'barber near me Chorley',
    'Refine Barbers',
    'mens haircut Bolton',
  ],
  locations: ['Horwich', 'Blackrod', 'Bolton', 'Chorley'],
} as const;
