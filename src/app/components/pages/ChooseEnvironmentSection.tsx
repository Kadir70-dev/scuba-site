"use client";

import { motion } from "framer-motion";

export function ChooseEnvironmentSection() {
  return (
    <section
      className="relative py-36 bg-[#03121c] text-white overflow-hidden"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#061a28] via-[#03121c] to-black" />

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24 max-w-4xl mx-auto">

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.2] tracking-[1px]">

            CHOOSE{" "}

            <span className="text-cyan-400">
              YOUR ENVIRONMENT
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/55 mt-8 max-w-3xl mx-auto text-[15px] md:text-[16px] leading-[1.95] tracking-[0.45px]">

            Choose to master your skills at our Palm
            Jumeirah HQ, or upgrade your expedition to
            Fujairah for your final dives and encounter
            exotic marine biodiversity.

          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-9">

          {/* ================= CARD 1 ================= */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >

            {/* TOP LABEL */}
            <p className="text-[10px] tracking-[3.5px] text-cyan-400 mb-6">

              OPERATIONAL BASE: DUBAI HQ

            </p>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold tracking-[0.8px] leading-[1.4] mb-6">

              PALM JUMEIRAH

            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/60 text-[14px] leading-[1.95] tracking-[0.35px] mb-8">

              Master 100% of your certification at our
              flagship facility. Designed for high-speed
              training and luxury convenience without
              the need for external travel.

            </p>

            {/* FEATURES */}
            <div className="space-y-5 text-sm text-white/72">

              <div className="flex items-center gap-4 tracking-[0.45px]">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                AZURE RESIDENCES FACILITY

              </div>

              <div className="flex items-center gap-4 tracking-[0.45px]">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                PRIVATE BEACH TRAINING

              </div>

              <div className="flex items-center gap-4 tracking-[0.45px]">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                ZERO TRAVEL REQUIREMENT

              </div>

            </div>

          </motion.div>

          {/* ================= CARD 2 ================= */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >

            {/* TOP LABEL */}
            <p className="text-[10px] tracking-[3.5px] text-cyan-400 mb-6">

              ELITE UPGRADE

            </p>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold tracking-[0.8px] leading-[1.4] mb-6">

              THE MARINE EXPEDITION

            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/60 text-[14px] leading-[1.95] tracking-[0.35px] mb-8">

              Transfer to the East Coast for your
              graduation mission. Encounter elite
              marine life in the Indian Ocean.
              Included as a complimentary upgrade
              for our students.

            </p>

            {/* FEATURES */}
            <div className="space-y-5 text-sm text-white/72">

              <div className="flex items-center gap-4 tracking-[0.45px]">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                TURTLES, SHARKS & RAYS

              </div>

              <div className="flex items-center gap-4 tracking-[0.45px]">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                EXOTIC REEF BIODIVERSITY

              </div>

              <div className="flex items-center gap-4 tracking-[0.45px]">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                PROFESSIONAL BOAT OPS

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}