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
      className="py-32 bg-[#03121c] text-white"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 px-6 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] max-w-[440px] w-full">

            <img
              src="/A59I9512.jpg"
              alt="divers"
              className="w-full h-full object-cover"
            />

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>

          {/* LABEL */}
          <p className="text-[10px] tracking-[4px] text-cyan-400 mb-5">
            DIVECAMPUS EXCLUSIVE BENEFITS
          </p>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.2] tracking-[1px] mb-8">

            The{" "}

            <span className="text-cyan-400">
              AOW Mastery
            </span>{" "}

            Advantage

          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/62 max-w-xl text-[15px] md:text-[16px] leading-[1.95] tracking-[0.45px] mb-14">

            Upgrade your skills with the UAE’s most active
            PADI 5-Star Dive Club. We combine elite mentorship
            with total scheduling freedom for a truly premium
            learning experience.

          </p>

          {/* POINTS */}
          <div className="space-y-8">

            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 border-b border-white/10 pb-7 last:border-none"
              >

                {/* ICON */}
                <div className="mt-1">

                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">

                    <Check size={14} />

                  </div>

                </div>

                {/* TEXT */}
                <div>

                  {/* TITLE */}
                  <h3 className="text-[15px] font-semibold tracking-[0.7px] leading-[1.65] text-white mb-2.5">

                    {item.title}

                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[13px] text-white/60 leading-[1.95] tracking-[0.35px] max-w-lg">

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