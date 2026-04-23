"use client";

import { motion } from "framer-motion";
import { Anchor, Compass, MapPin, Ship, Waves, Moon, Search, MessageCircle } from "lucide-react";

export function AdvancedProtocolSection() {
  const cards = [
    {
      tag: "MANDATORY",
      icon: <Anchor size={20} />,
      title: "Deep (30M)",
      desc: "Claim your license to explore deeper reefs and master safety protocols for 30m descents.",
    },
    {
      tag: "MANDATORY",
      icon: <Compass size={20} />,
      title: "Navigation",
      desc: "Lead teams with pinpoint accuracy using advanced compass work and natural clues.",
    },
    {
      tag: "FLEX SCHEDULE",
      highlight: true,
      icon: <MapPin size={20} />,
      title: "The 3+2 Model",
      desc: "3 Dives in Dubai + 2 Expedition Dives INCLUDED.",
    },
    {
      tag: "ELECTIVE CHOICE",
      icon: <Ship size={20} />,
      title: "Wreck Specialist",
      desc: "Learn safe approach protocols for UAE’s historical deep-water shipwrecks.",
    },
    {
      tag: "ELECTIVE CHOICE",
      icon: <Waves size={20} />,
      title: "Boat Diver",
      desc: "Master boat entries, exits, and safety procedures for blue-water expeditions.",
    },
    {
      tag: "ELECTIVE CHOICE",
      icon: <Moon size={20} />,
      title: "Night Explorer",
      desc: "Track nocturnal hunters and experience bioluminescence in the deep blue.",
    },
    {
      tag: "ELECTIVE CHOICE",
      icon: <Search size={20} />,
      title: "Search & Recovery",
      desc: "Master search patterns and learn to lift heavy objects safely from the floor.",
    },
  ];

  return (
    <section
      className="py-28 bg-[#f3f6f9]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">

        <p className="text-[10px] tracking-[3px] text-cyan-500 mb-3">
          DIVECAMPUS EXCLUSIVE HYBRID COURSE
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-[#0a0e27]">
          The 30M{" "}
          <span className="text-cyan-500">
            Advanced Protocol
          </span>
        </h2>

        {/* INFO BOX */}
        <div className="mt-6 bg-white border border-gray-200 rounded-lg p-5 text-sm text-gray-600 text-left shadow-sm">
          <p className="mb-2">
            • <b>3 Core Dives in Dubai:</b> Master your advanced skills at Palm Jumeirah.
          </p>
          <p>
            • <b>2 Expedition Dives:</b> Choose Fujairah Boat or Deep Dive Dubai.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">

        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className={`
              p-5 rounded-xl border transition shadow-sm bg-white
              ${card.highlight
                ? "border-yellow-400 bg-[#fffdf7]"
                : "border-gray-200"}
            `}
          >

            {/* TAG */}
            <div className="text-[9px] tracking-widest text-cyan-500 mb-3">
              {card.tag}
            </div>

            {/* ICON */}
            <div className="text-cyan-500 mb-3">
              {card.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-sm font-semibold text-[#0a0e27] mb-2">
              {card.title}
            </h3>

            {/* DESC */}
            <p className="text-xs text-gray-500 leading-relaxed">
              {card.desc}
            </p>

          </motion.div>
        ))}

        {/* LAST CARD (CTA) */}
        <div className="p-5 rounded-xl border border-gray-200 bg-white flex flex-col justify-center items-center text-center">

          <MessageCircle className="text-cyan-500 mb-3" />

          <h3 className="text-sm font-semibold text-[#0a0e27] mb-2">
            Need Advice?
          </h3>

          <p className="text-xs text-gray-500 mb-4">
            Not sure which elective to pick? Speak directly with an instructor.
          </p>

          <button className="px-4 py-2 text-xs border rounded-md hover:bg-gray-100 transition">
            CHAT ON WHATSAPP
          </button>

        </div>

      </div>
    </section>
  );
}