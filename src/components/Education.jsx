import ImageGallery from "./ImageGallery";
import SummerPrograms, { ChooseOhioFirst, AsmeStudentClub, EventPhotos } from "./EducationPrograms";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { educationProjects } from "../constants";

const outreachSections = new Set(["schools", "high-school", "training", "engagement", "professional-service"]);

const introductions = {
  mecc: {
    doeReference: "https://www.energy.gov/nepa/articles/cx-270933-marine-energy-collegiate-competition-mecc-2027",
    challenge: "How much energy could a buoy-mounted device produce under representative wave conditions?",
    work: "Model device performance, compare design alternatives, and evaluate cost and feasibility.",
    deliverable: "A validated performance model and a techno-economic comparison to guide design selection.",
  },
  hercules: {
    challenge: "Which chemical reactions must a CFD model capture to predict precursor conversion in chemical vapor deposition?",
    work: "Identify candidate reaction pathways, select reduced mechanisms, and compare them in guided CFD simulations.",
    deliverable: "A reaction-selection method, benchmark cases, and a reusable CFD workflow.",
  },
  etap: {
    challenge: "Which wind–solar configuration can reliably power EV charging at a practical cost?",
    work: "Model configurations in ETAP and compare their performance, reliability, and cost against benchmarks.",
    deliverable: "Working simulation models and a benchmarked recommendation for system sizing.",
  },
};

function ProjectIntroduction({ introduction }) {
  if (!introduction) return null;

  return (
    <details className="mt-5 border-t border-white/10 pt-4">
      <summary className="cursor-pointer rounded-lg border border-[#66CDA8]/40 bg-[#42C9A3]/10 px-3 py-2 font-semibold text-[#83D9BD] hover:bg-[#42C9A3]/20">View project introduction</summary>
      <div className="mt-4 rounded-xl border border-[#42C9A3]/25 bg-[#07100D] p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#66CDA8]">Proposed work · AY 2026–27</p>
        <p className="mt-3 text-lg font-semibold">{introduction.challenge}</p>
        <dl className="mt-4 space-y-3 text-sm leading-6">
          <div>
            <dt className="font-semibold text-[#83D9BD]">Student work</dt>
            <dd className="text-[#C3D4CA]">{introduction.work}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#83D9BD]">Expected deliverable</dt>
            <dd className="text-[#C3D4CA]">{introduction.deliverable}</dd>
          </div>
        </dl>
        {introduction.doeReference && (
          <a className="mt-4 inline-block text-sm text-[#83D9BD] underline" href={introduction.doeReference}>
            DOE environmental review for MECC 2027
          </a>
        )}
      </div>
    </details>
  );
}

