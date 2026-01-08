/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CarModel3DProps {
  pathRef: React.RefObject<SVGPathElement>;
  scrollProgress: number;
}

export const CarModel3D: React.FC<CarModel3DProps> = ({ pathRef, scrollProgress }) => {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!pathRef.current || !groupRef.current) return;

    // Obtener punto en el camino basado en el progreso
    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(scrollProgress * pathLength);

    // Posicionar el auto en el punto del camino
    groupRef.current.position.x = (point.x / 300 - 0.5) * 4; // Escalar a coordenadas 3D
    groupRef.current.position.z = (point.y / 1500 - 0.5) * 10;
  }, [scrollProgress, pathRef]);

  useFrame(() => {
    if (groupRef.current) {
      // Rotación suave del auto
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, 0]} scale={[0.35, 0.35, 0.35]}>
      {/* Carrocería principal */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 0.75, 2.2]} />
        <meshPhongMaterial color={0x1976d2} shininess={100} />
      </mesh>

      {/* Techo */}
      <mesh position={[0, 0.55, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[0.95, 0.5, 1.35]} />
        <meshPhongMaterial color={0x1565c0} shininess={90} />
      </mesh>

      {/* Parachoques frontal */}
      <mesh position={[0, -0.3, 1.15]} castShadow receiveShadow>
        <boxGeometry args={[1.15, 0.25, 0.4]} />
        <meshPhongMaterial color={0x0a0a0a} shininess={60} />
      </mesh>

      {/* Parachoques trasero */}
      <mesh position={[0, -0.3, -1.2]} castShadow receiveShadow>
        <boxGeometry args={[1.15, 0.25, 0.35]} />
        <meshPhongMaterial color={0x0a0a0a} shininess={60} />
      </mesh>

      {/* Faros - izquierda */}
      <mesh position={[-0.35, -0.05, 1.1]} castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color={0xffeb3b}
          emissive={0xffa500}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Faros - derecha */}
      <mesh position={[0.35, -0.05, 1.1]} castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color={0xffeb3b}
          emissive={0xffa500}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Ventana frontal */}
      <mesh position={[0, 0.3, 0.3]}>
        <planeGeometry args={[0.5, 0.35]} />
        <meshPhongMaterial
          color={0x4da6ff}
          transparent
          opacity={0.5}
          shininess={120}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Ventana trasera */}
      <mesh position={[0, 0.3, -0.4]}>
        <planeGeometry args={[0.5, 0.35]} />
        <meshPhongMaterial
          color={0x4da6ff}
          transparent
          opacity={0.5}
          shininess={120}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Ruedas */}
      {[
        [-0.55, 0],
        [0.55, 0],
        [-0.55, -1.3],
        [0.55, -1.3]
      ].map((pos, i) => (
        <mesh key={`wheel-${i}`} position={[pos[0], -0.5, pos[1]]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.38, 24]} />
          <meshPhongMaterial color={0x0a0a0a} shininess={50} />
        </mesh>
      ))}

      {/* Rims */}
      {[
        [-0.55, 0],
        [0.55, 0],
        [-0.55, -1.3],
        [0.55, -1.3]
      ].map((pos, i) => (
        <mesh key={`rim-${i}`} position={[pos[0], -0.5, pos[1]]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.28, 0.28, 0.42, 24]} />
          <meshPhongMaterial color={0x888888} shininess={100} />
        </mesh>
      ))}

      {/* Espejos laterales */}
      <mesh position={[-0.6, 0.25, 0.15]}>
        <boxGeometry args={[0.1, 0.13, 0.08]} />
        <meshPhongMaterial color={0x222222} shininess={70} />
      </mesh>

      <mesh position={[0.6, 0.25, 0.15]}>
        <boxGeometry args={[0.1, 0.13, 0.08]} />
        <meshPhongMaterial color={0x222222} shininess={70} />
      </mesh>

      {/* Líneas de puertas */}
      <mesh position={[-0.51, 0.05, 0]}>
        <boxGeometry args={[0.02, 0.5, 0.6]} />
        <meshPhongMaterial color={0x0d5fa8} shininess={80} />
      </mesh>

      <mesh position={[0.51, 0.05, 0]}>
        <boxGeometry args={[0.02, 0.5, 0.6]} />
        <meshPhongMaterial color={0x0d5fa8} shininess={80} />
      </mesh>
    </group>
  );
};
