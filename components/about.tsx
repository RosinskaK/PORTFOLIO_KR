"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";

function About() {
const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-left sm:text-justify sm:mb-40 scroll-mt-28 text-[17px] leading-7 sm:text-lg sm:leading-8 font-light sm:font-normal relative"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <p className=" indent-3">
          After graduating with a Master's degree in{" "}
          <span className="font-bold">Economics</span> and working as
          an&nbsp;Accountant for a&nbsp;few years, I&nbsp;decided to follow my
          curiosity about programming. I&nbsp;enrolled in a&nbsp;coding bootcamp
          where I&nbsp;learned{" "}
          <span className="font-bold">front-end development</span> and earned
          the title of&nbsp;
          <span className="font-bold">JavaScript Developer</span> along with
          a&nbsp;certificate.
        </p>
        {/* <br></br> */}
        <p>
          Before I started learning{" "}
          <span className="italic font-bold">HTML, CSS,</span> and{" "}
          <span className="italic font-bold">JavaScript</span> I&nbsp;thought of
          programming as a&nbsp;kind of magic, but as I&nbsp;studied it,
          I&nbsp;realized it’s a&nbsp;fascinating, methodical and enjoyable
          thing to do. Now, I&nbsp;can't even imagine coding not being a part of
          my daily life.
        </p>
        <p className=" indent-3">
          <span className="italic">My favorite aspect of programming</span> is
          planning and breaking down tasks into smaller, manageable parts. I{" "}
          <span className="underline">love</span> the satisfaction of solving
          problems and seeing everything I&nbsp;planned come together and work
          as intended. I primarily work with
          <span className="font-bold"> React</span>, and use{" "}
          <span className="font-bold">TypeScript</span> daily. I&nbsp;am
          continuously learning and gradually implementing new tools and
          technologies, such as <span className="font-bold">Next.js</span> and{" "}
          <span className="font-bold">Tailwind CSS, MUI</span> into my projects.
          Collaboration, clear communication, and a user-first mindset are at
          the core of my professional approach.
        </p>

        <p className=" indent-3">
          <span className="italic">When I'm not coding</span>, I&nbsp;like
          reading travel books and articles about Japan, watching movies, and
          cooking Asian food. I am currently learning to meditate. I&nbsp;also
          really love traveling, planning new trips, and meeting new people.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
