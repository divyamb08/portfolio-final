"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Development Skills",
    id: "sdeskills",
    content: (
      <ul className="list-disc pl-2 mb-10">
        <li>Python</li>
        <li>Django</li>
        <li>JavaScript/Typescript</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>React</li>
        <li>Containerization</li>
        <li>AWS cloud infrastructure</li>
      </ul>
    ),
  },
  {
    title: "Data Science Skills",
    id: "dsskills",
    content: (
      <ul className="list-disc pl-2 mb-10">
        <li>SQL</li>
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Matplotlib</li>
        <li>Seaborn</li>
        <li>EDA</li>
        <li>Scikit-learn</li>
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

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="container md:grid md:grid-cols-2 gap-8 items-center px-6 py-8 xl:gap-10 sm:py-16">
        <Image src="/images/about.png" alt="about-img" width={500} height={500} className="place-self-center"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello! I&apos;m Divyam Bansal, a software developer and data scientist driven by my passion for unraveling the complexities of real-world challenges. My journey in tech has been fueled by curiosity and the desire to make impactful contributions. Working within dynamic teams, I&apos;ve found my true calling—leveraging collaborative strengths to innovate and solve problems at scale. My toolkit is a blend of coding prowess and analytical insight, enabling me to turn data into decisions and ideas into reality. Welcome to my portfolio, where each project is a testament to my dedication to excellence and my journey in making a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("sdeskills")}
              active={tab === "sdeskills"}
            >
              {" "}
              Software Development Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("dsskills")}
              active={tab === "dsskills"}
            >
              {" "}
              Data Science Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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