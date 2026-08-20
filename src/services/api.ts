/**
 * Foundational Service Layer
 * Abstracts data retrieval (mock data initially, REST API in future phases).
 */

export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

export const defaultConfig: ApiConfig = {
  baseUrl: '/api',
  timeout: 10000,
};
