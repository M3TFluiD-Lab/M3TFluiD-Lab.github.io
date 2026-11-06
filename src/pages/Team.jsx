import Page from "../components/Page";
import Team from "../components/Team";

export default function TeamPage() {
  return (
    <Page>
      <p className="text-secondary mt-3 text-center max-w-3xl mx-auto">
       {/*} We work across MFSM, ROM‑ML, UMC‑BEM/BIM‑ML, Microgrids, AAM, and Air Quality.*/}
      </p>
      <div className="mt-10">
        <Team />
      </div>
    </Page>
  );
}
