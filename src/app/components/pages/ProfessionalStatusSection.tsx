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
      className="py-20 bg-[#f4f7fb]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      {/* HEADER */}
      <div className="text-center max-w-[600px] mx-auto px-4">
        <p className="text-[13px] text-gray-500">
          The Road to
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#0a0e27] mt-1">
          Professional Status
        </h2>
      </div>

      {/* IMAGE */}
      <div className="max-w-[900px] mx-auto mt-10 px-4">
        <motion.img
          src="/divemaster.jpg" // 👈 replace with your image
          className="w-full h-[280px] md:h-[320px] object-cover rounded-2xl shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
      </div>

      {/* GRID */}
      <div className="max-w-[900px] mx-auto mt-10 grid md:grid-cols-2 gap-6 px-4">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
          >
            {/* TITLE */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-cyan-500" />
              </div>

              <h3 className="text-sm font-semibold text-[#0a0e27]">
                {item.title}
              </h3>
            </div>

            {/* LIST */}
            <ul className="text-[12px] text-gray-500 space-y-1">
              {item.desc.map((d, idx) => (
                <li key={idx}>• {d}</li>
              ))}
            </ul>

            {/* HIGHLIGHT */}
            {item.highlight && (
              <div className="mt-3 text-[11px] bg-cyan-50 text-cyan-600 px-3 py-2 rounded-md">
                {item.highlight}
              </div>
            )}
          </motion.div>
        ))}

      </div>
    </section>
  );
}