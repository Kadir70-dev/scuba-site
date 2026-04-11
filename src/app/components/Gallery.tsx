import { motion } from 'framer-motion';
import Masonry from 'react-responsive-masonry';
import { useState } from 'react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=800&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=600&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=800&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&h=600&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&h=800&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1516843359000-80e50b4537fc?w=800&h=600&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=600&fit=crop' },
  ];

  return (
    <section id="gallery" className="relative py-32 overflow-hidden">

      {/* 🔥 HARABARA BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45]" />

      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="text-cyan-300 text-sm tracking-wider uppercase">
              Visual Journey
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Underwater{" "}
            <span className="text-cyan-300">
              Gallery
            </span>
          </h2>
        </motion.div>

        {/* MASONRY */}
        <Masonry columnsCount={3} gutter="1.5rem">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 0.97 }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={image.url}
                  className="w-full h-auto"
                  whileHover={{ scale: 1.1 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#02131d]/70 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border border-transparent group-hover:border-cyan-300/60 transition rounded-xl" />

              {/* Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="px-6 py-3 rounded-full bg-cyan-300 text-[#0b2c45] font-bold shadow-lg">
                  View
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* FULL VIEW */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b2c45]/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </section>
  );
}