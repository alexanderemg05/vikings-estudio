"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionBackground from "@/components/SectionBackground";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
export default function Home() {

  return (
    <main className="relative w-full text-white bg-transparent md:bg-black">
  
      <Hero />

      <div className="relative">
        <SectionBackground />

        <Portfolio />
        <Services />
        <About />
        <Contact />
      </div>

    </main>
  );
}