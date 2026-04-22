"use client";

import { motion } from "framer-motion";
import { Shield, Star, Award } from "lucide-react";

export function GoldStandardSection() {
  return (
    <>
      <section
        className="py-32 bg-gradient-to-b from-[#f5f7fa] to-[#eef2f6] overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center relative z-10">

          {/* LEFT CONTENT */}
          <div>

            {/* BADGE */}
            <div className="inline-block px-4 py-2 text-[11px] tracking-[3px] rounded-full border border-cyan-400/30 text-cyan-500 mb-6">
              PADI 5-STAR IDC CENTER
            </div>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0e27] mb-6 leading-tight">
              The Gold Standard of{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Dive Training
              </span>
            </h2>

            {/* DESC */}
            <p className="text-gray-500 max-w-xl mb-10 text-sm md:text-base leading-relaxed">
              We do not just certify divers; we train the instructors who teach the world.
              Experience the highest level of safety, technical precision, and expertise in the UAE.
            </p>

            {/* PREMIUM CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative p-6 rounded-2xl border border-yellow-300/40 bg-gradient-to-br from-[#fffdf7] to-[#fff7d6] shadow-md"
            >

              {/* ICON FLOAT */}
              <div className="absolute -top-5 left-6 bg-white p-2.5 rounded-full border border-yellow-300 shadow-lg">
                <Shield className="text-yellow-500 w-5 h-5" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#0a0e27] mb-3 mt-3">
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

                <span className="px-4 py-2 text-xs rounded-lg flex items-center gap-2 border border-yellow-400/50 bg-yellow-50 text-yellow-600">
                  <Star size={14} />
                  TOP 1% INSTRUCTORS
                </span>

                <span className="px-4 py-2 text-xs rounded-lg flex items-center gap-2 border border-yellow-400/50 bg-yellow-50 text-yellow-600">
                  <Award size={14} />
                  PRO-GRADE GEAR
                </span>

                <span className="px-4 py-2 text-xs rounded-lg flex items-center gap-2 border border-yellow-400/50 bg-yellow-50 text-yellow-600">
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
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="row-span-2 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
            >
              <img
                src="/A59I9544.jpg"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

            {/* SMALL TOP */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src="/A59I0374.jpg"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

            {/* SMALL BOTTOM */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src="/A59I9631.jpg"
                className="w-full h-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

          </div>

        </div>
      </section>

      {/* FONT LOAD */}
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