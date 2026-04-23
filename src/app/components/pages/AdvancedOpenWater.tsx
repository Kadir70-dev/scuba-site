// AdvancedOpenWater.tsx
"use client";

import { AdvancedProtocolSection } from "./AdvancedProtocolSection";
import { AdvancedTrainingGoldSection } from "./AdvancedTrainingGoldSection";
import { AOWAdvantageSection } from "./AOWAdvantageSection";
import { ChooseEnvironmentSection } from "./ChooseEnvironmentSection";
import { Community } from "./Community";
import { GlobalPassportSection } from "./GlobalPassportSection";
import { MasteryGapSection } from "./MasteryGapSection";
import { OpenDiver } from "./OpenDiver";
import { PremiumSec } from "./PremiumSec";


export function AdvancedOpenWater() {
  return (
    <>
    <OpenDiver  />
    <AdvancedProtocolSection />
    <AOWAdvantageSection />
    <GlobalPassportSection />
     <ChooseEnvironmentSection />
     <AdvancedTrainingGoldSection />
     <MasteryGapSection />
     <Community /> 
     <PremiumSec />
    </>
  );
}