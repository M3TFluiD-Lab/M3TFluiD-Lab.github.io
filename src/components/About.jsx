import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[320px] w-full"> {/* slight width increase for layout */}
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-8 px-12 min-h-[360px] flex justify-center items-center flex-col"
      >
        <img
          src={icon}
          alt="service-icon"
          className="w-[200px] h-[200px] scale-[1.55] object-contain mb-6" // ✅ increased via scale
          loading="lazy"
        />
        <h3 className="text-white text-[22px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The M³TFluid Lab investigates multiscale, multiphysics phenomena in thermofluids, integrating fluid dynamics, heat transfer, and thermodynamic 
        modeling to support next-generation solutions in infrastructure design, smart city planning, and advanced mobility systems. Our work leverages 
        computational fluid dynamics (CFD), reduced-order modeling, and artificial intelligence to enable real-time analytics and decision support tools 
        for complex urban and energy systems. Applications span wind-resilient buildings, environmental flow prediction, thermal comfort modeling, and 
        aerothermal assessments for next-generation unmanned aerial vehicles.
        By blending high-fidelity simulations with data-driven models, we aim to improve built environments' safety, reliability, and operational efficiency 
        under dynamic external and internal loads, supporting planning and technology deployment in increasingly interconnected urban systems.
      </motion.p>

      <motion.div
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-10 max-w-3xl space-y-6"
      >
        <h3 className="text-white text-[22px] font-bold">Key Themes:</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-[#915EFF] text-[20px] font-bold">•</span>
            <div>
              <p className="text-white font-semibold text-[16px] leading-tight">
                Multi-Fidelity CFD for Thermofluid Systems
              </p>
              <p className="text-secondary text-[15px] leading-snug">
                Physics-based simulations combining high- and low-fidelity CFD to model flow, heat, and energy interactions across scales.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[#915EFF] text-[20px] font-bold">•</span>
            <div>
              <p className="text-white font-semibold text-[16px] leading-tight">
                Surrogate Modeling and Physics-Informed Machine Learning
              </p>
              <p className="text-secondary text-[15px] leading-snug">
                Hybrid frameworks that integrate simulation data with ML and optimization tools for fast and interpretable predictions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-[#915EFF] text-[20px] font-bold">•</span>
            <div>
              <p className="text-white font-semibold text-[16px] leading-tight">
                System Integration and Immersive Visualization
              </p>
              <p className="text-secondary text-[15px] leading-snug">
                Reduced-order models, digital twins, and VR/AR interfaces for real-time analysis, planning, and interactive decision support.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};


const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;