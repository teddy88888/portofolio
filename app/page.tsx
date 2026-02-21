import Image from "next/image";
import Navbar from "../components/containers/navbar/Navbar";
import Hero from "../components/containers/hero/Hero";
import About from "../components/containers/about/About";
import Skillset from "../components/containers/skillset/Skillset";
import Experience from "../components/containers/experience/Experience";
import Portfolio from "../components/containers/portfolio/Portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero" className="sticky top-0">
        <Hero />
      </section>
      <section id=" about " className="absolute">
        <About />
      </section>    
      <section id="skillset" className="mt-504 absolute">
        <Skillset />
      </section>
      <section id="experience" className="mt-880 absolute">
        <Experience />
      </section>
      <section id="portfolio" className="mt-1220 absolute">
        <Portfolio />
      </section>
    </main>
  );
}
