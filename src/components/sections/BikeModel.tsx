'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ModelProps {
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export function Model({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/bikeobj.glb');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  const clonedScene = scene.clone();
  
  // Chrome materials
  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: '#c0c0c0',
    metalness: 1.0,
    roughness: 0.1,
    envMapIntensity: 2.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  });


  // Apply chrome material to all bike parts
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = chromeMaterial;
    }
  });

  return (
    <group ref={meshRef} scale={scale} position={position} rotation={rotation}>
      <primitive object={clonedScene} />
    </group>
  );
}

// Preload the model for better performance
useGLTF.preload('/models/bikeobj.glb');
