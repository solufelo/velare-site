'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Cpu, Battery, Gauge } from 'lucide-react';

interface TechnologyHeroProps {
  className?: string;
}

export default function TechnologyHero({ className = '' }: TechnologyHeroProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techFeatures = [
    { icon: Battery, label: 'Battery', value: '500km Range' },
    { icon: Zap, label: 'Power', value: '150kW' },
    { icon: Cpu, label: 'AI', value: 'Smart Drive' },
    { icon: Gauge, label: 'Speed', value: '0-100km/h' }
  ];

  return (
    <section className={`technology-hero relative w-full h-screen overflow-hidden ${className}`}>
      <video 
        src="/videos/velareShowcase.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      {/* Simple Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-7xl mx-auto px-4 relative z-10">
          {/* Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8"
          >
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300 tracking-wide">ADVANCED TECHNOLOGY</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: hasScrolled ? 0.6 : 1,
              y: hasScrolled ? -20 : 0,
              scale: hasScrolled ? 0.95 : 1
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <motion.span 
                className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: hasScrolled ? "0% 50%" : "100% 50%"
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                TECHNOLOGY
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl md:text-2xl font-light text-white/90 tracking-wide max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Cutting-edge innovation that powers the future of electric mobility
            </motion.p>
          </motion.div>

          {/* Tech Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            {techFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-xs text-white/70 font-medium tracking-wide">{feature.label}</span>
                    <span className="text-sm text-white font-semibold">{feature.value}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: hasScrolled ? 0.5 : 1,
              y: hasScrolled ? 10 : 0,
              scale: hasScrolled ? 0.96 : 1
            }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              <Button 
                size="lg"
                className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 px-12 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-2xl tracking-wide border border-white/20"
              >
                <motion.span
                  className="flex items-center gap-3"
                  initial={{ gap: "0.5rem" }}
                  whileHover={{ gap: "0.75rem" }}
                  transition={{ duration: 0.2 }}
                >
                  EXPLORE TECHNOLOGY
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
