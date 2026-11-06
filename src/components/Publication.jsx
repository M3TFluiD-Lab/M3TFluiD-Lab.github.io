
import React from "react";
import { publications } from "../constants";
import SelectedTalks from "./SelectedTalks";
import ResearchPosters from "./ResearchPosters";

const Publication = () => {
  const recent = [...publications].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "journal" ? -1 : 1;
    }

    return b.year - a.year;
  });

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 text-white">
      <section id="selected-publications">
        <h2 className="text-3xl font-bold">
          Selected Publications
        </h2>

        <p className="mt-4 text-[16px] leading-7 text-secondary">
          Selected research publications. For a complete and
          up-to-date list, visit my{" "}
          <a
            href="https://scholar.google.com/citations?user=F3_tTU4AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#79DDB9] underline underline-offset-4"
          >
            Google Scholar profile
          </a>.
        </p>

        <div className="mt-8 space-y-5">
          {recent.map((pub, index) => (
            <div key={`${pub.title}-${index}`}>
              <p className="text-[15px] leading-7">
                {pub.authors.replaceAll(";", ",")} ({pub.year}) {'‘'}
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white transition-colors hover:text-[#79DDB9]"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span className="font-semibold">
                    {pub.title}
                  </span>
                )}
                {'’, '}<em>{pub.venue.replace(/ \(2026\)$/, "").split(",")[0]}</em>
                {pub.venue.replace(/ \(2026\)$/, "").includes(",") && pub.venue.replace(/ \(2026\)$/, "").slice(pub.venue.indexOf(","))}.
              </p>
            </div>
          ))}
        </div>
      </section>

      <SelectedTalks />
      <ResearchPosters />
    </div>
  );
};

export default Publication;
