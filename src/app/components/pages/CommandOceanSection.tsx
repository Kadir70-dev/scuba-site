"use client";

import { Compass, Users, BookOpen, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function CommandOceanSection() {
  const items = [
    {
      icon: <Compass className="w-5 h-5" />,
      title: "EXPEDITION LEADER",
      desc: "Learn to navigate complex sites, brief divers, and lead groups safely underwater.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "THE MENTOR ROLE",
      desc: "Work side-by-side with instructors and help new divers build confidence.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "DIVE PHYSICS & THEORY",
      desc: "Understand decompression, physics, and physiology behind diving.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "MAPPING & LOGISTICS",
      desc: "Create dive maps, manage logistics, and organize safe dive operations.",
    },
  ];

  return (
    <section
      className="py-20 bg-[#f4f7fb]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      {/* HEADER */}
      <div className="text-center max-w-[600px] mx-auto px-4">
        <p className="text-[13px] text-gray-500">
          Beyond Diving.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-500 mt-1">
          Command The Ocean.
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-[900px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center flex flex-col items-center"
          >
            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-500 mb-4">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-sm font-semibold text-[#0a0e27]">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-[12px] text-gray-500 mt-2 max-w-[240px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}