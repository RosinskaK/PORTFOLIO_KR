import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

function Projects() {
  return (
    <section className="">
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex flex-col gap-6 ">
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl_DT,
  imageUrl_M,
}: ProjectProps) {
  return (
    <article className="bg-slate-100 max-w-[48rem]  px-4 py-6  relative rounded-md hover:bg-slate-200 transition group">
      <div className="flex pb-4 justify-between">
        <h3 className="text-2xl font-semibold ">{title}</h3>
        <div className="text-violet-800">
          <a href="" target="_blank" className="px-3">
            see page here
          </a>
          <a href="" target="_blank" className="px-3">
            code on Github
          </a>
        </div>
      </div>
      <Image
        src={imageUrl_DT}
        alt="Project I worked on"
        quality={95}
        className="rounded-sm top-4 h-fit w-fit"
      />
      <div className="">
        <Image
          src={imageUrl_M}
          alt="Project I worked on"
          quality={95}
          className=" w-32 aspect-auto absolute right-14 rounded-2xl top-[7rem] shadow-2xl shadow-black group-hover:scale-110 transition border border-black/10 group-hover:translate-x-3 h-[282px]"
        />
      </div>
      <p className="mt-4 leading-relaxed text-slate-700 py-3">{description}</p>
      <ul className="flex flex-wrap pt-4 pb-2 gap-2 justify-center">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-violet-700 px-3 py-[6px] text-[0.7rem] uppercase tracking-wider text-white rounded-full "
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Projects;
