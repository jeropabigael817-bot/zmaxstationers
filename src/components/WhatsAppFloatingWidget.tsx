/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, X, MessageSquare, Clock, ArrowRight, UserCheck } from 'lucide-react';

export default function WhatsAppFloatingWidget() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleStartChat = () => {
    const phone = "254727209415";
    const message = `Hello ZMAX General Stationers, I am browsing your online catalog and have a general inquiry.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div id="whatsapp-floating-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Support Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 mb-3.5 w-80 sm:w-85 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
            <div className="flex items-center space-x-2.5">
              <div className="relative">
                <div className="h-10 w-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-black">
                  ZM
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-emerald-500 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h4 className="text-sm font-black text-gray-900 leading-tight">ZMAX Stationers Support</h4>
                <div className="flex items-center space-x-1 mt-0.5">
                  <UserCheck className="h-3 w-3 text-emerald-500" />
                  <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Online Support</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Prompt / Message */}
          <div className="space-y-3">
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Hello there! 📲 Need assistance or want to order bespoke custom work like Large Format Printing or Corporate Stationery? Chat with us instantly!
            </p>

            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-1.5">
              <div className="flex items-center text-xs font-semibold text-gray-500">
                <Clock className="h-3.5 w-3.5 mr-1.5 text-red-500" />
                <span>Response Time: Instant (8 AM - 6 PM)</span>
              </div>
              <p className="text-[11px] text-gray-400 italic">
                * We deliver countrywide via G4S / Wells Fargo.
              </p>
            </div>

            <button
              onClick={handleStartChat}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer text-xs sm:text-sm shadow-md shadow-emerald-50"
            >
              <Phone className="h-4 w-4 fill-white stroke-none" />
              <span>Start WhatsApp Chat</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Green Circle Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 w-14 rounded-full shadow-xl shadow-emerald-100 flex items-center justify-center hover:scale-105 transition-all cursor-pointer relative group"
        aria-label="Open support chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageSquare className="h-6.5 w-6.5 fill-white" />
            {/* Pulsing indicator */}
            <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
            <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white"></span>
          </>
        )}
      </button>
    </div>
  );
}
