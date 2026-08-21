export interface MatchingSignal {
  id: string;
  label: string;
  value: string;
  iconName: 'map-pin' | 'calendar' | 'tag' | 'info';
}

export interface LostItemData {
  id: string;
  status: 'LOST';
  title: string;
  location: string;
  date: string;
  details: {
    color: string;
    category: string;
    brand: string;
  };
}

export interface FoundCandidateData {
  id: string;
  status: 'FOUND';
  title: string;
  location: string;
  matchPercentage: number;
  isPrimaryMatch?: boolean;
}

export class MockMatchData {
  static readonly LOST_ITEM: LostItemData = {
    id: 'lost-hero-1',
    status: 'LOST',
    title: 'iPhone 14 Pro',
    location: 'Library — Study Area',
    date: 'May 20, 2026',
    details: {
      color: 'Deep Purple',
      category: 'Phones',
      brand: 'Apple',
    },
  };

  static readonly SIGNALS: MatchingSignal[] = [
    { id: 'sig-loc', label: 'LOCATION', value: 'Library / Campus Hub', iconName: 'map-pin' },
    { id: 'sig-time', label: 'TIME WINDOW', value: 'May 20, 2026', iconName: 'calendar' },
    { id: 'sig-cat', label: 'CATEGORY', value: 'Phones & Tech', iconName: 'tag' },
    { id: 'sig-det', label: 'DESCRIPTION', value: 'Purple / Clear Case', iconName: 'info' },
  ];

  static readonly CANDIDATES: FoundCandidateData[] = [
    {
      id: 'found-cand-1',
      status: 'FOUND',
      title: 'iPhone 14 Pro',
      location: 'Student Center Cafeteria',
      matchPercentage: 92,
      isPrimaryMatch: true,
    },
    {
      id: 'found-cand-2',
      status: 'FOUND',
      title: 'iPhone 13',
      location: 'Library First Floor',
      matchPercentage: 61,
    },
    {
      id: 'found-cand-3',
      status: 'FOUND',
      title: 'Black Smartphone',
      location: 'Cafeteria Main Hall',
      matchPercentage: 38,
    },
  ];
}
