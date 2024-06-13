"use client";

import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface EmailData {
  email: string;
  subject: string;
  message: string;
}

const EmailSection = () => {
  // hooks -----------------------------------------------------------
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // handler -----------------------------------------------------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page refresh
    const data: EmailData = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options); // this request is handled by Next.js API route
      const resData = await response.json();
      console.log(resData);

      console.log("Email sent successfully!");
      setEmailSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        console.error(`Email sending failed! ${err.message}`);
      }
    } finally {
      setTimeout(() => {
        setEmailSubmitted(false);
      }, 5000);
    }

    // if (resData.status === 200) {
    //   console.log("Email sent successfully!");
    //   setEmailSubmitted(true);
    // } else {
    //   console.log("Email sending failed!");
    // }
  };

  // jsx ----------------------------------------------------------------

  const letsConnect = (
    <div className="z-10">
      <h5 className="text-xl font-bold text-white my-2">Let&lsquo;s Connect</h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">
        Interested in collaborating or have questions? Let&apos;s connect to
        discuss ideas, projects, and opportunities. I look forward to hearing
        from you!
      </p>
      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/Additivemenu">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <GitHubIcon />
          </motion.div>
        </Link>
        <Link href="https://www.linkedin.com/in/xueshuo-li/">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <LinkedInIcon />
          </motion.div>
        </Link>
      </div>
    </div>
  );

  const contactForm = (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-white block mb-2 text-sm font-medium"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="shawn@gmail.com"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="subject"
          className="text-white block mb-2 text-sm font-medium"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Just saying hi"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-white block mb-2 text-sm font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Hey Shawn!"
        />
      </div>

      <button
        type="submit"
        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Send Message
      </button>
      {/* visual feedback */}
      {emailSubmitted && (
        <p className="text-green-500 text-sm mt-2">Submit Successfully</p>
      )}
    </form>
  );

  return (
    <section
      id="contact"
      className="grid md: grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute  top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      {letsConnect}
      <div>{contactForm}</div>
    </section>
  );
};

export default EmailSection;
