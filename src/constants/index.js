import {
  img1,
  img3,
  MFSM,
  ROM,
  Javad,
  Navid,
  Maede,
  Shivesh,
  logo,
  edunet,
  mathwork,
  eduskill,
  OpenFOAM,
  Ansys,
  WRF,
  TF,
  PyTorch,
  DOD,
  DOE,
  EPRI,
  NCDOT,
  NCROP,
  NPS,
  NSF,
  ONR,
  MIPS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "research",
    title: "Research",
  },
  {
    id: "publications",
    title: "Publications",
  },
  {
    id: "sponsors",
    title: "Sponsors",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Neighborhood", icon: img1 },
  { title: "High-Rise Building", icon: img3},

];


export const members = [
  {
    name: "Dr. Navid Goudarzi",
    email: "n.goudarzi@csuohio.edu",
    description:
      "Role: PI",
    tags: [
      { name: "Urban Microclimate", color: "blue-text-gradient" },
      { name: "Energy Efficiency", color: "green-text-gradient" },
      { name: "Building Energy Modeling", color: "green-text-gradient" },
    ],
    image: Navid,
    //source_code_link: "https://javad-mortazavian.github.io/",
  },
  {
    name: "Javad Mortazavian",
    email: "s.mortazaviannajafabadi@vikes.csuohio.edu",
    description:
      "I am a PhD Candidate in M³TFluid Lab. My research focuses on developing a multi-fidelity surrogate model for predicting wind loads on high-rise buildings using CFD and ML/DL.",
    tags: [
      { name: "CFD", color: "blue-text-gradient" },
      { name: "SciML", color: "green-text-gradient" },
      { name: "Surrogate Modeling", color: "green-text-gradient" },
    ],
    image: Javad,
    source_code_link: "https://javad-mortazavian.github.io/",
  },
  {
    name: "Maede Najian",
    email: "m.najian@vikes.csuohio.edu",
    description:
      "I am a PhD Candidate in M³TFluid Lab. My research focuses on building energy modeling and urban microclimate using CFD and BEM.",
    tags: [
      { name: "CFD", color: "blue-text-gradient" },
      { name: "WRF", color: "green-text-gradient" },
      { name: "Building Energy Modeling", color: "green-text-gradient" },
    ],
    image: Maede,
    //source_code_link: "https://javad-mortazavian.github.io/",
  },

  {
    name: "Shivesh Sharma",
    email: "s.n.sharma@vikes.csuohio.edu",
    description:
      "I am a PhD Candidate in M³TFluid Lab. My research focuses on developing ROM models for Urban Air Mobility using CFD and ML/DL.",
    tags: [
      { name: "CFD", color: "blue-text-gradient" },
      { name: "ROM", color: "green-text-gradient" },
      { name: "Urban Air Mobility", color: "green-text-gradient" },
    ],
    image: Shivesh,
    //source_code_link: "https://javad-mortazavian.github.io/",
  },
];

