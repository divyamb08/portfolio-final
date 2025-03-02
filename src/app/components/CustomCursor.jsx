"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if cursor is over a clickable element
      const target = e.target;
      const isClickable = (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.onclick ||
        target.className.includes('clickable') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
      
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 24,
      y: position.y - 24,
      height: 48,
      width: 48,
      borderColor: "rgba(255, 255, 255, 0.5)",
      backgroundColor: "rgba(123, 104, 238, 0.05)",
      mixBlendMode: "difference"
    },
    pointer: {
      x: position.x - 16,
      y: position.y - 16,
      height: 32,
      width: 32,
      borderColor: "rgba(255, 255, 255, 0.8)",
      backgroundColor: "rgba(147, 112, 219, 0.2)",
      mixBlendMode: "difference"
    },
    clicking: {
      x: position.x - 12,
      y: position.y - 12,
      height: 24,
      width: 24,
      borderColor: "rgba(255, 255, 255, 1)",
      backgroundColor: "rgba(138, 43, 226, 0.3)",
      mixBlendMode: "difference"
    },
    hidden: {
      opacity: 0
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none z-50"
        variants={variants}
        animate={
          isVisible 
            ? isClicking 
              ? "clicking" 
              : isPointer 
                ? "pointer" 
                : "default"
            : "hidden"
        }
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
          mass: 0.1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 bg-indigo-400 mix-blend-difference"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          opacity: isVisible ? 0.4 : 0
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200
        }}
      />
    </>
  );
};

export default CustomCursor;
