'use client';

import { useState, useEffect } from 'react';
import { BRAND } from '@/lib/constants';
import Link from 'next/link';

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav
        className={`fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 transform transition-all duration-500 md:block ${
          showNav ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}
      >
        <div className="rounded-full border border-white/10 bg-black/20 px-6 py-3 backdrop-blur-lg">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Contact
            </button>
            <Link
              href={BRAND.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Navigation */}
      <nav
        className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-500 md:hidden ${
          showNav ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="rounded-full border border-gray-600 bg-black/90 px-4 py-2 backdrop-blur-lg">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:text-white"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:text-white"
            >
              Contact
            </button>
            <Link
              href={BRAND.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Book
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
