import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { publication } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PublicationCard = ({ title, authors, publisher }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")} className="w-full">
      <p className="text-white text-[15px] leading-7 text-justify text-center">
        • <span className="font-bold">{title}</span>. <span className="italic">{authors}</span>. {publisher}
      </p>
    </motion.div>
  );
};

const Publication = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Our Work in Journals & Conferences</p>
        <h2 className={styles.sectionHeadText}>Publication</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify text-center"
        >
          Below is a collection of our academic publications. These works reflect our contributions to the fields of computational fluid dynamics, building energy modeling, and urban microclimate research.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {publication.map((pub, index) => (
          <PublicationCard key={`pub-${index}`} {...pub} />
        ))}
      </div>
    </>
  );
};

const WrappedPublication = SectionWrapper(Publication, 'publication');

export default WrappedPublication;
