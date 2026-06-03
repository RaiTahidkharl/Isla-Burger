// Mock data for Isla Burger — Nice, France

export const heroSlides = [
  {
    id: 1,
    title: 'Burgers & Wings',
    subtitle: 'Crispy. Fresh. Unforgettable.',
    description: 'Burgers and chicken wings served in a straightforward counter-serve venue with outdoor tables on Rue d\'Italie.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    cta: 'Order Now',
    ctaTarget: 'uber'
  },
  {
    id: 2,
    title: 'Open Late',
    subtitle: 'A beam of light at midnight.',
    description: 'When every other restaurant is closed and you\'re hungry, Isla Burger is still serving fresh halal food in Nice.',
    image: 'https://images.unsplash.com/photo-1579065497397-2824d41272ce',
    cta: 'View Menu',
    ctaTarget: 'menu'
  },
  {
    id: 3,
    title: 'Halal & Affordable',
    subtitle: '€1–10 per person.',
    description: 'Super friendly staff, very filling for the price. Dine-in, takeout and delivery available.',
    image: 'https://images.unsplash.com/photo-1650939986300-ce9609921fa7',
    cta: 'Discover',
    ctaTarget: 'menu'
  }
];

export const categories = [
  { id: 'best-sellers', name: 'Popular', icon: 'Flame', color: '#E63946' },
  { id: 'burgers', name: 'Burgers', icon: 'Beef', color: '#F77F00' },
  { id: 'chicken', name: 'Chicken', icon: 'Drumstick', color: '#D62828' },
  { id: 'wraps', name: 'Wraps', icon: 'Sandwich', color: '#FCBF49' },
  { id: 'wings', name: 'Wings', icon: 'Drumstick', color: '#E63946' },
  { id: 'sides', name: 'Sides & Fries', icon: 'Salad', color: '#F9A03F' }
];

