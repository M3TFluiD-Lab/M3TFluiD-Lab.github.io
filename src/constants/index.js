import {
  img1,
  img3,
  MFSM,
  Javad,
  Navid,
  Maede,
  Shivesh,
  edunet,
  mathwork,
  eduskill,
  OpenFOAM,
  Ansys,
  WRF,
  TF,
  PyTorch,
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
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Neighborhood", icon: img1 },
  { title: "High-rise building", icon: img3},

];

export const technologies = [
  { name: "OpenFOAM", icon: OpenFOAM },
  { name: "Ansys", icon: Ansys },
  { name: "WRF", icon: WRF },
  { name: "PyTorch", icon: PyTorch },
  { name: "TF", icon: TF },
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
      "I am a second-year PhD student in M³TFluid Lab. My research focuses on developing a multi-fidelity surrogate model for predicting wind loads on high-rise buildings using CFD and ML/DL.",
    tags: [
      { name: "CFD", color: "blue-text-gradient" },
      { name: "SciML", color: "green-text-gradient" },
    ],
    image: Javad,
    source_code_link: "https://javad-mortazavian.github.io/",
  },
  {
    name: "Maede Najian",
    email: "m.najian@vikes.csuohio.edu",
    description:
      "I am a second-year PhD student in M³TFluid Lab. My research focuses on building energy modeling and urban microclimate using CFD and BEM.",
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
      "I am a second-year PhD student in M³TFluid Lab. My research focuses on developing developing ROM models for Urban Air Mobility using CFD and ML/DL.",
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
    name: "MFSM",
    description:
      "A Multi-Fidelity Surrogate Model for the prediction of wind loads on high-rise buildings using OpenFOAM and PyTorch.",
    tags: [
      { name: "OpenFOAM", color: "blue-text-gradient" },
      { name: "PyTorch", color: "green-text-gradient" },
    ],
    image: MFSM,
   // source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
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