export const projects = [
  {
    name: "Multi-Fidelity Surrogate Modeling (MFSM) and Real-Time Prediction",
    description:
      "We explore hybrid modeling frameworks that combine a wide range of low-fidelity models with a selected number of high-fidelity simulations, enhanced through physics-informed machine learning. These tools provide fast, scalable, and interpretable predictions for dynamic flow environments, enabling near-real-time control and design optimization. We also integrate digital twin concepts to support continuously updating simulations that reflect real-world dynamics.",
    tags: [
      { name: "OpenFOAM", color: "blue-text-gradient" },
      { name: "AI/ML", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
    ],
    image: MFSM,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Reduced-Order Modeling and Data-Driven Workflows",
    description:
      "We apply dimensionality reduction techniques and model reduction strategies to construct surrogate models that preserve essential physical behavior while improving computational efficiency. These approaches accelerate design cycles and expand simulation accessibility for interdisciplinary applications.",
    tags: [
      { name: "ANSYS", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "MATLAB", color: "green-text-gradient" },
      { name: "TF", color: "green-text-gradient" },
    ],
    image: ROM,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Heat Transfer and Energy Systems Analysis",
    description:"Our work includes modeling and analysis of convective, conductive, and radiative heat transfer phenomena in complex geometries. Using tools like GIS and WRF, we explore spatially informed environmental dynamics for building envelope studies, HVAC optimization, and energy efficiency evaluations across multiple scales.",
     tags: [
      { name: "GIS", color: "blue-text-gradient" },
      { name: "WRF", color: "green-text-gradient" },
    ],
    image: logo,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },

  {
    name: "Aerothermal Systems and Advanced Mobility Platforms",
    description:" We explore fluid-thermal interactions in emerging transportation systems such as UAVs and urban air mobility vehicles. Our research supports aerodynamic optimization, thermal protection strategies, and energy-aware design of high-performance mobility technologies. Enhanced visualization capabilities, including VR/AR integration, are used to interpret complex simulation data and improve design feedback loops.",
     tags: [
      { name: "VR/AR", color: "blue-text-gradient" },
      { name: "UAV", color: "green-text-gradient" },
    ],
    image: logo,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Local Turbulent Flow and Thermal Interaction Modeling",
    description:" We create multiscale models for local turbulent flow and thermal interactions across built environments and vegetated urban landscapes. Our work enables high-resolution assessments of local atmospheric dynamics and emission physics to inform architectural design, urban transportation planning, and air quality management.",
     tags: [
      { name: "Air Quality", color: "blue-text-gradient" },
      { name: "Vegetated Urban Landscapes", color: "green-text-gradient" },
    ],
    image: logo,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },

];

export const technologies = [
  { name: "OpenFOAM", icon: OpenFOAM },
  { name: "Ansys", icon: Ansys },
  { name: "WRF", icon: WRF },
  { name: "PyTorch", icon: PyTorch },
  { name: "TF", icon: TF },
];

export const publications = [
  {
    title: "Urban airflow analysis using reduced-order modeling",
    authors: "Sharma, S.N. and Goudarzi, N.",
    publisher: "ASME Power Conference, Vol. 87172, p. V001T05A001, August 2023. American Society of Mechanical Engineers.",
  },
  {
    title: "Urban Wind Energy Assessment Near High-Rise Buildings within Different Urban Morphology: Insights from CFD and POD",
    authors: "Mortazavian, J., Sharma, S. and Goudarzi, N.",
    publisher: "ASTFE Digital Library, 2024. Begel House Inc.",
  },
  {
    title: "Techno-Economic Assessment of Urban Wind Energy Near Various Common Building Configurations",
    authors: "Mortazavian, J. and Goudarzi, N.",
    publisher: "Fluids Engineering Division Summer Meeting, Vol. 88131, p. V002T05A029, July 2024. American Society of Mechanical Engineers.",
  },
  {
    title: "Multi-Fidelity Machine Learning Analysis of Wind Patterns Around High-Rise Buildings",
    authors: "Mortazavian, J. and Goudarzi, N.",
    publisher: "ASME Power Conference, Vol. 88186, p. V001T06A008, September 2024. American Society of Mechanical Engineers.",
  },
  {
    title: "CFD Analysis for a Wind Tunnel Experiment for Investigating the Performance of Turbulence Models",
    authors: "Najian, M., & Goudarzi, N.",
    publisher: "ASCE Inspire 2023, pp. 895–904.",
  },
  {
    title: "Effect of Non-Isothermal Conditions on Wind Patterns Near Isolated High-Rise Buildings",
    authors: "Najian, M., Sharma, S., & Goudarzi, N.",
    publisher: "ASME Power Conference, Vol. 88186, p. V001T06A009, September 2024. American Society of Mechanical Engineers.",
  },
  {
    title: "Towards Improving High Spatiotemporal Weather Forecast Accuracy With Data-Driven Modeling",
    authors: "Sharma, S., Najian, M., & Goudarzi, N.",
    publisher: "Energy Sustainability, Vol. 87899, p. V001T01A012, July 2024. American Society of Mechanical Engineers.",
  },
  {
    title: "Evaluating critical weather parameters using machine learning models",
    authors: "Najian, M., & Goudarzi, N.",
    publisher: "ASME Power Conference, Vol. 87172, p. V001T04A006, August 2023. American Society of Mechanical Engineers.",
  },
  {
    title: "Sustainable Building Energy Modeling: the Synergistic Interplay of Urban Heat Island, Heat Waves, and Climate Zones",
    authors: "Najian, M., & Goudarzi, N.",
    publisher: "Fluids Engineering Division Summer Meeting, Vol. 88124, p. V001T01A027, July 2024. American Society of Mechanical Engineers.",
  },
];

export const sponsors = [
  { name: "DOD", icon: DOD },
  { name: "DOE", icon: DOE },
  { name: "EPRI", icon: EPRI },
  { name: "MIPS", icon: MIPS },
  { name: "NCDOT", icon: NCDOT },
  { name: "NCROP", icon: NCROP },
  { name: "NPS", icon: NPS },
  { name: "NSF", icon: NSF },
  { name: "ONR", icon: ONR },
];

