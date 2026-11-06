
import React, { useEffect, useState } from "react";
import LabWordmark from "./LabWordmark";

const researchTopics = [
  "Complex Flow Physics",
  "Multi-Fidelity Modeling",
  "Urban Microclimate",
  "Advanced Air Mobility",
  "Sustainable Energy Systems",
  "Heat and Mass Transfer",
];

export default function Hero() {
  const [topicIndex, setTopicIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTopic = researchTopics[topicIndex];

    let delay = deleting ? 45 : 85;

    if (!deleting && displayText === currentTopic) {
      delay = 1800;
    } else if (deleting && displayText === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && displayText === currentTopic) {
        setDeleting(true);
      } else if (deleting && displayText === "") {
        setDeleting(false);
        setTopicIndex((index) => (index + 1) % researchTopics.length);
      } else if (deleting) {
        setDisplayText((text) => text.slice(0, -1));
      } else {
        setDisplayText(currentTopic.slice(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, topicIndex]);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-8 text-white md:pb-16 md:pt-14">
      <div className="relative max-w-4xl pl-8 md:pl-10">

        {/* Vertical line and circular marker */}
        <div
          className="absolute left-0 top-2 bottom-0 w-[2px]"
          style={{
            background:
              "linear-gradient(to bottom, #34D399 0%, rgba(52,211,153,0.4) 55%, transparent 100%)",
          }}
        />

        <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-emerald-400" />

       

        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Welcome to the{" "}
<LabWordmark tone="brightgreen" />
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-[#C2D1CB]">
          Advancing thermofluid science through computational and
          experimental research, multi-fidelity modeling, and
          predictive methods.
        </p>

        {/* Rotating research topics */}
        <div className="mt-6 min-h-[64px]">
          <p className="text-base font-medium text-white/80">
            Exploring the future of
          </p>

          <p
            className="mt-1 text-xl font-semibold text-emerald-400 md:text-2xl"
            aria-label={researchTopics[topicIndex]}
          >
            {displayText}
            <span className="ml-0.5 animate-pulse">|</span>
          </p>
        </div>
      </div>
    </section>
  );
}
