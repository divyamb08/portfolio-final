"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.7,
      delay: custom * 0.1,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
    },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// Main component
const ScrollRevealSection = ({ 
  children, 
  className, 
  variant = 'fadeInUp', 
  threshold = 0.1, 
  delay = 0, 
  duration = 0.5, 
  direction = 'up',
  triggerOnce = false 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, triggerOnce]);

  let selectedVariant;
  switch (variant) {
    case 'fadeInUp':
      selectedVariant = fadeInUp;
      break;
    case 'fadeIn':
      selectedVariant = fadeIn;
      break;
    case 'stagger':
      selectedVariant = staggerContainer;
      break;
    case 'slideIn':
      selectedVariant = slideIn(direction, 'tween', delay, duration);
      break;
    case 'zoomIn':
      selectedVariant = zoomIn(delay, duration);
      break;
    case 'textVariant':
      selectedVariant = textVariant(delay);
      break;
    default:
      selectedVariant = fadeInUp;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealSection;
