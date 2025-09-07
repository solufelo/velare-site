'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Star } from 'lucide-react';

interface HeroVideoProps {
  className?: string;
}

export default function HeroVideo({ className = '' }: HeroVideoProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 50);
    };

    const handleMouseMove = () => {
      setIsInteracting(true);
      // Reset interaction state after a delay
      setTimeout(() => setIsInteracting(false), 3000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <section className={`hero-video relative w-full h-screen overflow-hidden ${className}`}>
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
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-7xl mx-auto px-4 relative z-10">
          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-full blur-3xl"
          />
          
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: hasScrolled ? 0.6 : 1,
              y: hasScrolled ? -20 : 0,
              scale: hasScrolled ? 0.95 : 1
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 via-white/10 to-sky-400/20 blur-2xl scale-110" />
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight relative">
              <motion.span 
                className="bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: hasScrolled ? "0% 50%" : "100% 50%"
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                VELARE
              </motion.span>
              <br />
              <motion.span 
                className="text-white font-light relative"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                ION
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.span>
            </h1>
          </motion.div>
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: hasScrolled ? 0.4 : 1,
              y: hasScrolled ? 15 : 0,
              scale: hasScrolled ? 0.98 : 1
            }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
            className="mb-12"
          >
            <motion.p 
              className="text-xl md:text-2xl font-light text-white/90 tracking-[0.2em] uppercase mb-4"
              initial={{ letterSpacing: "0.1em" }}
              animate={{ letterSpacing: "0.2em" }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              THE FUTURE OF
            </motion.p>
            <motion.p 
              className="text-2xl md:text-3xl font-medium text-sky-300 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              ELECTRIC MOBILITY
            </motion.p>
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
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              <Button 
                size="lg"
                className="relative bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 px-12 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-2xl tracking-wide border border-white/20"
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
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
