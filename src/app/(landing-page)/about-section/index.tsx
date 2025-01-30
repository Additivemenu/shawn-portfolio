"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./_components/tab-button";
import { Ultra } from "next/font/google";

enum TabOptions {
  Skills = "Skills",
  Education = "Education",
  Experience = "Experience",
}

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc ml-6">
        <li>JavaScript/TypeScript, Python</li>
        <li>HTML,CSS</li>
        <li>Next.js, React, React Native</li>
        <li>Django, Nest.js, Express.js</li>
        <li>PostgreSQL, MongoDB</li>
        <li>Linux, AWS, Docker, Kubernetes</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <ul className="list-disc ml-6">
          <li>Master of Information Technology, University of Melbourne</li>
          <li className="list-none">2022 - 2024</li>
        </ul>
        <ul className="list-disc ml-6">
          <li>
            Bachelor of Mechanical Engineering (Honours 1st class), RMIT
            University
          </li>
          <li className="list-none">2018 - 2020</li>
        </ul>
        <ul className="list-disc ml-6">
          <li>Bachelor of Mechanical Engineering, Shandong University</li>
          <li className="list-none">2016 - 2018</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div>
        <ul className="list-disc ml-6">
          <li>Software Engineer, Rhombus AI</li>
          <li className="list-disc ml-6">2024.08 - present</li>
        </ul>
        <ul className="list-disc ml-6">
          <li>Software Engineer Intern, Stay or go</li>
          <li className="list-disc ml-6">2023.11 - 2024.02</li>
        </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<TabOptions>(TabOptions.Skills);

  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tabOption: TabOptions) => {
    startTransition(() => {
      setTab(tabOption);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/img/about-me.png"
          alt="about me"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Full-stack software engineer specializing in React ecosystem and
            Django/Express.js backend development. Recent experience in
            developing web applications and data pipeline interfaces with a
            focus on user experience.
          </p>
          {/* tab select bar */}
          <div className="flex flex-row mt-8">
            <TabButton
              active={tab === TabOptions.Experience}
              selectTab={() => handleTabChange(TabOptions.Experience)}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              active={tab === TabOptions.Skills}
              selectTab={() => handleTabChange(TabOptions.Skills)}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab === TabOptions.Education}
              selectTab={() => handleTabChange(TabOptions.Education)}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          {/* tabpanel content */}
          <div className="mt-8">
            <div className="mt-4">
              {TAB_DATA.find((data) => data.title === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
