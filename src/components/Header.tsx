/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingCart, Menu, X, BookOpen, Search, Phone } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ 
  activeTab, 
  setActiveTab, 
  cartCount, 
  onOpenCart,
  searchQuery,
  setSearchQuery 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'All Products' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Row: Logo, Actions & Toggler */}
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo - Compact and Touch-friendly */}
          <div className="flex items-center space-x-2.5 cursor-pointer select-none" onClick={() => handleNavClick('home')}>
            <div className="bg-gradient-to-br from-amber-500 to-red-600 text-white p-2 rounded-xl shadow-md flex items-center justify-center shrink-0">
              <BookOpen className="h-5.5 w-5.5 stroke-[2.5]" />
            </div>
            <div className="min-w-0">
              <span className="text-xl md:text-2xl font-black tracking-tight text-gray-900 flex items-center">
                Z<span className="text-red-600">MAX</span>
                <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1 py-0.2 rounded ml-1.5 uppercase tracking-wide">
                  Stationers
                </span>
              </span>
              <p className="text-[9px] text-gray-500 font-medium tracking-wide uppercase truncate">General Stationery & Books</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-red-50 text-red-600 shadow-sm'
                    : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Cart, WhatsApp & Mobile Toggler */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* WhatsApp Header Quick Call (Mobile-friendly) */}
            <button
              onClick={() => {
                const phone = "254727209415";
                const message = "Hello ZMAX Stationers, I'm browsing your online store and would like to ask a question.";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
              }}
              className="p-3 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 rounded-xl transition-all cursor-pointer h-11 w-11 flex items-center justify-center border border-emerald-50"
              aria-label="Chat on WhatsApp"
            >
              <Phone className="h-5 w-5 fill-emerald-600 stroke-none" />
            </button>

            {/* Shopping Cart Button */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="relative p-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 active:bg-gray-100 rounded-xl transition-all duration-200 border border-gray-100 cursor-pointer h-11 w-11 flex items-center justify-center"
              aria-label="View shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-sm border-2 border-white animate-bounce-short">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 text-gray-700 hover:text-red-600 active:bg-gray-100 rounded-xl border border-gray-100 transition-all duration-200 h-11 w-11 flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Lower Row: Mobile Sticky Search Bar (below logo) */}
        <div className="md:hidden pb-3.5 pt-0.5">
          <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3.5 h-12 focus-within:border-red-300 focus-within:bg-white focus-within:ring-1 focus-within:ring-red-100 transition-all">
            <Search className="h-5 w-5 text-gray-400 mr-2.5 shrink-0" />
            <input
              type="text"
              placeholder="Search bibles, office files, school books..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeTab !== 'shop') {
                  setActiveTab('shop');
                }
              }}
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 font-medium text-base outline-none border-none p-0 focus:ring-0"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs font-black text-gray-400 hover:text-gray-600 active:text-gray-900 px-1 py-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-slide-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-red-50 text-red-600'
                    : 'text-gray-600 hover:text-red-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-50">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-amber-500 text-white py-3.5 rounded-xl font-bold shadow-md cursor-pointer"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>View Cart ({cartCount} Items)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
