// PadiOpenWater.tsx
"use client";

import { HeroSection } from "./HeroSection";
import { EnrollmentSection } from "./EnrollmentSection";
import { StepsSection } from "./StepsSection";
import { ComparisonSection } from "./ComparisonSection";
import { CommunityFAQSection } from "./CommunityFAQSection";
import { WhyChooseNemoSection } from "./WhyChooseNemoSection";
import { GoldStandardSection } from "./GoldStandardSection";
// import { CommunityGallerySection } from "./CommunityGallerySection";
import { LocationSection } from "./LocationSection";
import { PremiumFooter } from "./PremiumFooter";

export function PadiOpenWater() {
  return (
    <>
      <HeroSection />
      <EnrollmentSection />
      <StepsSection />
      <ComparisonSection />
      <CommunityFAQSection />
      <WhyChooseNemoSection />
      <GoldStandardSection />
      {/* <CommunityGallerySection /> */}
      <LocationSection />
      <PremiumFooter />
    </>
  );
}