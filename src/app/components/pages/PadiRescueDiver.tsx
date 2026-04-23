// PadiRescueDiver.tsx
"use client";

import { Rescue } from "./Rescue";
import { RescueCapabilities } from "./RescueCapabilities";
import { RescueComparison } from "./RescueComparison";



export function PadiRescueDiver() {
  return (
    <>
      <Rescue  />
      <RescueCapabilities />
      <RescueComparison />
    </>
  );
}