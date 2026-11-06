// src/constants/index.js
import {
  img1,
  img3,
  MFSM,
  ROM,
  CFDBEM,
  Maede,
  Shivesh,
  logo,
  OpenFOAM,
  Ansys,
  WRF,
  TF,
  PyTorch,
  DOE,
  DOED,
  EPRI,
  NCDOT,
  NCROP,
  NPS,
  NSF,
  ONR,
  MIPS,
  GSRA,
  Microgrid,
} from "../assets";

/* ------------------------------- NAV LINKS ------------------------------- */
export const siteNavigation = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Team" },
  { to: "/research", label: "Research" },
  { to: "/education", label: "Experiential Learning" },
  { to: "/publications", label: "Publications" },
  { to: "/facilities", label: "Facilities" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact", button: true },
];

// Compatibility export. Navigation is maintained in siteNavigation above.
export const navLinks = siteNavigation.map(({ to, label }) => ({
  id: to === "/" ? "home" : to.slice(1), title: label, to,
}));

/* -------------------------------- SERVICES ------------------------------- */
export const services = [
  { title: "Neighborhood", icon: img1 },
  { title: "High-Rise Building", icon: img3 },
];

/* -------------------------------- MEMBERS -------------------------------- */

export const members = [
  {
    name: "Dr. Navid Goudarzi",
    email: "n.goudarzi@csuohio.edu",
    role: "Principal Investigator (PI)",
    affiliation: "Assistant Professor, Mechanical Engineering, Cleveland State University",
    additionalRole: "Co-Director, Center for Integrated Modeling for Energy, Resiliency, and Sustainability (IERS)",
    additionalRoleUrl: "https://academic.csuohio.edu/iers-center/",
    bio: "Dr. Navid Goudarzi leads the M³TFluiD Lab and co-directs the IERS Center at Cleveland State University. An NSF CAREER recipient, he brings more than 15 years of interdisciplinary research and project leadership across academia, industry, and government. His work combines experiments, physics-based simulation, multi-fidelity surrogate modeling, and scientific machine learning to understand interacting fluid, thermal, and energy systems across scales. He works with partners on applied problems in urban environments, energy, manufacturing, and advanced air mobility, connecting component-level physics with system-level performance and practical engineering decisions.",
    projects: [
      "MFSM",
      "ROM-ML",
      "UMC-BEM/BIM-ML",
      "Microgrids",
      "AAM",
      "AirQuality",
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/navid-goudarzi-4656b761/",
      scholar:
        "https://scholar.google.com/citations?user=F3_tTU4AAAAJ&hl=en",
    },
    profile_url: "",
  },



  {
    name: "Maede Najian",
    email: "m.najian@vikes.csuohio.edu",
    role: "PhD Candidate",
    expectedGraduation: "December 2027",
    projects: ["UMC-BEM/BIM-ML", "AirQuality"],
    image: Maede,
  },

  {
    name: "Shivesh Sharma",
    email: "s.n.sharma@vikes.csuohio.edu",
    role: "PhD Candidate",
    expectedGraduation: "December 2027",
    projects: ["ROM-ML", "AAM"],
    image: Shivesh,
  },

  {
    name: "Brian Kohut",
    role: "PhD Candidate",
    expectedGraduation: "May 2028",
    projects: [
      "Data Assimilation",
      "Modeling & Simulation",
      "Scientific Discovery",
    ],
      image: "/brian-kohut.png",
  },
  {
    name: "Lokesh Kantam",
    role: "MSc Student",
    projects: [],
    image: "",
  },
  {
    name: "Khushbuben Barot",
    role: "MSc Student (Co-advised)",
    projects: ["Virtual Reality (VR)"],
    image: "/khushbuben-barot.png",
  },
  {
  name: "Julio Mendez",
  role: "Research Associate",
  projects: [
    "Computational Fluid Dynamics",
    "Chemical Vapor Deposition",
    "Multiphysics Modeling",
  ],
  image: "/Julio-Mendez.png",
},
  {
    name: "Eman Hassan",
    role: "Research Associate",
    projects: [
      "Computational Fluid Dynamics",
      "Chemical Vapor Deposition",
    ],
    image: `${import.meta.env.BASE_URL}eman-hassan.png`,
  },
];

