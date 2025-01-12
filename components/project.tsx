"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { BsGlobe2 } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl_DT,
  imageUrl_M,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=""
    >
      <article
        className="bg-zinc-200 max-w-[42rem] px-4 py-5 relative rounded-xl hover:bg-zinc-300 transition group dark:bg-white/10
      dark:hover:bg-white/20 dark:transition"
      >
        <div className="sm:flex sm:flex-row sm:pb-4 pb-2 sm:justify-between flex-col justify-items-center sm:items-center items-center">
          <h3 className="text-2xl font-bold sm:pl-1">{title}</h3>
          <div className="flex pt-6 sm:pt-0 pb-3 sm:pb-0">
            <a
              href=""
              target="_blank"
              className="flex px-3 text-violet-900 text-base underline italic dark:text-violet-400 justify-center items-center"
            >
              <BsGlobe2 className="h-[20px] w-[20px] mr-2 text-zinc-950 dark:text-white/80" />
              View live: Here
            </a>
            <a
              href=""
              target="_blank"
              className="flex px-3 text-violet-900 text-base underline italic dark:text-violet-400"
            >
              <FaGithub className="h-[23px] w-[23px] mr-2 text-zinc-950 dark:text-white/80" />
              code on Github
            </a>
          </div>
        </div>
        <Image
          src={imageUrl_DT}
          alt="Project I worked on"
          quality={95}
          className="rounded-md top-4 md:w-[640px] overflow-hidden md:h-[315px] w-fit h-fit"
        />
        <div className="hidden md:block">
          <Image
            src={imageUrl_M}
            alt="Project I worked on"
            quality={95}
            className="w-auto aspect-auto absolute right-6 rounded-xl top-[6rem] shadow-2xl shadow-black group-hover:scale-110 transition border border-black/10 group-hover:-translate-x-3 h-[260px]"
          />
        </div>
        <p className="leading-relaxed text-base font-light sm:font-normal bg-white py-1 px-2 rounded-lg dark:bg-white/15 mt-3 mb-2">
          {description}
        </p>
        <ul className="flex flex-wrap pt-2 gap-2 justify-center">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="px-2 py-[4px] text-[0.7rem] uppercase tracking-wider text-violet-800 font-semibold rounded-md border-violet-800 
              border-[1px] bg-zinc-100 group-hover:border-violet-600 group-hover:text-violet-600 transition
              dark:bg-white/10 dark:group-hover:bg-black/20 dark:border-violet-400 dark:text-violet-400
              dark:group-hover:border-violet-500 dark:group-hover:text-violet-500"
            >
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </motion.div>
  );
}

export default Project;
