import {
  img1,
  img3,
  MFSM,
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
