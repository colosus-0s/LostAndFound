import { itemService } from './itemService';

export interface ReportFormData {
  reportType: 'LOST' | 'FOUND' | null;
  itemName: string;
  category: string;
  brand: string;
  color: string;
  photos: string[];
  locationArea: string;
  specificPlace: string;
  date: string;
  approxTime: string;
  description: string;
}

export const INITIAL_REPORT_DATA: ReportFormData = {
  reportType: null,
  itemName: '',
  category: '',
  brand: '',
  color: '',
  photos: [],
  locationArea: '',
  specificPlace: '',
  date: new Date().toISOString().split('T')[0],
  approxTime: 'Morning',
  description: '',
};

export const reportService = {
  submitReport: async (data: ReportFormData): Promise<{ success: boolean; reportId: string }> => {
    // Simulate brief processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Persist new report into unified localStorage item storage
    const newItem = itemService.addUserReport(data);

    return {
      success: true,
      reportId: newItem.id,
    };
  },
};
