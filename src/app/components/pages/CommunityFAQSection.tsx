"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export function CommunityFAQSection() {
  const [active, setActive] = useState<number | null>(null);

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
    <section className="py-32 bg-[#f5f7fa]">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0a0e27] mb-4">
          More Than a Dive Center.
          <br />
          <span className="text-cyan-500">
            A Community of Explorers.
          </span>
        </h2>

        <p className="text-gray-500 mt-4">
          Nemo isn't just about the dives; it's about the people you meet between them.
          Join the UAE’s most active diving community and turn every weekend into an epic story.
        </p>
      </div>

      {/* FAQ TITLE */}
      <h3 className="text-center text-xl font-semibold text-[#0a0e27] mb-10">
        Frequently Asked Questions
      </h3>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto px-6 space-y-4">

        {faqs.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 bg-white overflow-hidden"
          >
            {/* QUESTION */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-5 text-left"
            >
              <span className="text-[#0a0e27] font-medium">
                {item.q}
              </span>

              <motion.div
                animate={{ rotate: active === i ? 45 : 0 }}
                className="text-cyan-500"
              >
                <Plus />
              </motion.div>
            </button>

            {/* ANSWER */}
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-gray-500 text-sm"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>
    </section>
  );
}