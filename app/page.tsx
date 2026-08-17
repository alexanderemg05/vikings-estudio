"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatementSection from "@/components/StatementSection";
import PortfolioIntro from "@/components/PortfolioIntro";
import SelectedWork from "@/components/SelectedWork";
import MotionSection from "@/components/MotionSection";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { siteConfig } from "@/components/site.config";

export default function Home() {
  return (
    <main
      className="relative w-full text-white"
      style={{ backgroundColor: siteConfig.colors.black }}
    >
      <Hero />
      <StatementSection />
      <PortfolioIntro />
      <SelectedWork />
      <MotionSection />
      <div
        style={{
          backgroundColor: siteConfig.colors.servicesBg,
          borderTop: "1px solid rgba(232, 227, 213, 0.06)",
        }}
      >
        <Services />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}