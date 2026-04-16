import { motion } from "framer-motion";

export function AboutDiveCampus() {
  return (
    <section className="relative py-28 bg-[#0f2f4d] text-white font-habara overflow-hidden">

      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => (window.location.href = "/")}
        className="absolute top-8 left-6 z-50 flex items-center gap-2 text-white/70 hover:text-white transition group"
      >
        <span className="w-10 h-10 flex items-center justify-center rounded-full 
          bg-white/10 backdrop-blur-md border border-white/20 
          group-hover:bg-cyan-300 group-hover:text-black 
          transition-all duration-300">

          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 12H5" />
            <path d="M10 17L5 12L10 7" />
          </svg>
        </span>

        <span className="text-sm tracking-wide opacity-0 group-hover:opacity-100 transition duration-300">
          Back
        </span>
      </button>

      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl font-bold">
            About <span className="text-white/90">DiveCampus</span>
          </h2>

          <div className="text-right">
            <p className="text-white/60 tracking-widest">WHY US?</p>
            <div className="w-20 h-[2px] bg-white/40 mt-2 ml-auto" />
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT - DUBAI */}
          <div>
            <div className="relative group">

              <div className="absolute -top-4 -left-4 w-full h-full border-[6px] border-yellow-400 z-0" />

              <img
                src="/dubai.jpg"
                className="relative z-10 w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20" />

              {/* ✨ LABEL WITH SHINE */}
              <div className="absolute bottom-4 left-4 z-30 px-5 py-2 rounded-full 
                bg-white/10 backdrop-blur-md border border-white/20 
                text-white text-sm tracking-wide shadow-lg overflow-hidden">

                <span className="relative z-10">Dubai</span>

                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="shine absolute top-0 left-[-100%] w-[50%] h-full 
                    bg-gradient-to-r from-transparent via-white/40 to-transparent 
                    skew-x-[-20deg]" />
                </span>

              </div>
            </div>

            <p className="text-white/80 mt-6 leading-7 text-sm">
              Located in the heart of Dubai, DiveCampus launched in 2023 as the UAE’s first concept store dedicated to ‘everything diving’—and is home to the region’s largest indoor Dive Tank.

              Built using upcycled shipping containers and filled with 220,000 litres of fresh water, the 4-metre-deep tank is a signature space for dive training, try dives, and events.

              At DiveCampus, you can explore scuba for the first time, get certified, advance your diving skills, shop premium dive gear, host private events, or simply grab a specialty coffee at our in-house café.
            </p>
          </div>

          {/* RIGHT - KHORFAKKAN */}
          <div>
            <div className="relative group">

              <div className="absolute -top-4 -right-4 w-full h-full border-[6px] border-yellow-400 z-0" />

              <img
                src="/Khorfakkan.jpg"
                className="relative z-10 w-full h-[320px] object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20" />

              {/* ✨ LABEL WITH SHINE */}
              <div className="absolute bottom-4 left-4 z-30 px-5 py-2 rounded-full 
                bg-white/10 backdrop-blur-md border border-white/20 
                text-white text-sm tracking-wide shadow-lg overflow-hidden">

                <span className="relative z-10">Sharjah | Khorfakkan</span>

                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="shine absolute top-0 left-[-100%] w-[50%] h-full 
                    bg-gradient-to-r from-transparent via-white/40 to-transparent 
                    skew-x-[-20deg]" />
                </span>

              </div>
            </div>

            <p className="text-white/80 mt-6 leading-7 text-sm">
              DiveCampus Khorfakkan is a beachfront hub for divers and ocean lovers, centrally located to the UAE’s stunning East Coast dive sites.

              Set against the dramatic backdrop of the Hajar Mountains, Khor Fakkan is one of the country’s most iconic beach destinations — known for rich marine biodiversity.

              Explore coral reefs, turtles, rays, and more. Enjoy scuba, certifications, guided dives, or relax at our beach-facing patio.
            </p>
          </div>

        </div>
      </div>

      {/* ✨ SHINE ANIMATION */}
      <style jsx>{`
        @keyframes shineMove {
          0% { left: -100%; }
          50% { left: 120%; }
          100% { left: 120%; }
        }
        .shine {
          animation: shineMove 3s infinite;
        }
      `}</style>

    </section>
  );
}