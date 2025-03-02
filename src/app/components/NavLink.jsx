"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const NavLink = ({ href, title }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Link 
            href={href} 
            className="relative block py-2 pl-3 pr-4 text-white sm:text-lg rounded md:p-0 transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.span 
                className="relative z-10 font-medium"
                animate={{ color: isHovered ? "#a78bfa" : "#ffffff" }}
            >
                {title}
            </motion.span>
            
            {/* Animated underline */}
            <motion.span 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-300 to-purple-400 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                    scale: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0
                }}
                transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25 
                }}
                style={{ 
                    originX: 0.5,
                    originY: 0 
                }}
            />
            
            {/* Subtle glow effect */}
            {isHovered && (
                <motion.span 
                    className="absolute inset-0 rounded-full blur-xl bg-indigo-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                />
            )}
        </Link>
    );
};

export default NavLink;