export const menuItems = {
  'best-sellers': [
    {
      id: 'bs1',
      name: 'Frites',
      description: 'Golden, crispy French fries — the perfect side or snack on the go.',
      price: '\u20AC3.50',
      image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752',
      badge: 'POPULAR',
      rating: 4.5
    },
    {
      id: 'bs2',
      name: 'Nuggets',
      description: 'Tender, crispy chicken nuggets served with your choice of sauce.',
      price: '\u20AC5.90',
      image: 'https://images.pexels.com/photos/37052503/pexels-photo-37052503.jpeg',
      badge: 'POPULAR',
      rating: 4.6
    },
    {
      id: 'bs3',
      name: 'Cheeseburger',
      description: 'Juicy beef patty, melted cheese, fresh toppings in a soft bun.',
      price: '\u20AC6.90',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      badge: 'BEST SELLER',
      rating: 4.7
    },
    {
      id: 'bs4',
      name: 'Hamburger Halal',
      description: 'Classic halal burger — simple, honest, and full of flavor.',
      price: '\u20AC5.90',
      image: 'https://images.unsplash.com/photo-1637710847214-f91d99669e18',
      badge: 'HALAL',
      rating: 4.6
    }
  ],
  burgers: [
    {
      id: 'bg1',
      name: 'Cheeseburger',
      description: 'Juicy beef patty, melted cheese, fresh lettuce, tomato and sauce.',
      price: '\u20AC6.90',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      rating: 4.7
    },
    {
      id: 'bg2',
      name: 'Hamburger Halal',
      description: '100% halal beef patty with classic toppings. Simple and satisfying.',
      price: '\u20AC5.90',
      image: 'https://images.unsplash.com/photo-1637710847214-f91d99669e18',
      rating: 4.6
    },
    {
      id: 'bg3',
      name: 'Double Cheeseburger',
      description: 'Two halal patties, double cheese, loaded and filling.',
      price: '\u20AC8.50',
      image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da',
      rating: 4.5
    },
    {
      id: 'bg4',
      name: 'Chicken Burger',
      description: 'Crispy chicken fillet, fresh salad and house sauce in a brioche bun.',
      price: '\u20AC7.50',
      image: 'https://images.pexels.com/photos/9207184/pexels-photo-9207184.jpeg',
      rating: 4.6
    }
  ],
  chicken: [
    {
      id: 'ch1',
      name: 'Master Chef Poulet',
      description: 'Signature grilled chicken plate — tender, seasoned and generously served.',
      price: '\u20AC9.90',
      image: 'https://images.unsplash.com/photo-1579065497397-2824d41272ce',
      badge: 'SIGNATURE',
      rating: 4.8
    },
    {
      id: 'ch2',
      name: 'Chicken Steak with Fries and Salad',
      description: 'Grilled chicken steak with golden fries and a fresh side salad.',
      price: '\u20AC9.50',
      image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da',
      rating: 4.7
    },
    {
      id: 'ch3',
      name: 'Fire Chicken',
      description: 'Original spicy fire chicken — fresh, bold and unforgettable.',
      price: '\u20AC8.90',
      image: 'https://images.unsplash.com/photo-1650939986300-ce9609921fa7',
      badge: 'HOT',
      rating: 4.8
    },
    {
      id: 'ch4',
      name: 'Crispy Chicken Plate',
      description: 'Crispy fried chicken with fries — comfort food done right.',
      price: '\u20AC8.50',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f',
      rating: 4.6
    }
  ],
  wraps: [
    {
      id: 'wr1',
      name: 'Mozzarella Sticks Chicken Wrap and Fries',
      description: 'Chicken wrap with mozzarella sticks, loaded and served with fries.',
      price: '\u20AC9.50',
      image: 'https://images.unsplash.com/photo-1627564803215-ad55bad5c5ea',
      badge: 'LOADED',
      rating: 4.7
    },
    {
      id: 'wr2',
      name: 'Wrap Poulet Curry Bien Garni',
      description: 'Generously filled curry chicken wrap — bien garni, full of flavor.',
      price: '\u20AC8.90',
      image: 'https://images.pexels.com/photos/14930613/pexels-photo-14930613.jpeg',
      rating: 4.7
    },
    {
      id: 'wr3',
      name: 'Classic Chicken Wrap',
      description: 'Grilled chicken, fresh veggies and creamy sauce wrapped tight.',
      price: '\u20AC7.90',
      image: 'https://images.unsplash.com/photo-1627564803215-ad55bad5c5ea',
      rating: 4.5
    }
  ],
  wings: [
    {
      id: 'w1',
      name: '6 Hot Wings',
      description: 'Crispy chicken wings tossed in our house spicy glaze.',
      price: '\u20AC6.90',
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f',
      rating: 4.6
    },
    {
      id: 'w2',
      name: '12 Wings Bucket',
      description: 'Choose 2 sauces. Share or keep them all — we won\u2019t judge.',
      price: '\u20AC12.90',
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d',
      badge: 'SHARE',
      rating: 4.7
    },
    {
      id: 'w3',
      name: 'BBQ Glazed Wings',
      description: 'Sticky, sweet, finger-licking BBQ — napkins included.',
      price: '\u20AC9.50',
      image: 'https://images.pexels.com/photos/9650084/pexels-photo-9650084.jpeg',
      rating: 4.6
    },
    {
      id: 'w4',
      name: 'Buffalo Bites',
      description: 'Boneless tender bites tossed in buffalo glaze.',
      price: '\u20AC8.50',
      image: 'https://images.pexels.com/photos/29908653/pexels-photo-29908653.jpeg',
      rating: 4.5
    }
  ],
  sides: [
    {
      id: 's1',
      name: 'Frites',
      description: 'Crispy outside, fluffy inside. The classic sidekick.',
      price: '\u20AC3.50',
      image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752',
      rating: 4.7
    },
    {
      id: 's2',
      name: 'Nuggets (10 pcs)',
      description: 'Tender, crispy, addictive. Served with your sauce.',
      price: '\u20AC5.90',
      image: 'https://images.pexels.com/photos/37052503/pexels-photo-37052503.jpeg',
      rating: 4.6
    },
    {
      id: 's3',
      name: 'Mozzarella Sticks',
      description: 'Golden, stretchy mozzarella sticks with dipping sauce.',
      price: '\u20AC4.90',
      image: 'https://images.pexels.com/photos/13065202/pexels-photo-13065202.jpeg',
      rating: 4.5
    },
    {
      id: 's4',
      name: 'Onion Rings',
      description: 'Golden, crunchy rings dunked in our house dip.',
      price: '\u20AC4.50',
      image: 'https://images.pexels.com/photos/13065202/pexels-photo-13065202.jpeg',
      rating: 4.5
    }
  ]
};

