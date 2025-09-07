'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Shield, Star, Clock } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hide navbar after scrolling past the first slice (approximately 100vh)
      const shouldHide = scrollY > windowHeight * 0.8;
      setIsVisible(!shouldHide);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`fixed top-0 left-0 right-0 z-50 ${className}`}
        >
          <div className="flex justify-center mt-4">
        <div className="w-2/4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
          <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Velare Logo */}
            <Link href="/" className="text-2xl font-bold text-white hover:text-sky-400 transition-colors">
              VELARE
            </Link>
            
            {/* Desktop Navigation - Only Essential Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/ion" className="text-white/80 hover:text-sky-400 transition-colors text-sm font-medium tracking-wide">
                ION
              </Link>
              <Link href="/technology" className="text-white/80 hover:text-sky-400 transition-colors text-sm font-medium tracking-wide">
                TECHNOLOGY
              </Link>
              <Link href="/about" className="text-white/80 hover:text-sky-400 transition-colors text-sm font-medium tracking-wide">
                ABOUT
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-white/10 text-white hover:bg-white/20 border border-white/20 font-medium px-4 py-1.5 rounded-xl transition-all duration-300 hover:scale-105 text-sm tracking-wide backdrop-blur-sm">
                    RESERVE
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[400px] sm:w-[540px] bg-black/95 backdrop-blur-md border-white/20 px-6 pt-8">
                  <SheetHeader className="text-left">
                    <SheetTitle className="text-xl font-bold text-white mb-1 tracking-wide">
                      RESERVE ION
                    </SheetTitle>
                    <SheetDescription className="text-white/70 text-sm">
                      Join the future of electric mobility
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-4">
                    {/* Pricing Info */}
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <h4 className="text-base font-medium text-white mb-2 tracking-wide">PRICING</h4>
                      <p className="text-white/90 mb-1">
                        Starting under <span className="text-sky-400 font-medium">$60,000</span>
                      </p>
                      <p className="text-xs text-white/70">
                        Production targeted for 2028
                      </p>
                    </div>
                    
                    {/* Reservation Form */}
                    <div className="space-y-3">
                      <h4 className="text-base font-medium text-white tracking-wide">RESERVE NOW</h4>
                      <div className="space-y-2">
                        <input 
                          type="email" 
                          placeholder="Email address"
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-sky-400 transition-colors text-sm"
                        />
                        <input 
                          type="text" 
                          placeholder="Full name"
                          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-sky-400 transition-colors text-sm"
                        />
                        <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-sky-400 transition-colors text-sm">
                          <option value="" className="bg-black">Select model preference</option>
                          <option value="base" className="bg-black">Base Model</option>
                          <option value="premium" className="bg-black">Premium Model</option>
                          <option value="performance" className="bg-black">Performance Model</option>
                        </select>
                      </div>
                      
                      <Button className="w-full bg-sky-500 text-white hover:bg-sky-600 font-medium py-2 rounded-lg transition-colors text-sm">
                        RESERVE ION - $1,000 DEPOSIT
                      </Button>
                      
                      <p className="text-xs text-white/50 text-center">
                        Fully refundable until production begins
                      </p>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="pt-2 border-t border-white/10">
                      <p className="text-xs text-white/60 text-center">
                        Questions?{' '}
                        <a href="mailto:reservations@velare.com" className="text-sky-400 hover:text-sky-300">
                          reservations@velare.com
                        </a>
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            {/* Right side - Mobile Hamburger Menu */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/10 bg-black/30 backdrop-blur-md"
            >
              <div className="container mx-auto px-6 py-6">
                <div className="space-y-6">
                  {/* Reserve Now Button */}
                  <div className="text-center">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button className="bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30 border border-cyan-400/30 font-light text-sm px-6 py-2 rounded-sm transition-all duration-300 hover:scale-105 w-full max-w-sm tracking-wider">
                          RESERVE NOW
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-[400px] sm:w-[540px] bg-black/95 backdrop-blur-md border-white/20 px-6">
                        <SheetHeader className="text-left">
                          <SheetTitle className="text-xl font-bold text-white mb-1 tracking-wide">
                            RESERVE ION
                          </SheetTitle>
                          <SheetDescription className="text-white/70 text-sm">
                            Join the future of electric mobility
                          </SheetDescription>
                        </SheetHeader>
                        
                        <div className="mt-8 space-y-6">
                          {/* Ion Features */}
                          <div className="space-y-4">
                            <h3 className="text-lg font-light text-white tracking-wide">ION FEATURES</h3>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                <Zap className="h-5 w-5 text-cyan-400" />
                                <span className="text-white/90 text-sm">Advanced Electric Propulsion</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Shield className="h-5 w-5 text-cyan-400" />
                                <span className="text-white/90 text-sm">Autonomous Safety Systems</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Star className="h-5 w-5 text-cyan-400" />
                                <span className="text-white/90 text-sm">Premium Materials & Design</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <Clock className="h-5 w-5 text-cyan-400" />
                                <span className="text-white/90 text-sm">Rapid Charging Technology</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Pricing Info */}
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <h4 className="text-lg font-light text-white mb-2 tracking-wide">PRICING</h4>
                            <p className="text-white/90 mb-2">
                              Starting under <span className="text-cyan-400 font-medium">$60,000</span>
                            </p>
                            <p className="text-sm text-white/70">
                              Initial production targeted for 2028
                            </p>
                          </div>
                          
                          {/* Reservation Form */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-light text-white tracking-wide">RESERVE NOW</h4>
                            <div className="space-y-3">
                              <input 
                                type="email" 
                                placeholder="Email address"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                              />
                              <input 
                                type="text" 
                                placeholder="Full name"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                              />
                              <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors">
                                <option value="" className="bg-black">Select model preference</option>
                                <option value="base" className="bg-black">Base Model</option>
                                <option value="premium" className="bg-black">Premium Model</option>
                                <option value="performance" className="bg-black">Performance Model</option>
                              </select>
                            </div>
                            
                            <Button className="w-full bg-cyan-400 text-black hover:bg-cyan-300 font-medium py-3 rounded-lg transition-colors">
                              Reserve Ion - $1,000 Deposit
                            </Button>
                            
                            <p className="text-xs text-white/50 text-center">
                              Your deposit is fully refundable until production begins
                            </p>
                          </div>
                          
                          {/* Contact Info */}
                          <div className="pt-4 border-t border-white/10">
                            <p className="text-sm text-white/70 text-center">
                              Questions? Contact us at{' '}
                              <a href="mailto:reservations@velare.com" className="text-cyan-400 hover:text-cyan-300">
                                reservations@velare.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                  
                  {/* Navigation Links */}
                  <div className="space-y-4">
                    <Link href="/ion" className="block text-white/80 hover:text-cyan-400 transition-colors text-sm font-light tracking-wide py-2">
                      ION
                    </Link>
                    <Link href="/technology" className="block text-white/80 hover:text-cyan-400 transition-colors text-sm font-light tracking-wide py-2">
                      TECHNOLOGY
                    </Link>
                    <Link href="/about" className="block text-white/80 hover:text-cyan-400 transition-colors text-sm font-light tracking-wide py-2">
                      ABOUT
                    </Link>
                    <Link href="/careers" className="block text-white/80 hover:text-cyan-400 transition-colors text-sm font-light tracking-wide py-2">
                      CAREERS
                    </Link>
                    <Link href="/contact" className="block text-white/80 hover:text-cyan-400 transition-colors text-sm font-light tracking-wide py-2">
                      CONTACT
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </motion.nav>
      )}
    </AnimatePresence>
  );
}