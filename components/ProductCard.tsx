/**
 * Nove Pelle Product Card
 * Clean, spacious design with hover effects
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useRegion } from '@/lib/region-context';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { formatPrice } = useRegion();
  const { id, name, price, colour, material, imageUrl, recycledPercentage, stockStatus } = product;

  return (
    <Link href={`/products/${id}`} className="group block">
      <div className="space-y-4">
        {/* Image Area */}
        <div className="relative aspect-square bg-cream overflow-hidden rounded-lg">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream to-beige">
              <span className="text-6xl opacity-20">👟</span>
            </div>
          )}

          {/* Status Badges - Top Right Corner */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {/* Stock Badge */}
            {stockStatus === 'Low Stock' && (
              <div className="px-3 py-1.5 rounded-full bg-yellow-100 backdrop-blur-sm">
                <span className="text-[10px] uppercase tracking-widest font-bold text-yellow-800">Low Stock</span>
              </div>
            )}
            {stockStatus === 'Out of Stock' && (
              <div className="px-3 py-1.5 rounded-full bg-red-100 backdrop-blur-sm">
                <span className="text-[10px] uppercase tracking-widest font-bold text-red-800">Sold Out</span>
              </div>
            )}
          </div>

          {/* Eco Badge - Bottom Left */}
          {recycledPercentage && recycledPercentage > 0 && (
            <div className="absolute bottom-3 left-3 w-14 h-14 rounded-full flex flex-col items-center justify-center bg-terracotta text-white shadow-lg">
              <span className="text-lg font-extrabold leading-none">{Math.round(recycledPercentage)}</span>
              <span className="text-[9px] font-bold uppercase tracking-wide">% Eco</span>
            </div>
          )}
        </div>

        {/* Content Area - Clean Typography */}
        <div className="space-y-2">
          {/* Product Name */}
          <h3 className="font-medium text-base text-gray-900 group-hover:text-forest transition-colors">
            {name}
          </h3>

          {/* Tags - Minimal */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {material && <span>{material}</span>}
            {material && colour && <span>•</span>}
            {colour && <span>{colour}</span>}
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold text-forest">
              {formatPrice(price || 0)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
