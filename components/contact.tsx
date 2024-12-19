"use client";

import React from "react";
import { IoMdPaperPlane } from "react-icons/io";
import { motion } from "motion/react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
      <p className="text-slate-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:rosinska.eu@gmail.com">
          rosinska.eu@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-6 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderOfEmail"
          autoComplete="on"
          className="h-11 rounded-lg border-black/10 px-4"
          placeholder="Your email address"
          required
          maxLength={200}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg border-black/10 p-4"
          placeholder="Your message"
          required
          maxLength={200}
        />
        <button
          type="submit"
          className="group h-[2.5rem] w-[8rem] flex bg-violet-900 text-white rounded-full outline-none transition-all items-center justify-center gap-2 focus:scale-105 hover:scale-105 active:scale-[1.03] hover:bg-violet-950"
        >
          Send{" "}
          <IoMdPaperPlane className=" opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
