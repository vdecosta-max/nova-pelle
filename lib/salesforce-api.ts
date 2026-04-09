/**
 * Nove Pelle Salesforce API Client
 * Calls the custom REST API endpoints we built
 */

import { Product, ProductFilters, ProductListResponse, ProductDetailResponse, isAPIError } from './types';

const SF_BASE_URL = process.env.NEXT_PUBLIC_SALESFORCE_URL || 'https://orgfarm-2ad3cfec1a-dev-ed.develop.my.salesforce.com';
const SF_API_BASE = `${SF_BASE_URL}/services/apexrest/novapelle/v1`;

/**
 * Get Salesforce access token
 * For now, using a server-side token from environment variable
 * TODO: Implement proper OAuth 2.0 flow for production
 */
function getAccessToken(): string {
  const token = process.env.SALESFORCE_ACCESS_TOKEN;
  if (!token) {
    throw new Error('SALESFORCE_ACCESS_TOKEN not configured');
  }
  return token;
}

/**
 * Fetch products from Salesforce with optional filters
 */
export async function getProducts(filters?: ProductFilters): Promise<Product[]> {
  try {
    const params = new URLSearchParams();

    if (filters?.colour) params.append('colour', filters.colour);
    if (filters?.material) params.append('material', filters.material);
    if (filters?.stockStatus) params.append('stockStatus', filters.stockStatus);
    if (filters?.search) params.append('search', filters.search);
    if (filters?.limit) params.append('limit', filters.limit.toString());
    if (filters?.offset) params.append('offset', filters.offset.toString());

    const url = `${SF_API_BASE}/products${params.toString() ? `?${params}` : ''}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
      },
      // Disable caching for now during development
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: ProductListResponse = await response.json();

    if (isAPIError(data)) {
      throw new Error(data.error);
    }

    return data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetch a single product by ID
 */
export async function getProduct(id: string): Promise<Product> {
  try {
    const url = `${SF_API_BASE}/products/${id}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Product not found');
      }
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: ProductDetailResponse = await response.json();

    if (isAPIError(data)) {
      throw new Error(data.error);
    }

    return data.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}

/**
 * Get unique values for filters
 * Useful for building filter dropdowns
 */
export async function getFilterOptions(): Promise<{
  colours: string[];
  materials: string[];
  stockStatuses: string[];
}> {
  try {
    const products = await getProducts();

    const colours = [...new Set(products.map(p => p.colour).filter(Boolean) as string[])];
    const materials = [...new Set(products.map(p => p.material).filter(Boolean) as string[])];
    const stockStatuses = [...new Set(products.map(p => p.stockStatus).filter(Boolean) as string[])];

    return {
      colours: colours.sort(),
      materials: materials.sort(),
      stockStatuses: stockStatuses.sort(),
    };
  } catch (error) {
    console.error('Error fetching filter options:', error);
    return {
      colours: [],
      materials: [],
      stockStatuses: [],
    };
  }
}
