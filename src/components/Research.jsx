import ResearchResources from "./ResearchResources";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// --------------------------------------------------
// Research themes and existing project descriptions
// --------------------------------------------------

const themes = [
  { id: "all", label: "All Research" },
  { id: "methods", label: "Modeling and Scientific ML" },
  { id: "urban", label: "Urban and Atmospheric" },
  { id: "energy", label: "Energy and Thermal Systems" },
  { id: "aerospace", label: "Aerospace and Mobility" },
];

const researchItems = [
  {
    ...projects[0],
    id: "mfsm",
    theme: "methods",
    eyebrow: "Core Framework",
    title: "Multi-Fidelity Surrogate Modeling (MFSM)",
    summary:
      "Combining experimental measurements, high- and low-fidelity CFD, and scientific machine learning to predict flows efficiently, with fidelity matched to the local physics.",
  },
  {
    ...projects[1],
    id: "rom",
    theme: "methods",
    eyebrow: "Computational Methods & Data-Driven Modeling",
    title: "Reduced-Order Modeling and Scientific Machine Learning",
    summary:
      "We use POD, SPOD, DMD, Koopman analysis, deep learning, and generative models to identify coherent flow structures and reconstruct and forecast unsteady wind fields at lower computational cost.",
    tags: [{ name: "POD / SPOD / DMD" }, { name: "Koopman Analysis" }, { name: "Deep Learning" }, { name: "Flow Prediction" }],
  },
  {
    id: "hercules",
    theme: "energy",
    eyebrow: "Ongoing Research Project · AFRL",
    title: "AFRL HERCULES",
    image: "/research/hercules-aircraft.png",
    summary:
      "The lab studies how flow, heat transfer, and chemical reactions influence high-temperature materials processing, including chemical vapor deposition and infiltration.",
  },
  {
    ...projects[2],
    id: "urban",
    theme: "urban",
    eyebrow: "Urban and Building Physics",
    title: "Urban Microclimate and Building Energy",
    summary:
      "Coupling local airflow, heat transfer, urban morphology, and building energy models across spatial scales.",
  },
  {
    ...projects[3],
    id: "microgrid",
    theme: "energy",
    eyebrow: "Energy Systems",
    title: "Microgrids and Distributed Energy Systems",
    summary:
      "Modeling hybrid renewable energy systems, energy demand, and system-level performance under changing conditions.",
  },
  {
    ...projects[4],
    image: "/aam-urban-wind.png",
    id: "aam",
    theme: "aerospace",
    eyebrow: "Aerospace & Urban Flow Physics",
    title: "Urban Wind Dynamics and Advanced Air Mobility",
    summary:
      "We combine high-fidelity CFD, wind-tunnel validation, and turbulence analysis to study flow separation, vortex shedding, and building wakes. We use these results to identify transient wind hazards and support safer UAV and advanced air mobility operations.",
    tags: [{ name: "CFD / LES" }, { name: "Urban Aerodynamics" }, { name: "UAV / AAM" }, { name: "Wind Hazard Assessment" }],
  },
  {
    ...projects[5],
    image: "/air-quality.png",
    id: "airquality",
    theme: "urban",
    eyebrow: "Atmospheric Transport",
    title: "Atmospheric Transport and Air Quality",
    summary:
      "Investigating neighborhood-scale pollutant transport using flow modeling, environmental observations, and sensor data.",
  },
];

// --------------------------------------------------
// Shared styles
// --------------------------------------------------

const accentGradient =
  "linear-gradient(105deg, #42C9A3 0%, #66CDA8 52%, #91C95A 100%)";

const panelClass =
  "rounded-3xl border border-white/10 bg-[#101715] overflow-hidden";

const sectionLabelClass =
  "text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#9BD8C2]";

// --------------------------------------------------
// Research card
// --------------------------------------------------

