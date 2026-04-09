/**
 * Nove Pelle Product Detail Client Component
 * Interactive product display with size selection and cart functionality
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { useRegion } from '@/lib/region-context';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<'primary' | 'secondary'>('primary');
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const { addItem } = useCart();
  const { formatPrice } = useRegion();

  const availableSizes = product.sizesAvailable?.split(';').map(s => s.trim()) || [];
  const isOutOfStock = product.stockStatus === 'Out of Stock';
  const isLowStock = product.stockStatus === 'Low Stock';

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    addItem(product, selectedSize, quantity);
    setShowAddedMessage(true);

    // Reset form
    setQuantity(1);

    // Hide message after 3 seconds
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square bg-cream overflow-hidden rounded-lg">
            {product.imageUrl || product.secondaryImageUrl ? (
              <Image
                src={activeImage === 'primary' && product.imageUrl ? product.imageUrl : product.secondaryImageUrl || product.imageUrl || ''}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream to-beige">
                <span className="text-9xl opacity-20">👟</span>
              </div>
            )}

            {/* Eco Badge */}
            {product.recycledPercentage && product.recycledPercentage > 0 && (
              <div className="absolute bottom-6 left-6 w-20 h-20 rounded-full flex flex-col items-center justify-center bg-terracotta text-white shadow-lg">
                <span className="text-2xl font-extrabold leading-none">{Math.round(product.recycledPercentage)}</span>
                <span className="text-[10px] font-bold uppercase tracking-wide">% Eco</span>
              </div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {product.secondaryImageUrl && (
            <div className="flex gap-4">
              <button
                onClick={() => setActiveImage('primary')}
                className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === 'primary' ? 'border-forest' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Image
                  src={product.imageUrl || ''}
                  alt={`${product.name} - View 1`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
              <button
                onClick={() => setActiveImage('secondary')}
                className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === 'secondary' ? 'border-forest' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Image
                  src={product.secondaryImageUrl}
                  alt={`${product.name} - View 2`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            </div>
          )}
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-8">
          {/* Title & Price */}
          <div>
            <h1 className="text-4xl font-bold text-forest mb-4">{product.name}</h1>
            <div className="flex items-baseline gap-4 mb-6">
              <p className="text-3xl font-bold text-forest">{formatPrice(product.price || 0)}</p>
              {isLowStock && (
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-xs uppercase tracking-widest font-bold text-yellow-800">
                  Low Stock
                </span>
              )}
              {isOutOfStock && (
                <span className="px-3 py-1 rounded-full bg-red-100 text-xs uppercase tracking-widest font-bold text-red-800">
                  Sold Out
                </span>
              )}
            </div>
            {product.description && (
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-3 py-6 border-y border-gray-100">
            {product.material && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Material</span>
                <span className="font-medium text-gray-900">{product.material}</span>
              </div>
            )}
            {product.colour && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Colour</span>
                <span className="font-medium text-gray-900">{product.colour}</span>
              </div>
            )}
            {product.recycledPercentage && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Recycled Content</span>
                <span className="font-medium text-terracotta">{Math.round(product.recycledPercentage)}%</span>
              </div>
            )}
          </div>

          {/* Size Selection */}
          {availableSizes.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Size
              </label>
              <div className="grid grid-cols-4 gap-3">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    disabled={isOutOfStock}
                    className={`py-3 px-4 rounded-lg border-2 font-medium transition-all ${
                      selectedSize === size
                        ? 'border-forest bg-forest text-white'
                        : isOutOfStock
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                        : 'border-gray-200 hover:border-forest text-gray-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={isOutOfStock}
                className="w-12 h-12 rounded-lg border-2 border-gray-200 hover:border-forest transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                −
              </button>
              <span className="w-16 text-center font-medium text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                disabled={isOutOfStock}
                className="w-12 h-12 rounded-lg border-2 border-gray-200 hover:border-forest transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="w-full py-4 bg-forest text-white font-semibold text-lg rounded-lg hover:bg-forest-dark transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>

          {/* Success Message */}
          {showAddedMessage && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-green-800">Added to cart!</p>
                <p className="text-sm text-green-600">
                  {quantity} x {product.name} ({selectedSize})
                </p>
              </div>
            </div>
          )}

          {/* Sustainability Message */}
          {product.recycledPercentage && product.recycledPercentage > 50 && (
            <div className="bg-cream rounded-lg p-6 space-y-2">
              <div className="flex items-center gap-2 text-terracotta font-semibold">
                <span className="text-xl">🌱</span>
                <span>Sustainable Choice</span>
              </div>
              <p className="text-sm text-gray-600">
                This product is made with {Math.round(product.recycledPercentage)}% recycled materials,
                helping reduce waste and environmental impact.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
