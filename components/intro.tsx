"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import imageKR from "../public/krs.jpg";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
// import { HiDownload } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex mb-28 max-w-[50rem] sm:mb-0 justify-center flex-col scroll-mt-36 relative"
    >
      <div className="flex sm:flex-row flex-col-reverse">
        <div className="flex justify-center mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="w-40 h-auto border-[0.2rem] dark:border-white object-cover rounded-xl border-purple-600 shadow-lg">
              <Image
                src={imageKR}
                alt="kr"
                quality={95}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
        <motion.h1
          className="mb-3 mt-0 sm:mt-0 sm:px-4 text-xl font-medium !leading-[1.5] sm:text-2xl sm:pl-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello! I'm
          <span className="font-extrabold dark:text-white">
            {" "}
            Kasia Rosińska
          </span>
          <br />a <span className="font-bold italic">
            front-end developer
          </span>{" "}
          with two years of&nbsp;experience. I&nbsp;enjoy building websites
          &&nbsp;apps. My focus is{" "}
          <span className=" underline">React, Next.js</span> and{" "}
          <span className=" underline">JavaScript</span>.
          <br />
          <p className="pt-[2px] font-normal sm:text-[22px] sm:leading-8 text-lg leading-7">
            <span className="italic"> Scroll down </span>
            to explore a showcase of my projects and learn more about my
            professional journey.
          </p>
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 px-4 text-lg fint-medium sm:mt-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-purple-500 shadow-sm text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.03] 
          hover:scale-105 hover:bg-purple-600 hover:font-medium active:scale-105 transition whitespace-nowrap dark:bg-white/70 
          dark:hover:bg-white/90 dark:text-zinc-900"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        {/* <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 
        active:scale-[1.03] transition cursor-pointer border border-black/10 dark:bg-white/10 whitespace-nowrap dark:hover:text-white"
          href="/CVRosinskaKatarzyna.pdf"
          download
        >
          Download CV now{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a> */}
        <div className="flex flex-row justify-center items-center gap-2 text-lg">
          <a
            className="bg-white p-4 text-zinc-700 hover:text-zinc-950 flex items-center gap-2 rounded-full focus:scale-[1.15] 
              hover:scale-[1.15] active:scale-105 transition cursor-pointer  dark:bg-white/10 dark:text-white/60 border border-black/10
              dark:hover:text-white"
            href="https://www.linkedin.com/in/katarzyna-rosinska/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-[15px] text-zinc-700 hover:text-zinc-950 flex items-center gap-2 rounded-full focus:scale-[1.15] 
              hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60 text-[1.35rem]
              border border-black/10 dark:hover:text-white"
            href="https://github.com/RosinskaK"
            target="_blank"
          >
            <SiGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
