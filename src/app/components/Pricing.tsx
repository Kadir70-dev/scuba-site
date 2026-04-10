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
      gradient: 'from-[#0891b2] to-[#0e7490]',
    },
    {
      name: 'Adventurer',
      price: '1,499',
      period: 'per person',
      description: 'Our most popular package with advanced training and exclusive experiences.',
      features: [
        'Open Water + Advanced',
        '8 Training Dives',
        'Premium Equipment',
        'Night Dive Experience',
        'Underwater Photography Session',
        'Dive Log Book',
        'Resort Transfer',
      ],
      popular: true,
      gradient: 'from-[#00d4ff] to-[#06b6d4]',
    },
    {
      name: 'Professional',
      price: '2,899',
      period: 'per person',
      description: 'Complete professional training for aspiring dive masters.',
      features: [
        'Full Dive Master Course',
        'Unlimited Training Dives',
        'Professional Equipment Kit',
        'Rescue Diver Certification',
        'First Aid Training',
        'Internship Opportunity',
        'Job Placement Assistance',
        'Lifetime Support',
      ],
      popular: false,
      gradient: 'from-[#06b6d4] to-[#0891b2]',
    },
  ];

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a]" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-[#00d4ff]/20 mb-6">
            <span className="text-[#00d4ff] text-sm font-medium tracking-wider uppercase">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] bg-clip-text text-transparent">Adventure</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Flexible packages designed to match your diving ambitions and experience level.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative group ${pkg.popular ? 'lg:scale-105' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#0a0e27]" />
                    <span className="text-[#0a0e27] font-bold text-sm uppercase tracking-wide">Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`relative overflow-hidden rounded-2xl p-8 lg:p-10 backdrop-blur-xl bg-white/5 border-2 ${
                pkg.popular ? 'border-[#00d4ff]' : 'border-white/10'
              } group-hover:border-[#00d4ff]/50 transition-all duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-white/60 text-sm">{pkg.description}</p>
                  </div>

                  <div className="py-6 border-y border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#00d4ff] text-lg font-bold">$</span>
                      <span className="text-5xl font-bold text-white">{pkg.price}</span>
                    </div>
                    <div className="text-white/60 text-sm mt-1">{pkg.period}</div>
                  </div>

                  <ul className="space-y-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-1 rounded-full bg-[#00d4ff]/20">
                          <Check className="w-4 h-4 text-[#00d4ff]" />
                        </div>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-4 mt-8 rounded-xl font-bold text-lg relative overflow-hidden group/btn ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] text-[#0a0e27]'
                        : 'border-2 border-[#00d4ff]/50 text-white hover:bg-[#00d4ff]/10'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {pkg.popular && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ['-200%', '200%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                    )}
                    <span className="relative">Get Started</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
