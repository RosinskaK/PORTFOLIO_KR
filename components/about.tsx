"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";

function About() {
const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify sm:mb-40 scroll-mt-28 text-lg leading-8 font-light"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className=" indent-3">
        After graduating with a Master's degree in{" "}
        <span className="font-medium">Economics</span> and working as
        an&nbsp;Accountant for a&nbsp;few years, I&nbsp;decided to follow my
        curiosity about programming. I&nbsp;enrolled in a&nbsp;coding bootcamp
        where I&nbsp;learned{" "}
        <span className="font-medium">front-end development</span> and earned
        the title of&nbsp;
        <span className="font-medium">JavaScript Developer</span> along with
        a&nbsp;certificate.
      </p>
      {/* <br></br> */}
      <p>
        Before I started learning{" "}
        <span className="italic font-medium">HTML, CSS, and JavaScript</span>{" "}
        I&nbsp;thought of programming as a&nbsp;kind of magic, but as
        I&nbsp;studied it, I realized it’s a&nbsp;fascinating, methodical and
        enjoyable thing to do. Now, I&nbsp;want programming to be
        an&nbsp;integral part of my daily life.
      </p>
      <p className=" indent-3">
        <span className="italic">My favorite aspect of programming</span> is
        planning and breaking down tasks into smaller, manageable parts. I{" "}
        <span className="underline">love</span> the satisfaction of solving
        problems and seeing everything I planned come together and work as
        intended. My core stack is <span className="font-medium">React</span>,
        and I also use <span className="font-medium">TypeScript</span>{" "}
        on&nbsp;a&nbsp;daily basis. I am continuously learning and gradually
        implementing new tools and technologies, such as{" "}
        <span className="font-medium">Next.js and Tailwind</span> into my
        projects. I am currently seeking a&nbsp;
        <span className="font-medium">full-time position</span> as
        a&nbsp;front-end developer.
      </p>

      <p className=" indent-3">
        <span className="italic">When I'm not coding</span>, I like reading
        travel books and articles about Japan, watching movies, and cooking
        Asian food. I am currently learning to meditate. I also really love
        traveling, planning new trips, and meeting new people.
      </p>
    </motion.section>
  );
}

export default About;
