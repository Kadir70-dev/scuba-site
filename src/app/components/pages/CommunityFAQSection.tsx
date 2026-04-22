"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export function CommunityFAQSection() {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are there any hidden fees or gear rental costs?",
      a: "No. Everything is included. You get full gear, training, and certification with zero hidden charges.",
    },
    {
      q: "I work full-time. Can I do the training on weekends?",
      a: "Yes. We offer flexible weekend schedules so you can complete your certification without affecting your job.",
    },
    {
      q: "What if I need more time to get comfortable underwater?",
      a: "No problem. Our instructors work at your pace. We ensure you feel confident before moving forward.",
    },
    {
      q: "Do I need to be a strong or fast swimmer?",
      a: "Not at all. Basic comfort in water is enough. We train you step-by-step.",
    },
    {
      q: "Can I upgrade to a private 1-on-1 or female instructor?",
      a: "Yes. Private sessions and female instructors are available on request.",
    },
    {
      q: "Does this license expire after a certain time?",
      a: "No. Your PADI certification is valid for life.",
    },
  ];

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      <section
        className="py-32 bg-gradient-to-b from-[#f5f7fa] to-[#eef2f6]"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto px-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0e27] leading-tight">
            More Than a Dive Center.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              A Community of Explorers.
            </span>
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base">
            Nemo isn't just about the dives; it's about the people you meet between them.
            Join the UAE’s most active diving community and turn every weekend into an epic story.
          </p>
        </div>

        {/* FAQ TITLE */}
        <h3 className="text-center text-xl font-semibold text-[#0a0e27] mb-10 tracking-wide">
          Frequently Asked Questions
        </h3>

        {/* FAQ LIST */}
        <div className="max-w-3xl mx-auto px-6 space-y-4">

          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/30 bg-white/70 backdrop-blur-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-[#0a0e27] font-medium text-sm md:text-base">
                  {item.q}
                </span>

                <motion.div
                  animate={{ rotate: active === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-cyan-500"
                >
                  <Plus size={18} />
                </motion.div>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}

        </div>
      </section>

      {/* FONT LOAD */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
    </>
  );
}