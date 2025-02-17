"use client";
import React from "react";
import { motion } from "motion/react";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/activeSectionContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[5rem] w-full rounded-none border border-white/30 border-opacity-40 bg-white bg-opacity-40 
        shadow-2xl shadow-black/[0.03] backdrop-blur-lg sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-zinc-950 
        dark:border-black/20 dark:bg-opacity-50 dark:shadow-xl"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-14 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-zinc-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "flex w-full items-center justify-center py-2 px-3 sm:py-3 hover:text-zinc-950 transition dark:text-zinc-200 dark:hover:text-zinc-200 text-zinc-700 font-semibold",
                  { "text-zinc-950": activeSection === link.name }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-zinc-100 rounded-full absolute inset-0 -z-10 dark:bg-zinc-700/60 dark:text-zinc-100 shadow-inner shadow-zinc-400 bg-opacity-50 dark:shadow-zinc-900"
                    layoutId="activSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
