"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
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
        <li>JavaScript/TypeScript</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>React.js, Next.js, React Native</li>
        <li>RESTful API</li>
        <li>Express.js, Nest.js</li>
        <li>PostgreSQL, MongoDB</li>
        <li>Git</li>
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
      <ul className="list-disc ml-6">
        <li>Full-Stack Developer Intern, Stay or go</li>
        <li className="list-disc ml-6">2023 - 2024</li>
      </ul>
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
            Self-motivated master of IT graduate at University of Melbourne
            specialising in both Front-End and Back-End web application
            development, proficient in JavaScript/TypeScript (React & Nest) and
            RESTful API
          </p>
          {/* tab select bar */}
          <div className="flex flex-row mt-8">
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
            <TabButton
              active={tab === TabOptions.Experience}
              selectTab={() => handleTabChange(TabOptions.Experience)}
            >
              {" "}
              Experience{" "}
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
