'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

interface FloatingReserveButtonProps {
  className?: string;
}

export default function FloatingReserveButton({ className = '' }: FloatingReserveButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show button after scrolling past the first slice (approximately 100vh + some buffer)
      const shouldShow = scrollY > windowHeight * 1.2;
      
      if (shouldShow && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed bottom-6 right-6 z-50 ${className}`}
        >
          <div className="relative">
            {/* Dismiss Button */}
            <motion.button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/30 transition-all duration-200 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-3 h-3" />
            </motion.button>

            {/* Main Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              <Link href="/reserve">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-sky-500 to-sky-600 text-white hover:from-sky-600 hover:to-sky-700 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 shadow-2xl tracking-wide border border-white/20 backdrop-blur-sm"
                >
                  <motion.span
                    className="flex items-center gap-2"
                    initial={{ gap: "0.5rem" }}
                    whileHover={{ gap: "0.75rem" }}
                    transition={{ duration: 0.2 }}
                  >
                    RESERVE NOW
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </Link>
            </motion.div>

            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl opacity-20"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
