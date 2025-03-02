"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const SkillCategory = ({ title, skills, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="mb-10"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      <h3 className="text-xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
        {title}
      </h3>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            color={skill.color}
            delay={index * 0.1 + delay}
            inView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillBar = ({ name, level, color = 'indigo', delay = 0, inView }) => {
  const barRef = useRef(null);
  const skillNameRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const getGradient = (color) => {
    const gradients = {
      indigo: 'from-indigo-500 to-purple-500',
      blue: 'from-blue-500 to-cyan-500',
      green: 'from-green-500 to-emerald-500',
      red: 'from-red-500 to-rose-500',
      orange: 'from-orange-500 to-amber-500',
      purple: 'from-purple-500 to-fuchsia-500',
    };
    return gradients[color] || gradients.indigo;
  };

  return (
    <motion.div 
      className="relative"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { 
          opacity: 1, 
          transition: { duration: 0.3, delay } 
        },
        hidden: { opacity: 0 }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between mb-1">
        <motion.span 
          ref={skillNameRef}
          className="text-white font-medium"
          animate={{
            scale: hovered ? 1.05 : 1,
            color: hovered ? '#a78bfa' : '#ffffff'
          }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.span>
        <motion.span 
          className="text-gray-400"
          animate={{
            opacity: hovered ? 1 : 0.7,
            scale: hovered ? 1.1 : 1
          }}
        >
          {level}%
        </motion.span>
      </div>
      
      <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4 overflow-hidden">
        <motion.div
          ref={barRef}
          className={`h-2.5 rounded-full bg-gradient-to-r ${getGradient(color)}`}
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            visible: { 
              width: `${level}%`,
              transition: { 
                duration: 1, 
                delay: delay + 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }
            },
            hidden: { width: 0 }
          }}
        >
          <motion.div 
            className="h-full w-full"
            animate={{
              backgroundPosition: hovered ? ['0% 0%', '100% 0%'] : '0% 0%'
            }}
            transition={{
              duration: 1.5,
              repeat: hovered ? Infinity : 0
            }}
            style={{
              background: hovered ? 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)' : 'none',
              backgroundSize: '200% 100%'
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillVisualizer = () => {
  const devSkills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'orange' },
    { name: 'Python', level: 90, color: 'blue' },
    { name: 'React/Next.js', level: 92, color: 'purple' },
    { name: 'Node.js', level: 88, color: 'green' },
    { name: 'C++', level: 85, color: 'red' },
  ];
  
  const dataSkills = [
    { name: 'SQL & Database Design', level: 90, color: 'blue' },
    { name: 'Machine Learning', level: 85, color: 'purple' },
    { name: 'Data Visualization', level: 92, color: 'orange' },
    { name: 'Statistics & Analysis', level: 86, color: 'indigo' },
    { name: 'Data Preprocessing', level: 88, color: 'green' },
  ];
  
  return (
    <div className="mt-12 p-6 rounded-xl border border-gray-800 bg-[#181818]/80 backdrop-blur-sm shadow-xl bg-opacity-50">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
          Skills Visualization
        </span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        <SkillCategory title="Development Skills" skills={devSkills} delay={0.2} />
        <SkillCategory title="Data Science Skills" skills={dataSkills} delay={0.4} />
      </div>
    </div>
  );
};

export default SkillVisualizer;
