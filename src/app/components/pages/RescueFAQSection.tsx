"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export function RescueFAQSection() {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      q: "Do I need CPR certification first?",
      a: "Yes. A valid CPR/First Aid certificate (last 24 months) is required. If you don’t have one, you can complete the Emergency First Response course at our center.",
    },
    {
      q: "Is the course physically hard?",
      a: "It’s manageable for most people with basic fitness. Instructors guide you step by step.",
    },
    {
      q: "How many days does it take?",
      a: "Usually 2–3 days depending on schedule and pace.",
    },
    {
      q: "Can I request a female instructor?",
      a: "Yes, we can arrange that based on availability.",
    },
    {
      q: "What if I feel nervous about drills?",
      a: "Totally normal. We train you gradually and safely.",
    },
    {
      q: "Do I need to bring my own gear?",
      a: "No, all required gear is included.",
    },
    {
      q: "What is the minimum age?",
      a: "Minimum age is 12 years.",
    },
  ];

  return (
    <section
      className="relative py-28 bg-[#f4f7fb] overflow-hidden"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

      {/* TOP HEADER */}
      <div className="relative text-center max-w-[760px] mx-auto px-4">

        {/* LABEL */}
        <p className="text-[10px] tracking-[3px] uppercase text-cyan-500 mb-5">

          Rescue Diver Confidence Program

        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-semibold text-[#0a0e27] leading-[1.18] tracking-[1px]">

          READY TO{" "}

          <span className="text-cyan-500">
            SAVE LIVES?
          </span>

          <br />

          JOIN THE ELITE.

        </h2>

        {/* DESCRIPTION */}
        <p className="text-[15px] md:text-[16px] text-gray-500 mt-8 leading-[2] tracking-[0.45px] max-w-[700px] mx-auto">

          This isn't just about diving.
          It's about becoming the calm,
          confident diver everyone trusts
          during real emergency situations.

        </p>

      </div>

      {/* MAIN GRID */}
      <div className="relative max-w-[980px] mx-auto grid md:grid-cols-2 gap-12 mt-16 px-4">

        {/* LEFT CARD */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center">

          {/* SMALL TITLE */}
          <h3 className="text-[22px] font-medium tracking-[0.7px] leading-[1.5] text-[#0a0e27]">

            Don't Take Our

            <br />

            <span className="font-semibold">
              Word For It.
            </span>

          </h3>

          {/* DESCRIPTION */}
          <p className="text-[13px] text-gray-500 mt-5 leading-[1.95] tracking-[0.35px] max-w-[340px] mx-auto">

            Real stories from divers who
            mastered underwater rescue,
            stress control, and emergency response.

          </p>

          {/* REVIEW BADGE */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#f4f7fb] px-5 py-3 rounded-full shadow-sm">

            <span className="text-[12px] tracking-[0.4px] font-medium text-[#0a0e27]">

              Excellent

            </span>

            <span className="text-yellow-400 text-xs tracking-[2px]">

              ★★★★★

            </span>

          </div>

          {/* TESTIMONIAL CARDS */}
          <div className="mt-8 grid grid-cols-2 gap-4">

            <div className="bg-[#f9fbfd] p-4 rounded-2xl text-left text-[11px] text-gray-500 leading-[1.85] tracking-[0.3px]">

              "Rescue drills felt incredibly real.
              The instructor support was outstanding."

            </div>

            <div className="bg-[#f9fbfd] p-4 rounded-2xl text-left text-[11px] text-gray-500 leading-[1.85] tracking-[0.3px]">

              "One of the most practical and
              confidence-building diving courses
              I've ever completed."

            </div>

          </div>

        </div>

        {/* RIGHT FAQ */}
        <div>

          {/* FAQ TITLE */}
          <h3 className="text-[13px] font-semibold tracking-[2px] uppercase text-[#0a0e27] mb-6">

            Commonly Asked Questions

          </h3>

          {/* FAQ LIST */}
          <div className="space-y-4">

            {faqs.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border px-5 py-5 cursor-pointer transition duration-300 ${
                  active === i
                    ? "border-cyan-400 bg-white shadow-sm"
                    : "border-gray-200 bg-white"
                }`}
                onClick={() => setActive(active === i ? -1 : i)}
              >

                {/* QUESTION */}
                <div className="flex justify-between items-center gap-4">

                  <p className="text-[14px] font-medium tracking-[0.4px] leading-[1.8] text-[#0a0e27]">

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
                  <p className="text-[13px] text-gray-500 mt-5 leading-[2] tracking-[0.35px] pr-6">

                    {item.a}

                  </p>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* FONT */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
        }
      `}</style>

    </section>
  );
}