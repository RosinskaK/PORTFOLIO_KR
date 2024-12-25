"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex flex-col gap-5">
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
