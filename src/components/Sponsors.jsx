import React from "react";
import { SectionWrapper } from "../hoc";
import { sponsors } from "../constants";

const renderSponsors = () => {
  return sponsors.map(({ name, icon }) => (
    <div
      className="w-80 h-80 border-2 border-white bg-white rounded-lg flex items-center justify-center"
      key={name}
    >
      <img
        src={icon}
        alt={name}
        className="object-contain w-60 h-60"
        loading="lazy"
      />
    </div>
  ));
};

const Sponsors = () => (
  <div className="mt-20 text-center">
    <h2 className="text-white text-[48px] font-bold mb-10">Sponsors</h2>
    <div className="flex flex-row flex-wrap justify-center gap-12">
      {renderSponsors()}
    </div>
  </div>
);

const WrappedSponsors = SectionWrapper(Sponsors, 'sponsors');

export default WrappedSponsors;