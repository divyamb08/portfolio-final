# .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# jsconfig.json

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

# next-sitemap.config.js

```js
module.exports = {
  siteUrl: 'https://divyambansal.com', // Replace with your actual URL
  generateRobotsTxt: true,
};

```

# next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

```

# package.json

```json
{
    "name": "portfolio-website",
    "version": "0.1.0",
    "private": true,
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "postbuild": "next-sitemap"
    },
    "dependencies": {
        "@emotion/react": "^11.11.4",
        "@emotion/styled": "^11.11.5",
        "@heroicons/react": "^2.0.18",
        "@mui/icons-material": "^5.15.20",
        "@mui/lab": "^5.0.0-alpha.170",
        "@mui/material": "^5.15.20",
        "@vercel/analytics": "^1.2.2",
        "@vercel/speed-insights": "^1.0.10",
        "autoprefixer": "10.4.15",
        "encoding": "^0.1.13",
        "eslint": "8.47.0",
        "eslint-config-next": "13.4.15",
        "framer-motion": "^10.16.1",
        "next": "^13.5.6",
        "next-sitemap": "^4.2.3",
        "nodemailer": "^6.9.13",
        "postcss": "8.4.27",
        "react": "18.2.0",
        "react-animated-numbers": "^0.16.0",
        "react-dom": "18.2.0",
        "react-icons": "^5.0.1",
        "react-responsive": "^10.0.0",
        "react-type-animation": "^3.1.0",
        "resend": "^1.0.0",
        "tailwindcss": "3.3.3"
    }
}

```

# pages/_document.js

```js
// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

```

# pages/api/send/route.js

```js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;
    if (!email || !subject || !message) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.YOUR_EMAIL_ADDRESS,
      subject: subject,
      text: message,
    };

    try {
      const result = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully', result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
```

# postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# public/github-icon.svg

This is a file of the type: SVG Image

# public/images/about.png

This is a binary file of the type: Image

# public/images/bg.png

This is a binary file of the type: Image

# public/images/Experience/avalor.png

This is a binary file of the type: Image

# public/images/Experience/bajaj_finserv.png

This is a binary file of the type: Image

# public/images/Experience/isb.png

This is a binary file of the type: Image

# public/images/Experience/marico.png

This is a binary file of the type: Image

# public/images/Experience/segal.png

This is a binary file of the type: Image

# public/images/Experience/SFA.png

This is a binary file of the type: Image

# public/images/Experience/winwire.png

This is a binary file of the type: Image

# public/images/Profile-pic.png

This is a binary file of the type: Image

# public/images/Projects/color-game.png

This is a binary file of the type: Image

# public/images/Projects/DocMgr.png

This is a binary file of the type: Image

# public/images/Projects/doughy.png

This is a binary file of the type: Image

# public/images/Projects/graphql.png

This is a binary file of the type: Image

# public/images/Projects/Houseparty_landing.png

This is a binary file of the type: Image

# public/images/Projects/InteractiveViz.png

This is a binary file of the type: Image

# public/images/Projects/MRS.png

This is a binary file of the type: Image

# public/images/Projects/music-player.png

This is a binary file of the type: Image

# public/images/Projects/Pokemon.png

This is a binary file of the type: Image

# public/images/Projects/Portfolio.png

This is a binary file of the type: Image

# public/images/Projects/smsCls.png

This is a binary file of the type: Image

# public/linkedin-icon.svg

This is a file of the type: SVG Image

# public/next.svg

This is a file of the type: SVG Image

# public/robots.txt

```txt
# *
User-agent: *
Allow: /

# Host
Host: https://divyambansal.com

# Sitemaps
Sitemap: https://divyambansal.com/sitemap.xml

```

# public/sitemap-0.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url><loc>https://divyambansal.com</loc><lastmod>2025-02-26T05:31:26.620Z</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>
</urlset>
```

# public/sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<sitemap><loc>https://divyambansal.com/sitemap-0.xml</loc></sitemap>
</sitemapindex>
```

# public/vercel.svg

This is a file of the type: SVG Image

# README.md

```md
# Portfolio Website

This is a portfolio website built with Next.js and Tailwind CSS.

## Usage

1. Start the development server: `npm run dev`
2. Open your browser and visit `http://localhost:3000` to view the website.

## Dependencies

The following dependencies are required for this project:

- Next.js: A React framework for server-side rendering and static site generation.
- Tailwind CSS: A highly customizable CSS framework.
- React: A JavaScript library for building user interfaces.
- React Icons: A collection of popular icons for React projects.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.



```

# src/app/components/AboutSection.css

```css
.sub-bullet {
    list-style-type: circle;
    margin-left: 20px; /* Adjust as needed for indentation */
}

.container {
  position: relative; /* Add this to the container */
}

.image-container {
  position: absolute; /* Add this to the image container */
  top: 0;
  left: 0;
  width: 50%; /* Adjust the width as needed */
}

.text-container {
  margin-left: 50%; /* Adjust the margin as needed */
}

.expandable {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 0;
}

.expandable.expanded {
  max-height: 1000px; /* Adjust as needed */
  opacity: 1;
}

/* Timeline styling */
.timeline-connector {
  position: absolute;
  left: -5px;
  top: 0;
  height: 100%;
  width: 2px;
  background: linear-gradient(to bottom, rgba(99, 102, 241, 0.5), rgba(79, 70, 229, 0.2));
  transform: translateX(-50%);
}

.timeline-list-item {
  position: relative;
  transition: transform 0.3s ease;
}

.timeline-list-item:hover {
  transform: translateX(5px);
}

/* Glowing dot effect */
.timeline-list-item::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(99, 102, 241, 0.7);
  border-radius: 50%;
  left: -20px;
  top: 8px;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.7);
}

