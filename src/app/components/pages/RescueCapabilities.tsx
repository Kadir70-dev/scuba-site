"use client";

import { Shield, HeartPulse, Activity, Monitor, Settings } from "lucide-react";
import { motion } from "framer-motion";

export function RescueCapabilities() {
  const cards = [
    {
      icon: <Shield />,
      title: "Self-Rescue Protocol",
      tag: "FUNDAMENTAL",
      desc: "You can't help others if you are a victim. Master cramp releases, air depletion drills, and vertigo management.",
    },
    {
      icon: <HeartPulse />,
      title: "Recognizing Panic",
      tag: "PSYCHOLOGY",
      desc: "Learn to spot the 'wide-eyed' look of a panicked diver before they bolt. De-escalate stress underwater and on the surface.",
    },
    {
      icon: <Activity />,
      title: "Unresponsive Diver",
      tag: "CRITICAL",
      desc: "The ultimate test. Bring an unconscious diver to the surface, administer rescue breaths, and tow them safely.",
    },
    {
      icon: <Monitor />,
      title: "Emergency Management",
      tag: "LEADERSHIP",
      desc: "Coordinate the scene, direct boat captains, handle O2 kits, and manage bystanders like a pro.",
    },
    {
      icon: <Settings />,
      title: "Equipment Failure",
      tag: "TECHNICAL",
      desc: "Handle regulator freeflows or BCD failures. Learn real fixes for common gear malfunctions.",
    },
  ];

  return (
    <>
      <section
        className="py-28 bg-[#f4f7fb] relative overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

        {/* HEADER */}
        <div className="text-center mb-16 px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.5px] leading-[1.1] text-[#0a0e27]">
            Master 5 Critical <br />
            <span className="text-cyan-500">Rescue Capabilities</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 relative z-10">

          {/* CARDS */}
          {cards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition overflow-hidden"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-cyan-400/10 to-blue-500/10" />

              {/* TAG */}
              <span className="absolute top-4 right-4 text-[10px] px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full tracking-[0.5px]">
                {item.tag}
              </span>

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-500 mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-[#0a0e27] mb-2 tracking-[-0.2px]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-500 leading-[1.6] tracking-[0.2px]">
                {item.desc}
              </p>

            </motion.div>
          ))}

          {/* PREMIUM CARD */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative bg-[#02131d] text-white rounded-2xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden"
          >

            {/* GLOW */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/20 blur-[100px] rounded-full" />

            <div>
              <span className="text-[10px] px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full tracking-[0.5px]">
                BEST VALUE
              </span>

              <h3 className="mt-4 font-semibold text-lg tracking-[-0.2px]">
                Rescue Diver Course
              </h3>

              <p className="text-white/60 text-sm mt-2 leading-[1.6] tracking-[0.2px]">
                Complete certification including PADI eLearning and practical sessions.
              </p>

              <h2 className="text-3xl font-semibold text-cyan-400 mt-6 tracking-[-0.5px]">
                AED 1,720
              </h2>
            </div>

            {/* BUTTON */}
            <button className="mt-6 relative overflow-hidden rounded-xl py-3 font-semibold tracking-[0.5px] group">

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-70 group-hover:opacity-100 transition" />

              {/* CONTENT */}
              <div className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-xl flex items-center justify-center gap-2">
                CHAT ON WHATSAPP →
              </div>

            </button>

          </motion.div>

        </div>

      </section>

      {/* FONT */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
        }
      `}</style>
    </>
  );
}