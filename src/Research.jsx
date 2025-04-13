import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-8 rounded-2xl sm:w-[720px] w-full" // doubled width and padding
      >
        <div className="relative w-full h-[460px] flex justify-center items-center bg-black rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="project_image"
            className="h-full object-contain" // ✅ show full image, no zoom/crop
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-white font-bold text-[28px]">{name}</h3>
          <p className="mt-3 text-secondary text-[16px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[15px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Research = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Our Research Works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

const WrappedResearch = SectionWrapper(Research, 'research');

export default WrappedResearch;