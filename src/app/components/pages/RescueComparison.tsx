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
    <section
      className="relative py-36 bg-[#02131d] text-white font-habara overflow-hidden"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

      {/* HEADER */}
      <div className="relative text-center mb-20 px-6 max-w-4xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-[1.18] tracking-[1px]">

          Don't Settle for{" "}

          <span className="text-cyan-400">
            "Just Good Enough"
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="mt-8 text-[15px] md:text-[16px] text-white/60 leading-[2] tracking-[0.45px] max-w-3xl mx-auto">

          Experience rescue training designed for
          real-world confidence, premium facilities,
          and professional-level underwater emergency preparation.

        </p>

      </div>

      {/* TABLE CARD */}
      <div className="relative max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
        >

          {/* HEADER ROW */}
          <div className="grid grid-cols-3 text-[10px] tracking-[3px] text-white/45 px-7 py-5 border-b border-white/10 bg-white/[0.03]">

            <div>
              COURSE STANDARD
            </div>

            <div className="text-center">
              OTHER CENTERS
            </div>

            <div className="text-center text-cyan-400 font-semibold">
              NEMO DIVING
            </div>

          </div>

          {/* ROWS */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-7 py-6 border-b border-white/5 items-center last:border-none"
            >

              {/* LABEL */}
              <div className="text-white/82 text-[14px] tracking-[0.45px] leading-[1.8]">

                {row.label}

              </div>

              {/* OTHER */}
              <div className="text-white/40 text-[13px] tracking-[0.35px] leading-[1.9] text-center px-3">

                {row.other}

              </div>

              {/* NEMO */}
              <div className="flex items-center justify-center gap-3 text-[13px] tracking-[0.35px] leading-[1.8] text-white">

                <div className="w-6 h-6 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0">

                  <Check className="text-cyan-400 w-3.5 h-3.5" />

                </div>

                <span>
                  {row.nemo}
                </span>

              </div>

            </div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}