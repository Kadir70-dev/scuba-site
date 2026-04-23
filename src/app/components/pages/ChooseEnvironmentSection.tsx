"use client";

import { motion } from "framer-motion";

export function ChooseEnvironmentSection() {
  return (
    <section
      className="relative py-32 bg-[#03121c] text-white overflow-hidden"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#061a28] via-[#03121c] to-black" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20">

          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            CHOOSE{" "}
            <span className="text-cyan-400">
              YOUR ENVIRONMENT
            </span>
          </h2>

          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm">
            Choose to master your skills at our Palm Jumeirah HQ, or upgrade your
            expedition to Fujairah for your final dives and encounter exotic marine biodiversity.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ================= CARD 1 ================= */}
          <motion.div
            whileHover={{ y: -6 }}
            className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >

            {/* TOP LABEL */}
            <p className="text-[10px] tracking-[3px] text-cyan-400 mb-4">
              OPERATIONAL BASE: DUBAI HQ
            </p>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold mb-4">
              PALM JUMEIRAH
            </h3>

            {/* DESC */}
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Master 100% of your certification at our flagship facility.
              Designed for high-speed training and luxury convenience without
              the need for external travel.
            </p>

            {/* LIST */}
            <div className="space-y-3 text-sm text-white/70">

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                AZURE RESIDENCES FACILITY
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                PRIVATE BEACH TRAINING
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                ZERO TRAVEL REQUIREMENT
              </div>

            </div>

          </motion.div>

          {/* ================= CARD 2 ================= */}
          <motion.div
            whileHover={{ y: -6 }}
            className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >

            {/* TOP LABEL */}
            <p className="text-[10px] tracking-[3px] text-cyan-400 mb-4">
              ELITE UPGRADE
            </p>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold mb-4">
              THE MARINE EXPEDITION
            </h3>

            {/* DESC */}
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Transfer to the East Coast for your graduation mission.
              Encounter elite marine life in the Indian Ocean.
              Included as a complimentary upgrade for our students.
            </p>

            {/* LIST */}
            <div className="space-y-3 text-sm text-white/70">

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                TURTLES, SHARKS & RAYS
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                EXOTIC REEF BIODIVERSITY
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                PROFESSIONAL BOAT OPS
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}