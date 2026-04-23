"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function SimulationToReality() {
  const features = [
    {
      title: "PADI eLearning Advantage",
      desc: "Maximize your water time. Complete the theory online at your own pace before arriving.",
    },
    {
      title: "EFR Prerequisite Option",
      desc: "No CPR certification? No problem. We offer Emergency First Response directly at the center.",
    },
    {
      title: "Rescue Gear Suite",
      desc: "Train with professional pocket masks, floats, and oxygen kits. All equipment included.",
    },
    {
      title: "Direct Beach Access",
      desc: "Free parking and direct access from our private beach base in Dubai.",
    },
  ];

  return (
    <section
      className="py-20 bg-[#f4f7fb]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      {/* 🔥 MORE COMPACT WIDTH */}
      <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-10 items-center px-4">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <img
            src="/rescue-training.jpg"
            className="w-[260px] md:w-[300px] h-[300px] object-cover rounded-2xl shadow-md"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl font-light text-[#0a0e27] leading-tight">
            From Simulation <br /> to Reality
          </h2>

          {/* LIST */}
          <div className="mt-6 space-y-4">
            {features.map((item, i) => (
              <div key={i} className="border-b border-gray-100 pb-3">

                <div className="flex items-start gap-2">

                  {/* ICON */}
                  <Check className="text-cyan-500 mt-1 w-3.5 h-3.5" />

                  <div>
                    <h4 className="text-[#0a0e27] text-xs font-medium">
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed max-w-[320px]">
                      {item.desc}
                    </p>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </motion.div>

      </div>

      {/* FONT */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
        }
      `}</style>
    </section>
  );
}