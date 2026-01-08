import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Peugeot3D.css';

export const Peugeot3D: React.FC<{ 
  className?: string;
  autoRotate?: boolean;
}> = ({ className = '', autoRotate = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const carGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00000000);

    // Camera - vista lateral del auto
    const camera = new THREE.PerspectiveCamera(
      35,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 0.5, 2.8);
    camera.lookAt(0, 0.2, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      preserveDrawingBuffer: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(8, 8, 8);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x1976d2, 0.6, 30);
    pointLight.position.set(0, 1.5, 2);
    scene.add(pointLight);

    // Car group
    const carGroup = new THREE.Group();
    carGroupRef.current = carGroup;
    scene.add(carGroup);

    // Ground for shadow
    const groundGeometry = new THREE.PlaneGeometry(8, 8);
    const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.4 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    scene.add(ground);

    // Main body - chassis/carrocería
    const bodyShape = new THREE.BoxGeometry(1, 0.75, 2.2);
    const bodyMat = new THREE.MeshPhongMaterial({ 
      color: 0x1976d2,
      shininess: 100,
      flatShading: false
    });
    const body = new THREE.Mesh(bodyShape, bodyMat);
    body.position.y = 0.45;
    body.castShadow = true;
    body.receiveShadow = true;
    carGroup.add(body);

    // Windshield/Roof - parte superior
    const roofGeometry = new THREE.BoxGeometry(0.95, 0.5, 1.35);
    const roofMat = new THREE.MeshPhongMaterial({ 
      color: 0x1565c0,
      shininess: 90
    });
    const roof = new THREE.Mesh(roofGeometry, roofMat);
    roof.position.y = 1;
    roof.position.z = -0.2;
    roof.castShadow = true;
    roof.receiveShadow = true;
    carGroup.add(roof);

    // Front bumper - parachoques frontal
    const bumperFrontGeometry = new THREE.BoxGeometry(1.15, 0.25, 0.4);
    const bumperMat = new THREE.MeshPhongMaterial({ 
      color: 0x0a0a0a,
      shininess: 60
    });
    const bumperFront = new THREE.Mesh(bumperFrontGeometry, bumperMat);
    bumperFront.position.y = 0.15;
    bumperFront.position.z = 1.15;
    bumperFront.castShadow = true;
    bumperFront.receiveShadow = true;
    carGroup.add(bumperFront);

    // Rear bumper - parachoques trasero
    const bumperRearGeometry = new THREE.BoxGeometry(1.15, 0.25, 0.35);
    const bumperRear = new THREE.Mesh(bumperRearGeometry, bumperMat);
    bumperRear.position.y = 0.15;
    bumperRear.position.z = -1.2;
    bumperRear.castShadow = true;
    bumperRear.receiveShadow = true;
    carGroup.add(bumperRear);

    // Headlights
    const lightGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const lightMat = new THREE.MeshStandardMaterial({ 
      color: 0xffeb3b,
      emissive: 0xffa500,
      emissiveIntensity: 0.7,
      metalness: 0.6,
      roughness: 0.2
    });

    const leftHeadlight = new THREE.Mesh(lightGeo, lightMat);
    leftHeadlight.position.set(-0.35, 0.45, 1.1);
    leftHeadlight.castShadow = true;
    carGroup.add(leftHeadlight);

    const rightHeadlight = new THREE.Mesh(lightGeo, lightMat);
    rightHeadlight.position.set(0.35, 0.45, 1.1);
    rightHeadlight.castShadow = true;
    carGroup.add(rightHeadlight);

    // Windows - Front
    const frontWindowGeo = new THREE.PlaneGeometry(0.5, 0.35);
    const windowMat = new THREE.MeshPhongMaterial({ 
      color: 0x4da6ff,
      transparent: true,
      opacity: 0.5,
      shininess: 120,
      side: THREE.DoubleSide
    });

    const frontWindow = new THREE.Mesh(frontWindowGeo, windowMat);
    frontWindow.position.set(0, 0.8, 0.3);
    frontWindow.rotation.y = 0;
    carGroup.add(frontWindow);

    // Windows - Rear
    const rearWindow = new THREE.Mesh(frontWindowGeo, windowMat);
    rearWindow.position.set(0, 0.8, -0.4);
    rearWindow.rotation.y = 0;
    carGroup.add(rearWindow);

    // Wheels - all 4
    const wheelGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.38, 24);
    const wheelMat = new THREE.MeshPhongMaterial({ 
      color: 0x0a0a0a,
      shininess: 50
    });

    const wheelPositions = [
      [-0.55, 0.5, 0.65],  // Front left
      [0.55, 0.5, 0.65],   // Front right
      [-0.55, 0.5, -0.65], // Rear left
      [0.55, 0.5, -0.65]   // Rear right
    ];

    wheelPositions.forEach(([x, y, z]) => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, y, z);
      wheel.castShadow = true;
      wheel.receiveShadow = true;
      carGroup.add(wheel);

      // Rims
      const rimGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.42, 24);
      const rimMat = new THREE.MeshPhongMaterial({ 
        color: 0x888888,
        shininess: 100
      });
      const rim = new THREE.Mesh(rimGeo, rimMat);
      rim.rotation.z = Math.PI / 2;
      rim.position.set(x, y, z);
      rim.castShadow = true;
      carGroup.add(rim);
    });

    // Side mirrors
    const mirrorGeo = new THREE.BoxGeometry(0.1, 0.13, 0.08);
    const mirrorMat = new THREE.MeshPhongMaterial({ 
      color: 0x222222,
      shininess: 70
    });

    const leftMirror = new THREE.Mesh(mirrorGeo, mirrorMat);
    leftMirror.position.set(-0.6, 0.75, 0.15);
    carGroup.add(leftMirror);

    const rightMirror = new THREE.Mesh(mirrorGeo, mirrorMat);
    rightMirror.position.set(0.6, 0.75, 0.15);
    carGroup.add(rightMirror);

    // Door lines (adds visual detail)
    const doorLineGeo = new THREE.BoxGeometry(0.02, 0.5, 0.6);
    const doorLineMat = new THREE.MeshPhongMaterial({ 
      color: 0x0d5fa8,
      shininess: 80
    });

    const leftDoorLine = new THREE.Mesh(doorLineGeo, doorLineMat);
    leftDoorLine.position.set(-0.51, 0.55, 0);
    carGroup.add(leftDoorLine);

    const rightDoorLine = new THREE.Mesh(doorLineGeo, doorLineMat);
    rightDoorLine.position.set(0.51, 0.55, 0);
    carGroup.add(rightDoorLine);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (autoRotate && carGroup) {
        carGroup.rotation.y += 0.008;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !renderer) return;

      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement.parentElement === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate]);

  return (
    <div 
      ref={containerRef} 
      className={`peugeot-3d-container ${className}`}
    />
  );
};
