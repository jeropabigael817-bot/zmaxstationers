/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, BookOpen } from 'lucide-react';

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
    <footer id="app-footer" className="bg-gray-900 text-gray-300 border-t border-gray-800 mt-12 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start text-center sm:text-left">
          
          {/* COLUMN 1 – Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 justify-center sm:justify-start cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="bg-red-600 text-white p-2 rounded-xl flex items-center justify-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Z<span className="text-red-500">MAX</span><span className="text-xs bg-amber-500/15 text-amber-400 font-bold px-1.5 py-0.5 rounded ml-1.5 uppercase">Ltd</span>
              </span>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">ZMAX General Stationers Ltd.</h4>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                Your trusted supplier of quality stationery, office supplies, school materials, printing, and business essentials across Kenya.
              </p>
            </div>
          </div>

          {/* COLUMN 2 – Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-black text-xs tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><button onClick={() => handleLinkClick('home')} className="hover:text-red-500 transition-colors text-left cursor-pointer font-medium">Home</button></li>
              <li><button onClick={() => handleLinkClick('shop')} className="hover:text-red-500 transition-colors text-left cursor-pointer font-medium">Products</button></li>
              <li><button onClick={() => handleLinkClick('shop')} className="hover:text-red-500 transition-colors text-left cursor-pointer font-medium">Categories</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-red-500 transition-colors text-left cursor-pointer font-medium">Services</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-red-500 transition-colors text-left cursor-pointer font-medium">Contact</button></li>
            </ul>
          </div>

          {/* COLUMN 3 – Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xs tracking-wider uppercase">Contact Information</h3>
            <ul className="space-y-3.5 text-xs text-gray-400">
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-red-500 shrink-0" />
                <span>Tengecha Lane, Kericho</span>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-red-500 shrink-0" />
                <span className="hover:text-red-400 transition-colors cursor-pointer">0727 209 415</span>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-red-500 shrink-0" />
                <span className="hover:text-red-400 transition-colors cursor-pointer">0788 808 878</span>
              </li>
              <li className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-red-500 shrink-0" />
                <span className="hover:text-red-400 transition-colors cursor-pointer truncate">zmaxstationersltd@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 – Business Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xs tracking-wider uppercase">Business Hours</h3>
            <div className="space-y-3 text-xs text-gray-400 text-center sm:text-left">
              <div>
                <p className="font-semibold text-white">Sunday – Friday</p>
                <p className="text-[11px] text-gray-400">8:00 AM – 6:30 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white">Saturday</p>
                <p className="text-red-400 font-bold text-[11px]">Closed</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-gray-950 py-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} ZMAX General Stationers Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6 text-gray-400 justify-center sm:justify-end">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
