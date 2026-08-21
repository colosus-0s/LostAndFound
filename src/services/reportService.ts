export interface ReportFormData {
  reportType: 'LOST' | 'FOUND' | null;
  itemName: string;
  category: string;
  brand: string;
  color: string;
  photos: string[]; // Base64 or object URLs for local preview
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
    // Simulate frontend mock delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    const mockId = `RPT-${Math.floor(100000 + Math.random() * 900000)}`;
    console.log('[Mock Report Submission]', mockId, data);

    return {
      success: true,
      reportId: mockId,
    };
  },
};
