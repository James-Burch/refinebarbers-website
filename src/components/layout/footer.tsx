'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BRAND } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const contactInfo = {
    address: '94 Winterhey Lane, Horwich, Manchester BL6 7NZ',
    phone: '07850 442736',
    email: 'info@refinebarbers.com',
    hours: 'Tue-Fri: 9:00-18:00 | Sat: 7:15-15:00 | Sun-Mon: Closed',
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/refinebarbers/?hl=en',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/refinebarbers/',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer ref={ref} className="bg-black py-16 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <div className="mb-4 flex items-center justify-center lg:justify-start">
              <Image
                src="/images/circle-logo-1.png"
                alt="Refine Barbers Logo"
                width={60}
                height={60}
                className="mr-3 rounded-full"
              />
              <h3 className="text-2xl font-bold">{BRAND.name}</h3>
            </div>
            <p className="mx-auto mb-6 max-w-sm text-gray-300 lg:mx-0">
              {BRAND.tagline}
            </p>
            <p className="text-sm text-gray-400">
              Professional barbering services in Horwich, serving Bolton and
              surrounding areas.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h4 className="mb-6 text-xl font-bold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start justify-center lg:justify-start">
                <span className="mr-3 text-lg">📍</span>
                <div>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <span className="mr-3 text-lg">📞</span>
                <Link
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  {contactInfo.phone}
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <span className="mr-3 text-lg">✉️</span>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="break-words text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  {contactInfo.email}
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Final Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <h4 className="mb-6 text-xl font-bold">Book Your Cut</h4>
            <p className="mb-6 text-sm text-gray-300">
              Ready for a fresh cut? Book online for the fastest service and
              guaranteed slot.
            </p>

            <Link
              href={BRAND.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-block rounded bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100"
            >
              Book on Booksy
            </Link>

            {/* Social Links */}
            <div>
              <p className="mb-4 text-sm text-gray-400">Follow Us</p>
              <div className="flex justify-center space-x-4 lg:justify-start">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors duration-300 hover:bg-gray-700"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0 md:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>

            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
              <span className="text-sm text-gray-400">
                Horwich | Bolton | Chorley
              </span>

              {/* Watermark */}
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>Built by</span>
                <Link
                  href="https://jamesburch.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-semibold text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  James - Burch Studio
                  <span className="ml-1 inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