export default function Education() {
  const { hash } = useLocation();
  const section = hash.slice(1);
  const outreach = section === "training-outreach" || outreachSections.has(section);

  React.useEffect(() => {
    document.getElementById(section === "professional-service" ? "engagement" : section)?.scrollIntoView();
  }, [section]);

  const [filter, setFilter] = useState("All projects");
  const visible = educationProjects.filter(item => filter === "All projects" || item.status === filter);
  return (
    <div className="mx-auto max-w-6xl pb-12 text-white">
      <h1 className="text-3xl font-bold sm:text-4xl text-[#42C9A3]">Experiential Learning and Workforce Development</h1>
      <p className="mt-5 text-[16px] leading-8 text-[#C3D4CA]">Students at Cleveland State University learn through research, design projects, field demonstrations, and professional practice.</p>
      <nav aria-label="Experiential learning pathways" className="mt-7">
        <p className="mb-3 text-sm font-semibold text-[#83D9BD]">Choose a pathway</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { hash: "#student-programs", title: "Undergraduate Experiences", description: "Senior design, summer research, Choose Ohio First, and ASME student leadership.", active: !outreach },
            { hash: "#training-outreach", title: "Workforce Training & School Outreach", description: "Modeling and simulation training, high school programs, and teacher development.", active: outreach },
          ].map(tab => (
            <Link key={tab.hash} to={tab.hash} aria-current={tab.active ? "true" : undefined}
              className={`rounded-2xl border-2 p-5 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#66CDA8] ${tab.active ? "border-[#66CDA8] bg-[#17302A]" : "border-white/20 bg-[#101715] hover:border-[#66CDA8]"}`}>
              <span className="block text-lg font-semibold">{tab.title}</span>
              <span className="mt-2 block text-sm text-[#C3D4CA]">{tab.description}</span>
              <span className="mt-3 block text-sm font-semibold text-[#83D9BD]">{tab.active ? "✓ Viewing this pathway" : "View pathway →"}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div hidden={outreach}>

      <section id="student-projects" aria-labelledby="projects-title" className="mt-12 scroll-mt-28">
        <h2 id="projects-title" className="text-3xl font-bold text-[#42C9A3]">Senior Design</h2>
        <p className="mt-4 text-[16px] leading-8 text-[#C3D4CA]">Selected team projects apply engineering analysis through collaborative design. The examples below include senior design projects and related student design competitions.</p>
        <div role="group" aria-label="Filter student projects" className="mt-5 flex flex-wrap gap-3">{["All projects", "Ongoing", "Past project"].map(value => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)} className={`rounded-full border px-4 py-2 text-sm transition-colors ${filter === value ? "border-[#42C9A3] bg-[#42C9A3]/15 text-white" : "border-white/20 text-[#C3D4CA] hover:border-[#42C9A3]"}`}>{value === "Past project" ? "Past projects" : value}</button>)}</div>
        <div className="mt-4 grid items-start gap-4 md:grid-cols-2">{visible.map(item => <article key={item.id} className="rounded-2xl border border-white/10 bg-[#101715] p-4"><div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#66CDA8]"><span>{item.period}</span><span>{item.status}</span></div><h3 className="mt-2 text-lg font-semibold">{item.title}</h3><p className="mt-1 text-sm text-[#AFC8BF]">{item.context}</p><p className="mt-2 text-[15px] leading-6 text-[#C3D4CA]">{item.description}</p><p className="mt-2 text-sm text-[#C3D4CA]">{item.participants} student participants</p><div className="mt-2 flex flex-wrap gap-2">{item.skills.map(skill => <span key={skill} className="rounded-full border border-[#42C9A3]/25 px-3 py-1 text-xs leading-4 text-[#A9DDCA]">{skill}</span>)}</div><ProjectIntroduction introduction={introductions[item.id]} /></article>)}</div>
      </section>

      <SummerPrograms />
      <ChooseOhioFirst />
      <AsmeStudentClub />
      </div>

      <div hidden={!outreach}>
      <section id="training" aria-labelledby="training-title" className="mt-12 scroll-mt-28 rounded-3xl border border-[#42C9A3]/20 bg-[#101715] p-6 sm:p-8">
        <h2 id="training-title" className="text-3xl font-bold text-[#42C9A3]">Modeling and Simulation Training</h2>
        <p className="mt-4 text-[16px] leading-8 text-[#C3D4CA]">The graduate concentration in Modeling and Simulation in Sustainable Energy Systems connects computational methods with energy-system applications. Related curriculum development and simulation-based learning draw on CSU’s shared educational and visualization resources.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <a href="https://academic.csuohio.edu/iers-center/ms-ses-program/" className="rounded-xl border border-[#66CDA8]/50 bg-[#42C9A3]/10 p-4 hover:bg-[#42C9A3]/20 focus-visible:outline focus-visible:outline-[#66CDA8]">
            <span className="block font-semibold">Modeling and Simulation in Sustainable Energy Systems</span>
            <span className="mt-2 block text-sm text-[#83D9BD]">Explore the graduate program ↗</span>
          </a>
          <a href="https://www.csuohio.edu/lifelong-learning/microgrid-systems-certificate-program" className="rounded-xl border border-[#66CDA8]/50 bg-[#42C9A3]/10 p-4 hover:bg-[#42C9A3]/20 focus-visible:outline focus-visible:outline-[#66CDA8]">
            <span className="block font-semibold">Microgrid Systems Microcredential</span>
            <span className="mt-2 block text-sm text-[#83D9BD]">Explore the certificate program ↗</span>
          </a>
          <article className="rounded-xl border border-white/15 p-4">
            <h3 className="font-semibold">Open Education and Teaching Development</h3>
            <p className="mt-2 text-sm leading-6 text-[#C3D4CA]">Textbook affordability grant work and professional development in accessibility, online course design, and civic engagement.</p>
          </article>
          <Link to="/facilities" className="rounded-xl border border-[#66CDA8]/50 bg-[#42C9A3]/10 p-4 hover:bg-[#42C9A3]/20 focus-visible:outline focus-visible:outline-[#66CDA8]">
            <span className="block font-semibold">VR and Simulation Demonstrations</span>
            <span className="mt-2 block text-sm text-[#83D9BD]">View demonstrations in Facilities →</span>
          </Link>
        </div>
        <h3 className="mt-6 text-lg font-semibold">Modeling and Simulation in the Lab and Classroom</h3>
        <ImageGallery label="Modeling and simulation training images" images={[
          [`${import.meta.env.BASE_URL}research/rooftop-wind.png`, "Rooftop wind hardware illustrates hybrid microgrid systems. The ETAP capstone compares wind and solar configurations for EV charging."],
          [`${import.meta.env.BASE_URL}research/heat-transfer-class.jpg`, "Maede Najian demonstrates thermal imaging for the Heat Transfer students’ building energy modeling project."],
        ]} />
        <p className="mt-4 text-sm leading-6 text-[#C3D4CA]">The modeling and simulation initiative received support from the U.S. Department of Education.</p>
      </section>

      <SummerPrograms schools />

      <section id="engagement" aria-labelledby="engagement-title" className="mt-12 scroll-mt-28">
        <h2 id="engagement-title" className="text-3xl font-bold text-[#42C9A3]">Community Outreach and Workshops</h2>
        <h3 className="mt-6 text-xl font-semibold">Modeling and Simulation Outreach</h3>
        <EventPhotos label="Modeling and Simulation outreach" photos={[
          ["ms-outreach", "The CSU Modeling and Simulation team speaks with visitors at its outreach booth."],
          ["ms-booth", "The Modeling and Simulation in Sustainable Energy Systems program display."],
        ]} />
        <h3 className="mt-6 text-xl font-semibold">Open House and Student Workshop</h3>
        <EventPhotos label="Open House and Student Workshop" photos={[
          ["student-presentation", "Dr. Goudarzi presents simulation-based coursework for sustainable energy modeling."],
          ["student-workshop", "Participants gather for a modeling and simulation workshop at CSU."],
        ]} />
      </section>
      </div>
      <section className="mt-12 rounded-3xl border border-[#42C9A3]/20 bg-[#0D1C19] p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-[#42C9A3]">Get Involved</h2>
        <p className="mt-4 text-[16px] leading-8 text-[#C3D4CA]">Explore CSU mentoring activities or contact the lab about student research, educational partnerships, and engineering engagement.</p>
        <div className="mt-5 flex flex-wrap gap-4"><Link to="/team" className="rounded-full border border-[#42C9A3]/60 px-5 py-2.5 text-sm font-semibold">Student mentoring at CSU</Link><Link to="/contact" className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold">Contact the lab</Link></div>
      </section>
    </div>
  );
}
