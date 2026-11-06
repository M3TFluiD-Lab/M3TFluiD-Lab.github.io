
import React from "react";

const posters = [
  {
    title: "Machine Learning-Based Wind Speed Prediction in Urban Environments",
    authors: "Yusra Kalla",
    year: 2026,
    event: "Undergraduate Student Research Award (USRA)",
    image: "/poster/yusra-wind-prediction.jpg",
    file: "/poster/yusra-wind-prediction.pdf",
    tags: ["Machine Learning", "Wind Prediction", "Urban Environment"],
  },
  {
    title: "Optimization of Wind Turbine Airfoil Design Using XFOIL and OpenMDAO",
    authors: "Peter Marinelli",
    year: 2025,
    event: "REU, Case Western Reserve University",
    image: "/poster/peter-airfoil-optimization.jpg",
    file: "/poster/peter-airfoil-optimization.pdf",
    tags: ["Wind Energy", "Aerodynamics", "OpenMDAO"],
  },
  {
    title:
      "Design and Sizing of a Renewable Microgrid for 24-Hour EV Fleet Charging Using Xendee Microgrid Toolkit and Sensor Data",
    authors: "Chelsea Miller",
    year: 2025,
    event: "Undergraduate Student Research Award (USRA)",
    image: "/poster/chelsea-microgrid.jpg",
    file: "/poster/chelsea-microgrid.pdf",
    tags: ["Microgrids", "EV Charging", "Energy Systems"],
  },
  {
    title:
      "Utilizing AI to Enhance Wind Energy Prediction: Integrated Research and Education",
    authors: "Ayyoub Abdel-Aziz and Robyn Manahan",
    year: 2024,
    event: "REU, Case Western Reserve University",
    image: "/poster/reu-ai-wind-2024.jpg",
    file: "/poster/reu-ai-wind-2024.pdf",
    tags: ["Artificial Intelligence", "Wind Energy", "Education"],
  },
  {
    title: "Hybrid Wind-Solar Energy Powered EV Charging Station",
    authors: "Ali Almusalli",
    year: 2023,
    event: "Undergraduate Student Research Award (USRA)",
    image: "/poster/ali-hybrid-energy.jpg",
    file: "/poster/ali-hybrid-energy.pdf",
    tags: ["Wind-Solar", "Renewable Energy", "EV Charging"],
  },
];

export default function ResearchPosters() {
  return (
    <section
      id="research-posters"
      className="mt-16 border-t border-white/10 pt-12"
    >
      <h2 className="text-3xl font-bold text-white">
        Selected Research Posters
      </h2>

      <p className="mt-4 max-w-4xl text-[16px] leading-7 text-secondary">
        Selected student research in computational modeling,
        renewable energy, machine learning, and sustainable
        energy systems.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posters.map((poster) => (
          <article
            key={poster.file}
            className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-[#79DDB9]/40"
          >
            <a
              href={poster.file}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View full poster: ${poster.title}`}
              className="block"
            >
              <div className="flex h-60 items-center justify-center overflow-hidden bg-white/5 p-3">
                <img
                  src={poster.image}
                  alt={`${poster.title} research poster`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>
            </a>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-[15px] font-semibold leading-6 text-white">
                {poster.title}
              </h3>

              <p className="mt-3 text-sm text-secondary">
                {poster.authors} · {poster.year}
              </p>

              <p className="mt-1 text-xs text-secondary">
                {poster.event}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {poster.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#79DDB9]/20 bg-[#79DDB9]/10 px-2 py-1 text-[11px] text-[#79DDB9]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={poster.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block pt-5 text-sm font-medium text-[#79DDB9] hover:underline"
              >
                View Full Poster ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
