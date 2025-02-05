"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { IoMdMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

function ContactIcons() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center relative"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <div className="flex items-center justify-around h-full w-full flex-col">
        <p className="pb-7">Feel free to reach out—I’d love to connect!</p>
        <div className="flex h-6 items-center">
          <IoMdMail className="h-[2rem] w-[2rem] text-violet-800 hover:text-violet-900" />
          <p className="pl-2 text-lg font-semibold">rosinska.eu@gmail.com</p>
        </div>
        <div className="flex h-6 items-center mt-8">
          <BsLinkedin className="h-auto w-[1.6rem] text-violet-800 hover:text-violet-900" />
          <a
            className="pl-2 text-lg font-semibold"
            href="https://www.linkedin.com/in/katarzyna-rosinska/"
            target="_blank"
          >
            linkedin.com/katarzyna-rosinska
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactIcons;
