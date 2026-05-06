"use client";

import { motion } from "framer-motion";

export function DiveTrainingShowcase() {
  return (
    <section
      className="relative py-32 bg-gradient-to-b from-[#031421] to-[#02101a] text-white overflow-hidden"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-[1120px] mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* LEFT CONTENT */}
        <div>

          {/* BADGE */}
          <div className="inline-block px-5 py-2 text-[10px] tracking-[3px] border border-cyan-400/30 text-cyan-400 rounded-full mb-7">

            PADI 5-STAR IDC CENTER

          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.18] tracking-[1px]">

            The Gold Standard of

            <br />

            <span className="text-cyan-400">
              Dive Training.
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="text-[15px] md:text-[16px] text-white/60 mt-8 max-w-[520px] leading-[2] tracking-[0.45px]">

            We don’t just create divers;
            we train the instructors who teach the world.
            Whether you're starting your journey
            or advancing your certification,
            experience elite-level mentorship,
            safety, and professionalism.

          </p>

          {/* HIGHLIGHT CARD */}
          <div className="mt-10 border border-yellow-400/30 rounded-3xl p-7 bg-[#02131d]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

            {/* CARD TITLE */}
            <h4 className="text-yellow-400 text-[12px] tracking-[2px] uppercase font-semibold">

              Our "Learn at Your Own Pace" Guarantee

            </h4>

            {/* CARD DESCRIPTION */}
            <p className="text-[14px] text-white/60 mt-5 leading-[2] tracking-[0.35px] max-w-[500px]">

              We prioritize confidence and mastery over strict timelines.
              Receive additional training sessions at no extra cost
              until you genuinely feel prepared and comfortable underwater.

            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-7 text-[10px] tracking-[1.2px]">

              <span className="px-4 py-2 border border-white/20 rounded-full text-white/80">

                ZERO RUSH POLICY

              </span>

              <span className="px-4 py-2 border border-purple-400/40 text-purple-300 rounded-full">

                FREE EXTRA SESSIONS

              </span>

              <span className="px-4 py-2 border border-yellow-400/40 text-yellow-300 rounded-full">

                CERTIFIED EXCELLENCE

              </span>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">

          <motion.img
            src="/dive1.jpg"
            className="rounded-2xl h-[180px] w-full object-cover shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
          />

          <motion.img
            src="/dive2.jpg"
            className="rounded-2xl h-[220px] w-full object-cover shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
          />

          <motion.img
            src="/dive3.jpg"
            className="rounded-2xl h-[220px] w-full object-cover shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
          />

          <motion.img
            src="/dive4.jpg"
            className="rounded-2xl h-[180px] w-full object-cover shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
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