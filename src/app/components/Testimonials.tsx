import { motion } from "framer-motion";
import { useState } from "react";

export function Testimonials() {
  const [activeMainTab, setActiveMainTab] = useState("training environment");

  const trainingCards = [
    {
      title: "Dive Campus",
      subtitle: "Region's largest dive tank",
      desc: "4m deep · indoor · temperature controlled · underwater mirror for skill correction",
      other:
        "Outdoor/public pools and only 1.5–2m shallow limiting for buoyancy practice.",
    },
    {
      title: "Dive Campus",
      subtitle: "Central Dubai location",
      desc: "20–30 min from most major areas in Dubai",
      other:
        "Often inside communities — 40–60 min drive each way.",
    },
    {
      title: "Dive Campus",
      subtitle: "East Coast — on the reef in minutes",
      desc: "Just 5–7 min boat ride to prime dive sites",
      other:
        "30–40 min boat rides — more time on boat than underwater.",
    },
  ];

  const instructorCards = [
    {
      title: "Dive Campus",
      subtitle: "1:2 Instructor Ratio",
      desc: "Maximum 2 students per instructor for proper learning.",
      other: "Groups of 3–8 — harder to learn effectively.",
    },
    {
      title: "Dive Campus",
      subtitle: "Inhouse instructors",
      desc: "Professionally trained PADI instructors.",
      other: "Often outsourced freelancers.",
    },
    {
      title: "Dive Campus",
      subtitle: "Multi-lingual team",
      desc: "English · Arabic · Hindi · French",
      other: "Limited language support.",
    },
  ];

  const inclusionCards = [
    {
      title: "Dive Campus",
      subtitle: "Premium Gear",
      desc: "High quality gear included.",
      other: "Low quality or extra charges.",
    },
    {
      title: "Dive Campus",
      subtitle: "Learning Material",
      desc: "Included in course fee.",
      other: "Hidden charges.",
    },
    {
      title: "Dive Campus",
      subtitle: "Parking",
      desc: "Free parking available.",
      other: "Paid parking.",
    },
    {
      title: "Dive Campus",
      subtitle: "Bring a Friend",
      desc: "Free try dive included.",
      other: "Not included.",
    },
  ];

  const renderCards = (cards: any[]) => (
    <div className="flex justify-center w-full">

      <div
        className="grid gap-8 justify-center"
        style={{
          gridTemplateColumns: `repeat(${cards.length}, minmax(280px, 320px))`,
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="
              w-[300px]
              bg-white/10 backdrop-blur-md
              border border-white/20
              rounded-2xl
              p-8
              shadow-[0_10px_40px_rgba(0,0,0,0.4)]
              transition-all duration-300
              hover:border-cyan-300
            "
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              {card.title}
            </h3>

            <h4 className="text-xl font-semibold text-white mb-4">
              {card.subtitle}
            </h4>

            <p className="text-white/80 leading-7 mb-6">
              {card.desc}
            </p>

            <div className="w-full h-[2px] bg-cyan-300 mb-6 rounded-full" />

            <h5 className="text-lg font-semibold text-white mb-3">
              Others
            </h5>

            <p className="text-white/60 leading-7">
              {card.other}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45] overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-[1500px] mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center text-5xl font-semibold mb-8 text-white">
          Training quality <span className="text-cyan-300">RAISED.</span>
        </h2>

        <p className="text-center text-xl text-white/70 max-w-5xl mx-auto mb-16">
          Don’t fall for “small class size” and “unlimited training” claims.
          Here’s how we deliver excellence that truly matters.
        </p>

        {/* TABS */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          {[
            "TRAINING ENVIRONMENT",
            "INSTRUCTOR QUALITY",
            "INCLUSIONS",
          ].map((item, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveMainTab(item.toLowerCase())}
              className="relative text-lg font-semibold uppercase tracking-wide text-white/80 hover:text-white"
            >
              {item}

              {activeMainTab === item.toLowerCase() && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 w-full h-[3px] bg-cyan-300"
                />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {activeMainTab === "training environment" &&
          renderCards(trainingCards)}

        {activeMainTab === "instructor quality" &&
          renderCards(instructorCards)}

        {activeMainTab === "inclusions" &&
          renderCards(inclusionCards)}

      </div>
    </section>
  );
}