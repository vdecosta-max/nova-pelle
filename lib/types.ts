/**
 * Nove Pelle Product Types
 * Matches Salesforce Product API response
 */

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  colour: string | null;
  material: string | null;
  sizesAvailable: string | null; // Semicolon-separated (e.g., "UK 6;UK 7;UK 8")
  imageUrl: string | null;
  secondaryImageUrl: string | null;
  recycledPercentage: number | null;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock' | null;
}

export interface ProductListResponse {
  success: boolean;
  data: Product[];
  count: number;
  offset: number;
  limit: number;
}

export interface ProductDetailResponse {
  success: boolean;
  data: Product;
}

export interface APIError {
  success: false;
  error: string;
  type?: string;
}

export type APIResponse<T> = T | APIError;

// Helper type guards
export function isAPIError(response: unknown): response is APIError {
  return typeof response === 'object' && response !== null && 'success' in response && response.success === false;
}

// Product filters
export interface ProductFilters {
  colour?: string;
  material?: string;
  stockStatus?: string;
  search?: string;
  limit?: number;
  offset?: number;
}
