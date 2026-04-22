"use client";

import { motion } from "framer-motion";
import { Shield, Star, Award } from "lucide-react";

export function GoldStandardSection() {
  return (
    <section className="py-32 bg-[#f5f7fa] overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* BADGE */}
          <div className="inline-block px-4 py-2 text-xs tracking-widest rounded-full border border-cyan-400/30 text-cyan-500 mb-6">
            PADI 5-STAR IDC CENTER
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-6 leading-tight">
            The Gold Standard of{" "}
            <span className="text-cyan-500">Dive Training.</span>
          </h2>

          {/* DESC */}
          <p className="text-gray-500 max-w-xl mb-10">
            We do not just certify divers; we train the instructors who teach the world.
            Experience the highest level of safety, technical precision, and expertise in the UAE.
          </p>

          {/* PREMIUM CARD */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative p-6 rounded-2xl border border-yellow-300/40 bg-[#fffdf7] shadow-sm"
          >

            {/* ICON */}
            <div className="absolute -top-4 left-6 bg-white p-2 rounded-full border border-yellow-300 shadow">
              <Shield className="text-yellow-500 w-5 h-5" />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-[#0a0e27] mb-3 mt-2">
              The Zero-Compromise Standard
            </h3>

            {/* TEXT */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              At 18 meters deep, equipment and instruction quality are not optional.
              We employ the region's top PADI professionals and utilize strictly maintained,
              state-of-the-art gear. No shortcuts. No budget compromises. Just pure technical mastery.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3">

              <span className="px-4 py-2 text-xs border border-yellow-400 text-yellow-600 rounded-lg flex items-center gap-2">
                <Star size={14} />
                TOP 1% INSTRUCTORS
              </span>

              <span className="px-4 py-2 text-xs border border-yellow-400 text-yellow-600 rounded-lg flex items-center gap-2">
                <Award size={14} />
                PRO-GRADE GEAR
              </span>

              <span className="px-4 py-2 text-xs border border-yellow-400 text-yellow-600 rounded-lg flex items-center gap-2">
                <Shield size={14} />
                UNCOMPROMISING SAFETY
              </span>

            </div>
          </motion.div>

        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6">

          {/* BIG IMAGE */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="row-span-2 rounded-2xl overflow-hidden"
          >
            <img
              src="/A59I9544.jpg"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* SMALL TOP */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="/A59I0374.jpg"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* SMALL BOTTOM */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden"
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