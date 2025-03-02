"use client";
import React, { useState, useRef, useEffect } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Tilt } from "react-tilt";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const router = useRouter();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Configure the tilt options - disable for mobile
  const tiltOptions = {
    max: isMobile ? 0 : 25,
    scale: isMobile ? 1 : 1.05,
    speed: 450,
    glare: !isMobile,
    "max-glare": 0.5,
    perspective: 1000,
    disabled: isMobile,
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleCardClick = (e) => {
    // Check if the click wasn't on one of the links
    const isLink = e.target.closest('a');
    if (!isLink && gitUrl) {
      // Add a feedback before opening the URL
      setIsHovered(true);
      setTimeout(() => {
        window.open(gitUrl, '_blank');
      }, 300);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="h-full"
    >
      <Tilt options={tiltOptions} className="h-full">
        <div 
          className="h-full flex flex-col rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-[#181818] transform transition-all duration-300 cursor-pointer"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          onClick={handleCardClick}
          style={{ 
            boxShadow: isHovered && !isMobile 
              ? "0 25px 50px -12px rgba(123, 104, 238, 0.4)" 
              : "0 10px 30px -15px rgba(0,0,0,0.5)",
            transform: isMobile ? "none" : undefined
          }}
          role="button"
          tabIndex={0}
          aria-label={`View ${title} project on GitHub`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              if (gitUrl) {
                setIsHovered(true);
                setTimeout(() => window.open(gitUrl, '_blank'), 300);
              }
            }
          }}
        >
          <div className="h-52 md:h-72 relative overflow-hidden">
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-40 z-10 transition-opacity duration-300 ${isHovered && !isMobile ? "opacity-10" : "opacity-40"}`}
            />
            
            <motion.div 
              className="absolute inset-0"
              animate={{ scale: isHovered && !isMobile ? 1.1 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                src={imgUrl}
                alt={`Screenshot of ${title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
                loading="lazy"
              />
            </motion.div>
            
            <div 
              className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500"
              style={{ 
                opacity: (isHovered && !isMobile) || isMobile ? (isMobile ? 0.7 : 0.9) : 0,
                background: 'linear-gradient(to right, rgba(76, 29, 149, 0.8), rgba(124, 58, 237, 0.8))',
                backdropFilter: (isHovered && !isMobile) || isMobile ? "blur(3px)" : "blur(0px)"
              }}
            >
              <Link
                href={gitUrl} target="_blank"
                className="h-12 w-12 sm:h-14 sm:w-14 mr-3 sm:mr-4 border-2 relative rounded-full border-white border-opacity-70 hover:border-opacity-100 transform transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95"
                aria-label="View source code"
                onClick={(e) => e.stopPropagation()}
              >
                <CodeBracketIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </Link>
              {previewUrl && (
                <Link
                  href={previewUrl} target="_blank"
                  className="h-12 w-12 sm:h-14 sm:w-14 border-2 relative rounded-full border-white border-opacity-70 hover:border-opacity-100 transform transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95"
                  aria-label="View live project"
                  onClick={(e) => e.stopPropagation()}
                >
                  <EyeIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </Link>
              )}
            </div>
          </div>
          
          <motion.div 
            className="flex-grow p-4 sm:p-6 flex flex-col bg-[#181818] rounded-b-xl"
            animate={{ y: isHovered && !isMobile ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h5 
              className="text-lg sm:text-xl font-semibold mb-2 text-white"
              animate={{ 
                color: isHovered && !isMobile ? "#a78bfa" : "#ffffff",
                textShadow: isHovered && !isMobile ? "0 0 8px rgba(167, 139, 250, 0.5)" : "none"
              }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h5>
            <p className="text-[#ADB7BE] text-xs sm:text-sm">{description}</p>
            
            <motion.div 
              className="mt-3 sm:mt-4 h-1 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-full"
              initial={{ width: "30%", opacity: 0.6 }}
              animate={{ 
                width: (isHovered && !isMobile) || isMobile ? "80%" : "30%", 
                opacity: (isHovered && !isMobile) || isMobile ? 1 : 0.6 
              }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Mobile: always show hint, Desktop: only on hover */}
            {(isHovered && !isMobile) || isMobile ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-2 sm:mt-4 text-xs text-purple-300 text-center"
              >
                {isMobile ? "Tap" : "Click"} to view on GitHub
              </motion.div>
            ) : null}
          </motion.div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;