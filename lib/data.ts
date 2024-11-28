import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import OnlineShopDtImg from "@/public/OnlineShopDT.png";
import OnlineShopMobileImg from "@/public/OnlineShopMobile.png";
import movieOnDtImg from "@/public/movieOnDT.png";
import movieOnMobileImg from "@/public/movieOnMobile.png";
import autoSkupDtImg from "@/public/autoSkupDT.jpg";
import autoSkupMobileImg from "@/public/autoSkupMobile.jpg";
import readyToGoDtImg from "@/public/readyToGoDT.png";
import readyToGoMobileImg from "@/public/readyToGoMobile.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    description:
      "With nearly two years of experience as a front-end developer, I have worked on diverse projects, prioritizing seamless user experiences and responsive design. By utilizing modern tools like React, TypeScript, Tailwind CSS and Material UI, I create intuitive, visually appealing interfaces and deliver high-quality software solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2023 - present",
  },
  {
    title: "React Developer",
    description:
      "Designed and developed a React-based commercial website AutoSkup for a trading company. I managed the complete development cycle, starting from client requirements analysis, throughout UI design and its execution to deployment via Netlify. I mainly focused on the responsiveness of the website and professional presentation of the client's business.",
    icon: React.createElement(FaReact),
    date: "February 2024 - March 2024",
  },
  {
    title: "Graduated bootcamp",
    description: "I graduated after 9 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "October 2022 - Jun 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Online_shop",
    description:
      "An e-commerce app simulating an online fashion store, where users can browse fashion items, add them to cart or favorites.",
    tags: ["React", "TypeScript", "React Query", "Tailwind", "Redux"],
    imageUrl_DT: OnlineShopDtImg,
    imageUrl_M: OnlineShopMobileImg,
  },
  {
    title: "MOViEon",
    description:
      "A website based on TMDB API, modeled on streaming services such as SkyShowTime. It recommends movies premieres as well as popular TV series. Users can save favorite films in My list, and search for movies in the movie search engine.",
    tags: [
      "React",
      "React Router DOM",
      "Material UI",
      "Context API",
      "Sass (SCSS)",
    ],
    imageUrl_DT: movieOnDtImg,
    imageUrl_M: movieOnMobileImg,
  },
  {
    title: "Auto Skup",
    description:
      "A simple two-page website created for a motor industry trading company, focusing on the professional presentation of the client’s business.",
    tags: ["React", "Vite", "Material UI", "Sass (SCSS)"],
    imageUrl_DT: autoSkupDtImg,
    imageUrl_M: autoSkupMobileImg,
  },
  {
    title: "Ready_to_Go",
    description:
      "A to-do list app where users can create a packing list for trips. After logging into the application via a form, the user’s list is saved and stored in the database. List can be edited and reused repeatedly.",
    tags: ["React", "Vite", "Sass", "Supabase"],
    imageUrl_DT: readyToGoDtImg,
    imageUrl_M: readyToGoMobileImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS/SCSS",
  "ECMAScript 6 (ES6)",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Redux",
  "React Query",
  "Vite",
  "Tailwind",
  "Material UI",
  "Framer Motion",
] as const;
