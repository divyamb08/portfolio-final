'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './AboutSection.css';
import avalor from '../../../public/images/Experience/avalor.png';
import bajaj from '../../../public/images/Experience/bajaj_finserv.png';
import isb from '../../../public/images/Experience/isb.png';
import sfa from '../../../public/images/Experience/SFA.png';
import marico from '../../../public/images/Experience/marico.png';
import winwire from '../../../public/images/Experience/winwire.png';
import segal from '../../../public/images/Experience/segal.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  const [showMore, setShowMore] = useState({});
  const [visible, setVisible] = useState({});
  const itemRefs = useRef([]);
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const handleShowMore = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(prev => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the item is visible
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Timeline item variants for animation - responsive based on screen size
  const itemVariants = {
    hidden: isMobile 
      ? { opacity: 0, y: 50 } 
      : { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      y: isMobile ? 0 : undefined,
      x: isMobile ? undefined : 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };


  
  // Content animation variants - responsive based on screen size
  const contentVariants = {
    hidden: isMobile 
      ? { opacity: 0, y: 30 } 
      : { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      y: isMobile ? 0 : undefined,
      x: isMobile ? undefined : 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Badge animation variants
  const badgeVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        delay: 0.3,
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      }
    }
  };

  // Logo animation variants
  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.4,
        delay: 0.1,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  // Logo pulse animation (after appearing)
  const logoPulse = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.1, 1],
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.1
      }
    }
  };

  return (
    <section id="experience" className='flex flex-col h-auto justify-center items-center py-16 sm:mt-36 sm:mb-36 max-w-7xl mx-auto px-4'>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        className='mb-16'
      >
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
            Experience
          </span>
        </h1>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className='grid grid-cols-1 items-center relative px-4 sm:px-0'>
        {/* Timeline vertical line with a gradient - hidden on mobile */}
        <div className="absolute h-full w-0.5 bg-gradient-to-b from-indigo-300 via-purple-500 to-indigo-300 left-0 top-0 rounded-full hidden sm:block"></div>
        
        <ol className="relative">
          {/* The Segal Group */}
          <motion.li 
            className="mb-16 pl-0 sm:pl-16 relative"
            ref={el => itemRefs.current[0] = el}
            data-id="segal-item"
            initial="hidden"
            animate={visible['segal-item'] ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {}
            }}
          >
            {/* Logo positioned on top of the timeline */}
            <motion.span 
              className="absolute flex items-center justify-center w-12 h-12 bg-indigo-900 rounded-full ring-4 ring-indigo-100/10 shadow-lg shadow-indigo-500/20 z-10 hidden sm:flex"
              style={{ left: "-23px", top: "0", transform: "translateX(-50%)" }}
              variants={logoVariants}
            >
              <Image src={segal} alt="The Segal Group" className="w-12 h-12 rounded-full" />
            </motion.span>
            
            {/* Content card */}
            <motion.div
              variants={contentVariants}
              className="bg-slate-800/50 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-center flex-wrap gap-2">
                <h3 className="text-2xl text-white font-bold">Data Analyst Intern</h3>
                <motion.span 
                  variants={badgeVariants}
                  className="bg-indigo-100 text-indigo-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
                >
                  Latest
                </motion.span>
              </div>
              <time className="block mb-3 text-lg font-medium text-indigo-300">The Segal Group</time>
              <ul className="list-disc pl-5 text-lg text-slate-200 space-y-2">
                <li className="timeline-list-item">Implemented a pre-trained Hugging Face model on Segal&apos;s servers to utilize generative AI on sensitive public health data, while maintaining data security, improving productivity and reducing turnaround time for audit report generation.</li>
                <li className={`timeline-list-item expandable ${showMore['segal'] ? 'expanded' : ''}`}>
                  Leveraged SQL and Python to clean, preprocess and analyze medical PHI data for auditing purposes, and identify discrepancies. Developed Excel Macros to automate stratification process.
                </li>
              </ul>
              <button 
                onClick={() => handleShowMore('segal')} 
                className="mt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                {showMore['segal'] ? 'See less' : 'See more'} 
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${showMore['segal'] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </motion.li>

          {/* Bajaj Finserv */}
          <motion.li 
            className="mb-16 pl-0 sm:pl-16 relative"
            ref={el => itemRefs.current[1] = el}
            data-id="bajaj-item"
            initial="hidden"
            animate={visible['bajaj-item'] ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {}
            }}
          >
            <motion.span 
              className="absolute flex items-center justify-center w-12 h-12 bg-indigo-900 rounded-full ring-4 ring-indigo-100/10 shadow-lg shadow-indigo-500/20 z-10 hidden sm:flex"
              style={{ left: "-23px", top: "0", transform: "translateX(-50%)" }}
              variants={logoVariants}
            >
              <Image src={bajaj} alt="Bajaj Finserv" className="w-12 h-12 rounded-full" />
            </motion.span>
            <motion.div
              variants={contentVariants}
              className="bg-slate-800/50 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl text-white font-bold">Software Developer</h3>
              <time className="block mb-3 text-lg font-medium text-indigo-300">Bajaj Finserv Limited ~ India&apos;s Largest NBFC</time>
              <ul className="list-disc pl-5 text-lg text-slate-200 space-y-2">
                <li className="timeline-list-item">Crafted fast and responsive progressive web application components – like store locator, personalized newsletter, and automated EMI calculator, and personal finance homepage using AngularJS, which improved user engagement significantly; currently serving over 500,000 active users monthly.</li>
                <li className={`timeline-list-item expandable ${showMore['bajaj'] ? 'expanded' : ''}`}>
                  Developed an in-house application operating React native to monitor in-store inventory of electronics, assisting 25,000 employees daily: reducing stock audit time and improving demand forecasting.
                  Refurbished code, fixed bugs and created solutions for potential crashes of the application reducing the mean downtime.
                </li>
              </ul>
              <button 
                onClick={() => handleShowMore('bajaj')} 
                className="mt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                {showMore['bajaj'] ? 'See less' : 'See more'}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${showMore['bajaj'] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </motion.li>

          {/* Indian School of Business */}
          <motion.li 
            className="mb-16 pl-0 sm:pl-16 relative"
            ref={el => itemRefs.current[2] = el}
            data-id="isb-item"
            initial="hidden"
            animate={visible['isb-item'] ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {}
            }}
          >
            <motion.span 
              className="absolute flex items-center justify-center w-12 h-12 bg-indigo-900 rounded-full ring-4 ring-indigo-100/10 shadow-lg shadow-indigo-500/20 z-10 hidden sm:flex"
              style={{ left: "-23px", top: "0", transform: "translateX(-50%)" }}
              variants={logoVariants}
            >
              <Image src={isb} alt="Indian School of Business" className="w-12 h-12 rounded-full" />
            </motion.span>
            <motion.div
              variants={contentVariants}
              className="bg-slate-800/50 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl text-white font-bold">Data Science Intern</h3>
              <time className="block mb-3 text-lg font-medium text-indigo-300">Indian School of Business</time>
              <ul className="list-disc pl-5 text-lg text-slate-200 space-y-2">
                <li className="timeline-list-item">Identified and mapped interlinking attributes across diverse data tables, significantly improving data coherence and accessibility for analytical purposes. The data along with a detailed report was made available to the Government of India and the Bill and Melinda Gates Foundation for impactful investments in improving the nutrition of the underprivileged people.</li>
                <li className={`timeline-list-item expandable ${showMore['isb'] ? 'expanded' : ''}`}>
                  Developed automated scraping scripts in Python extracting over 4 million rows of data using Selenium and BS4; visualized using Pandas EDA techniques for effective decision making in devising strategies to improve nutrition for the rural sector of India.
                </li>
              </ul>
              <button 
                onClick={() => handleShowMore('isb')} 
                className="mt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                {showMore['isb'] ? 'See less' : 'See more'}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${showMore['isb'] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </motion.li>

          {/* Avalor Investments */}
          <motion.li 
            className="mb-16 pl-0 sm:pl-16 relative"
            ref={el => itemRefs.current[3] = el}
            data-id="avalor-item"
            initial="hidden"
            animate={visible['avalor-item'] ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {}
            }}
          >
            <motion.span 
              className="absolute flex items-center justify-center w-12 h-12 bg-indigo-900 rounded-full ring-4 ring-indigo-100/10 shadow-lg shadow-indigo-500/20 z-10 hidden sm:flex"
              style={{ left: "-23px", top: "0", transform: "translateX(-50%)" }}
              variants={logoVariants}
            >
              <Image src={avalor} alt="Avalor Investments" className="w-12 h-12 rounded-full" />
            </motion.span>
            <motion.div
              variants={contentVariants}
              className="bg-slate-800/50 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl text-white font-bold">Python Developer Intern</h3>
              <time className="block mb-3 text-lg font-medium text-indigo-300">Avalor Investments Pvt. Ltd.</time>
              <ul className="list-disc pl-5 text-lg text-slate-200 space-y-2">
                <li className="timeline-list-item">Developed a trading bot and devised trading strategies with integration of sentiment analysis (using BERT) - by profiling major trading and VC accounts on Twitter and Reddit. The sentiment analysis improved the net profit by 20%.</li>
                <li className={`timeline-list-item expandable ${showMore['avalor'] ? 'expanded' : ''}`}>
                  Researched extensively on historical OHLCV data to visualize trends including ATR, Fibonacci Retracement, moving averages, volatility, volume, etc. enabling the organization to invest over 5 million dollars.
                </li>
              </ul>
              <button 
                onClick={() => handleShowMore('avalor')} 
                className="mt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                {showMore['avalor'] ? 'See less' : 'See more'}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${showMore['avalor'] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </motion.li>

          {/* Winwire Technologies */}
          <motion.li 
            className="mb-16 pl-0 sm:pl-16 relative"
            ref={el => itemRefs.current[4] = el}
            data-id="winwire-item"
            initial="hidden"
            animate={visible['winwire-item'] ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {}
            }}
          >
            <motion.span 
              className="absolute flex items-center justify-center w-12 h-12 bg-indigo-900 rounded-full ring-4 ring-indigo-100/10 shadow-lg shadow-indigo-500/20 z-10 hidden sm:flex"
              style={{ left: "-23px", top: "0", transform: "translateX(-50%)" }}
              variants={logoVariants}
            >
              <Image src={winwire} alt="Winwire Technologies" className="w-12 h-12 rounded-full" />
            </motion.span>
            <motion.div
              variants={contentVariants}
              className="bg-slate-800/50 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl text-white font-bold">Data Science Intern</h3>
              <time className="block mb-3 text-lg font-medium text-indigo-300">Winwire Technologies Inc.</time>
              <ul className="list-disc pl-5 text-lg text-slate-200 space-y-2">
                <li className="timeline-list-item">Developed an all-inclusive Applicant Tracking system (ATS) for in-house usage using lightweight Python-Spacy library, extracting percentage match for an individual profile with the job description. Visualized using matplotlib for efficient hiring.</li>
              </ul>
            </motion.div>
          </motion.li>

          {/* Sports For All */}
          <motion.li 
            className="mb-16 pl-0 sm:pl-16 relative"
            ref={el => itemRefs.current[5] = el}
            data-id="sfa-item"
            initial="hidden"
            animate={visible['sfa-item'] ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {}
            }}
          >
            <motion.span 
              className="absolute flex items-center justify-center w-12 h-12 bg-indigo-900 rounded-full ring-4 ring-indigo-100/10 shadow-lg shadow-indigo-500/20 z-10 hidden sm:flex"
              style={{ left: "-23px", top: "0", transform: "translateX(-50%)" }}
              variants={logoVariants}
            >
              <Image src={sfa} alt="Sports For All" className="w-12 h-12 rounded-full" />
            </motion.span>
            <motion.div
              variants={contentVariants}
              className="bg-slate-800/50 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl text-white font-bold">Data Intern</h3>
              <time className="block mb-3 text-lg font-medium text-indigo-300">Sports For All, India ~ India&apos;s largest tech-enabled sports competition platform</time>
              <ul className="list-disc pl-5 text-lg text-slate-200 space-y-2">
                <li className="timeline-list-item">Implemented MySQL DBMS for efficient data storage and retrieval.</li>
                <li className={`timeline-list-item expandable ${showMore['sfa'] ? 'expanded' : ''}`}>
                  Developed data visualization dashboards using Tableau to provide insights into sports performance metrics.
                </li>
              </ul>
              <button 
                onClick={() => handleShowMore('sfa')} 
                className="mt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                {showMore['sfa'] ? 'See less' : 'See more'}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${showMore['sfa'] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </motion.li>

          {/* Marico Limited */}
          <motion.li 
            className="pl-0 sm:pl-16 relative"
            ref={el => itemRefs.current[6] = el}
            data-id="marico-item"
            initial="hidden"
            animate={visible['marico-item'] ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {}
            }}
          >
            <motion.span 
              className="absolute flex items-center justify-center w-12 h-12 bg-indigo-900 rounded-full ring-4 ring-indigo-100/10 shadow-lg shadow-indigo-500/20 z-10 hidden sm:flex"
              style={{ left: "-23px", top: "0", transform: "translateX(-50%)" }}
              variants={logoVariants}
            >
              <Image src={marico} alt="Marico Limited" className="w-12 h-12 rounded-full object-scale-down" />
            </motion.span>
            <motion.div
              variants={contentVariants}
              className="bg-slate-800/50 p-6 rounded-lg shadow-xl backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl text-white font-bold">Data Intern</h3>
              <time className="block mb-3 text-lg font-medium text-indigo-300">Marico Limited</time>
              <ul className="list-disc pl-5 text-lg text-slate-200 space-y-2">
                <li className="timeline-list-item">Conducted market research and analysis to support product development strategies.</li>
                <li className={`timeline-list-item expandable ${showMore['marico'] ? 'expanded' : ''}`}>
                  Assisted in the creation of marketing materials and campaigns to enhance brand visibility.
                </li>
              </ul>
              <button 
                onClick={() => handleShowMore('marico')} 
                className="mt-3 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 flex items-center"
              >
                {showMore['marico'] ? 'See less' : 'See more'}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${showMore['marico'] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </motion.li>
        </ol>
      </div>
    </section>
  );
}
