"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export function GlobalPassportSection() {
  const [active, setActive] = useState<number | null>(null);

  const faqs = [
    "Is there a written exam?",
    "Can I start immediately after Open Water?",
    "Do I need my own specialized gear?",
    "How deep will we go?",
    "Does this qualify me for International Trips?",
    "What if I haven't dived in 6 months?",
  ];

  return (
    <section
      className="py-28 bg-[#f5f7fa]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a0e27]">
            More Than a License.
            <br />
            <span className="text-cyan-500">A Global Passport.</span>
          </h2>

          <p className="text-gray-500 mt-4 text-sm">
            The Advanced Open Water isn’t just about diving deeper; it's your key to the Global Expedition Network.
            When you certify with us, you join the UAE's most active travel team.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ================= LEFT (TESTIMONIALS) ================= */}
          <div>

            {/* MAIN CARD */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center">

              <h3 className="text-xl font-semibold text-[#0a0e27]">
                Don't Take Our <br />
                <span className="font-bold">Word For It.</span>
              </h3>

              <p className="text-gray-500 text-sm mt-3">
                Real stories from divers who pushed their limits with the Nemo Advanced Team.
              </p>

              {/* RATING BADGE */}
              <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 bg-gray-50 border rounded-full text-sm">
                ⭐⭐⭐⭐⭐
                <span className="font-semibold text-[#0a0e27]">
                  Excellent
                </span>
                <span className="text-gray-400 text-xs">
                  1,054 Reviews
                </span>
              </div>
            </div>

            {/* SMALL REVIEWS */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-white border rounded-xl p-4 text-xs text-gray-500 shadow-sm">
                <p className="font-semibold text-[#0a0e27] mb-1">
                  Alex M.
                </p>
                First dive in Fujairah was intense, but the instructor made it easy.
              </div>

              <div className="bg-white border rounded-xl p-4 text-xs text-gray-500 shadow-sm">
                <p className="font-semibold text-[#0a0e27] mb-1">
                  Sarah J.
                </p>
                Navigation drills on Palm wreck were actually fun. Highly recommended.
              </div>

            </div>

          </div>

          {/* ================= RIGHT (FAQ) ================= */}
          <div>

            <h3 className="text-lg font-semibold text-[#0a0e27] mb-6">
              Tactical Briefing
            </h3>

            <div className="space-y-4">

              {faqs.map((q, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >

                  {/* QUESTION */}
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left"
                  >
                    <span className="text-sm text-[#0a0e27]">
                      {q}
                    </span>

                    <motion.div
                      animate={{ rotate: active === i ? 45 : 0 }}
                      className="text-cyan-500"
                    >
                      <Plus size={16} />
                    </motion.div>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-4 text-xs text-gray-500"
                      >
                        This will be explained during your training session in detail by our instructors.
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}