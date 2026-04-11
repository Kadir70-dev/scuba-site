import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
  const packages = [
    {
      name: 'Explorer',
      price: '899',
      period: 'per person',
      description: 'Perfect for beginners ready to start their diving journey.',
      features: [
        'Open Water Certification',
        '4 Training Dives',
        'All Equipment Included',
        'Theory Materials',
        'Digital Certification Card',
      ],
      popular: false,
    },
    {
      name: 'Adventurer',
      price: '1,499',
      period: 'per person',
      description: 'Advanced training with exclusive experiences.',
      features: [
        'Open Water + Advanced',
        '8 Training Dives',
        'Premium Equipment',
        'Night Dive Experience',
        'Underwater Photography',
        'Dive Log Book',
      ],
      popular: true,
    },
    {
      name: 'Professional',
      price: '2,899',
      period: 'per person',
      description: 'Complete professional training.',
      features: [
        'Dive Master Course',
        'Unlimited Training',
        'Rescue Certification',
        'First Aid Training',
        'Internship',
        'Job Assistance',
      ],
      popular: false,
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">

      {/* 🔥 HARABARA BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#18476D] via-[#123a5a] to-[#0b2c45]" />

      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />

      <div className="relative max-w-[1600px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-cyan-300 text-sm uppercase tracking-wider">
              Pricing Plans
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Choose Your <span className="text-cyan-300">Adventure</span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Flexible packages designed for every level of diver.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-8">

          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`relative group ${pkg.popular ? 'lg:scale-105' : ''}`}
            >

              {/* MOST POPULAR */}
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="px-5 py-2 rounded-full bg-cyan-300 text-[#0b2c45] font-bold text-sm flex items-center gap-2">
                    <Sparkles size={14} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="
                rounded-2xl p-8
                bg-white/10 backdrop-blur-md
                border border-white/20
                shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                transition-all duration-500
                hover:border-cyan-300
              ">

                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>

                <p className="text-white/60 text-sm mb-6">
                  {pkg.description}
                </p>

                {/* PRICE */}
                <div className="border-y border-white/10 py-6 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-cyan-300 text-lg">$</span>
                    <span className="text-5xl font-bold text-white">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">{pkg.period}</p>
                </div>

                {/* FEATURES */}
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="text-cyan-300 w-5 h-5 mt-1" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`
                    w-full mt-8 py-4 rounded-xl font-bold
                    ${
                      pkg.popular
                        ? 'bg-cyan-300 text-[#0b2c45]'
                        : 'border border-cyan-300 text-white hover:bg-cyan-300/10'
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