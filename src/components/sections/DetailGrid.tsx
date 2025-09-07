'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface DetailGridProps {
  className?: string;
}

const gridItems = [
  {
    id: 1,
    image: '/images/1.png',
    title: 'Design Innovation',
    description: 'Cutting-edge aesthetic meets functional excellence'
  },
  {
    id: 2,
    image: '/images/2.png',
    title: 'Advanced Engineering',
    description: 'Precision-crafted components for optimal performance'
  },
  {
    id: 3,
    image: '/images/3.png',
    title: 'Sustainable Future',
    description: 'Eco-friendly technology for tomorrow\'s mobility'
  },
  {
    id: 4,
    image: '/images/4.png',
    title: 'Premium Materials',
    description: 'High-quality components built to last'
  },
  {
    id: 5,
    image: '/images/5.png',
    title: 'Smart Technology',
    description: 'Integrated systems for enhanced user experience'
  },
  {
    id: 6,
    image: '/images/6.png',
    title: 'Performance Excellence',
    description: 'Unmatched power and efficiency in every ride'
  }
];

export default function DetailGrid({ className = '' }: DetailGridProps) {
  return (
    <section className={`detail-grid ${className}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
              Design Excellence
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Showcasing the meticulous attention to detail in every aspect of our design
          </motion.p>
        </div>
        
        {/* Enhanced Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
