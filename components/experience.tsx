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
      className="mb-28 max-w-[40rem] scroll-mt-28 text-center sm:mb-32"
    >
      <SectionHeading>My Experience</SectionHeading>
      <article className="gap-4 flex flex-col text-left">
        {experiencesData.map((exper, i) => (
          <div key={i} className="bg-zinc-100 p-4 rounded-xl">
            <h3 className="font-bold text-lg">{exper.title}</h3>
            <p className=" text-violet-400 italic text-sm pt-3 pb-2 font-semibold">{exper.date}</p>
            <p className="font-light bg-white py-2 px-1 rounded-lg">{exper.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Experience;
