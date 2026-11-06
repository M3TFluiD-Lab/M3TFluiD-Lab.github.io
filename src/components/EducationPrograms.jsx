import ImageGallery from "./ImageGallery";
import React, { useState } from "react";
import { chooseOhioFirstProjects, asmeBoards, reuHighlights, highSchoolEngagement } from "../constants";
const base = import.meta.env.BASE_URL;
const section = "mt-5 scroll-mt-28 rounded-3xl border border-[#42C9A3]/20 bg-[#101715] p-6 sm:p-8";
const heading = "text-3xl font-bold text-[#42C9A3]";
const body = "mt-4 text-[15px] leading-7 text-[#C3D4CA]";
function Officers({ board }) {
 return <div className="mt-4 overflow-x-auto"><table className="w-full max-w-xl text-left text-sm"><caption className="mb-3 text-left text-[#66CDA8]">CSU ASME student officers, {board.period}</caption><thead><tr><th scope="col" className="py-2">Role</th><th scope="col">Officer</th></tr></thead><tbody>{board.officers.map(([role,name]) => <tr key={role} className="border-t border-white/10"><th scope="row" className="py-3 font-normal text-[#C3D4CA]">{role}</th><td>{name}</td></tr>)}</tbody></table></div>;
}
export function EventPhotos({ photos, label = "Event photos" }) {
  return <ImageGallery label={label} images={photos.map(([file, caption]) => [`${base}education/events/${file}.webp`, caption])} />;
}

const programs = [
  { id: "reu", label: "NSF REU", description: "CSU and Case Western Reserve University" },
  { id: "usra", label: "CSU USRA", description: "Undergraduate summer research awards" },
  { id: "high-school", label: "High School Cohorts", description: "Field demonstrations and mentoring" },
  { id: "teachers", label: "Teacher Training", description: "Summer professional development" },
];

