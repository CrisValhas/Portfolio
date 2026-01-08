/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface TruckModelProps {
  scrollProgress: number;
}

export const TruckModel: React.FC<TruckModelProps> = ({ scrollProgress }) => {
  const groupRef = useRef<THREE.Group>(null);
  const wheelRefs = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!groupRef.current) return;

    // Rutas de movimiento basadas en el camino SVG
    const pathPoints = [
      { x: 0, z: -5, rotation: 0 },
      { x: 0, z: -3, rotation: 0 },
      { x: 0, z: -1, rotation: 0 },
      { x: -1, z: 1, rotation: 0.3 },
      { x: -1.5, z: 3, rotation: 0.5 },
      { x: -1, z: 5, rotation: 0.2 },
      { x: 0.5, z: 6.5, rotation: -0.3 },
      { x: 1, z: 8, rotation: -0.5 },
      { x: 0.5, z: 9.5, rotation: -0.2 },
      { x: -1, z: 10.5, rotation: 0.4 },
      { x: 0, z: 12, rotation: 0.1 },
      { x: 0, z: 13.5, rotation: 0 }
    ];

    const point = scrollProgress * (pathPoints.length - 1);
    const currentIndex = Math.floor(point);
    const nextIndex = Math.min(currentIndex + 1, pathPoints.length - 1);
    const t = point - currentIndex;

    const current = pathPoints[currentIndex];
    const next = pathPoints[nextIndex];

    const x = current.x + (next.x - current.x) * t;
    const z = current.z + (next.z - current.z) * t;
    const rotation = current.rotation + (next.rotation - current.rotation) * t;

    groupRef.current.position.x = x;
    groupRef.current.position.z = z;
    groupRef.current.rotation.y = rotation;
  }, [scrollProgress]);

  useFrame(() => {
    if (wheelRefs.current) {
      wheelRefs.current.forEach((wheel) => {
        if (wheel) wheel.rotation.x += 0.15;
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.08, 0]} scale={[0.15, 0.15, 0.15]}>
      {/* Carrocería principal - Cabina (más pequeña y cuadrada como emoji) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 1, 1.4]} />
        <meshPhongMaterial color={0x888888} shininess={70} />
      </mesh>

      {/* Caja de carga trasera (característica de camioneta) */}
      <mesh position={[0, -0.1, -1.5]} castShadow receiveShadow>
        <boxGeometry args={[1.3, 0.9, 2.2]} />
        <meshPhongMaterial color={0x666666} shininess={60} />
      </mesh>

      {/* Cabina superior/techo */}
      <mesh position={[0, 0.6, 0.1]} castShadow>
        <boxGeometry args={[1.1, 0.5, 1.2]} />
        <meshPhongMaterial color={0x707070} shininess={65} />
      </mesh>

      {/* Parachoques frontal - cromado */}
      <mesh position={[0, -0.3, 0.8]} castShadow>
        <boxGeometry args={[1.3, 0.25, 0.35]} />
        <meshPhongMaterial color={0xcccccc} shininess={120} />
      </mesh>

      {/* Parachoques trasero */}
      <mesh position={[0, -0.3, -2.4]} castShadow>
        <boxGeometry args={[1.35, 0.25, 0.35]} />
        <meshPhongMaterial color={0x555555} shininess={60} />
      </mesh>

      {/* Rueda trasera izquierda - más grande */}
      <group position={[-0.7, -0.25, -0.5]}>
        <mesh
          ref={(el) => {
            if (el) wheelRefs.current[0] = el;
          }}
          castShadow
          receiveShadow
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.55, 0.55, 0.45, 32]} />
          <meshPhongMaterial color={0x1a1a1a} shininess={30} />
        </mesh>
        <mesh castShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.08]}>
          <cylinderGeometry args={[0.3, 0.3, 0.6, 20]} />
          <meshPhongMaterial color={0x444444} shininess={90} />
        </mesh>
      </group>

      {/* Rueda trasera derecha - más grande */}
      <group position={[0.7, -0.25, -0.5]}>
        <mesh
          ref={(el) => {
            if (el) wheelRefs.current[1] = el;
          }}
          castShadow
          receiveShadow
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.55, 0.55, 0.45, 32]} />
          <meshPhongMaterial color={0x1a1a1a} shininess={30} />
        </mesh>
        <mesh castShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.08]}>
          <cylinderGeometry args={[0.3, 0.3, 0.6, 20]} />
          <meshPhongMaterial color={0x444444} shininess={90} />
        </mesh>
      </group>

      {/* Rueda frontal izquierda */}
      <group position={[-0.6, -0.25, 1]} >
        <mesh
          ref={(el) => {
            if (el) wheelRefs.current[2] = el;
          }}
          castShadow
          receiveShadow
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.48, 0.48, 0.4, 32]} />
          <meshPhongMaterial color={0x1a1a1a} shininess={30} />
        </mesh>
        <mesh castShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.07]}>
          <cylinderGeometry args={[0.26, 0.26, 0.52, 20]} />
          <meshPhongMaterial color={0x444444} shininess={90} />
        </mesh>
      </group>

      {/* Rueda frontal derecha */}
      <group position={[0.6, -0.25, 1]} >
        <mesh
          ref={(el) => {
            if (el) wheelRefs.current[3] = el;
          }}
          castShadow
          receiveShadow
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.48, 0.48, 0.4, 32]} />
          <meshPhongMaterial color={0x1a1a1a} shininess={30} />
        </mesh>
        <mesh castShadow rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.07]}>
          <cylinderGeometry args={[0.26, 0.26, 0.52, 20]} />
          <meshPhongMaterial color={0x444444} shininess={90} />
        </mesh>
      </group>

      {/* Ventana frontal - grande y clara */}
      <mesh position={[0, 0.35, 0.75]} castShadow>
        <boxGeometry args={[0.95, 0.55, 0.1]} />
        <meshPhongMaterial color={0x99ccff} shininess={130} transparent opacity={0.6} />
      </mesh>

      {/* Luz frontal izquierda - circular */}
      <mesh position={[-0.5, -0.15, 0.85]} castShadow>
        <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
        <meshPhongMaterial color={0xffff99} emissive={0xffff00} shininess={100} />
      </mesh>

      {/* Luz frontal derecha - circular */}
      <mesh position={[0.5, -0.15, 0.85]} castShadow>
        <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
        <meshPhongMaterial color={0xffff99} emissive={0xffff00} shininess={100} />
      </mesh>

      {/* Puerta lateral izquierda */}
      <mesh position={[-0.65, 0.2, 0.1]} castShadow>
        <boxGeometry args={[0.05, 0.8, 0.8]} />
        <meshPhongMaterial color={0x555555} shininess={55} />
      </mesh>

      {/* Puerta lateral derecha */}
      <mesh position={[0.65, 0.2, 0.1]} castShadow>
        <boxGeometry args={[0.05, 0.8, 0.8]} />
        <meshPhongMaterial color={0x555555} shininess={55} />
      </mesh>

      {/* Espejo lateral izquierdo */}
      <mesh position={[-0.75, 0.35, 0]} castShadow>
        <boxGeometry args={[0.1, 0.22, 0.22]} />
        <meshPhongMaterial color={0x333333} shininess={100} />
      </mesh>

      {/* Espejo lateral derecho */}
      <mesh position={[0.75, 0.35, 0]} castShadow>
        <boxGeometry args={[0.1, 0.22, 0.22]} />
        <meshPhongMaterial color={0x333333} shininess={100} />
      </mesh>

      {/* Línea divisoria entre cabina y caja (detalle) */}
      <mesh position={[0, 0.15, -0.8]} castShadow>
        <boxGeometry args={[1.35, 0.02, 0.05]} />
        <meshPhongMaterial color={0x444444} shininess={40} />
      </mesh>
    </group>
  );
};
