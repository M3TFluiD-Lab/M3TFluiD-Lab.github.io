import React from "react";

import { softwareGroups } from "../constants";

export default function SoftwarePackages() {
  return (
    <section aria-labelledby="software-heading" className="mt-6 rounded-2xl border border-white/10 bg-[#07100D] p-5 sm:p-6">
      <h3 id="software-heading" className="text-lg font-semibold text-white">Simulation and Scientific Software</h3>
      <p className="mt-3 text-[15px] leading-7 text-[#C3D4CA]">Software used across our computational research, model development, and engineering training.</p>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {softwareGroups.map(group => (
          <div key={group.title} className="rounded-xl border border-white/10 p-4">
            <h4 className="text-[16px] font-semibold text-[#66CDA8]">{group.title}</h4>
            <ul className="mt-4 space-y-4">
              {group.items.map(item => (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#66CDA8]">
                    <span className="flex h-12 w-20 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                      <img src={item.icon} alt="" loading="lazy" className="max-h-8 w-full object-contain" />
                    </span>
                    <span className="min-w-0"><span className="block text-[15px] font-semibold text-white">{item.name}</span><span className="mt-1 block text-[13px] leading-6 text-[#C3D4CA]">{item.use}</span></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
