/**
 * Nove Pelle Region Context
 * Multi-region support with currency conversion
 */

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type RegionCode = 'UK' | 'US' | 'AU' | 'FR';

export interface Region {
  code: RegionCode;
  name: string;
  currency: string;
  symbol: string;
  flag: string;
  exchangeRate: number; // Relative to GBP
}

export const REGIONS: Record<RegionCode, Region> = {
  UK: {
    code: 'UK',
    name: 'United Kingdom',
    currency: 'GBP',
    symbol: '£',
    flag: '🇬🇧',
    exchangeRate: 1.0, // Base currency
  },
  US: {
    code: 'US',
    name: 'United States',
    currency: 'USD',
    symbol: '$',
    flag: '🇺🇸',
    exchangeRate: 1.27, // 1 GBP ≈ 1.27 USD
  },
  AU: {
    code: 'AU',
    name: 'Australia',
    currency: 'AUD',
    symbol: '$',
    flag: '🇦🇺',
    exchangeRate: 1.91, // 1 GBP ≈ 1.91 AUD
  },
  FR: {
    code: 'FR',
    name: 'France',
    currency: 'EUR',
    symbol: '€',
    flag: '🇫🇷',
    exchangeRate: 1.17, // 1 GBP ≈ 1.17 EUR
  },
};

interface RegionContextType {
  region: Region;
  setRegion: (code: RegionCode) => void;
  formatPrice: (priceInGBP: number) => string;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [regionCode, setRegionCode] = useState<RegionCode>('UK');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load region from localStorage on mount
  useEffect(() => {
    const savedRegion = localStorage.getItem('nove-pelle-region') as RegionCode;
    if (savedRegion && REGIONS[savedRegion]) {
      setRegionCode(savedRegion);
    }
    setIsLoaded(true);
  }, []);

  // Save region to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('nove-pelle-region', regionCode);
    }
  }, [regionCode, isLoaded]);

  const region = REGIONS[regionCode];

  const setRegion = (code: RegionCode) => {
    setRegionCode(code);
  };

  const formatPrice = (priceInGBP: number): string => {
    const convertedPrice = priceInGBP * region.exchangeRate;

    // Format with appropriate decimal places
    const formatted = convertedPrice.toFixed(2);

    // Add symbol based on region
    if (region.code === 'US' || region.code === 'AU') {
      return `${region.symbol}${formatted}`;
    } else {
      return `${region.symbol}${formatted}`;
    }
  };

  return (
    <RegionContext.Provider value={{ region, setRegion, formatPrice }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
}
