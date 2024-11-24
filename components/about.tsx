"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./sectionHeading";

function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>About - tu będzie dużo tekstu :)</p>
    </motion.section>
  );
}

export default About;
