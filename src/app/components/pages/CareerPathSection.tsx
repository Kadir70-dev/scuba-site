"use client";

import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { motion } from "framer-motion";

export function CareerPathSection() {
  const [active, setActive] = useState(0);

  const benefits = [
    {
      title: "Full Internship Included",
      tag: "REAL EXPERIENCE",
    },
    {
      title: "Flexible Schedule",
      tag: "WEEKENDS / EVENINGS",
    },
    {
      title: "PADI Divemaster Crewpak",
      tag: "INCLUDED",
    },
    {
      title: "Job Placement Assistance",
      tag: "NETWORK ACCESS",
    },
    {
      title: "Unlimited Diving During Course",
      tag: "LOG DIVES",
    },
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
      className="py-28 bg-[#f4f7fb]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* HEADER */}
      <div className="text-center max-w-[720px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0e27] leading-[1.22] tracking-[1px]">

          More Than a License.

          <br />

          <span className="text-cyan-500">
            A Career Path.
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="text-[15px] md:text-[16px] text-gray-500 mt-7 leading-[1.95] tracking-[0.45px] max-w-2xl mx-auto">

          Join a professional diving network and transform
          your passion into a long-term international
          career opportunity across the global diving industry.

        </p>

      </div>

      {/* GRID */}
      <div className="max-w-[950px] mx-auto grid md:grid-cols-2 gap-10 mt-16 px-4 items-start">

        {/* LEFT BENEFITS */}
        <div className="space-y-4">

          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-gray-200 bg-white hover:shadow-sm transition duration-300"
            >

              {/* LEFT */}
              <div className="flex items-center gap-4 min-w-0">

                {/* ICON */}
                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-cyan-100 shrink-0">

                  <Check className="w-3.5 h-3.5 text-cyan-500" />

                </div>

                {/* TITLE */}
                <p className="text-[14px] tracking-[0.45px] leading-[1.8] text-[#0a0e27] font-medium truncate">

                  {item.title}

                </p>

              </div>

              {/* TAG */}
              <span className="text-[10px] tracking-[1.2px] text-cyan-500 font-semibold whitespace-nowrap">

                {item.tag}

              </span>

            </motion.div>
          ))}

        </div>

        {/* RIGHT FAQ */}
        <div className="w-full">

          {/* FAQ TITLE */}
          <h3 className="text-[15px] font-semibold tracking-[0.8px] leading-[1.7] text-[#0a0e27] mb-5">

            Professional FAQ

          </h3>

          {/* FAQ LIST */}
          <div className="space-y-3">

            {faqs.map((item, i) => (
              <div
                key={i}
                onClick={() => setActive(active === i ? -1 : i)}
                className={`rounded-2xl border px-5 py-4 cursor-pointer transition duration-300 ${
                  active === i
                    ? "border-cyan-400 bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:shadow-sm"
                }`}
              >

                {/* QUESTION */}
                <div className="flex justify-between items-center gap-4">

                  <p className="text-[14px] font-medium tracking-[0.45px] leading-[1.8] text-[#0a0e27]">

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
                  <p className="text-[13px] text-gray-500 mt-4 leading-[1.95] tracking-[0.35px] pr-5">

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