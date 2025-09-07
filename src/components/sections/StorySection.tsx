'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Star, Users, Target } from 'lucide-react';

interface StorySectionProps {
  className?: string;
}

const storyTimeline = [
  {
    year: '2024',
    title: 'Vision Born',
    description: 'The idea of revolutionizing electric mobility was conceived in the heart of innovation.',
    icon: Target
  },
  {
    year: '2025',
    title: 'Foundation',
    description: 'Velare was established with a mission to create the future of sustainable transportation.',
    icon: Users
  },
  {
    year: '2026',
    title: 'Breakthrough',
    description: 'First prototype development and breakthrough in battery technology integration.',
    icon: Zap
  },
  {
    year: '2028',
    title: 'Launch',
    description: 'Production begins with the ION series, setting new standards in electric mobility.',
    icon: Star
  }
];

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'Every component is meticulously crafted to meet the highest standards of excellence.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Pushing the boundaries of what\'s possible in electric vehicle technology.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a community of forward-thinking individuals who share our vision.'
  }
];

export default function StorySection({ className = '' }: StorySectionProps) {
  return (
    <section className={`story-section relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
              Our Story
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Born from a vision to revolutionize electric mobility, Velare represents the perfect 
            fusion of cutting-edge technology, sustainable design, and uncompromising quality.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
          >
            Our Journey
          </motion.h3>
          
          <div className="space-y-8">
            {storyTimeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-2 bg-sky-500/20 rounded-lg">
                          <Icon className="w-6 h-6 text-sky-400" />
                        </div>
                        <span className="text-sky-400 font-bold text-lg">{item.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline connector */}
                  <div className="w-4 h-4 bg-sky-400 rounded-full flex-shrink-0 relative">
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            Our Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500/20 to-sky-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-sky-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-4">{value.title}</h4>
                    <p className="text-white/70 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-sky-500/10 to-sky-600/10 backdrop-blur-sm rounded-3xl p-8 border border-sky-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join the Revolution</h3>
            <p className="text-white/80 mb-6">
              Be part of the future of electric mobility. Experience innovation, sustainability, and performance like never before.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:from-sky-600 hover:to-sky-700 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
