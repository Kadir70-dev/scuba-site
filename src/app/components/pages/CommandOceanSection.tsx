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
      className="py-28 bg-[#f4f7fb]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* HEADER */}
      <div className="text-center max-w-[720px] mx-auto px-4">

        {/* TOP TEXT */}
        <p className="text-[11px] tracking-[3px] text-gray-500 mb-4 uppercase">

          Beyond Diving.

        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-[1.22] tracking-[1px] text-cyan-500">

          Command The Ocean.

        </h2>

        {/* DESCRIPTION */}
        <p className="mt-7 text-[15px] md:text-[16px] leading-[1.95] tracking-[0.45px] text-gray-500 max-w-2xl mx-auto">

          Build leadership, confidence, and professional
          underwater awareness while mastering the real
          responsibilities of advanced divers and future
          dive professionals.

        </p>

      </div>

      {/* GRID */}
      <div className="max-w-[980px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="text-center flex flex-col items-center"
          >

            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-500 mb-6">

              {item.icon}

            </div>

            {/* TITLE */}
            <h3 className="text-[14px] font-semibold tracking-[0.8px] leading-[1.7] text-[#0a0e27]">

              {item.title}

            </h3>

            {/* DESCRIPTION */}
            <p className="text-[13px] text-gray-500 mt-4 max-w-[240px] leading-[1.95] tracking-[0.35px]">

              {item.desc}

            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}