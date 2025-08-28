'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BRAND } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateVisibility = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', updateVisibility);
    updateVisibility();

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur-md"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 transition-opacity duration-300 hover:opacity-80"
          >
            <div className="h-10 w-10 rounded-full bg-white/10 p-1">
              <Image
                src="/images/circle-logo-1.png"
                alt="Refine Barbers Logo"
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span className="text-lg font-bold text-white">{BRAND.name}</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </button>
            ))}

            {/* Book Button */}
            <Link
              href={BRAND.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="text-white md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
