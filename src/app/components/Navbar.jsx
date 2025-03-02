"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-[#121225]/80 shadow-md' : 'bg-transparent'}`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 inline-block text-transparent bg-clip-text"
          >
            Divyam Bansal
          </motion.div>
        </Link>
        <div className="mobile-menu block md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={`flex items-center px-3 py-2 rounded-full ${scrolled ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-indigo-500/20 text-white hover:bg-indigo-500/30'} backdrop-blur-sm border border-indigo-500/30`}
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-5 w-5" />
            ) : (
              <XMarkIcon className="h-5 w-5" />
            )}
          </motion.button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <motion.ul 
            className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              },
              hidden: { opacity: 0 }
            }}
          >
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -10 }
                }}
              >
                <NavLink href={link.path} title={link.title} />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden backdrop-blur-lg bg-[#121225]/90"
          >
            <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative navbar line */}
      <motion.div 
        className={`h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        animate={{ 
          opacity: scrolled ? [0.3, 0.6, 0.3] : 0,
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </motion.nav>
  );
};

export default Navbar;