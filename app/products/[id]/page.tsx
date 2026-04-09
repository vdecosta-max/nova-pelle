/**
 * Nove Pelle Product Detail Page
 * Individual product view with size selection and purchase options
 */

import { getProduct } from '@/lib/salesforce-api';
import ProductDetailClient from '@/components/ProductDetailClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  let product;
  try {
    product = await getProduct(id);
  } catch (error) {
    console.error('Error loading product:', error);
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-forest transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/" className="hover:text-forest transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail Section */}
      <ProductDetailClient product={product} />

      <div className="mt-20">
        <Footer />
      </div>

      {/* Chat Widget Placeholder - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-16 h-16 bg-forest hover:bg-forest-dark rounded-full shadow-2xl flex items-center justify-center text-white text-2xl transition-all hover:scale-110">
          💬
        </button>
      </div>
    </div>
  );
}
