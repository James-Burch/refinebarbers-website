'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BRAND } from '@/lib/constants';
import Link from 'next/link';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = {
    address: {
      line1: '94 Winterhey Lane',
      line2: 'Horwich, Manchester',
      postcode: 'BL6 7NZ',
    },
    phone: '07850 442736',
    email: 'info@refinebarbers.com',
    hours: [
      { day: 'Monday', times: 'CLOSED' },
      { day: 'Tuesday', times: '9:00 - 13:00 | 13:30 - 18:00' },
      { day: 'Wednesday', times: '9:00 - 13:00 | 13:30 - 18:00' },
      { day: 'Thursday', times: '9:00 - 13:00 | 13:30 - 18:00' },
      { day: 'Friday', times: '9:00 - 13:00 | 13:30 - 18:00' },
      { day: 'Saturday', times: '7:15 - 11:00 | 11:30 - 15:00' },
      { day: 'Sunday', times: 'CLOSED' },
    ],
  };

  return (
    <section ref={ref} className="bg-white py-16 text-black sm:py-20">
      <div className="container mx-auto max-w-6xl px-6 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-5xl">
            Visit Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            Professional barbering services in the heart of Horwich
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:mb-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:col-span-2 lg:col-span-1 lg:text-left"
          >
            <h3 className="mb-4 border-b-2 border-black pb-2 text-xl font-bold sm:mb-6 sm:text-2xl">
              Opening Hours
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {contactInfo.hours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex items-center justify-between text-sm sm:text-base"
                >
                  <span className="font-medium text-gray-700">
                    {schedule.day.toUpperCase()}
                  </span>
                  <span
                    className={`${schedule.times === 'CLOSED' ? 'text-gray-400' : 'text-black'} text-xs sm:text-sm`}
                  >
                    {schedule.times}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <h3 className="mb-4 border-b-2 border-black pb-2 text-xl font-bold sm:mb-6 sm:text-2xl">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="mb-1 font-semibold text-gray-700">Address</h4>
                <p className="text-sm text-gray-600 sm:text-base">
                  {contactInfo.address.line1}
                  <br />
                  {contactInfo.address.line2}
                  <br />
                  {contactInfo.address.postcode}
                </p>
              </div>

              <div>
                <h4 className="mb-1 font-semibold text-gray-700">Phone</h4>
                <Link
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex min-h-[44px] items-center text-sm text-gray-600 transition-colors duration-300 hover:text-black sm:text-base"
                >
                  {contactInfo.phone}
                </Link>
              </div>

              <div>
                <h4 className="mb-1 font-semibold text-gray-700">Email</h4>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex min-h-[44px] items-center text-sm break-words text-gray-600 transition-colors duration-300 hover:text-black sm:text-base"
                >
                  {contactInfo.email}
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Find Us - Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:col-span-2 lg:col-span-1 lg:text-left"
          >
            <h3 className="mb-4 border-b-2 border-black pb-2 text-xl font-bold sm:mb-6 sm:text-2xl">
              Find Us
            </h3>
            <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-200 sm:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.742584544067!2d-2.551395323667829!3d53.5980545558607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b09ae54f3b37b%3A0xfbe5ad3205d74ef8!2sRefine%20Barbers!5e0!3m2!1sen!2suk!4v1756343771218!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Refine Barbers Location"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Located in Horwich, serving Bolton and surrounding areas
            </p>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto max-w-2xl rounded-lg bg-black p-6 text-white sm:p-8">
            <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl lg:text-2xl">
              Ready to book your appointment?
            </h3>
            <p className="mb-4 text-sm text-gray-300 sm:mb-6 sm:text-base">
              Book online through Booksy for the fastest service
            </p>
            <Link
              href={BRAND.booksyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block min-h-[44px] rounded bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100 sm:px-8 sm:py-4 sm:text-base"
            >
              Book Now on Booksy
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
