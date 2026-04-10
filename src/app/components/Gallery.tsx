import { motion } from 'framer-motion';
import Masonry from 'react-responsive-masonry';
import { useState } from 'react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=800&fit=crop', aspectRatio: 'tall' },
    { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop', aspectRatio: 'wide' },
    { url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=600&fit=crop', aspectRatio: 'square' },
    { url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=800&fit=crop', aspectRatio: 'tall' },
    { url: 'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop', aspectRatio: 'wide' },
    { url: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&h=600&fit=crop', aspectRatio: 'square' },
    { url: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&h=800&fit=crop', aspectRatio: 'tall' },
    { url: 'https://images.unsplash.com/photo-1516843359000-80e50b4537fc?w=800&h=600&fit=crop', aspectRatio: 'wide' },
    { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=600&fit=crop', aspectRatio: 'square' },
  ];

  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0f172a] to-[#0a0e27]" />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#00d4ff]/20 mb-6">
            <span className="text-[#00d4ff] text-sm font-medium tracking-wider uppercase">
              Visual Journey
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Underwater <span className="bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] bg-clip-text text-transparent">Gallery</span>
          </h2>
        </motion.div>

        <Masonry columnsCount={3} gutter="1.5rem">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 0.98 }}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00d4ff]/50 transition-colors duration-500 rounded-xl" />

              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              >
                <div className="px-6 py-3 rounded-full bg-[#00d4ff]/90 backdrop-blur-sm text-[#0a0e27] font-bold">
                  View Full Size
                </div>
              </motion.div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e27]/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full rounded-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
}
