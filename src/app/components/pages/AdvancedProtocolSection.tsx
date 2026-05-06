"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  Compass,
  MapPin,
  Ship,
  Waves,
  Moon,
  Search,
  MessageCircle,
} from "lucide-react";

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
      className="py-32 bg-[#f3f6f9]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto px-6 mb-20">

        {/* TOP LABEL */}
        <p className="text-[10px] tracking-[4px] text-cyan-500 mb-5">
          DIVECAMPUS EXCLUSIVE HYBRID COURSE
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#0a0e27] leading-[1.22] tracking-[1px]">

          The 30M{" "}

          <span className="text-cyan-500">
            Advanced Protocol
          </span>

        </h2>

        {/* SUBTEXT */}
        <p className="mt-7 text-[15px] md:text-[16px] leading-[1.95] tracking-[0.5px] text-gray-500 max-w-2xl mx-auto">

          A premium hybrid training system designed for
          divers who want deeper confidence, safer
          exploration, and real expedition-level experience.

        </p>

        {/* INFO BOX */}
        <div className="mt-9 bg-white border border-gray-200 rounded-2xl p-6 text-sm text-gray-600 text-left shadow-sm backdrop-blur-md">

          <p className="mb-4 leading-[1.9] tracking-[0.4px]">
            • <b>3 Core Dives in Dubai:</b> Master your
            advanced skills at Palm Jumeirah.
          </p>

          <p className="leading-[1.9] tracking-[0.4px]">
            • <b>2 Expedition Dives:</b> Choose Fujairah
            Boat or Deep Dive Dubai.
          </p>

        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-7">

        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className={`
              p-7 rounded-2xl border transition-all duration-300 shadow-sm bg-white
              ${
                card.highlight
                  ? "border-yellow-400 bg-[#fffdf7]"
                  : "border-gray-200"
              }
            `}
          >

            {/* TAG */}
            <div className="text-[9px] tracking-[2.5px] text-cyan-500 mb-5">
              {card.tag}
            </div>

            {/* ICON */}
            <div className="text-cyan-500 mb-5">
              {card.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-[15px] font-semibold tracking-[0.8px] leading-[1.5] text-[#0a0e27] mb-4">

              {card.title}

            </h3>

            {/* DESCRIPTION */}
            <p className="text-[13px] text-gray-500 leading-[1.95] tracking-[0.35px]">

              {card.desc}

            </p>

          </motion.div>
        ))}

        {/* CTA CARD */}
        <div className="p-7 rounded-2xl border border-gray-200 bg-white flex flex-col justify-center items-center text-center">

          {/* ICON */}
          <MessageCircle
            className="text-cyan-500 mb-5"
            size={22}
          />

          {/* TITLE */}
          <h3 className="text-[15px] font-semibold tracking-[0.8px] leading-[1.5] text-[#0a0e27] mb-4">

            Need Advice?

          </h3>

          {/* DESC */}
          <p className="text-[13px] text-gray-500 leading-[1.9] tracking-[0.35px] mb-6">

            Not sure which elective to pick?
            Speak directly with an instructor.

          </p>

          {/* BUTTON */}
          <button className="px-5 py-2.5 text-[11px] tracking-[1.5px] border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">

            CHAT ON WHATSAPP

          </button>

        </div>
      </div>
    </section>
  );
}