"use client";

import { motion } from "framer-motion";
import { Clock, Users, ShieldCheck, Award } from "lucide-react";

export function WhyChooseNemoSection() {
  const features = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Unlimited Pool Practice",
      desc: "Struggling with buoyancy? We extend your pool sessions for free until you feel 100% safe.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Best Student to Instructor Ratio in UAE",
      desc: "Max 4 students per instructor in Pool & 3 in Ocean. You get direct attention, not just a generic briefing.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Free Gear Rentals",
      desc: "No hidden rental costs. Pro-grade, sanitized equipment is provided for every dive.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Scuba Diver for Life",
      desc: "Earn a globally recognized PADI certification. Valid worldwide, forever.",
    },
  ];

  return (
    <section className="relative py-32 bg-[#02131d] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* SMALL LABEL */}
          <p className="text-cyan-400 tracking-[3px] text-xs mb-4">
            LEARN AT YOUR OWN PACE
          </p>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose DiveCampus
          </h2>

          {/* DESC */}
          <p className="text-white/60 mb-10 max-w-lg">
            We built our training around your comfort, not our schedule.
            Unlike other centers that rush large groups, we offer a personalized
            environment where you dictate the pace.
          </p>

          {/* FEATURES */}
          <div className="space-y-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
            <img
              src="/A59I9512.jpg"   // 🔥 replace if needed
              alt="Divers"
              className="w-full h-full object-cover"
            />
          </div>

          {/* GLOW EFFECT */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/20 blur-[100px] rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}