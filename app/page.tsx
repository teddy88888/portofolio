import Image from "next/image";
import Navbar from "../components/containers/navbar/Navbar";
import Hero from "../components/containers/hero/Hero";
export default function Home() {
  return (
    <main>
      <section id="hero">
      <Hero />

      </section>
      <Navbar />
     

     
       
    </main>
  );
}