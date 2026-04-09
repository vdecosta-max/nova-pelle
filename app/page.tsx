/**
 * Nove Pelle Homepage
 * Hero-first layout inspired by modern e-commerce design
 */

import { getProducts } from '@/lib/salesforce-api';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function HomePage() {
  // Fetch products server-side
  let products;
  let error: string | null = null;

  try {
    products = await getProducts({ limit: 50 });
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load products';
    products = [];
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Full Width */}
      <section className="relative h-[70vh] bg-gradient-to-br from-cream via-beige-light to-cream-light overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 space-y-6">
            <div className="inline-block px-4 py-2 bg-terracotta/10 border border-terracotta/20 rounded-full">
              <span className="text-xs uppercase tracking-widest font-semibold text-terracotta">New Collection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-forest tracking-tight">
              Walk Sustainably
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Handcrafted footwear from recycled materials. Style meets sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-forest text-white font-medium hover:bg-forest-dark transition-all">
                Shop Collection
              </button>
              <button className="px-8 py-4 border-2 border-forest text-forest font-medium hover:bg-forest/5 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating eco badge for visual interest */}
        <div className="absolute bottom-12 left-12 hidden lg:block">
          <div className="w-32 h-32 rounded-full flex flex-col items-center justify-center bg-terracotta text-white border-4 border-white shadow-2xl">
            <span className="text-4xl font-extrabold">72</span>
            <span className="text-sm font-bold">% AVG</span>
            <span className="text-xs uppercase tracking-wider">Recycled</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cream rounded-full mb-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-forest">Featured Products</span>
          </div>
          <h2 className="text-4xl font-bold text-forest mb-4">Our Collection</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {products.length > 0
              ? `${products.length} sustainable styles crafted with care`
              : 'Discover thoughtfully designed footwear'}
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6 mb-12 text-center">
            <p className="text-red-800 font-medium mb-2">Unable to load products</p>
            <p className="text-sm text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : !error ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6 opacity-20">👟</div>
            <p className="text-gray-500 text-lg">No products available</p>
          </div>
        ) : null}
      </section>

      {/* Newsletter Section */}
      <section className="bg-cream py-20">
        <div className="max-w-screen-md mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-forest mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-8">
            Be the first to know about new arrivals and exclusive offers
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-forest focus:outline-none"
            />
            <button className="px-8 py-4 bg-forest text-white font-medium hover:bg-forest-dark transition-all rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />

      {/* Chat Widget Placeholder - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-16 h-16 bg-forest hover:bg-forest-dark rounded-full shadow-2xl flex items-center justify-center text-white text-2xl transition-all hover:scale-110">
          💬
        </button>
      </div>
    </div>
  );
}
