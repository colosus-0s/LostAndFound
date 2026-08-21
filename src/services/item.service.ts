import { Item, MOCK_ITEMS, HERO_FEATURED_MATCH } from '../data/mockItems';

export const itemService = {
  async getFeaturedMatch(): Promise<Item> {
    // Simulating async network request
    return new Promise((resolve) => {
      setTimeout(() => resolve(HERO_FEATURED_MATCH), 50);
    });
  },

  async getRecentItems(): Promise<Item[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_ITEMS), 50);
    });
  },

  async searchItems(query: string, category?: string): Promise<Item[]> {
    return new Promise((resolve) => {
      const q = query.toLowerCase();
      const filtered = MOCK_ITEMS.filter((item) => {
        const matchesQuery = item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
        const matchesCategory = category ? item.category === category : true;
        return matchesQuery && matchesCategory;
      });
      setTimeout(() => resolve(filtered), 50);
    });
  },
};
