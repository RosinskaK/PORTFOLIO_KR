"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <article>
        {experiencesData.map((exper, i) => (
          <div key={i}>
            <h3>{exper.title}</h3>
            <p>{exper.date}</p>
            <p>{exper.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Experience;
