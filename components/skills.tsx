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
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-zinc-800 items-center">
        {skillsData.map((skils, index) => (
          <motion.li
            className={`rounded-full px-5 py-3 ${skils.color} dark:bg-white/10 dark:text-white/80 flex gap-2 shadow items-center`}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <skils.icon className="text-2xl opacity-70" />
            {skils.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
