import React, { useState } from "react";

export default function ImageGallery({ images, label }) {
  const [selected, setSelected] = useState(0);
  const [src, caption, description] = images[selected];

  return (
    <div className="mt-4" role="group" aria-label={label}>
      <figure className="overflow-hidden rounded-xl border border-white/15 bg-[#07100D]">
        <a href={src} className="block" aria-label={`Open full-size image: ${caption}`}>
          <img src={src} alt={caption} loading="lazy" className="mx-auto max-h-[28rem] max-w-full object-contain" />
        </a>
        <figcaption aria-live="polite" className="px-4 py-3 text-sm text-[#C3D4CA]"><strong className="block text-[#83D9BD]">{caption}</strong>{description && <span className="mt-1 block">{description}</span>}</figcaption>
      </figure>
      <p className="mt-3 text-xs font-semibold text-[#83D9BD]">Select a thumbnail to enlarge</p>
      <div className="mt-2 flex gap-2 overflow-x-auto p-1">
        {images.map(([url, title], index) => (
          <button key={url} type="button" aria-pressed={selected === index}
            aria-label={`Show ${title}`} onClick={() => setSelected(index)}
            className={`w-24 shrink-0 overflow-hidden rounded-lg border-2 bg-[#101715] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#66CDA8] sm:w-32 ${selected === index ? "border-[#66CDA8]" : "border-white/20 hover:border-[#66CDA8]"}`}>
            <img src={url} alt="" loading="lazy" className="h-14 w-full bg-[#07100D] object-cover sm:h-20" />
            <span className="block px-2 py-1 text-xs text-[#C3D4CA]">{index + 1} · {selected === index ? "Selected" : "View"}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
