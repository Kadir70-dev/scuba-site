import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-[Montserrat]">

      {/* VIDEO BACKGROUND */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/vid1.mp4" type="video/mp4" />
        </video>

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />

        {/* SOFT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* LOGO */}
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="/logow.svg"
          alt="Logo"
          className="mx-auto w-20 md:w-24 mb-5 opacity-95"
        />

        {/* TOP LABEL */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="uppercase tracking-[7px] text-yellow-300 text-[12px] mb-5 font-light"
        >
          Dive Campus Diving Club
        </motion.p>

        {/* HERO TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white leading-none"
        >
          {/* <span className="block text-4xl md:text-6xl font-extralight tracking-wide">
            PADI COURSES
          </span>

          <span className="block text-5xl md:text-7xl font-light tracking-tight mt-2">
            & SCUBA DIVING TRIPS
          </span> */}
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-[15px] md:text-lg text-white/75 max-w-2xl mx-auto leading-8 font-light"
        >
          Where Divers{" "}
          <span className="text-cyan-400 font-medium">
            LEVEL UP
          </span>
          . <br />
          Only destination in Middle East providing full spectrum dive education and experiences.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-10 py-4 bg-cyan-700/80 hover:bg-cyan-600 text-white rounded-md tracking-wider text-sm uppercase font-medium transition-all duration-300 hover:scale-105 shadow-lg">
            Get Certified →
          </button>

          <button className="px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-md tracking-wider text-sm uppercase font-medium transition-all duration-300">
            Go Diving
          </button>
        </motion.div>

        {/* LOCATIONS */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-[12px] uppercase tracking-[4px] text-yellow-300 font-light">

          <div className="flex items-center gap-2">
            <MapPin size={12} />
            Dubai
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={12} />
            Khor Fakkan
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={12} />
            Deep Dive Dubai
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={12} />
            Aquarium
          </div>


        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#courses"
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-[11px] uppercase tracking-[4px]">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>

    </section>
  );
}