/* -------------------------------- PROJECTS ------------------------------- */
/* Short card-ready descriptions (6 cards) */
export const projects = [
  // ——— FOUNDATIONAL ———
  {
    name: "Multi‑Fidelity Surrogate Modeling (MFSM)",
    description:
      "MFSM blends low‑ and high‑fidelity CFD with physics‑informed ML for fast, interpretable prediction of local turbulent flow and wind loads. Current studies include non‑homogeneous inflow, single‑tower and cluster layouts, and validation against BLWT pressure‑tap data.",
    tags: [
      { name: "CFD", color: "blue-text-gradient" },
      { name: "PIML", color: "green-text-gradient" },
      { name: "OpenFOAM", color: "green-text-gradient" },
    ],
    image: MFSM,
  },
  {
    name: "Integrated ROM–ML for Flow Fields",
    description:
      "ROM combines dimensionality and model‑reduction methods (POD/DMD/SPOD) with ML to reconstruct, forecast, and compress flow fields efficiently while preserving coherent structures and key physics.",
    tags: [
      { name: "POD/DMD/SPOD", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "MATLAB", color: "green-text-gradient" },
    ],
    image: ROM,
  },
  {
    name: "UMC–BEM/BIM–ML Integration",
    description:
      "Couples urban microclimate (UMC) CFD with BEM/BIM workflows (Ladybug/Honeybee/Butterfly) and ML to study heat waves, ventilation, and comfort. Supports multi‑scale studies from single buildings to dense neighborhoods.",
    tags: [
      { name: "BEM/BIM", color: "blue-text-gradient" },
      { name: "OpenFOAM", color: "green-text-gradient" },
      { name: "LB‑HB‑BF", color: "green-text-gradient" },
    ],
    image: CFDBEM,
  },

  // ——— APPLIED ———
  {
    name: "Microgrid Planning & Energy Systems",
    description:
      "System‑level analysis for hybrid wind–solar microgrids with stochastic demand and weather. Techno‑economic assessment, siting, and sizing with uncertainty quantification for resilient, high‑efficiency operation.",
    tags: [
      { name: "EnergySystems", color: "blue-text-gradient" },
      { name: "UQ", color: "green-text-gradient" },
      { name: "Optimization", color: "green-text-gradient" },
    ],
    image: Microgrid,
  },
  {
    name: "Advanced Air Mobility (AAM) & Wind Hazards",
    description:
      "Local wind‑aware routing and waypoint planning for AAM/UAVs under isothermal conditions, using CFD and ROM‑ML surrogates to characterize profiles, gusts, and wake interactions for safe operations.",
    tags: [
      { name: "ANSYS", color: "blue-text-gradient" },
      { name: "UAV/AAM", color: "green-text-gradient" },
      { name: "ROM‑ML", color: "green-text-gradient" },
    ],
    image: logo,
  },
  {
    name: "Air Quality & Emissions with Sensor Fusion",
    description:
      "Integrates satellite products with ground sensor networks and CFD/ROM to infer urban dispersion and exposure. Supports interactive DT/VR maps for campus‑ and city‑scale decision support.",
    tags: [
      { name: "AirQuality", color: "blue-text-gradient" },
      { name: "Sensors+Sat", color: "green-text-gradient" },
      { name: "DT/VR", color: "green-text-gradient" },
    ],
    image: logo,
  },
];


/* ------------------------------- TECHNOLOGIES ---------------------------- */
const softwareAsset = (filename) => `${import.meta.env.BASE_URL}software/${filename}`;

