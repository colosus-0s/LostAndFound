export interface BrowseItem {
  id: string;
  name: string;
  status: 'LOST' | 'FOUND' | 'RECOVERED';
  category: 'Phones' | 'Wallets' | 'Backpacks' | 'Watches' | 'Laptops' | 'Earbuds' | 'Accessories' | 'Other';
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  matchConfidence?: number;
  metadata: {
    color?: string;
    brand?: string;
    serialLast4?: string;
  };
}

export const MOCK_BROWSE_ITEMS: BrowseItem[] = [
  {
    id: 'item-101',
    name: 'iPhone 14 Pro (Space Black)',
    status: 'LOST',
    category: 'Phones',
    location: 'Library — Study Area (2nd Floor)',
    date: 'May 20, 2026',
    description: 'Black iPhone 14 Pro with a dark clear case. Left near computer workstation 14.',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 92,
    metadata: {
      color: 'Space Black',
      brand: 'Apple',
    },
  },
  {
    id: 'item-102',
    name: 'Black Leather Bifold Wallet',
    status: 'FOUND',
    category: 'Wallets',
    location: 'Student Center — Dining Hall',
    date: 'May 19, 2026',
    description: 'Black genuine leather wallet found under booth seating near the south entrance.',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 88,
    metadata: {
      color: 'Black',
      brand: 'Fossil',
    },
  },
  {
    id: 'item-103',
    name: 'Official Campus Student ID',
    status: 'FOUND',
    category: 'Accessories',
    location: 'Main Gate — Security Desk',
    date: 'May 21, 2026',
    description: 'Student ID card handed in at security desk. Initials J.D.',
    imageUrl: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 95,
    metadata: {
      brand: 'Campus ID',
    },
  },
  {
    id: 'item-104',
    name: 'Herschel Supply Co. Backpack',
    status: 'LOST',
    category: 'Backpacks',
    location: 'Science Lab B (Room 304)',
    date: 'May 18, 2026',
    description: 'Navy blue canvas backpack with brown leather strap detail. Contains notebooks.',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 74,
    metadata: {
      color: 'Navy Blue',
      brand: 'Herschel',
    },
  },
  {
    id: 'item-105',
    name: 'AirPods Pro (2nd Generation)',
    status: 'FOUND',
    category: 'Earbuds',
    location: 'Gymnasium — Bleachers',
    date: 'May 20, 2026',
    description: 'White AirPods Pro case with custom protective silicone sleeve found on bench.',
    imageUrl: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 91,
    metadata: {
      color: 'White',
      brand: 'Apple',
    },
  },
  {
    id: 'item-106',
    name: 'Apple Watch Series 8 (Midnight)',
    status: 'LOST',
    category: 'Watches',
    location: 'Cafeteria — Outdoor Terrace',
    date: 'May 17, 2026',
    description: '45mm Apple Watch with dark sport band. Slipped off during lunch hour.',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 85,
    metadata: {
      color: 'Midnight',
      brand: 'Apple',
    },
  },
  {
    id: 'item-107',
    name: 'MacBook Pro 96W USB-C Charger',
    status: 'FOUND',
    category: 'Laptops',
    location: 'Engineering Block — Lecture Hall 1',
    date: 'May 21, 2026',
    description: 'Original Apple 96W USB-C power adapter with 2m braided cable left on podium.',
    imageUrl: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 79,
    metadata: {
      brand: 'Apple',
    },
  },
  {
    id: 'item-108',
    name: 'Toyota Smart Key with Blue Lanyard',
    status: 'LOST',
    category: 'Accessories',
    location: 'North Parking Lot — Section B',
    date: 'May 19, 2026',
    description: 'Black electronic car key fob attached to a blue woven lanyard.',
    imageUrl: 'https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 83,
    metadata: {
      brand: 'Toyota',
    },
  },
  {
    id: 'item-109',
    name: 'Hydro Flask 32oz Insulated Bottle',
    status: 'FOUND',
    category: 'Other',
    location: 'Sports Complex — Soccer Field',
    date: 'May 16, 2026',
    description: 'Pacific blue stainless steel water bottle with stickers on side.',
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 68,
    metadata: {
      color: 'Pacific Blue',
      brand: 'Hydro Flask',
    },
  },
  {
    id: 'item-110',
    name: 'Leather Bound Moleskine Notebook',
    status: 'LOST',
    category: 'Other',
    location: 'Humanities Hall — Courtyard',
    date: 'May 15, 2026',
    description: 'Dark brown hardcover notebook with elastic band closure. Contains lecture notes.',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    matchConfidence: 71,
    metadata: {
      color: 'Brown',
      brand: 'Moleskine',
    },
  },
];
