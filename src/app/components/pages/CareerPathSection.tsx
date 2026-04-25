"use client";

import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { motion } from "framer-motion";

export function CareerPathSection() {
  const [active, setActive] = useState(0);

  const benefits = [
    { title: "Full Internship Included", tag: "REAL EXPERIENCE" },
    { title: "Flexible Schedule", tag: "WEEKENDS / EVENINGS" },
    { title: "PADI Divemaster Crewpak", tag: "INCLUDED" },
    { title: "Job Placement Assistance", tag: "NETWORK ACCESS" },
    { title: "Unlimited Diving During Course", tag: "LOG DIVES" },
  ];

  const faqs = [
    {
      q: "Do you offer job placement?",
      a: "While we cannot guarantee a job, we have a strong network. Many interns get hired directly or referred to partner centers.",
    },
    {
      q: "Can I work full-time while doing this?",
      a: "Yes, the program is flexible and can be scheduled around your availability.",
    },
    {
      q: "Do I need my own equipment?",
      a: "No, equipment rental is included, but owning gear is recommended long-term.",
    },
    {
      q: "Can I teach students as a Divemaster?",
      a: "You assist instructors but cannot independently certify students.",
    },
    {
      q: "Are there hidden PADI fees?",
      a: "No hidden fees. All major costs are clearly communicated upfront.",
    },
    {
      q: "How fit do I need to be?",
      a: "Basic swimming ability and general fitness are enough to start.",
    },
  ];

  return (
    <section
      className="py-16 bg-[#f4f7fb]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      {/* HEADER */}
      <div className="text-center max-w-[550px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0a0e27]">
          More Than a License.
          <br />
          <span className="text-cyan-500">A Career Path.</span>
        </h2>

        <p className="text-[12px] text-gray-500 mt-3">
          Join a professional network and turn your passion into a global career.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[850px] mx-auto grid md:grid-cols-2 gap-8 mt-10 px-4 items-start">

        {/* LEFT BENEFITS */}
        <div className="space-y-3">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-gray-200 bg-white hover:shadow-sm transition"
            >
              {/* LEFT */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-cyan-100 shrink-0">
                  <Check className="w-3.5 h-3.5 text-cyan-500" />
                </div>

                <p className="text-sm text-[#0a0e27] font-medium truncate">
                  {item.title}
                </p>
              </div>

              {/* RIGHT TAG */}
              <span className="text-[10px] text-cyan-500 font-semibold whitespace-nowrap">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* RIGHT FAQ */}
        <div className="w-full">
          <h3 className="text-sm font-semibold text-[#0a0e27] mb-3">
            Professional FAQ
          </h3>

          <div className="space-y-2">
            {faqs.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(active === i ? -1 : i)}
                className={`rounded-xl border px-4 py-3 cursor-pointer transition ${
                  active === i
                    ? "border-cyan-400 bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:shadow-sm"
                }`}
              >
                {/* QUESTION */}
                <div className="flex justify-between items-center gap-3">
                  <p className="text-[13px] font-medium text-[#0a0e27]">
                    {item.q}
                  </p>

                  {active === i ? (
                    <X className="w-4 h-4 text-cyan-500 shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </div>

                {/* ANSWER */}
                {active === i && (
                  <p className="text-[12px] text-gray-500 mt-2 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}