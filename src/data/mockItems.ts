export interface Item {
  id: string;
  title: string;
  category: 'Phones' | 'Wallets' | 'Backpacks' | 'Watches' | 'Laptops' | 'Earbuds' | 'ID Cards' | 'Keys';
  status: 'LOST' | 'FOUND' | 'MATCHED' | 'VERIFIED' | 'RETURNED';
  matchPercentage?: number;
  location: string;
  date: string;
  imageUrl: string;
  description: string;
  isSmartMatch?: boolean;
}

export const MOCK_ITEMS: Item[] = [
  {
    id: 'item-1',
    title: 'iPhone 14 Pro',
    category: 'Phones',
    status: 'LOST',
    matchPercentage: 92,
    location: 'Library — Study Area',
    date: 'May 20, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    description: 'Deep Purple iPhone 14 Pro with a dark clear case. Screen lock shows high-res wallpaper.',
    isSmartMatch: true,
  },
  {
    id: 'item-2',
    title: 'Brown Leather Wallet',
    category: 'Wallets',
    status: 'FOUND',
    location: 'Student Center Cafeteria',
    date: 'May 19, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
    description: 'Genuine brown leather bi-fold wallet containing campus student cards.',
  },
  {
    id: 'item-3',
    title: 'Black Tech Backpack',
    category: 'Backpacks',
    status: 'FOUND',
    location: 'Science Complex Lab 3B',
    date: 'May 18, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    description: 'Water-resistant black backpack with silver carabiner attached.',
  },
  {
    id: 'item-4',
    title: 'Silver Chronograph Watch',
    category: 'Watches',
    status: 'LOST',
    location: 'Gymnasium & Fitness Center',
    date: 'May 21, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    description: 'Stainless steel watch with navy dial and mesh band.',
  },
];

export const HERO_FEATURED_MATCH: Item = MOCK_ITEMS[0];
