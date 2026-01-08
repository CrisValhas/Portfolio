/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { TruckModel } from './TruckModel';

interface JourneyCanvasProps {
  scrollProgress: number;
}

export const JourneyCanvas: React.FC<JourneyCanvasProps> = ({ scrollProgress }) => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        height: '100vh',
        zIndex: 999,
        pointerEvents: 'none'
      }}
      gl={{ 
        antialias: true, 
        alpha: true,
        preserveDrawingBuffer: true 
      }}
      shadows
      camera={{ position: [2, 1, 3], fov: 45 }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight
        position={[8, 8, 8]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 1.5, 2]} intensity={0.6} color={0x1976d2} distance={30} />

      {/* Camión 3D */}
      <TruckModel scrollProgress={scrollProgress} />

      <mesh position={[0, -0.55, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
    </Canvas>
  );
};
