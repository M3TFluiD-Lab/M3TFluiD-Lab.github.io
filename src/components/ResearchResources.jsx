import React from "react";
import { Github, ArrowUpRight } from "lucide-react";

export const LAB_GITHUB_URL = "https://github.com/M3TFluiD-Lab";

export default function ResearchResources() {
  return (
    <section id="code-data" aria-labelledby="code-data-heading" className="mt-12 scroll-mt-28 rounded-3xl border border-[#42C9A3]/20 bg-[#0D1C19] p-6 sm:p-8">
      <h2 id="code-data-heading" className="text-3xl font-bold text-[#42C9A3]">Code and Data</h2>
      <p className="mt-4 text-[16px] leading-8 text-[#C3D4CA]">Visit the M³TFluiD Lab GitHub organization for public repositories and project documentation. Research code and datasets will be linked from individual projects as they are released.</p>
      <a href={LAB_GITHUB_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#42C9A3]/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#42C9A3]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#66CDA8]">
        <Github size={19} aria-hidden="true" />
        Explore Lab GitHub
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </section>
  );
}
