"use client";
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            name: "Email",
            url: "mailto:divyam.bansal2000@gmail.com",
            icon: <FaEnvelope className="h-5 w-5" />
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/divyam-bansal",
            icon: <FaLinkedin className="h-5 w-5" />
        },
        {
            name: "GitHub",
            url: "https://github.com/divyamb08",
            icon: <FaGithub className="h-5 w-5" />
        },
        {
            name: "Twitter",
            url: "https://twitter.com/divyambansal123",
            icon: <FaTwitter className="h-5 w-5" />
        },
    ];

    // Keep the vertical social bar
    const verticalSocialBar = (
        <motion.div 
            className="vertical-icons hidden md:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            {socialLinks.map((social, index) => (
                <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="hover:opacity-75 hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-gray-800/40"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                >
                    {social.icon}
                </motion.a>
            ))}
            <motion.div 
                className="h-24 w-px bg-gradient-to-b from-indigo-400 to-purple-500 mx-auto mt-4"
                animate={{ 
                    height: ["60px", "100px", "60px"],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
            />
        </motion.div>
    );

    return (
        <>
            {/* Keep the vertical social bar */}
            {verticalSocialBar}
            
            {/* Enhanced Footer */}
            <footer className="relative footer border-t border-t-[#33353F] border-l-transparent border-r-transparent text-white overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#121225] via-[#1a1a33] to-[#121225] opacity-50"></div>
                
                {/* Decorative elements */}
                <motion.div 
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
                    animate={{ 
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                />
                
                <div className="relative container mx-auto py-10 px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Logo and Copyright */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col space-y-3"
                        >
                            <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-indigo-300 to-purple-400 inline-block text-transparent bg-clip-text">
                                Divyam Bansal
                            </Link>
                            <p className="text-slate-400 text-sm">
                                ©{currentYear} Divyam Bansal. All rights reserved.
                            </p>
                        </motion.div>
                        
                        {/* Quick Links */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col space-y-4"
                        >
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>
                                    <Link href="/#about" className="hover:text-indigo-400 transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#projects" className="hover:text-indigo-400 transition-colors">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#contact" className="hover:text-indigo-400 transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                        
                        {/* Social Links - Horizontal for Footer */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col space-y-4"
                        >
                            <h3 className="text-lg font-semibold">Connect</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target={social.name === "Email" ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-gray-800/40"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                            <p className="text-gray-500 text-sm">
                                Feel free to reach out and connect!
                            </p>
                        </motion.div>
                    </div>
                    
                    {/* Footer Bottom */}
                    <motion.div 
                        className="mt-8 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p>Designed and built with ❤️ using Next.js and Framer Motion</p>
                    </motion.div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