```

# src/app/components/AboutSection.jsx

```jsx
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import './AboutSection.css';

const TAB_DATA = [
  {
    title: "Development Skills",
    id: "sdeskills",
    content: (
      <ul className="list-disc pl-2 mb-10">
        <li>Development Languages
          <ul className="sub-bullet">
            <li>Python</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </li>
        <li>Development Frameworks
          <ul className="sub-bullet">
            <li>Django</li>
            <li>NodeJS</li>
            <li>NextJS</li>
          </ul>
        </li>
        <li>Development Libraries
          <ul className="sub-bullet">
            <li>React</li>
            <li>React Native</li>
            <li>Tailwind CSS</li>
          </ul>
        </li>
        <li>Docker Containerization</li>
        <li>AWS cloud infrastructure</li>
      </ul>
    ),
  },
  {
    title: "Data Science Skills",
    id: "dsskills",
    content: (
      <ul className="list-disc pl-2 mb-10">
        <li>Languages
          <ul className="sub-bullet">
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </li>
        <li>Web Scraping
          <ul className="sub-bullet">
            <li>Selenium</li>
            <li>Scrapy</li>
            <li>Beautiful Soup</li>
          </ul>
        </li>
        <li>Preprocessing
          <ul className="sub-bullet">
            <li>Standardization/Normalization</li>
            <li>KNN Imputer/ Simple Imputer</li>
          </ul>
        </li>
        <li>Exploratory Data Analysis
          <ul className="sub-bullet">
            <li>Seaborn & Matplotlib</li>
            <li>Pandas Profiling</li>
            <li>Statsmodels</li>
          </ul>
        </li>
        <li>Feature Engineering
          <ul className="sub-bullet">
            <li>One hot encoding/ Ordinal Encoding</li>
          </ul>
        </li>
        <li>Algorithms
          <ul className="sub-bullet">
            <li>Linear Regression</li>
            <li>Logistic Regression</li>
            <li>Clustering</li>
            <li>Random Forest</li>
            <li>XGBoost</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 mb-10">
        <li><strong>Northwestern Univesity</strong>
          <p>Master of Science in Information Technology</p>
        </li>
        <li><strong>Manipal Institute of Technology</strong>
          <p>Bachelor of Technology in Information Technology</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 mb-10">
        <li>
          <Link href="https://www.credly.com/badges/48b64617-b6e1-4d43-9575-915e33585bb7?source=linked_in_profile" target="_blank">Microsoft Student Hackathon 2021
          </Link>
          </li>
        <li>
          <Link href="https://coursera.org/share/6601023d7d7731699bd10039a542f2ca" target="_blank">Meta React Native Specialization
        </Link>
        </li>
        <li><Link href="https://www.udemy.com/certificate/UC-cbb527d1-03f3-43de-87bc-4c714020207f/" target="_blank">The Web Developer Bootcamp</Link></li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("sdeskills");
  const [isPending, startTransition] = useTransition();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="text-white" id="about">
      <div className="container md:grid md:grid-cols-2 gap-8 items-center px-6 py-8 xl:gap-10 sm:py-16">
        <Image src="/images/about.png" alt="about-img" width={500} height={500} className="hidden md:block place-self-start"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
              About Me
            </span>
          </h1>
          <div className="w-20 h-1 bg-indigo-500 mb-4 rounded-full"></div>
          <p className="text-base lg:text-lg">
            {isExpanded ? (
              <>
                Hello! I&apos;m Divyam Bansal, a software developer and data scientist driven by my passion for unraveling the complexities of real-world challenges. My journey in tech has been fueled by curiosity and the desire to make impactful contributions. Working within dynamic teams, I&apos;ve found my true calling—leveraging collaborative strengths to innovate and solve problems at scale. My toolkit is a blend of coding prowess and analytical insight, enabling me to turn data into decisions and ideas into reality. Welcome to my portfolio, where each project is a testament to my dedication to excellence and my journey in making a difference.
                <button onClick={toggleExpand} className="text-blue-500 ml-2 text-sm underline">See Less</button>
              </>
            ) : (
              <>
                Hello! I&apos;m Divyam Bansal, a software developer and data scientist driven by my passion for unraveling the complexities of real-world challenges. My journey in tech has been fueled by curiosity and the desire to make impactful contributions...
                <button onClick={toggleExpand} className="text-blue-500 ml-2 text-sm underline">See More</button>
              </>
            )}
          </p>
          <div className="flex flex-col sm:flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("sdeskills")}
              active={tab === "sdeskills"}
            >
              Software Development Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("dsskills")}
              active={tab === "dsskills"}
            >
              Data Science Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
```

# src/app/components/BackgroundAnimation.jsx

```jsx
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
```

# src/app/components/EmailSection.jsx

```jsx
"use client"
import React,  { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Resend } from 'resend';

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      subject,
      message,
    };

    try {
      const response = await fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful email submission
        setEmailSubmitted(true);
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        // Handle errors
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
    }
  };
    
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id="contact">
        <div className=''>
            <h1 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
                Let&apos;s Connect
              </span>
            </h1>
            <div className="w-20 h-1 bg-indigo-500 mb-4 rounded-full"></div>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>I am currently looking for new opportunities. Whether you have a question or just want to have a coffee chat, my inbox is always open. </p>
            <p className='pb-5 text-white'>P.S. I love telling and listening to stories <span role="img" aria-label="smiley">😊</span></p>
        <div className='socials flex flex-row gap-2'>
        <a href="https://linkedin.com/in/divyam-bansal" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaLinkedin alt="LinkedIn" className="h-10 w-10 invert-0"/>
                </a>
                <a href="https://github.com/divyamb08" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaGithub alt="GitHub" className="h-10 w-10"/>
                </a>
        </div>
        
        </div>
        <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="tony.stark@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="We have a mission"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's save the planet using code."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-slate-400 text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default EmailSection