export const softwarePackages = [
  {
    id: "ansys", name: "ANSYS Fluent", icon: Ansys,
    href: "https://www.ansys.com/products/fluids/ansys-fluent",
    category: "CFD & heat transfer", use: "Fluid flow and heat-transfer simulation",
    showInFacilities: true, technologyOrder: 1, technologyLabel: "Ansys",
  },
  {
    id: "openfoam", name: "OpenFOAM", icon: OpenFOAM,
    href: "https://openfoam.org/",
    category: "CFD & heat transfer", use: "Open-source CFD and turbulence modeling",
    showInFacilities: true, technologyOrder: 0,
  },
  {
    id: "matlab", name: "MATLAB", icon: softwareAsset("matlab.svg"),
    href: "https://www.mathworks.com/products/matlab.html",
    category: "Scientific computing", use: "Numerical methods and data analysis",
    showInFacilities: true,
  },
  {
    id: "python", name: "Python", icon: softwareAsset("python.png"),
    href: "https://www.python.org/",
    category: "Scientific computing", use: "Scientific computing and automation",
    showInFacilities: true,
  },
  {
    id: "pytorch", name: "PyTorch", icon: PyTorch,
    href: "https://pytorch.org/",
    category: "Scientific machine learning", use: "Learning-based surrogate models and reconstruction",
    showInFacilities: true, technologyOrder: 3,
  },
  {
    id: "energyplus", name: "EnergyPlus", icon: softwareAsset("energyplus.png"),
    href: "https://energyplus.net/",
    category: "Building energy & power systems", use: "Building energy and thermal simulation",
    showInFacilities: true,
  },
  {
    id: "etap", name: "ETAP", icon: softwareAsset("etap.svg"),
    href: "https://etap.com/",
    category: "Building energy & power systems", use: "Electrical systems and microgrid analysis",
    showInFacilities: true,
  },
  // Retain these existing technology entries without adding new Facilities claims.
  {
    id: "wrf", name: "WRF", icon: WRF, href: "https://www.mmm.ucar.edu/models/wrf",
    category: "Atmospheric modeling", showInFacilities: false, technologyOrder: 2,
  },
  {
    id: "tensorflow", name: "TensorFlow", icon: TF, href: "https://www.tensorflow.org/",
    category: "Scientific machine learning", showInFacilities: false,
    technologyOrder: 4, technologyLabel: "TF",
  },
];

export const softwareGroups = softwarePackages
  .filter((item) => item.showInFacilities)
  .reduce((groups, item) => {
    let group = groups.find((entry) => entry.title === item.category);
    if (!group) {
      group = { title: item.category, items: [] };
      groups.push(group);
    }
    group.items.push(item);
    return groups;
  }, []);

// Backward-compatible data for components/Tech.jsx; no second software list.
export const technologies = softwarePackages
  .filter((item) => Number.isInteger(item.technologyOrder))
  .sort((a, b) => a.technologyOrder - b.technologyOrder)
  .map((item) => ({ name: item.technologyLabel || item.name, icon: item.icon }));

/* ------------------------------- PUBLICATION ----------------------------- */

