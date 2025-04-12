import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { publications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PublicationCard = ({ title, authors, doi, publisher }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="mt-2">
        <h3 className="text-white font-bold text-[20px]">{title}</h3>
        <p className="text-[14px] italic text-gray-300 mt-1">{authors}</p>
        <p className="text-[13px] text-green-300 mt-2">
          DOI: <span className="font-mono text-[13px]">{doi}</span>
        </p>
        <p className="text-[13px] text-yellow-200 mt-1">{publisher}</p>
      </div>
    </motion.div>
  );
};

const Publications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Our Work in Journals & Conferences</p>
        <h2 className={styles.sectionHeadText}>Publications</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Below is a collection of our academic publications. These works reflect our contributions to
          the fields of computational fluid dynamics, building energy modeling, and urban microclimate research.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {publications.map((pub, index) => (
          <PublicationCard key={`pub-${index}`} {...pub} />
        ))}
      </div>
    </>
  );
};

const WrappedPublications = SectionWrapper(Publications, 'publications');

export default WrappedPublications;
