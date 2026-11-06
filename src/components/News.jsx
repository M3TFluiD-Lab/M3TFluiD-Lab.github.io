import React from "react";
import { SectionWrapper } from "../hoc";
import { news } from "../constants";

function News() {
  return (
    <section aria-labelledby="news-title">
      <h1 id="news-title" className="mb-6 text-3xl font-bold text-[#42C9A3]">Lab News</h1>
      <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {news.map(({ title, description, image, imageAlt, tags }) => (
          <details key={title} className="rounded-xl border border-white/10 bg-[#101715] p-4">
            <summary className="cursor-pointer text-sm font-semibold leading-6 text-white hover:text-[#83D9BD]">
              {title}
            </summary>
            <p className="mt-3 text-sm leading-6 text-[#D0DFD9]">{description}</p>
            {image && imageAlt && (
              <a href={image} target="_blank" rel="noreferrer" className="mt-3 block text-sm text-[#83D9BD] underline">
                <img src={image} alt={imageAlt} loading="lazy" className="mb-1 h-24 rounded object-contain" />
                Open certificate image
              </a>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {tags?.map(tag => <span key={tag} className="text-xs text-[#83D9BD]">#{tag}</span>)}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default SectionWrapper(News, "news");
