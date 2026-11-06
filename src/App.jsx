
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import EducationPage from "./pages/Education";
import TeamPage from "./pages/Team";
import ResearchPage from "./pages/Research";
import PublicationsPage from "./pages/Publications";
import NewsPage from "./pages/News";
import EquipmentPage from "./pages/Equipment";
import OutreachPage from "./pages/Outreach";

const pageTitles = {
  "/": "M³TFluiD Lab | Multi-Fidelity Thermofluid Modeling",
  "/research": "Research | M³TFluiD Lab",
  "/team": "Team | M³TFluiD Lab",
  "/education": "Experiential Learning | M³TFluiD Lab",
  "/publications": "Publications | M³TFluiD Lab",
  "/facilities": "Facilities | M³TFluiD Lab",
  "/news": "News | M³TFluiD Lab",
  "/contact": "Contact | M³TFluiD Lab",
};

function PageTitle() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    document.title = pageTitles[pathname.replace(/\/$/, "") || "/"] || "M³TFluiD Lab";
  }, [pathname]);
  return null;
}

function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return visible && (
    <button
      type="button"
      className="fixed bottom-5 right-5 z-40 rounded-full border border-[#66CDA8] bg-[#101715] px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-[#17302A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66CDA8]"
      onClick={() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
      }}
    >
      <span aria-hidden="true">↑ </span>Back to top
    </button>
  );
}

function EquipmentRedirect() {
  const { search, hash } = useLocation();
  return <Navigate to={{ pathname: "/facilities", search, hash }} replace />;
}

export default function App() {
  return (
    <Router>
      <PageTitle />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/facilities" element={<EquipmentPage />} />
        <Route path="/equipment" element={<EquipmentRedirect />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/outreach" element={<OutreachPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}