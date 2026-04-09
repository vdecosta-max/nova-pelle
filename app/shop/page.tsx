/**
 * Nove Pelle Shop Page
 * Product catalog without hero section
 */

import { getProducts } from '@/lib/salesforce-api';
import { Product } from '@/lib/types';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function ShopPage() {
  // Fetch products server-side
  let products: Product[] = [];
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

      {/* Page Header */}
      <section className="bg-cream py-16">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl font-bold text-forest mb-4">Shop All</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {products.length > 0
              ? `Discover ${products.length} sustainable styles crafted with care`
              : 'Explore our collection of thoughtfully designed footwear'}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20">
        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6 mb-12 text-center">
            <p className="text-red-800 font-medium mb-2">Unable to load products</p>
            <p className="text-sm text-red-600">{error}</p>
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
