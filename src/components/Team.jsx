import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { members } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const MemberCard = ({ name, email, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] flex justify-center items-center bg-black rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="member_image"
            className="h-full object-contain" // ✅ changed from object-cover
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
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-1 text-blue-300 text-[13px]">{email}</p>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Team = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Our Team Members</p>
        <h2 className={`${styles.sectionHeadText}`}>Members</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Active members of our team are listed below. We are a group of researchers and engineers who are passionate about using machine learning and computational fluid dynamics to solve real-world problems. Our team is dedicated to advancing the field of wind engineering and providing innovative solutions for high-rise buildings.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {members.map((member, index) => (
          <MemberCard key={`member-${index}`} {...member} />
        ))}
      </div>
    </>
  );
};

const WrappedTeam = SectionWrapper(Team, 'team');

export default WrappedTeam;

