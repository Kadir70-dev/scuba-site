"use client";

import { motion } from "framer-motion";

export function PadiOpenDiver() {
  return (
    <>
      <section
        className="relative min-h-screen w-full overflow-hidden text-white"
        style={{ fontFamily: "Harabara, sans-serif" }} // ✅ FORCE FONT HERE
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/1.avif"
            alt="scuba"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#02182b]/70" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">

          {/* BADGE */}
          <div className="relative overflow-hidden mb-6 px-5 py-2 text-[11px] tracking-widest border border-cyan-300/40 rounded-full text-cyan-200">
            <span className="relative z-10">
              LEVEL 2 - ADVANCED OPEN WATER
            </span>

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-md opacity-80"
            />
          </div>

          {/* SUB TEXT */}
          <p className="text-[10px] tracking-[3px] text-white/60 mb-4">
            ADVANCED LEVEL | BUILD ON YOUR SKILLS
          </p>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl tracking-tight">
            WHY STOP <span className="text-cyan-400">AT 18 METERS?</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 text-white/70 max-w-2xl text-sm md:text-base leading-relaxed">
            The shallow reef was just the training ground. Unlock the deep sector to encounter sharks,
            huge rays, and kingfish that patrol the 30m wrecks.
          </p>

          {/* PRICE CARD */}
          <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-10 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-center">
            <p className="text-sm text-white/40 line-through">
              AED 2,199
            </p>

            <h2 className="text-5xl font-bold mt-1">
              1,599 <span className="text-cyan-400 text-lg">AED</span>
            </h2>

            <p className="text-xs text-white/60 mt-2">
              Includes Basic Training + Certification
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-4">

            {/* PREMIUM BUTTON */}
            <button className="group relative overflow-hidden rounded-xl w-[280px] py-3">

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-70 group-hover:opacity-100 transition" />

              <div className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(0,200,255,0.4)]">

                GET LICENSED FOR 30M

                <span className="group-hover:translate-x-1 transition">
                  →
                </span>

                <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-md opacity-60 animate-[shine_2.5s_linear_infinite]" />
              </div>
            </button>

            {/* WHATSAPP */}
            <button className="w-[280px] py-3 border border-white/20 rounded-xl text-white/80 hover:bg-white/10 transition backdrop-blur-md">
              BOOK VIA WHATSAPP
            </button>

          </div>

          {/* FEATURES */}
          <div className="mt-12 flex gap-8 text-white/60 text-xs flex-wrap justify-center">
            <span>✔ 5 Adventure Dives</span>
            <span>✔ Full Kit Rental</span>
            <span>✔ Multiple Locations</span>
            <span>✔ Get Licensed for 30M</span>
          </div>

        </div>
      </section>

      {/* LOCAL FONT + ANIMATION */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @keyframes shine {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </>
  );
}