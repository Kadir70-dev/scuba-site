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
    <>
      <section
        className="py-24 bg-[#f4f7fb] relative overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-400/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-12 items-center px-6 relative z-10">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* IMAGE */}
              <img
                src="/rescue-training.jpg"
                className="w-[260px] md:w-[320px] h-[320px] object-cover rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              />

              {/* GLOW */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-400/20 blur-[60px] rounded-full" />

            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.3px] leading-[1.2] text-[#0a0e27]">
              From Simulation <br />
              <span className="text-cyan-500">to Reality</span>
            </h2>

            {/* LIST */}
            <div className="mt-8 space-y-5">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="border-b border-gray-200 pb-4"
                >
                  <div className="flex items-start gap-3">

                    {/* ICON */}
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-500 mt-1">
                      <Check className="w-3.5 h-3.5" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4 className="text-[#0a0e27] text-sm font-semibold tracking-[-0.2px]">
                        {item.title}
                      </h4>

                      <p className="text-[13px] text-gray-500 mt-1 leading-[1.6] tracking-[0.2px] max-w-[360px]">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

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