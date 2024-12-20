// import Image from "next/image";

import About from "@/components/about";
import ContactIcons from "@/components/contactIcons";
// import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";
import Skills from "@/components/skills";

export default function Home() {
  return (
      <main className=" flex flex-col items-center px-4  ">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        {/* <Contact /> */}
        <ContactIcons />
      </main>
      
  );
}