export const publications = [
  // Journal articles
  {
    year: 2026,
    type: "journal",
    title:
      "Morphology–flow coupling in urban microclimates: A parametric framework for local wind behavior around high-rise buildings",
    authors: "Mortazavian, J. and Goudarzi, N.",
    venue: "Computational Urban Science, 6(1), Article 35",
    url: "https://doi.org/10.1007/s43762-026-00262-9",
  },
  {
    year: 2025,
    type: "journal",
    title:
      "Urban density and pedestrian wind comfort in hot-arid climates: Insights for climate-resilient city planning",
    authors: "Najian, M. and Goudarzi, N.",
    venue: "Energy for Sustainable Development, 88, Article 101776",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0973082625001267",
  },
  {
    year: 2021,
    type: "journal",
    title:
      "Airflow and thermal comfort evaluation of a room with different outlet opening sizes and elevations ventilated by a two-sided wind catcher",
    authors:
      "Goudarzi, N., Sheikhshahrokhdehkordi, M., Khalesi, J. and Hosseiniirani, S.",
    venue: "Journal of Building Engineering, 37, Article 102112",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S235271022033744X",
  },
  {
    year: 2020,
    type: "journal",
    title:
      "Wind resource assessment and economic viability of conventional and unconventional small wind turbines: A case study of Maryland",
    authors: "Goudarzi, N., Mohammadi, K., Pé, A. S., Delgado, R. and Zhu, W.",
    venue: "Energies, 13(22), Article 5874",
    url: "https://www.mdpi.com/1996-1073/13/22/5874",
  },

  // Conference papers
  /*
  Add these two records when their publication details are confirmed.
  {
    year: 2026,
    type: "conference",
    title:
      "Generative reduced-order modeling for geometry-generalizable wind-pressure field prediction",
    authors: "Sharma, S., Goudarzi, N. and Tao, Y.",
    venue: "ASME International Mechanical Engineering Congress and Exposition (IMECE), Vancouver, Canada",
  },
  {
    year: 2026,
    type: "conference",
    title:
      "Simulation-based learning for sustainability modeling coursework in an urban university",
    authors: "Barot, K., Liu, X., Kalatzis, A. and Goudarzi, N.",
    venue: "ASME International Mechanical Engineering Congress and Exposition (IMECE), Vancouver, Canada",
  },
  */
  {
    year: 2025,
    type: "conference",
    title:
      "Thermal performance assessment of LEED and non-LEED buildings via aerial and handheld infrared thermography",
    authors: "Najian, M. and Goudarzi, N.",
    venue:
      "ASME International Mechanical Engineering Congress and Exposition (IMECE), Vol. 89404, Paper V009T17A005",
  },
  {
    year: 2025,
    type: "conference",
    title: "A surrogate model for urban wind flow prediction around a high-rise building",
    authors: "Mortazavian, J. and Goudarzi, N.",
    venue:
      "ASME International Mechanical Engineering Congress and Exposition (IMECE), Vol. 89404, Paper V009T17A010",
  },
  {
    year: 2025,
    type: "conference",
    title:
      "High-fidelity urban wind flow modeling for safe and efficient UAM operations supporting power infrastructure inspection",
    authors: "Sharma, S. and Goudarzi, N.",
    venue:
      "ASME International Mechanical Engineering Congress and Exposition (IMECE), Vol. 89404, Paper V009T17A012",
  },
  {
    year: 2024,
    type: "conference",
    title: "Effect of non-isothermal conditions on wind patterns near isolated high-rise buildings",
    authors: "Najian, M., Sharma, S. and Goudarzi, N.",
    venue: "ASME Power Conference, Vol. 88186, Paper V001T06A009",
  },
  {
    year: 2024,
    type: "conference",
    title:
      "Urban wind energy assessment near high-rise buildings within different urban morphology: Insights from CFD and POD",
    authors: "Mortazavian, J., Sharma, S. and Goudarzi, N. (corresponding author)",
    venue: "ASTFE Digital Library, Begell House",
  },
  {
    year: 2024,
    type: "conference",
    title: "Multi-fidelity machine learning analysis of wind patterns around high-rise buildings",
    authors: "Mortazavian, J. and Goudarzi, N.",
    venue: "ASME Power Conference, Vol. 88186, Paper V001T06A008",
  },
];


