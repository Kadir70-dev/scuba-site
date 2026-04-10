import { motion } from "framer-motion";
import { Shield, Leaf, Users, Lightbulb } from "lucide-react";

export default function BrandValues() {
  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Integrity",
      description: "Transparent and honest business practices that build trust with artisans, partners, and customers worldwide."
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Sustainability",
      description: "Environmental responsibility through organic materials, traditional techniques, and conscious consumption practices."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Empowerment",
      description: "Supporting artisan communities and entrepreneurs through fair trade, skill development, and market access."
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Innovation through Tradition",
      description: "Honoring heritage craftsmanship while embracing modern techniques and global market opportunities."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800">
            Our Values
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            The principles that guide every decision we make and every relationship we build 
            in our journey to connect tradition with innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-stone-50 rounded-full mb-6 text-stone-600 group-hover:bg-stone-100 transition-colors duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl mb-4 text-stone-800">{value.title}</h3>
              <p className="text-stone-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-stone-50 to-amber-50/50 rounded-2xl p-8 md:p-12">
            <blockquote className="font-serif text-xl md:text-2xl text-stone-700 mb-6 leading-relaxed">
              "Our mission is to create a bridge between the timeless artistry of our heritage 
              and the dynamic demands of the global fashion industry, ensuring that traditional 
              craftsmanship not only survives but thrives in the modern world."
            </blockquote>
            <cite className="text-stone-600">
              — Saima Anjum, Founder of Miraal
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}