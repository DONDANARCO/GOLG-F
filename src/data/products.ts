import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'TaylorMade Stealth 2 Driver',
    brand: 'TaylorMade',
    category: 'Drivers',
    price: 599.99,
    originalPrice: 699.99,
    description: 'The Stealth 2 Driver features revolutionary carbon face technology for maximum distance and forgiveness.',
    features: [
      'Carbon face technology',
      'Adjustable loft sleeve',
      'Forgiving head design',
      'Premium shaft options'
    ],
    specifications: {
      'Loft': '9°',
      'Shaft': 'Fujikura Ventus Red',
      'Flex': 'Stiff',
      'Length': '45.75"'
    },
    images: [
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400',
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    tags: ['driver', 'taylormade', 'stealth', 'premium']
  },
  {
    id: '2',
    name: 'Callaway Paradym Iron Set',
    brand: 'Callaway',
    category: 'Irons',
    price: 1299.99,
    originalPrice: 1499.99,
    description: 'The Paradym irons feature AI-designed faces and tungsten weighting for exceptional performance.',
    features: [
      'AI-designed face',
      'Tungsten weighting',
      'Forged construction',
      'Progressive design'
    ],
    specifications: {
      'Set': '4-PW',
      'Shaft': 'True Temper Elevate MPH',
      'Flex': 'Regular',
      'Grip': 'Golf Pride Tour Velvet'
    },
    images: [
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400',
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    tags: ['irons', 'callaway', 'paradym', 'forged']
  },
  {
    id: '3',
    name: 'Titleist Vokey SM9 Wedge',
    brand: 'Titleist',
    category: 'Wedges',
    price: 179.99,
    description: 'The Vokey SM9 wedge offers precise control and spin around the greens.',
    features: [
      'Progressive CG design',
      'Spin milled grooves',
      'Multiple bounce options',
      'Tour-proven performance'
    ],
    specifications: {
      'Loft': '56°',
      'Bounce': '10°',
      'Grind': 'S Grind',
      'Finish': 'Brushed Steel'
    },
    images: [
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400',
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 203,
    tags: ['wedge', 'titleist', 'vokey', 'spin']
  },
  {
    id: '4',
    name: 'Scotty Cameron Phantom X Putter',
    brand: 'Scotty Cameron',
    category: 'Putters',
    price: 399.99,
    description: 'The Phantom X putter combines classic design with modern technology for exceptional feel and performance.',
    features: [
      'Aluminum face insert',
      'Stainless steel body',
      'Adjustable weights',
      'Premium finish'
    ],
    specifications: {
      'Length': '34"',
      'Lie': '70°',
      'Loft': '3°',
      'Head Weight': '350g'
    },
    images: [
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400',
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400'
    ],
    inStock: false,
    rating: 4.9,
    reviewCount: 156,
    tags: ['putter', 'scotty cameron', 'phantom', 'premium']
  },
  {
    id: '5',
    name: 'Ping G430 Fairway Wood',
    brand: 'Ping',
    category: 'Fairway Woods',
    price: 299.99,
    description: 'The G430 fairway wood features a high-strength steel face for explosive distance and accuracy.',
    features: [
      'High-strength steel face',
      'Adjustable hosel',
      'Forgiving design',
      'Multiple loft options'
    ],
    specifications: {
      'Loft': '15°',
      'Shaft': 'Alta CB Black',
      'Flex': 'Stiff',
      'Length': '43"'
    },
    images: [
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400',
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 78,
    tags: ['fairway wood', 'ping', 'g430', 'distance']
  },
  {
    id: '6',
    name: 'Cobra King Hybrid',
    brand: 'Cobra',
    category: 'Hybrids',
    price: 249.99,
    description: 'The King hybrid offers the perfect blend of iron and wood performance for versatile shot-making.',
    features: [
      'Forged face insert',
      'Adjustable loft',
      'Low CG design',
      'Versatile performance'
    ],
    specifications: {
      'Loft': '19°',
      'Shaft': 'Aldila NV Green',
      'Flex': 'Regular',
      'Length': '40.5"'
    },
    images: [
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400',
      'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=400'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 92,
    tags: ['hybrid', 'cobra', 'king', 'versatile']
  }
];

export const categories = [
  'Drivers',
  'Fairway Woods',
  'Hybrids',
  'Irons',
  'Wedges',
  'Putters'
];

export const brands = [
  'TaylorMade',
  'Callaway',
  'Titleist',
  'Ping',
  'Cobra',
  'Scotty Cameron'
]; 