/* --------------------------------- NEWS ---------------------------------- */
export const news = [
  {
    title: "Shivesh Narayan Sharma receives 2026 GSRA",
    description: "Shivesh received a Graduate Student Research Award to develop a campus-scale wind digital twin at Cleveland State University. The project combines drone measurements, CFD, and reduced-order modeling to reconstruct and predict campus wind fields.",
    image: GSRA,
    tags: ["GSRA2026", "UrbanWind"],
  },
  {
    title: "Maede Najian receives 2025 GSRA",
    description: "Maede received a Graduate Student Research Award from Cleveland State University’s University Research Council. Her project incorporates neighborhood microclimate into building energy models to support urban climate adaptation.",
    image: GSRA,
    tags: ["GSRA2025", "BuildingEnergy"],
  },
  {
    title: "Javad Mortazavian receives 2025 GSRA",
    description: "Javad received GSRA funding to develop multi-fidelity surrogate models for predicting neighborhood-scale wind patterns.",
    image: GSRA,
    tags: ["GSRA2025", "UrbanWind"],
  },
  {
    title: "Maede Najian named 2025 FED Honorary Graduate Return Scholar",
    description:
      "ASME recognized Maede at FEDSM 2025 in Philadelphia. Her research compares the thermal performance of LEED and non-LEED buildings using aerial and handheld infrared thermography.",
    image: `${import.meta.env.BASE_URL}images/news/maede-fedsm-2025.webp`,
    imageAlt: "Maede Najian’s 2025 FED Honorary Graduate Return Scholar certificate",
    tags: ["FEDSM2025", "Thermography"],
  },
  {
    title: "Maede Najian receives Best Paper recognition at ASME FEDSM 2024",
    description: "Maede received Best Paper recognition in Anaheim for research on how urban heat islands, heat waves, and climate zones affect building energy performance. Her certificate identifies her as a FED 2024 GSS Scholar–FASTC.",
    image: `${import.meta.env.BASE_URL}images/news/maede-fedsm-2024.webp`,
    imageAlt: "Maede Najian’s ASME FED 2024 GSS Scholar certificate",
    tags: ["FEDSM2024", "BuildingEnergy"],
  },
];

/* -------------------------------- SPONSORS -------------------------------- */
// Sponsors
export const sponsors = [
  { name: "NSF", icon: NSF, tier: "federal" },
  { name: "DOE", icon: DOE, tier: "federal" },
  { name: "DOED", icon: DOED, tier: "federal" },
  { name: "ONR", icon: ONR, tier: "federal" },

  {
    name: "AFRL",
    icon: "/afrl-logo.png",
    tier: "federal",
  },

  { name: "EPRI", icon: EPRI, tier: "industry" },
  { name: "NPS", icon: NPS, tier: "state" },
  { name: "NCDOT", icon: NCDOT, tier: "state" },
  { name: "NCROP", icon: NCROP, tier: "state" },
  { name: "MIPS", icon: MIPS, tier: "state" },

  {
    name: "OFRN",
    icon: "/ofrn-logo.png",
    tier: "state",
  },
];

/* --------------------- CSU MENTORING AND EDUCATION ---------------------- */
// Based on the PI's corrected November 2026 list. Counts are not additive:
// a student may appear in a prior committee role and later direct advising.
export const mentoringSummary = {
  period: "2021–present",
  updated: "November 2026",
  graduate: [
    { id: "phd", title: "PhD students advised", total: 4, ongoing: 2, past: 0 },
    { id: "msc", title: "Master’s students advised", total: 17, ongoing: 2, past: 5 },
    { id: "committee", title: "Graduate co-advising & committees", total: 16, ongoing: 2, past: 5 },
  ],
  researchers: 2,
  undergraduateResearch: { period: "2022–2026", past: 38 },
};

export const educationProjects = [
  {
    id: "mecc", title: "Team CLE Energy: Clean Lake Erie Energy",
    period: "AY 2026–27", status: "Ongoing", participants: 3,
    context: "DOE Marine Energy Collegiate Competition 2027",
    description: "An interdisciplinary CSU–Baldwin Wallace University team working on marine energy system modeling, design, and techno-economic assessment.",
    skills: ["Marine energy", "System design", "Techno-economic assessment"],
  },
  {
    id: "hercules", title: "Computational Modeling of CVD Reaction Mechanisms",
    period: "AY 2026–27", status: "Ongoing", participants: 6,
    context: "AFRL HERCULES / Mechanical & Chemical Engineering",
    description: "An interdisciplinary design team studying chemical reactions and transport in chemical vapor deposition through CFD modeling.",
    skills: ["Reacting flows", "CFD", "Advanced manufacturing"],
  },
  {
    id: "etap", title: "Hybrid Energy Systems for EV Charging",
    period: "AY 2026–27", status: "Ongoing", participants: 2,
    context: "ETAP-based modeling and optimization",
    description: "Student modeling of hybrid wind–solar energy systems for EV charging, with applications in distributed energy systems.",
    skills: ["ETAP", "Wind–solar systems", "Optimization"],
  },
  {
    id: "hybrid-ev", title: "Hybrid EV Charging Station",
    period: "AY 2024–25", status: "Past project", participants: 3,
    context: "Renewable energy system design",
    description: "Design and development of hybrid renewable energy systems for EV charging stations.",
    skills: ["Renewable energy", "Engineering design", "EV charging"],
  },
];

