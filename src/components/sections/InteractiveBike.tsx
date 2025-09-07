'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Model } from './BikeModel';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface InteractiveBikeProps {
  className?: string;
}

// Bike rotation animation
function RotatingBike({ speed = 0.5 }: { speed?: number }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * speed * 0.4; // Speed-controlled rotation
    }
  });

  return (
    <group ref={meshRef}>
      <Model scale={1} position={[0, -1, 0]} />
    </group>
  );
}


export default function InteractiveBike({ className = '' }: InteractiveBikeProps) {
  const [isMouseInCenter, setIsMouseInCenter] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    // Define canvas area (40% of screen - much smaller)
    const canvasArea = 0.4;
    const canvasWidth = rect.width * canvasArea;
    const canvasHeight = rect.height * canvasArea;
    
    const inCanvasX = mouseX > (rect.width - canvasWidth) / 2 && mouseX < (rect.width + canvasWidth) / 2;
    const inCanvasY = mouseY > (rect.height - canvasHeight) / 2 && mouseY < (rect.height + canvasHeight) / 2;
    
    setIsMouseInCenter(inCanvasX && inCanvasY);
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (isMouseInCenter) {
      setHasInteracted(true);
      setIsZooming(true);
      // Reset zooming state after a short delay
      setTimeout(() => setIsZooming(false), 300);
    }
  };

  return (
    <section 
      className={`interactive-bike relative w-full h-screen overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onWheel={handleWheel}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Canvas Outline Box - Only show if not interacted */}
      {!hasInteracted && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-2/5 h-2/5 border-2 border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white/60 text-xs font-medium tracking-wide">
              ZOOM AREA
            </div>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [5, 2, 5], fov: 50 }}
        shadows
        className="w-full h-full"
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
        
        {/* Environment */}
        <Environment preset="studio" />
        
        {/* Bike Model */}
        <RotatingBike />
        
        {/* Shadows */}
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4.5}
        />
        
        {/* Controls - Allow user interaction with conditional zoom */}
        <OrbitControls
          enablePan={false}
          enableZoom={isMouseInCenter}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
      
      
      {/* Title at Top - Smooth transition when interacted */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ 
            opacity: hasInteracted ? 0.4 : 1,
            y: hasInteracted ? -15 : 0,
            scale: hasInteracted ? 0.92 : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center text-white max-w-4xl mx-auto px-4 pt-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
              ION
            </span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/90 tracking-wide">
            INTERACTIVE
          </p>
        </motion.div>
      </div>

      {/* Description at Bottom - Smooth transition when interacted */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{ 
            opacity: hasInteracted ? 0.3 : 1,
            y: hasInteracted ? 15 : 0,
            scale: hasInteracted ? 0.95 : 1
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center text-white max-w-4xl mx-auto px-4 pb-20"
        >
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 leading-relaxed tracking-wide">
            EXPLORE EVERY DETAIL OF THE FUTURE OF ELECTRIC MOBILITY
          </p>
        </motion.div>
      </div>
    </section>
  );
}
