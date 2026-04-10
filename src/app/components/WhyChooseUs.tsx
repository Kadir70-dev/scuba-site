import { motion } from 'framer-motion';
import { Award, Shield, Heart, TrendingUp, Users, Anchor } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'PADI 5-star certified center with award-winning instructors.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Premium equipment and strict safety protocols for every dive.',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Small group sizes ensuring individual attention and support.',
    },
    {
      icon: TrendingUp,
      title: 'Expert Training',
      description: '15+ years of experience training divers of all skill levels.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a global network of passionate diving enthusiasts.',
    },
    {
      icon: Anchor,
      title: 'Premium Locations',
      description: 'Access to exclusive dive sites and pristine underwater environments.',
    },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a]" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            rgba(0, 212, 255, 0.02) 100px,
            rgba(0, 212, 255, 0.02) 101px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 100px,
            rgba(0, 212, 255, 0.02) 100px,
            rgba(0, 212, 255, 0.02) 101px
          )`,
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
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Unmatched <span className="bg-gradient-to-r from-[#00d4ff] to-[#06b6d4] bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We combine safety, expertise, and passion to deliver unforgettable diving experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 group-hover:border-[#00d4ff]/50 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-[#00d4ff]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-4">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#06b6d4]/20 border border-[#00d4ff]/30">
                    <feature.icon className="w-8 h-8 text-[#00d4ff]" />
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
