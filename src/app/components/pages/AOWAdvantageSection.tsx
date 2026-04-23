"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function AOWAdvantageSection() {
  const points = [
    {
      title: "Total Scheduling Flexibility",
      desc: "Complete your 5 dives on your own terms. Choose back-to-back days or spread your sessions across 2–3 days.",
    },
    {
      title: "The 3+2 Elite Hybrid Model",
      desc: "Master technical precision with 3 specialized dives at Palm Jumeirah, then apply those skills in Fujairah.",
    },
    {
      title: "Mentorship by IDC Staff",
      desc: "Train under the masters who train the instructors. Benefit from the highest level of PADI professional supervision.",
    },
    {
      title: "Premium 4K Media Package",
      desc: "Your journey is documented with high-resolution underwater media, completely free.",
    },
    {
      title: "Pro-Level Gear Suites",
      desc: "Train using industry-leading equipment, meticulously maintained to the highest safety standards.",
    },
  ];

  return (
    <section
      className="py-28 bg-[#03121c] text-white"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] max-w-[420px] w-full">
            <img
              src="/A59I9512.jpg" // 🔁 replace if needed
              alt="divers"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>

          {/* TOP LABEL */}
          <p className="text-[10px] tracking-[3px] text-cyan-400 mb-3">
            DIVECAMOPUS EXCLUSIVE BENEFITS
          </p>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            The{" "}
            <span className="text-cyan-400">
              AOW Mastery
            </span>{" "}
            Advantage
          </h2>

          {/* DESC */}
          <p className="text-white/60 mb-10 max-w-lg text-sm leading-relaxed">
            Upgrade your skills with the UAE’s most active PADI 5-Star Dive Club.
            We combine elite mentorship with total scheduling freedom.
          </p>

          {/* POINTS */}
          <div className="space-y-6">

            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 border-b border-white/10 pb-5 last:border-none"
              >

                {/* ICON */}
                <div className="mt-1">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    <Check size={14} />
                  </div>
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-sm font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}