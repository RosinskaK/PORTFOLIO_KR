"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "motion/react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 relative"
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-base sm:text-lg text-zinc-800 items-center">
        {skillsData.map((skils, index) => (
          <motion.li
            className={`sm:mb-4 mb-2 rounded-full px-3 sm:px-5 py-2 sm:py-3 bg-violet-500 dark:bg-white/10 dark:text-white/80 flex gap-2 items-center text-white shadow-lg shadow-violet-600/50`}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <skils.icon className="sm:text-2xl text-xl" />
            <span className="font-medium">{skils.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