function ResearchCard({ item }) {
  return (
    <motion.article
      id={`research-${item.id}`}
      style={{ scrollMarginTop: "7rem" }}
      variants={fadeIn("up", "spring", 0.05, 0.7)}
      className={`${panelClass} ${item.id === "mfsm" ? "border-[#83D9BD]/70" : ""} h-full transition-all duration-300 hover:border-[#42C9A3]/50 hover:-translate-y-1`}
    >
      <div className="h-[220px] sm:h-[250px] bg-[#090F0E] flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-center px-6 text-white/50">
            Research image coming soon
          </div>
        )}
      </div>

      {item.id === "airquality" && <p className="px-6 pt-3 text-xs text-[#C3D4CA]">Illustrative concept.</p>}
      {item.id === "microgrid" && <p className="px-6 pt-3 text-xs text-[#C3D4CA]">In partnership with Xendee and Schneider Electric.</p>}
      <div className="p-6">
        <p className={sectionLabelClass}>{item.eyebrow}</p>

        <h3 className="mt-3 text-white text-[21px] font-bold leading-snug">
          {item.title}
        </h3>

        <p className="mt-3 text-[#C3D4CA] text-[15px] leading-7">
          {item.summary}
        </p>

        {item.id === "urban" && (
          <a href={`${import.meta.env.BASE_URL}facilities#rhodes-thermal-survey`} className="mt-4 inline-block text-sm font-semibold text-[#83D9BD] underline">
            View the Rhodes Tower thermal survey in Facilities
          </a>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags?.filter(tag => tag.name !== "LB-HB-BF").map((tag) => (
            <span
              key={({ EnergySystems: "Energy systems", "Sensors+Sat": "Sensors and satellite", "DT/VR": "Digital twin / VR", AirQuality: "Air quality", PIML: "Physics-informed ML", "ROM-ML": "ROM and ML", "LB-HB-BF": null })[tag.name] ?? (tag.name === "LB-HB-BF" ? "" : tag.name)}
              className="rounded-full border border-white/15 px-3 py-1 text-[12px] text-[#B9D9CD]"
            >
              {({ EnergySystems: "Energy systems", "Sensors+Sat": "Sensors and satellite", "DT/VR": "Digital twin / VR", AirQuality: "Air quality", PIML: "Physics-informed ML", "ROM-ML": "ROM and ML", "LB-HB-BF": null })[tag.name] ?? (tag.name === "LB-HB-BF" ? "" : tag.name)}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// --------------------------------------------------
// Main research page
// --------------------------------------------------

const Research = () => {
  const [activeTheme, setActiveTheme] = useState("all");

  const visibleItems =
    activeTheme === "all"
      ? researchItems
      : researchItems.filter((item) => item.id === "mfsm" || item.theme === activeTheme);

  return (
    <div className="w-full bg-transparent text-white">
      {/* Research hero: integrated city illustration */}
      <section className="relative isolate w-full min-h-[620px] overflow-hidden bg-[#101514]">
        <img src={`${import.meta.env.BASE_URL}research-city.png`} alt="" className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover object-right" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              linear-gradient(90deg,
                #101514 0%,
                rgba(16,21,20,0.99) 19%,
                rgba(16,21,20,0.95) 32%,
                rgba(16,21,20,0.98) 48%,
                rgba(16,21,20,0.26) 61%,
                rgba(16,21,20,0.02) 83%),
              linear-gradient(0deg, #101514 0%, transparent 15%)
            `,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-16 lg:pt-16">
          <motion.div
            variants={textVariant()}
            className="max-w-[560px]"
          >
            <p className={sectionLabelClass}>
              M³TFluiD Lab / Research
            </p>

            <h1 className="mt-6 text-[43px] font-extrabold leading-[1.07] tracking-tight sm:text-[58px] lg:text-[68px]">
              <style>{`@keyframes research-gradient {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }`}</style>
              {["Multiscale.", "Multiphysics.", "Modeling."].map((word, index) => (
                <span key={word} className="block w-fit bg-clip-text pb-1 text-transparent motion-safe:animate-[research-gradient_5s_ease-in-out_infinite]"
                  style={{
                    backgroundImage: "linear-gradient(100deg, #b8f4e1, #42c9a3, #a5e365, #8ddcf0)",
                    backgroundSize: "260% 100%",
                    animationDelay: `${index * -1.4}s`,
                  }}>{word}</span>
              ))}
            </h1>

            <p className="mt-6 flex flex-wrap gap-x-2 text-sm font-semibold leading-7">
              <span className="whitespace-nowrap">Multi-Fidelity Modeling</span>
              <span aria-hidden="true">|</span>
              <span className="whitespace-nowrap">Experimental Validation</span>
              <span aria-hidden="true">|</span>
              <span className="whitespace-nowrap">Scientific Machine Learning</span>
            </p>
            <p className="mt-5 text-[16px] leading-8 text-[#C3D4CA]">Multi-fidelity surrogate modeling (MFSM) is our core framework for predicting flow, heat, and mass transport wherever local physics drives the outcome, from buildings and cities to energy and aerospace systems.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#research-areas"
                className="rounded-full px-6 py-3 font-semibold text-[#05241C] transition hover:brightness-110"
                style={{ background: accentGradient }}
              >
                Methods and Applications
              </a>

              <a
                href="#research-approach"
                className="rounded-full border border-[#42C9A3]/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Our Approach
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#83D9BD]">
              <a href="#research-aam" onClick={() => setActiveTheme("all")} className="underline">
                Urban Wind Dynamics and Advanced Air Mobility
              </a>
              <a href="#research-rom" onClick={() => setActiveTheme("all")} className="underline">
                Reduced-Order Modeling and Scientific Machine Learning
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research foundation */}
      <section
        id="research-approach"
        className="mx-auto max-w-6xl px-6 pb-24"
      >
        <p className={sectionLabelClass}>
          Research Foundation
        </p>

        <h2 className="mt-4 max-w-4xl text-[32px] sm:text-[42px] font-bold leading-tight">
          Connecting physics, experiments, and prediction
        </h2>

        <p className="mt-5 leading-8 text-[#C3D4CA]">MFSM is the lab’s core framework. It combines experimental evidence with models of different computational cost and physical resolution, so expensive high-fidelity effort is spent only where local physics requires it. The same framework carries across our application areas, from urban wind and building energy to air quality, advanced air mobility, and aerospace flows.</p>
        <p className="mt-5 leading-8 text-[#C3D4CA]">Our central question: When do local-scale physical processes matter, and how much modeling fidelity is needed to resolve them?</p>
        <h3 className="mt-8 text-2xl font-bold">How we work</h3>
        <p className="mt-2 text-[#C3D4CA]">Four linked steps support all three research themes.</p>
        <div className="mt-5 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Experimental Validation",
              detail: "Compare simulated facade pressures, approach-flow velocity profiles, and turbulence statistics with wind tunnel measurements for isolated buildings and arrays.",
            },
            {
              number: "02",
              title: "Physics-Based Simulation",
              detail: "Use lower-cost CFD for broad parameter sweeps and higher-fidelity simulations for selected cases where unsteady flow or local transport needs more resolution.",
            },
            {
              number: "03",
              title: "Reduced-Order and Data-Driven Models",
              detail: "Extract dominant flow structures and dynamics with POD, DMD, and SPOD. Combine reduced representations with surrogate models to predict responses at new conditions.",
            },
            {
              number: "04",
              title: "Testing and Application",
              detail: "Test predictions on held-out conditions to determine where the models are reliable enough to support decisions in urban and building design, fire and pollutant transport, advanced air mobility, and energy systems.",
            },
          ].map((step) => (
            <details key={step.number} className="group rounded-2xl border border-[#42C9A3]/25 bg-[#0D1C19]">
              <summary className="cursor-pointer list-none rounded-2xl p-5 lg:min-h-[10rem] hover:bg-[#17302A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#66CDA8] [&::-webkit-details-marker]:hidden">
                <span className="block text-sm font-bold text-[#66CDA8]">{step.number}</span>
                <span className="mt-3 block text-lg font-bold text-white">{step.title}</span>
                <span className="mt-3 block text-sm font-semibold text-[#83D9BD] group-open:hidden">View details <span aria-hidden="true">⌄</span></span>
                <span className="mt-3 hidden text-sm font-semibold text-[#83D9BD] group-open:block">Hide details <span aria-hidden="true">⌃</span></span>
              </summary>
              <p className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-[#C3D4CA]">{step.detail}</p>
            </details>
          ))}
        </div>
      </section>

      {/* UF NHERI wind tunnel validation */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className={`${panelClass} grid lg:grid-cols-2`}>
          <div className="p-8 sm:p-10">


            
            <h2 className="mt-4 text-[29px] sm:text-[35px] font-bold leading-tight">
              Boundary Layer Wind Tunnel Validation
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-[#C3D4CA]">Wind tunnel measurements of facade pressures, velocity profiles, and turbulence around isolated buildings and building arrays provide validation data for our CFD, multi-fidelity, and reduced-order models.</p>
            <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-[#C3D4CA]">
              <img src={`${import.meta.env.BASE_URL}blwt/uf-nheri-logo.png`} alt="NSF NHERI University of Florida Wind Research Facility" className="h-auto w-44 max-w-full" />
            </div>
          </div>

          <figure className="bg-[#07110F] p-5">
            <img src={`${import.meta.env.BASE_URL}blwt/full-tunnel-schematic.png`} alt="Full UF wind tunnel schematic with fan bank, flow modulator, Terraformer, and test section" loading="lazy" className="w-full rounded-xl" />
            <figcaption className="mt-3 text-sm leading-6 text-[#C3D4CA]">Full UF NHERI wind tunnel and its flow-conditioning components.</figcaption>
            <a href={`${import.meta.env.BASE_URL}facilities#blwt`} className="mt-3 inline-block text-[#83D9BD] underline">See facility details and experimental setups</a>
          
          </figure>
        </div>
        <p className="mt-3 text-sm text-[#C3D4CA]">Experiments are conducted as external users at the NSF NHERI University of Florida Boundary Layer Wind Tunnel. Schematic: UF NHERI Experimental Facility.</p>
      </section>

      {/* Research areas */}
      <section
        id="research-areas"
        className="mx-auto max-w-6xl px-6 pb-24"
      >
        <h2 className="mt-4 text-[32px] sm:text-[42px] font-bold">
          Methods and Engineering Applications
        </h2>

        <p className="mt-5 text-[16px] leading-8 text-[#C3D4CA]">
          MFSM and the methods behind it, and the engineering areas where we apply them.
        </p>

        {/* Research filters */}
        <div className="mt-9 flex flex-wrap gap-3">
          {themes.map((theme) => {
            const isActive = activeTheme === theme.id;

            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => setActiveTheme(theme.id)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-[14px] font-semibold transition ${
                  isActive
                    ? "border-transparent text-[#05241C]"
                    : "border-white/20 bg-white/5 text-white hover:border-[#42C9A3]/60"
                }`}
                style={
                  isActive
                    ? { background: accentGradient }
                    : undefined
                }
              >
                {theme.label}
              </button>
            );
          })}
        </div>

        {/* Research cards */}
        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <ResearchCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ResearchResources />
      </section>
    </div>
  );
};

export default SectionWrapper(Research, "research");
