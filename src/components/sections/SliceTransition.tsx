'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SliceTransitionProps {
  children: React.ReactNode;
  className?: string;
  transitionType?: 'fade' | 'slide' | 'scale' | 'blur' | 'parallax' | 'disintegrate' | 'glitch' | 'morph' | 'particle';
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function SliceTransition({ 
  children, 
  className = '', 
  transitionType = 'fade',
  direction = 'up'
}: SliceTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Move useTransform outside the function
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Clean, simple transition effects
  const getTransitionProps = () => {
    switch (transitionType) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8 }
        };
      
      case 'slide':
        const slideDirection = direction === 'up' ? { y: 50 } : 
                              direction === 'down' ? { y: -50 } :
                              direction === 'left' ? { x: 50 } : { x: -50 };
        return {
          initial: { opacity: 0, ...slideDirection },
          whileInView: { opacity: 1, x: 0, y: 0 },
          transition: { duration: 0.8 }
        };
      
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.8 }
        };
      
      case 'blur':
        return {
          initial: { opacity: 0, filter: "blur(10px)" },
          whileInView: { opacity: 1, filter: "blur(0px)" },
          transition: { duration: 1 }
        };
      
      case 'parallax':
        return {
          style: { y },
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.8 }
        };
      
      default:
        return {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 }
        };
    }
  };

  const transitionProps = getTransitionProps();

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    // Simplified GSAP ScrollTrigger with cleaner effects
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        // Clean entrance animation
        gsap.fromTo(element, 
          { 
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          { 
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out"
          }
        );
      },
      onLeave: () => {
        // Minimal exit effect
        gsap.to(element, {
          opacity: 0.8,
          scale: 0.98,
          duration: 0.3,
          ease: "power2.out"
        });
      },
      onEnterBack: () => {
        gsap.to(element, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(element, {
          opacity: 0.8,
          scale: 0.98,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`slice-transition ${className}`}
      viewport={{ once: false, margin: "-100px" }}
      {...transitionProps}
    >
      {children}
    </motion.div>
  );
}