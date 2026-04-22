"use client";

import { motion } from "framer-motion";

export function CommunityGallerySection() {

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
    // "/Khorfakkan.jpg",
  ];

  return (
   <section className="py-28 bg-[#06141f] text-white">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0a0e27] leading-tight">
          BUILT ON PASSION. <br />
          <span className="text-cyan-500">
            BOUND BY ADVENTURE.
          </span>
        </h2>

        <p className="text-gray-500 mt-4 text-sm md:text-base">
          Join a global family of explorers. From weekend dives in Fujairah to
          international expeditions — we don’t just dive together, we travel,
          laugh, and create memories.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-[180px]">

          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`
                relative overflow-hidden rounded-xl
                ${i % 7 === 0 ? "col-span-2 row-span-2" : ""}
                ${i % 5 === 0 ? "row-span-2" : ""}
              `}
            >
              <img
                src={src}
                alt="gallery"
                className="w-full h-full object-cover transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition duration-300" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}