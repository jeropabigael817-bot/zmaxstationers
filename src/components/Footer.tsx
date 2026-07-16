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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-center md:text-left">
          
          {/* COLUMN 1 – Company */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 justify-center md:justify-start cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="bg-red-600 text-white p-2 rounded-xl flex items-center justify-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Z<span className="text-red-500">MAX</span><span className="text-xs bg-amber-500/15 text-amber-400 font-bold px-1.5 py-0.5 rounded ml-1.5 uppercase">Ltd</span>
              </span>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">ZMAX General Stationers Ltd.</h4>
              <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
                Your trusted supplier of quality stationery, office supplies, school materials, printing, and business essentials across Kenya.
              </p>
            </div>
          </div>

          {/* COLUMN 2 – Contact Information */}
          <div className="md:border-l md:border-gray-800 md:pl-10 space-y-3 w-full">
            <h3 className="text-white font-bold text-xs tracking-wider uppercase">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-gray-400">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-red-500 shrink-0" />
                <span className="font-medium text-gray-300">Tengecha Lane, Kericho</span>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-red-500 shrink-0" />
                <span className="hover:text-red-400 font-medium text-gray-300 transition-colors cursor-pointer">0727 209 415</span>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-red-500 shrink-0" />
                <span className="hover:text-red-400 font-medium text-gray-300 transition-colors cursor-pointer">0788 808 878</span>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-red-500 shrink-0" />
                <span className="hover:text-red-400 font-medium text-gray-300 transition-colors cursor-pointer truncate">zmaxstationersltd@gmail.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-gray-950 py-4 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
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
