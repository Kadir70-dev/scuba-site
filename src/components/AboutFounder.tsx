import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function AboutFounder() {
  return (
    <section id="about-founder" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800">
              Meet the Founder
            </h2>
            
            <h3 className="text-xl md:text-2xl mb-4 text-stone-700">
              Saima Anjum
            </h3>
            
            <p className="text-stone-600 mb-6 leading-relaxed">
              Textile Entrepreneur | Fashion Market Strategist | Global Business Connector
            </p>
            
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                With over 5 years of experience in the textile industry, Saima Anjum brings together 
                a rich family legacy of craftsmanship with modern international business acumen. 
                Her journey spans from traditional Indian textile artistry to global fashion markets.
              </p>
              
              <p>
                Having gained international exposure through her work in Dubai and Mumbai, Saima 
                understands the intricate demands of global fashion trade while maintaining deep 
                respect for traditional craftsmanship and sustainable practices.
              </p>
              
              <p>
                Through Miraal, she bridges the gap between heritage artisans and contemporary 
                fashion entrepreneurs, creating pathways for authentic, sustainable textile trade 
                that honors both tradition and innovation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-stone-200 to-amber-100 rounded-lg transform rotate-3"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672512263546-99862fe07733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5b3VuZyUyMHdvbWFuJTIwZW50cmVwcmVuZXVyJTIwcG9ydHJhaXQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NTk2NzQyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Saima Anjum - Founder of Miraal"
                className="relative z-10 w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}