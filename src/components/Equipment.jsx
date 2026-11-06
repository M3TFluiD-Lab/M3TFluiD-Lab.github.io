import ImageGallery from "./ImageGallery";
import React, { useState } from "react";
import { motion } from "framer-motion";
import HandheldThermal from "./HandheldThermal";
import SoftwarePackages from "./SoftwarePackages";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const facility = `${import.meta.env.BASE_URL}facilities/`;
const blwt = `${import.meta.env.BASE_URL}blwt/`;
const areas = [
  ["blwt", "Wind Tunnel"], ["uav", "UAV and Aerial Sensing"],
  ["thermal", "Thermal Imaging"], ["weather", "Environmental Monitoring"],
  ["computing", "Computing and Simulation"], ["vr", "VR and Visualization"],
];
function Panel({ id, label, title, description, children }) {
  return <motion.section id={id} variants={fadeIn("up", "spring", 0.05, 0.7)}
    className="scroll-mt-28 rounded-3xl border border-[#42C9A3]/20 bg-[#101715] p-6 sm:p-8">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#83D9BD]">{label}</p>
    <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">{title}</h2>
    <p className="mt-4 text-[16px] leading-8 text-[#C3D4CA]">{description}</p>
    <div className="mt-7">{children}</div>
  </motion.section>;
}
function Photo({ src, title, description, contain = false }) {
  return <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#07100D]">
    <div className="flex h-56 items-center justify-center overflow-hidden bg-[#17231E]">
      <img src={src} alt={title} loading="lazy" className={`h-full w-full ${contain ? "object-contain p-3" : "object-cover"}`} />
    </div>
    <figcaption className="p-4"><p className="font-semibold text-white">{title}</p>
      {description && <p className="mt-2 text-sm leading-6 text-[#C3D4CA]">{description}</p>}
    </figcaption>
  </figure>;
}

