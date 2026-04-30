"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const images = [
    "/A59I0374.jpg",
    "/A59I0450.jpg",
    "/A59I0656.jpg",
    "/A59I9512.jpg",
    "/A59I9544.jpg",
    "/A59I9590.jpg",
    "/A59I9631.jpg",
  ].map((url) => ({ url }));

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const child = container.children[index] as HTMLElement;

    container.scrollTo({
      left:
        child.offsetLeft -
        container.offsetWidth / 2 +
        child.offsetWidth / 2,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const next = () => scrollToIndex((currentIndex + 1) % images.length);
  const prev = () =>
    scrollToIndex((currentIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const handleScroll = () => {
      const center = container.scrollLeft + container.offsetWidth / 2;

      let closest = 0;
      let minDist = Infinity;

      Array.from(container.children).forEach((child, i) => {
        const el = child as HTMLElement;
        const childCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(center - childCenter);

        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      setCurrentIndex(closest);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden font-habara">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45]" />

      <div className="relative max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white tracking-wide">
            Underwater{" "}
            <span className="text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
              Gallery
            </span>
          </h2>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT */}
          <motion.button
            onClick={prev}
            whileTap={{ scale: 0.9 }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
            w-12 h-12 flex items-center justify-center
            rounded-full bg-white/10 backdrop-blur-xl 
            border border-white/20 text-white
            hover:bg-cyan-300/20 hover:scale-110 transition"
          >
            ‹
          </motion.button>

          {/* RIGHT */}
          <motion.button
            onClick={next}
            whileTap={{ scale: 0.9 }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
            w-12 h-12 flex items-center justify-center
            rounded-full bg-white/10 backdrop-blur-xl 
            border border-white/20 text-white
            hover:bg-cyan-300/20 hover:scale-110 transition"
          >
            ›
          </motion.button>

          {/* IMAGES */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto px-16 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {images.map((image, index) => {
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={index}
                  className="snap-center flex-shrink-0 min-w-[280px] md:min-w-[360px] cursor-pointer"
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.5,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="relative rounded-xl overflow-hidden">

                    <img
                      src={image.url}
                      className="w-full h-[420px] object-cover rounded-xl"
                    />

                    {/* GLOW */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl border border-cyan-300/40 shadow-[0_0_25px_rgba(34,211,238,0.4)]" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-6">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`cursor-pointer transition-all ${
                  i === currentIndex
                    ? "w-8 h-2 bg-cyan-300 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                    : "w-2 h-2 bg-white/30 rounded-full"
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* FULL SCREEN */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={images[selectedIndex].url}
              className="max-w-[90%] max-h-[80%] rounded-xl"
            />

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* REMOVE SCROLLBAR */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}