'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BRAND } from '@/lib/constants';
import Link from 'next/link';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      id: 'haircut',
      name: 'Haircut',
      description: 'Classic cuts and modern styles tailored to you',
      price: '£15',
    },
    {
      id: 'skin-fade',
      name: 'Skin Fade',
      description: 'Precision fade cuts with expert blending',
      price: '£18',
    },
    {
      id: 'kids-cut',
      name: 'Kids Cut',
      description: 'Friendly service for our younger clients',
      price: '£13',
    },
  ];

  return (
    <section ref={ref} className="bg-black py-20 text-white">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Professional barbering services delivered with precision and style
          </p>
        </motion.div>

        {/* Services List */}
        <div className="mb-16 space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group border-b border-gray-800 pb-6 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-semibold transition-colors duration-300 group-hover:text-gray-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {service.description}
                  </p>
                </div>
                <div className="ml-6">
                  <span className="inline-block text-3xl font-bold text-white transition-transform duration-300 group-hover:scale-105">
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Subtle hover line */}
              <div className="mt-4 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6 text-center"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">
              Ready to book your appointment?
            </h3>
            <p className="text-gray-300">
              View our full list of services, check availability, and book online through
              Booksy
            </p>
          </div>

          {/* Primary CTA Button */}
          <Link
            href={BRAND.booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block overflow-hidden bg-white px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          >
            <span className="relative z-10">View Full Services & Book Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          {/* Secondary info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4 text-sm text-gray-500"
          >
            Online booking • Easy cancellation • Serving Horwich, Bolton &
            surrounding areas
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
