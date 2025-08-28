export const BRAND = {
  name: 'Refine Barbers',
  tagline: 'Precision Cuts, Refined Style',
  description:
    'Premium barbershop in Horwich offering expert skin fades, classic cuts, and modern styling.',
  phone: '07850 442736',
  address: 'Horwich, Bolton, Greater Manchester',
  booksyUrl:
    'https://booksy.com/en-gb/93228_refine-barbers_barber_624511_horwich?do=invite&_branch_match_id=1430328955757368443&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVL7MMjigvsAgL802yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAlrxLzTwAAAA%3D',
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
    price: 'from £15',
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
