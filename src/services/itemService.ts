import { MOCK_BROWSE_ITEMS, BrowseItem } from '../data/mockBrowseItems';
import { ReportFormData } from './reportService';

export interface FilterOptions {
  query?: string;
  status?: 'ALL' | 'LOST' | 'FOUND';
  category?: string;
  location?: string;
  sortBy?: 'NEWEST' | 'OLDEST' | 'MATCH' | 'NAME';
}

const LOCAL_STORAGE_KEY = 'lost_found_user_reports';

// Helper to retrieve user-submitted items from localStorage
const getUserReportsFromStorage = (): BrowseItem[] => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Failed to read user reports from localStorage:', e);
    return [];
  }
};

// Helper to save user-submitted items to localStorage
const saveUserReportsToStorage = (reports: BrowseItem[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reports));
  } catch (e) {
    console.error('Failed to save user report to localStorage:', e);
  }
};

export const itemService = {
  // Combines static mock items and user-submitted localStorage items
  getAllCombinedItems: (): BrowseItem[] => {
    const userItems = getUserReportsFromStorage();
    return [...userItems, ...MOCK_BROWSE_ITEMS];
  },

  getItems: (options: FilterOptions = {}): BrowseItem[] => {
    let result = itemService.getAllCombinedItems();

    // Status Filter (LOST vs FOUND)
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

    const allItems = itemService.getAllCombinedItems();

    // 1. Direct ID match
    let found = allItems.find((item) => item.id.toLowerCase() === cleanId);
    if (found) return found;

    // 2. Loose slug match
    found = allItems.find((item) => {
      const slugName = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const slugCat = item.category.toLowerCase();
      return slugName.includes(cleanId) || cleanId.includes(slugName) || slugCat.includes(cleanId);
    });

    return found || allItems[0];
  },

  getPotentialMatches: (currentItem: BrowseItem, count: number = 3): BrowseItem[] => {
    const allItems = itemService.getAllCombinedItems();
    return allItems
      .filter((item) => item.id !== currentItem.id && (item.category === currentItem.category || item.status !== currentItem.status))
      .slice(0, count);
  },

  // Save new user report to localStorage
  addUserReport: (formData: ReportFormData): BrowseItem => {
    const newId = `report-${Date.now()}`;
    
    // Category image fallbacks if user didn't attach photos
    const categoryImageMap: Record<string, string> = {
      Phones: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
      Wallets: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
      Backpacks: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
      Watches: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
      Laptops: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=600&q=80',
      Earbuds: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80',
    };

    const imageUrl =
      formData.photos && formData.photos.length > 0
        ? formData.photos[0]
        : categoryImageMap[formData.category] || 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=600&q=80';

    const formattedLocation = `${formData.locationArea}${formData.specificPlace ? ` — ${formData.specificPlace}` : ''}`;

    const newItem: BrowseItem = {
      id: newId,
      name: formData.itemName,
      status: formData.reportType || 'LOST',
      category: (formData.category as BrowseItem['category']) || 'Other',
      location: formattedLocation,
      date: formData.date || new Date().toISOString().split('T')[0],
      description: formData.description || 'User submitted community report.',
      imageUrl,
      matchConfidence: 86,
      metadata: {
        brand: formData.brand,
        color: formData.color,
      },
    };

    const existingReports = getUserReportsFromStorage();
    saveUserReportsToStorage([newItem, ...existingReports]);

    return newItem;
  },
};
