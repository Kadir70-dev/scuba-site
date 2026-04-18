import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const images = [
    '/A59I0374.jpg',
    '/A59I0450.jpg',
    '/A59I0656.jpg',
    '/A59I9512.jpg',
    '/A59I9544.jpg',
    '/A59I9590.jpg',
    '/A59I9631.jpg',
    '/AWEART.jpg',
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Underwater <span className="text-cyan-300">Gallery</span>
          </h2>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT ARROW */}
          <motion.button
            onClick={prev}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
            w-12 h-12 flex items-center justify-center
            rounded-full bg-white/10 backdrop-blur-xl 
            border border-white/20 text-white
            shadow-lg hover:shadow-cyan-400/30
            hover:scale-110 transition-all duration-300"
          >
            <svg width="20" height="20" stroke="currentColor" strokeWidth="2">
              <path d="M12 4L6 10L12 16" />
            </svg>
          </motion.button>

          {/* RIGHT ARROW */}
          <motion.button
            onClick={next}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
            w-12 h-12 flex items-center justify-center
            rounded-full bg-white/10 backdrop-blur-xl 
            border border-white/20 text-white
            shadow-lg hover:shadow-cyan-400/30
            hover:scale-110 transition-all duration-300"
          >
            <svg width="20" height="20" stroke="currentColor" strokeWidth="2">
              <path d="M8 4L14 10L8 16" />
            </svg>
          </motion.button>

          {/* IMAGE ROW */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-14 no-scrollbar"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="snap-center flex-shrink-0 min-w-[280px] md:min-w-[360px] rounded-xl overflow-hidden cursor-pointer"
                animate={{
                  scale: index === currentIndex ? 1 : 0.85,
                  opacity: index === currentIndex ? 1 : 0.5,
                }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image.url}
                  className="w-full h-[420px] object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>

          {/* DOT PAGINATION ONLY */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`cursor-pointer transition-all duration-300 ${i === currentIndex
                    ? "w-8 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    : "w-2 h-2 bg-white/30 rounded-full"
                  }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* FULL VIEW */}
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
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔥 SCROLLBAR FULL REMOVE */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}