/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingCart, Menu, X, BookOpen, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Header({ activeTab, setActiveTab, cartCount, onOpenCart }: HeaderProps) {
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
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="bg-gradient-to-br from-amber-500 to-red-600 text-white p-2.5 rounded-xl shadow-md shadow-red-100 flex items-center justify-center">
              <BookOpen className="h-6 w-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-gray-900 flex items-center">
                Z<span className="text-red-600">MAX</span>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded ml-2 uppercase tracking-wider">
                  Stationers
                </span>
              </span>
              <p className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">General Stationery & Books</p>
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

          {/* Cart & Mobile Toggler */}
          <div className="flex items-center space-x-4">
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="relative p-2.5 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-xl transition-all duration-200 border border-gray-100 cursor-pointer"
              aria-label="View shopping cart"
            >
              <ShoppingCart className="h-5.5 w-5.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-sm border-2 border-white animate-bounce-short">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-xl border border-gray-100 transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
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
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-amber-500 text-white py-3 rounded-xl font-bold shadow-md shadow-red-100 cursor-pointer"
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
