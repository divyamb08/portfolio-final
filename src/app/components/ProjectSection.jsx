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
      <h2 className='text-center text-4xl font-bold text-white mt-30 mb-8 md:mb-12 sm:pt-20'>
        My Projects
      </h2>
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
