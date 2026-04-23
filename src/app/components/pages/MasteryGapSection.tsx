"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export function MasteryGapSection() {
  const rows = [
    {
      title: "Location Variety",
      standard: "Shore Dives Only",
      nemo: "Dubai + Fujairah Boat",
    },
    {
      title: "30M Deep Experience",
      standard: "Simulated / Sandy Bottom",
      nemo: "Reefs or Wrecks",
    },
    {
      title: "Gear Standard",
      standard: "Basic Jacket BCD",
      nemo: "Premium Gears",
    },
    {
      title: "Supervision Ratio",
      standard: "Crowded (6-8 Divers)",
      nemo: "Max 3 per Instructor",
    },
    {
      title: "Progress Photos",
      standard: "Paid Extra",
      nemo: "Included Free",
    },
  ];

  return (
    <section
      className="relative py-32 bg-[#02131d] text-white overflow-hidden"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-bold">
            The Advanced{" "}
            <span className="text-cyan-400">
              Mastery Gap
            </span>
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm">
            Most centers stop at “certified.” We train for competence.
            Compare the standard UAE protocol against the Nemo Hybrid Advantage.
          </p>
        </div>

        {/* ================= TABLE ================= */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-xl">

          {/* HEAD */}
          <div className="grid grid-cols-3 text-xs tracking-widest text-white/40 border-b border-white/10">
            <div className="p-5">PROTOCOL METRIC</div>
            <div className="p-5 text-center">STANDARD CENTERS</div>
            <div className="p-5 text-center text-cyan-400">
              NEMO HYBRID
            </div>
          </div>

          {/* ROWS */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-3 border-b border-white/10 last:border-none items-center"
            >

              {/* TITLE */}
              <div className="p-5 text-white/80 text-sm">
                {row.title}
              </div>

              {/* STANDARD */}
              <div className="p-5 flex items-center justify-center gap-2 text-red-400 text-sm">
                <X size={16} />
                {row.standard}
              </div>

              {/* NEMO */}
              <div className="p-5 flex items-center justify-center">
                <div className="flex items-center gap-2 px-5 py-2 rounded-lg border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-sm">

                  <Check size={16} />
                  {row.nemo}

                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}