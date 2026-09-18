import React from "react";
import Hero from "@/components/Hero";
import WhatIsTorkk from "@/components/WhatIsTorkk";
import TheProblem from "@/components/TheProblem";
import OurIdea from "@/components/OurIdea";
import SafetySection from "@/components/SafetySection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";
import VisionSection from "@/components/VisionSection";
import FutureVision from "@/components/FutureVision";
import BlackOriginXSection from "@/components/BlackOriginXSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsTorkk />
      <TheProblem />
      <OurIdea />
      <SafetySection />
      <ServicesSection />
      <PhilosophySection />
      <VisionSection />
      <FutureVision />
      <BlackOriginXSection />
      <FAQSection />
    </>
  );
}
