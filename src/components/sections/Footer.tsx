'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface FooterProps {
  className?: string;
}

function Footer({ className = '' }: FooterProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide footer when scrolling down past hero section (approximately 100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(currentScrollY < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={`fixed bottom-0 left-0 right-0 z-40 ${className}`}>
          <div className="flex justify-center mb-6 px-4">
            {/* Enhanced Footer with Better Spacing */}
            <motion.footer
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-4xl bg-white/8 backdrop-blur-2xl rounded-2xl border border-white/15 shadow-2xl"
            >
              <div className="px-6 py-4">
                {/* First Line - Pricing */}
                <div className="text-center mb-3">
                  <p className="text-white/90 text-sm font-light">
                    Starting under{' '}
                    <span className="text-sky-400 font-semibold">
                      $60,000
                    </span>
                  </p>
                </div>
                
                {/* Second Line - Info */}
                <div className="text-center mb-3">
                  <div className="flex items-center justify-center gap-3 text-xs text-white/70">
                    <span className="font-medium tracking-wide">CANADIAN BUILT</span>
                    <span>•</span>
                    <span className="font-medium tracking-wide">SINCE 2025</span>
                    <span>•</span>
                    <span>Initial production targeted for 2028</span>
                  </div>
                </div>
                
                {/* Third Line - Disclaimer */}
                <div className="text-center">
                  <Link 
                    href="/terms" 
                    className="text-white/60 hover:text-white/80 text-xs underline underline-offset-2 transition-colors duration-200"
                  >
                    Full disclaimer
                  </Link>
                </div>
              </div>
            </motion.footer>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Footer;