"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Talkative Chat App",
    description: "P1 description",
    imgUrl: "/img/talkative-cover.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.shawncodeproject.link/",
  },
  {
    id: 2,
    title: "TripTribe",
    description: "P2 description",
    imgUrl: "/img/triptribe-cover.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Orienteer Rally",
    description: "P3 description",
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