export const features = [
  { icon: 'BadgeCheck', title: 'Dine-in', desc: 'Counter-serve with outdoor tables' },
  { icon: 'Store', title: 'Takeout', desc: 'Grab and go, fast and easy' },
  { icon: 'Home', title: 'Delivery', desc: 'Order via Uber Eats' },
  { icon: 'Award', title: 'Halal', desc: 'Halal burgers and chicken' }
];

export const reviews = [
  {
    name: 'Oliver Winters',
    rating: 5,
    text: 'Original fire chicken and the food so fresh. After landing in this city at midnight when all restaurants were closed, it was like a beam of light in the night.',
    date: 'Dec 2025'
  },
  {
    name: 'Brian Coppola',
    rating: 5,
    text: 'Best place in town — super friendly staff and very filling for the price. I came here 3 times. Highly recommended!',
    date: 'Nov 2025'
  },
  {
    name: 'Fabricio Benevides',
    rating: 5,
    text: 'Very convenient and very kids/family friendly. Food is also good.',
    date: 'Dec 2024'
  },
  {
    name: 'Google Reviewer',
    rating: 4,
    text: 'Great halal chicken burger, clean outdoor space, and open late when you need it most.',
    date: '2025'
  },
  {
    name: 'Local Guide',
    rating: 4,
    text: 'Simple counter-serve spot with honest portions and fair prices. Perfect fast food in Nice.',
    date: '2025'
  },
  {
    name: 'Regular Customer',
    rating: 5,
    text: 'Fresh food, kind service and nice prices. The cheeseburger and fries are my go-to.',
    date: '2025'
  }
];

export const hours = [
  { day: 'Lundi', time: '11:00 - 00:30' },
  { day: 'Mardi', time: '11:00 - 00:30' },
  { day: 'Mercredi', time: '11:00 - 00:30' },
  { day: 'Jeudi', time: '11:00 - 00:30' },
  { day: 'Vendredi', time: '11:00 - 00:30' },
  { day: 'Samedi', time: '11:00 - 00:30' },
  { day: 'Dimanche', time: '11:00 - 00:30' }
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
  'https://images.unsplash.com/photo-1579065497397-2824d41272ce',
  'https://images.unsplash.com/photo-1518013431117-eb1465fa5752',
  'https://images.unsplash.com/photo-1650939986300-ce9609921fa7',
  'https://images.unsplash.com/photo-1627564803215-ad55bad5c5ea',
  'https://images.pexels.com/photos/37052503/pexels-photo-37052503.jpeg',
  'https://images.unsplash.com/photo-1608039755401-742074f0548d',
  'https://images.unsplash.com/photo-1567620832903-9fc6debc209f'
];

export const businessInfo = {
  name: 'Isla Burger',
  phone: '+33 9 81 53 14 14',
  phoneTel: '+33981531414',
  address: '7 Rue d\'Italie, 06000 Nice, France',
  addressShort: '7 Rue d\'Italie, Nice',
  plusCode: 'P738+46 Nice, France',
  rating: 3.6,
  reviewCount: 649,
  priceRange: '€1–10',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Isla+Burger+7+Rue+d%27Italie+Nice',
  mapsEmbed: 'https://www.google.com/maps?q=7+Rue+d%27Italie,+06000+Nice,+France&output=embed',
  uberEats: 'https://www.ubereats.com/fr/store/burger-avenue/mZVUmE5CVG6suLGI28MISg?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas&rwg_token=AFd1xnGsK8kmqW2uSOB',
  uberEatsStore: 'Burger Avenue'
};
