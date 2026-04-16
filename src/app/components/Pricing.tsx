import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  const packages = [
    {
      name: "Explorer",
      price: "899",
      period: "per person",
      description: "Perfect for beginners ready to start their diving journey.",
      features: [
        "Open Water Certification",
        "4 Training Dives",
        "All Equipment Included",
        "Theory Materials",
        "Digital Certification Card",
      ],
      popular: false,
    },
    {
      name: "Adventurer",
      price: "1,499",
      period: "per person",
      description: "Advanced training with exclusive experiences.",
      features: [
        "Open Water + Advanced",
        "8 Training Dives",
        "Premium Equipment",
        "Night Dive Experience",
        "Underwater Photography",
        "Dive Log Book",
      ],
      popular: true,
    },
    {
      name: "Professional",
      price: "2,899",
      period: "per person",
      description: "Complete professional training.",
      features: [
        "Dive Master Course",
        "Unlimited Training",
        "Rescue Certification",
        "First Aid Training",
        "Internship",
        "Job Assistance",
      ],
      popular: false,
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden font-habara">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45]" />

      {/* GLOW */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-400/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 blur-[140px] rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-cyan-300 text-xs uppercase tracking-[3px]">
              Pricing Plans
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Choose Your <span className="text-cyan-300">Adventure</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Flexible packages designed for every level of diver.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
              className={`relative ${pkg.popular ? "lg:scale-105" : ""}`}
            >

              {/* MOST POPULAR */}
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-5 py-2 rounded-full bg-cyan-300 text-[#0b2c45] font-semibold text-xs flex items-center gap-2 shadow-lg">
                    <Sparkles size={14} />
                    Most Popular
                  </div>
                </div>
              )}

              {/* CARD */}
              <div className="
                rounded-2xl p-8 h-full flex flex-col
                bg-white/10 backdrop-blur-xl
                border border-white/20
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                transition-all duration-500
                hover:border-cyan-300/60
                hover:shadow-[0_20px_80px_rgba(0,255,255,0.15)]
              ">

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {pkg.name}
                </h3>

                <p className="text-white/50 text-sm mb-6">
                  {pkg.description}
                </p>

                {/* PRICE */}
                <div className="border-y border-white/10 py-6 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-cyan-300 text-lg">$</span>
                    <span className="text-5xl font-bold text-white tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-white/50 text-xs mt-1">{pkg.period}</p>
                </div>

                {/* FEATURES */}
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="text-cyan-300 w-5 h-5 mt-[2px]" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`
                    w-full mt-8 py-3 rounded-full font-semibold text-sm tracking-wide
                    transition-all duration-300
                    ${
                      pkg.popular
                        ? "bg-cyan-300 text-[#0b2c45] shadow-[0_10px_30px_rgba(0,255,255,0.3)]"
                        : "border border-cyan-300 text-white hover:bg-cyan-300/10"
                    }
                  `}
                >
                  Get Started
                </motion.button>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}