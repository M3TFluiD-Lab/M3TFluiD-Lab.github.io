import React from "react";
import { sponsors } from "../constants";

const groups = [
  { title: "Federal Agencies", includes: ({ tier, name }) => tier === "federal" || name === "NPS" },
  { title: "State and Regional Programs", includes: ({ tier, name }) => tier === "state" && name !== "NPS" },
  { title: "Industry", includes: ({ tier }) => tier === "industry" },
];

export default function Sponsors() {
  return (
    <section aria-labelledby="sponsors-title" className="mx-auto w-full max-w-6xl px-6 py-16 text-white">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#83D9BD]">Research Support</p>
        <h2 id="sponsors-title" className="mt-3 text-3xl font-bold">Sponsors and Research Partners</h2>
      </div>
      {groups.map(({ title, includes }) => (
        <div key={title} className="mt-9">
          <h3 className="text-lg font-semibold text-[#83D9BD]">{title}</h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-4">
            {sponsors.filter(includes).map(({ name, icon }) => (
              <li key={name} className="flex h-28 w-28 items-center justify-center rounded-xl bg-white p-3 sm:h-32 sm:w-32">
                <img src={icon.startsWith("/") ? `${import.meta.env.BASE_URL}${icon.slice(1)}` : icon} alt={name} loading="lazy" className="h-full w-full object-contain" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
