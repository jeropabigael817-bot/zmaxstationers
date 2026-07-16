/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Clock, BookOpen, Facebook, Twitter, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-gray-900 text-gray-300 border-t border-gray-800">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Brochure Statement */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="bg-red-600 text-white p-2 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white flex items-center">
                Z<span className="text-red-500">MAX</span>
                <span className="text-[10px] bg-amber-500/10 text-amber-400 font-bold px-1.5 py-0.5 rounded ml-2 uppercase tracking-wide">
                  Ltd
                </span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              ZMAX General Stationers Ltd is your single-stop destination for all your educational, office, and printing requirements. We provide high-quality items at unbeatable retail and wholesale rates in Kenya.
            </p>
            <div className="flex items-center space-x-3 text-xs bg-gray-800/60 p-3.5 rounded-xl border border-gray-800 text-gray-400">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
              <span>Registered stationery dealer and printing supplier across East Africa.</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-base tracking-wider uppercase">Our Store</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-red-400 transition-colors duration-150 text-left">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('shop')} className="hover:text-red-400 transition-colors duration-150 text-left">
                  Browse Catalog
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-red-400 transition-colors duration-150 text-left">
                  Custom & Corporate Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-red-400 transition-colors duration-150 text-left">
                  Our Mission & About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-red-400 transition-colors duration-150 text-left">
                  Contact & Store Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-base tracking-wider uppercase">Store Contacts</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  ZMAX Stationery Center,<br />
                  Tengecha Lane,<br />
                  Kericho, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <div className="text-gray-400">
                  <p className="hover:text-amber-400 transition-colors cursor-pointer">0727 209 415</p>
                  <p className="hover:text-amber-400 transition-colors cursor-pointer">0788 808 878</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500 shrink-0" />
                <span className="hover:text-red-400 transition-colors duration-150 truncate cursor-pointer">
                  zmaxstationersltd@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-base tracking-wider uppercase">Business Hours</h3>
            <ul className="space-y-3.5 text-sm text-gray-400">
              <li className="flex items-center justify-between border-b border-gray-800 pb-2">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-emerald-400" /> Sunday - Friday:
                </span>
                <span className="text-white font-medium">8:00 AM - 6:30 PM</span>
              </li>
              <li className="flex items-center justify-between pb-2">
                <span className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-2 text-gray-600" /> Saturday:
                </span>
                <span className="text-red-400 font-bold text-xs uppercase bg-red-500/10 px-2 py-0.5 rounded">Closed</span>
              </li>
            </ul>
            <div className="pt-2 text-xs text-gray-500 italic">
              * Urgent delivery request during weekends can be placed directly via WhatsApp chat.
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-gray-800/80 bg-gray-950 py-6 text-sm text-center text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} ZMAX GENERAL STATIONERS LTD. All Rights Reserved.</p>
          <div className="flex space-x-6 text-xs text-gray-400">
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">WhatsApp Hotline</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
