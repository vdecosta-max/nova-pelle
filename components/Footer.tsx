/**
 * Nove Pelle Footer Component
 * Reusable footer for all pages
 */

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-forest text-white py-16">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-forest text-lg font-bold">
                NP
              </div>
              <div className="text-lg font-bold">NÔVA PELLE</div>
            </div>
            <p className="text-sm text-white/70">
              Sustainable footwear crafted with care for the planet.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">New Arrivals</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sale</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">About</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all flex items-center justify-center">
                IG
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all flex items-center justify-center">
                FB
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all flex items-center justify-center">
                TW
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; 2026 Nôva Pelle. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
