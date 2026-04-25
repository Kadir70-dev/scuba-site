"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function GoldStandardSectionDive() {
  return (
    <section
      className="py-20 bg-[#f4f7fb]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* LEFT CONTENT */}
        <div>

          {/* BADGE */}
          <div className="inline-block text-[10px] tracking-widest px-4 py-1 rounded-full border border-cyan-300 text-cyan-500 mb-4">
            PADI 5-STAR IDC CENTER
          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0e27] leading-tight">
            The Gold Standard of <br />
            <span className="text-cyan-500">Dive Training.</span>
          </h2>

          {/* DESC */}
          <p className="text-sm text-gray-500 mt-4 max-w-[420px] leading-relaxed">
            We don't just create divers; we train the instructors who teach the world.
            Experience the highest level of safety and expertise in the UAE.
          </p>

          {/* PREMIUM CARD */}
          <div className="mt-8 border border-yellow-300 rounded-2xl p-6 bg-[#fffdf7] shadow-sm">

            {/* ICON */}
            <div className="mb-3 text-yellow-500">
              <ShieldCheck className="w-5 h-5" />
            </div>

            {/* TITLE */}
            <h3 className="text-sm font-semibold text-[#0a0e27]">
              "Learn at Your Pace" Guarantee
            </h3>

            {/* TEXT */}
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              We prioritize your skills over strict timelines. Get extra training sessions at no cost
              until you're fully confident.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4 text-[10px]">
              <span className="px-3 py-1 border border-yellow-300 rounded-full text-yellow-600">
                ZERO RUSH POLICY
              </span>
              <span className="px-3 py-1 border border-yellow-300 rounded-full text-yellow-600">
                FREE EXTRA SESSIONS
              </span>
              <span className="px-3 py-1 border border-yellow-300 rounded-full text-yellow-600">
                1-ON-1 AVAILABLE
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            <motion.img
              src="/img1.jpg"
              className="rounded-xl h-[120px] object-cover w-full"
              whileHover={{ scale: 1.03 }}
            />
            <motion.img
              src="/img2.jpg"
              className="rounded-xl h-[200px] object-cover w-full"
              whileHover={{ scale: 1.03 }}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 mt-6">
            <motion.img
              src="/img3.jpg"
              className="rounded-xl h-[200px] object-cover w-full"
              whileHover={{ scale: 1.03 }}
            />
            <motion.img
              src="/img4.jpg"
              className="rounded-xl h-[140px] object-cover w-full"
              whileHover={{ scale: 1.03 }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}