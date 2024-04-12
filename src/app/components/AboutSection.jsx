"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
        <li>Northwestern Univesity</li>
        <li>Manipal Institute of Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 mb-10">
        <li>Microsoft Student Hackathon 2021</li>
        <li>Meta React Native Specialization</li>
        <li>The Web Developer Bootcamp</li>
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
      <div className="container md:grid md:grid-cols-2 gap-8 items-center px-6 py-8 xl:gap-10 sm:py-16" style={{paddingLeft: 115+"px"}}>
        <Image src="/images/about.jpg" alt="about-img" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello! I&apos;m Divyam Bansal, a software developer and data scientist driven by my passion for unraveling the complexities of real-world challenges. My journey in tech has been fueled by curiosity and the desire to make impactful contributions. Working within dynamic teams, I&apos;ve found my true calling—leveraging collaborative strengths to innovate and solve problems at scale. My toolkit is a blend of coding prowess and analytical insight, enabling me to turn data into decisions and ideas into reality. Welcome to my portfolio, where each project is a testament to my dedication to excellence and my journey in making a difference.
          </p>
          <div className="flex flex-row justify-start mt-8">
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