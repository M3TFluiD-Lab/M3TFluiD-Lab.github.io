// src/pages/Outreach.jsx
import Page from "../components/Page";

export default function OutreachPage() {
  return (
    <Page>
      <h1 className="text-white text-3xl font-bold text-center">
        Outreach & Education
      </h1>
      <p className="text-secondary mt-3 text-center max-w-3xl mx-auto">
        Programs, workshops, and education content coming soon.
      </p>

      <div className="mt-10">
        <Outreach />
      </div>
    </Page>
  );
}
