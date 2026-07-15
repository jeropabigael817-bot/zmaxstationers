/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { X, ZoomIn, ZoomOut, ShoppingCart, Phone } from 'lucide-react';
import { Product } from '../types';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onAddToCart?: () => void;
  onInstantOrder?: () => void;
  isInCart?: boolean;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  product,
  onAddToCart,
  onInstantOrder,
  isInCart
}: ImageLightboxProps) {
  const [isZoomed, setIsZoomed] = React.useState(false);

  // Close on Escape key
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(prev => !prev);
  };

  const modalContent = (
    <AnimatePresence>
      <div 
        id="image-lightbox-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 select-none"
        onClick={handleBackdropClick}
      >
        {/* Controls Bar */}
        <div className="absolute top-4 right-4 z-50 flex items-center space-x-2">
          {/* Zoom Toggle indicator button */}
          <button
            type="button"
            onClick={() => setIsZoomed(prev => !prev)}
            className="p-3 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-full transition-colors border border-white/10 backdrop-blur-sm cursor-pointer shadow-lg"
            title={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
          </button>
          
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="p-3 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-full transition-colors border border-white/10 backdrop-blur-sm cursor-pointer shadow-lg"
            title="Close viewer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Lightbox Wrapper Container */}
        <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
          
          {/* Image Container */}
          <div className="relative overflow-auto max-h-[65vh] w-full flex items-center justify-center p-2">
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ 
                scale: isZoomed ? 1.3 : 1, 
                opacity: 1,
                cursor: isZoomed ? 'zoom-out' : 'zoom-in'
              }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={product.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600'}
              alt={product.name}
              className={`max-w-full max-h-[60vh] object-contain rounded-xl shadow-2xl border border-white/10 transition-shadow duration-300 ${
                isZoomed ? 'shadow-white/5' : ''
              }`}
              onClick={handleImageClick}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Product Label Summary Overlay */}
          <div className="w-full max-w-xl bg-white/10 border border-white/15 backdrop-blur-xl p-4 sm:p-5 rounded-2xl text-white mt-4 shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1 text-left">
              <span className="text-[10px] font-black tracking-widest text-red-400 uppercase">
                {product.category.replace('_', ' ')}
              </span>
              <h4 className="font-extrabold text-sm sm:text-base leading-tight">
                {product.name}
              </h4>
              <p className="text-white/80 font-black text-sm sm:text-base">
                KES {product.price.toLocaleString()}
                {product.unit && <span className="text-xs text-white/50 font-medium"> / {product.unit}</span>}
              </p>
            </div>

            {/* Quick Actions in Lightbox */}
            <div className="flex items-center space-x-2 shrink-0">
              {onAddToCart && (
                <button
                  type="button"
                  onClick={onAddToCart}
                  className={`flex-1 sm:flex-initial py-2 px-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 border transition-all duration-200 cursor-pointer ${
                    isInCart
                      ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300'
                      : 'bg-white text-gray-900 border-white hover:bg-gray-100'
                  }`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>{isInCart ? 'In Cart' : 'Add to Cart'}</span>
                </button>
              )}
              {onInstantOrder && (
                <button
                  type="button"
                  onClick={onInstantOrder}
                  className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 border border-emerald-500/20 text-white font-bold text-xs py-2 px-3.5 rounded-xl flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-lg"
                >
                  <Phone className="h-3.5 w-3.5 fill-white stroke-none" />
                  <span>Buy Now</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