const drones = [
  { id: "m350", name: "DJI Matrice 350 RTK", image: "matrice-350-rtk.png",
    role: "LiDAR-ready research platform", description: "A modular RTK platform for aerial surveying, mapping, and payload-based environmental observations.",
    specs: [["Maximum flight time", "55 min (without payload)"], ["Payload capacity", "Up to 2.7 kg"], ["Weather protection", "IP55"], ["Positioning", "RTK positioning"], ["Thermal imaging", "Compatible thermal payload required"], ["LiDAR", "Compatible Zenmuse L1 / L2 payload required"]],
    note: "Thermal imaging and LiDAR depend on the installed sensor payload; they are not built into the airframe.", source: "https://enterprise.dji.com/matrice-350-rtk/specs" },
  { id: "m3t", name: "DJI Mavic 3T", image: "mavic-3t.png",
    role: "Compact thermal observations", description: "A portable thermal and visible-light platform for surface-temperature studies, building assessments, and field observations.",
    specs: [["Maximum flight time", "45 min"], ["Thermal resolution", "640 × 512 px"], ["Wide camera", "48 MP"], ["Tele camera", "12 MP"], ["Temperature measurement", "Point and area measurements"], ["LiDAR", "No integrated LiDAR"]],
    note: "Flight time is a manufacturer maximum under controlled test conditions. Actual endurance depends on the mission and conditions.", source: "https://enterprise.dji.com/mavic-3-enterprise/specs" },
  { id: "m30t", name: "DJI Matrice 30T", image: "matrice-30t.png",
    role: "Integrated thermal and zoom sensing", description: "A field platform combining visible and thermal imaging with a laser rangefinder for environmental surveys and inspection research.",
    specs: [["Maximum flight time", "41 min"], ["Thermal resolution", "640 × 512 px"], ["Wide camera", "12 MP"], ["Zoom camera", "48 MP"], ["Weather protection", "IP55"], ["Ranging", "Laser rangefinder (not scanning LiDAR)"]],
    note: "The thermal camera is specific to the M30T variant. Flight time is a manufacturer maximum under controlled test conditions.", source: "https://enterprise.dji.com/matrice-30/specs" },
];
function DroneExplorer() {
  const [selected, setSelected] = useState("m350");
  const drone = drones.find(item => item.id === selected);
  return <div>
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <figure className="flex min-h-[280px] items-center justify-center rounded-2xl bg-[#101715] p-6 md:min-h-[400px]">
        <img src={`${facility}${drone.image}`} alt={drone.name} className="h-[260px] w-full object-contain md:h-[350px]" />
      </figure>
      <div aria-live="polite" aria-atomic="true" className="rounded-2xl border border-white/10 bg-[#07100D] p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#66CDA8]">{drone.role}</p>
        <h3 className="mt-3 text-2xl font-bold">{drone.name}</h3>
        <p className="mt-3 text-[15px] leading-7 text-[#C3D4CA]">{drone.description}</p>
        <dl className="mt-5 grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2">{drone.specs.map(([label, value]) => <div key={label} className="border-t border-white/10 pt-3"><dt className="text-xs text-[#C3D4CA]">{label}</dt><dd className="mt-1 text-sm font-semibold">{value}</dd></div>)}</dl>
        <p className="mt-5 text-xs leading-6 text-[#C3D4CA]">{drone.note}</p>
        <a href={drone.source} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-[#66CDA8] underline">DJI specifications</a>
      </div>
    </div>
    <div role="group" aria-label="Select a drone" className="mt-5 grid gap-3 sm:grid-cols-3">{drones.map(item => <button type="button" key={item.id} aria-pressed={item.id === selected} onClick={() => setSelected(item.id)} className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66CDA8] ${item.id === selected ? "border-[#66CDA8] bg-[#42C9A3]/10" : "border-white/15 bg-[#07100D] hover:border-[#66CDA8]/60"}`}><img src={`${facility}${item.image}`} alt="" className="h-16 w-20 rounded-lg bg-[#101715] object-contain p-1"/><span><span className="block text-sm font-semibold">{item.name}</span><span className="mt-1 block text-xs text-[#C3D4CA]">{item.id === "m350" ? "RTK & modular payloads" : "Thermal & visible imaging"}</span></span></button>)}</div>
    <p className="mt-3 text-xs text-[#C3D4CA]">Product images: DJI.</p>
  </div>;
}
const workstations = [
  {name: "Dell Precision 7960", count: "1 flagship workstation", specs: [["Processor", "Intel Xeon w9-3495X · 56 cores / 112 threads"], ["Memory", "256 GB DDR5 ECC"], ["Graphics", "NVIDIA RTX 5000 Ada · 32 GB"], ["Storage", "2 × 4 TB NVMe SSD + 8 TB HDD"]]},
  {name: "Dell Precision 7865/75", count: "4 research workstations", specs: [["Processor", "AMD Ryzen PRO · 16 cores / 32 threads each"], ["Memory", "128 GB ECC per workstation"], ["Graphics", "NVIDIA RTX A4000"], ["Storage", "2 TB NVMe SSD + 12 TB HDD each"]]},
];
function Computing() {
  return <div>
    <h3 className="text-lg font-semibold">Five dedicated desktop workstations</h3>
    <div className="mt-4 grid gap-4 xl:grid-cols-2">{workstations.map(item => <article key={item.name} className="rounded-2xl border border-white/10 bg-[#07100D] p-5"><p className="text-xs uppercase tracking-wider text-[#66CDA8]">{item.count}</p><h4 className="mt-3 text-lg font-semibold">{item.name}</h4><dl className="mt-4 space-y-4">{item.specs.map(([label, value]) => <div key={label}><dt className="text-xs text-[#C3D4CA]">{label}</dt><dd className="mt-1 text-sm leading-6">{value}</dd></div>)}</dl></article>)}</div>
    <h3 className="mt-8 text-lg font-semibold">University and external research computing</h3>
    <div className="mt-4 grid gap-4 md:grid-cols-3">{[
      {name: "CSU High-Performance Computing", logo: "csu.jpg", link: "https://engineering.csuohio.edu/mri-hpc", text: "Campus research computing supports parallel simulation and GPU-accelerated scientific workflows.", label: "University shared resource"},
      {name: "Ohio Supercomputer Center", logo: "osc.svg", link: "https://www.osc.edu/", text: "Allocated access supports large-scale CFD, parametric studies, and research data analysis.", label: "External research computing"},
      {name: "Texas Advanced Computing Center", logo: "tacc.svg", link: "https://tacc.utexas.edu/", text: "TACC research computing access is supported by a new NSF supplemental grant.", label: "NSF-supported computing access"},
    ].map(item => <a key={item.name} href={item.link} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-[#07100D] p-5 hover:border-[#66CDA8]/60"><div className="flex h-24 items-center justify-center rounded-lg bg-white p-4"><img src={`${facility}${item.logo}`} alt={item.name} className="max-h-full max-w-full object-contain"/></div><p className="mt-5 text-xs uppercase tracking-wider text-[#66CDA8]">{item.label}</p><h4 className="mt-2 font-semibold">{item.name}</h4><p className="mt-3 text-sm leading-7 text-[#C3D4CA]">{item.text}</p></a>)}</div>
    <p className="mt-4 text-xs leading-6 text-[#C3D4CA]">Research access combines campus infrastructure with externally allocated supercomputing resources.</p>
    <SoftwarePackages />
  </div>;
}
function VideoCard({ file, title, description }) {
  const [failed, setFailed] = useState(false);
  return <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#07100D]">
    <video controls playsInline preload="metadata" poster={`${facility}${file.replace('.mp4', '-poster.jpg')}`} onError={() => setFailed(true)} className="aspect-video w-full bg-black object-contain" aria-label={title}><source src={`${facility}${file}`} type="video/mp4" onError={() => setFailed(true)}/>Your browser does not support embedded video.</video>
    <div className="p-5"><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#C3D4CA]">{description}</p>{failed && <p role="status" className="mt-3 text-sm text-[#C3D4CA]">The video could not load. Try opening it directly below.</p>}<a href={`${facility}${file}`} className="mt-3 inline-block text-sm text-[#66CDA8] underline">Open video</a></div>
  </article>;
}

const Equipment = () => <div className="mx-auto w-full max-w-7xl px-6 pb-24 text-white">
  <motion.div variants={textVariant()} className="pt-10">
    <h1 className="mt-4 text-3xl font-bold md:text-4xl">Experimental and Computational Capabilities</h1>
    <p className="mt-5 text-[16px] leading-8 text-[#C3D4CA]">Research infrastructure supporting laboratory experiments, field observations, numerical modeling, and immersive visualization.</p>
  </motion.div>
  <nav aria-label="Facilities sections" className="mt-7">
    <p className="mb-3 text-sm font-semibold text-[#83D9BD]">Explore the facilities</p>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
      {areas.map(([id, name], index) => (
        <a key={id} href={`#${id}`}
          className="group flex flex-col justify-between gap-3 rounded-xl border border-[#42C9A3]/30 bg-[#101715] p-4 transition-colors hover:border-[#66CDA8] hover:bg-[#17302A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#66CDA8]">
          <span className="text-xs font-semibold text-[#83D9BD]">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-sm font-semibold">{name}</span>
          <span aria-hidden="true" className="text-xs text-[#83D9BD] group-hover:underline">Explore section ↓</span>
        </a>
      ))}
    </div>
  </nav>
  <div className="mt-12 grid gap-8">
    <Panel id="blwt" label="Experimental aerodynamics / NSF NHERI" title="Boundary Layer Wind Tunnel and Flow Measurements" description="Measurements support building aerodynamics, turbulent inflow characterization, and validation of CFD and surrogate models.">
      
      <dl className="grid gap-3 text-sm leading-6 text-[#C3D4CA] sm:grid-cols-3">
        <div><dt className="font-semibold text-[#83D9BD]">Tunnel dimensions</dt><dd>40 m long · 6 m wide · 3 m high</dd></div>
        <div><dt className="font-semibold text-[#83D9BD]">Flow Field Modulator</dt><dd>319 independently controlled fan cells for tailored velocity profiles and transient wind events.</dd></div>
        <div><dt className="font-semibold text-[#83D9BD]">Terraformer</dt><dd>1,116 independently actuated roughness elements configure uniform or varied upstream terrain.</dd></div>
      </dl>
      <ImageGallery label="Wind tunnel images" images={[
        [`${blwt}flow-schematic.png`, "Full wind tunnel schematic", "Follow the airflow from the fan bank and flow modulator through the Terraformer to the test section."],
        [`${blwt}IMG_7273.JPG`, "Wind tunnel experiment", "The turntable holds model buildings downstream of the terrain elements used to shape the approach flow."],
        [`${blwt}IMG_5218.JPG`, "Experimental configuration", "The test section provides a controlled setup for studying flow around model buildings."],
        [`${blwt}IMG_7145.JPG`, "Measurement setup", "The wind tunnel instrumentation supports measurements of velocity and turbulence in the approach flow and around the models."],
        [`${blwt}uniform-terrain.png`, "Uniform terrain", "Evenly arranged roughness elements create a consistent upstream terrain configuration."],
        [`${blwt}varied-terrain.png`, "Varied terrain", "Adjustable roughness elements let researchers vary the upstream terrain configuration."],
        [`${blwt}roughness-element.png`, "Actuated roughness element", "A linear actuator and rotating disk adjust the height and orientation of an individual terrain element."],
      ]} />
      <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[#C3D4CA]">
        <img src={`${import.meta.env.BASE_URL}blwt/uf-nheri-logo.png`} alt="NSF NHERI University of Florida Wind Research Facility" className="h-auto w-44 max-w-full" />
      </div>
      <p className="mt-3 text-sm text-[#C3D4CA]">Experiments are conducted as external users at the NSF NHERI University of Florida Boundary Layer Wind Tunnel.</p>
    </Panel>
    <Panel id="uav" label="Field observation / Aerial platforms" title="UAV and Aerial Sensing" description="Select a drone to compare thermal imaging, visible-light imaging, and payload options for field research.">
      <DroneExplorer />
    </Panel>
    <Panel id="thermal" label="Thermal diagnostics" title="Thermal Imaging" description="Handheld and UAV-based thermal observations support building envelope assessment, surface-temperature studies, and model validation. The FLIR E76 handheld camera complements our thermal-capable UAV platforms.">
      <HandheldThermal />
      <ImageGallery label="Thermal and visible-light comparison" images={[
        [`${facility}DJI_20260722103623_0004_T.JPG`, "Drone-captured thermal image", "The infrared view shows differences in apparent surface temperature across the scene."],
        [`${facility}DJI_20260722103617_0003_W.JPG`, "Drone-captured visible-light image", "The visible-light view helps identify the people, building, and ground surfaces seen in the thermal image."],
      ]} />
      <section id="rhodes-thermal-survey" className="mt-6 scroll-mt-28">
        <h3 className="text-lg font-semibold">Rhodes Tower Aerial Survey</h3>
      <ImageGallery label="Rhodes Tower aerial survey" images={[
        [`${import.meta.env.BASE_URL}research/rhodes-drone.jpg`, "Drone surveying Rhodes Tower", "The aerial platform gives the team a view of the upper façade from outside the building."],
        [`${import.meta.env.BASE_URL}research/rhodes-controller.jpg`, "Controller view of Rhodes Tower", "The live camera feed helps the operator frame the façade during the survey."],
        [`${import.meta.env.BASE_URL}research/rhodes-thermal.jpg`, "Aerial thermogram of the Rhodes Tower façade", "The thermogram shows variation in apparent surface temperature across the façade."],
      ]} />
      </section>
    </Panel>
    <Panel id="weather" label="In situ observations" title="Weather and Environmental Monitoring" description="Environmental monitoring resources include weather stations, sonic wind sensors, temperature measurements, and field instrumentation. Tellus and Clarity sensors extend our environmental observation capabilities.">
      <ImageGallery label="Weather monitoring images" images={[
        [`${facility}Weather Sensor-EC.jpg`, "Environmental monitoring", "Rooftop observations help characterize local wind and weather conditions."],
        [`${facility}Weather Sensor-PS.jpg`, "Weather sensor setup", "A sonic anemometer and shielded sensor are mounted above the rooftop."],
        [`${facility}Weather Sensor-SC.jpg`, "Sensor calibration", "The setup supports comparisons of sensor readings before deployment."],
      ]} />
      <section id="sensor-calibration" className="mt-6 scroll-mt-28 rounded-xl border border-white/10 bg-[#07100D] p-5">
        <h3 className="text-lg font-semibold">Weather Sensor Calibration and Installation</h3>
        <dl className="mt-4 grid gap-4 text-sm leading-6 md:grid-cols-3">
          <div><dt className="font-semibold text-[#83D9BD]">Sensor setup</dt><dd>Rooftop weather stations and sonic anemometers support wind and temperature observations.</dd></div>
          <div><dt className="font-semibold text-[#83D9BD]">Calibration</dt><dd>Collocate sensors for comparison and check timestamps, units, and measurement consistency before deployment.</dd></div>
          <div><dt className="font-semibold text-[#83D9BD]">Field installation</dt><dd>Document mounting height, orientation, nearby obstructions, and maintenance to support interpretation of the data.</dd></div>
        </dl>
      </section>
    </Panel>
    <Panel id="computing" label="Computational infrastructure" title="High-Performance Computing and Simulation" description="Laboratory workstations and access to university and external research computing resources support CFD, reduced-order modeling, multi-fidelity surrogate modeling, and scientific machine learning.">
      <Computing />
    </Panel>
    <Panel id="vr" label="Scientific visualization / Education" title="Virtual Reality and Interactive Demonstrations" description="Immersive visualization brings field observations and numerical simulation into engineering education. Explore our weather-sensor environment and CFD flow visualization through these recorded demonstrations.">
      <div className="grid gap-5 lg:grid-cols-2">
        <VideoCard file="weather-sensors-vr.mp4" title="CSU Weather Sensors VR Demonstration" description="An immersive demonstration of campus weather sensors and environmental monitoring." />
        <VideoCard file="cfd-vr.mp4" title="CFD–VR Flow Visualization" description="Simulation-based airflow visualization for engineering research and education." />
      </div>
    </Panel>
  </div>
  <section className="mt-12 rounded-3xl border border-[#42C9A3]/20 bg-[#0D1C19] p-7 sm:p-9">
    <h2 className="text-2xl font-bold">Collaborative Research and Applied Projects</h2>
    <p className="mt-4 text-[16px] leading-8 text-[#C3D4CA]">Our experimental, field, and computational capabilities support collaborative research, model validation, environmental assessment, and engineering studies.</p>
    <a href="/contact" className="mt-6 inline-block rounded-full border border-[#83D9BD]/60 px-5 py-2.5 font-semibold hover:bg-white/10">Contact the Lab</a>
  </section>
</div>;
export default SectionWrapper(Equipment, "equipment");
