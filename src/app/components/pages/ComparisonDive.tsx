"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export function ComparisonDive() {
  const data = [
    {
      feature: "Base Location",
      others: "Public Beach",
      nemo: "Private Beach & Pool",
    },
    {
      feature: "Parking",
      others: "Paid / Public",
      nemo: "Free",
    },
    {
      feature: "Gear Quality",
      others: "Standard",
      nemo: "Premium Gears",
    },
    {
      feature: "Female Available",
      others: "Random",
      nemo: "Available",
    },
    {
      feature: "Marine Life",
      others: "Limited",
      nemo: "Turtles & Coral",
    },
    {
      feature: "Student Ratio",
      others: "8+ Group",
      nemo: "Max 3 in Ocean / 4 in Pool",
    },
  ];

  return (
    <>
      <section
        className="relative py-36 bg-[#02131d] text-white overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

        {/* HEADER */}
        <div className="relative text-center mb-20 px-6 max-w-4xl mx-auto">

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.18] tracking-[1px] mb-7">

            DON'T SETTLE FOR{" "}

            <span className="text-cyan-400">
              JUST "GOOD ENOUGH"
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/60 max-w-3xl mx-auto text-[15px] md:text-[16px] leading-[1.95] tracking-[0.45px]">

            Get certified in the luxury of Palm Jumeirah,
            then explore the UAE’s most pristine waters
            in Fujairah with premium training standards,
            elite supervision, and world-class diving experiences.

          </p>

        </div>

        {/* TABLE */}
        <div className="relative max-w-6xl mx-auto px-6">

          <div className="rounded-3xl border border-white/10 overflow-hidden backdrop-blur-xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

            {/* HEAD */}
            <div className="grid grid-cols-3 text-[10px] tracking-[3px] text-white/40 border-b border-white/10 bg-white/[0.03]">

              <div className="p-6">
                FEATURE
              </div>

              <div className="p-6 text-center">
                OTHERS
              </div>

              <div className="p-6 text-center text-cyan-400 font-semibold">
                NEMO DIVING
              </div>

            </div>

            {/* ROWS */}
            {data.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-3 border-b border-white/10 last:border-none items-center"
              >

                {/* FEATURE */}
                <div className="p-6 text-white/82 text-[14px] tracking-[0.45px] leading-[1.8]">

                  {row.feature}

                </div>

                {/* OTHERS */}
                <div className="p-6 flex items-center justify-center gap-3 text-red-400 text-[13px] tracking-[0.35px] leading-[1.8]">

                  <X size={16} className="shrink-0" />

                  <span>
                    {row.others}
                  </span>

                </div>

                {/* NEMO */}
                <div className="p-6 flex items-center justify-center">

                  <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-[13px] tracking-[0.35px] leading-[1.7]">

                    <Check size={16} className="shrink-0" />

                    <span>
                      {row.nemo}
                    </span>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* HARABARA FONT */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </>
  );
}