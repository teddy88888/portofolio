'use client'

import React from "react";
import Image from "next/image";
import Navbar from "../components/containers/navbar/Navbar";
import Hero from "../components/containers/hero/Hero";
import About from "../components/containers/about/About";
import Skillset from "../components/containers/skillset/Skillset";
import Experience from "../components/containers/experience/Experience";
import Portfolio from "../components/containers/portfolio/Portfolio";
import WorkExperiece from "../components/containers/work-experience/WorkExperiece";
import Testimonial from "../components/containers/testimonial/Testimonial";
import Faq from "../components/containers/FAQ/Faq";
import GetContact from "../components/containers/getcontact/GetContact";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero" className="sticky top-0">
        <Hero />
      </section>
      <section id=" about " className="mt-0 md:mt-50 left-0 md:left-80 absolute">
        <About />
      </section>
      <section id="skillset" className="mt-574 md:mt-470 left-0 md:left-80 absolute">
        <Skillset />
      </section>
      <section id="experience" className="mt-875 md:mt-790 left-0 md:left-76 absolute">
        <Experience />
      </section>
      <section id="portfolio" className="mt-1220 md:mt-1110 left-0 md:left-78 absolute">
        <Portfolio />
      </section>
      <section id="work experience" className="mt-1570 md:mt-1340 absolute">
        <WorkExperiece />
      </section>
      <section id="testimonial" className="mt-2480 md:mt-2000 absolute">
        <Testimonial />
      </section>
      <section id="faq" className="mt-2680 md:mt-2220 absolute">
        <Faq />
      </section>
      <section id="getcontact" className="mt-2850 md:mt-2460 absolute">
        <GetContact />
      </section>
    </main>
  );
}
