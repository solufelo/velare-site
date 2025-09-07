'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Zap, Shield, Award } from 'lucide-react';

interface IONHeroProps {
  className?: string;
}

export default function IONHero({ className = '' }: IONHeroProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ionFeatures = [
    { icon: Star, label: 'Premium', value: 'Luxury Design' },
    { icon: Zap, label: 'Performance', value: '150kW Power' },
    { icon: Shield, label: 'Safety', value: '5-Star Rated' },
    { icon: Award, label: 'Quality', value: 'Canadian Built' }
  ];

  return (
    <section className={`ion-hero relative w-full h-screen overflow-hidden ${className}`}>
      <video 
        src="/videos/velareShowcase.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/20 via-transparent to-transparent" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              y: [null, -50],
              opacity: [0, 0.1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            <Star className="w-8 h-8" />
          </motion.div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-7xl mx-auto px-4 relative z-10">
          {/* ION Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-500/30 rounded-full px-4 py-2 mb-8"
          >
            <Star className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-medium text-sky-300 tracking-wide">PREMIUM ELECTRIC VEHICLE</span>
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
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
              <motion.span 
                className="bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: hasScrolled ? "0% 50%" : "100% 50%"
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                ION
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl md:text-2xl font-light text-white/90 tracking-wide max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              The pinnacle of electric vehicle engineering and design
            </motion.p>
          </motion.div>

          {/* ION Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
          >
            {ionFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-sky-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-2 bg-sky-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-sky-400" />
                    </div>
                    <span className="text-xs text-white/70 font-medium tracking-wide">{feature.label}</span>
                    <span className="text-sm text-white font-semibold">{feature.value}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: hasScrolled ? 0.5 : 1,
              y: hasScrolled ? 10 : 0,
              scale: hasScrolled ? 0.96 : 1
            }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              <Button 
                size="lg"
                className="relative bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 px-12 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-2xl tracking-wide border border-white/20"
              >
                <motion.span
                  className="flex items-center gap-3"
                  initial={{ gap: "0.5rem" }}
                  whileHover={{ gap: "0.75rem" }}
                  transition={{ duration: 0.2 }}
                >
                  RESERVE ION
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-12 py-4 text-lg font-semibold rounded-xl transition-all duration-300 tracking-wide"
              >
                VIEW SPECIFICATIONS
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
