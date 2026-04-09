/**
 * Nove Pelle Header Component
 * Responsive header with mobile menu
 */

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { useRegion, REGIONS, RegionCode } from '@/lib/region-context';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { region, setRegion } = useRegion();

  return (
    <>
      {/* Sticky Header - Minimalist Design */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          {/* Mobile: Centered Logo */}
          <div className="lg:hidden flex items-center justify-center h-20 relative">
            {/* Hamburger - Absolute Left */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="absolute left-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Logo - Centered */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center text-white text-lg font-bold">
                NP
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-forest tracking-tight">NÔVA PELLE</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Sustainable</div>
              </div>
            </Link>

            {/* Cart - Absolute Right */}
            <button className="absolute right-0 p-2 hover:bg-gray-100 rounded-lg transition-colors text-sm relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Desktop: Left-aligned Logo + Nav */}
          <div className="hidden lg:flex items-center justify-between h-20">
            {/* Left Section - Logo + Nav */}
            <div className="flex items-center gap-12">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-forest rounded-lg flex items-center justify-center text-white text-lg font-bold">
                  NP
                </div>
                <div>
                  <div className="text-lg font-bold text-forest tracking-tight">NÔVA PELLE</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Sustainable</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="flex items-center gap-8 text-sm font-medium">
                <Link href="/" className="hover:text-forest transition-colors">Shop</Link>
                <Link href="/about" className="hover:text-forest transition-colors">About</Link>
                <Link href="/sustainability" className="hover:text-forest transition-colors">Sustainability</Link>
                <Link href="/contact" className="hover:text-forest transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-6">
              <nav className="flex items-center gap-6 text-sm">
                {/* Region Selector */}
                <div className="relative">
                  <button
                    onClick={() => setRegionMenuOpen(!regionMenuOpen)}
                    className="flex items-center gap-2 hover:text-forest transition-colors"
                  >
                    <span>{region.flag}</span>
                    <span>{region.code}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Region Dropdown */}
                  {regionMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setRegionMenuOpen(false)}
                      />
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-20 overflow-hidden">
                        {Object.values(REGIONS).map((r) => (
                          <button
                            key={r.code}
                            onClick={() => {
                              setRegion(r.code);
                              setRegionMenuOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-cream transition-colors ${
                              r.code === region.code ? 'bg-cream' : ''
                            }`}
                          >
                            <span className="text-xl">{r.flag}</span>
                            <div className="flex-1 text-left">
                              <div className="font-medium">{r.name}</div>
                              <div className="text-xs text-gray-500">{r.currency} ({r.symbol})</div>
                            </div>
                            {r.code === region.code && (
                              <span className="text-forest">✓</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <button className="hover:text-forest transition-colors">Search</button>
                <button className="hover:text-forest transition-colors">
                  Cart ({totalItems})
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 left-0 right-0 bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out border-b border-gray-100 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="px-6 py-6 space-y-4">
          <Link
            href="/"
            className="block py-3 text-base font-medium hover:text-forest transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block py-3 text-base font-medium hover:text-forest transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/sustainability"
            className="block py-3 text-base font-medium hover:text-forest transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sustainability
          </Link>
          <Link
            href="/contact"
            className="block py-3 text-base font-medium hover:text-forest transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-gray-100">
            <button className="block w-full text-left py-3 text-base font-medium hover:text-forest transition-colors">
              Search
            </button>
          </div>

          {/* Region Selector in Mobile Menu */}
          <div className="pt-4 border-t border-gray-100">
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">Region</div>
            <div className="grid grid-cols-2 gap-2">
              {Object.values(REGIONS).map((r) => (
                <button
                  key={r.code}
                  onClick={() => {
                    setRegion(r.code);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all ${
                    r.code === region.code
                      ? 'border-forest bg-forest text-white'
                      : 'border-gray-200 hover:border-forest'
                  }`}
                >
                  <span className="text-lg">{r.flag}</span>
                  <div className="text-left">
                    <div className="text-xs font-semibold">{r.code}</div>
                    <div className="text-[10px] opacity-75">{r.currency}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
