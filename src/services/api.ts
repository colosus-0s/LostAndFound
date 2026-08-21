// Service Layer Abstraction for Future REST API Integration
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
};

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
