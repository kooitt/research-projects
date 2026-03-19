import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Internship from "./components/Internship";
import InternshipProjects from "./components/InternshipProjects";
import FYP from "./components/FYP";
import FYPProjects from "./components/FYPProjects";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Internship />
      <InternshipProjects />
      <FYP />
      <FYPProjects />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
