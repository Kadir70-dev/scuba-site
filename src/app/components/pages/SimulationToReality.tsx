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
        className="py-32 bg-[#f4f7fb] relative overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-400/10 blur-[100px] rounded-full" />

        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

        <div className="max-w-[980px] mx-auto grid md:grid-cols-2 gap-16 items-center px-6 relative z-10">

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
                className="w-[280px] md:w-[360px] h-[360px] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              />

              {/* GLOW */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-cyan-400/20 blur-[70px] rounded-full" />

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* TOP LABEL */}
            <p className="text-[10px] uppercase tracking-[3px] text-cyan-500 mb-5">

              Professional Rescue Training

            </p>

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.18] tracking-[1px] text-[#0a0e27]">

              From Simulation

              <br />

              <span className="text-cyan-500">
                to Reality
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 text-[15px] md:text-[16px] text-gray-500 leading-[2] tracking-[0.45px] max-w-[500px]">

              Move beyond theoretical rescue drills and
              experience immersive, real-world emergency
              response training designed for confident,
              capable divers.

            </p>

            {/* LIST */}
            <div className="mt-12 space-y-7">

              {features.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="border-b border-gray-200 pb-6"
                >

                  <div className="flex items-start gap-4">

                    {/* ICON */}
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-500 mt-1 shrink-0">

                      <Check className="w-3.5 h-3.5" />

                    </div>

                    {/* TEXT */}
                    <div>

                      {/* FEATURE TITLE */}
                      <h4 className="text-[#0a0e27] text-[15px] font-semibold tracking-[0.5px] leading-[1.7]">

                        {item.title}

                      </h4>

                      {/* FEATURE DESCRIPTION */}
                      <p className="text-[14px] text-gray-500 mt-3 leading-[1.95] tracking-[0.35px] max-w-[420px]">

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