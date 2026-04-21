"use client";

import { Shield, Clock, Monitor, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function EnrollmentSection() {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "All Pro-Grade Gear Included",
      tag: "ZERO FEES",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "1 Free Fun Dive in Fujairah",
      tag: "AED 200 VALUE",
    },
    {
      icon: <Monitor className="w-5 h-5" />,
      title: "Official PADI e-Learning Access",
      tag: "INSTANT",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Small Ratios (3 Ocean / 4 Pool)",
      tag: "BEST IN UAE",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "PADI License Valid Worldwide",
      tag: "LIFETIME VALIDITY",
    },
  ];

  return (
    <section className="py-28 bg-[#f4f7fb] relative">

      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-20 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0a0e27]">
          Enroll Now &{" "}
          <span className="text-cyan-500">Complete within 1 YEAR</span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          You aren't just buying a course; you are securing a lifetime credential.
          Get certified with zero hidden fees and exclusive dive access.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">

        {/* LEFT FEATURES */}
        <div className="space-y-5">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between px-6 py-5 rounded-xl border border-[#d9e3ea] bg-white shadow-sm transition"
            >
              <div className="flex items-center gap-4 text-[#0a0e27]">
                <div className="text-cyan-500">{item.icon}</div>
                <span className="text-sm md:text-base font-medium">
                  {item.title}
                </span>
              </div>

              <span className="text-cyan-500 text-xs font-semibold">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* VIDEO */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-[260px] md:h-[320px]"
              src="https://www.youtube.com/embed/8hP9D6kZseM"
              allowFullScreen
            />
          </div>

          {/* RATINGS */}
          <div className="flex gap-4 flex-wrap">

            <div className="flex-1 bg-white rounded-full px-6 py-4 text-center shadow border border-gray-200">
              <p className="text-sm font-semibold text-[#0a0e27]">
                4.9 ⭐⭐⭐⭐⭐
              </p>
              <p className="text-xs text-gray-500">
                Based on 1,054+ Reviews
              </p>
            </div>

            <div className="flex-1 bg-white rounded-full px-6 py-4 text-center shadow border border-gray-200">
              <p className="text-sm font-semibold text-[#0a0e27]">
                5.0 ⭐⭐⭐⭐⭐
              </p>
              <p className="text-xs text-gray-500">
                Based on 654+ Reviews
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 mt-6 flex-wrap">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition">
              BOOK NOW →
            </button>

            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-xl shadow">
              💬
            </div>

            <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-600 text-sm hover:bg-gray-100 transition">
              READ REAL DIVER REVIEWS
            </button>

          </div>

        </div>
      </div>

      {/* FLOATING CTA (BOTTOM LIKE SS) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">

        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white font-semibold shadow-xl">
          BOOK NOW →
        </button>

        <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-xl">
          💬
        </div>

      </div>

    </section>
  );
}