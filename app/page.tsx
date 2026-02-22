import Image from "next/image";
import Navbar from "../components/containers/navbar/Navbar";
import Hero from "../components/containers/hero/Hero";
import About from "../components/containers/about/About";
import Skillset from "../components/containers/skillset/Skillset";
import Experience from "../components/containers/experience/Experience";
import Portfolio from "../components/containers/portfolio/Portfolio";
import WorkExperiece from "../components/containers/work-experience/WorkExperiece";
import Testimonial from "../components/containers/testimonial/Testimonial";

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
      <section id="contact" className="mt-1570 absolute">
        <WorkExperiece />
      </section>
      <section id="testimonial" className="mt-2260 absolute">
        <Testimonial />
      </section>
    </main>
  );
}
