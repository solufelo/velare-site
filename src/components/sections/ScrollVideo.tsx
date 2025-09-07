'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollVideoProps {
  className?: string;
  videoSrc: string;
  title: string;
  subtitle?: string;
  sectionId: string;
}

export default function ScrollVideo({ 
  className = '', 
  videoSrc, 
  title, 
  subtitle,
  sectionId 
}: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current || !sectionRef.current) return;

    const video = videoRef.current;
    const section = sectionRef.current;

    // Set video properties for scroll control
    video.currentTime = 0;
    video.pause();

    // Create ScrollTrigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        // Calculate video progress based on scroll progress
        const progress = self.progress;
        const duration = video.duration;
        
        if (duration && !isNaN(duration)) {
          video.currentTime = progress * duration;
        }
      },
      onEnter: () => {
        // Ensure video is ready when entering
        if (video.readyState >= 2) {
          video.currentTime = 0;
        }
      },
      onLeave: () => {
        // Reset video when leaving
        video.currentTime = 0;
      },
      onEnterBack: () => {
        // Handle reverse scrolling
        if (video.readyState >= 2) {
          video.currentTime = 0;
        }
      },
      onLeaveBack: () => {
        // Reset when scrolling back up
        video.currentTime = 0;
      }
    });

    // Handle video loaded metadata
    const handleLoadedMetadata = () => {
      video.currentTime = 0;
      scrollTrigger.refresh();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Cleanup
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      scrollTrigger.kill();
    };
  }, [videoSrc]);

  return (
    <section 
      ref={sectionRef}
      id={sectionId}
      className={`relative w-full h-screen overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      <video 
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 flex items-center justify-center">
        <div className="text-center text-white max-w-5xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h2>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-light text-white/90 tracking-wide"
            >
              {subtitle}
            </motion.p>
          )}
          
          {/* Additional content based on section */}
          {sectionId === 'design-reveal' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 max-w-3xl mx-auto"
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Every curve, every surface, every detail of Ion is meticulously crafted to deliver 
                not just performance, but an experience that transcends the ordinary.
              </p>
            </motion.div>
          )}
          
          {sectionId === 'technology-showcase' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 max-w-3xl mx-auto"
            >
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Powered by next-generation electric propulsion and intelligent systems that adapt 
                to your riding style, Ion represents the pinnacle of motorcycle engineering.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
