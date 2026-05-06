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
      className="py-32 bg-[#f5f7fa]"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-24 max-w-4xl mx-auto">

          {/* HEADING */}
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.2] tracking-[1px] text-[#0a0e27]">

            More Than a License.

            <br />

            <span className="text-cyan-500">
              A Global Passport.
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 mt-8 text-[15px] md:text-[16px] leading-[1.95] tracking-[0.45px] max-w-3xl mx-auto">

            The Advanced Open Water isn’t just about diving deeper;
            it's your key to the Global Expedition Network.
            When you certify with us, you become part of the UAE's
            most active underwater travel community.

          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-20">

          {/* ================= LEFT ================= */}
          <div>

            {/* MAIN CARD */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm text-center">

              {/* TITLE */}
              <h3 className="text-2xl font-semibold tracking-[0.8px] leading-[1.45] text-[#0a0e27]">

                Don't Take Our

                <br />

                <span className="font-bold">
                  Word For It.
                </span>

              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-[14px] leading-[1.9] tracking-[0.35px] mt-5 max-w-md mx-auto">

                Real stories from divers who pushed their
                limits with the Nemo Advanced Team.

              </p>

              {/* RATING BADGE */}
              <div className="mt-8 inline-flex items-center gap-3 px-6 py-3.5 bg-gray-50 border rounded-full text-sm tracking-[0.5px]">

                <span className="tracking-[2px]">
                  ⭐⭐⭐⭐⭐
                </span>

                <span className="font-semibold text-[#0a0e27]">
                  Excellent
                </span>

                <span className="text-gray-400 text-xs tracking-[0.5px]">
                  1,054 Reviews
                </span>

              </div>
            </div>

            {/* SMALL REVIEWS */}
            <div className="grid grid-cols-2 gap-5 mt-7">

              {/* REVIEW 1 */}
              <div className="bg-white border rounded-2xl p-5 text-gray-500 shadow-sm">

                <p className="font-semibold text-[#0a0e27] text-[13px] tracking-[0.6px] mb-3">
                  Alex M.
                </p>

                <p className="text-[12px] leading-[1.9] tracking-[0.3px]">
                  First dive in Fujairah was intense,
                  but the instructor made it feel
                  smooth and controlled.
                </p>

              </div>

              {/* REVIEW 2 */}
              <div className="bg-white border rounded-2xl p-5 text-gray-500 shadow-sm">

                <p className="font-semibold text-[#0a0e27] text-[13px] tracking-[0.6px] mb-3">
                  Sarah J.
                </p>

                <p className="text-[12px] leading-[1.9] tracking-[0.3px]">
                  Navigation drills on Palm wreck
                  were actually fun. Highly
                  recommended experience.
                </p>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div>

            {/* TITLE */}
            <h3 className="text-[20px] font-semibold tracking-[0.8px] leading-[1.5] text-[#0a0e27] mb-8">

              Tactical Briefing

            </h3>

            {/* FAQ */}
            <div className="space-y-5">

              {faqs.map((q, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                >

                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      setActive(active === i ? null : i)
                    }
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >

                    <span className="text-[14px] tracking-[0.45px] leading-[1.7] text-[#0a0e27]">

                      {q}

                    </span>

                    <motion.div
                      animate={{
                        rotate: active === i ? 45 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="text-cyan-500"
                    >
                      <Plus size={17} />
                    </motion.div>

                  </button>

                  {/* ANSWER */}
                  <AnimatePresence>

                    {active === i && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 text-[13px] text-gray-500 leading-[1.95] tracking-[0.3px]"
                      >

                        This will be explained during
                        your training session in detail
                        by our instructors.

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