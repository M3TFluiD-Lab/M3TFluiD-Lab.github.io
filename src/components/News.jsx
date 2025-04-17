// === News.jsx ===
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { news } from "../constants";

const NewsCard = ({ title, description, image, tags }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="rounded-2xl"
      >
        <div className="relative w-full h-[230px] bg-black flex justify-center items-center rounded-2xl overflow-hidden">
          <img
            src={image}
            alt="news_image"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px] text-justify">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag} className="text-[14px] text-blue-400">#{tag}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const News = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Stay Updated</p>
        <h2 className={styles.sectionHeadText}>Latest News</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify text-center"
        >
          Here you can find the latest updates about our lab, research highlights, conference participations, and important announcements.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {news.map((item, index) => (
          <NewsCard key={`news-${index}`} {...item} />
        ))}
      </div>
    </>
  );
};

const WrappedNews = SectionWrapper(News, "news");

export default WrappedNews;
