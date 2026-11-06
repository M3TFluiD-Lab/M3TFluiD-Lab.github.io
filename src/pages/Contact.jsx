
import React from "react";

import Page from "../components/Page";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-[#050A09] text-white"
    >
      <Page className="pt-28">
        <Contact />
      </Page>

    </div>
  );
}
