export interface MapLocation {
  id: string;
  name: string;
  shortName: string;
  type: 'campus' | 'building' | 'plaza' | 'hub';
  status: 'LOST' | 'FOUND' | 'MATCHED' | 'RECOVERED';
  x: number; // Percent relative to map canvas (0-100)
  y: number; // Percent relative to map canvas (0-100)
  itemName?: string;
  matchPercentage?: number;
  date?: string;
  isPrimaryActive?: boolean;
}

export interface MapConnectionPath {
  id: string;
  fromId: string;
  toId: string;
  status: 'matching' | 'verified' | 'recovered';
}

export class MapData {
  static readonly LOCATIONS: MapLocation[] = [
    {
      id: 'loc-1',
      name: 'Library — Study Area',
      shortName: 'LIBRARY',
      type: 'building',
      status: 'LOST',
      x: 32,
      y: 35,
      itemName: 'iPhone 14 Pro',
      matchPercentage: 92,
      date: 'May 20, 2026',
      isPrimaryActive: true,
    },
    {
      id: 'loc-2',
      name: 'Student Center Cafeteria',
      shortName: 'STUDENT CENTER',
      type: 'hub',
      status: 'FOUND',
      x: 72,
      y: 28,
      itemName: 'Brown Leather Wallet',
      date: 'May 19, 2026',
    },
    {
      id: 'loc-3',
      name: 'Science Complex Lab 3B',
      shortName: 'SCIENCE LAB',
      type: 'building',
      status: 'MATCHED',
      x: 62,
      y: 70,
      itemName: 'Black Backpack',
      date: 'May 18, 2026',
    },
    {
      id: 'loc-4',
      name: 'Gymnasium & Fitness Center',
      shortName: 'GYMNASIUM',
      type: 'building',
      status: 'RECOVERED',
      x: 25,
      y: 75,
      itemName: 'Silver Watch',
      date: 'May 21, 2026',
    },
    {
      id: 'loc-5',
      name: 'Main Gate Plaza',
      shortName: 'MAIN GATE',
      type: 'plaza',
      status: 'FOUND',
      x: 48,
      y: 52,
      itemName: 'Set of Keys',
      date: 'May 20, 2026',
    },
  ];

  static readonly CONNECTIONS: MapConnectionPath[] = [
    {
      id: 'conn-1',
      fromId: 'loc-1', // Library (Lost)
      toId: 'loc-2',   // Student Center (Found)
      status: 'matching',
    },
    {
      id: 'conn-2',
      fromId: 'loc-2', // Student Center
      toId: 'loc-3',   // Science Lab (Matched)
      status: 'verified',
    },
    {
      id: 'conn-3',
      fromId: 'loc-3', // Science Lab
      toId: 'loc-4',   // Gymnasium (Recovered)
      status: 'recovered',
    },
  ];
}
