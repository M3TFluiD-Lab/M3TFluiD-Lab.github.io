
import React from "react";

const talks = [
  {
    title:
      "Synergistic Urban Environmental Modeling: From Microclimate Dynamics to Community Resilience",
    event:
      "ASME Rising Stars of Mechanical Engineering Celebration and Showcase",
    location: "IMECE 2026, Vancouver, Canada",
    date: "November 10, 2026",
    status: "Upcoming",
    description:
      "Invited poster presentation highlighting research in urban environmental modeling and community resilience.",
  },
  {
    title:
      "From Buildings to Communities: Bridging Physics, Data, and Design Through Multiscale Modeling of the Built Environment",
    event:
      "National Center for Atmospheric Research (NCAR)",
    location: "Boulder, Colorado",
    date: "September 2026",
    description:
      "Invited research seminar on multiscale modeling of the built environment, combining computational and experimental fluid dynamics with data-driven approaches.",
  },
  {
    title:
      "From Buildings to Communities: Bridging Physics, Data, and Design Through Multiscale Modeling of the Built Environment",
    event:
      "Department of Mechanical Engineering, San Diego State University",
    location: "San Diego, California",
    date: "April 2026",
    description:
      "Invited seminar discussing multiscale modeling approaches and their applications to buildings and urban environments.",
  },
  {
    title:
      "Advancing Resilient and Sustainable Urban Infrastructure: Interdisciplinary Modeling & Simulation",
    event: "OAS Conference and Tradeshow",
    location: "Cleveland, Ohio",
    date: "February 2025",
    description:
      "Invited presentation on interdisciplinary modeling and simulation for sustainable urban infrastructure.",
  },
];

export default function SelectedTalks() {
  return (
    <section
      id="selected-talks"
      className="mt-16 border-t border-white/10 pt-12"
    >
      <h2 className="text-3xl font-bold">
        Selected Invited Talks and Presentations
      </h2>

      <div className="mt-7 divide-y divide-white/10">
        {talks.map((talk) => (
          <article
            key={`${talk.event}-${talk.date}`}
            className="py-6 first:pt-0"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[17px] font-semibold leading-7 text-white">
                {talk.title}
              </h3>

              {talk.status && (
                <span className="rounded-full border border-[#79DDB9]/30 px-2.5 py-1 text-xs text-[#79DDB9]">
                  {talk.status}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-[#79DDB9]">
              {talk.event}
            </p>

            <p className="mt-1 text-sm text-secondary">
              {talk.location} | {talk.date}
            </p>

            <p className="mt-3 max-w-4xl text-[15px] leading-7 text-secondary">
              {talk.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
