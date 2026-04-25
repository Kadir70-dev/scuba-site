"use client";

import { CareerPathSection } from "../components/pages/CareerPathSection";
import { CommandOceanSection } from "../components/pages/CommandOceanSection";
import { ComparisonDive } from "../components/pages/ComparisonDive";
import { EnvironmentSection } from "../components/pages/EnvironmentSection";
import { GoldStandardSectionDive } from "../components/pages/GoldStandardSectionDive";
import { PadIDivemasterHero } from "../components/pages/PadIDivemasterHero";
import { ProfessionalStatusSection } from "../components/pages/ProfessionalStatusSection";



export default function DivemasterPage() {
  return (
    <>
      
      <PadIDivemasterHero />
      <CommandOceanSection />
      <ComparisonDive />
      <ProfessionalStatusSection />
      <CareerPathSection />
      <GoldStandardSectionDive />
      <EnvironmentSection />  

    </>
  );
}