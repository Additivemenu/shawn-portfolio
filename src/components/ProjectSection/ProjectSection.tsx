"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Transcription Test Platform",
    description: "Streamline test creation and evaluation processes",
    imgUrl: "/img/TT-1.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.youtube.com/watch?v=Fm2SH1FEX0A",
  },
  {
    id: 2,
    title: "Talkative Chat App",
    description:
      "Online chat application with real-time messaging and user authentication.",
    imgUrl: "/img/talkative-cover-1.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.shawncodeproject.link/",
  },
  {
    id: 3,
    title: "Melbourne CBD Tourist Guide App",
    description:
      "Discover Melbourne CBD: Your guide to the city's heart.",
    imgUrl: "/img/IV-A3.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.youtube.com/watch?v=W3o6NCU0yjg",
  },
  {
    id: 4,
    title: "Orienteer Rally",
    description: "A mobile social gaming app for orienteering events.",
    imgUrl: "/img/orienteer-rally-cover.png",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "https://www.youtube.com/watch?v=4TQ7jolPaRg",
  },
];

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagClick = (newTag: string) => {
    setSelectedTag(newTag);
  };

  // derived state
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(selectedTag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // jsx ----------------------------------------------------------------
  const projectTagSelect = (
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
        name="All"
        onClick={() => handleTagClick("All")}
        isSelected={selectedTag === "All"}
      />
      <ProjectTag
        name="Web"
        onClick={() => handleTagClick("Web")}
        isSelected={selectedTag === "Web"}
      />
      <ProjectTag
        name="Mobile"
        onClick={() => handleTagClick("Mobile")}
        isSelected={selectedTag === "Mobile"}
      />
    </div>
  );

  const filteredProjectCards = (
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
        // card show up one by one
        <motion.li
          key={project.id}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.5 }}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>
      ))}
    </ul>
  );

  return (
    <section id="projects">
      <h2>My Projects</h2>
      {projectTagSelect}
      {filteredProjectCards}
    </section>
  );
};

export default ProjectSection;
