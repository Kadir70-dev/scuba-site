import { motion } from "framer-motion";


export function PadIDivemaster() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/1.avif"
          alt="scuba"
          className="w-full h-full object-cover"
        />

        {/* ✅ FIXED OVERLAY (with opacity) */}
        <div className="absolute inset-0 bg-[#02182b]/60" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">

        {/* TOP BADGE */}
        <div className="relative overflow-hidden mb-6 px-5 py-2 text-xs tracking-widest border border-cyan-300/40 rounded-full text-cyan-200">

          {/* TEXT */}
          <span className="relative z-10">
            LEVEL 1 - ADVANCED OPEN WATER COURSE
          </span>

          {/* ✨ CRYSTAL WAVE LINE */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-md opacity-80"
          />
        </div>

        {/* SUB TEXT */}
        <p className="text-xs tracking-[3px] text-white/60 mb-4">
          AGES 12+ | DIVE UP TO 30M (100FT)
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          TAKE YOUR DIVING SKILLS TO THE{" "}
          <span className="text-cyan-400">NEXT LEVEL</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 text-white/70 max-w-2xl">
          Improve your underwater navigation, deep diving, and explore new
          adventures with certified instructors.
        </p>

        {/* PRICE CARD */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-6 shadow-xl">

          <p className="text-sm text-white/50 line-through mb-1">
            AED 2,999
          </p>

          <p className="text-4xl font-bold">
            1,999 <span className="text-cyan-400 text-lg">AED</span>
          </p>

          <p className="text-xs text-white/60 mt-2">
            Includes 5 Adventure Dives + Certification
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          
          <button className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:scale-105 transition duration-300">
            ENROLL NOW →
          </button>

          <button className="px-8 py-3 border border-white/30 rounded-lg text-white hover:bg-white/10 transition duration-300">
            BOOK VIA WHATSAPP
          </button>
        </div>

        {/* FEATURES */}
        <div className="mt-12 flex gap-10 text-white/60 text-xs flex-wrap justify-center">
          <span>✔ 5 Adventure Dives</span>
          <span>✔ Premium Gear</span>
          <span>✔ Certified Instructors</span>
          <span>✔ Flexible Schedule</span>
        </div>
      </div>
    </section>
  );
}