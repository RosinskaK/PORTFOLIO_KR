import React from 'react'
import SectionHeading from './sectionHeading';
import { projectsData } from '@/lib/data';
import Image from "next/image";

function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project}/>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project ({title, description, tags, imageUrl_DT, imageUrl_M}: ProjectProps) {
    return (
      <article className="bg-slate-100 max-w-[42rem] border border-black/5 sm:pr-8">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
            >
              {tag}
            </li>
          ))}
        </ul>
        <Image src={imageUrl_DT} alt="Project I worked on" quality={95} />
        <div className="w-60 aspect-auto">
          <Image src={imageUrl_M} alt="Project I worked on" quality={95} />
        </div>
      </article>
    );
}


export default Projects;