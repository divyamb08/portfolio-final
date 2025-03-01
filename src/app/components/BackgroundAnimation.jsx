"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';

const BackgroundAnimation = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  
  // Generate random positions for particles
  const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10
    }));
  };
  
  const smallParticles = generateParticles(40);
  const mediumParticles = generateParticles(15);
  
  // Blurred background circles
  const blurCircles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 300 + 200,
    duration: Math.random() * 40 + 20
  }));
  
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden"
      style={{ 
        background: 'linear-gradient(to bottom, #121225, #1e1e3f)'
      }}
    >
      {/* Moving background that responds to scroll */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        {/* Blurred background elements */}
        {blurCircles.map((circle) => (
          <motion.div
            key={`blur-${circle.id}`}
            className="absolute rounded-full bg-slate-200"
            style={{
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              width: circle.size,
              height: circle.size,
              opacity: 0.03,
              filter: 'blur(80px)'
            }}
            animate={{
              x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
              opacity: [0.02, 0.04, 0.03, 0.02]
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Small particles */}
        {smallParticles.map((particle) => (
          <motion.div
            key={`particle-small-${particle.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: 0.3
            }}
            animate={{
              x: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.4, 0.3, 0.2]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Medium particles */}
        {mediumParticles.map((particle) => (
          <motion.div
            key={`particle-medium-${particle.id}`}
            className="absolute rounded-full bg-indigo-200"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size * 2,
              height: particle.size * 2,
              opacity: 0.15
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.2, 0.15, 0.1]
            }}
            transition={{
              duration: particle.duration * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Gradient overlay to add depth */}
      <div 
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30, 30, 63, 0) 0%, rgba(18, 18, 37, 0.8) 100%)'
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;