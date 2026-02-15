import Image from "next/image";
import Navbar from "../components/containers/navbar/Navbar";
import Hero from "../components/containers/hero/Hero";
export default function Home() {
  return (
    <main >
      <Navbar />
      <section id="hero"
      className="sticky top-0">
        <Hero />
      </section>
    </main>
  );
}