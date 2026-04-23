"use client";

import { motion } from "framer-motion";

export function DiveTrainingShowcase() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-[#031421] to-[#02101a] text-white"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT CONTENT */}
        <div>

          {/* BADGE */}
          <div className="inline-block px-4 py-1 text-[10px] tracking-widest border border-cyan-400/30 text-cyan-400 rounded-full mb-5">
            PADI 5-STAR IDC CENTER
          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
            The Gold Standard of <br />
            <span className="text-cyan-400">Dive Training.</span>
          </h2>

          {/* DESC */}
          <p className="text-[12px] text-white/60 mt-4 max-w-[420px] leading-relaxed">
            We don’t just create divers; we train the instructors who teach the world.
            Whether you're starting or advancing, experience top-tier safety and expertise.
          </p>

          {/* HIGHLIGHT CARD */}
          <div className="mt-6 border border-yellow-400/40 rounded-2xl p-5 bg-[#02131d]">

            <h4 className="text-yellow-400 text-xs font-semibold">
              Our "Learn at Your Own Pace" Guarantee
            </h4>

            <p className="text-[11px] text-white/60 mt-2 leading-relaxed">
              We prioritize your skills over strict timelines. Get extra sessions at no cost until you're confident.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4 text-[10px]">
              <span className="px-3 py-1 border border-white/20 rounded-full">
                ZERO RUSH POLICY
              </span>
              <span className="px-3 py-1 border border-purple-400/40 text-purple-300 rounded-full">
                FREE EXTRA SESSIONS
              </span>
              <span className="px-3 py-1 border border-yellow-400/40 text-yellow-300 rounded-full">
                CERTIFIED EXCELLENCE
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-3">

          <motion.img
            src="/dive1.jpg"
            className="rounded-xl h-[160px] w-full object-cover"
            whileHover={{ scale: 1.03 }}
          />

          <motion.img
            src="/dive2.jpg"
            className="rounded-xl h-[200px] w-full object-cover"
            whileHover={{ scale: 1.03 }}
          />

          <motion.img
            src="/dive3.jpg"
            className="rounded-xl h-[200px] w-full object-cover"
            whileHover={{ scale: 1.03 }}
          />

          <motion.img
            src="/dive4.jpg"
            className="rounded-xl h-[160px] w-full object-cover"
            whileHover={{ scale: 1.03 }}
          />

        </div>

      </div>

      {/* FONT */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
        }
      `}</style>
    </section>
  );
}