export const educationActivities = [
  {
    title: "Public Interest Technology", label: "PIT / experiential learning",
    description: "Participation in CSU initiatives connecting technology, community needs, engineering education, and workforce pathways.",
  },
  {
    title: "Ohio Academy of Science", label: "Science engagement",
    description: "Engagement with the Ohio Academy of Science as part of the PI’s broader educational and outreach activities.",
  },
  {
    title: "K–12 & Teacher Engagement", label: "Engineering pathways",
    description: "Hands-on engineering experiences and teacher professional development involving environmental measurements, thermal imaging, drones, and scientific visualization.",
  },
];


// Education program records are maintained here, alongside the existing team data.
export const chooseOhioFirstProjects = [
 {period: "2026–27", title: "HVAC Efficiency", group: "Group 32", students: ["Gellert Leszko", "Alyce Boyers", "Lillian Mull", "Madison Eaton"], description: "Student research on HVAC efficiency, supported through project planning, progress discussions, and technical mentoring."},
 {period: "2025", title: "The Evolution of Home Insulation: A Century of Advancements", students: ["Malik Husein", "Andrew Earls", "Seif Al Din Husein", "Lance Lease"], description: "A review of insulation materials, thermal resistance, building energy efficiency, and environmental considerations.", poster: "education/cof-insulation-2025.pdf", preview: "education/cof-insulation-2025.jpg"},
];
export const asmeBoards = [
 {period: "2026–27", officers: [["President", "Adam Ricco"], ["Vice President", "Lex Krupa"], ["Treasurer", "Andie Babcock"], ["Secretary", "Jumana Abdelghani"]]},
 {period: "2025–26", officers: [["President", "Rosalie Carlberg"], ["Vice President", "Carmen LoConti"], ["Treasurer", "Chelsea Miller"], ["Secretary", "Lexi Saase"]]},

 {
  period: "2024–25",
  officers: [
    ["President", "Shivesh Sharma"],
    ["Vice President", "Olamide Opadokun"],
    ["Secretary", "Maede Najian"],
    ["Treasurer", "Javad (Arya) Mortazavian"],
  ],
},
 {period: "2023–24", officers: [["Officer", "Kyle E. Borsuk"], ["Officer", "Concetta N. Salvia"]], partial: true},
];
export const reuHighlights = [
 {year: "2023", title: "Sustainability metrics for green alternatives", url: "https://engineering.csuohio.edu/glwind_reu/summer-2023-highlights"},
 {year: "2024", title: "Urban weather sensing and AI-supported wind prediction", url: "https://engineering.csuohio.edu/glwindreu/summer-2024-highlights"},
 {year: "2025", title: "Airfoil optimization and satellite–ground wind estimation", url: "https://engineering.csuohio.edu/glwindreu/summer-2025-highlights"},
];
export const highSchoolEngagement = {cohorts: 2, individualMentees: 2};
export const handheldThermal = {model: "FLIR E76", resolution: "320 × 240 infrared pixels", lenses: "24°, 42°, and 80° lenses", software: "FLIR Thermal Studio", image: "facilities/flir-e76.png", source: "https://www.flir.com/products/e76/"};
