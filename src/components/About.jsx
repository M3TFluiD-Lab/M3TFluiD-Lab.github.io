
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";

const researchThemes = [
  { title: "Local Flow Physics and Transport", description: "Local turbulence, flow separation, and coupled heat and mass transfer across varying geometries, inflow and boundary conditions, and isothermal and non-isothermal regimes." },
  { title: "Scalable Multi-Fidelity Modeling", description: "Multi-fidelity surrogate models that extend spatial and temporal resolution and coverage at a fraction of the cost of high-fidelity simulation. The aim is not perfect accuracy everywhere, but errors that are consistent and correctable, so surrogates can predict local conditions, such as flow in pedestrian and evacuation zones or heat loads on vehicle surfaces, at practical computational cost." },
  { title: "Validated Predictive Modeling", description: "Physics-informed and data-driven reduced-order models and predictive lookup tables, supported by verification, validation, and uncertainty quantification (VVUQ), so predictions stay trustworthy beyond the cases they were built on." },
];

const applications = [
  ["Urban and Atmospheric Flows", "M3 20h18M5 20V9h5v11m4 0V5h5v15M2 5c3-3 5-3 8-2m8 6h4"],
  ["Wind Engineering", "M2 7h15l-3-3m3 3-3 3M2 13h20l-3-3m3 3-3 3M2 19h12"],
  ["Building Energy and BIM", "m12 2 9 5v10l-9 5-9-5V7Zm0 10 9-5m-9 5L3 7m9 5v10M7.5 4.5l9 5v10"],
  ["Advanced Air Mobility", "m7 7 10 10M17 7 7 17M9 12h6m-3-3v6M2 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m14 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0M2 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m14 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0"],
  ["Fire and Pollutant Transport", "M8 22a5 5 0 0 1-4-8c1-1 2-3 2-5 3 2 3 4 3 5l2-3c4 4 2 11-3 11ZM9 6c3 0 3-4 7-4h5M13 8h9"],
  ["Energy and Manufacturing Systems", "M3 21V9l6 3V8l6 4V5h5l1 16ZM12 14l-2 3h4l-2 3"],
];

const About = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      {/* Overview */}
      <motion.div variants={textVariant()}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Research Mission
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          The right physics at the right fidelity
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 max-w-5xl space-y-5 text-left text-[16px] leading-8 text-secondary md:text-[17px]"
      >
        <p>Fast engineering models are often accurate on average and wrong where it matters most: in wakes, separated flows, and the local pockets of turbulence and heat that drive loads, comfort, and transport.</p>
        <p>The M³TFluiD Lab asks: <strong className="text-white">When do local-scale physical processes matter, and how much modeling fidelity is needed to resolve them?</strong> To answer it, we develop multi-fidelity surrogate modeling (MFSM), a general framework that combines wind tunnel experiments, physics-based simulation, reduced-order models, and scientific machine learning, and apply it across engineering systems where full-resolution simulation is too expensive.</p>
      </motion.div>

      {/* Research Themes */}
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-14"
      >
        <h3 className="text-2xl font-bold text-white">
          Research Themes
        </h3>

        <p className="mt-2 max-w-4xl text-[15px] leading-7 text-secondary">
          Our research links fundamental thermofluid physics with efficient, trustworthy prediction.
        </p>

        <div className="mt-7 grid items-start gap-4 lg:grid-cols-3">
          {researchThemes.map((theme, index) => (
            <details key={theme.title} className="group border-l-2 border-emerald-500/70 pl-3">
              <summary className="cursor-pointer list-none rounded-sm py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#83D9BD] [&::-webkit-details-marker]:hidden">
                <span className="block text-xs font-semibold tracking-widest text-emerald-400">
                  0{index + 1}
                </span>
                <span className="mt-3 block text-base font-semibold leading-6 text-white">
                  {theme.title}
                </span>
                <span className="mt-2 block text-sm font-semibold text-[#83D9BD] group-open:hidden">
                  View details <span aria-hidden="true">⌄</span>
                </span>
                <span className="mt-2 hidden text-sm font-semibold text-[#83D9BD] group-open:block">
                  Hide details <span aria-hidden="true">⌃</span>
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-7 text-secondary">{theme.description}</p>
            </details>
          ))}
        </div>
      </motion.div>

      {/* Applications */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-12 border-t border-white/10 pt-8"
      >
        <h3 className="text-lg font-semibold text-white">
          One Framework, Many Applications
        </h3>

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-3">
          {applications.map(([application, path]) => (
            <span
              key={application}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-[13px] text-white/80"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d={path} />
              </svg>
              {application}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm italic text-[#C3D4CA]">Bridging architectural and aerospace engineering.</p>
        <figure className="mx-auto mt-6 max-w-xl overflow-hidden rounded-xl border border-white/15">
          <video
            aria-label="Urban airflow simulation"
            className="aspect-video w-full bg-black object-contain"
            src={`${import.meta.env.BASE_URL}flow_halfres.mp4`}
            poster={`${import.meta.env.BASE_URL}home-flow-preview.jpg`}
            autoPlay={typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches}
            muted loop playsInline controls preload="none"
          />
          <figcaption className="px-4 py-3 text-sm text-secondary">Simulated wind speed and wakes around a group of buildings.</figcaption>
        </figure>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, "about");
