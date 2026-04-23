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
    { q: "Is the course physically hard?", a: "It’s manageable for most people with basic fitness. Instructors guide you step by step." },
    { q: "How many days does it take?", a: "Usually 2–3 days depending on schedule and pace." },
    { q: "Can I request a female instructor?", a: "Yes, we can arrange that based on availability." },
    { q: "What if I feel nervous about drills?", a: "Totally normal. We train you gradually and safely." },
    { q: "Do I need to bring my own gear?", a: "No, all required gear is included." },
    { q: "What is the minimum age?", a: "Minimum age is 12 years." },
  ];

  return (
    <section className="py-20 bg-[#f4f7fb]" style={{ fontFamily: "Harabara, sans-serif" }}>
      
      {/* TOP HEADER */}
      <div className="text-center max-w-[700px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0a0e27]">
          READY TO <span className="text-cyan-500">SAVE LIVES?</span>
          <br />
          JOIN THE ELITE.
        </h2>

        <p className="text-[12px] text-gray-500 mt-3">
          This isn't just about diving; it's about becoming the person everyone looks to in an emergency.
          Master the skills to protect yourself and others.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-10 mt-12 px-4">

        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">

          <h3 className="text-sm font-medium text-[#0a0e27]">
            Don't Take Our <br /> <span className="font-semibold">Word For It.</span>
          </h3>

          <p className="text-[11px] text-gray-500 mt-2">
            Real stories from divers who mastered self-rescue and emergency response.
          </p>

          {/* REVIEW BADGE */}
          <div className="mt-6 inline-flex items-center gap-3 bg-[#f4f7fb] px-4 py-2 rounded-full shadow-sm">
            <span className="text-xs font-medium">Excellent</span>
            <span className="text-yellow-400 text-xs">★★★★★</span>
          </div>

          {/* FAKE TESTIMONIAL CARDS */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-[#f9fbfd] p-3 rounded-xl text-left text-[10px] text-gray-500">
              "Rescue drills felt real. Instructor was amazing."
            </div>
            <div className="bg-[#f9fbfd] p-3 rounded-xl text-left text-[10px] text-gray-500">
              "Best diving course I've taken. Super practical."
            </div>
          </div>

        </div>

        {/* RIGHT FAQ */}
        <div>

          <h3 className="text-sm font-semibold text-[#0a0e27] mb-4">
            COMMONLY ASKED QUESTIONS
          </h3>

          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl border p-4 cursor-pointer transition ${
                  active === i
                    ? "border-cyan-400 bg-white shadow-sm"
                    : "border-gray-200 bg-white"
                }`}
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium text-[#0a0e27]">
                    {item.q}
                  </p>

                  {active === i ? (
                    <X className="w-4 h-4 text-cyan-500" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-400" />
                  )}
                </div>

                {active === i && (
                  <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">
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