import { MOCK_BROWSE_ITEMS, BrowseItem } from '../data/mockBrowseItems';

export interface FilterOptions {
  query?: string;
  status?: 'ALL' | 'LOST' | 'FOUND';
  category?: string;
  location?: string;
  sortBy?: 'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME';
}

export const itemService = {
  getItems: (options: FilterOptions = {}): BrowseItem[] => {
    let result = [...MOCK_BROWSE_ITEMS];

    // Status Filter
    if (options.status && options.status !== 'ALL') {
      result = result.filter((item) => item.status === options.status);
    }

    // Category Filter
    if (options.category && options.category !== 'All') {
      result = result.filter((item) => item.category === options.category);
    }

    // Location Filter
    if (options.location && options.location !== 'All') {
      const locLower = options.location.toLowerCase();
      result = result.filter((item) => item.location.toLowerCase().includes(locLower));
    }

    // Text Query Search (name, category, location, description)
    if (options.query && options.query.trim() !== '') {
      const q = options.query.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q),
      );
    }

    // Sorting
    if (options.sortBy) {
      switch (options.sortBy) {
        case 'NEWEST':
          result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          break;
        case 'OLDEST':
          result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          break;
        case 'MATCH':
          result.sort((a, b) => (b.matchConfidence || 0) - (a.matchConfidence || 0));
          break;
        case 'NAME':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }
    }

    return result;
  },

  getItemById: (id: string): BrowseItem | undefined => {
    if (!id) return undefined;
    const cleanId = id.toLowerCase().trim();

    // 1. Direct ID match
    let found = MOCK_BROWSE_ITEMS.find((item) => item.id.toLowerCase() === cleanId);
    if (found) return found;

    // 2. Slug or name search fallback (e.g., 'iphone-14-pro' -> 'iPhone 14 Pro', 'wallet' -> 'Wallet', 'backpack' -> 'Backpack')
    found = MOCK_BROWSE_ITEMS.find((item) => {
      const slugName = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const slugCat = item.category.toLowerCase();
      return slugName.includes(cleanId) || cleanId.includes(slugName) || slugCat.includes(cleanId);
    });

    return found || MOCK_BROWSE_ITEMS[0]; // Fallback to first item if requested slug matches loosely
  },

  getPotentialMatches: (currentItem: BrowseItem, count: number = 3): BrowseItem[] => {
    return MOCK_BROWSE_ITEMS.filter(
      (item) => item.id !== currentItem.id && (item.category === currentItem.category || item.status !== currentItem.status),
    ).slice(0, count);
  },
};
