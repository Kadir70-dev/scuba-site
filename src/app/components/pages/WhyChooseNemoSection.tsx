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
    <>
      <section
        className="relative py-32 bg-[#02131d] text-white overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* SMALL LABEL */}
            <p className="text-cyan-400 tracking-[4px] text-[11px] mb-4 uppercase">
              LEARN AT YOUR OWN PACE
            </p>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                DiveCampus
              </span>
            </h2>

            {/* DESC */}
            <p className="text-white/60 mb-10 max-w-lg text-sm md:text-base leading-relaxed">
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
                  className="flex gap-4 items-start"
                >
                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 text-cyan-400 shadow-inner">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="font-semibold mb-1 text-white">
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
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.7)]">
              <img
                src="/A59I9512.jpg"
                alt="Divers"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* GLOW */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/20 blur-[120px] rounded-full" />
          </motion.div>

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