export default function SummerPrograms({ schools = false }) {
  const id = schools ? "schools" : "summer-programs";
  const detailId = `${id}-detail`;
  const options = schools ? programs.slice(2) : programs.slice(0, 2);
  const [selected, setSelected] = useState(options[0].id);

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mt-12 scroll-mt-28">
      <h2 id={`${id}-title`} className={heading}>{schools ? "High School and Teacher Programs" : "Undergraduate Summer Research"}</h2>
      <div role="group" aria-label="Choose a program" className="mt-5 grid gap-3 sm:grid-cols-2">
        {options.map(({ id, label, description }) => (
          <button key={id} type="button" aria-pressed={selected === id} aria-controls={detailId}
            onClick={() => setSelected(id)}
            className={`rounded-xl border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#66CDA8] ${selected === id ? "border-[#66CDA8] bg-[#42C9A3]/15" : "border-white/15 bg-[#101715] hover:border-[#66CDA8]"}`}>
            <span className="block font-semibold text-[#83D9BD]">{label}</span>
            <span className="mt-2 block text-sm text-[#C3D4CA]">{description}</span><span className="mt-3 block text-xs font-semibold text-[#83D9BD]">{selected === id ? "✓ Selected" : "View program ↓"}</span>
          </button>
        ))}
      </div>
      <div id={detailId} aria-live="polite">
        {selected === "reu" && (
 <section className={section} aria-labelledby="reu-title"><h3 id="reu-title" className={heading}>NSF Research Experiences for Undergraduates</h3><p className={body}>Cleveland State University and Case Western Reserve University jointly lead the NSF-funded Great Lakes Wind Energy Challenges Research Experiences for Undergraduates (GLWind REU). Selected projects mentored by the lab PI span wind energy, environmental sensing, and engineering design.</p><a href="https://engineering.csuohio.edu/glwind_reu" target="_blank" rel="noreferrer" className="mt-4 inline-block text-[#83D9BD] underline">Explore the CSU–CWRU NSF REU program</a>
 <a href="https://engineering.csuohio.edu/glwind_reu/album" target="_blank" rel="noreferrer" className="ml-4 mt-4 inline-block text-[#83D9BD] underline">View program photos</a><div className="mt-6 grid gap-4 md:grid-cols-3">{reuHighlights.map(item => <a key={item.year} href={item.url} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 p-5 hover:border-[#42C9A3]"><span className="text-sm text-[#66CDA8]">{item.year} program highlights</span><h3 className="mt-3 font-semibold">{item.title}</h3></a>)}</div></section>
        )}
        {selected === "usra" && (
          <section className={section}>
            <h3 className={heading}>CSU Undergraduate Summer Research Awards</h3>
            <p className={body}>From 2022 to 2026, CSU Undergraduate Summer Research Award students advised by the lab studied renewable energy and urban wind. Selected projects by summer:</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#C3D4CA]">
              <li><strong>2022</strong> · Modeled a hybrid wind–solar system for EV charging.</li>
              <li><strong>2023</strong> · Studied a hybrid wind–solar powered EV charging station.</li>
              <li><strong>2024</strong> · Predicted wind and solar resources and studied their integration into EV charging infrastructure.</li>
              <li><strong>2025</strong> · Forecasted wind and solar resources, tested a hybrid charging station, and sized a renewable microgrid for fleet charging.</li>
              <li><strong>2026</strong> · Applied machine learning to urban wind speed prediction.</li>
            </ul>
            <figure className="mt-5 max-w-md">
              <a href={`${base}poster/yusra-wind-prediction.pdf`}>
                <img src={`${base}poster/yusra-wind-prediction.jpg`} alt="Open the 2026 urban wind speed prediction poster PDF" loading="lazy" className="w-full rounded-xl border border-white/15 hover:border-[#66CDA8]" />
              </a>
              <figcaption className="mt-2 text-sm text-[#C3D4CA]">2026 USRA poster · Machine learning for urban wind speed prediction</figcaption>
            </figure>
            <a className="mr-5 mt-4 inline-block text-[#83D9BD] underline"
              href="https://www.csuohio.edu/student-research/undergraduate-summer-research-award-program">
              CSU award program and application information
            </a>
            <a className="mt-4 inline-block text-[#83D9BD] underline" href={`${base}publications#research-posters`}>View student posters in Publications</a>
          </section>
        )}
        {selected === "high-school" && (
 <section id="high-school" className={section} aria-labelledby="school-title"><h3 id="school-title" className={heading}>High School Cohorts</h3><p className={body}>Summer cohorts in 2025 and 2026.</p><div className="mt-5 flex flex-wrap gap-4"><p className="rounded-xl border border-[#42C9A3]/25 p-4"><strong className="text-2xl text-[#66CDA8]">{highSchoolEngagement.cohorts}</strong> outreach cohorts</p><p className="rounded-xl border border-[#42C9A3]/25 p-4"><strong className="text-2xl text-[#66CDA8]">{highSchoolEngagement.individualMentees}</strong> individual mentees</p></div><p className={body}>Hands-on cohort activities introduce students to drone operations, thermal imaging, and environmental measurements. Graduate researchers Maede Najian and Shivesh Sharma supported drone and thermal-imaging demonstrations.</p><p className={body}>Individual mentoring includes a Hawken STEMM summer research experience exploring campus microclimates and hybrid-energy siting through low-cost field sensing, as well as career exploration connected with the Educational Service Center of Lorain County.</p><figure className="mt-5 max-w-xl"><img src={`${base}education/microbit-weather-station-labeled.png`} alt="Components of the micro:bit weather station" loading="lazy" className="w-full rounded-xl" /><figcaption className="mt-2 text-sm text-[#C3D4CA]">Micro:bit weather station for hands-on environmental sensing. Figure from the REU poster by Ayyoub Abdel-Aziz and Robyn Manahan.</figcaption></figure></section>
        )}
        {selected === "teachers" && (
          <section className={section}>
            <h3 className={heading}>Summer Training for School Teachers</h3>
            <p className={body}>The summer 2025 teacher training was part of the U.S. Department of Education grant supporting CSU’s modeling and simulation initiative.</p>
            <EventPhotos photos={[
              ["teacher-instruction", "A modeling and simulation session in the CSU computer lab."],
              ["teacher-lab", "Workshop participants follow an instructor-led computer lab session."],
            ]} />
          </section>
        )}
      </div>
    </section>
  );
}

export function ChooseOhioFirst() {
  return (
 <section id="cof" className={section} aria-labelledby="cof-title"><h2 id="cof-title" className={heading}>Choose Ohio First Research Mentoring</h2><h3 className="mt-4 text-xl font-semibold">Choose Ohio First</h3><div className="mt-6 grid gap-6 md:grid-cols-2">{chooseOhioFirstProjects.map(item => <article key={item.period} className="rounded-2xl border border-white/10 p-5"><p className="text-sm text-[#66CDA8]">{item.period}{item.group && ` · ${item.group}`}</p><h3 className="mt-3 text-xl font-semibold">{item.title}</h3><p className={body}>{item.description}</p><p className={body}>{item.students.join(" · ")}</p>{item.poster && <details className="group mt-5"><summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer text-[#83D9BD]"><span className="group-open:hidden">View details ⌄</span><span className="hidden group-open:inline">Hide details ⌃</span><span> · student poster</span></summary><a href={`${base}${item.poster}`} target="_blank" rel="noreferrer" className="mt-3 block underline">Open poster PDF<img src={`${base}${item.preview}`} alt="2025 Choose Ohio First home insulation research poster" loading="lazy" className="mt-4 w-full rounded-lg" /></a></details>}</article>)}</div></section>
  );
}

export function AsmeStudentClub() {
  return (
 <section id="asme" className={section} aria-labelledby="asme-title"><h3 id="asme-title" className={heading}>ASME Student Club at CSU</h3><p className={body}>Faculty advising supports student leadership through technical talks, practicing engineers, professional development, and hands-on engineering activities.</p><p className={body}>The CSU ASME Student Club received Best Student Club recognition in 2025–26.</p>{asmeBoards.map((board, index) => <details key={board.period} className="mt-6"><summary className="cursor-pointer rounded-lg border border-[#66CDA8]/40 bg-[#42C9A3]/10 px-3 py-2 text-[#83D9BD] hover:bg-[#42C9A3]/20">View {index === 0 ? "current" : "previous"} officers · {board.period}</summary><Officers board={board} />{board.partial && <p className={body}>Partial roster.</p>}</details>)}</section>
  );
}
