/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Truck, 
  SlidersHorizontal, 
  Search, 
  FileText, 
  Printer, 
  Users, 
  ShieldCheck, 
  Briefcase,
  Layers,
  GraduationCap,
  MessageSquare,
  Home,
  Grid,
  ShoppingCart
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import WhatsAppFloatingWidget from './components/WhatsAppFloatingWidget';

import { PRODUCTS, CATEGORIES } from './data/products';
import { Product, CartItem, CategoryType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(45000);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showDesktopSuggestions, setShowDesktopSuggestions] = useState<boolean>(false);

  // Automatically switch to 'all' category when user is actively searching
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setSelectedCategory('all');
    }
  }, [searchQuery]);

  // Local Storage integration for Cart memory
  useEffect(() => {
    const savedCart = localStorage.getItem('zmax_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error reading cart from localStorage", e);
      }
    }
  }, []);

  const saveCartToLocalStorage = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem('zmax_cart', JSON.stringify(updatedCart));
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number) => {
    const existingIndex = cartItems.findIndex((item) => item.product.id === product.id);
    let updatedCart = [...cartItems];
    if (existingIndex > -1) {
      updatedCart[existingIndex].quantity += quantity;
    } else {
      updatedCart.push({ product, quantity });
    }
    saveCartToLocalStorage(updatedCart);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    const updatedCart = cartItems.map((item) => 
      item.product.id === productId ? { ...item, quantity } : item
    );
    saveCartToLocalStorage(updatedCart);
  };

  const handleRemoveFromCart = (productId: string) => {
    const updatedCart = cartItems.filter((item) => item.product.id !== productId);
    saveCartToLocalStorage(updatedCart);
  };

  const handleClearCart = () => {
    saveCartToLocalStorage([]);
  };

  const handleCategoryQuickFilter = (catId: CategoryType) => {
    setSelectedCategory(catId);
    setSearchQuery('');
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('all');
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter & Sort Products logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const query = searchQuery.trim().toLowerCase();
    
    let matchesSearch = true;
    if (query) {
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

      matchesSearch = nameMatch || descMatch || catMatch || catIdMatch || brandMatch || implicitBrandMatch || keywordsMatch;
    }
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    // Default sorting (Featured first, then ID)
    if (sortBy === 'featured') {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
    }
    return 0;
  });

  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 8);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* Top Notification Promo Ribbon */}
      <div className="bg-gradient-to-r from-red-600 to-amber-500 text-white py-2 px-4 text-center text-xs sm:text-sm font-black tracking-wide flex justify-center items-center gap-2">
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] uppercase font-black">Hot Deals</span>
        <span>Get genuine school & office stationery delivered countrywide!</span>
        <button 
          onClick={() => { setActiveTab('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="underline font-bold text-white hover:text-red-100 transition-colors cursor-pointer"
        >
          Shop Now
        </button>
      </div>

      {/* Main Header navigation */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Layout Views */}
      <main className="flex-1 pb-20 md:pb-0">
        
        {/* VIEW 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-20 pb-20">
            {/* Hero Banner Section */}
            <HeroSection 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              onBrowseAll={() => handleCategoryQuickFilter('all')}
            />

            {/* Quick Category Grid */}
            <section id="home-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl">
                  Shop by Category
                </h2>
                <p className="text-gray-500 font-medium">
                  Select a department to view high-quality items specifically suited for your business, school, or creative project.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-12">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => handleCategoryQuickFilter(cat.id)}
                    className="group bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center cursor-pointer hover:border-red-100 hover:shadow-lg hover:shadow-red-50/40 transition-all duration-300"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-4.5 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                      <Layers className="h-6 w-6" />
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base text-gray-900 leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1.5 leading-normal line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Bestselling / Featured Products Section */}
            <section id="home-featured" className="bg-white py-20 border-y border-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
                  <div className="text-center sm:text-left space-y-2">
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl">
                      Featured & Best Sellers
                    </h2>
                    <p className="text-gray-500 font-medium text-sm">
                      Check out our most popular textbooks, scientific tools, and executive equipment.
                    </p>
                  </div>
                  <button
                    onClick={() => handleCategoryQuickFilter('all')}
                    className="inline-flex items-center space-x-1.5 text-red-600 hover:text-red-700 font-bold text-sm bg-red-50 hover:bg-red-100 px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    <span>View All Products</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                  {featuredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                      isInCart={cartItems.some((item) => item.product.id === product.id)}
                      cartQuantity={cartItems.find((item) => item.product.id === product.id)?.quantity || 0}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Core Brochure Representation (Large Format, Toners, Photocopy) */}
            <section id="home-services-intro" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-red-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-red-600 rounded-full filter blur-3xl opacity-10 -translate-y-12 translate-x-12"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <span className="bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                      Professional Printing & Supply
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                      Dealers in Office Equipment & Large Format Printing
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      ZMAX GENERAL STATIONERS LTD is more than just a stationery dealer. We specialize in corporate supplies, computer cartridges/toners, laminating films, and premium large-format printing services. Contact us today for customized school catalogs, banners, or large architectural blueprints.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-xs font-bold pt-4 text-slate-200">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                        <span>High-volume Photocopying</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                        <span>Corporate Bulk Supplies</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                        <span>Plotting & Blueprints</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                        <span>Official Brand Toners</span>
                      </div>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4">
                      <button
                        onClick={() => {
                          const phone = "254727209415";
                          const message = "Hello ZMAX General Stationers, I would like to inquire about printing services or a customized corporate supply quote.";
                          window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-6 py-3.5 rounded-xl transition-all shadow-md shadow-red-950 flex items-center space-x-2 cursor-pointer text-sm"
                      >
                        <Phone className="h-4 w-4 fill-white stroke-none" />
                        <span>Inquire on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => { setActiveTab('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="border border-slate-700 hover:border-slate-500 text-slate-100 hover:text-white font-bold px-6 py-3.5 rounded-xl transition-all cursor-pointer text-sm"
                      >
                        Explore Services
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 backdrop-blur-sm">
                      <Printer className="h-8 w-8 text-red-500" />
                      <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-100">Large Printing</h3>
                      <p className="text-xs text-slate-400 leading-normal">Banners, maps, plans, and architectural plot printings done instantly.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 backdrop-blur-sm">
                      <FileText className="h-8 w-8 text-amber-500" />
                      <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-100">Bespoke Files</h3>
                      <p className="text-xs text-slate-400 leading-normal">Lever arch files, box folders, and binder covers with branding available.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 backdrop-blur-sm">
                      <GraduationCap className="h-8 w-8 text-emerald-500" />
                      <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-100">School Supply</h3>
                      <p className="text-xs text-slate-400 leading-normal">Academic exercise books, mathematics tools, and syllabus manuals.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-3 backdrop-blur-sm">
                      <Briefcase className="h-8 w-8 text-indigo-500" />
                      <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-100">Office Setup</h3>
                      <p className="text-xs text-slate-400 leading-normal">Whole department supply from executive pens, punchers, and tapes.</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Why Shop With Us Banner */}
            <section id="home-benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
              <div className="max-w-3xl mx-auto space-y-3">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl">
                  Simple, Seamless Stationery Purchases
                </h2>
                <p className="text-gray-500 font-medium">
                  Why thousands of corporate entities and schools in Kenya trust ZMAX General Stationers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4 hover:shadow-lg transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-black text-lg text-gray-900">100% Genuine Items</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    We source directly from world-class manufacturers like Helix Oxford, Casio, and Kartasi Brand to ensure superior performance and authenticity.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4 hover:shadow-lg transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                    <Truck className="h-6 w-6" />
                  </div>
                  <h3 className="font-black text-lg text-gray-900">Swift Delivery Countrywide</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Receive your stationery packages on the same day in Kericho via swift riders, or within 24 hours across Kenya through reliable G4S / Wells Fargo courier.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-4 hover:shadow-lg transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-black text-lg text-gray-900">Instant WhatsApp Order</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Skip tedious manual checkouts and login forms! Simply load your cart and click WhatsApp Checkout to instantly share lists with our dedicated billing staff.
                  </p>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="home-testimonials" className="bg-gray-100/60 py-20 border-t border-gray-200/40">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                    Trusted by Schools & Corporate Teams
                  </h2>
                  <p className="text-gray-500 text-sm font-medium">
                    Read the feedback from procurement professionals and parents who order from ZMAX.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4 shadow-sm">
                    <p className="text-xs text-amber-500 font-bold flex">★★★★★</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
                      "ZMAX supplied all the math sets, scientific calculators, and exercise files for our high school department. The Oxford tins and Casio calculators are 100% genuine and the prices are unmatched."
                    </p>
                    <div className="border-t border-gray-50 pt-3">
                      <h4 className="text-xs font-black text-gray-900">Principal M. Kiprop</h4>
                      <p className="text-[10px] text-gray-400">Kericho Academic High School</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4 shadow-sm">
                    <p className="text-xs text-amber-500 font-bold flex">★★★★★</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
                      "Ordering via WhatsApp is extremely fast. We compiled our quarterly office files, printing papers, and pen stocks in the online cart, sent it, and riders delivered it to our Westlands offices in 3 hours."
                    </p>
                    <div className="border-t border-gray-50 pt-3">
                      <h4 className="text-xs font-black text-gray-900">Abigael Chebet</h4>
                      <p className="text-[10px] text-gray-400">Procurement Lead, Horizon Logistics</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4 shadow-sm">
                    <p className="text-xs text-amber-500 font-bold flex">★★★★★</p>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed italic">
                      "ZMAX has become our default place to find rare educational and inspirational literature. The Kalenjin Bibles, 48 Laws of Power, and Hustle books were perfectly packaged. Fantastic customer support!"
                    </p>
                    <div className="border-t border-gray-50 pt-3">
                      <h4 className="text-xs font-black text-gray-900">Francis Omollo</h4>
                      <p className="text-[10px] text-gray-400">Avid Reader & Book Club Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* VIEW 2: SHOP / CATALOG */}
        {activeTab === 'shop' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            <div className="space-y-8">
              {/* Header Info */}
              <div className="space-y-2">
                <h1 className="text-3xl font-black text-gray-900 tracking-tight sm:text-4xl">
                  Product Catalog & Store
                </h1>
                <p className="text-gray-500 font-medium text-sm">
                  Search, filter, and compile your stationery order list below. Everything is available for wholesale and retail delivery.
                </p>
              </div>

              {/* Filters Panel */}
              <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm space-y-6">
                
                {/* Search & Category Selectors */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  
                  {/* Search Bar */}
                  <div className="lg:col-span-5 relative flex items-center bg-gray-50 rounded-xl p-1.5 border border-gray-100 focus-within:border-red-300 focus-within:bg-white transition-all">
                    <Search className="absolute left-4 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for bibles, rulers, recorders..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowDesktopSuggestions(true);
                      }}
                      onFocus={() => setShowDesktopSuggestions(true)}
                      onBlur={() => {
                        // Delay closing the suggestions dropdown so users can click on results
                        setTimeout(() => setShowDesktopSuggestions(false), 250);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setShowDesktopSuggestions(false);
                          setSelectedCategory('all');
                          setActiveTab('shop');
                          (e.target as HTMLInputElement).blur();
                        }
                      }}
                      className="w-full pl-10 pr-10 py-2 bg-transparent text-gray-800 placeholder-gray-400 font-medium text-sm outline-none border-none focus:ring-0 rounded-lg"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setShowDesktopSuggestions(false);
                        }}
                        className="absolute right-4 text-xs font-black text-gray-400 hover:text-gray-600 active:text-gray-900 px-1 py-1 cursor-pointer"
                        title="Clear search query"
                      >
                        Clear
                      </button>
                    )}

                    {/* Desktop Autocomplete Dropdown */}
                    {showDesktopSuggestions && searchQuery.trim().length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-150 rounded-2xl shadow-xl max-h-80 overflow-y-auto z-50">
                        {filteredProducts.length === 0 ? (
                          <div className="p-4 text-center text-sm text-gray-500 font-medium">
                            No products found.
                          </div>
                        ) : (
                          <div className="p-2 space-y-1">
                            <div className="px-3 py-1.5 text-[10px] font-black text-gray-400 uppercase tracking-wider border-b border-gray-50 mb-1">
                              Matching Products ({filteredProducts.length})
                            </div>
                            {filteredProducts.slice(0, 6).map((product) => {
                              const catObj = CATEGORIES.find(c => c.id === product.category);
                              return (
                                <button
                                  key={product.id}
                                  onClick={() => {
                                    setSearchQuery(product.name);
                                    setShowDesktopSuggestions(false);
                                    setSelectedCategory('all');
                                    setActiveTab('shop');
                                    setTimeout(() => {
                                      const element = document.getElementById(`product-card-${product.id}`);
                                      if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        element.classList.add('ring-2', 'ring-red-500');
                                        setTimeout(() => element.classList.remove('ring-2', 'ring-red-500'), 2000);
                                      }
                                    }, 150);
                                  }}
                                  className="w-full flex items-center p-2 rounded-xl hover:bg-gray-50 transition-colors text-left"
                                >
                                  <img
                                    src={product.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=150'}
                                    alt={product.name}
                                    className="h-10 w-10 object-contain rounded-lg border border-gray-100 bg-gray-50/50 p-1 mr-3 shrink-0"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-gray-900 truncate">{product.name}</h4>
                                    <p className="text-[11px] text-gray-400 font-medium truncate">
                                      {catObj?.name || product.category}
                                    </p>
                                  </div>
                                  <span className="text-xs font-black text-red-600 ml-2">
                                    KES {product.price.toLocaleString()}
                                  </span>
                                </button>
                              );
                            })}
                            {filteredProducts.length > 6 && (
                              <button
                                onClick={() => {
                                  setSelectedCategory('all');
                                  setActiveTab('shop');
                                  setShowDesktopSuggestions(false);
                                }}
                                className="w-full text-center py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl transition-all"
                              >
                                View all {filteredProducts.length} results
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Category Pill Buttons (Horizontal Scrollable Chips) */}
                  <div className="lg:col-span-7 flex overflow-x-auto gap-2.5 pb-2.5 pt-1 scrollbar-none scroll-smooth snap-x -mx-4 px-4 sm:mx-0 sm:px-0 select-none">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide uppercase whitespace-nowrap snap-center shrink-0 transition-all cursor-pointer ${
                        selectedCategory === 'all'
                          ? 'bg-red-600 text-white shadow-md shadow-red-100'
                          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      All Departments
                    </button>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide uppercase whitespace-nowrap snap-center shrink-0 transition-all cursor-pointer ${
                          selectedCategory === cat.id
                            ? 'bg-red-600 text-white shadow-md shadow-red-100'
                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                </div>

                {/* Fine Controls: Sorting and Price Limit Slider */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-50 pt-4 gap-4">
                  
                  {/* Price Filter */}
                  <div className="flex items-center space-x-3 bg-gray-50/60 p-2.5 rounded-xl border border-gray-100 shrink-0">
                    <SlidersHorizontal className="h-4 w-4 text-gray-400" />
                    <span className="text-xs font-bold text-gray-500">Max Price:</span>
                    <input
                      type="range"
                      min="10"
                      max="45000"
                      step="50"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-24 sm:w-36 accent-red-600 h-1 bg-gray-200 rounded-lg cursor-pointer"
                    />
                    <span className="text-xs font-extrabold text-red-600">KES {maxPrice.toLocaleString()}</span>
                  </div>

                  {/* Sorting */}
                  <div className="flex items-center space-x-2.5">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-gray-50 border border-gray-100 hover:border-red-200 rounded-xl px-4 py-2 text-xs font-extrabold text-gray-700 outline-none focus:ring-1 focus:ring-red-400 transition-all"
                    >
                      <option value="featured">Best Sellers & Featured First</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="name-asc">Alphabetical: A to Z</option>
                    </select>
                  </div>

                </div>

              </div>

              {/* Products Display Grid */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 space-y-4">
                  <div className="inline-flex items-center justify-center p-6 bg-red-50 text-red-500 rounded-full">
                    <Search className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">No products found.</h3>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto mt-1">
                      No matches found for your current search or filters. Try relaxing your price limit slider or changing the search query!
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setMaxPrice(45000);
                      setSortBy('featured');
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all shadow-md text-xs cursor-pointer"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center px-2">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                      Displaying {filteredProducts.length} items in Kenya
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                        isInCart={cartItems.some((item) => item.product.id === product.id)}
                        cartQuantity={cartItems.find((item) => item.product.id === product.id)?.quantity || 0}
                      />
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

        {/* VIEW 3: ABOUT US */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">
            
            {/* Story */}
            <div className="text-center space-y-4">
              <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                Corporate Profile
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                About ZMAX General Stationers Ltd
              </h1>
              <p className="text-gray-500 font-medium text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                We are a customer-centric commercial enterprise specializing in wholesale supply, retail distribution, academic textbooks, physical office accessories, and architectural blueprinting.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 space-y-8 shadow-sm">
              <div className="space-y-4">
                <h2 className="text-xl font-black text-gray-900">Our Corporate Overview</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Founded with a vision to deliver unmatched premium quality tools, ZMAX General Stationers Ltd has established itself as Kenya’s premier procurement partner for government institutions, private corporate departments, commercial banks, secondary academies, and technical drawing students.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We are primary stockists for leading global brands such as <strong>Helix Oxford</strong>, <strong>Casio</strong>, <strong>Kartasi</strong>, <strong>Pelikan</strong>, and <strong>Staedtler</strong>. We maintain extensive inventories in our central warehouses, ensuring prompt supply lines and zero-delay logistics.
                </p>
              </div>

              {/* Core capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-50">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-50 text-red-600 p-2 rounded-xl shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900 uppercase">Trusted Quality Assurance</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-normal">Every single product undergoes double inspections before transit. We never supply generic counterfeits.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl shrink-0">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900 uppercase">Same-Day Supply Network</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-normal">Our dedicated delivery fleet and partner riders ensure local and countrywide businesses stay fully stocked with zero downtime.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-amber-50 text-amber-600 p-2 rounded-xl shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900 uppercase">Dedicated Support Line</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-normal">Talk to our live agents directly on WhatsApp! No robotic chat trees; get real humans to handle customized quote requests.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900 uppercase">Wholesale Discounts</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-normal">Get unbeatable wholesale prices on bulk boxes of files, boxes of pencils, bulk paper cartons, and printers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values / Brochure Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-red-600 to-amber-500 text-white rounded-3xl p-8 space-y-4 shadow-lg">
                <h3 className="font-black text-lg sm:text-xl">Our Mission</h3>
                <p className="text-red-50 text-xs sm:text-sm leading-relaxed font-medium">
                  To supply exceptional quality office products, motivational textbooks, and professional drafting tools to all corners of East Africa, driving corporate excellence and scholastic achievement through prompt delivery and affordable cost structures.
                </p>
              </div>

              <div className="bg-slate-900 text-slate-100 rounded-3xl p-8 space-y-4 shadow-lg">
                <h3 className="font-black text-lg sm:text-xl">Our Vision</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  To be the ultimate leading procurement destination for academic learning materials and professional office supplies across East Africa, powered by modern, convenient, and safe instant shopping technologies.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 4: SERVICES */}
        {activeTab === 'services' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
            
            <div className="text-center space-y-4">
              <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                Services & Custom Orders
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Our Professional Solutions
              </h1>
              <p className="text-gray-500 font-medium text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                ZMAX General Stationers Ltd provides bespoke institutional solutions tailored for busy schools, creative agencies, and corporate offices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                  <Printer className="h-6 w-6" />
                </div>
                <h3 className="font-black text-lg text-gray-900">Large Format Printing</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  We render high-resolution architectural blueprints, institutional posters, visual classroom charts, corporate marketing banners, and maps with precision ink.
                </p>
                <button
                  onClick={() => {
                    const phone = "254727209415";
                    const message = "Hello ZMAX, I would like to get a quote for Large Format Printing (Banners/Blueprints).";
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
                  }}
                  className="text-red-600 hover:text-red-700 font-extrabold text-xs inline-flex items-center space-x-1 cursor-pointer"
                >
                  <span>Request Quote on WhatsApp</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="font-black text-lg text-gray-900">Corporate Bulk Procurement</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Establish a quarterly supply channel for your office team! We provide custom invoices, delivery notes, and bulk box quantities of files, pens, paper reams, and toners.
                </p>
                <button
                  onClick={() => {
                    const phone = "254727209415";
                    const message = "Hello ZMAX, I would like to discuss setting up corporate stationery supplies for our company offices.";
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
                  }}
                  className="text-amber-600 hover:text-amber-700 font-extrabold text-xs inline-flex items-center space-x-1 cursor-pointer"
                >
                  <span>Inquire Bulk Channels</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 space-y-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-black text-lg text-gray-900">School Book Supply</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  We supply academic textbooks, revision materials, bibles (including Kalenjin, Swahili, and King James Expositor), scientific instruments, and student musical recorders.
                </p>
                <button
                  onClick={() => {
                    const phone = "254727209415";
                    const message = "Hello ZMAX, I am a school representative looking to buy academic books/bibles and instruments in bulk.";
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
                  }}
                  className="text-emerald-600 hover:text-emerald-700 font-extrabold text-xs inline-flex items-center space-x-1 cursor-pointer"
                >
                  <span>Get School Catalog</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* VIEW 5: CONTACT US */}
        {activeTab === 'contact' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
            
            <div className="text-center space-y-4">
              <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                Get in Touch
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Contact ZMAX General Stationers
              </h1>
              <p className="text-gray-500 font-medium text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                We respond immediately! Place your custom order or request directions to our physical office.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Contact Information Cards */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Physical Location */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm">
                  <div className="bg-red-50 text-red-600 p-3 rounded-xl shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900 uppercase">Physical Address</h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1">
                      ZMAX Stationers Center, Tengecha Lane, Kericho, Kenya.
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm">
                  <div className="bg-amber-50 text-amber-600 p-3 rounded-xl shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900 uppercase">Phone Hotlines</h3>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-1 font-bold">
                      0727 209 415 <br />
                      0788 808 878
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Call or WhatsApp anytime</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm">
                  <div className="bg-red-50 text-red-500 p-3 rounded-xl shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900 uppercase">Email Support</h3>
                    <p className="text-xs sm:text-sm text-gray-700 font-bold mt-1 leading-relaxed">
                      zmaxstationersltd@gmail.com
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">We reply to quotes within 1 hour</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm">
                  <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900 uppercase">Business Hours</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      Sun - Fri: 8:00 AM - 6:30 PM <br />
                      Saturday: Closed
                    </p>
                  </div>
                </div>

              </div>

              {/* High-Converting Contact Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h3 className="font-black text-xl text-gray-900 mb-6">Send an Instant Message</h3>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const subject = formData.get('subject');
                    const content = formData.get('message');
                    
                    const phone = "254727209415";
                    const formattedMessage = `
Hello ZMAX Stationers,
I am sending a message from your website contact form:
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${content}
`;
                    const url = `https://wa.me/${phone}?text=${encodeURIComponent(formattedMessage.trim())}`;
                    window.open(url, "_blank");
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="contact-name" 
                        name="name" 
                        required 
                        placeholder="Abigael Jerop" 
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:border-red-400 focus:bg-white focus:outline-none rounded-xl text-sm font-medium transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Your Email</label>
                      <input 
                        type="email" 
                        id="contact-email" 
                        name="email" 
                        required 
                        placeholder="abigael@example.com" 
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:border-red-400 focus:bg-white focus:outline-none rounded-xl text-sm font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="contact-subject" 
                      name="subject" 
                      required 
                      placeholder="e.g. Bulk file folder price quotes" 
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:border-red-400 focus:bg-white focus:outline-none rounded-xl text-sm font-medium transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-extrabold text-gray-700 uppercase mb-1">Message</label>
                    <textarea 
                      id="contact-message" 
                      name="message" 
                      rows={4} 
                      required 
                      placeholder="Write your custom request or query here..." 
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 focus:border-red-400 focus:bg-white focus:outline-none rounded-xl text-sm font-medium transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md flex items-center justify-center space-x-2 transition-colors cursor-pointer text-sm"
                  >
                    <Phone className="h-4 w-4 fill-white stroke-none" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>
                </form>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* Floating interactive elements */}
      <WhatsAppFloatingWidget />

      {/* Slide-out Shopping Cart drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Footer component */}
      <Footer setActiveTab={setActiveTab} />

      {/* Mobile Bottom Navigation Bar */}
      <nav id="mobile-bottom-nav" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-150 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] h-16 md:hidden flex items-center justify-around px-2 select-none pb-safe">
        
        {/* Home Button */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${
            activeTab === 'home' ? 'text-red-600 font-black scale-102' : 'text-gray-400 font-bold hover:text-gray-600'
          }`}
          aria-label="Go to Home"
        >
          <Home className="h-5 w-5" />
          <span className="text-[10px] mt-1 tracking-tight">Home</span>
        </button>

        {/* Catalog Button */}
        <button
          onClick={() => {
            setActiveTab('shop');
            setSelectedCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center w-14 h-12 rounded-xl transition-all ${
            activeTab === 'shop' ? 'text-red-600 font-black scale-102' : 'text-gray-400 font-bold hover:text-gray-600'
          }`}
          aria-label="View Product Catalog"
        >
          <Grid className="h-5 w-5" />
          <span className="text-[10px] mt-1 tracking-tight">Catalog</span>
        </button>

        {/* Cart Button with Count Badge */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center w-12 h-12 rounded-xl text-gray-400 font-bold hover:text-gray-600"
          aria-label="Open Cart Sheet"
        >
          <div className="relative">
            <ShoppingCart className={`h-5 w-5 ${cartItems.length > 0 ? 'text-red-600' : 'text-gray-400'}`} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-black h-4.5 w-4.5 rounded-full flex items-center justify-center border border-white shadow-sm">
                {cartItems.length}
              </span>
            )}
          </div>
          <span className={`text-[10px] mt-1 tracking-tight ${cartItems.length > 0 ? 'text-red-600 font-black' : 'text-gray-400'}`}>Cart</span>
        </button>

        {/* WhatsApp Chat Button */}
        <button
          onClick={() => {
            const phone = "254727209415";
            const message = "Hello ZMAX Stationers, I am browsing your online store and would like to ask a question.";
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
          }}
          className="flex flex-col items-center justify-center w-12 h-12 rounded-xl text-emerald-600 font-bold active:scale-95 transition-transform"
          aria-label="WhatsApp Hotline Chat"
        >
          <Phone className="h-5 w-5 fill-emerald-600 stroke-none" />
          <span className="text-[10px] mt-1 tracking-tight font-black text-emerald-600">WhatsApp</span>
        </button>

        {/* Contact Button */}
        <button
          onClick={() => {
            setActiveTab('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${
            activeTab === 'contact' ? 'text-red-600 font-black scale-102' : 'text-gray-400 font-bold hover:text-gray-600'
          }`}
          aria-label="View Contact Information"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-[10px] mt-1 tracking-tight">Contact</span>
        </button>
      </nav>

    </div>
  );
}
