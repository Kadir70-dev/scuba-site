"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function RescueComparison() {
  const rows = [
    {
      label: "Training Location",
      other: "Public Beach / Car Park",
      nemo: "Private Beach & Pool",
    },
    {
      label: "Classroom Facilities",
      other: "Coffee Shop / Outdoors",
      nemo: "Dedicated On-Site",
    },
    {
      label: "Post-Dive Comfort",
      other: "Public Toilets",
      nemo: "Hot Showers & Lockers",
    },
    {
      label: "Scenario Realism",
      other: "Simulated (Pool Only)",
      nemo: "Real Ocean Scenarios",
    },
    {
      label: "Student Ratio",
      other: "Large Groups (6-8)",
      nemo: "Small Groups (Max 4)",
    },
    {
      label: "Base Logistics",
      other: "Paid / Remote Parking",
      nemo: "Free Parking",
    },
  ];

  return (
    <section className="py-28 bg-[#02131d] text-white font-habara">

      {/* HEADER */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Don't Settle for{" "}
          <span className="text-cyan-400">"Just Good Enough"</span>
        </h2>
      </div>

      {/* TABLE CARD */}
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
        >

          {/* HEADER ROW */}
          <div className="grid grid-cols-3 text-sm text-white/60 px-6 py-4 border-b border-white/10">
            <div>COURSE STANDARD</div>
            <div>OTHER CENTERS</div>
            <div className="text-cyan-400 font-semibold">NEMO DIVING</div>
          </div>

          {/* ROWS */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 py-5 border-b border-white/5 items-center"
            >
              {/* LABEL */}
              <div className="text-white/80 text-sm">
                {row.label}
              </div>

              {/* OTHER */}
              <div className="text-white/40 text-sm">
                {row.other}
              </div>

              {/* NEMO */}
              <div className="flex items-center gap-2 text-sm text-white">
                <Check className="text-cyan-400 w-4 h-4" />
                {row.nemo}
              </div>
            </div>
          ))}

        </motion.div>
      </div>

    </section>
  );
}