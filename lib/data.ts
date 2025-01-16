// import React from "react";
import OnlineShopDtImg from "@/public/OnlineShopDT.png";
import OnlineShopMobileImg from "@/public/OnlineShopMobile.png";
import movieOnDtImg from "@/public/movieOnDT.png";
import movieOnMobileImg from "@/public/movieOnMobile.png";
import autoSkupDtImg from "@/public/autoSkupDT.jpg";
import autoSkupMobileImg from "@/public/autoSkupMobile.jpg";
import readyToGoDtImg from "@/public/readyToGoDT.png";
import readyToGoMobileImg from "@/public/readyToGoMobile.png";
// skils icons
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaSass } from "react-icons/fa6";
import { DiJsBadge } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { ImGit } from "react-icons/im";
import { MdWeb } from "react-icons/md";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


export const skillsData = [
  {
    name: "HTML",
    color: "bg-violet-400",
    icon: MdHtml,
  },
  { name: "CSS", color: "bg-violet-500", icon: MdCss },
  { name: "Sass", color: "bg-violet-600", icon: FaSass },
  { name: "ECMAScript 6 (ES6)", color: "bg-violet-400", icon: DiJsBadge },
  { name: "JavaScript", color: "bg-violet-600", icon: DiJsBadge },
  { name: "TypeScript", color: "bg-violet-400", icon: SiTypescript },
  { name: "React", color: "bg-violet-500", icon: SiReact },
  { name: "Next.js", color: "bg-violet-600", icon: SiNextdotjs },
  { name: "Git", color: "bg-violet-600", icon: ImGit },
  { name: "Responsive Web Design", color: "bg-violet-600", icon: MdWeb },
  { name: "Redux", color: "bg-violet-600", icon: SiRedux },
  { name: "React Query", color: "bg-violet-600", icon: SiReactquery },
  { name: "Vite", color: "bg-violet-600", icon: SiVite },
  { name: "Tailwind", color: "bg-violet-600", icon: SiTailwindcss },
  { name: "Material UI", color: "bg-violet-600", icon: SiMui },
  { name: "Framer Motion", color: "bg-violet-600", icon: TbBrandFramerMotion },
] as const;

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
    title: "Front-end Developer",
    description:
      "With nearly two years of experience as a front-end developer, I have worked on diverse projects, prioritizing seamless user experiences and responsive design. By utilizing modern tools like React, TypeScript, Tailwind CSS and Material UI, I create intuitive, visually appealing interfaces and deliver high-quality software solutions.",
    date: "Jun 2023 - present",
  },
  {
    title: "React Developer",
    description:
      "I designed and developed a React-based commercial website AutoSkup for a trading company. I managed the complete development cycle, starting from client requirements analysis, throughout UI design and its execution to deployment via Netlify. Mainly focusing on the responsiveness of the website and professional presentation of the client's business.",
    date: "February 2024 - March 2024",
  },
  {
    title: "JavaScript Developer - graduated from a bootcamp",
    description:
      "I completed a 9-month program focused on the fundamentals of front-end development, such as HTML, CSS, and JavaScript. During the JavaScript bootcamp, I collaborated with a team to build a project in JavaScript using SCRUM methodology and Trello within 12 days.",
    date: "October 2022 - Jun 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Online_shop",
    linkLiveView: "https://onlineshop2024.netlify.app",
    linkGitHub: "https://github.com/RosinskaK/Online_shop",
    description:
      "A responsive e-commerce app simulating an online fashion store, where user can browse fashion items, add them to cart and favorite list. Integrated with the FakeStore API to dynamically display product data.",
    tags: ["React", "TypeScript", "React Query", "Tailwind", "Redux"],
    imageUrl_DT: OnlineShopDtImg,
    imageUrl_M: OnlineShopMobileImg,
  },
  {
    title: "MOViEon",
    linkLiveView: "https://movieon24.netlify.app",
    linkGitHub: "https://github.com/RosinskaK/MOViEon_project",
    description:
      "A website based on TMDB API, modeled on streaming services such as SkyShowTime. It recommends movies premieres as well as popular TV series. Users can save their favorite films in the My List and search for movies using a dedicated search engine. The platform provides detailed information about movies and series, including descriptions, genres, photos, and a link to the trailer on YouTube.",
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
    linkLiveView: "https://autoskup-krk.pl",
    linkGitHub: "https://github.com/RosinskaK/autoskup_c",
    description:
      "A simple two-page website with Home and Contact pages, created for a motor industry trading company. The site focuses on the professional presentation of the client’s business.",
    tags: ["React", "Vite", "Material UI", "Sass (SCSS)"],
    imageUrl_DT: autoSkupDtImg,
    imageUrl_M: autoSkupMobileImg,
  },
  {
    title: "Ready_to_Go",
    linkLiveView: "https://readytogoapp.netlify.app",
    linkGitHub: "https://github.com/RosinskaK/ready_to_go_project",
    description:
      "A to-do list app where users can create a packing list for trips. After logging into the application via a form, the user’s list is saved and stored in the database. List can be edited and reused repeatedly.",
    tags: ["React", "Vite", "Sass", "Supabase"],
    imageUrl_DT: readyToGoDtImg,
    imageUrl_M: readyToGoMobileImg,
  },
] as const;

