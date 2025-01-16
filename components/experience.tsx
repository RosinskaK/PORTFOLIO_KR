"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./sectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="mb-28 max-w-[40rem] scroll-mt-28 text-center sm:mb-32 relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionHeading>My Experience</SectionHeading>
      <article className="gap-4 flex flex-col text-left">
        {experiencesData.map((exper, i) => (
          <motion.div
            key={i}
            className="bg-zinc-200 p-4 rounded-xl dark:bg-white/10 shadow-md"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="font-bold text-lg pl-1">{exper.title}</h3>
            <p className=" text-violet-400 italic text-sm pt-1 pb-2 font-semibold pl-1">
              {exper.date}
            </p>
            <p className="font-light sm:font-normal bg-white py-2 px-2 rounded-lg dark:bg-white/15 text-base">
              {exper.description}
            </p>
          </motion.div>
        ))}
      </article>
    </motion.section>
  );
}

export default Experience;
