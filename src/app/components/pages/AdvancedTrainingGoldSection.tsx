"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users } from "lucide-react";

export function AdvancedTrainingGoldSection() {
  return (
    <section
      className="py-32 bg-[#f5f7fa]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">

        {/* ================= LEFT ================= */}
        <div>

          {/* BADGE */}
          <div className="inline-block px-4 py-2 text-[10px] tracking-widest rounded-full border border-cyan-400/30 text-cyan-500 mb-6">
            PADI 5-STAR IDC CENTER
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] leading-tight mb-6">
            The Gold Standard of{" "}
            <span className="text-cyan-500">
              Advanced Training.
            </span>
          </h2>

          {/* DESC */}
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-10">
            You aren’t just getting a card, you are earning a license to explore the deep.
            Whether navigating a wreck at 30m or drifting a night dive in Fujairah,
            experience the highest level of tactical safety and expertise in the UAE.
          </p>

          {/* PREMIUM CARD */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative p-6 rounded-2xl border border-yellow-300/40 bg-[#fffdf7] shadow-sm"
          >

            {/* ICON TOP */}
            <div className="absolute -top-4 left-6 bg-white p-2 rounded-full border border-yellow-300 shadow">
              <Award className="text-yellow-500 w-5 h-5" />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-[#0a0e27] mb-3 mt-2">
              “Competence Over Clock” Guarantee
            </h3>

            {/* TEXT */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              We prioritize mastery over timelines. If you aren’t 100% confident
              with your skills after the scheduled dives, we provide extended
              training at no extra cost.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3">

              <span className="px-4 py-2 text-xs border border-yellow-400 text-yellow-600 rounded-lg flex items-center gap-2">
                <Clock size={14} />
                ZERO RUSH POLICY
              </span>

              <span className="px-4 py-2 text-xs border border-yellow-400 text-yellow-600 rounded-lg flex items-center gap-2">
                <Award size={14} />
                FREE EXTRA SESSIONS
              </span>

              <span className="px-4 py-2 text-xs border border-yellow-400 text-yellow-600 rounded-lg flex items-center gap-2">
                <Users size={14} />
                MAX 4 STUDENTS
              </span>

            </div>

          </motion.div>

        </div>

        {/* ================= RIGHT (IMAGE GRID) ================= */}
        <div className="grid grid-cols-2 gap-5">

          {/* BIG IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="row-span-2 rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/A59I9512.jpg"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* TOP RIGHT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/A59I0374.jpg"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* BOTTOM RIGHT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="/A59I9631.jpg"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}