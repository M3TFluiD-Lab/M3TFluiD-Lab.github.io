
import Page from "../components/Page";
import Hero from "../components/Hero";
import About from "../components/About";
import Sponsors from "../components/Sponsors";

export default function Home() {
  return (
    <div className="min-h-screen brand-background">
      <Page className="pt-28">
        <Hero />
        <About />
        <Sponsors />
      </Page>

    </div>
  );
}
