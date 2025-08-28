'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BRAND } from '@/lib/constants';
import Image from 'next/image';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const teamMembers = [
    { name: 'Cole Caisley', image: '/images/colecaisley-pfp.webp', id: 'cole' },
    { name: 'Josh Gildea', image: '/images/joshgildea-pfp.webp', id: 'josh' },
    { name: 'Rob Cunliffe', image: '/images/robcunliffe-pfp.webp', id: 'rob' },
    { name: 'Paris Nuttall', image: '/images/paris-pfp.webp', id: 'paris' },
  ];

  return (
    <section ref={ref} className="bg-white py-20 text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Small Logo Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <Image
                src="/images/circle-logo-1.png"
                alt="Refine Barbers Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl font-bold text-black md:text-5xl"
            >
              About {BRAND.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg leading-relaxed text-gray-700"
            >
              Located in the heart of Horwich, {BRAND.name} combines traditional
              barbering techniques with modern style. Our skilled team delivers
              precision cuts, expert skin fades, and personalized grooming
              services that keep you looking sharp.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg leading-relaxed text-gray-700"
            >
              Whether you're after a classic gentleman's cut or the latest fade
              trends, we pride ourselves on attention to detail and creating an
              experience that's both professional and relaxed.
            </motion.p>
          </motion.div>

          {/* Right Side - Team Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="mb-8 text-center text-2xl font-semibold text-black lg:text-left">
              Meet the Team
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="font-semibold text-white">
                        {member.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 text-center text-sm text-gray-600 lg:text-left"
            >
              Each barber brings their unique style and expertise to deliver the
              perfect cut for every client.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
