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
        "Outdoor/public pools and only 1.5–2m shallow limiting for buoyancy and equalisation practice.",
    },
    {
      title: "Dive Campus",
      subtitle: "Central Dubai location",
      desc: "20–30 min from most major areas in Dubai",
      other:
        "Often inside communities — 40–60 min drive each way before you're even in the water.",
    },
    {
      title: "Dive Campus",
      subtitle: "East Coast — on the reef in minutes",
      desc: "Just 5–7 min boat ride to prime dive sites",
      other:
        "30–40 min boat rides — you spend more time on a boat than underwater.",
    },
  ];

  const instructorCards = [
    {
      title: "Dive Campus",
      subtitle: "Guaranteed 1:2 (or less) instructor ratio",
      desc:
        "Maximum 2 students (OR less) per instructor FOR ALL beginner — train the right way in the right time.",
      other:
        "“Small Group Size” ranges from 3–8 students per instructor — harder to learn, easier to get lost in the group.",
    },
    {
      title: "Dive Campus",
      subtitle: "Inhouse male & female instructors",
      desc:
        "All training is conducted by DiveCampus trained PADI Instructors to ensure quality training.",
      other:
        "Limited availability as mostly outsourced to freelancers — often charged as an add-on or not available at all.",
    },
    {
      title: "Dive Campus",
      subtitle: "Multi-lingual team",
      desc: "English · Arabic · Hindi · Afrikaans · French",
      other: "Typically 1–2 languages limiting optimal learning.",
    },
  ];

  const inclusionCards = [
    {
      title: "Dive Campus",
      subtitle: "Premium Gear",
      desc:
        "All courses includes premium quality gear for you to train at no additional cost.",
      other:
        "Old/Low quality Scuba Gear sometimes at additional charges.",
    },
    {
      title: "Dive Campus",
      subtitle: "PADI eLearning/Materials",
      desc: "Included in course fee.",
      other: "Hidden charges, not included in course.",
    },
    {
      title: "Dive Campus",
      subtitle: "Parking",
      desc: "Free on-site parking.",
      other: "Paid or Public Parking.",
    },
    {
      title: "Dive Campus",
      subtitle: "Bring a friend for free",
      desc:
        "For every PADI Open Water course booked, get a complimentary try dive in our DiveTank for a friend redeemable anytime during your course duration.",
      other: "Not included.",
    },
  ];

  const renderCards = (cards: any[]) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-cyan-400 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-cyan-500 mb-4">
            {card.title}
          </h3>

          <h4 className="text-xl font-semibold text-[#082544] mb-4">
            {card.subtitle}
          </h4>

          <p className="text-gray-600 leading-7 mb-6">
            {card.desc}
          </p>

          <div className="w-full h-[2px] bg-cyan-400 mb-6 rounded-full" />

          <h5 className="text-lg font-semibold text-[#082544] mb-3">
            Others
          </h5>

          <p className="text-gray-500 leading-7">
            {card.other}
          </p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-[1500px] mx-auto px-6">

        <h2 className="text-center text-5xl font-semibold mb-8 text-[#082544]">
          Training quality <span className="text-cyan-500">RAISED.</span>
        </h2>

        <p className="text-center text-xl text-gray-600 max-w-5xl mx-auto mb-16">
          Don’t fall for “small class size” and “unlimited training” claims.
          Here’s how we deliver excellence that truly matters to your training.
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
              className="relative text-lg font-semibold uppercase tracking-wide text-[#082544]"
            >
              {item}

              {activeMainTab === item.toLowerCase() && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 w-full h-[3px] bg-cyan-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT SWITCH */}
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