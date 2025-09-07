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
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

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
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
        style={{ display: videoError ? 'none' : 'block' }}
      />
      {videoError && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      )}
      
      {/* Simple Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-7xl mx-auto px-4 relative z-10">
          
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
