import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FeaturedExperiences() {
  const [activePopup, setActivePopup] = useState<null | "dubai" | "khor">(null);

  return (
    <section className="relative w-full h-[650px] overflow-hidden font-habara">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vid1.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* TOP BUTTONS */}
      {/* <div className="absolute top-6 left-6 right-6 flex justify-between z-20">

        <button
          onClick={() => setActivePopup("dubai")}
          className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm uppercase tracking-[2px] 
          hover:bg-cyan-300 hover:text-black transition-all duration-300"
        >
          Dubai
        </button>

        <button
          onClick={() => setActivePopup("khor")}
          className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm uppercase tracking-[2px] 
          hover:bg-cyan-300 hover:text-black transition-all duration-300"
        >
          Khor Fakkan
        </button>

      </div>
 */}
      {/* TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-white/80 text-xl mb-4 uppercase">
          SPECIAL PROJECTS
        </p>

        <h2 className="text-white text-4xl md:text-6xl font-bold max-w-5xl uppercase">
          LET’S MAKE YOUR EVENT OR PROJECT EXTRAORDINARY
        </h2>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {activePopup && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActivePopup(null)}
            />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                fixed z-50
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[95%] max-w-[1000px]
                p-6
                rounded-[28px]
                bg-white/10 backdrop-blur-xl
                border border-white/20
                text-white
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              "
            >
              {activePopup === "dubai" ? (
                <div className="grid md:grid-cols-2 gap-6 items-stretch">

                  {/* IMAGE FIXED */}
                  <div className="w-full h-[300px] md:h-full flex items-center justify-center bg-black/20 rounded-2xl overflow-hidden">
                    <img
                      src="/dubai.jpg"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-between">

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-cyan-300 uppercase">
                        Dubai Experience
                      </h3>

                      <p className="text-white/80 text-sm leading-7 mb-4">
                        Located in the heart of Dubai, DiveCampus launched in 2023 as the UAE’s first concept store dedicated to diving.
                      </p>

                      <p className="text-white/80 text-sm leading-7 mb-4">
                        Built using upcycled shipping containers with 220,000 litres of water and a 4m deep tank.
                      </p>

                      <ul className="text-sm text-cyan-300 space-y-2">
                        <li>• 220,000 Litres Dive Tank</li>
                        <li>• 4m Indoor Training</li>
                        <li>• UAE First Concept Store</li>
                      </ul>
                    </div>

                    {/* MAP FIXED HEIGHT */}
                    <iframe
                      src="https://www.google.com/maps?q=Dubai&output=embed"
                      className="w-full h-[180px] rounded-xl mt-4 border-0"
                      loading="lazy"
                    />

                    {/* BUTTON */}
                    <button
                      onClick={() => setActivePopup(null)}
                      className="mt-4 w-full py-3 rounded-full bg-cyan-300 text-black uppercase tracking-[2px] hover:scale-105 transition"
                    >
                      Close
                    </button>

                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300 uppercase">
                    Khor Fakkan Experience
                  </h3>

                  <p className="text-white/80 text-sm leading-7">
                    Explore real ocean diving with reefs and marine life.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}