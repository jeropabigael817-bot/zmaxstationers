/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ShoppingCart, Plus, Minus, Trash2, Phone, AlertTriangle, Truck, MapPin } from 'lucide-react';
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

  if (!isOpen) return null;

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
Delivery Location: ${orderDetails.deliveryLocation || '____________'}
Delivery Method: ${methodLabels[orderDetails.deliveryMethod]}
${orderDetails.notes ? `Special Instructions: ${orderDetails.notes}` : ''}
`.trim();
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    const newErrors: Record<string, string> = {};
    if (!orderDetails.name.trim()) newErrors.name = 'Full Name is required';
    if (!orderDetails.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (orderDetails.deliveryMethod !== 'pickup' && !orderDetails.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Delivery address/location is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll form to view
      const formEl = document.getElementById('checkout-form-container');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Launch WhatsApp
    const phone = "254727209415";
    const message = getWhatsAppMessage();
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const formattedMsg = getWhatsAppMessage();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Backdrop overlay */}
        <div 
          className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300" 
          onClick={onClose}
        ></div>

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-lg md:max-w-xl">
            <div className="flex h-full flex-col bg-white shadow-2xl overflow-y-auto">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 bg-gradient-to-r from-red-50 to-white">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 text-white p-2 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-black text-gray-900 tracking-tight" id="slide-over-title">
                    Your Shopping Cart
                  </h2>
                </div>
                <button
                  type="button"
                  className="rounded-xl p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content body */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
                
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                    <div className="bg-red-50 p-6 rounded-full text-red-500">
                      <ShoppingCart className="h-12 w-12 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Your cart is empty</h3>
                      <p className="text-sm text-gray-500 mt-1 max-w-xs">
                        Browse our professional catalog and select items to build your WhatsApp order.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-red-100 cursor-pointer text-sm"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Cart Items List */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Selected Items ({cartItems.length})
                        </span>
                        <button
                          type="button"
                          onClick={onClearCart}
                          className="text-xs font-bold text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded transition-colors cursor-pointer"
                        >
                          Clear All Items
                        </button>
                      </div>

                      <div className="space-y-3">
                        {cartItems.map((item) => (
                          <div
                            key={item.product.id}
                            className="flex items-center justify-between border border-gray-100 p-3 rounded-xl bg-white hover:border-gray-200 transition-colors shadow-sm"
                          >
                            <img
                              src={item.product.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=150'}
                              alt={item.product.name}
                              className="h-14 w-14 object-cover rounded-lg shrink-0 border border-gray-50"
                              referrerPolicy="no-referrer"
                            />
                            <div className="ml-3 flex-1 min-w-0 pr-2">
                              <h4 className="text-sm font-extrabold text-gray-900 truncate">
                                {item.product.name}
                              </h4>
                              <p className="text-xs font-semibold text-gray-500">
                                KES {item.product.price.toLocaleString()} {item.product.unit ? `per ${item.product.unit}` : ''}
                              </p>
                              <p className="text-[11px] font-bold text-red-600 mt-0.5">
                                Sub: KES {(item.product.price * item.quantity).toLocaleString()}
                              </p>
                            </div>

                            {/* Quantity Editor in Cart */}
                            <div className="flex items-center space-x-1 border border-gray-100 bg-gray-50 rounded-lg p-0.5 mr-2 shrink-0">
                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                                className="h-6 w-6 rounded bg-white text-gray-600 hover:text-red-500 hover:bg-gray-100 flex items-center justify-center transition-all cursor-pointer"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-6 text-center text-xs font-black text-gray-800">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="h-6 w-6 rounded bg-white text-gray-600 hover:text-red-500 hover:bg-gray-100 flex items-center justify-center transition-all cursor-pointer"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            {/* Remove Item */}
                            <button
                              type="button"
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-gray-400 hover:text-red-600 p-1.5 hover:bg-red-50 rounded-lg transition-all shrink-0 cursor-pointer"
                              title="Delete item"
                            >
                              <Trash2 className="h-4.5 w-4.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Total */}
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium text-gray-500">
                        <span>Items Subtotal:</span>
                        <span>KES {subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-medium text-gray-500 border-b border-gray-100 pb-2">
                        <span>Estimated Delivery Fees:</span>
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-black">CALCULATED ON CHAT</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                        <span className="text-base font-black text-gray-900">Total Order Cost:</span>
                        <span className="text-2xl font-black text-red-600">KES {subtotal.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Delivery & Customer Info Form */}
                    <div id="checkout-form-container" className="space-y-5 border-t border-gray-100 pt-6">
                      <h3 className="text-base font-black text-gray-900 flex items-center">
                        <Truck className="h-5 w-5 mr-2 text-red-600" />
                        <span>Delivery & Customer Details</span>
                      </h3>

                      <form onSubmit={handleCheckout} className="space-y-4">
                        <div>
                          <label htmlFor="customer-name" className="block text-xs font-extrabold text-gray-700 uppercase mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="customer-name"
                            name="name"
                            value={orderDetails.name}
                            onChange={handleInputChange}
                            placeholder="e.g. Abigael Jerop"
                            className={`w-full px-4 py-2.5 bg-white border rounded-xl text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 transition-colors ${
                              errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                            }`}
                          />
                          {errors.name && <p className="text-xs text-red-500 mt-1 font-bold">{errors.name}</p>}
                        </div>

                        <div>
                          <label htmlFor="customer-phone" className="block text-xs font-extrabold text-gray-700 uppercase mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="customer-phone"
                            name="phone"
                            value={orderDetails.phone}
                            onChange={handleInputChange}
                            placeholder="e.g. 0727 209 415"
                            className={`w-full px-4 py-2.5 bg-white border rounded-xl text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 transition-colors ${
                              errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                            }`}
                          />
                          {errors.phone && <p className="text-xs text-red-500 mt-1 font-bold">{errors.phone}</p>}
                        </div>

                        <div>
                          <label htmlFor="delivery-method-select" className="block text-xs font-extrabold text-gray-700 uppercase mb-1">
                            Preferred Delivery Method
                          </label>
                          <select
                            id="delivery-method-select"
                            name="deliveryMethod"
                            value={orderDetails.deliveryMethod}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 transition-colors"
                          >
                            <option value="rider">Rider Delivery (Within Kericho County)</option>
                            <option value="courier">Courier - G4S / Wells Fargo (Countrywide)</option>
                            <option value="pickup">Store Pick-up (Tengecha Lane, Kericho)</option>
                          </select>
                        </div>

                        {orderDetails.deliveryMethod !== 'pickup' && (
                          <div>
                            <label htmlFor="customer-location" className="block text-xs font-extrabold text-gray-700 uppercase mb-1">
                              Delivery Location / Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="customer-location"
                              name="deliveryLocation"
                              value={orderDetails.deliveryLocation}
                              onChange={handleInputChange}
                              placeholder="e.g. Kericho Town Center, Temple Road, Kericho"
                              className={`w-full px-4 py-2.5 bg-white border rounded-xl text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 transition-colors ${
                                errors.deliveryLocation ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                              }`}
                            />
                            {errors.deliveryLocation && (
                              <p className="text-xs text-red-500 mt-1 font-bold">{errors.deliveryLocation}</p>
                            )}
                          </div>
                        )}

                        <div>
                          <label htmlFor="customer-notes" className="block text-xs font-extrabold text-gray-700 uppercase mb-1">
                            Order Notes / Special Instructions
                          </label>
                          <textarea
                            id="customer-notes"
                            name="notes"
                            rows={2}
                            value={orderDetails.notes}
                            onChange={handleInputChange}
                            placeholder="e.g. Send high-quality heavy files only, or specify invoice requirements..."
                            className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 transition-colors"
                          ></textarea>
                        </div>

                        {/* Checkout CTA */}
                        <div className="pt-4">
                          <button
                            type="submit"
                            id="whatsapp-checkout-btn"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black py-4 px-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer text-sm tracking-wide uppercase"
                          >
                            <Phone className="h-4.5 w-4.5 fill-white stroke-none" />
                            <span>Order Now</span>
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-3 border border-amber-100 text-amber-800 flex items-start space-x-2 text-xs">
                      <AlertTriangle className="h-4.5 w-4.5 shrink-0 mt-0.5 text-amber-600" />
                      <div>
                        <p className="font-extrabold">How WhatsApp Checkout Works:</p>
                        <p className="text-[11px] text-amber-700 leading-relaxed mt-0.5">
                          When you click the button above, the official WhatsApp web/app interface will securely open with your formatted cart items. No account setup or card payment is required here; we confirm pricing, invoices, and deliver instantly!
                        </p>
                      </div>
                    </div>
                  </>
                )}

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
