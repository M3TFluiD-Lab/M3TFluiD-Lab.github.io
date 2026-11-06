import React from "react";
import { Link } from "react-router-dom";
import { mentoringSummary } from "../constants";

export default function MentoringSummary() {
  const cards = [
    ...mentoringSummary.graduate.map(({ id, title, total, ongoing, past }) => ({
      id,
      title,
      total,
      detail: `CSU · ${ongoing} ongoing${past ? ` · ${past} past` : ""}`,
    })),
    {
      id: "researchers",
      title: "Postdocs and research staff",
      total: 4,
      detail: `CSU · ${mentoringSummary.researchers} ongoing`,
    },
    {
      id: "undergraduate",
      title: "Undergraduate researchers",
      total: 64,
      detail: "Research advising across institutions",
    },
  ];

  return (
    <section id="mentoring" aria-labelledby="mentoring-title" className="mt-12 scroll-mt-28 border-t border-white/10 pt-8">
      <h2 id="mentoring-title" className="text-3xl font-bold text-[#42C9A3]">Student and Research Mentoring</h2>
      <p className="mt-2 text-sm text-[#C3D4CA]">Mentoring totals across institutions since 2016. Where shown, CSU counts are as of {mentoringSummary.updated}.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map(({ id, title, total, detail }) => (
          <article key={id} className="rounded-xl border border-[#42C9A3]/20 bg-[#101715] p-4">
            <p><span className="text-4xl font-bold leading-none tabular-nums text-[#42C9A3]">{total}</span></p>
            <h3 className="mt-2 text-sm font-semibold text-[#83D9BD]">{({ phd: "PhD Advising", msc: "Master’s Advising", committee: "Co-Advising & Committees", researchers: "Postdocs & Staff", undergraduate: "Undergraduate Research" })[id] || title}</h3>
            <p className="mt-2 text-xs leading-5 text-[#C3D4CA]">{detail}</p>
          </article>
        ))}
      </div>
      <Link to="/education" className="mt-3 inline-block text-sm font-semibold text-[#66CDA8] underline underline-offset-4">
        Explore design projects and experiential learning
      </Link>
    </section>
  );
}
