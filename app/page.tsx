"use client";

import React from "react";
import Navbar from "@/components/containers/navbar/Navbar";
import Hero from "@/components/containers/hero/Hero";
import About from "@/components/containers/about/About";
import Skillset from "@/components/containers/skillset/Skillset";
import Experience from "@/components/containers/experience/Experience";
import Portfolio from "@/components/containers/portfolio/Portfolio";
import Testimonial from "@/components/containers/testimonial/Testimonial";
import WorkExperience from "@/components/containers/work-experience/WorkExperiece";
import Faq from "@/components/containers/FAQ/Faq";
import GetContact from "@/components/containers/getcontact/GetContact";
export default function Home() {
  return (
    <main className="w-full min-w-0 overflow-x-clip">
      <Navbar />
      <section id="hero" className="relative w-full">
        <Hero />
      </section>

      <section
        id="about"
        className="relative w-full overflow-hidden bg-white py-20 md:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <About />
        </div>
      </section>

      <section id="skill" className="relative w-full">
        <Skillset />
      </section>

      <section id="experience" className="relative w-full">
        <Experience />
      </section>

      <section id="project" className="relative w-full">
        <Portfolio />
      </section>

      <section id="work-experience" className="relative w-full">
        <WorkExperience />
      </section>

      <section id="testimonial" className="relative w-full">
        <Testimonial />
      </section>

      <section id="faq" className="relative w-full">
        <Faq />
      </section>

      <section id="contact" className="relative w-full">
        <GetContact />
      </section>
    </main>
  );
}
