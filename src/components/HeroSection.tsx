/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Sparkles, Shield, ArrowRight, Truck } from 'lucide-react';
// @ts-ignore
import heroImage from '../assets/images/stationery_hero_banner_1784129879938.jpg';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit: (query: string) => void;
  onBrowseAll: () => void;
}

export default function HeroSection({ searchQuery, setSearchQuery, onSearchSubmit, onBrowseAll }: HeroSectionProps) {
  const [localSearch, setLocalSearch] = React.useState(searchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(localSearch);
  };

  const handleQuickTagClick = (tag: string) => {
    setLocalSearch(tag);
    onSearchSubmit(tag);
  };

  const quickTags = [
    'Oxford Set',
    'Scientific Calculator',
    'Lever Arch File',
    'Expositor Bible',
    'Drawing Set',
  ];

  return (
    <section id="hero-banner-section" className="relative bg-gray-50 overflow-hidden">
      
      {/* Background Graphic elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Title, slogan and search */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
              <Sparkles className="h-4 w-4 animate-spin-slow text-amber-500" />
              <span>Kericho’s Premium Stationery Hub</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              One Destination For All Your <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">
                Stationery Needs
              </span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dealers in general stationery, school textbook bestsellers, quality photocopy papers, computer toners, original office equipment, and expert large format printing in Kenya.
            </p>

            {/* High-Converting Interactive Search */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto lg:mx-0 relative">
              <div className="relative flex items-center bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-2 border border-gray-100 group focus-within:border-red-400 transition-all duration-300">
                <Search className="absolute left-5 h-6 w-6 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                <input
                  type="text"
                  placeholder="What are you looking for today? (e.g., Casio, Oxford, File...)"
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-transparent text-gray-800 placeholder-gray-400 font-medium text-sm sm:text-base outline-none border-none focus:ring-0 rounded-xl"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-md shadow-red-200 flex items-center space-x-2 shrink-0 cursor-pointer text-sm sm:text-base"
                >
                  <span>Search</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Popular Searches:</span>
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleQuickTagClick(tag)}
                  className="text-xs font-bold text-gray-600 bg-white hover:bg-red-50 hover:text-red-600 px-3.5 py-1.5 rounded-lg border border-gray-100 hover:border-red-100 transition-all duration-150 cursor-pointer shadow-sm"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Core Value Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-left max-w-md sm:max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2.5">
                <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-900 uppercase">100% Genuine</h4>
                  <p className="text-[10px] text-gray-500">Official brands only</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="bg-amber-50 text-amber-600 p-2 rounded-xl shrink-0">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-900 uppercase">Fast Delivery</h4>
                  <p className="text-[10px] text-gray-500">Same-day inside NRB</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="bg-red-50 text-red-600 p-2 rounded-xl shrink-0">
                  <span className="font-extrabold text-sm">WA</span>
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-900 uppercase">Insta-Order</h4>
                  <p className="text-[10px] text-gray-500">Order via WhatsApp</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Banner Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-300">
              <img
                src={heroImage}
                alt="ZMAX General Stationers Storefront"
                className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Overlay banner content */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-gray-100 shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-red-600 font-extrabold uppercase tracking-widest mb-1">Corporate & Schools</p>
                    <h3 className="text-gray-900 font-black text-base sm:text-lg">Wholesale & Bulk Orders</h3>
                    <p className="text-gray-500 text-xs mt-0.5">We deliver bulk orders direct to offices and classrooms countywide.</p>
                  </div>
                  <button
                    onClick={onBrowseAll}
                    className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition-colors shadow-md shadow-red-100 shrink-0 ml-4 cursor-pointer"
                    aria-label="Shop catalog"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
