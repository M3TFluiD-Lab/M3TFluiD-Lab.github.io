import React from "react";
import { SectionWrapper } from "../hoc";
import { members } from "../constants";
import MentoringSummary from "./MentoringSummary";

function teamRoleOrder({ role }) {
  if (/^(postdoc|research associate)/i.test(role)) return 0;
  if (/^phd/i.test(role)) return 1;
  if (/^msc/i.test(role)) return 2;
  return 3;
}

function ProfileLinks({ member }) {
  return (
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#83D9BD]">
      {member.email && <a href={`mailto:${member.email}`} className="break-all hover:underline">{member.email}</a>}
      {member.profile_url && <a href={member.profile_url} target="_blank" rel="noreferrer" className="hover:underline">View Profile</a>}
      {member.links?.linkedin && <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="hover:underline" aria-label={`${member.name} on LinkedIn`}>LinkedIn</a>}
      {member.links?.scholar && <a href={member.links.scholar} target="_blank" rel="noreferrer" className="hover:underline" aria-label={`${member.name} on Google Scholar`}>Google Scholar</a>}
    </div>
  );
}

function MemberPhoto({ member, pi = false }) {
  const image = member.image || (member.name === "Lokesh Kantam" ? `${import.meta.env.BASE_URL}lokesh-kantam.svg` : undefined);
  const initials = member.name.replace(/^Dr\.\s*/, "").split(/\s+/).slice(0, 2).map(word => word[0]).join("");
  return (
    <div className={pi ? "flex min-h-[260px] items-center justify-center overflow-hidden bg-[#080F0D] md:w-[220px] md:shrink-0" : "flex aspect-square items-center justify-center overflow-hidden bg-[#080F0D]"}>
      {image ? <img src={image} alt={member.name} loading={pi ? "eager" : "lazy"} className={pi ? "h-[280px] w-full object-contain" : "h-full w-full object-cover"} /> : <span className="text-4xl font-medium text-[#66CDA8]" aria-label={`Portrait unavailable for ${member.name}`}>{initials}</span>}
    </div>
  );
}

function PrincipalInvestigator({ member }) {
  return (
    <section aria-labelledby="pi-title">
      <h1 id="pi-title" className="text-3xl font-bold text-[#42C9A3]">Principal Investigator</h1>
      <article className="mt-5 overflow-hidden rounded-2xl border border-[#42C9A3]/25 bg-[#101715] md:flex">
        <MemberPhoto member={member} pi />
        <div className="min-w-0 p-6 sm:p-7">
          <h3 className="text-xl font-semibold text-white">{member.name}</h3>
          <p className="mt-2 text-[15px] leading-7 text-[#D0DFD9]">{member.affiliation}</p>
          <p className="mt-1 text-sm text-[#66CDA8]"><a href={member.additionalRoleUrl} className="underline underline-offset-4">{member.additionalRole}</a></p>
          <p className="mt-4 max-w-3xl text-[15px] text-justify leading-7 text-[#C3D4CA]">Dr. Navid Goudarzi studies how to make reliable predictions for engineering systems at practical computational cost. His lab develops multi-fidelity surrogate modeling (MFSM) approaches that combine wind tunnel experiments, physics-based simulation, and scientific machine learning to determine which physical processes must be resolved and when simpler models are sufficient. His research funding exceeds $4 million and includes an NSF CAREER award. He links this work to student training through experiential learning and to community needs through Public Interest Technology initiatives.</p>
          <section id="professional-service" aria-labelledby="service-title" className="mt-5 scroll-mt-28 border-t border-white/10 pt-4 text-sm text-[#C3D4CA]">
            <h4 id="service-title" className="font-semibold text-white">Professional Service</h4>
            <ul className="mt-2 space-y-1">
              <li>Executive Committee member, <a className="text-[#83D9BD] underline" href="https://www.asme.org/get-involved/groups-sections-and-technical-divisions/technical-divisions/technical-divisions-community-pages/power-division">ASME Power Division</a></li>
              <li>Associate Editor, <a className="text-[#83D9BD] underline" href="https://www.sciencedirect.com/journal/energy-for-sustainable-development/about/editorial-board"><em>Energy for Sustainable Development</em></a>.</li>
            </ul>
            <details className="group mt-2">
              <summary className="w-fit cursor-pointer font-semibold text-[#83D9BD]">
                <span className="group-open:hidden">View service details</span>
                <span className="hidden group-open:inline">Hide service details</span>
              </summary>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Founding member and division liaison, Digital Twins and Cyber-Physical Systems Technical Committee.</li>
                <li>Division liaison, Energy Transition Technical Committee.</li>
                <li>Served as Conference Chair and Technical Chair of the ASME Power Conference and as Technical Co-Chair of the ASME Energy Sustainability Conference.</li>
                <li>Reviewed 100+ journal manuscripts, conference papers, and research proposals.</li>
              </ul>
            </details>
          </section>
          <p className="mt-3 text-sm text-[#AFC8BF]">Office: FH 245 · Research Lab: FH 207</p>
          <ProfileLinks member={member} />
        </div>
      </article>
    </section>
  );
}

function MemberCard({ member }) {
  return (
    <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-[#101715] transition-colors hover:border-[#42C9A3]/50">
      <MemberPhoto member={member} />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="mt-2 text-[15px] leading-7 text-[#D0DFD9]">{member.role}</p>
        {member.expectedGraduation && <p className="mt-2 text-sm text-[#AFC8BF]">Expected Graduation: {member.expectedGraduation}</p>}
        <ProfileLinks member={member} />
        {!!member.projects?.length && <div className="mt-5 flex flex-wrap gap-2">{member.projects.map(project => <span key={project} className="rounded-full border border-[#42C9A3]/25 px-3 py-1 text-xs leading-6 text-[#A9DDCA]">{project}</span>)}</div>}
      </div>
    </article>
  );
}

function Team() {
  const pi = members.find(member => member.role.toLowerCase().includes("principal investigator"));
  const teamGroups = [0, 1, 2, 3]
    .map(roleOrder => members.filter(member => member !== pi && teamRoleOrder(member) === roleOrder))
    .filter(group => group.length > 0);
  return (
    <div className="mx-auto w-full max-w-6xl px-2 pb-12 text-white sm:px-4">
      {pi && <PrincipalInvestigator member={pi} />}
      <section aria-labelledby="current-team-title" className="mt-12">
        <h2 id="current-team-title" className="text-3xl font-bold text-[#42C9A3]">Current Team</h2>
        {teamGroups.map(group => (
          <div key={teamRoleOrder(group[0])} className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.map(member => <MemberCard key={member.name} member={member} />)}
          </div>
        ))}
      </section>
      <MentoringSummary />
    </div>
  );
}

export default SectionWrapper(Team, "team");
