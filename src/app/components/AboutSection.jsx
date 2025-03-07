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