"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Talkative Chat App",
    description: "P1 description",
    imgUrl: "/img/talkative-cover.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "TripTribe",
    description: "P2 description",
    imgUrl: "/img/triptribe-cover.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Orient Rally",
    description: "P3 description",
    imgUrl: "/img/orienteer-rally-cover.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagClick = (newTag: string) => {
    setSelectedTag(newTag);
  };

  // derived state
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(selectedTag)
  );

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
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.imgUrl}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
        />
      ))}
    </div>
  );

  return (
    <>
      <h2>My Projects</h2>
      {projectTagSelect}
      {filteredProjectCards}
    </>
  );
};

export default ProjectSection;
