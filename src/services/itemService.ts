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
          // Sort by date (mock sorted by date string order or original order)
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
    return MOCK_BROWSE_ITEMS.find((item) => item.id === id);
  },
};
