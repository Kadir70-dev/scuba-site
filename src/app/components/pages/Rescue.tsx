"use client";

import { motion } from "framer-motion";

export function Rescue() {
  return (
    <>
      <section
        className="relative min-h-screen w-full overflow-hidden text-white"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/AWEART.jpg" // 🔥 use proper rescue image
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-[#02131d]/80" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">

          {/* BADGE */}
          <div className="relative overflow-hidden mb-6 px-5 py-2 text-[11px] tracking-widest border border-cyan-400/30 rounded-full text-cyan-300 backdrop-blur-md">
            LEVEL 3 - PADI RESCUE DIVER

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent blur-md"
            />
          </div>

          {/* SMALL TEXT */}
          <p className="text-xs tracking-[3px] text-white/50 mb-3">
            SERIOUS FUN.
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            SERIOUS{" "}
            <span className="text-cyan-400">CONFIDENCE.</span>
          </h1>

          {/* DESC */}
          <p className="mt-4 text-white/60 max-w-2xl text-sm md:text-base">
            Become the diver everyone wants as a buddy. Build your confidence at Dubai’s premier
            training facility with real-life rescue scenarios.
          </p>

          {/* PREMIUM GLASS CARD */}
          <div className="mt-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-10 py-6 shadow-[0_20px_80px_rgba(0,0,0,0.6)] text-center">

            <p className="text-sm text-white/40 line-through">
              AED 2,500
            </p>

            <h2 className="text-5xl font-bold mt-1">
              1,720 <span className="text-cyan-400 text-lg">AED</span>
            </h2>

            {/* TAGS */}
            <div className="flex justify-center gap-2 mt-3 flex-wrap text-[10px] text-white/60">
              <span className="px-3 py-1 border border-white/20 rounded-full">
                EFR INCLUDED
              </span>
              <span className="px-3 py-1 border border-white/20 rounded-full">
                3 DAYS TRAINING
              </span>
              <span className="px-3 py-1 border border-white/20 rounded-full">
                FULL GEAR INCLUDED
              </span>
            </div>

          </div>

          {/* CTA BUTTON */}
          <div className="mt-8">

            <button className="group relative overflow-hidden rounded-xl px-10 py-3">

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-70 group-hover:opacity-100 transition" />

              {/* BUTTON */}
              <div className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl px-10 py-3 flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(0,200,255,0.4)]">

                START RESCUE TRAINING

                <span className="group-hover:translate-x-1 transition">
                  →
                </span>

                {/* SHINE */}
                <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-md opacity-60 animate-[shine_2.5s_linear_infinite]" />
              </div>

            </button>

            <p className="text-[11px] text-white/40 mt-2">
              Pay in 4 interest-free payments with tabby
            </p>

          </div>

        </div>

        {/* BOTTOM INFO BAR */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/40 backdrop-blur-md">

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center text-xs text-white/60 py-4">

            <div>
              <p className="text-white/30 text-[10px]">PREREQUISITE</p>
              Advanced Open Water
            </div>

            <div>
              <p className="text-white/30 text-[10px]">CERTIFICATION</p>
              PADI Rescue + EFR
            </div>

            <div>
              <p className="text-white/30 text-[10px]">TRAINING</p>
              Pool + Ocean Scenarios
            </div>

            <div>
              <p className="text-white/30 text-[10px]">LOCATION</p>
              Palm Jumeirah & Fujairah
            </div>

          </div>

        </div>

      </section>

      {/* SHINE ANIMATION */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
        }

        @keyframes shine {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </>
  );
}