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
    name: "Navid",
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
    name: "Javad",
    email: "s.mortazaviannajafabadi@vikes.csuohio.edu",
    description:
      "I am a second-year PhD student in M3TFluid Lab. My research focuses on developing a multi-fidelity surrogate model for predicting wind loads on high-rise buildings using CFD and ML/DL.",
    tags: [
      { name: "CFD", color: "blue-text-gradient" },
      { name: "SciML", color: "green-text-gradient" },
    ],
    image: Javad,
    source_code_link: "https://javad-mortazavian.github.io/",
  },
  {
    name: "Maede",
    email: "m.najian@vikes.csuohio.edu",
    description:
      "I am a second-year PhD student in M3TFluid Lab. My research focuses on building energy modeling and urban microclimate using CFD and BEM.",
    tags: [
      { name: "CFD", color: "blue-text-gradient" },
      { name: "WRF", color: "green-text-gradient" },
      { name: "Building Energy Modeling", color: "green-text-gradient" },
    ],
    image: Maede,
    //source_code_link: "https://javad-mortazavian.github.io/",
  },

  {
    name: "Shivesh",
    email: "s.n.sharma@vikes.csuohio.edu",
    description:
      "I am a second-year PhD student in M3TFluid Lab. My research focuses on developing developing ROM models for Urban Air Mobility using CFD and ML/DL.",
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
