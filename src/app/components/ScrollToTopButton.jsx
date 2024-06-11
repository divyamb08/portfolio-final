'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${isVisible ? 'block' : 'hidden'}`}>
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-purple-500 text-white hover:bg-purple-700"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
