/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingCart, Phone, Check, Plus, Minus, Star } from 'lucide-react';
import { Product } from '../types';
import ImageLightbox from './ImageLightbox';

interface ProductCardProps {
  key?: string;
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  isInCart: boolean;
  cartQuantity: number;
}

export default function ProductCard({ product, onAddToCart, isInCart, cartQuantity }: ProductCardProps) {
  const [quantity, setQuantity] = React.useState(1);
  const [addedAnimation, setAddedAnimation] = React.useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const categoryLabels: Record<string, { label: string; color: string }> = {
    books: { label: 'Book & Bible', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    office: { label: 'Office & School', color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
    art_math: { label: 'Art & Mathematics', color: 'bg-pink-50 text-pink-700 border-pink-100' },
    ink_tech: { label: 'Printers & Inks', color: 'bg-amber-50 text-amber-700 border-amber-100' },
    accessories: { label: 'Accessory / Supply', color: 'bg-teal-50 text-teal-700 border-teal-100' }
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
    }, 1500);
  };

  // Direct single product quick WhatsApp order
  const handleInstantWhatsAppOrder = () => {
    const phone = "254727209415";
    const itemTotal = product.price * quantity;
    const message = `
Hello ZMAX GENERAL STATIONERS LTD,
I would like to order this single item immediately:
• ${product.name} x${quantity} - KES ${product.price.toLocaleString()}
Total: KES ${itemTotal.toLocaleString()}

My Details:
Name:
Phone:
Delivery Location:
`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
    window.open(url, "_blank");
  };

  const currentBadge = categoryLabels[product.category] || { label: 'Stationery', color: 'bg-gray-50 text-gray-700 border-gray-100' };

  return (
    <div
      id={`product-card-${product.id}`}
      className="bg-white rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-50/20 transition-all duration-300 flex flex-col h-full group overflow-hidden"
    >
      {/* Product Image Wrapper */}
      <div 
        className="relative pt-[80%] bg-gray-50 overflow-hidden shrink-0 cursor-zoom-in group/img"
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          src={product.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300'}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300 flex items-center justify-center z-10">
          <span className="bg-white/95 text-gray-900 text-[10px] font-black tracking-widest uppercase px-3.5 py-2 rounded-full shadow-md scale-90 opacity-0 group-hover/img:scale-100 group-hover/img:opacity-100 transition-all duration-300">
            Quick View
          </span>
        </div>
        
        {/* Category Tag */}
        <span className={`absolute top-3.5 left-3.5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border ${currentBadge.color} shadow-sm backdrop-blur-md bg-white/90 z-10`}>
          {currentBadge.label}
        </span>

        {/* Featured Star Badge */}
        {product.featured && (
          <span className="absolute top-3.5 right-3.5 bg-amber-500 text-white p-1 rounded-md shadow-sm flex items-center justify-center z-10" title="Bestseller / Popular">
            <Star className="h-3.5 w-3.5 fill-white stroke-none" />
          </span>
        )}
      </div>

      {/* Product Info Section */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-gray-900 font-extrabold text-sm sm:text-base tracking-tight leading-snug line-clamp-2 min-h-[2.75rem] group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed min-h-[2.5rem]">
            {product.description || `Authentic high-quality stationery items by ZMAX.`}
          </p>
        </div>

        {/* Pricing and Unit details */}
        <div className="flex items-baseline space-x-1 border-t border-gray-50 pt-3">
          <span className="text-[11px] font-bold text-gray-400 uppercase">KES</span>
          <span className="text-xl font-black text-gray-900">{product.price.toLocaleString()}</span>
          {product.unit && (
            <span className="text-xs font-semibold text-gray-500"> / {product.unit}</span>
          )}
        </div>

        {/* Action controllers */}
        <div className="space-y-2.5 pt-1">
          
          {/* Quantity Controls */}
          <div className="flex items-center justify-between bg-gray-50 p-1.5 rounded-xl border border-gray-100">
            <span className="text-xs font-bold text-gray-500 pl-2">Quantity:</span>
            <div className="flex items-center space-x-1">
              <button
                type="button"
                onClick={handleDecrement}
                className="h-7 w-7 rounded-lg bg-white border border-gray-100 text-gray-700 hover:text-red-500 hover:border-red-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-8 text-center text-sm font-extrabold text-gray-800">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                className="h-7 w-7 rounded-lg bg-white border border-gray-100 text-gray-700 hover:text-red-500 hover:border-red-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Buttons Grid */}
          <div className="grid grid-cols-2 gap-2">
            
            {/* Add to Cart */}
            <button
              type="button"
              onClick={handleAddToCartClick}
              className={`py-2.5 px-2 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 transition-all duration-200 cursor-pointer border ${
                isInCart || addedAnimation
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-white hover:bg-red-50 border-gray-200 hover:border-red-200 text-gray-700 hover:text-red-600'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Added!</span>
                </>
              ) : isInCart ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>In Cart ({cartQuantity})</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp Order */}
            <button
              type="button"
              onClick={handleInstantWhatsAppOrder}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-2 rounded-xl flex items-center justify-center space-x-1.5 transition-colors duration-150 cursor-pointer shadow-sm shadow-emerald-100"
              title="Order this item immediately on WhatsApp"
            >
              <Phone className="h-3.5 w-3.5 fill-white stroke-none" />
              <span>Buy Now</span>
            </button>

          </div>
        </div>
      </div>

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        product={product}
        onAddToCart={handleAddToCartClick}
        onInstantOrder={handleInstantWhatsAppOrder}
        isInCart={isInCart}
      />
    </div>
  );
}
