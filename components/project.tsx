"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";

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
    offset: ["0 1", "1.1 1"],
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
      <article className="bg-slate-100 max-w-[42rem]  px-4 py-6  relative rounded-md hover:bg-slate-200 transition group">
        <div className="flex pb-4 justify-between">
          <h3 className="text-2xl font-semibold ">{title}</h3>
          <div className="text-violet-800">
            <a href="" target="_blank" className="px-3">
              see page here
            </a>
            <a href="" target="_blank" className="px-3">
              code on Github
            </a>
          </div>
        </div>
        <Image
          src={imageUrl_DT}
          alt="Project I worked on"
          quality={95}
          className="rounded-sm top-4 h-fit w-fit overflow-hidden"
        />
        <div className="">
          <Image
            src={imageUrl_M}
            alt="Project I worked on"
            quality={95}
            className=" w-32 aspect-auto absolute right-6 rounded-2xl top-[7rem] shadow-2xl shadow-black group-hover:scale-110 transition border border-black/10 group-hover:-translate-x-3 h-[280px]"
          />
        </div>
        <p className="mt-4 leading-relaxed text-slate-700 py-3">
          {description}
        </p>
        <ul className="flex flex-wrap pt-4 pb-2 gap-2 justify-center">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-violet-700 px-3 py-[6px] text-[0.7rem] uppercase tracking-wider text-white rounded-full "
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