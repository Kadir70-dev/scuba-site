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
        className="py-28 bg-[#f4f7fb]"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* HEADER */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0e27] tracking-tight">
            Master 5 Critical <br />
            <span className="text-cyan-500">Rescue Capabilities</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

          {/* LEFT CARDS */}
          {cards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition relative"
            >

              {/* TAG */}
              <span className="absolute top-4 right-4 text-[10px] px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full">
                {item.tag}
              </span>

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-500 mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-[#0a0e27] mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

          {/* RIGHT PREMIUM CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#02131d] text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between"
          >

            <div>
              <span className="text-[10px] px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                BEST VALUE
              </span>

              <h3 className="mt-4 font-semibold text-lg">
                Rescue Diver Course
              </h3>

              <p className="text-white/60 text-sm mt-2">
                Complete certification including PADI eLearning and practical sessions.
              </p>

              <h2 className="text-3xl font-bold text-cyan-400 mt-6">
                AED 1,720
              </h2>
            </div>

            {/* BUTTON */}
            <button className="mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
              CHAT ON WHATSAPP →
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