'use client';

import { motion } from 'framer-motion';
import { BRAND } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/circle-logo-1.webp"
        >
          <source src="/videos/barbershop-hero-1.mp4" type="video/mp4" />
          <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center sm:px-4">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
          className="mb-6 sm:mb-8"
        >
          <div className="mx-auto h-28 w-28 rounded-full bg-white/10 p-2 backdrop-blur-sm sm:h-32 sm:w-32">
            <Image
              src="/images/circle-logo-1.webp"
              alt="Refine Barbers Logo"
              width={120}
              height={120}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-3 text-4xl font-bold text-white sm:mb-4 sm:text-5xl md:text-7xl"
        >
          {BRAND.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-8 px-4 text-lg text-gray-300 sm:text-xl md:text-2xl"
        >
          {BRAND.tagline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-16 sm:mb-0"
        >
          <Link
            href={BRAND.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-h-[44px] overflow-hidden bg-white px-6 py-3 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none sm:px-8 sm:py-4 sm:text-lg"
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
