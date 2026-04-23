"use client";

import { motion } from "framer-motion";

export function Community() {

  const images = [
    "/A59I0374.jpg",
    "/A59I0450.jpg",
    "/A59I0656.jpg",
    "/A59I9512.jpg",
    "/A59I9544.jpg",
    "/A59I9590.jpg",
    "/A59I9631.jpg",
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.jpeg",
    "/img5.jpeg",
    "/dubai.jpg",
  ];

  return (
    <>
      <section
        className="relative py-32 bg-white text-[#0a0e27] overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto px-6 mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            BUILT ON PASSION. <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              BOUND BY ADVENTURE.
            </span>
          </h2>

          <p className="text-white/60 mt-4 text-sm md:text-base">
            Join a global family of explorers. From weekend dives in Fujairah to
            international expeditions — we don’t just dive together, we travel,
            laugh, and create memories.
          </p>
        </div>

        {/* GRID */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-[180px]">

            {images.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.3 }}
                className={`
                  relative overflow-hidden rounded-xl group
                  ${i % 7 === 0 ? "col-span-2 row-span-2" : ""}
                  ${i % 5 === 0 ? "row-span-2" : ""}
                `}
              >

                {/* IMAGE */}
                <img
                  src={src}
                  alt="gallery"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />

                {/* GLOW BORDER ON HOVER */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400/40 transition" />

              </motion.div>
            ))}

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