'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Box, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface StudioSceneProps {
  className?: string;
}

// Floating geometric shapes for the studio
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      groupRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime + index) * 0.2;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Box position={[-2, 0, -1]} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} />
      </Box>
      <Sphere position={[2, 0, 1]} args={[0.3, 32, 32]}>
        <meshStandardMaterial color="#ef4444" metalness={0.6} roughness={0.3} />
      </Sphere>
      <Box position={[0, 0, -2]} args={[0.4, 0.8, 0.4]}>
        <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.1} />
      </Box>
    </group>
  );
}

// Studio lighting setup
function StudioLighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0ea5e9" />
      <pointLight position={[10, -10, 10]} intensity={0.3} color="#ef4444" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        castShadow
      />
    </>
  );
}

export default function StudioScene({ className = '' }: StudioSceneProps) {
  return (
    <section className={`studio-scene relative w-full h-screen overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        shadows
        className="w-full h-full"
      >
        <StudioLighting />
        
        {/* Environment */}
        <Environment preset="studio" />
        
        {/* Floating Shapes */}
        <FloatingShapes />
        
        {/* Studio Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.1} 
            roughness={0.8}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Contact Shadows */}
        <ContactShadows
          position={[0, -1.9, 0]}
          opacity={0.3}
          scale={15}
          blur={2.5}
          far={4.5}
        />
        
        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
      </Canvas>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-sky-100 to-sky-400 bg-clip-text text-transparent">
              STUDIO
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light text-white/90 tracking-wide">
            CREATIVE ENVIRONMENT
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 leading-relaxed tracking-wide">
            WHERE IDEAS COME TO LIFE IN THREE DIMENSIONS
          </p>
        </motion.div>
      </div>
      
      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white/60"
      >
        <p className="text-sm font-medium tracking-wide uppercase mb-2">
          Drag to Rotate • Scroll to Zoom
        </p>
        <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center mx-auto">
          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
