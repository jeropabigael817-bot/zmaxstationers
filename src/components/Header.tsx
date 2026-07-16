/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingCart, Menu, X, BookOpen, Search, Phone } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';

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
  const [showMobileSuggestions, setShowMobileSuggestions] = React.useState(false);

  // Filter products for mobile suggestions dropdown
  const mobileFilteredProducts = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return PRODUCTS.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(query);
      const descMatch = product.description ? product.description.toLowerCase().includes(query) : false;
      
      const catObj = CATEGORIES.find(c => c.id === product.category);
      const catMatch = catObj ? catObj.name.toLowerCase().includes(query) : false;
      const catIdMatch = product.category.toLowerCase().includes(query);
      
      const brandMatch = product.brand ? product.brand.toLowerCase().includes(query) : false;
      const implicitBrandMatch = 
        (product.name.toLowerCase().includes('canon') && 'canon'.includes(query)) ||
        (product.name.toLowerCase().includes('epson') && 'epson'.includes(query)) ||
        (product.name.toLowerCase().includes('clarity') && 'clarity'.includes(query)) ||
        (product.name.toLowerCase().includes('charity') && 'charity'.includes(query)) ||
        (product.name.toLowerCase().includes('casio') && 'casio'.includes(query)) ||
        (product.name.toLowerCase().includes('oxford') && 'oxford'.includes(query));

      const keywords = product.keywords || [];
      const keywordsMatch = keywords.some(k => k.toLowerCase().includes(query)) ||
        (product.category === 'books' && ['bible', 'book', 'hymnal', 'songbook', 'christian', 'literature', 'read', 'holy'].some(k => k.includes(query))) ||
        (product.category === 'office' && ['pen', 'file', 'folder', 'scissors', 'punch', 'tape', 'glue', 'staple', 'organize'].some(k => k.includes(query))) ||
        (product.category === 'art_math' && ['ruler', 'drawing', 'math', 'calculator', 'pencil', 'watercolor', 'canvas', 'sketch', 'paint', 'paper', 'instrument'].some(k => k.includes(query))) ||
        (product.category === 'ink_tech' && ['printer', 'ink', 'toner', 'print', 'copier', 'scanner', 'laminate', 'thermal', 'pos'].some(k => k.includes(query))) ||
        (product.category === 'accessories' && ['recorder', 'flute', 'music', 'calculator', 'ribbon', 'pouch', 'tissue', 'case', 'bag'].some(k => k.includes(query)));

      return nameMatch || descMatch || catMatch || catIdMatch || brandMatch || implicitBrandMatch || keywordsMatch;
    });
  }, [searchQuery]);

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
        <div className="md:hidden pb-3.5 pt-0.5 relative">
          <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3.5 h-12 focus-within:border-red-300 focus-within:bg-white focus-within:ring-1 focus-within:ring-red-100 transition-all">
            <Search className="h-5 w-5 text-gray-400 mr-2.5 shrink-0" />
            <input
              type="text"
              placeholder="Search bibles, office files, school books..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowMobileSuggestions(true);
                if (activeTab !== 'shop') {
                  setActiveTab('shop');
                }
              }}
              onFocus={() => setShowMobileSuggestions(true)}
              onBlur={() => {
                // Small delay to allow clicking suggestions before blur triggers
                setTimeout(() => setShowMobileSuggestions(false), 250);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowMobileSuggestions(false);
                  (e.target as HTMLInputElement).blur();
                }
              }}
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 font-medium text-base outline-none border-none p-0 focus:ring-0"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs font-black text-gray-400 hover:text-gray-600 active:text-gray-900 px-1 py-1 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Mobile Suggestions Dropdown */}
          {showMobileSuggestions && searchQuery.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-150 rounded-2xl shadow-xl max-h-72 overflow-y-auto z-50">
              {mobileFilteredProducts.length === 0 ? (
                <div className="p-4 text-center text-sm text-gray-500 font-semibold">
                  No products found.
                </div>
              ) : (
                <div className="p-1.5 space-y-0.5">
                  <div className="px-3 py-1 text-[9px] font-black text-gray-400 uppercase tracking-wider border-b border-gray-50 mb-1">
                    Suggested ({mobileFilteredProducts.length})
                  </div>
                  {mobileFilteredProducts.slice(0, 5).map((product) => {
                    const catObj = CATEGORIES.find(c => c.id === product.category);
                    return (
                      <button
                        key={product.id}
                        onClick={() => {
                          setSearchQuery(product.name);
                          setShowMobileSuggestions(false);
                          if (activeTab !== 'shop') {
                            setActiveTab('shop');
                          }
                          setTimeout(() => {
                            const element = document.getElementById(`product-card-${product.id}`);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              element.classList.add('ring-2', 'ring-red-500');
                              setTimeout(() => element.classList.remove('ring-2', 'ring-red-500'), 2000);
                            }
                          }, 150);
                        }}
                        className="w-full flex items-center p-2 rounded-xl hover:bg-gray-50 active:bg-gray-100 transition-colors text-left"
                      >
                        <img
                          src={product.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=150'}
                          alt={product.name}
                          className="h-9 w-9 object-contain rounded-lg border border-gray-100 bg-gray-50/50 p-1 mr-3 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 truncate">{product.name}</h4>
                          <p className="text-[10px] text-gray-400 font-medium truncate">
                            {catObj?.name || product.category}
                          </p>
                        </div>
                        <span className="text-xs font-black text-red-600 ml-2">
                          KES {product.price.toLocaleString()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
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
