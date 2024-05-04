"use client";

import Image from "next/image";
import { title } from "process";
import React from "react";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const titleIntro = (
    <h1 className="text-white mb-4 text-4xl sm:text-5lg lg:text-6xl font-extrabold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hello, I'm {""}
      </span>
      <br />
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Shawn",
          1000, // wait 1s before replacing
          "Web Developer",
          1000,
          "Mobile Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h1>
  );

  const buttonGroup = (
    <div>
      <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
        Hire Me
      </button>
      <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3">
        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
          Download CV
        </span>
      </button>
    </div>
  );

  const avatar = (
    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
      <Image
        src="/img/hero-image.png"
        alt="heo-image"
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        width={350}
        height={350}
      />
    </div>
  );

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          {titleIntro}
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            porro, laborum temporibus corrupti.
          </p>
          {buttonGroup}
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          {avatar}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
