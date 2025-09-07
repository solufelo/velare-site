'use client';

import React, { useRef, useEffect, useState } from 'react';
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
  const [videoError, setVideoError] = useState(false);

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

    const handleVideoError = () => {
      setVideoError(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('error', handleVideoError);

    // Cleanup
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('error', handleVideoError);
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
        style={{ display: videoError ? 'none' : 'block' }}
      />
      {videoError && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      )}
      
      {/* Pattern Effects - Only for Revolutionary Design section */}
      {sectionId === 'design-reveal' && (
        <>
          {/* Aurora Dream Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, rgba(120, 119, 198, 0.1) 0%, rgba(255, 119, 198, 0.1) 100%)
            `
          }} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
          
          {/* Optimized Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                initial={{ 
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, -100],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
              />
            ))}
          </div>
          
          {/* Static Glow Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl" />
          </div>
        </>
      )}
      
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
              className="mt-8 max-w-4xl mx-auto"
            >
              <motion.p 
                className="text-lg md:text-xl text-white/90 leading-relaxed font-light tracking-wide"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Every curve, every surface, every detail of Ion is meticulously crafted to deliver 
                not just performance, but an experience that transcends the ordinary.
              </motion.p>
              
              {/* Decorative line */}
              <motion.div
                className="mt-6 w-24 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                viewport={{ once: true }}
              />
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
