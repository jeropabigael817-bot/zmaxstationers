/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-38 right-4 md:bottom-24 md:right-6 z-40 bg-white hover:bg-gray-50 text-gray-700 hover:text-red-600 h-12 w-12 rounded-full shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 transform ${
        isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      } cursor-pointer group`}
      aria-label="Scroll back to top"
    >
      <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