```

# src/app/components/ExperienceTimeline.jsx

```jsx
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

```

# src/app/components/Footer.jsx

```jsx
// In Footer.jsx
import React from 'react';
// Example icons from a public CDN or your assets directory
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer z-10 text-white p-4 text-center">
            <div className="vertical-icons">
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=divyam.bansal2000@gmail.com" target="_blank" className="hover:opacity-75">
                    <FaEnvelope alt="Email" className="h-6 w-6"/>
                </a>
                <a href="https://linkedin.com/in/divyam-bansal" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaLinkedin alt="LinkedIn" className="h-6 w-6"/>
                </a>
                <a href="https://github.com/divyamb08" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaGithub alt="GitHub" className="h-6 w-6"/>
                </a>
                {/* Add more icons/links as needed */}
            </div>
        </footer>
    );
};

export default Footer;

```

# src/app/components/HeroSection.jsx

```jsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  // Initialize state for large and small screens
  const [screenSize, setScreenSize] = useState({
    isLargeScreen: false,
    isSmallScreen: false
  });

  useEffect(() => {
    // Function to update the state based on the window's width
    const handleResize = () => {
      setScreenSize({
        isLargeScreen: window.innerWidth > 1024,
        isSmallScreen: window.innerWidth <= 768
      });
    };

    // Call handleResize to set the initial state based on current window size
    handleResize();

    // Set up the event listener for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine the appropriate style based on screen size
  let style = {};
  let buttonStyle={};
  if (screenSize.isLargeScreen) {
    style.marginTop = '-250px';
  } else if (screenSize.isSmallScreen) {
    style.marginTop = '-300px'; // Adjusted from '-100px'
    buttonStyle.marginTop = '10px';
  }
  return (
    <header className="flex h-screen align-middle justify-center items-center lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 h-full items-center" style={style}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="">
          <h1 className="text-white mb-4 text-4xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold" style={{ minHeight: '8rem' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              className="lg:text-7xl sm:text-3xl font-sedan"
              sequence={[
                "Divyam Bansal",
                1000,
                "a Software Engineer",
                1000,
                "a Data Scientist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          </div>
          
          <br></br>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Student by Day, Hacker by Night.
          </p>
          <div className="-mb-36" style={buttonStyle}>
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br rounded-full mr-4 bg-white hover:bg-slate-200 text-black"
            >
              Contact
            </Link>
            <Link
              href="https://drive.google.com/file/d/17W-yQp3ZgYTwSCNVqANm4zGD1sfYyEfA/view?usp=sharing"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-indigo-300 to-purple-400 text-white hover:from-white hover:to-slate-200 hover:text-[#130f3c]"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative sm:-mt-50">
            <Image
              src="/images/Profile-pic.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
```

# src/app/components/MenuOverlay.jsx

```jsx
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
```

# src/app/components/Navbar.jsx

```jsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

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

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-2xl text-black font-semibold hover:text-[#004c4c]"
        >
          Home
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-black hover:border-black"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-black hover:border-black"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
```

# src/app/components/NavLink.jsx

```jsx
import Link from "next/link"

const NavLink = ({ href, title}) => {
    return(
        <Link href={href} className='block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-[#004c4c] '>{title}</Link>
    )
};

export default NavLink;
```

# src/app/components/ProjectCard.jsx

```jsx
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group">
        <Image
          src={imgUrl}
          alt={`Screenshot of ${title}`}
          layout="fill"
          loading="lazy"
          className="rounded-t-xl"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-500 object-cover">
          <Link
            href={gitUrl} target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl && (
            <Link
              href={previewUrl} target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-5 mb-5 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
```

# src/app/components/ProjectSection.jsx

```jsx
"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";
const projectsData = [
    // {
    //   id: 1,
    //   title: "React Portfolio Website",
    //   description: "Portfolio Website",
    //   image: "/images/Projects/Portfolio.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "https://github.com/divyamb08/portfolio",
    //   previewUrl: "/",
    // },
    {
      id: 2,
      title: "HouseParty Application",
      description: "An application to control music for a house party",
      image: "/images/Projects/Houseparty_landing.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/divyamb08/housepartyapp",
      previewUrl: "http://heavy-music-controller-b0b21d3e8dec.herokuapp.com/",
    },
    {
      id: 3,
      title: "Interactive Information Visualization",
      description: "An interactive visualization of Nobel Laureates of the World using D3.js",
      image: "/images/Projects/InteractiveViz.png",
      tag: ["All", "Web","Data Science & ML"],
      gitUrl: "https://github.com/divyamb08/Interactive-Information-Visualization",
      previewUrl: "https://divyamb08.github.io/Interactive-Information-Visualization/",
    },
    // {
    //   id: 4,
    //   title: "Movie Recommendation System",
    //   description: "Content based end to end recommendation system using TMDB APIs",
    //   image: "/images/Projects/MRS.png",
    //   tag: ["All", "Data Science & ML"],
    //   gitUrl: "https://github.com/divyamb08/Movie-Recommender",
    //   previewUrl: "https://recommendatio-196e861d9ef7.herokuapp.com/",
    // },
    // {
    //   id: 5,
    //   title: "Color Game",
    //   description: "A simple RGB color game made with JS",
    //   image: "/images/Projects/color-game.png",
    //   tag: ["All", "Web"],
    //   gitUrl: "https://github.com/divyamb08/color-game",
    //   previewUrl: "https://divyamb08.github.io/color-game/",
    // },
    {
      id: 4,
      title: "Transformative Document Manager LLM",
      description: "An LLM model to query in-house documents at scale for organizations",
      image: "/images/Projects/DocMgr.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/divyamb08/DS-finals",
      previewUrl: "https://docmgr-3016d9372af7.herokuapp.com/",
    },
    {
      id: 5,
      title: "SMS Spam Classifier",
      description: "SMS Spam Classifier using Bernoulli Naive Bayes model.",
      image: "/images/Projects/smsCls.png",
      tag: ["All", "Data Science & ML"],
      gitUrl: "https://github.com/divyamb08/SMS-spam-classifier",
      previewUrl: "https://stapspamminh-95d451a03c8e.herokuapp.com/",
    },
    {
      id: 6,
      title: "GraphQL Recipe App",
      description: "A recipe application built using Django and GraphQL for the backend and React for the frontend.",
      image: "/images/Projects/graphql.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/divyamb08/graphql-recipeapp",
      previewUrl: "",
    },
    {
      id: 7,
      title: "Dough Divider",
      description: "Dough Divider is a full-stack application for managing and tracking group transactions, built with React, Apollo Client, and Django.",
      image: "/images/Projects/doughy.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/divyamb08/doughy",
      previewUrl: "",
    },
    {
      id: 8,
      title: "The Pokemon Repo",
      description: "A pokemon repository showcasing all the pokemons and their strength, skill, and power moves",
      image: "/images/Projects/Pokemon.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/divyamb08/poke-api",
      previewUrl: "https://poke-api-phi-five.vercel.app/",
    },
    

  ];

  const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTabChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

    return (
        <section id="projects">
      <div className='mb-8'>
        <h1 className='text-center text-4xl sm:text-5xl font-bold text-white'>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
            My Projects
          </span>
        </h1>
        <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className='text-white flex flex-col sm:flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag onClick={handleTabChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTabChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTabChange} name="Data Science & ML" isSelected={tag === "Data Science & ML"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 sm:grid-cols-2 sm:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      </section>
    );
  };
  
  export default ProjectsSection;

```

# src/app/components/ProjectTag.jsx

```jsx
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#004c4c] bg-white border-black"
    : "text-white bg-[#171E27] border-slate-600 hover:border-black hover:bg-white hover:text-[#171E27]";
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>{name}</button>
  );
};

export default ProjectTag;
```

# src/app/components/ScrollToTopButton.jsx

```jsx
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

```

# src/app/components/TabButton.jsx

```jsx
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-[0.1rem] bg-purple-400 -mt-1 mr-1 mb-1"
      ></motion.div>
    </button>
  );
};

export default TabButton;
```

# src/app/favicon.ico

This is a binary file of the type: Binary

# src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 255, 255, 255;
}

.sedan-regular {
  font-family: "Sedan", serif;
  font-weight: 400;
  font-style: normal;
}

.sedan-regular-italic {
  font-family: "Sedan", serif;
  font-weight: 400;
  font-style: italic;
}

body {
  font-family: var(--font-raleway), 'Raleway', sans-serif;
  color: rgb(var(--foreground-rgb));
  /* Background is now handled by the BackgroundAnimation component */
}

.vertical-icons {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20px;
  right: 20px;
  gap: 15px;
}

```

# src/app/layout.js

```js
import './globals.css'
import { Raleway } from 'next/font/google'
import BackgroundAnimation from './components/BackgroundAnimation.jsx'

const raleway = Raleway({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: "Divyam Bansal - Software Engineer and Data Scientist",
  description: "Portfolio of Divyam Bansal, showcasing projects in software engineering and data science.",
  keywords: ["Divyam Bansal", "Software Engineer", "Data Scientist", "Portfolio", "Web Development", "Data Analysis"],
  openGraph: {
    title: "Divyam Bansal - Software Engineer and Data Scientist",
    description: "Explore the portfolio of Divyam Bansal, showcasing projects in software engineering and data science.",
    url: "https://divyambansal.com",
    images: [
      {
        url: "/images/Profile-pic.png",
        width: 800,
        height: 600,
        alt: "Profile picture of Divyam Bansal",
      },
    ],
    siteName: "Divyam Bansal Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle', // Replace with your Twitter handle if available
    creator: '@yourtwitterhandle',
    title: "Divyam Bansal - Software Engineer and Data Scientist",
    description: "Explore the portfolio of Divyam Bansal.",
    images: ['/images/Profile-pic.png'],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Divyam Bansal",
    "url": "https://divyambansal.com",
    "sameAs": [
      "https://linkedin.com/in/divyam-bansal",
      "https://github.com/divyamb08"
    ],
    "jobTitle": "Software Engineer and Data Scientist",
  };

  return (
    <html lang="en">
      <head>
        {/* Existing metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${raleway.className} ${raleway.variable}`}>
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  )
}
```

# src/app/page.js

```js
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ExperienceTimeline from "./components/ExperienceTimeline";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import ScrollToTopButton from "./components/ScrollToTopButton";
import Head from 'next/head';

// import AchievementsSection from "./components/AchievementsSection";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Divyam Bansal Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Divyam Bansal, a Software Engineer and Data Scientist specializing in web development and data analysis."
        />
      </Head>
      <main className="flex min-h-screen flex-col">
        {/* <Navbar /> */}
        <div className="container min-h-screen mt-24 mx-auto px-12 py-4">
          <SpeedInsights />
          <Analytics />
          <HeroSection />
          <ProjectSection />
          {/* <AchievementsSection /> */}
          <AboutSection />
          <ExperienceTimeline/>
          <EmailSection />
        </div>
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
}
```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'sans': ['var(--font-raleway)', 'Raleway', 'sans-serif'],
        'raleway': ['var(--font-raleway)', 'Raleway', 'sans-serif'],
      }
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      sky: colors.sky, // Updated from lightBlue
      stone: colors.stone, // Updated from warmGray
      neutral: colors.neutral, // Updated from trueGray
      gray: colors.gray, // Updated from coolGray
      slate: colors.slate, // Updated from blueGray
    },
  },
  plugins: [],
};

```

