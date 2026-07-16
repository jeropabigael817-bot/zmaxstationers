/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ShoppingCart, Plus, Minus, Trash2, Phone, AlertTriangle, Truck, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, OrderDetails } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [orderDetails, setOrderDetails] = React.useState<OrderDetails>({
    name: '',
    phone: '',
    deliveryLocation: '',
    deliveryMethod: 'rider',
    notes: '',
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isMobile, setIsMobile] = React.useState(false);

  // Responsive device type detection
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent background scrolling when sheet is open
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

  // Calculate Subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Construct WhatsApp Message
  const getWhatsAppMessage = () => {
    const itemsLines = cartItems
      .map((item) => `• ${item.product.name} x${item.quantity} - KES ${(item.product.price * item.quantity).toLocaleString()}`)
      .join('\n');

    const methodLabels: Record<string, string> = {
      rider: 'Rider Delivery (Within Kericho)',
      courier: 'Courier (G4S / Wells Fargo Countrywide)',
      pickup: 'Store Pick-up (Tengecha Lane, Kericho)',
    };

    return `
Hello ZMAX GENERAL STATIONERS LTD,
I would like to order:
${itemsLines}
Total: KES ${subtotal.toLocaleString()}

Customer Info:
Name: ${orderDetails.name || '____________'}
Phone: ${orderDetails.phone || '____________'}
Delivery Method: ${methodLabels[orderDetails.deliveryMethod] || '____________'}
Delivery Location: ${orderDetails.deliveryLocation || '____________'}
Notes: ${orderDetails.notes || 'None'}
    `.trim();
  };

  // Handle Checkout Validation & Submission
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!orderDetails.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!orderDetails.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (orderDetails.deliveryMethod !== 'pickup' && !orderDetails.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery address/location is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to error if possible
      const errField = Object.keys(newErrors)[0];
      const element = document.getElementById(`customer-${errField}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Launch WhatsApp
    const phone = "254727209415";
    const message = getWhatsAppMessage();
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-stretch justify-center md:justify-end overflow-hidden">
          
          {/* Backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm cursor-pointer" 
            onClick={onClose}
          />

          {/* Sheet / Drawer Panel */}
          <motion.div
            initial={isMobile ? { y: '100%' } : { x: '100%' }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? { y: '100%' } : { x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full h-[85vh] max-h-[85vh] md:h-full md:max-h-full md:w-[500px] lg:w-[550px] rounded-t-[32px] md:rounded-t-none md:rounded-l-[32px] flex flex-col bg-white shadow-2xl overflow-hidden pointer-events-auto z-10"
          >
            {/* Drag Handle Indicator for Android Swipe Down feel */}
            <div className="md:hidden flex justify-center py-2.5 shrink-0 bg-gradient-to-b from-gray-50/50 to-transparent">
              <div 
                className="w-14 h-1.5 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer transition-colors" 
                onClick={onClose} 
              />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 md:py-5 shrink-0 bg-gray-50/30">
              <div className="flex items-center space-x-3">
                <div className="bg-red-600 text-white p-2 rounded-xl flex items-center justify-center shadow-md shadow-red-50">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <h2 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">
                  Your Order Cart ({cartItems.length})
                </h2>
              </div>
              <button
                type="button"
                className="rounded-xl p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
                onClick={onClose}
                aria-label="Close cart"
              >
                <X className="h-5.5 w-5.5" />
              </button>
            </div>

            {/* Content body - scrollable */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
              
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="bg-red-50 p-6 rounded-full text-red-500">
                    <ShoppingCart className="h-12 w-12 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Your cart is empty</h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1 max-w-xs mx-auto">
                      Browse our high-quality stationers catalog and add items to your active order list.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3 rounded-xl transition-all shadow-md shadow-red-50 cursor-pointer text-sm"
                  >
                    Start Browsing
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
                      <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">
                        Selected items ({cartItems.length})
                      </span>
                      <button
                        type="button"
                        onClick={onClearCart}
                        className="text-xs font-bold text-red-500 hover:text-red-700 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        Clear All Items
                      </button>
                    </div>

                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center border border-gray-150 p-3 rounded-2xl bg-white hover:border-gray-200 transition-all shadow-sm"
                        >
                          {/* Fixed size 70x70 product image, centered, non-cropped */}
                          <img
                            src={item.product.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=150'}
                            alt={item.product.name}
                            className="h-[70px] w-[70px] object-contain rounded-xl shrink-0 border border-gray-100 bg-gray-50/50 p-1.5"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          
                          <div className="ml-3.5 flex-1 min-w-0 pr-1.5 space-y-1">
                            {/* Product title wraps into max 2 lines */}
                            <h4 className="text-sm font-black text-gray-900 leading-snug line-clamp-2 break-words">
                              {item.product.name}
                            </h4>
                            <div className="flex flex-wrap items-baseline gap-1">
                              <span className="text-xs font-extrabold text-gray-700">
                                KES {item.product.price.toLocaleString()}
                              </span>
                              {item.product.unit && (
                                <span className="text-[10px] text-gray-400 font-semibold">/{item.product.unit}</span>
                              )}
                              <span className="text-[10px] text-red-600 font-extrabold ml-auto bg-red-50 px-1.5 py-0.2 rounded">
                                Sub: KES {(item.product.price * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          </div>

                          {/* Quantity selector - Large Touch Targets (Minimum h-10 w-10) */}
                          <div className="flex items-center space-x-1.5 bg-gray-50 border border-gray-150 rounded-xl p-1 shrink-0">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="h-10 w-10 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-red-500 hover:border-red-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-5 text-center text-xs sm:text-sm font-black text-gray-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="h-10 w-10 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-red-500 hover:border-red-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          {/* Trash button - Aligned correctly to vertical center right */}
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-gray-400 hover:text-red-600 active:text-red-700 p-2.5 hover:bg-red-50 rounded-xl transition-all shrink-0 cursor-pointer ml-1.5"
                            title="Delete item"
                          >
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Estimator Card */}
                  <div className="bg-gray-50 rounded-2xl p-4.5 border border-gray-100 space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <span>Items Subtotal:</span>
                      <span className="text-gray-800">KES {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-bold text-gray-500 border-b border-gray-200 pb-2.5 uppercase tracking-wider">
                      <span>Delivery Fees:</span>
                      <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md font-extrabold uppercase">Calculated on Chat</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-normal italic">
                      * Official G4S or Wells Fargo couriers take 24 hours countrywide. Riders deliver same-day within Kericho.
                    </p>
                  </div>

                  {/* Delivery & Customer Info Form - 16px size for Android ease */}
                  <div id="checkout-form-container" className="space-y-4 border-t border-gray-100 pt-5">
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider flex items-center">
                      <Truck className="h-4.5 w-4.5 mr-2 text-red-600" />
                      <span>Checkout & Delivery Info</span>
                    </h3>

                    <form id="whatsapp-checkout-form" onSubmit={handleCheckout} className="space-y-4">
                      <div>
                        <label htmlFor="customer-name" className="block text-xs font-extrabold text-gray-600 uppercase mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="customer-name"
                          name="name"
                          value={orderDetails.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Abigael Jerop"
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-base font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 focus:bg-white transition-all ${
                            errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                          }`}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1 font-bold">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="customer-phone" className="block text-xs font-extrabold text-gray-600 uppercase mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="customer-phone"
                          name="phone"
                          value={orderDetails.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 0727 209 415"
                          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-base font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 focus:bg-white transition-all ${
                            errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1 font-bold">{errors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="delivery-method-select" className="block text-xs font-extrabold text-gray-600 uppercase mb-1">
                          Preferred Delivery Method
                        </label>
                        <select
                          id="delivery-method-select"
                          name="deliveryMethod"
                          value={orderDetails.deliveryMethod}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base font-medium focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 focus:bg-white transition-all"
                        >
                          <option value="rider">Rider Delivery (Within Kericho County)</option>
                          <option value="courier">Courier - G4S / Wells Fargo (Countrywide)</option>
                          <option value="pickup">Store Pick-up (Tengecha Lane, Kericho)</option>
                        </select>
                      </div>

                      {orderDetails.deliveryMethod !== 'pickup' && (
                        <div>
                          <label htmlFor="customer-location" className="block text-xs font-extrabold text-gray-600 uppercase mb-1">
                            Delivery Location / Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="customer-location"
                            name="deliveryLocation"
                            value={orderDetails.deliveryLocation}
                            onChange={handleInputChange}
                            placeholder="e.g. Kericho Town, Temple Road, Kericho"
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-base font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 focus:bg-white transition-all ${
                              errors.deliveryLocation ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                            }`}
                          />
                          {errors.deliveryLocation && (
                            <p className="text-xs text-red-500 mt-1 font-bold">{errors.deliveryLocation}</p>
                          )}
                        </div>
                      )}

                      <div>
                        <label htmlFor="customer-notes" className="block text-xs font-extrabold text-gray-600 uppercase mb-1">
                          Order Notes / Special Instructions
                        </label>
                        <textarea
                          id="customer-notes"
                          name="notes"
                          rows={2}
                          value={orderDetails.notes}
                          onChange={handleInputChange}
                          placeholder="e.g. Specify customized branding details or special packaging needs..."
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 focus:bg-white transition-all"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>

            {/* Sticky bottom checkout section - Total cost & always visible 60px green ORDER NOW button */}
            {cartItems.length > 0 && (
              <div className="sticky bottom-0 left-0 right-0 border-t border-gray-100 bg-white/95 backdrop-blur-md p-4 sm:p-5 shrink-0 shadow-[0_-8px_20px_rgba(0,0,0,0.06)] z-20 flex flex-col space-y-3 pb-safe">
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-wider">Total cost on WhatsApp:</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-600">KES {subtotal.toLocaleString()}</span>
                </div>
                <button
                  type="submit"
                  form="whatsapp-checkout-form"
                  id="whatsapp-checkout-btn"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black h-[60px] rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer text-base uppercase tracking-wide"
                >
                  <Phone className="h-5 w-5 fill-white stroke-none shrink-0" />
                  <span>Order Now via WhatsApp</span>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
