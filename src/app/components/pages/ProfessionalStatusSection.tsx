"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function ProfessionalStatusSection() {
  const items = [
    {
      title: "PREREQUISITES",
      desc: [
        "18 years old",
        "Rescue Diver & EFR (within 24 months)",
        "40 Logged Dives to start / 60 to certify",
      ],
      highlight: "MANDATORY: Signed medical statement required.",
    },
    {
      title: "FLEXIBLE MENTORSHIP",
      desc: [
        "Not a fixed 3-day course",
        "Complete over 2 to 8 weeks",
        "Train at your own pace",
      ],
    },
    {
      title: "PRO EQUIPMENT",
      desc: [
        "Full rental kit included",
        "Discounts on personal gear",
        "Professional-grade equipment",
      ],
    },
    {
      title: "PADI ELEARNING",
      desc: [
        "Digital theory modules",
        "Study anytime",
        "Prepare before water sessions",
      ],
    },
    {
      title: "THE 'CREWPAK'",
      desc: [
        "Instructor Manual included",
        "Slates & encyclopedia",
        "Complete learning material",
      ],
    },
    {
      title: "CAREER NETWORK",
      desc: [
        "Industry introductions",
        "Job placement support",
        "Dubai, Fujairah, Maldives",
      ],
    },
  ];

  return (
    <section
      className="py-28 bg-[#f4f7fb]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* HEADER */}
      <div className="text-center max-w-[720px] mx-auto px-4">

        {/* TOP LABEL */}
        <p className="text-[11px] tracking-[3px] text-gray-500 uppercase mb-4">

          The Road to

        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0e27] leading-[1.22] tracking-[1px]">

          Professional Status

        </h2>

        {/* DESCRIPTION */}
        <p className="mt-7 text-[15px] md:text-[16px] leading-[1.95] tracking-[0.45px] text-gray-500 max-w-2xl mx-auto">

          Build the leadership, confidence, and technical
          mastery required to transition from recreational
          diver to professional-level underwater mentor.

        </p>

      </div>

      {/* IMAGE */}
      <div className="max-w-[960px] mx-auto mt-16 px-4">

        <motion.img
          src="/divemaster.jpg"
          className="w-full h-[300px] md:h-[360px] object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

      </div>

      {/* GRID */}
      <div className="max-w-[960px] mx-auto mt-14 grid md:grid-cols-2 gap-7 px-4">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100"
          >

            {/* TITLE */}
            <div className="flex items-center gap-3 mb-5">

              {/* ICON */}
              <div className="w-7 h-7 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">

                <Check className="w-3.5 h-3.5 text-cyan-500" />

              </div>

              {/* TITLE TEXT */}
              <h3 className="text-[14px] font-semibold tracking-[0.8px] leading-[1.7] text-[#0a0e27]">

                {item.title}

              </h3>

            </div>

            {/* LIST */}
            <ul className="text-[13px] text-gray-500 space-y-3 leading-[1.9] tracking-[0.35px]">

              {item.desc.map((d, idx) => (
                <li key={idx} className="flex gap-2">

                  <span className="text-cyan-500">
                    •
                  </span>

                  <span>
                    {d}
                  </span>

                </li>
              ))}

            </ul>

            {/* HIGHLIGHT */}
            {item.highlight && (
              <div className="mt-5 text-[11px] tracking-[0.6px] leading-[1.8] bg-cyan-50 text-cyan-600 px-4 py-3 rounded-xl border border-cyan-100">

                {item.highlight}

              </div>
            )}

          </motion.div>
        ))}

      </div>

    </section>
  );
}