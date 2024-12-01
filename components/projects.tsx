import React from "react";
import SectionHeading from "./sectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./project";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex flex-col gap-3">
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
