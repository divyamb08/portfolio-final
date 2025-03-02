"use client";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, PerspectiveCamera, Text, Preload } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { motion } from "framer-motion-3d";
import { useInView } from "react-intersection-observer";

const FloatingShapes = () => {
  const group = useRef();

  // For the shapes - refined elegant color palette
  const shapes = [
    { position: [-2, -0.8, -3], color: "#9D84FF", scale: 0.35, geometry: "icosahedron" },
    { position: [2, 0.5, -3], color: "#B68AFF", scale: 0.3, geometry: "octahedron" },
    { position: [0, 0, -5], color: "#E2D9FF", scale: 0.22, geometry: "dodecahedron" },
    { position: [-1.5, 1.2, -4], color: "#A384FF", scale: 0.28, geometry: "sphere" }
  ];

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  const Shape = ({ position, color, scale, geometry }) => {
    const meshRef = useRef();
    
    useFrame((state) => {
      const time = state.clock.getElapsedTime();
      if (meshRef.current) {
        // More subtle, slow animation
        meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
        meshRef.current.rotation.z = Math.cos(time * 0.15) * 0.1;
        meshRef.current.position.y = Math.sin(time * 0.3) * 0.15 + position[1];
      }
    });

    // Select geometry based on parameter
    let GeometryComponent;
    switch (geometry) {
      case "box":
        GeometryComponent = <boxGeometry args={[1, 1, 1]} />;
        break;
      case "tetrahedron":
        GeometryComponent = <tetrahedronGeometry args={[1, 0]} />;
        break;
      case "icosahedron":
        GeometryComponent = <icosahedronGeometry args={[1, 0]} />;
        break;
      case "dodecahedron":
        GeometryComponent = <dodecahedronGeometry args={[1, 0]} />;
        break;
      case "octahedron":
        GeometryComponent = <octahedronGeometry args={[1, 0]} />;
        break;
      default:
        GeometryComponent = <sphereGeometry args={[1, 32, 32]} />;
    }

    return (
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}> {/* Lower intensity for subtlety */}
        <mesh ref={meshRef} position={position} scale={scale}>
          {GeometryComponent}
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={0.15} 
            roughness={0.6} 
            metalness={0.5} 
            transparent 
            opacity={0.65} 
          />
        </mesh>
      </Float>
    );
  };

  return (
    <group ref={group}>
      {shapes.map((shape, index) => (
        <Shape key={index} {...shape} />
      ))}
    </group>
  );
};

// Main HeroCanvas Component
const HeroCanvas = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <div ref={ref} className="w-full h-full absolute inset-0 -z-5">
      {inView && (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 10, 5]} intensity={0.6} color="#ffffff" />
          <spotLight position={[0, 5, 10]} angle={0.5} penumbra={1} intensity={1} color="#A384FF" />
          <pointLight position={[-5, 0, -5]} intensity={0.2} color="#E2D9FF" />
          
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={false} 
            autoRotate 
            autoRotateSpeed={0.3} 
          />
          
          <EffectComposer>
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={200} intensity={0.8} />
            <ChromaticAberration offset={[0.0002, 0.0002]} />
          </EffectComposer>
          
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default HeroCanvas;
