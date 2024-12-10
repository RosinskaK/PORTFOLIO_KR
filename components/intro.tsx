"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="flex mb-28 max-w-[50rem] sm:mb-0 justify-center flex-col scroll-mt-36"
    >
      <div className="flex sm:flex-row flex-col">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="w-40 h-52 bg-indigo-500 text-amber-500 border-[0.2rem] border-white object-cover rounded-xl shadow-xl">
              My photo
            </div>
          </motion.div>
        </div>
        <motion.h1
          className="mb-10 mt-4 sm:mt-0 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl sm:pl-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Kasia Rosińska 👋🏻</span>
          <br />
          I'm a <span className="font-bold">front-end developer</span> with{" "}
          <span className="font-bold">one and a&nbsp;half years</span>{" "}
          of&nbsp;experience. I&nbsp;enjoy building{" "}
          <span className="italic">sites &&nbsp;apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
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
          className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.03] 
          hover:scale-105 hover:bg-slate-950 active:scale-105 transition whitespace-nowrap"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 
        active:scale-[1.03] transition cursor-pointer border border-black/10 dark:bg-white/10 whitespace-nowrap"
          href="/CV.pdf"
          download
        >
          Download CV now{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex flex-row justify-center items-center gap-2 text-lg">
          <a
            className="bg-white p-4 text-slate-700 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] 
              hover:scale-[1.15] active:scale-105 transition cursor-pointer  dark:bg-white/10 dark:text-white/60 border border-black/10"
            href="https://www.linkedin.com/in/katarzyna-rosinska/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-[15px] text-slate-700 hover:text-slate-950 flex items-center gap-2 rounded-full focus:scale-[1.15] 
              hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60 text-[1.35rem]
              border border-black/10"
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
